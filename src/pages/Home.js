import React from 'react';
import {isMobile} from 'react-device-detect';
import { Github, Linkedin, Twitter } from 'lucide-react';

import selfieImg from "../img/selfie.jpg";
import chungkingExpress from "../img/chungking_express.jpg";
import mishima from "../img/mishima.jpg";
import beforeSunset from "../img/before_sunset.jpg";
import theMatrix from "../img/the_matrix.jpg";
import perfectDays from "../img/perfect_days.png";
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
    <div className='px-6'>
      <div className='relative max-w-screen-md mx-auto'>
        {!isMobile && <Torus color="#b0b0b0" />} {/* no 3D on mobile */}

        {/* Absolute positioning */}
        <Absolute style={{top: 50}}>
          <header className="flex flex-wrap justify-between items-center mt-6 mb-8">
            <h1 className="text-6xl uppercase mobile-header">
              <span className='fleuronregular'>Eugene </span>
              {/* <span className='fleuronmixed'>e</span>
              <span className='fleuronregular'>ne </span> */}
              <span className='fleuronregular'>H</span>
              <span className='fleuronmixed'>ua</span>
              <span className='fleuronregular'>n</span>
              <span className='fleuronmixed'>g</span>
            </h1>
          </header>
        </Absolute>

        <Absolute style={{top: 130, left: 14}}>
          <ul>
            <li>makes <a href={`https://goforward.com/carepod`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">crazy healthtech</a> @ Forward in SF</li>
            <li>hacks on <a href={process.env.PUBLIC_URL+`#/projects`} rel="noreferrer" className="link decoration-2">pet projects</a> at night</li>
            <li>devoutly logs movies on <a href={"https://letterboxd.com/eugeually/"} rel="noreferrer" className="link decoration-2">Letterboxd</a></li>
            <li>wants you to support the <a href={"https://roxie.com/"} rel="noreferrer" className="link decoration-2">Roxie Theater</a></li>
          </ul>
        </Absolute>

        <Absolute style={{top: 240, right: 0, width:"45%"}}>
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

        <Absolute style={{top: 330, left:10}}>
          <a className='block w-9/12' href={`https://letterboxd.com/film/chungking-express/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Chungking Express">
            <img className='grayscale z-40 relative nomobile' src={chungkingExpress} />
          </a>
          </Absolute>
        <Absolute style={{top: 280, left:110}}>
          <a className='block w-9/12' href={`https://letterboxd.com/film/mishima-a-life-in-four-chapters/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Mishima: A Life in Four Chapters">
            <img className='grayscale z-30 relative nomobile' src={mishima} />
          </a>
          </Absolute>
        <Absolute style={{top: 355, left:200}}>
          <a className='block w-9/12' href={`https://letterboxd.com/film/the-matrix/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - The Matrix">
            <img className='grayscale z-20 relative nomobile' src={theMatrix} />
          </a>
        </Absolute>
        <Absolute style={{top: 300, left:285}}>
          <a className='block w-9/12' href={`https://letterboxd.com/film/before-sunset/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Letterboxd - Before Sunset">
            <img className='grayscale z-10 relative nomobile' src={beforeSunset} />
          </a>
        </Absolute>

        <Absolute style={{top: 510, left:-20, width:"30%"}}>
          <a href={`https://www.instagram.com/eugeually/`} target={iframed ? "_blank": ""} rel="noreferrer" aria-label="Instagram">
            <img className='grayscale z-100 relative nomobile' src={perfectDays} />
          </a>
        </Absolute>
      </div>
    </div>
  );
}

export default Home;
