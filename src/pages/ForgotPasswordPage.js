import React from 'react';
import Header from '../components/Header';
import ForgotPassword from '../components/ForgotPassword';
import Footer from '../components/Footer';
import useScrollTop from '../hooks/useScrollTop';

const ForgotPasswordPage = () => {
    useScrollTop();

  return (
      <>
          <Header />
          <ForgotPassword />
          <Footer />
      </>
  );
};

export default ForgotPasswordPage;