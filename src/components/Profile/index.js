// -- Mes imports externes
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axios';

// -- Mes imports locaux
import './style.scss';
import { FaCog } from 'react-icons/fa';
import { GiHeartBottle } from 'react-icons/gi'; // import { FaHandHoldingHeart } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import avatar from './avatar.jpg';

import Wishlist from './Wishlist/index';
import Library from './Library/index';
import Error from '../Error/index';
import Spinner from '../Spinner';

// -- Mon composant
function Profile() {
    // Pour vérifier que mon utilisateur est bien connecté
    // Si l'utilisateur n'est pas connecté, on ne montre pas la page profil
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authKey = localStorage.getItem('authKey');
        setIsLoggedIn(authKey ? true : false);
    }, []);

    // Pour récupérer les données de l'utilisateur et les afficher
    const [profile, setProfile] = useState(null);
    console.log("FAVORIS", profile?.userFavorites);

    // Pour instaurer un loading lorsqu'on fait appel à l'API pour le chargement des données du profil
    const [isLoading, toggleIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axiosInstance.get(`/profile`, { headers: { Authorization: `Bearer ${authKey}` } });
                setProfile(response.data);
                toggleIsLoading(false);
                console.log("DATA", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile();
    }, []);

    

    // PLAN
    // 1 - Je dois récupérer profile.userFavorite
    // userFavorites est un array avec des objets
    // userFavorites: (3) [{…}, {…}, {…}]
    // 0:
    //     aromatheque: null
    //     created_at: "2023-03-09T08:22:21.510Z"
    //     favorite: true
    //     id: 1
    //     oil_id: 1
    //     updated_at: null
    //     user_id: 1
    // 2 - Je dois récupérer uniquement les favorite : true
    // 3 - Je dois ensuite
    // 3a) maper les huiles favorite true
    // 3b) ne garder que les trois dernières huiles ajoutées en BDD
    // 3c) envoyer les ids des huiles en props pour mon composant whishlist
    // ======> Voir comment gérer si il n'y a aucun huiles en bdd dans le profil

    // Récupération des huiles favorites nested (true)
    const filteredFavorite = profile?.userFavorites.filter((userFav) => userFav.favorite === true || userFav.favorite === null);
    console.log("filteredFavorite", filteredFavorite);

    // Récupération des huiles de l'aromathèque nested (true)
    const filteredLibrary = profile?.userAromatheques.filter((userFav) => userFav.aromatheque === true || userFav.aromatheque === null);
    console.log("filteredLibrary", filteredLibrary);

    // MON RENDU
    if (!isLoggedIn) {
        return <Error />;
    }

    if (!isLoading) {
        return (
            <div className="Profile">

                <div className="Profile-header">
                    <img
                        className="Profile-header-avatar"
                        src={profile?.userImage ? `${process.env.REACT_APP_BASE_URL}/profile/picture/${profile?.userImage}` : avatar}
                        alt="Avatar from current user"
                    />
                    <h2 className="Profile-header-pseudo"> {profile?.userName} </h2>
                    <p className="Profile-header-register-date">Membre depuis : {dayjs(`${profile?.created_at}`).format('DD MMMM YYYY')}</p>
                </div>

                <div className="Profile-cog">
                    <Link to="/parametres" className="Profile-cog-link">
                        <FaCog className="Profile-cog-icon" />
                    </Link>
                </div>

                <div className="Profile-favorite-oils-wish">

                    <div className="Profile-favorite-oils-wish-header">
                        <GiHeartBottle className="Profile-favorite-oils-wish-header-icon" aria-label="Love icon" />
                        <h3 className="Profile-favorite-oils-wish-header-title">Les dernières huiles ajoutées à votre liste de favoris</h3>
                    </div>

                    <div className="Profile-favorite-oils-wish-element-container">
                        {filteredFavorite.length > 0 ? filteredFavorite.filter((item, index, array) => index >= array.length - 3)
                            .map((favorite) => (
                                <Wishlist key={favorite.id} {...favorite} />
                            ))
                            : <p className="Profile-favorite-oils-wish-element-title">Vous n'avez pas d'huiles dans vos favoris.</p>
                        }
                    </div>

                </div>

                <div className="Profile-favorite-oils-library">

                    <div className="Profile-favorite-oils-library-header">
                        <FaStar className="Profile-favorite-oils-library-header-icon" aria-label="Star icon" />
                        <h3 className="Profile-favorite-oils-library-header-title">Les dernières huiles ajoutées à votre aromathèque</h3>
                    </div>

                    <div className="Profile-favorite-oils-library-element-container">
                        {filteredLibrary.length > 0 ? filteredLibrary.filter((item, index, array) => index >= array.length - 3)
                            .map((favorite) => (
                                <Library key={favorite.id} {...favorite} />
                            ))
                            : <p className="Profile-favorite-oils-wish-element-title">Vous n'avez pas d'huiles dans votre aromathèque.</p>
                        }
                    </div>

                </div>
            </div>
        );
    }
    return <Spinner />;
}

// -- Mon export
export default Profile;
