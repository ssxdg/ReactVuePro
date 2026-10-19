import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Card, Space, Tag, Typography } from 'antd';
import { ArrowLeftOutlined, ClearOutlined, PlayCircleOutlined, ReloadOutlined, StopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './SsePage.css';

const { Title, Paragraph, Text } = Typography;
const endpoint = 'http://127.0.0.1:3001/events';
const statusLabels = { connecting: '连接中', open: '推送中', retrying: '自动重连中', idle: '未连接', completed: '已完成' };
const statusColors = { connecting: 'processing', open: 'success', retrying: 'warning', idle: 'default', completed: 'success' };

export default function SsePage() {
  const [isActive, setIsActive] = useState(false);
  const [connectionVersion, setConnectionVersion] = useState(0);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const [combinedMessages, setCombinedMessages] = useState('');
  const messageIdRef = useRef(0);

  useEffect(() => {
    // 用户主动断开后不再创建 EventSource；React 会先执行上一次 effect 的清理函数。
    if (!isActive) return undefined;

    // 初次进入页面不请求；点击“开始”或“重新连接”后才创建新连接。
    // EventSource 会向固定地址发送 GET，并在非主动断线后按服务端的 retry 建议自动重连。
    const source = new EventSource(endpoint);
    // React effect 清理后，旧连接的异步回调不能再修改当前页面的状态。
    let isCurrent = true;

    // HTTP 长连接建立成功或自动重连成功时，恢复“已连接”状态并清除旧错误。
    source.onopen = () => {
      if (!isCurrent) return;
      setStatus('open');
      setError('');
    };

    // 普通 message 携带文章片段，收到后同时更新逐条列表和拼接结果。
    const handleMessage = (event) => {
      // 切换连接后，忽略尚未处理完的旧连接消息，避免把它混入新连接的结果。
      if (!isCurrent) return;
      // 使用递增编号作为 React 列表 key；即使两条消息同一毫秒到达也不会重复。
      messageIdRef.current += 1;
      const messageKey = messageIdRef.current;
      // 新消息放在列表最前面；列表只保留最近 30 条以控制逐条消息区域的渲染量。
      setMessages((previous) => [{
        key: messageKey,
        // type 是事件类型；lastEventId 来自服务端发送的 id 字段。
        type: event.type,
        id: event.lastEventId,
        data: event.data,
        time: new Date().toLocaleTimeString('zh-CN')
      }, ...previous].slice(0, 30));
      // 拼接区只接收普通 message 事件，完成事件不属于文章正文。
      if (event.type !== 'message') return;
      try {
        // 服务端的 data 是 JSON 字符串，解析后只提取其中的 text 字段。
        const payload = JSON.parse(event.data);
        if (typeof payload?.text !== 'string' || !payload.text) return;
        // 原文的标点和换行已经包含在片段内，直接连接 text 才能完整还原原文。
        setCombinedMessages((previous) => previous + payload.text);
      } catch {
        // 无效 JSON 不影响连接和逐条列表，但明确提示该消息未进入拼接区。
        setError('收到非 JSON 消息，已保留在逐条列表中，未加入拼接结果。');
      }
    };
    // 未指定 event 字段的 SSE 消息会触发 onmessage。
    source.onmessage = handleMessage;
    // 服务端发送最后一段后会发出 done；立即关闭连接，避免浏览器自动重连重复播放。
    source.addEventListener('done', () => {
      if (!isCurrent) return;
      isCurrent = false;
      source.close();
      setIsActive(false);
      setStatus('completed');
      setError('');
    });

    // 网络或服务异常时 EventSource 会自动重连；保留已收到的消息供观察。
    source.onerror = () => {
      if (!isCurrent) return;
      setStatus('retrying');
      setError('连接暂时中断，浏览器会自动重试。请确认已运行 npm run dev 或 npm run sse。');
    };

    // 组件卸载、用户断开或重新连接时，先让旧回调失效，再释放 HTTP 连接。
    return () => {
      isCurrent = false;
      source.close();
    };
  // isActive 控制是否连接；connectionVersion 递增可在“已连接”时强制换一条新连接。
  }, [isActive, connectionVersion]);

  const handleStart = () => {
    // 开始或手动重连代表一次新的演示，因此先清空旧的展示结果。
    setMessages([]);
    setCombinedMessages('');
    setError('');
    setStatus('connecting');
    // 从初始或主动断开的状态启用连接。
    setIsActive(true);
    // 即使当前已连接，递增版本号也会触发 effect 清理旧连接并创建新连接。
    setConnectionVersion((version) => version + 1);
  };

  const handleDisconnect = () => {
    // 关闭连接，但保留已收到的消息与拼接结果，便于暂停后查看。
    setIsActive(false);
    setStatus('idle');
    setError('');
  };

  const handleClearMessages = () => {
    // 两个展示区共用同一次清空操作，避免内容出现不一致。
    setMessages([]);
    setCombinedMessages('');
  };

  return (
    <main className='sse-page'>
      <Link to='/' className='sse-back'><ArrowLeftOutlined /> 返回入口</Link>
      <div className='sse-heading'>
        <div>
          <Text type='secondary'>SERVER-SENT EVENTS</Text>
          <Title>SSE 协议学习与演示</Title>
          <Paragraph>点击“开始”后，Node 服务每 500 毫秒推送最多 20 个字；全文输出完成后自动停止。</Paragraph>
        </div>
        <Tag color={statusColors[status]}>{statusLabels[status]}</Tag>
      </div>

      <div className='sse-grid'>
        <Card title='实时连接' className='sse-panel'>
          <Paragraph>模拟接口：<code>{endpoint}</code></Paragraph>
          <Space className='sse-actions' wrap>
            <Button type='primary' icon={isActive ? <ReloadOutlined /> : <PlayCircleOutlined />} onClick={handleStart}>{isActive ? '重新连接' : status === 'completed' ? '重新播放' : '开始'}</Button>
            <Button icon={<StopOutlined />} onClick={handleDisconnect} disabled={!isActive}>断开</Button>
            <Button icon={<ClearOutlined />} onClick={handleClearMessages} disabled={messages.length === 0 && !combinedMessages}>清空消息</Button>
          </Space>
          {error && <Alert className='sse-alert' type='warning' showIcon message={error} />}
          <Paragraph className='sse-hint'>每条 <code>message</code> 的 <code>data.text</code> 是一段原文；收到 <code>done</code> 后连接自动关闭。手动断开后已收到的内容会保留。</Paragraph>
        </Card>

        <Card title={`收到的消息（最近 ${messages.length} 条）`} className='sse-panel sse-messages'>
          {messages.length === 0 ? (
            <div className='sse-empty'>{isActive ? '等待服务端推送消息…' : '点击“开始”后接收服务端消息。'}</div>
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

      <Card title='消息拼接结果（仅 message 的 data.text）' className='sse-panel sse-combined'>
        {combinedMessages ? <pre>{combinedMessages}</pre> : <div className='sse-combined-empty'>开始连接后，这里只会追加普通消息中的 text 内容。</div>}
      </Card>

      <div className='sse-knowledge'>
        <Card title='SSE 是什么？' className='sse-example'>
          <Paragraph>SSE（Server-Sent Events）让服务端沿着一个持续的 HTTP 响应，单向向浏览器推送文本事件。浏览器使用 <code>EventSource</code> 接收消息，适合通知、进度、日志和数据更新。</Paragraph>
          <Paragraph>它只负责服务端到浏览器的推送。若客户端也需要持续发送消息，可使用 WebSocket；若只需要偶尔获取结果，普通请求或轮询也足够。</Paragraph>
        </Card>
        <Card title='消息格式与关键字段' className='sse-example'>
          <pre>{'id: 5\ndata: {"text":"一段文章内容"}\n\nevent: done\ndata: {"total":25}\n\n'}</pre>
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
          <Paragraph className='sse-hint'>本项目的模拟服务不保存历史事件，断线重连会从头播放；实际业务如需断线补发，需要服务端根据 <code>Last-Event-ID</code> 存储并重放消息。</Paragraph>
        </Card>
      </div>
    </main>
  );
}
