import React from 'react';
import Header from '../components/Header';
import Library from '../components/Library';
import Footer from '../components/Footer';
import useScrollTop from '../hooks/useScrollTop';


function LibraryPage() {
    useScrollTop();

    return (
        <>
            <Header />
            <Library />
            <Footer />
        </>
    );
}

export default LibraryPage;
