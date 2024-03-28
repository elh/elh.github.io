import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom"
import { Github, Linkedin, Twitter } from 'lucide-react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  const [content, setContent] = useState("");
  const [iframed, _] = useState(window.location !== window.parent.location);
  const [onHomePage, setOnHomePage] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content.json`)
        .then(res => res.text())
        .then(text => setContent(JSON.parse(text)));
  }, []);

  useEffect(() => {
    function checkPath() {
      setOnHomePage(window.location.hash === '#/' || window.location.hash === '');
    }
    checkPath();

    window.addEventListener('hashchange', checkPath);

    return () => {
      window.removeEventListener('hashchange', checkPath);
    };
  }, []);

  return (
    <HashRouter>
      <div className="flex flex-wrap h-screen">
        <div className="flex flex-wrap justify-center m-auto">
          <div className="max-w-[50rem] mx-4 mb-6 leading-relaxed">
            <Routes>
              <Route path="/" element={<Home iframed={iframed} />} />
              <Route path="projects" element={<Projects projects={content.projects} iframed={iframed} />} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
            <div className="my-6 flex flex-wrap space-x-2 justify-end">
              { onHomePage ? null :
                <a href="" rel="noreferrer" className="mx-2" aria-label="Home">home</a>
              }
              <a href={`https://github.com/elh`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Github">
                <Github size={20} strokeWidth={1.7} alt="Github" />
              </a>
              <a href={`https://www.linkedin.com/in/elhonline/`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Linkedin">
                <Linkedin size={20} strokeWidth={1.7} alt="LinkedIn" />
              </a>
              <a href={`https://twitter.com/elh_online`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.7} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
