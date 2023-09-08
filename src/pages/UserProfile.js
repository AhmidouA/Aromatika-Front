// -- Mes imports locaux
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Header from '../components/Header';
import useScrollTop from '../hooks/useScrollTop';

// -- Mon composant
function UserProfile() {
  useScrollTop();

  return (
    <>
        <Header />
        <Profile />
        <Footer />
    </>
  );
}

// -- Mon export
export default UserProfile;
