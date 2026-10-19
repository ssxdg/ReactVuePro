import { createServer as createViteServer } from 'vite';
import { startSseServer } from './sse-server.js';

async function start() {
  const sseServer = await startSseServer();
  try {
    const vite = await createViteServer({ server: { host: '127.0.0.1' } });
    await vite.listen();
    vite.printUrls();

    // 开发进程退出时同时关闭两个服务，防止 SSE 端口继续被旧进程占用。
    const shutdown = async () => {
      await vite.close();
      sseServer.closeAllConnections();
      sseServer.close();
      process.exit(0);
    };
    process.once('SIGINT', shutdown);
    process.once('SIGTERM', shutdown);
  } catch (error) {
    sseServer.closeAllConnections();
    sseServer.close();
    throw error;
  }
}

start().catch((error) => {
  console.error('开发服务启动失败：', error);
  process.exitCode = 1;
});
