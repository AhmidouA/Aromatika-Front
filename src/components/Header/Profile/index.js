import { CgProfile } from 'react-icons/cg';
import React, { useState, useEffect, useRef, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from 'react-router';
import axiosInstance from '../../../utils/axios';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const [imageProfil, setimageProfil] = useState(null)
  const [file, setFile] = useState('');

  // User Data (Profile)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const authKey = localStorage.getItem('authKey');
        const response = await axiosInstance.get(`/profile`, { headers: { Authorization: `Bearer ${authKey}` } });
        setProfile(response.data);
        // console.log("response Data", response.data)
    
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();   
    
  }, []);


  

  const handleClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  useEffect(() => {
    const authKey = localStorage.getItem('authKey');
    setIsLoggedIn(authKey ? true : false);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Gestion des redirections du profil lorsqu'un utilisateur est connecté
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authKey'); // remove toekn from LocalStorage
    localStorage.removeItem('username'); // remove username from LocalStorage
    localStorage.removeItem('userId'); // remove userId from LocalStorage
    setIsLoggedIn(false);
    toast.success('Vous avez été déconnecté avec succès !');

    // On redirige vers la page profil après une seconde
    setTimeout(() => {
      navigate('/');
    }, 2500);
  };

  // Gestion des différentes routes dans le profil lorsqu'un utilisateur est connecté
  const handleProfile = () => {
    navigate('/profil');
  };

  const handleLibrary = () => {
    navigate('/aromatheque');
  };

  const handleFavorite = () => {
    navigate('/favoris');
  };

  console.log("profile", profile)

  return (
    <div>
      <div onClick={toggleModal}>
        {isLoggedIn && profile?.userImage ? (
          <img
            className='profile-avatar'
            alt='Your avatar'
            src={`${process.env.REACT_APP_BASE_URL}/profile/picture/${profile.userImage}`}
          />
        ) : (
          <CgProfile className='profile-icon' alt='Profile Icon' />
        )}
      </div>
      {isOpen && (
        <div ref={modalRef} className='profile-modal'>
          {/* <CgProfile className='profile-modal-icon' /> */}
          {isLoggedIn ? (
            <Fragment>
              <button className='profile-modal-btn' onClick={handleProfile}>
                Profil
              </button>
              <button className='profile-modal-btn' onClick={handleFavorite}>
                Mes favoris
              </button>
              <button className='profile-modal-btn' onClick={handleLibrary}>
                Mon aromathèque
              </button>
              <button className='profile-modal-btn' onClick={handleLogout}>
                Déconnexion
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <a className='profile-modal-btn' href='/login'>
                Se connecter / S'inscrire
              </a>
            </Fragment>
          )}
        </div>
      )}
      <ToastContainer position='top-center' className='my-toast-container' />
    </div>
  );
};

export default Profile;
