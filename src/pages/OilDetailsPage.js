import React from 'react';
import Header from '../components/Header';
import OilDetails from '../components/OilDetails/OilDetails';
import useScrollTop from '../hooks/useScrollTop';

function OilDetailsPage() {
  useScrollTop();

  return (
    <>
      <Header />
      <OilDetails />
    </>
  );
}

export default OilDetailsPage;
