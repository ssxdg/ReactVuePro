import React from 'react';
import { Menu } from 'antd';
import { Html5Outlined, FileTextOutlined, JavaScriptOutlined, CodeOutlined, Html5Filled, FileTextFilled, CodeFilled, BugOutlined } from '@ant-design/icons';
import { useApp } from '../context/AppContext';
import { skillCategories } from '../../data/skillsData';

const iconMap = {
  html: <Html5Outlined style={{ fontSize: 18, color: '#E44D26' }} />,
  css: <FileTextFilled style={{ fontSize: 18, color: '#1572B6' }} />,
  javascript: <JavaScriptOutlined style={{ fontSize: 18, color: '#F7DF1E' }} />,
  typescript: <CodeFilled style={{ fontSize: 18, color: '#3178C6' }} />,
  vue2: <Html5Filled style={{ fontSize: 18, color: '#42B883' }} />,
  vue3: <Html5Filled style={{ fontSize: 18, color: '#42B883' }} />,
  react: <CodeOutlined style={{ fontSize: 18, color: '#61DAFB' }} />,
};

const defaultIcon = <BugOutlined />;

export default function Sidebar() {
  const { currentSkill, setCurrentSkill } = useApp();

  const menuItems = skillCategories.map(cat => ({
    key: cat.key,
    icon: iconMap[cat.key] || defaultIcon,
    label: cat.label,
    children: cat.skills.map(skill => ({
      key: skill.id,
      label: skill.title,
    })),
  }));

  const handleClick = ({ key }) => {
    setCurrentSkill(key);
  };

  return (
    <Menu
      mode='inline'
      selectedKeys={currentSkill ? [currentSkill] : []}
      defaultOpenKeys={skillCategories.map(c => c.key)}
      items={menuItems}
      onClick={handleClick}
      style={{ borderRight: 'none', padding: '8px 0' }}
    />
  );
}