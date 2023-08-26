import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

function Markdown({ fileName }) {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${fileName}`)
        .then(res => res.text())
        .then(text => setMarkdown(text));
  }, []);

  return (
    <article class="prose prose-sm">
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Markdown fileName={"readmes/whodunit.md"} />
    </div>
  );
}

export default App;
