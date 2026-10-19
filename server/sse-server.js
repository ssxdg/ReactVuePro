import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const PORT = 3001;
let nextEventId = 1;

export function startSseServer() {
  const server = createServer((request, response) => {
    if (request.url !== '/events' || request.method !== 'GET') {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('未找到该接口');
      return;
    }

    // SSE 是持续的 HTTP 响应：必须声明 text/event-stream，且禁用缓存和代理缓冲。
    // 演示服务与 Vite 分别运行在 3001/3000 端口，因此允许本地页面跨域读取事件流。
    response.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'X-Accel-Buffering': 'no'
    });
    response.flushHeaders();

    // 每个字段独占一行；空行表示一条事件结束，浏览器收到空行后才会派发事件。
    // id 会作为浏览器重连时的 Last-Event-ID 请求头；这里仅展示字段，不保存历史事件。
    const sendEvent = (eventName, payload) => {
      const id = nextEventId++;
      response.write(`id: ${id}\n`);
      if (eventName !== 'message') response.write(`event: ${eventName}\n`);
      response.write(`data: ${JSON.stringify(payload)}\n\n`);
    };

    // retry 以毫秒为单位，告诉浏览器断线后建议等待多久再自动连接。
    response.write('retry: 3000\n\n');
    sendEvent('message', {
      text: '连接成功，服务端开始推送模拟消息。',
      lastEventId: request.headers['last-event-id'] || null,
      time: new Date().toLocaleTimeString('zh-CN')
    });

    let count = 0;
    const messageTimer = setInterval(() => {
      count += 1;
      // 具名事件只触发对应的 addEventListener，不会触发 EventSource.onmessage。
      const eventName = count % 5 === 0 ? 'notice' : 'message';
      sendEvent(eventName, {
        text: eventName === 'notice' ? '这是一条具名 notice 事件。' : `第 ${count} 条模拟实时更新。`,
        time: new Date().toLocaleTimeString('zh-CN')
      });
    }, 2000);

    // 冒号开头的注释行不会触发前端消息事件，可用于让空闲连接保持活跃。
    const heartbeatTimer = setInterval(() => response.write(': heartbeat\n\n'), 15000);

    // 浏览器离开页面或主动断开后，立即清除定时器，避免继续写入已关闭的响应。
    request.on('close', () => {
      clearInterval(messageTimer);
      clearInterval(heartbeatTimer);
    });
  });

  return new Promise((resolveServer, reject) => {
    server.once('error', reject);
    server.listen(PORT, '127.0.0.1', () => {
      server.off('error', reject);
      console.log(`SSE 模拟服务：http://127.0.0.1:${PORT}/events`);
      resolveServer(server);
    });
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  startSseServer().catch((error) => {
    console.error('SSE 服务启动失败：', error);
    process.exitCode = 1;
  });
}
