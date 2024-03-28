import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const PageLayout = ({ children, iframed, onHomePage }) => {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="flex flex-wrap justify-center m-auto">
        <div className="max-w-[50rem] mx-4 mb-6 leading-relaxed">
          {children}
          <div className="my-6 flex flex-wrap space-x-2 justify-end">
            { onHomePage ? null :
              <a href="" rel="noreferrer" className="mx-2" aria-label="Home">home</a>
            }
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
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
