import React, { useState, useEffect, useRef } from 'react';
// import ReactMarkdown from 'react-markdown'
import { HashRouter, Route, Routes } from "react-router-dom"
import { Github, Linkedin, Twitter, MousePointerClick } from 'lucide-react';
import {isMobile} from 'react-device-detect';
// import coverImg from "./img/cover.jpeg"; // h/t https://unsplash.com/photos/KgOpmX1STew
import selfieImg from "./img/selfie.jpg";
import lowerHateImg from "./img/lower_hate.jpg";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'

// note: use this to bootstrap project specific pager later
/* eslint-disable no-unused-vars */
// function Markdown({ fileName }) {
//   const [markdown, setMarkdown] = useState("");
//   useEffect(() => {
//     fetch(`${process.env.PUBLIC_URL}/${fileName}`)
//         .then(res => res.text())
//         .then(text => setMarkdown(text));
//   }, [fileName]);

//   return (
//     <article class="prose prose-sm">
//       <ReactMarkdown children={markdown}></ReactMarkdown>
//     </article>
//   );
// }
/* eslint-disable no-unused-vars */

function TorusMesh() {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.rotation.x = ref.current.rotation.x += delta / 5
    ref.current.rotation.y = ref.current.rotation.y += delta / 10
  })
  return (
    <mesh scale={Math.min(viewport.width, viewport.height) / 5} ref={ref} rotation={[-Math.PI / 4, -Math.PI / 4, 0]}>
      <torusGeometry args={[1.7, 0.15, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

function Torus({ color }) {
  return (
    <div className="w-full h-full fixed top-0 left-0 pointer-events-none -z-10">
      <Canvas style={{'pointer-events': 'none'}}>\
        <color attach="background" args={['black']} />
        <spotLight position={[4, 4, 4]} angle={2} penumbra={1} intensity={40} decay={1} />
        <pointLight position={[-4, -4, -4]} distance={10} intensity={20} decay={1}/>
        <TorusMesh />
        <AsciiRenderer fgColor={color} bgColor="transparent" resolution={0.2} />
      </Canvas>
    </div>
  );
}

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
      <div>
        {/* Factor out into content file when I support html/markdown */}
        Since <a href={"https://elh.github.io/gh-organizer/#/owners/elh/repo-timeline"} rel="noreferrer" className="link">2022</a>, I started tinkering with personal projects as a resolution to share my thoughts more. I use these weeklong spikes to <button className="link decoration-2" onClick={toggleShowQuestions}>learn-by-doing<MousePointerClick size={16} strokeWidth={1.6} /></button> and be {isMobile ? <button className="tooltip" data-tip="Desktop only"><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></button> : <a href={"https://elh.github.io/ePhone?url=https://elh.github.io/&id=" + ePhoneID}><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></a>}. All projects are functional MVPs, documented, and runnable. Check them out!
      </div>
      {projects && projects.groups.map((group, i) =>
        <div className={i > 0 ? "mt-3" : "mt-6"}>
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

function Home({ iframed }) {
  const [ePhoneID, _] = useState(Math.floor(Math.random() * 10001)); // random id to add to ePhone url
  const [photoIdx, setPhotoIdx] = useState(0);

  const photos = [
    <img alt="Moody camera mirror selfie" src={selfieImg} className="relative -z-20" />,
    <img alt="'Lower Hate' poster on Lower Haight" src={lowerHateImg} className="relative -z-20" />
  ]

  return (
    <div>
      {/* Factor out into content file when I support html/markdown */}
      {/* <div className="mt-8 indent-8">is an engineer at <a href={`https://goforward.com/technology`} target={iframed ? "_blank": ""} rel="noreferrer" className="link">Forward</a> working on radically rebuilding healthcare in software and hardware. Previously, I was building a new data management product at Box and studied EECS at UC Berkeley. :)</div> */}
      <div className="flex">
        {!isMobile && <Torus color="#b0b0b0" />} {/* no 3D on mobile */}
        <div className="w-5/12">
          <ul>
            <li>^ is an <a href={`https://goforward.com/technology`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">engineer in SF</a></li>
            <li>^ loves <a href={process.env.PUBLIC_URL+`#/projects`} rel="noreferrer" className="link decoration-2">side projects</a></li>
            {/* <li>^ made the <a href={"https://elh.github.io/ePhone?url=https://elh.github.io/&id=" + ePhoneID} rel="noreferrer" className="link decoration-2">ePhone™</a></li> */}
            <li>^ shoots film</li>
            {/* <li>^ shoots <a href={`"TODO"`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">film</a></li> */}
            {/* <div className="mt-12 text-xs text-center font-mono">{'<!-- TODO: write -->'}</div> */}
          </ul>
          <div className="mt-16 text-center">
            <span>view on&nbsp;
              {isMobile
                ? <button className="tooltip" data-tip="Desktop only">
                    <span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">ePhone</span>
                    <MousePointerClick size={16} strokeWidth={1.6} />
                  </button>
                : <a href={"https://elh.github.io/ePhone?url=https://elh.github.io/&id=" + ePhoneID}>
                    <span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">ePhone</span>
                    <MousePointerClick size={16} strokeWidth={1.6} />
                  </a>
              }
            </span>
          </div>
          {/* <button><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></button>
          <span className="text-center">view site on <a href={"https://elh.github.io/ePhone?url=https://elh.github.io/&id=" + ePhoneID} rel="noreferrer" className="link decoration-2">ePhone</a></span> */}
        </div>
        <div className="w-7/12">
          <button onClick={() => setPhotoIdx((photoIdx + 1) % photos.length)}>
            {photos[photoIdx]}
          </button>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className='flex'>
      <span>∅ Page not found.</span>
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
    <HashRouter>
      <div className="flex flex-wrap h-screen">
        <div className="flex flex-wrap justify-center m-auto">
          <div className="max-w-[50rem] mx-4 mb-6">
            {/* <img className="invert-0 dark:invert pixelated" alt="" src={coverImg} /> */}
            <header className="flex flex-wrap justify-between items-center mt-6 mb-8">
              <a href={process.env.PUBLIC_URL} className="text-3xl font-bold uppercase">Eugene L Huang</a>
            </header>
            <Routes>
              <Route path="/" element={<Home iframed={iframed} />} />
              <Route path="projects" element={<Projects projects={content.projects} iframed={iframed} />} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
            {/* <div className="mt-14 chat chat-end">
              <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                  <img src={avatarImg} />
                </div>
              </div>
              <div className="chat-bubble">Hi! I'm an engineer in SF working in healthtech :)</div>
              <div className="chat-footer opacity-80">elh</div>
            </div> */}
            <div className="my-6 flex flex-wrap space-x-2 justify-end">
              <a href={`https://github.com/elh`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover"><Github size={20} strokeWidth={1.7} /></a>
              <a href={`https://www.linkedin.com/in/elhonline/`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover"><Linkedin size={20} strokeWidth={1.7} /></a>
              <a href={`https://twitter.com/elh_online`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover"><Twitter size={20} strokeWidth={1.7} /></a>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
