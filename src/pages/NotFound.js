import React from 'react';

import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

function NotFound({iframed}) {
  return (
    <PageLayout iframed={iframed}>
      <div>
        <Header text="Eugene Huang" />
        <div className='flex'>
          <span>∅ Page not found.</span>
        </div>
      </div>
    </PageLayout>
  );
}

export default NotFound;
