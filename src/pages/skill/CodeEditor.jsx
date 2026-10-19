import React, { useRef, useCallback } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import { useApp } from '../../context/AppContext';

loader.config({
  paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' },
});

export default function CodeEditor({ language, value, onChange }) {
  const { isDark } = useApp();
  const editorRef = useRef(null);

  const handleMount = useCallback((editor) => {
    editorRef.current = editor;
  }, []);

  const handleChange = useCallback((val) => {
    if (onChange) onChange(val || '');
  }, [onChange]);

  return (
    <Editor
      height={320}
      language={language}
      value={value}
      onChange={handleChange}
      onMount={handleMount}
      theme={isDark ? 'vs-dark' : 'vs'}
      options={{
        fontSize: 14,
        fontFamily: 'JetBrains Mono, Consolas, monospace',
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineNumbers: 'on',
        tabSize: 2,
        automaticLayout: true,
        wordWrap: 'on',
        padding: { top: 8 },
      }}
    />
  );
}
