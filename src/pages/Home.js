import React, { useState } from 'react';
// import { Github, Linkedin, Twitter } from 'lucide-react';

import Header from '../components/Header';
import selfieImg from "../img/selfie.jpg";
// import chungkingExpress from "../img/chungking_express.jpg";
// import mishima from "../img/mishima.jpg";
// import beforeSunset from "../img/before_sunset.jpg";
// import theMatrix from "../img/the_matrix.jpg";
// import perfectDays from "../img/perfect_days.png";
// import carepod from "../img/carepod.png";
// import elh from "../img/elh.png";

function Absolute({ children, style, className, onMouseEnter, onMouseLeave }) {
  if (className === undefined) {
    className = "";
  }
  return (
    <div className={`absolute ${className}`} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
  // const [letterboxdHovered, setLetterboxdHovered] = useState(false);

  return (
    <div className='px-6'>
      <div className='relative max-w-screen-md mx-auto'>
        {/* {!isMobile && <Torus color="#b0b0b0" />} no 3D on mobile */}

        <Header iframed={iframed} onHomePage={true} />

        {/* Absolute positioning */}
        <Absolute style={{top: 30}}>
          <header className="flex flex-wrap justify-between items-center mt-6 mb-4">
            <h1 className="text-6xl uppercase mobile-header">
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
            <li>makes <a href={`https://goforward.com/carepod`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">crazy healthtech</a> @ Forward in SF</li>
            <li>hacks on <a href={process.env.PUBLIC_URL+`#/projects`} rel="noreferrer" className="link decoration-2">pet projects</a> at night</li>
            <li>devoutly logs movies on <a href={"https://letterboxd.com/eugeually/"} rel="noreferrer" className="link decoration-2">Letterboxd</a></li>
            <li>loves shooting film <a href={"https://www.instagram.com/eugeually/"} rel="noreferrer" className="link decoration-2">photos</a></li>
          </ul>
        </Absolute>

        {/* <Absolute style={{top: 50, right:20, width:"30%"}}>
          <a className="peer" href={`https://techcrunch.com/2023/11/15/forward-health-carepod-ai-doctor/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Forward CarePod">
            <Image src={carepod} alt="Forward CarePod" className="nomobile" />
          </a>
          <OnPeerHover className="absolute top-24 -left-36 pointer-events-none">
            <span className="block text-red-500 font-bold text-xl w-60 font-serif">"CarePods, a self-contained, AI-powered doctor's office"</span>
          </OnPeerHover>
        </Absolute> */}

        <Absolute style={{top: 220, right: 0, width:"50%"}}>
          <span className="font-serif	italic">Figure 1. me</span>
          {/* TODO: replace this with ePhone */}
          <img src={selfieImg} alt='Eugene'/>
        </Absolute>

        {/* <Absolute style={{top: 330, left:10, width:"14%"}} onMouseEnter={() => setLetterboxdHovered(true)} onMouseLeave={() => setLetterboxdHovered(false)}>
          <a className='block' href={`https://letterboxd.com/film/chungking-express/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Chungking Express">
            <Image src={chungkingExpress} alt="Chungking Express" className="z-40 nomobile" />
          </a>
        </Absolute>
        <Absolute style={{top: 280, left:110, width:"14%"}} onMouseEnter={() => setLetterboxdHovered(true)} onMouseLeave={() => setLetterboxdHovered(false)}>
          <a className='block' href={`https://letterboxd.com/film/mishima-a-life-in-four-chapters/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Mishima: A Life in Four Chapters">
            <Image src={mishima} alt="Mishima: A Life in Four Chapters" className="z-30 nomobile" />
          </a>
        </Absolute>
        <Absolute style={{top: 355, left:200, width:"14%"}} onMouseEnter={() => setLetterboxdHovered(true)} onMouseLeave={() => setLetterboxdHovered(false)}>
          <a className='block' href={`https://letterboxd.com/film/the-matrix/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - The Matrix">
            <Image src={theMatrix} alt="The Matrix" className="z-20 nomobile" />
          </a>
          {letterboxdHovered && <span className="flex mt-2 justify-center font-bold text-red-500">My Top 4</span>}
        </Absolute>
        <Absolute style={{top: 300, left:285, width:"14%"}} onMouseEnter={() => setLetterboxdHovered(true)} onMouseLeave={() => setLetterboxdHovered(false)}>
          <a className='block' href={`https://letterboxd.com/film/before-sunset/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Before Sunset">
            <Image src={beforeSunset} alt="Before Sunset" className="z-10 nomobile" />
          </a>
        </Absolute> */}

        {/* <Absolute style={{top: 540, left:10, width:"26%"}}>
          <a className="peer" href={`https://www.instagram.com/eugeually/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Instagram">
            <Image src={perfectDays} alt="Perfect Days" className="nomobile" />
          </a>
          <OnPeerHover className="absolute mt-6 pointer-events-none">
            <span className="block text-red-500 font-bold text-xl">Photos</span>
            <span className="block text-red-500 text-sm italic">Olympus Mju-1</span>
          </OnPeerHover>
        </Absolute> */}

        {/* <Absolute style={{top: 590, left:250, width:"16%"}}>
          <a className="peer" href={`https://github.com/elh`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Github">
            <Image src={elh} alt="Eugene" className="nomobile" />
          </a>
          <OnPeerHover className="absolute -top-12 pointer-events-none">
            <span className="block whitespace-nowrap text-red-500 font-bold text-xl">coding</span>
          </OnPeerHover>
        </Absolute> */}
      </div>
    </div>
  );
}

export default Home;
