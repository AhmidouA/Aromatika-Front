import Footer from '../components/Footer';
import Header from '../components/Header';
import Parameters from '../components/Parameters';
import useScrollTop from '../hooks/useScrollTop';

function userParameters() {
  useScrollTop();

  return (
    <>
        <Header />
        <Parameters />
        <Footer />
    </>
  );
}

export default userParameters;
