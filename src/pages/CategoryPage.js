import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Category/Category';
import useScrollTop from '../hooks/useScrollTop';

function CategoryPage() {
  useScrollTop();

  return (
    <>
      <Header />
      <Category />
      <Footer />
    </>
  );
}

export default CategoryPage;
