import React from 'react';

function Header({ text }) {
  return (
    <header className="flex flex-wrap justify-between items-center mt-6 mb-8">
      <h1 className="text-4xl font-bold uppercase">{text}</h1>
    </header>
  );
}

export default Header;
