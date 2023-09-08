import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useScrollTop from '../hooks/useScrollTop';


function ErrorPage() {
  useScrollTop();

  return (
    <>
        <Header />
        <Error />
        <Footer />
    </>
  );
}

export default ErrorPage;
