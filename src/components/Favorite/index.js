// -- Mes imports externes
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import axiosInstance from '../../utils/axios';

// -- Mes imports locaux
import "./style.scss";
import { GiBrandyBottle } from 'react-icons/gi';
import avatar from "./avatar.jpg";

import Oil from "./Oil";
import Error from "../Error/index";
import Spinner from "../Spinner";

// -- Mon composant
function Library() {
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

    // Récupération des huiles favorites uniquement
    const filteredFavorite = profile?.userFavorites.filter((userFav) => userFav.favorite === true);
    console.log("FILTERED", filteredFavorite);

    // MON RENDU
    if (!isLoggedIn) {
        return <Error />;
    }

    if (!isLoading) {
        return (
            <div className="Favorite">
                <div className="Favorite-header">
                    <Link to="/profil">
                        <img
                            className="Favorite-header-avatar"
                            src={profile?.userImage ? `${process.env.REACT_APP_BASE_URL}/profile/picture/${profile?.userImage}` : avatar}
                            alt="Avatar from current user"
                        />
                    </Link>
                    <h2 className="Favorite-header-pseudo">{profile?.userName}</h2>
                    <p className="Favorite-header-register-date">Membre depuis : {dayjs(`${profile?.created_at}`).format('DD MMMM YYYY')} </p>
                </div>

                <div className="Favorite-oils">

                    <div className="Favorite-oils-header">
                        <GiBrandyBottle className="Favorite-oils-header-icon" aria-label="Oil bottle icon" />
                        <h3 className="Favorite-oils-header-title">{filteredFavorite.length > 0 ? `${filteredFavorite.length} huiles dans vos favoris` : "0 huile dans vos favoris"}</h3>
                    </div>

                    <div className="Favorite-oils-element-container">
                        {filteredFavorite.length > 0 ? filteredFavorite.map((favorite) => (
                                <Oil key={favorite.id} {...favorite} />
                            ))
                            : <p className="Favorite-oils-element-title">Vous n'avez pas d'huiles dans vos favoris.</p>
                        }
                    </div>

                </div>
            </div>
        );
    }
    return <Spinner />;
}

// -- Mon export
export default Library;
