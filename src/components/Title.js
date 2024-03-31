import React from 'react';

function Title({ text }) {
  return (
    <header className="flex flex-wrap justify-between items-center mt-2 mb-8">
      <h1 className="text-4xl font-bold uppercase">{text}</h1>
    </header>
  );
}

export default Title;
