import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import coverImg from "./img/cover.jpeg"; // h/t https://unsplash.com/photos/KgOpmX1STew

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
      <div className="mt-4">
        {/* Not using projects.intro because I want to directly style the text */}
        Since 2022, I started tinkering with personal projects as a resolution to share ideas more. I use these weeklong spikes to learn-by-doing and be <span className="underline decoration-wavy underline-offset-0">creative</span>. All projects are functional MVPs, documented, and runnable. Check them out!
      </div>
      <div className="my-4 text-center text-xl">⁂</div>
      {projects && projects.groups.map((group, i) =>
        <div>
          <div className="mt-4">{group.name.toUpperCase()}</div>
          {group.repos && group.repos.map((repo, j) =>
            <div>
              { repo.repos
                ? <span>
                  <span className="font-bold">❧ </span>
                  {repo.repos.map((repo, k) =>
                    <span className="font-bold"><a href={`https://github.com/elh/`+repo} className="link link-hover">{repo}{k > 0 ? " ": ", "}</a></span>
                  )}
                  </span>
                : <span className="font-bold">❧ <a href={`https://github.com/elh/`+repo.repo} className="link link-hover">{repo.repo} </a></span>
              }
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
      <div className="flex justify-center">
        <div className="w-[44rem]">
          <img className="mb-6 invert-0 dark:invert" src={coverImg} />
          <header className="flex justify-between items-center">
            <a href={process.env.PUBLIC_URL} className="text-2xl font-extrabold link link-hover">{"Eugene L Huang".toUpperCase()}</a>
            <div className="flex space-x-2">
              <a href={`https://github.com/elh`} className="link link-hover"><Github size={16} strokeWidth={2.0} /></a>
              <a href={`https://www.linkedin.com/in/elhonline/`} className="link link-hover"><Linkedin size={16} strokeWidth={2.0} /></a>
              <a href={`https://twitter.com/elh_online`} className="link link-hover"><Twitter size={16} strokeWidth={2.0} /></a>
            </div>
          </header>
          <Projects projects={content.projects} />
          <div className="my-4 text-center text-xl">⁂</div>
          <div className="mt-4">{content.about_me}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
