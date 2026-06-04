import React, { useMemo, useState } from 'react';
import { Typography, Tag, Tabs } from 'antd';
import { useApp } from '../context/AppContext';
import { getSkill, getCategoryBySkillId } from '../../data/skillsData';
import CodeEditor from './CodeEditor';
import PreviewPane from './PreviewPane';

const { Title, Paragraph } = Typography;

export default function SkillDetail({ skillId }) {
  const skill = useMemo(() => getSkill(skillId), [skillId]);
  const category = useMemo(() => getCategoryBySkillId(skillId), [skillId]);

  const defaultCode = useMemo(() => {
    if (!skill) return { html: '', css: '', js: '' };
    return skill.code || { html: '<h1>Hello World</h1>', css: 'h1 { color: #4F46E5; }', js: '' };
  }, [skill]);

  const [code, setCode] = useState(defaultCode);

  if (!skill) {
    return <div style={{ padding: 40, textAlign: 'center' }}>技能未找到</div>;
  }

  const handleCodeChange = (lang, value) => {
    setCode(prev => ({ ...prev, [lang]: value }));
  };

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

      {skill.detail && (
        <div className='skill-section'>
          <h3>&#128214; 详细介绍</h3>
          <Paragraph style={{ fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
            {skill.detail}
          </Paragraph>
        </div>
      )}

      {skill.keyPoints && skill.keyPoints.length > 0 && (
        <div className='skill-section'>
          <h3>&#128161; 关键知识点</h3>
          <ul className='key-points-list'>
            {skill.keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      <div className='skill-section'>
        <h3>&#128187; 在线练习</h3>
        <div className='code-playground'>
          <div className='editor-pane'>
            <Tabs
              className='editor-tabs'
              defaultActiveKey='html'
              items={[
                { key: 'html', label: 'HTML', children: (
                  <CodeEditor language='html' value={code.html} onChange={v => handleCodeChange('html', v)} />
                )},
                { key: 'css', label: 'CSS', children: (
                  <CodeEditor language='css' value={code.css} onChange={v => handleCodeChange('css', v)} />
                )},
                { key: 'js', label: 'JavaScript', children: (
                  <CodeEditor language='javascript' value={code.js} onChange={v => handleCodeChange('js', v)} />
                )},
              ]}
            />
          </div>
          <div className='skill-section'>
            <h3>&#128065; 预览效果</h3>
            <div className='preview-pane'>
              <PreviewPane html={code.html} css={code.css} js={code.js} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}