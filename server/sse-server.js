import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const PORT = 3001;
let nextEventId = 1;
const article = `当前，人工智能蓬勃兴起，以数据、算力、算法等为关键要素。如何积极识变应变求变？一张算力网，铺展出党领导人民治国理政的大道宏图。
战略谋划，向来谋定而后动。
2021年10月，习近平总书记主持中央政治局集体学习时强调，加快新型基础设施建设；去年4月，主持中央政治局集体学习进一步明确，统筹推进算力基础设施建设。
观大势，进而谋大局。开局之年，关键节点有关键部署：
今年4月召开的中央政治局会议，提出加强“六张网”规划建设。算力网，被纳入国家顶层设计。
不久前，中共中央、国务院印发《关于发展新质生产力的意见》，部署建设全国一体化算力网……
“有高远目标，更有耐心有定力。”在乌兰察布察哈尔高新技术开发区考察时，习近平总书记一席叮嘱饱含深意。
绿电足、气候凉、区位优，内蒙古正建设服务京津冀、辐射全国的绿色算力保障基地。
视线向南，云贵高原，同样是国家八大算力枢纽之一的贵州，把良好的生态环境、凉爽的气候等比较优势，转化为发展大数据产业的强劲动能。
2015年6月，习近平总书记来到贵阳市大数据应用展示中心听取产业发展介绍。彼时，中国经济发展进入新常态，“呈现速度变化、结构优化、动力转换三大特点。”
总书记在那次考察时提出高远目标——“我国大数据采集和应用刚刚起步，要加强研究、加大投入，力争走在世界前列”；期许耐心与定力——“保持战略定力，加强调查研究，看清形势、适应趋势，发挥优势、破解瓶颈”。`;

// 标点算作一个字符；换行保留在原文中，但不占每次 20 字的配额。
const chunks = [];
let chunk = '';
let characterCount = 0;
for (const character of article) {
  chunk += character;
  if (character !== '\n') characterCount += 1;
  if (characterCount === 20) {
    chunks.push(chunk);
    chunk = '';
    characterCount = 0;
  }
}
if (chunk) chunks.push(chunk);

export function startSseServer(port = PORT) {
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
    let chunkIndex = 0;
    const sendNextChunk = () => {
      if (response.destroyed || response.writableEnded) return;
      // 每条普通 message 的 data.text 只承载当前片段，前端按顺序拼接即可还原原文。
      sendEvent('message', { text: chunks[chunkIndex] });
      chunkIndex += 1;
      if (chunkIndex === chunks.length) {
        // 完成事件用于通知页面主动关闭 EventSource，防止响应结束后自动重连并重复播放。
        sendEvent('done', { total: chunks.length });
        clearInterval(messageTimer);
        response.end();
      }
    };

    // 建连后立即发送首段，之后每 500 毫秒发送下一段；全部发送后停止定时器。
    const messageTimer = setInterval(sendNextChunk, 500);
    sendNextChunk();

    // 浏览器提前离开或主动断开时，清除定时器，避免继续写入已关闭的响应。
    request.on('close', () => clearInterval(messageTimer));
  });

  return new Promise((resolveServer, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => {
      server.off('error', reject);
      console.log(`SSE 模拟服务：http://127.0.0.1:${server.address().port}/events`);
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
