import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

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

function Projects() {
  const [projects, setProjects] = useState("");
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
        .then(res => res.text())
        .then(text => setProjects(JSON.parse(text)));
  }, []);

  return (
    <div>
      <div className="mt-4">As a resolution in 2022, I started tinkering with personal projects.</div>
      {projects && projects.groups.map((group, i) =>
        <div>
          <div className="mt-4">{group.name}</div>
          {group.repos && group.repos.map((repo, j) =>
            <div>
              <span className="font-bold">❧ <a href={`https://github.com/elh/`+repo.repo} className="link link-hover">{repo.repo} </a></span>
              { repo.homepage &&
                <a href={repo.homepage} className="link link-hover">
                  (<ExternalLink size={12} strokeWidth={2.0} /> live)
                </a>
              }
              <span> - {repo.desc}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="flex justify-center items-center pt-[4rem]">
        <div className="w-[40rem]">
          <header className="flex justify-between items-center">
            <a href={process.env.PUBLIC_URL} className="text-2xl font-extrabold link link-hover">Eugene L Huang</a>
            <div className="flex space-x-2">
              <a href={`https://github.com/elh`} className="link link-hover"><Github size={16} strokeWidth={2.0} /></a>
              <a href={`https://www.linkedin.com/in/elhonline/`} className="link link-hover"><Linkedin size={16} strokeWidth={2.0} /></a>
              <a href={`https://twitter.com/elh_online`} className="link link-hover"><Twitter size={16} strokeWidth={2.0} /></a>
            </div>
          </header>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
