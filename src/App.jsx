import React, { useMemo } from 'react';
import { ConfigProvider, Layout, Switch, theme as antTheme, Typography } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { AppProvider, useApp } from './context/AppContext';
import { lightTheme, darkTheme, getCustomCSSVariables } from './theme';
import Sidebar from './components/Sidebar';
import SkillDetail from './components/SkillDetail';
import Welcome from './components/Welcome';
import './App.css';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function AppContent() {
  const { currentSkill, isDark, toggleTheme } = useApp();
  const cssVars = useMemo(() => getCustomCSSVariables(isDark), [isDark]);

  return (
    <div className='app-root' style={cssVars}>
      <Layout className='app-layout'>
        <Header className='app-header'>
          <div className='header-left'>
            <Title level={4} className='header-title'>
              &#127919; 前端技能训练平台
            </Title>
          </div>
          <div className='header-right'>
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div>
        </Header>
        <Layout>
          <Sider width={280} className='app-sider' theme={isDark ? 'dark' : 'light'}>
            <Sidebar />
          </Sider>
          <Content className='app-content'>
            {currentSkill ? <SkillDetail skillId={currentSkill} /> : <Welcome />}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

function AppWithTheme() {
  const { isDark } = useApp();
  const themeConfig = useMemo(() => ({
    algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
    token: isDark ? darkTheme.token : lightTheme.token,
    components: isDark ? darkTheme.components : lightTheme.components,
  }), [isDark]);

  return (
    <ConfigProvider theme={themeConfig}>
      <AppContent />
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppWithTheme />
    </AppProvider>
  );
}