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

function Projects({ projects }) {
  if (!projects) {
    return null;
  }
  return (
    <div>
      <div className="mt-4">{projects.intro}</div>
      <div className="my-4 text-center">⁂</div>
      {projects && projects.groups.map((group, i) =>
        <div>
          <div className="mt-4">{group.name.toUpperCase()}</div>
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
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content.json`)
        .then(res => res.text())
        .then(text => setContent(JSON.parse(text)));
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center pt-[4rem]">
        <div className="w-[40rem]">
          <header className="flex justify-between items-center">
            <a href={process.env.PUBLIC_URL} className="text-2xl font-extrabold link link-hover">{"Eugene L Huang".toUpperCase()}</a>
            <div className="flex space-x-2">
              <a href={`https://github.com/elh`} className="link link-hover"><Github size={16} strokeWidth={2.0} /></a>
              <a href={`https://www.linkedin.com/in/elhonline/`} className="link link-hover"><Linkedin size={16} strokeWidth={2.0} /></a>
              <a href={`https://twitter.com/elh_online`} className="link link-hover"><Twitter size={16} strokeWidth={2.0} /></a>
            </div>
          </header>
          <Projects projects={content.projects} />
          <div className="my-4 text-center">⁂</div>
          <div className="mt-4">{content.about_me}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
