import React from 'react';
import {isMobile} from 'react-device-detect';

import selfieImg from "../img/selfie.jpg";
import Torus from '../components/Torus';
import Header from '../components/Header';

function Absolute({ children, style }) {
  return (
    <div className='absolute' style={style}>
      {children}
    </div>
  );
}

function Home({ iframed }) {
  return (
    <div className='px-2'>
      <div className='relative max-w-screen-sm mx-auto'>
        {!isMobile && <Torus color="#b0b0b0" />} {/* no 3D on mobile */}

        {/* Absolute positioning */}
        <Absolute style={{top: 100}}>
          <Header text="Eugene Huang" />
        </Absolute>

        <Absolute style={{top: 160, left: 14}}>
          <ul>
            <li>is an <a href={`https://goforward.com/carepod`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">engineer in SF</a></li>
            <li>hacks on <a href={process.env.PUBLIC_URL+`#/projects`} rel="noreferrer" className="link decoration-2">side projects</a></li>
            <li>loves a good <a href={"https://letterboxd.com/eugeually/"} rel="noreferrer" className="link decoration-2">film</a></li>
          </ul>
        </Absolute>

        <Absolute style={{top: 260, right: 0, width:"50%"}}>
          <img src={selfieImg} />
        </Absolute>
      </div>
    </div>
  );
}

export default Home;
