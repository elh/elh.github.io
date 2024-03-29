import React from 'react';
import {isMobile} from 'react-device-detect';
import { Github, Linkedin, Twitter } from 'lucide-react';

import selfieImg from "../img/selfie.jpg";
import chungkingExpress from "../img/chungking_express.jpg";
import mishima from "../img/mishima.jpg";
import beforeSunset from "../img/before_sunset.jpg";
import theMatrix from "../img/the_matrix.jpg";
import perfectDays from "../img/perfect_days.png";
import carepod from "../img/carepod.png";
import elh from "../img/elh.png";
import Torus from '../components/Torus';

function Absolute({ children, style, className }) {
  if (className === undefined) {
    className = "";
  }
  return (
    <div className={`absolute ${className}`} style={style}>
      {children}
    </div>
  );
}

function Image({ src, alt, className }) {
  if (className === undefined) {
    className = "";
  }
  return (
    <img className={`grayscale hover:grayscale-0 relative transition-transform duration-100 transform hover:scale-[1.02] ${className}`} src={src} alt={alt} />
  );
}

function OnPeerHover({ children, className }) {
  if (className === undefined) {
    className = "";
  }
  return (
    <div className={`opacity-0 peer-hover:opacity-100 transition-opacity duration-100 ${className}`}>
      {children}
    </div>
  );
}

function Home({ iframed }) {
  return (
    <div className='px-6'>
      <div className='relative max-w-screen-md mx-auto'>
        {!isMobile && <Torus color="#b0b0b0" />} {/* no 3D on mobile */}

        <div className="mt-8 flex flex-wrap space-x-2 justify-end">
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

        {/* Absolute positioning */}
        <Absolute style={{top: 30}}>
          <header className="flex flex-wrap justify-between items-center mt-6 mb-4">
            <h1 className="text-6xl uppercase mobile-header text-red-700">
              <span className='fleuronregular'>E</span>
              <span className='fleuronmixed'>u</span>
              <span className='fleuronregular'>g</span>
              <span className='fleuronmixed'>en</span>
              <span className='fleuronregular'>e </span>
              <span className='fleuronregular'>H</span>
              <span className='fleuronmixed'>ua</span>
              <span className='fleuronregular'>n</span>
              <span className='fleuronmixed'>g</span>
            </h1>
          </header>
          <ul className="ml-8">
            <li>makes <a href={`https://goforward.com/carepod`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2 hover:text-red-500">crazy healthtech</a> @ Forward in SF</li>
            <li>hacks on <a href={process.env.PUBLIC_URL+`#/projects`} rel="noreferrer" className="link decoration-2 hover:text-red-500">pet projects</a> at night</li>
            <li>devoutly logs movies on <a href={"https://letterboxd.com/eugeually/"} rel="noreferrer" className="link decoration-2 hover:text-red-500">Letterboxd</a></li>
            <li>wants you to support the <a href={"https://roxie.com/"} rel="noreferrer" className="link decoration-2 hover:text-red-500">Roxie Theater</a></li>
          </ul>
        </Absolute>

        <Absolute style={{top: 50, right:20, width:"30%"}}>
          <a className="peer" href={`https://techcrunch.com/2023/11/15/forward-health-carepod-ai-doctor/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Forward CarePod">
            <Image src={carepod} alt="Forward CarePod" className="nomobile" />
          </a>
          <OnPeerHover className="absolute top-20 -left-60">
            <span className="block text-red-500 font-bold text-3xl w-96">"CarePods, a self-contained, AI-powered doctor's office"</span>
          </OnPeerHover>
        </Absolute>

        <Absolute style={{top: 240, right: 0, width:"45%"}}>
          <span className="font-serif	italic">Figure 1. me</span>
          {/* TODO: replace this with ePhone */}
          <img src={selfieImg} alt='Eugene'/>
        </Absolute>

        <Absolute style={{top: 330, left:10, width:"14%"}}>
          <a className='block' href={`https://letterboxd.com/film/chungking-express/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Chungking Express">
            <Image src={chungkingExpress} alt="Chungking Express" className="z-40 nomobile" />
          </a>
        </Absolute>
        <Absolute style={{top: 280, left:110, width:"14%"}}>
          <a className='block' href={`https://letterboxd.com/film/mishima-a-life-in-four-chapters/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Mishima: A Life in Four Chapters">
            <Image src={mishima} alt="Mishima: A Life in Four Chapters" className="z-30 nomobile" />
          </a>
        </Absolute>
        <Absolute style={{top: 355, left:200, width:"14%"}}>
          <a className='block' href={`https://letterboxd.com/film/the-matrix/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - The Matrix">
            <Image src={theMatrix} alt="The Matrix" className="z-20 nomobile" />
          </a>
          <span className="text-sm flex mt-2 justify-center nomobile">^ My Top 4</span>
        </Absolute>
        <Absolute style={{top: 300, left:285, width:"14%"}}>
          <a className='block' href={`https://letterboxd.com/film/before-sunset/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Before Sunset">
            <Image src={beforeSunset} alt="Before Sunset" className="z-10 nomobile" />
          </a>
        </Absolute>

        <Absolute style={{top: 540, left:10, width:"26%"}}>
          <a className="peer" href={`https://www.instagram.com/eugeually/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Instagram">
            <Image src={perfectDays} alt="Perfect Days" className="nomobile" />
          </a>
          <OnPeerHover className="absolute mt-6">
            <span className="block uppercase text-red-500 font-bold text-4xl w-96">Photog</span>
            <span className="block text-red-500 w-96">w/ Hirayama's Olympus Mju-1</span>
          </OnPeerHover>
        </Absolute>

        <Absolute style={{top: 590, left:250, width:"16%"}}>
          <a className="peer" href={`https://github.com/elh`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Github">
            <Image src={elh} alt="Eugene" className="nomobile" />
          </a>
          <OnPeerHover className="absolute -top-16 left-16">
            <span className="block whitespace-nowrap text-red-500 font-mono text-4xl">$code</span>
          </OnPeerHover>
        </Absolute>
      </div>
    </div>
  );
}

export default Home;