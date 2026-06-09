import React, { useMemo, useState } from 'react';
import { Typography, Tag, Tabs } from 'antd';
import { getSkill, getCategoryBySkillId } from '../../data/skillsData';
import { skillEnhancements } from '../../data/skillEnhancements';
import CodeEditor from './CodeEditor';
import PreviewPane from './PreviewPane';

const { Title, Paragraph } = Typography;

function getEnhancedSkill(id) {
  var base = getSkill(id);
  if (!base) return null;
  var enh = skillEnhancements[id];
  if (!enh) return base;
  return Object.assign({}, base, {
    learningGoals: enh.learningGoals || [],
    practices: enh.practices || [],
    refs: enh.refs || []
  });
}

export default function SkillDetail({ skillId }) {
  const skill = useMemo(() => getEnhancedSkill(skillId), [skillId]);
  const category = useMemo(() => getCategoryBySkillId(skillId), [skillId]);
  const defaultCode = useMemo(() => {
    if (!skill) return { html: '', css: '', js: '' };
    return skill.code || { html: '<h1>Hello</h1>', css: 'h1{color:#4F46E5}', js: '' };
  }, [skill]);
  const [code, setCode] = useState(defaultCode);

  if (!skill) return <div style={{ padding: 40, textAlign: 'center' }}>技能未找到</div>;

  const handleCodeChange = (lang, value) => setCode(prev => ({ ...prev, [lang]: value }));

  return (
    <div className='skill-detail'>
      <div className='skill-header'>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          {category && <Tag color='#4F46E5'>{category.label}</Tag>}
          <Tag>{skill.difficulty || '初级'}</Tag>
        </div>
        <Title level={3}>{skill.title}</Title>
        <Paragraph className='skill-description'>{skill.description}</Paragraph>
      </div>

      {/* 学习目标 */}
      {skill.learningGoals && skill.learningGoals.length > 0 && (
        <div className='skill-section'><h3>🎯 学习目标</h3><ul className='key-points-list'>{
          skill.learningGoals.map((g, i) => <li key={i}>{g}</li>)
        }</ul></div>
      )}

      {/* 详细介绍 */}
      {skill.detail && (
        <div className='skill-section'><h3>📖 详细介绍</h3>
          <Paragraph style={{ fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{skill.detail}</Paragraph></div>
      )}

      {/* 关键知识点 */}
      {skill.keyPoints && skill.keyPoints.length > 0 && (
        <div className='skill-section'><h3>💡 关键知识点</h3><ul className='key-points-list'>{
          skill.keyPoints.map((p, i) => <li key={i}>{p}</li>)
        }</ul></div>
      )}

      {/* 练习建议 */}
      {skill.practices && skill.practices.length > 0 && (
        <div className='skill-section'><h3>✍️ 练习建议</h3>{
          skill.practices.map((p, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, padding: 16, marginBottom: 12 }}>
              <p style={{ fontWeight: 600, marginBottom: 4 }}>{p.title}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{p.description}</p>
            </div>
          ))
        }</div>
      )}

      {/* 扩展阅读 */}
      {skill.refs && skill.refs.length > 0 && (
        <div className='skill-section'><h3>🔗 扩展阅读</h3><ul className='key-points-list'>{
          skill.refs.map((r, i) => <li key={i}><a href={r.url} target='_blank' rel='noopener noreferrer' style={{ color: 'var(--color-primary, #4F46E5)' }}>{r.title}</a></li>)
        }</ul></div>
      )}

      {/* 在线练习 */}
      <div className='skill-section'><h3>💻 在线练习</h3>
        <div className='code-playground'>
          <div className='editor-pane'>
            <Tabs className='editor-tabs' defaultActiveKey='html' items={[
              { key: 'html', label: 'HTML', children: <CodeEditor language='html' value={code.html} onChange={function(v) { handleCodeChange('html', v); }} /> },
              { key: 'css', label: 'CSS', children: <CodeEditor language='css' value={code.css} onChange={function(v) { handleCodeChange('css', v); }} /> },
              { key: 'js', label: 'JavaScript', children: <CodeEditor language='javascript' value={code.js} onChange={function(v) { handleCodeChange('js', v); }} /> }
            ]} />
          </div>
          <div className='skill-section'><h3>👁️ 预览效果</h3>
            <div className='preview-pane'><PreviewPane html={code.html} css={code.css} js={code.js} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
