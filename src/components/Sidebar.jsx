import React from 'react';
import { Menu } from 'antd';
import { Html5Outlined, FileTextOutlined, JavaScriptOutlined, CodeOutlined, Html5Filled, FileTextFilled, CodeFilled, BugOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { skillCategories } from '../../data/skillsData';
import { useApp } from '../context/AppContext';

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
  var navigate = useNavigate();
  var { skillId } = useParams();
  var { setCurrentSkill } = useApp();

  var handleClick = function(info) {
    setCurrentSkill(info.key);
    navigate('/skill/' + info.key);
  };

  var menuItems = skillCategories.map(function(cat) {
    return {
      key: cat.key,
      icon: iconMap[cat.key] || defaultIcon,
      label: cat.label,
      children: cat.skills.map(function(skill) {
        return { key: skill.id, label: skill.title };
      })
    };
  });

  return (
    <Menu
      mode='inline'
      selectedKeys={skillId ? [skillId] : []}
      defaultOpenKeys={skillCategories.map(function(c) { return c.key; })}
      items={menuItems}
      onClick={handleClick}
      style={{ borderRight: 'none', padding: '8px 0' }}
    />
  );
}
