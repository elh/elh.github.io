import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom"
import { Github, Linkedin, Twitter, MousePointerClick } from 'lucide-react';
import {isMobile} from 'react-device-detect';
import selfieImg from "./img/selfie.jpg";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'

function TorusMesh() {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.rotation.x = ref.current.rotation.x += delta / 5
    ref.current.rotation.y = ref.current.rotation.y += delta / 10
  })
  return (
    <mesh scale={Math.min(viewport.width, viewport.height) / 5} ref={ref} rotation={[-Math.PI / 4, -Math.PI / 4, 0]}>
      <torusGeometry args={[1.8, 0.15, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

function Torus({ color }) {
  return (
    <div className="w-full h-[90%] absolute top-0 left-0 pointer-events-none -z-10">
      <Canvas>\
        <color attach="background" args={['black']} />
        <spotLight position={[4, 4, 4]} angle={2} penumbra={1} intensity={40} decay={1} />
        <pointLight position={[-4, -4, -4]} distance={10} intensity={20} decay={1}/>
        <TorusMesh />
        <AsciiRenderer fgColor={color} bgColor="transparent" resolution={0.2} />
      </Canvas>
    </div>
  );
}

function Header({ text }) {
  return (
    <header className="flex flex-wrap justify-between items-center mt-6 mb-8">
      <h1 className="text-4xl font-bold uppercase">{text}</h1>
    </header>
  );
}

function SubHeader({ text }) {
  return (
    <header className="flex flex-wrap justify-between items-center mt-6 mb-8">
      <h2 className="text-3xl uppercase">{text}</h2>
    </header>
  );
}

function Projects({ projects, iframed }) {
  const [showQuestions, setShowQuestions] = useState(false);
  const ePhoneID = Math.floor(Math.random() * 10001); // random id to add to ePhone url

  const toggleShowQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  if (!projects) {
    return null;
  }
  return (
    <div>
      <SubHeader text="Side Projects" />
      <div>
        {/* Factor out into content file when I support html/markdown */}
        Since <a href={"https://elh.github.io/gh-organizer/#/owners/elh/repo-timeline"} rel="noreferrer" className="link">2022</a>, I started tinkering with kooky pet projects as a resolution to share my thoughts more. I use these weeklong spikes to <button className="link decoration-2" onClick={toggleShowQuestions}>learn-by-doing<MousePointerClick size={16} strokeWidth={1.6} /></button> and be {isMobile ? <button className="tooltip" data-tip="Desktop only"><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></button> : <a href={"https://elh.github.io/ePhone?url=https://elh.github.io/&id=" + ePhoneID}><span className="underline decoration-wavy underline-offset-0 decoration-2 decoration-emerald-600">creative</span><MousePointerClick size={16} strokeWidth={1.6} /></a>}. All projects are functional MVPs, documented, and runnable. Check them out!
      </div>
      {projects && projects.groups.map((group, i) =>
        <div className={i > 0 ? "mt-5" : "mt-10"}>
          <div className='font-bold project-header'>{group.name.toUpperCase()}</div>
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
                  &nbsp;(<a href={repo.homepage} target={iframed && !repo.iframe_safe ? "_blank": ""} rel="noreferrer" className="link">site ↗</a>)
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

function Home({ iframed, projects, onHomePage }) {
  return (
    <div className="mb-20">
      <div className="h-screen flex flex-col justify-center">
        {!isMobile && <Torus color="#b0b0b0" />} {/* no 3D on mobile */}
        <Header text="Eugene Huang" />
        <div className="flex">
          <div className="w-5/12">
            <ul>
              <li>is an <a href={`https://goforward.com/carepod`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">engineer in SF</a></li>
              <li>hacks on side projects</li>
              <li>loves a good <a href={"https://letterboxd.com/eugeually/"} rel="noreferrer" className="link decoration-2">film</a></li>
            </ul>
          </div>
          <div className="w-7/12">
            <img alt="A grainy camera mirror selfie" src={selfieImg} className="relative" />
          </div>
        </div>
        <div className="my-6 flex flex-wrap space-x-2 justify-end">
          { onHomePage ? null :
            <a href="" rel="noreferrer" className="mx-2" aria-label="Home">home</a>
          }
          <a href={`https://github.com/elh`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Github"><Github size={20} strokeWidth={1.7} alt="Github" /></a>
          <a href={`https://www.linkedin.com/in/elhonline/`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Linkedin"><Linkedin size={20} strokeWidth={1.7} alt="LinkedIn" /></a>
          <a href={`https://twitter.com/elh_online`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Twitter"><Twitter size={20} strokeWidth={1.7} alt="Twitter" /></a>
        </div>
      </div>
      <Projects projects={projects} iframed={iframed} />
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <Header text="Eugene Huang" />
      <div className='flex'>
        <span>∅ Page not found.</span>
      </div>
    </div>
  );
}

function App() {
  const [content, setContent] = useState("");
  const [iframed] = useState(window.location !== window.parent.location);
  const [onHomePage, setOnHomePage] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content.json`)
        .then(res => res.text())
        .then(text => setContent(JSON.parse(text)));
  }, []);

  useEffect(() => {
    function checkPath() {
      if (window.location.hash === '#/' || window.location.hash === '') {
        setOnHomePage(true);
      } else {
        setOnHomePage(false);
      }
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
              <Route path="/" element={<Home iframed={iframed} projects={content.projects} onHomePage={onHomePage} />} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
