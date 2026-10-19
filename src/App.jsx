import React, { useMemo } from 'react';
import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { ConfigProvider, theme as antTheme } from 'antd';
import { AppProvider, useApp } from './context/AppContext';
import { lightTheme, darkTheme, getCustomCSSVariables } from './theme';
import HomePage from './pages/home/HomePage';
import LearningPage, { LearningHome } from './pages/learning/LearningPage';
import SkillPage from './pages/skill/SkillPage';
import SsePage from './pages/sse/SsePage';
import './App.css';

function LegacySkillRedirect() {
  const { skillId } = useParams();
  // 兼容旧版知识点深链，避免目录调整后已保存的链接失效。
  return <Navigate to={'/learning/skill/' + skillId} replace />;
}

function AppWithTheme() {
  const { isDark } = useApp();
  const cssVars = useMemo(() => getCustomCSSVariables(isDark), [isDark]);
  const themeConfig = useMemo(() => ({
    algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
    token: isDark ? darkTheme.token : lightTheme.token,
    components: isDark ? darkTheme.components : lightTheme.components
  }), [isDark]);

  return (
    <ConfigProvider theme={themeConfig}>
      <div className='app-root' style={cssVars}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/learning' element={<LearningPage />}>
            <Route index element={<LearningHome />} />
            <Route path='skill/:skillId' element={<SkillPage />} />
          </Route>
          <Route path='/skill/:skillId' element={<LegacySkillRedirect />} />
          <Route path='/sse' element={<SsePage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
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
