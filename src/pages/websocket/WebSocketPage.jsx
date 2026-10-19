import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Input, Space, Tag, Typography } from "antd";
import {
  ArrowLeftOutlined,
  LinkOutlined,
  SendOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./WebSocketPage.css";

const { Title, Paragraph, Text } = Typography;
const endpoint = "ws://127.0.0.1:3002/ws";
const statusLabels = {
  idle: "未连接",
  connecting: "连接中",
  open: "已连接",
  closed: "已断开",
};

export default function WebSocketPage() {
  const socketRef = useRef(null);
  const messageIdRef = useRef(0);
  const [status, setStatus] = useState("idle");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  // WebSocket 连接对象不参与渲染，放在 ref 中；离开页面时关闭它，避免后台继续收消息。
  useEffect(
    () => () => {
      socketRef.current?.close();
      socketRef.current = null;
    },
    [],
  );

  const addMessage = (source, text) => {
    messageIdRef.current += 1;
    const id = messageIdRef.current;
    // 只保留最近 40 条，防止长时间演示后消息列表无限增长。
    setMessages((previous) => [...previous, { id, source, text }].slice(-40));
  };

  const handleConnect = () => {
    // 重连前先关闭旧连接；旧事件回调会通过 ref 比较被忽略。
    socketRef.current?.close();
    const socket = new WebSocket(endpoint);
    socketRef.current = socket;
    setStatus("connecting");
    setError("");
    setMessages([]);

    // 只有握手成功、readyState 变为 OPEN 后才能调用 send()。
    socket.onopen = () => {
      console.log("WebSocket connected,连接成功！！！！");
      if (socketRef.current === socket) setStatus("open");
    };
    socket.onmessage = (event) => {
      console.log("WebSocket message received:", event);
      if (socketRef.current !== socket) return;
      // 演示服务发送 JSON；若接入普通文本服务，仍可显示原始消息。
      let payload;
      try {
        payload = JSON.parse(event.data);
      } catch {
        payload = { type: "server", text: event.data };
      }
      addMessage(payload.type || "server", payload.text ?? event.data);
    };
    socket.onerror = () => {
      console.error(
        "WebSocket error,连接或传输失败，请确认已运行 npm run dev 或 npm run websocket。",
      );
      if (socketRef.current === socket)
        setError(
          "连接或传输失败，请确认已运行 npm run dev 或 npm run websocket。",
        );
    };
    socket.onclose = (event) => {
      console.log("WebSocket closed,连接已关闭，代码：", event.code);
      if (socketRef.current !== socket) return;
      socketRef.current = null;
      setStatus("closed");
      addMessage("system", `连接已关闭（代码 ${event.code}）。`);
      // 浏览器 WebSocket 不会自动重连，需要用户点击“重新连接”。
    };
  };

  const handleSend = () => {
    const text = input.trim();
    // 按钮禁用之外再检查一次连接状态，避免关闭瞬间调用 send()。
    if (!text || socketRef.current?.readyState !== WebSocket.OPEN) return;
    socketRef.current.send(text);
    addMessage("me", text);
    setInput("");
  };

  const handleDisconnect = () => {
    const socket = socketRef.current;
    socketRef.current = null;
    // 1000 表示正常关闭；先清空 ref，避免随后到达的旧回调覆盖页面状态。
    socket?.close(1000, "用户主动断开");
    setStatus("closed");
    setError("");
  };

  return (
    <main className="websocket-page">
      <Link to="/" className="websocket-back">
        <ArrowLeftOutlined /> 返回入口
      </Link>
      <div className="websocket-heading">
        <div>
          <Text type="secondary">FULL-DUPLEX COMMUNICATION</Text>
          <Title>WebSocket 学习与演示</Title>
          <Paragraph>
            建立一次连接后，浏览器和服务端都能随时发送消息。点击连接、发送文本，观察回显与服务端主动推送。
          </Paragraph>
        </div>
        <Tag
          color={
            status === "open"
              ? "success"
              : status === "connecting"
                ? "processing"
                : "default"
          }
        >
          {statusLabels[status]}
        </Tag>
      </div>

      <div className="websocket-grid">
        <Card title="动手体验" className="websocket-card">
          <Paragraph>
            本地地址：<code>{endpoint}</code>
          </Paragraph>
          <Space wrap>
            <Button
              type="primary"
              icon={<LinkOutlined />}
              onClick={handleConnect}
              disabled={status === "connecting"}
            >
              {status === "open" ? "重新连接" : "连接"}
            </Button>
            <Button
              icon={<StopOutlined />}
              onClick={handleDisconnect}
              disabled={status !== "open" && status !== "connecting"}
            >
              断开
            </Button>
          </Space>
          <div className="websocket-send">
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onPressEnter={handleSend}
              placeholder="输入要发送给服务端的文字"
              maxLength={500}
              aria-label="发送内容"
            />
            <Button
              icon={<SendOutlined />}
              onClick={handleSend}
              disabled={status !== "open" || !input.trim()}
            >
              发送
            </Button>
          </div>
          {error && (
            <Alert
              type="warning"
              showIcon
              message={error}
              className="websocket-error"
            />
          )}
          <Paragraph className="websocket-tip">
            连接后每 5 秒收到服务端主动推送；发送文字后会收到回显。
          </Paragraph>
        </Card>

        <Card
          title="消息记录（最近 40 条）"
          className="websocket-card websocket-log"
        >
          {messages.length === 0 ? (
            <div className="websocket-empty">
              连接后，双向消息会显示在这里。
            </div>
          ) : (
            <ul aria-live="polite">
              {messages.map((message) => (
                <li key={message.id}>
                  <Tag
                    color={
                      message.source === "me"
                        ? "blue"
                        : message.source === "push"
                          ? "green"
                          : "default"
                    }
                  >
                    {message.source === "me"
                      ? "我发送"
                      : message.source === "push"
                        ? "主动推送"
                        : message.source === "echo"
                          ? "服务端回显"
                          : "系统"}
                  </Tag>
                  <span>{message.text}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <div className="websocket-guide">
        <Card title="如何使用" className="websocket-card">
          <ol>
            <li>
              <code>new WebSocket(url)</code> 发起 HTTP Upgrade
              握手；服务端同意后返回 <code>101 Switching Protocols</code>。
            </li>
            <li>
              在 <code>onopen</code> 后用 <code>send(data)</code>{" "}
              发送文本或二进制数据；用 <code>onmessage</code> 接收消息。
            </li>
            <li>
              用 <code>onerror</code> 处理异常、<code>onclose</code>{" "}
              得知关闭；离开页面时调用 <code>close()</code>。
            </li>
            <li>
              <code>readyState</code> 依次表示
              CONNECTING、OPEN、CLOSING、CLOSED；只有 OPEN 状态可以发送。
            </li>
          </ol>
          <pre className="websocket-code">{`const socket = new WebSocket('ws://127.0.0.1:3002/ws');
socket.onopen = () => socket.send('你好');
socket.onmessage = (event) => console.log(event.data);
socket.onerror = () => console.error('连接出错');
socket.onclose = () => console.log('连接已关闭');
// 不再需要连接时：socket.close(1000);`}</pre>
        </Card>
        <Card title="适用场景与注意事项" className="websocket-card">
          <ul>
            <li>
              适合聊天、协作编辑、实时游戏等需要双方频繁通信的场景；只需服务端单向推送时可考虑
              SSE。
            </li>
            <li>
              生产环境的 HTTPS 页面应使用 <code>wss://</code>；浏览器原生
              WebSocket 构造函数不能直接设置任意请求头。
            </li>
            <li>
              浏览器连接断开后不会自动重连；业务需要自行处理重连、身份校验、心跳和消息恢复。
            </li>
            <li>
              协议支持文本与二进制帧；本页演示只发送文本，服务端用{" "}
              <code>ws</code> 库实现回显与主动推送。
            </li>
          </ul>
        </Card>
      </div>
    </main>
  );
}
