import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { Html5Outlined, FileTextOutlined, JavaScriptOutlined, CodeOutlined, ApiOutlined, ThunderboltOutlined, ExperimentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { skillCategories } from '../../data/skillsData';

const { Title, Paragraph } = Typography;

const iconMap = {
  html: <Html5Outlined style={{ fontSize: 32, color: '#E44D26' }} />,
  css: <FileTextOutlined style={{ fontSize: 32, color: '#1572B6' }} />,
  javascript: <JavaScriptOutlined style={{ fontSize: 32, color: '#F7DF1E' }} />,
  typescript: <CodeOutlined style={{ fontSize: 32, color: '#3178C6' }} />,
  vue2: <ApiOutlined style={{ fontSize: 32, color: '#42B883' }} />,
  vue3: <ThunderboltOutlined style={{ fontSize: 32, color: '#42B883' }} />,
  react: <ExperimentOutlined style={{ fontSize: 32, color: '#61DAFB' }} />,
};

export default function Welcome() {
  const { setCurrentSkill } = useApp();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 60, textAlign: 'center' }}>
      <Title level={2}>前端技能训练平台</Title>
      <Paragraph style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 40 }}>
        从左侧菜单选择一个技能，开始你的学习之旅。
      </Paragraph>
      <Row gutter={[16, 16]}>
        {skillCategories.map(function(cat) {
          return (
            <Col xs={24} sm={12} md={8} lg={6} key={cat.key}>
              <Card hoverable onClick={function() { navigate('/skill/' + cat.skills[0].id); }} style={{ textAlign: 'center', height: '100%' }}>
                <div style={{ marginBottom: 12 }}>{iconMap[cat.key] || <CodeOutlined style={{ fontSize: 32 }} />}</div>
                <Card.Meta title={cat.label} description={cat.skills.length + ' 个技能点'} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
