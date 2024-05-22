import React from 'react';

import Title from '../components/Title';
import PageLayout from '../components/PageLayout';

function NotFound({iframed}) {
  return (
    <PageLayout iframed={iframed}>
      <div>
        <Title text="404" />
        <div className='flex'>
          <span>∅ Page not found.</span>
        </div>
      </div>
    </PageLayout>
  );
}

export default NotFound;
