import React from 'react';
import { Card, Typography, Row, Col, Tag, Space, Button, Layout, Switch } from 'antd';
import { Html5Outlined, FileTextOutlined, JavaScriptOutlined, CodeOutlined, ApiOutlined, ThunderboltOutlined, ExperimentOutlined, HomeOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { curriculumModules } from '../../../data/skillsData';
import { useApp } from '../../context/AppContext';
import Sidebar from './Sidebar';
import './LearningPage.css';

const { Title, Paragraph } = Typography;
const { Header, Sider, Content } = Layout;

export default function LearningPage() {
  const { isDark, toggleTheme } = useApp();
  const totalSkills = curriculumModules.reduce((sum, module) => sum + module.skills.length, 0);

  return (
    <Layout className='app-layout'>
      <Header className='app-header'>
        <div className='header-left'>
          <Link to='/' className='learning-back' aria-label='返回入口页'><HomeOutlined /> <span>入口</span></Link>
          <Title level={4} className='header-title'>前端技能训练平台 · {curriculumModules.length} 模块 / {totalSkills} 知识点</Title>
        </div>
        <div className='header-right'>
          <Switch checked={isDark} onChange={toggleTheme} checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} aria-label='切换深色模式' />
        </div>
      </Header>
      <Layout className='learning-body'>
        <Sider width={280} className='app-sider' theme={isDark ? 'dark' : 'light'}><Sidebar /></Sider>
        <Content className='app-content'><Outlet /></Content>
      </Layout>
    </Layout>
  );
}

const iconMap = {
  html: <Html5Outlined style={{ fontSize: 30, color: '#E44D26' }} />,
  css: <FileTextOutlined style={{ fontSize: 30, color: '#1572B6' }} />,
  javascript: <JavaScriptOutlined style={{ fontSize: 30, color: '#F7DF1E' }} />,
  typescript: <CodeOutlined style={{ fontSize: 30, color: '#3178C6' }} />,
  vue2: <ApiOutlined style={{ fontSize: 30, color: '#42B883' }} />,
  vue3: <ThunderboltOutlined style={{ fontSize: 30, color: '#42B883' }} />,
  react: <ExperimentOutlined style={{ fontSize: 30, color: '#61DAFB' }} />,
  node: <CodeOutlined style={{ fontSize: 30, color: '#8B5CF6' }} />,
  engineering: <FileTextOutlined style={{ fontSize: 30, color: '#F97316' }} />,
  browser: <ExperimentOutlined style={{ fontSize: 30, color: '#0EA5E9' }} />,
  network: <FileTextOutlined style={{ fontSize: 30, color: '#10B981' }} />,
  algorithm: <CodeOutlined style={{ fontSize: 30, color: '#EC4899' }} />,
  interview: <ExperimentOutlined style={{ fontSize: 30, color: '#6366F1' }} />
};

const phaseOrder = ['基础', '进阶', '扩展', '面试'];

export function LearningHome() {
  const navigate = useNavigate();
  const totalSkills = curriculumModules.reduce(function(sum, module) {
    return sum + module.skills.length;
  }, 0);

  return (
    <div className='welcome'>
      <div className='welcome-hero'>
        <Title level={2}>前端技能训练平台</Title>
        <Paragraph>
          这是一条从基础语法到工程化、浏览器原理、网络与面试的完整学习路径。
          先学会知识，再做练习，最后进入复盘和面试准备。
        </Paragraph>
        <Space size={12} wrap>
          <Tag color='blue'>{curriculumModules.length} 个模块</Tag>
          <Tag color='green'>{totalSkills} 个知识点</Tag>
          <Tag color='gold'>4 个学习阶段</Tag>
        </Space>
      </div>

      <div className='welcome-section'>
        <div className='welcome-section-title'>学习路径</div>
        <div className='welcome-path'>
          {phaseOrder.map(function(phase) {
            const count = curriculumModules.filter(function(module) {
              return module.phase === phase;
            }).length;
            return (
              <Card key={phase} className='path-card'>
                <Tag color='blue'>{phase}</Tag>
                <Title level={4}>{count} 个模块</Title>
                <Paragraph>
                  {phase === '基础' && '从 HTML、CSS、JavaScript 打牢基础。'}
                  {phase === '进阶' && '开始进入 TypeScript、Vue、React 的框架与类型能力。'}
                  {phase === '扩展' && '补齐 Node、工程化、浏览器原理、网络与算法。'}
                  {phase === '面试' && '将知识转成高频问答、项目表达和复盘能力。'}
                </Paragraph>
              </Card>
            );
          })}
        </div>
      </div>

      <div className='welcome-section'>
        <div className='welcome-section-title'>模块总览</div>
        <Row gutter={[16, 16]} className='welcome-categories'>
          {curriculumModules.map(function(module) {
            return (
              <Col xs={24} sm={12} md={8} lg={6} key={module.key}>
                <Card
                  hoverable
                  onClick={function() {
                    navigate('/learning/skill/' + module.skills[0].id);
                  }}
                  className='welcome-card'
                >
                  <div className='welcome-card-icon'>{iconMap[module.key] || <CodeOutlined style={{ fontSize: 30 }} />}</div>
                  <div className='welcome-card-head'>
                    <Title level={4}>{module.label}</Title>
                    <Tag color='blue'>{module.phase}</Tag>
                  </div>
                  <Paragraph className='welcome-card-desc'>{module.description}</Paragraph>
                  <div className='welcome-card-footer'>
                    <span className='skill-count'>{module.skills.length} 个知识点</span>
                    <Button type='link' size='small'>进入学习</Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
