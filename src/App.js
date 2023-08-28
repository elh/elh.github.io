import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Github, Linkedin, Twitter } from 'lucide-react';
import coverImg from "./img/cover.jpeg"; // h/t https://unsplash.com/photos/KgOpmX1STew

// note: use this to bootstrap project specific pager later
/* eslint-disable no-unused-vars */
function Markdown({ fileName }) {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${fileName}`)
        .then(res => res.text())
        .then(text => setMarkdown(text));
  }, [fileName]);

  return (
    <article class="prose prose-sm">
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </article>
  );
}
/* eslint-disable no-unused-vars */

function Projects({ projects }) {
  if (!projects) {
    return null;
  }
  return (
    <div>
      <div className="mt-4">
        {/* Factor out into content file when I support html/markdown */}
        Since <a href={"https://elh.github.io/gh-organizer/#/owners/elh/repo-timeline"} className="link">2022</a>, I started tinkering with personal projects as a resolution to share my thoughts more. I use these weeklong spikes to learn-by-doing and be <span className="underline decoration-wavy underline-offset-0 decoration-red-500">creative</span>. All projects are functional MVPs, documented, and runnable. Check them out!
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
                <span>
                  (<a href={repo.homepage} className="link">site</a>)
                </span>
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
        <div className="w-[44rem] mx-4 mb-4">
          <img className="mb-6 invert-0 dark:invert" alt="" src={coverImg} />
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
          {/* Factor out into content file when I support html/markdown */}
          <div className="mt-4">I'm an engineer at <a href={`https://goforward.com/technology`} className="link">Forward</a> working on radically rebuilding healthcare in software and hardware. Previously, I was building a new data management product at Box and studied EECS at UC Berkeley. :)</div>
        </div>
      </div>
    </div>
  );
}

export default App;
