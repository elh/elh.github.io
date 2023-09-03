import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Github, Linkedin, MousePointerClick } from 'lucide-react';
import {isMobile} from 'react-device-detect';
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

function Projects({ projects, iframed }) {
  const [showQuestions, setShowQuestions] = useState(false);
  const [ePhoneID, _] = useState(Math.floor(Math.random() * 10001)); // random id to add to ePhone url

  const toggleShowQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  if (!projects) {
    return null;
  }
  return (
    <div>
      <div className="mt-6">
        {/* Factor out into content file when I support html/markdown */}
        Since <a href={"https://elh.github.io/gh-organizer/#/owners/elh/repo-timeline"} rel="noreferrer" className="link">2022</a>, I started tinkering with personal projects as a resolution to share my thoughts more. I use these weeklong spikes to <button className="link decoration-2" onClick={toggleShowQuestions}>learn-by-doing<MousePointerClick size={16} strokeWidth={1.6} /></button> and be {isMobile ? <button className="tooltip" data-tip="Desktop only"><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></button> : <a href={"https://elh.github.io/ePhone?url=https://elh.github.io/&id=" + ePhoneID}><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></a>}. All projects are functional MVPs, documented, and runnable. Check them out!
      </div>
      {/* <div className="mt-4 text-center text-xl">⁂</div> */}
      {projects && projects.groups.map((group, i) =>
        <div className={i > 0 ? "mt-3" : "mt-10"}>
          <div className='font-bold'><span className="text-xl">❧</span> {group.name.toUpperCase()}</div>
          {group.repos && group.repos.map((repo, j) =>
            <div>
              { repo.repos
                ? <span>
                  <span className=""></span>
                  {repo.repos.map((repo, k) =>
                    <span className=""><a href={`https://github.com/elh/`+repo} target={iframed ? "_blank": ""} rel="noreferrer" className="link">{repo}</a>{k > 0 ? "": ","}&nbsp;</span>
                  )}
                  </span>
                : <span className=""><a href={`https://github.com/elh/`+repo.repo} target={iframed ? "_blank": ""} rel="noreferrer" className="link">{repo.repo}</a></span>
              }
              { repo.homepage &&
                <span>
                  &nbsp;(<a href={repo.homepage} target={iframed && !repo.iframe_safe ? "_blank": ""} rel="noreferrer" className="link">site</a>)
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
  const [iframed, _] = useState(window.location !== window.parent.location);
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
              <a href={`https://github.com/elh`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover"><Github size={24} strokeWidth={2.2} /></a>
              <a href={`https://www.linkedin.com/in/elhonline/`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover"><Linkedin size={24} strokeWidth={2.2} /></a>
              {/* <a href={`https://twitter.com/elh_online`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover"><Twitter size={24} strokeWidth={2.2} /></a> */}
            </div>
          </header>
          <Projects projects={content.projects} iframed={iframed} />
          {/* <div className="mt-14 chat chat-end">
            <div className="chat-image avatar">
              <div className="w-12 rounded-full">
                <img src={avatarImg} />
              </div>
            </div>
            <div className="chat-bubble">Hi! I'm an engineer in SF working in healthtech :)</div>
            <div className="chat-footer opacity-80">elh</div>
          </div> */}
          {/* <div className="my-6 text-center text-xl">⁂</div> */}
          {/* Factor out into content file when I support html/markdown */}
          {/* <div className="mt-4">I'm an engineer at <a href={`https://goforward.com/technology`} target={iframed ? "_blank": ""} rel="noreferrer" className="link">Forward</a> working on radically rebuilding healthcare in software and hardware. Previously, I was building a new data management product at Box and studied EECS at UC Berkeley. :)</div> */}
          {/* <div className="mt-8 text-sm text-center font-mono">{'<!-- TODO: add stuff -->'}</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
