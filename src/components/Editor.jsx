import React, { useState, useEffect } from 'react';
import "../App.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/scroll/simplescrollbars.css';

export default function Editor(props) {
  const { displayName, language, onChange, currentValue } = props;
  const [windowIsOpen, setWindowIsOpen] = useState(true);
  
  useEffect(() => {
    console.log(windowIsOpen, "windowIsOpen ");
  }, [windowIsOpen])

  return (
    <div className="editor-container">
      <div className="editor-title">
        <span className="language-name">
          {displayName}
        </span>
        <button
          onClick={() => setWindowIsOpen(!windowIsOpen)}
        >
          O/C
        </button>
      </div>

      <CodeMirror
        value={currentValue}
        className="codemirror-wrapper"
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
        options={{
          "theme": "material",
          lineWrapping: true,
          lint: true, 
          "lineNumbers": true,
          "scrollbarStyle": "overlay",
          "mode": language
        }}
      />

    </div>
  )
}