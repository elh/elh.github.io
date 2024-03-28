import React from 'react';
import {isMobile} from 'react-device-detect';
import { Github, Linkedin, Twitter } from 'lucide-react';

import selfieImg from "../img/selfie.jpg";
import Torus from '../components/Torus';

function Absolute({ children, style }) {
  return (
    <div className='absolute' style={style}>
      {children}
    </div>
  );
}

function Home({ iframed }) {
  return (
    <div className='px-4'>
      <div className='relative max-w-screen-md mx-auto'>
        {!isMobile && <Torus color="#b0b0b0" />} {/* no 3D on mobile */}

        {/* Absolute positioning */}
        <Absolute style={{top: 100}}>
          <header className="flex flex-wrap justify-between items-center mt-6 mb-8">
            <h1 className="text-6xl uppercase">
              <span className='fleuronregular'>Eugene Huan</span>
              <span className='fleuronmixed'>g</span>
            </h1>
          </header>
        </Absolute>

        <Absolute style={{top: 180, left: 14}}>
          <ul>
            <li>makes <a href={`https://goforward.com/carepod`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">crazy healthtech</a> in SF</li>
            <li>hacks on <a href={process.env.PUBLIC_URL+`#/projects`} rel="noreferrer" className="link decoration-2">pet projects</a> at night</li>
            <li>devoutly logs movies on <a href={"https://letterboxd.com/eugeually/"} rel="noreferrer" className="link decoration-2">Letterboxd</a></li>
            <li>wants you to support the <a href={"https://roxie.com/"} rel="noreferrer" className="link decoration-2">Roxie Theater</a></li>
          </ul>
        </Absolute>

        <Absolute style={{top: 300, right: 0, width:"55%"}}>
          <img src={selfieImg} />
          <div className="my-4 flex flex-wrap space-x-2 justify-end">
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
        </Absolute>
      </div>
    </div>
  );
}

export default Home;
