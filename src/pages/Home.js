import React from 'react';
import {isMobile} from 'react-device-detect';

import selfieImg from "../img/selfie.jpg";
import Torus from '../components/Torus';
import Header from '../components/Header';

function Home({ iframed }) {
  return (
    <div>
      <Header text="Eugene Huang" />
      <div className="flex">
        {!isMobile && <Torus color="#b0b0b0" />} {/* no 3D on mobile */}
        <div className="w-5/12">
          <ul>
            <li>is an <a href={`https://goforward.com/carepod`} target={iframed ? "_blank": ""} rel="noreferrer" className="link decoration-2">engineer in SF</a></li>
            <li>hacks on <a href={process.env.PUBLIC_URL+`#/projects`} rel="noreferrer" className="link decoration-2">side projects</a></li>
            <li>loves a good <a href={"https://letterboxd.com/eugeually/"} rel="noreferrer" className="link decoration-2">film</a></li>
          </ul>
        </div>
        <div className="w-7/12">
          <img src={selfieImg} className="relative" />
        </div>
      </div>
    </div>
  );
}

export default Home;
