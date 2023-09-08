import Footer from '../components/Footer';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import useScrollTop from '../hooks/useScrollTop';

function Main() {
    useScrollTop();

    return (
        <>
            <Header />
            <MainPage />
            <Footer />
        </>
    );
}

export default Main;