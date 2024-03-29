import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom"

import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  const [content, setContent] = useState("");
  const iframed = window.location !== window.parent.location;

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content.json`)
        .then(res => res.text())
        .then(text => setContent(JSON.parse(text)));
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home iframed={iframed} />} />
        <Route path="projects" element={<Projects projects={content.projects} iframed={iframed} />} />
        <Route path="/*" element={<NotFound iframed={iframed} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
