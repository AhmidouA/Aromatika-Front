import React from 'react';
import Header from '../components/Header';
import Favorite from '../components/Favorite';
import Footer from '../components/Footer';
import useScrollTop from '../hooks/useScrollTop';


function LibraryPage() {
    useScrollTop();

    return (
        <>
            <Header />
            <Favorite />
            <Footer />
        </>
    );
}

export default LibraryPage;
