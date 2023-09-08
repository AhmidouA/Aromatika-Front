import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useScrollTop from '../hooks/useScrollTop';


function ErrorPage() {
  useScrollTop();

  return (
    <>
        <Header />
        <About />
        <Footer />
    </>
  );
}

export default ErrorPage;