import Footer from '../components/Footer';
import Header from '../components/Header';
import Register from '../components/Register/Register';
import useScrollTop from '../hooks/useScrollTop';

function Login() {
  useScrollTop();

  return (
    <>
        <Header/>
        <Register />
        <Footer/>
    </>
  );
}

export default Login;
