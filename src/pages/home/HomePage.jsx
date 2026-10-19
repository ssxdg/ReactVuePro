import React from 'react';
import { Card, Switch, Typography } from 'antd';
import { BookOutlined, ApiOutlined, ArrowRightOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './HomePage.css';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  const { isDark, toggleTheme } = useApp();

  return (
    <main className='home-page'>
      <div className='home-toolbar'>
        <span>前端技能训练平台</span>
        <Switch checked={isDark} onChange={toggleTheme} checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} aria-label='切换深色模式' />
      </div>
      <div className='home-content'>
        <div className='home-intro'>
          <span className='home-eyebrow'>选择学习方向</span>
          <Title>从这里开始探索</Title>
          <Paragraph>进入前端技能学习，或打开 SSE 协议页面观察实时消息。</Paragraph>
        </div>
        <div className='home-options'>
          <Link to='/learning' className='home-option'>
            <Card className='home-card'>
              <BookOutlined className='home-card-icon' />
              <Title level={3}>前端学习</Title>
              <Paragraph>知识讲解、在线练习与实时预览，继续原有学习路径。</Paragraph>
              <span className='home-card-link'>进入学习 <ArrowRightOutlined /></span>
            </Card>
          </Link>
          <Link to='/sse' className='home-option'>
            <Card className='home-card'>
              <ApiOutlined className='home-card-icon' />
              <Title level={3}>SSE 协议</Title>
              <Paragraph>了解 Server-Sent Events，并连接服务端事件流查看消息。</Paragraph>
              <span className='home-card-link'>进入 SSE <ArrowRightOutlined /></span>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
