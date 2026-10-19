import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { WebSocket, WebSocketServer } from 'ws';

const PORT = 3002;

export function startWebSocketServer(port = PORT) {
  const server = new WebSocketServer({ host: '127.0.0.1', port, path: '/ws', maxPayload: 16 * 1024 });

  server.on('connection', (socket) => {
    // 握手完成后，服务端可以不等待客户端请求，直接向这条连接推送消息。
    socket.send(JSON.stringify({ type: 'system', text: 'WebSocket 已连接，可以发送消息。' }));

    // 定时主动推送用于演示全双工：即使客户端不发送内容，也能持续收到服务端消息。
    const pushTimer = setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'push', text: `服务端主动推送：${new Date().toLocaleTimeString('zh-CN')}` }));
      }
    }, 5000);

    socket.on('message', (data, isBinary) => {
      // 页面示例只发送 UTF-8 文本；二进制帧不参与本次回显演示。
      if (isBinary) {
        socket.send(JSON.stringify({ type: 'error', text: '此演示只接收文本消息。' }));
        return;
      }
      socket.send(JSON.stringify({ type: 'echo', text: `服务端回显：${data.toString()}` }));
    });

    // 连接关闭或出错时停止定时推送，避免为已离开的页面保留计时器。
    socket.on('close', () => clearInterval(pushTimer));
    socket.on('error', (error) => console.error('WebSocket 连接错误：', error));
  });

  return new Promise((resolveServer, reject) => {
    server.once('error', reject);
    server.once('listening', () => {
      server.off('error', reject);
      console.log(`WebSocket 模拟服务：ws://127.0.0.1:${server.address().port}/ws`);
      resolveServer(server);
    });
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  startWebSocketServer().catch((error) => {
    console.error('WebSocket 服务启动失败：', error);
    process.exitCode = 1;
  });
}
