import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Github, Linkedin, Twitter, ArrowUpRightSquare } from 'lucide-react';

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

/*
TODO:
fix vertical and horizontal sizing. why is there overflow
generate the list from config file
*/

function App() {
  return (
    <div>
      <div className="flex justify-center h-screen pt-[4rem]">
        <div className="w-[50rem]">
          <header className="flex justify-between items-center">
            <a href={process.env.PUBLIC_URL} className="text-xl font-extrabold">Eugene L Huang</a>
            <div className="flex space-x-4">
              <a href={`https://github.com/elh`} className="link link-hover"><Github size={16} strokeWidth={2.0} /></a>
              <a href={`https://www.linkedin.com/in/elhonline/`} className="link link-hover"><Linkedin size={16} strokeWidth={2.0} /></a>
              <a href={`https://twitter.com/elh_online`} className="link link-hover"><Twitter size={16} strokeWidth={2.0} /></a>
            </div>
          </header>
          {/* <div className="text-sm breadcrumbs py-1">
            <ul>
              <li><a>/</a></li>
              <li><a>projects</a></li>
            </ul>
          </div> */}
          <div className="mt-4">As a resolution in 2022, I started tinkering with side projects.</div>
          <div>
            <div className="mt-4">Logic Programming</div>
            <div>
              <span className="font-bold">❧ <a href={`https://github.com/elh/whodunit`} className="link link-hover">whodunit</a></span>
              <span> - Logic puzzle generator using core.logic</span>
            </div>
            <div>
              <span className="font-bold">❧ <a href={`https://github.com/elh/quarry`} className="link link-hover">quarry</a></span>
              <span> - Tiny expert system demo using SWI-Prolog</span>
            </div>
          </div>
          <div>
            <div className="mt-4">DBs</div>
            <div>
              <span className="font-bold">❧ <a href={`https://github.com/elh/dignum`} className="link link-hover">dignum</a></span>
              <span> - REST API generator for XTDB w/ schema-on-write</span>
            </div>
            <div>
              <span className="font-bold">❧ <a href={`https://github.com/elh/bitempura`} className="link link-hover">bitempura</a></span>
              <span> - Toy, in-memory, bitemporal key-value db</span>
            </div>
            {/* <div>
              <span className="font-bold">❧ <a href={`https://github.com/elh/bitempura-viz`} className="link link-hover">bitempura-viz</a></span>
              <span> - Bitemporal 2D valid + tx time visualizer</span><a href={`https://elh.github.io/bitempura-viz/#/bitempura-viz/`} className="link link-hover"><ArrowUpRightSquare size={11} strokeWidth={2.0} />live</a>
            </div> */}
            <div className="flex items-center space-x-2">
              <span className="font-bold">❧ <a href={`https://github.com/elh/bitempura-viz`} className="link link-hover">bitempura-viz</a></span>
              <span>
                <a href={`https://elh.github.io/bitempura-viz/#/bitempura-viz/`} className="link link-hover">
                  (<ArrowUpRightSquare size={11} strokeWidth={2.0} /> live)
                </a>
              </span>
              <span> - Bitemporal 2D valid + tx time visualizer</span>
            </div>
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
