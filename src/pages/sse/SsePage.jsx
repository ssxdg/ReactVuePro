import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Card, Space, Tag, Typography } from 'antd';
import { ArrowLeftOutlined, ClearOutlined, ReloadOutlined, StopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './SsePage.css';

const { Title, Paragraph, Text } = Typography;
const endpoint = 'http://127.0.0.1:3001/events';
const statusLabels = { connecting: '连接中', open: '已连接', retrying: '自动重连中', idle: '已断开' };
const statusColors = { connecting: 'processing', open: 'success', retrying: 'warning', idle: 'default' };

export default function SsePage() {
  const [isActive, setIsActive] = useState(true);
  const [connectionVersion, setConnectionVersion] = useState(0);
  const [status, setStatus] = useState('connecting');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const messageIdRef = useRef(0);

  useEffect(() => {
    if (!isActive) return undefined;

    // 浏览器原生 EventSource 用 GET 建立长连接，并在连接意外中断后自动重连。
    // 组件卸载或用户主动断开时必须 close，否则旧连接仍会持续接收消息。
    const source = new EventSource(endpoint);
    let isCurrent = true;
    source.onopen = () => {
      if (!isCurrent) return;
      setStatus('open');
      setError('');
    };

    const handleMessage = (event) => {
      if (!isCurrent) return;
      messageIdRef.current += 1;
      const messageKey = messageIdRef.current;
      // 只保留最近 30 条消息，避免长时间学习演示持续累积浏览器内存。
      setMessages((previous) => [{
        key: messageKey,
        type: event.type,
        id: event.lastEventId,
        data: event.data,
        time: new Date().toLocaleTimeString('zh-CN')
      }, ...previous].slice(0, 30));
    };
    source.onmessage = handleMessage;
    // 服务端的 event: notice 是具名事件，需要显式监听；普通 data 消息由 onmessage 接收。
    source.addEventListener('notice', handleMessage);
    source.onerror = () => {
      if (!isCurrent) return;
      setStatus('retrying');
      setError('连接暂时中断，浏览器会自动重试。请确认已运行 npm run dev 或 npm run sse。');
    };

    return () => {
      isCurrent = false;
      source.close();
    };
  }, [isActive, connectionVersion]);

  const handleReconnect = () => {
    setMessages([]);
    setError('');
    setStatus('connecting');
    setIsActive(true);
    setConnectionVersion((version) => version + 1);
  };

  const handleDisconnect = () => {
    setIsActive(false);
    setStatus('idle');
    setError('');
  };

  return (
    <main className='sse-page'>
      <Link to='/' className='sse-back'><ArrowLeftOutlined /> 返回入口</Link>
      <div className='sse-heading'>
        <div>
          <Text type='secondary'>SERVER-SENT EVENTS</Text>
          <Title>SSE 协议学习与演示</Title>
          <Paragraph>打开页面后，浏览器连接项目内置的 Node 模拟服务；服务端每两秒推送一条消息，每五条发送一次具名事件。</Paragraph>
        </div>
        <Tag color={statusColors[status]}>{statusLabels[status]}</Tag>
      </div>

      <div className='sse-grid'>
        <Card title='实时连接' className='sse-panel'>
          <Paragraph>模拟接口：<code>{endpoint}</code></Paragraph>
          <Space className='sse-actions' wrap>
            <Button type='primary' icon={<ReloadOutlined />} onClick={handleReconnect}>重新连接</Button>
            <Button icon={<StopOutlined />} onClick={handleDisconnect} disabled={!isActive}>断开</Button>
            <Button icon={<ClearOutlined />} onClick={() => setMessages([])} disabled={messages.length === 0}>清空消息</Button>
          </Space>
          {error && <Alert className='sse-alert' type='warning' showIcon message={error} />}
          <Paragraph className='sse-hint'>可在消息中观察 <code>message</code> 和 <code>notice</code> 两种事件。断开连接后消息会保留，方便对照学习。</Paragraph>
        </Card>

        <Card title={`收到的消息（最近 ${messages.length} 条）`} className='sse-panel sse-messages'>
          {messages.length === 0 ? (
            <div className='sse-empty'>等待服务端推送消息…</div>
          ) : (
            <ul className='sse-message-list' aria-live='polite'>
              {messages.map((message) => (
                <li key={message.key} className='sse-message'>
                  <div className='sse-message-meta'><Tag>{message.type}</Tag><span>{message.time}</span><span>ID: {message.id}</span></div>
                  <pre>{message.data}</pre>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <div className='sse-knowledge'>
        <Card title='SSE 是什么？' className='sse-example'>
          <Paragraph>SSE（Server-Sent Events）让服务端沿着一个持续的 HTTP 响应，单向向浏览器推送文本事件。浏览器使用 <code>EventSource</code> 接收消息，适合通知、进度、日志和数据更新。</Paragraph>
          <Paragraph>它只负责服务端到浏览器的推送。若客户端也需要持续发送消息，可使用 WebSocket；若只需要偶尔获取结果，普通请求或轮询也足够。</Paragraph>
        </Card>
        <Card title='消息格式与关键字段' className='sse-example'>
          <pre>{'event: notice\nid: 5\ndata: {"text":"这是一条通知"}\nretry: 3000\n\n'}</pre>
          <ul className='sse-facts'>
            <li><code>data</code>：消息内容，可出现多行；末尾空行表示这一条事件结束。</li>
            <li><code>event</code>：事件名称；省略时触发 <code>onmessage</code>，指定后用 <code>addEventListener</code> 监听。</li>
            <li><code>id</code>：事件编号；重连时浏览器可通过 <code>Last-Event-ID</code> 告诉服务端上次收到的位置。</li>
            <li><code>retry</code>：建议的自动重连等待时间，单位为毫秒。</li>
          </ul>
        </Card>
        <Card title='连接流程与使用要点' className='sse-example'>
          <ol className='sse-facts'>
            <li>浏览器用 GET 请求连接接口，服务端返回 <code>Content-Type: text/event-stream</code> 并保持响应不断开。</li>
            <li>服务端持续写入事件；以冒号开头的注释可用作心跳，不会显示为消息。</li>
            <li>网络中断时 <code>EventSource</code> 自动重连；主动离开页面时调用 <code>close()</code> 释放连接。</li>
            <li>跨域访问需要服务端允许 CORS；代理服务器还应关闭响应缓冲，避免消息积压后一起到达。</li>
          </ol>
          <Paragraph className='sse-hint'>浏览器原生 <code>EventSource</code> 只使用 GET，不能自定义请求头，传输内容以 UTF-8 文本为主。需要带凭证的跨域连接时，服务端须明确允许来源与凭证，不能使用通配符来源。</Paragraph>
          <Paragraph className='sse-hint'>本项目的模拟服务会展示 <code>Last-Event-ID</code>，但不保存历史事件；实际业务如需断线补发，需要服务端按 ID 存储并重放消息。</Paragraph>
        </Card>
      </div>
    </main>
  );
}
