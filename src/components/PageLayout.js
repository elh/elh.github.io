import React from 'react';

import Header from './Header';

const PageLayout = ({ children, iframed, onHomePage }) => {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="flex flex-wrap w-full justify-center mx-auto">
        <div className="w-full max-w-[50rem] mx-4 mb-6 leading-relaxed">
          <Header iframed={iframed} onHomePage={onHomePage} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
