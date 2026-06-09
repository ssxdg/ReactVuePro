import React, { useMemo } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
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

function SkillPage() {
  var { skillId } = useParams();
  return <SkillDetail skillId={skillId} />;
}

function AppContent() {
  const { setCurrentSkill, isDark, toggleTheme } = useApp();
  const cssVars = useMemo(() => getCustomCSSVariables(isDark), [isDark]);

  return (
    <div className='app-root' style={cssVars}>
      <Layout className='app-layout'>
        <Header className='app-header'>
          <div className='header-left'>
            <Title level={4} className='header-title'>前端技能训练平台</Title>
          </div>
          <div className='header-right'>
            <Switch checked={isDark} onChange={toggleTheme} checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} />
          </div>
        </Header>
        <Layout>
          <Sider width={280} className='app-sider' theme={isDark ? 'dark' : 'light'}>
            <Sidebar />
          </Sider>
          <Content className='app-content'>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/skill/:skillId' element={<SkillPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

function AppWithTheme() {
  var isDark = useApp().isDark;
  var themeConfig = useMemo(function() {
    return {
      algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
      token: isDark ? darkTheme.token : lightTheme.token,
      components: isDark ? darkTheme.components : lightTheme.components
    };
  }, [isDark]);
  return <ConfigProvider theme={themeConfig}><AppContent /></ConfigProvider>;
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <AppWithTheme />
      </HashRouter>
    </AppProvider>
  );
}
