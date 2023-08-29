import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Github, Linkedin, Twitter, MousePointerClick } from 'lucide-react';
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
  const [showQuestions, setShowQuestions] = useState(false);

  const toggleShowQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  if (!projects) {
    return null;
  }
  return (
    <div>
      <div className="mt-4">
        {/* Factor out into content file when I support html/markdown */}
        Since <a href={"https://elh.github.io/gh-organizer/#/owners/elh/repo-timeline"} target="_blank" className="link">2022</a>, I started tinkering with personal projects as a resolution to share my thoughts more. I use these weeklong spikes to <a className="link" onClick={toggleShowQuestions}>learn-by-doing<MousePointerClick size={16} strokeWidth={1.6} /></a> and be <span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span>. All projects are functional MVPs, documented, and runnable. Check them out!
      </div>
      <div className="mt-4 text-center text-xl">⁂</div>
      {projects && projects.groups.map((group, i) =>
        <div className={i > 0 ? "mt-4" : ""}>
          <div><span className="text-2xl">❧</span> {group.name.toUpperCase()}</div>
          {group.repos && group.repos.map((repo, j) =>
            <div>
              { repo.repos
                ? <span>
                  <span className="font-bold"></span>
                  {repo.repos.map((repo, k) =>
                    <span className="font-bold"><a href={`https://github.com/elh/`+repo} className="link link-hover decoration-2">{repo}{k > 0 ? " ": ", "}</a></span>
                  )}
                  </span>
                : <span className="font-bold"><a href={`https://github.com/elh/`+repo.repo} className="link link-hover decoration-2">{repo.repo} </a></span>
              }
              { repo.homepage &&
                <span>
                  (<a href={repo.homepage} target="_blank" className="link">site</a>)
                </span>
              }
              { showQuestions
                ? <span> - {repo.q}</span>
                : <span> - {repo.desc}</span>
              }
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
        <div className="w-[44rem] mx-4 mb-6">
          <img className="mb-6 invert-0 dark:invert" alt="" src={coverImg} />
          <header className="flex justify-between items-center mt-6">
            <a href={process.env.PUBLIC_URL} className="text-5xl font-black link link-hover decoration-4">{"Eugene L Huang".toUpperCase()}</a>
            <div className="flex space-x-2">
              <a href={`https://github.com/elh`} className="link link-hover"><Github size={24} strokeWidth={2.4} /></a>
              <a href={`https://www.linkedin.com/in/elhonline/`} className="link link-hover"><Linkedin size={24} strokeWidth={2.4} /></a>
              <a href={`https://twitter.com/elh_online`} className="link link-hover"><Twitter size={24} strokeWidth={2.4} /></a>
            </div>
          </header>
          <Projects projects={content.projects} />
          <div className="my-4 text-center text-xl">⁂</div>
          {/* Factor out into content file when I support html/markdown */}
          <div className="mt-4">I'm an engineer at <a href={`https://goforward.com/technology`} target="_blank" className="link">Forward</a> working on radically rebuilding healthcare in software and hardware working. Previously, I was building a new data management product at Box and studied EECS at UC Berkeley. :)</div>
        </div>
      </div>
    </div>
  );
}

export default App;
