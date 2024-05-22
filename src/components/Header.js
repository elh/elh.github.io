import React from 'react';
// import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = ({ iframed, onHomePage }) => {
  return (
    <div className="mt-12 flex flex-wrap justify-between">
      { onHomePage
        ? <div />
        : <a href="" rel="noreferrer" className="text-sm" aria-label="Home">← home</a>
      }
      {/* { onHomePage &&
        <div className="flex flex-wrap space-x-2">
          <a href={`https://github.com/elh`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Github">
            <Github size={18} strokeWidth={1.7} alt="Github" />
          </a>
          <a href={`https://www.linkedin.com/in/elhonline/`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Linkedin">
            <Linkedin size={18} strokeWidth={1.7} alt="LinkedIn" />
          </a>
          <a href={`https://twitter.com/elh_online`} target={iframed ? "_blank": ""} rel="noreferrer" className="link link-hover" aria-label="Twitter">
            <Twitter size={18} strokeWidth={1.7} alt="Twitter" />
          </a>
        </div>
      } */}
    </div>
  );
};

export default Header;
