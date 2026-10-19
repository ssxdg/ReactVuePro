import { createServer as createViteServer } from 'vite';
import { startSseServer } from './sse-server.js';
import { startWebSocketServer } from './websocket-server.js';

async function start() {
  const sseServer = await startSseServer();
  let websocketServer;
  try {
    websocketServer = await startWebSocketServer();
    const vite = await createViteServer({ server: { host: '127.0.0.1' } });
    await vite.listen();
    vite.printUrls();

    // 开发进程退出时释放页面、SSE 和 WebSocket 服务及已建立的连接。
    const shutdown = async () => {
      await vite.close();
      for (const client of websocketServer.clients) client.terminate();
      websocketServer.close();
      sseServer.closeAllConnections();
      sseServer.close();
      process.exit(0);
    };
    process.once('SIGINT', shutdown);
    process.once('SIGTERM', shutdown);
  } catch (error) {
    if (websocketServer) {
      for (const client of websocketServer.clients) client.terminate();
      websocketServer.close();
    }
    sseServer.closeAllConnections();
    sseServer.close();
    throw error;
  }
}

start().catch((error) => {
  console.error('开发服务启动失败：', error);
  process.exitCode = 1;
});
