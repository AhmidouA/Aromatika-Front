import React from 'react';
import Header from '../components/Header';
import ResetPassword from '../components/ResetPassword'
import Footer from '../components/Footer';
import useScrollTop from '../hooks/useScrollTop';

const ResetPasswordPage = () => {
    useScrollTop();

  return (
      <>
          <Header />
          <ResetPassword />
          <Footer />
      </>
  );
};

export default ResetPasswordPage;