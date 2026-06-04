import React, { useMemo } from 'react';

export default function PreviewPane({ html, css, js }) {
  const srcDoc = useMemo(() => {
    var s = css || '';
    var b = html || '';
    var j = js || '';
    return '<!DOCTYPE html><html><head><meta charset=UTF-8><style>*{margin:0;padding:0;box-sizing:border-box}body{padding:20px;font-family:sans-serif}</style></head><body>' + b + '<script>try{' + j + '}catch(e){console.error(e)}</script></body></html>';
  }, [html, css, js]);

  return <iframe title='preview' srcDoc={srcDoc} sandbox='allow-scripts allow-modals' style={{ width: '100%', height: 350, border: 'none', background: '#fff' }} />;
};