import React, { useEffect, useMemo, useState } from 'react';
import { Typography, Tag, Tabs, Alert } from 'antd';
import { getSkill, getCategoryBySkillId, getModuleBySkillId } from '../../data/skillsData';
import CodeEditor from './CodeEditor';
import PreviewPane from './PreviewPane';

const { Title, Paragraph, Text } = Typography;

function renderList(items, emptyText) {
  if (!items || items.length === 0) {
    return <Text type='secondary'>{emptyText}</Text>;
  }

  return (
    <ul className='key-points-list'>
      {items.map(function(item, index) {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

function SnippetView({ snippet }) {
  const tabs = [
    { key: 'html', label: 'HTML', content: snippet?.html || '暂无 HTML 示例' },
    { key: 'css', label: 'CSS', content: snippet?.css || '暂无 CSS 示例' },
    { key: 'js', label: 'JavaScript', content: snippet?.js || '暂无 JS 示例' }
  ];

  return (
    <Tabs
      items={tabs.map(function(tab) {
        return {
          key: tab.key,
          label: tab.label,
          children: <pre className='snippet-view'>{tab.content}</pre>
        };
      })}
    />
  );
}

function GuideCard({ title, children }) {
  return (
    <div className='guide-card'>
      <h4>{title}</h4>
      <div className='guide-card-body'>{children}</div>
    </div>
  );
}

function TeachingDetail({ detail }) {
  if (!detail) return null;

  return (
    <div className='skill-section'>
      <h3>系统解读与示例说明</h3>
      <div className='teaching-overview'>
        {renderList(detail.beginnerReading, '暂无小白解读')}
      </div>

      <div className='explanation-grid'>
        {(detail.explanation || []).map(function(block, index) {
          return (
            <div key={index} className='explanation-card'>
              <div className='explanation-index'>{index + 1}</div>
              <div>
                <h4>{block.title}</h4>
                <p>{block.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {detail.exampleGuide && (
        <div className='example-guide'>
          <div className='example-guide-head'>
            <h4>{detail.exampleGuide.title}</h4>
            <p>{detail.exampleGuide.description}</p>
          </div>
          <div className='example-guide-grid'>
            <div>
              <p className='example-guide-label'>练习步骤</p>
              {renderList(detail.exampleGuide.steps, '暂无练习步骤')}
            </div>
            <div>
              <p className='example-guide-label'>代码阅读重点</p>
              {renderList(detail.exampleGuide.codeNotes, '暂无代码说明')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function renderQaList(items, emptyText) {
  if (!items || items.length === 0) {
    return <Text type='secondary'>{emptyText}</Text>;
  }

  return (
    <div className='qa-list'>
      {items.map(function(item, index) {
        const question = typeof item === 'string' ? item : item.question;
        const answer = typeof item === 'string' ? '' : item.answer;

        return (
          <div key={index} className='qa-card'>
            <div className='qa-question'>Q{index + 1} · {question}</div>
            {answer ? <div className='qa-answer'>A{index + 1} · {answer}</div> : <Text type='secondary'>暂无答案</Text>}
          </div>
        );
      })}
    </div>
  );
}

export default function SkillDetail({ skillId }) {
  const skill = useMemo(() => getSkill(skillId), [skillId]);
  const category = useMemo(() => getCategoryBySkillId(skillId), [skillId]);
  const moduleMeta = useMemo(() => getModuleBySkillId(skillId), [skillId]);

  const defaultCode = useMemo(() => {
    if (!skill) return { html: '', css: '', js: '' };
    return skill.code || { html: '<h1>Hello</h1>', css: 'h1{color:#4F46E5}', js: '' };
  }, [skill]);

  const [code, setCode] = useState(defaultCode);

  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  if (!skill) {
    return <div style={{ padding: 40, textAlign: 'center' }}>技能未找到</div>;
  }

  const isSnippet = skill.playground === 'snippet';
  const handleCodeChange = function(lang, value) {
    setCode(function(prev) {
      return Object.assign({}, prev, { [lang]: value });
    });
  };

  return (
    <div className='skill-detail'>
      <div className='skill-header'>
        <div className='skill-header-tags'>
          {category && <Tag color='#4F46E5'>{category.label}</Tag>}
          {moduleMeta && <Tag color='blue'>{moduleMeta.phase}</Tag>}
          <Tag>{skill.difficulty || '初级'}</Tag>
          <Tag color={isSnippet ? 'gold' : 'green'}>{isSnippet ? '片段讲解' : '可运行练习'}</Tag>
        </div>
        <Title level={3}>{skill.title}</Title>
        <Paragraph className='skill-description'>{skill.description}</Paragraph>
        {skill.detail && (
          <Alert
            type='info'
            showIcon
            message='学习说明'
            description={skill.detail}
          />
        )}
      </div>

      <TeachingDetail detail={skill.teachingDetail} />

      {skill.studyGuide && (
        <div className='skill-section'>
          <h3>详细讲解</h3>
          <div className='guide-grid'>
            <GuideCard title='它是什么'>
              <Paragraph>{skill.studyGuide.overview}</Paragraph>
            </GuideCard>
            <GuideCard title='什么时候用'>
              <Paragraph>{skill.studyGuide.howToUse}</Paragraph>
            </GuideCard>
            <GuideCard title='怎么学'>
              {renderList(skill.studyGuide.studySteps, '暂无学习步骤')}
            </GuideCard>
            <GuideCard title='常见误区'>
              {renderList(skill.studyGuide.pitfalls, '暂无误区说明')}
            </GuideCard>
            <GuideCard title='练习路径'>
              {renderList(skill.studyGuide.practicePath, '暂无练习路径')}
            </GuideCard>
            <GuideCard title='面试关注点'>
              {renderList(skill.studyGuide.interviewFocus, '暂无面试关注点')}
            </GuideCard>
          </div>
        </div>
      )}

      <div className='skill-section'>
        <h3>学习目标</h3>
        {renderList(skill.learningGoals, '当前知识点尚未补全学习目标')}
      </div>

      <div className='skill-section'>
        <h3>前置知识</h3>
        {renderList(skill.prerequisites, '暂无前置知识说明')}
      </div>

      <div className='skill-section'>
        <h3>关键知识点</h3>
        {renderList(skill.keyPoints, '暂无关键知识点')}
      </div>

      <div className='skill-section'>
        <h3>常见误区</h3>
        {renderList(skill.misconceptions, '暂无常见误区')}
      </div>

      <div className='skill-section'>
        <h3>练习建议</h3>
        {skill.practices && skill.practices.length > 0 ? (
          skill.practices.map(function(practice, index) {
            return (
              <div key={index} className='practice-card'>
                <p className='practice-title'>{practice.title}</p>
                <p className='practice-desc'>{practice.description}</p>
              </div>
            );
          })
        ) : (
          <Text type='secondary'>暂无练习建议</Text>
        )}
      </div>

      <div className='skill-section'>
        <h3>自测题</h3>
        {renderQaList(skill.quiz, '暂无自测题')}
      </div>

      <div className='skill-section'>
        <h3>面试追问</h3>
        {renderQaList(skill.interviewQuestions, '暂无面试追问')}
      </div>

      <div className='skill-section'>
        <h3>扩展阅读</h3>
        {skill.refs && skill.refs.length > 0 ? (
          <ul className='key-points-list'>
            {skill.refs.map(function(ref, index) {
              return (
                <li key={index}>
                  <a href={ref.url} target='_blank' rel='noopener noreferrer' style={{ color: 'var(--color-primary, #4F46E5)' }}>
                    {ref.title}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <Text type='secondary'>暂无扩展阅读</Text>
        )}
      </div>

      {skill.nextSkills && skill.nextSkills.length > 0 && (
        <div className='skill-section'>
          <h3>下一步推荐</h3>
          {renderList(skill.nextSkills, '暂无下一步推荐')}
        </div>
      )}

      <div className='skill-section'>
        <h3>在线练习</h3>
        {isSnippet ? (
          <SnippetView snippet={skill.snippet} />
        ) : (
          <div className='code-playground'>
            <div className='editor-pane'>
              <Tabs
                className='editor-tabs'
                defaultActiveKey='html'
                items={[
                  {
                    key: 'html',
                    label: 'HTML',
                    children: <CodeEditor language='html' value={code.html} onChange={function(v) { handleCodeChange('html', v); }} />
                  },
                  {
                    key: 'css',
                    label: 'CSS',
                    children: <CodeEditor language='css' value={code.css} onChange={function(v) { handleCodeChange('css', v); }} />
                  },
                  {
                    key: 'js',
                    label: 'JavaScript',
                    children: <CodeEditor language='javascript' value={code.js} onChange={function(v) { handleCodeChange('js', v); }} />
                  }
                ]}
              />
            </div>
            <div className='skill-section'>
              <h3>预览效果</h3>
              <div className='preview-pane'>
                <PreviewPane html={code.html} css={code.css} js={code.js} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
