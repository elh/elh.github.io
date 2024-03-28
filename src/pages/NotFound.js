import React from 'react';

import Header from '../components/Header';

function NotFound() {
  return (
    <div>
      <Header text="Eugene Huang" />
      <div className='flex'>
        <span>∅ Page not found.</span>
      </div>
    </div>
  );
}

export default NotFound;
