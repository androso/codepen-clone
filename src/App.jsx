import React, { useState } from 'react';
import './App.css';
import { Editor } from "./components";

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `
  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language="xml"
          displayName="HTML"
          onChange={setHtml}
          currentValue={html}
        />
        <Editor
          language="css"
          displayName="CSS"
          onChange={setCss}
          currentValue={css}
        />
        <Editor
          language="javascript"
          displayName="JS"
          onChange={setJs}
          currentValue={js}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;