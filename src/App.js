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
    <div>
      <div className="flex justify-center h-screen pt-[4rem]">
        <div className="w-[36rem]">
          <div className="text-xl font-extrabold">Eugene L Huang</div>
          <div className="mt-4">As a resolution in 2022, I've started tinkering with side projects.</div>
          <div className="mt-4">Logic Programming</div>
          <div>
            <span className="font-bold">❧ <span className="underline">whodunit</span></span>
            <span> - Logic puzzle generator using core.logic</span>
          </div>
          <div>
            <span className="font-bold">❧ <span className="underline">quarry</span></span>
            <span> - Tiny expert system demo for hypertension</span>
          </div>
          {/* <ul class="list-none">
            <li>
              <span className="font-bold">❧ whodunit</span>
              <span> - Logic puzzle generator using core.logic</span>
            </li>
          </ul> */}
          {/* <div class="chat chat-start">
            <div class="chat-bubble">Whats up</div>
            <div class="chat-footer opacity-70">
              Eugene Huang
            </div>
          </div> */}
        </div>
      </div>
      {/* <Markdown fileName={"readmes/whodunit.md"} /> */}
    </div>
  );
}

export default App;
