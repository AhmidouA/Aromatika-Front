// -- Mes imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import axiosInstance from '../../utils/axios';

import "./style.scss";
import avatar from "./avatar.jpg";

import ParametersProfile from "./Profile";
import ParametersPassword from "./Password";
import Error from "../Error/index";
import Spinner from "../Spinner";

// -- Mon composant
function Parameters() {
    // PROFIL
    // Pour vérifier que mon utilisateur est bien connecté
    // Si l'utilisateur n'est pas connecté, on ne montre pas la page des paramètres
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Pour récupérer les données de l'utilisateur et les afficher
    const [profile, setProfile] = useState(null);
    // Pour instaurer un loading lorsqu'on fait appel à l'API pour le chargement des données du profil
    const [isLoading, toggleIsLoading] = useState(true);

    useEffect(() => {
        const authKey = localStorage.getItem('authKey');
        setIsLoggedIn(authKey ? true : false);

        const fetchProfile = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axiosInstance.get(`/profile`, { headers: { Authorization: `Bearer ${authKey}` } });
                console.log("response.data>>>>>", response.data)
                toggleIsLoading(false);

                // Mettre à jour uniquement le nom d'utilisateur
                const storedUsername = localStorage.getItem("username");
                if (storedUsername) {
                response.data.userName = storedUsername;
            }
                setProfile(response.data);

               
                console.log("DATA", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile();
    }, []);

    console.log("Profile Dans le Parent>>>>", profile)

    // TOGGLE
    // Pour garder en mémoire si mon toggle est "true" ou "false"
    const [isToggle, setToggle] = useState(true);

    // Pour gérer le clic de mon toggle
    const handleToggle = () => {
        setToggle((current) => !current);
    };

    // MON RENDU
    if (!isLoggedIn) {
        return <Error />;
    }

    if (!isLoading) {
        return (
            <div className="Parameters">
                <div className="Parameters-header">
                    <Link to="/profil">
                        <img
                            className="Parameters-header-avatar"
                            src={profile?.userImage ? `${process.env.REACT_APP_BASE_URL}/profile/picture/${profile?.userImage}` : avatar}
                            alt="Avatar from current user"
                        />
                    </Link>
                    <h2 className="Parameters-header-pseudo">{profile?.userName}</h2>
                    <p className="Parameters-header-register-date">Membre depuis : {dayjs(`${profile?.created_at}`).format('DD MMMM YYYY')}</p>
                </div>

                <div className="Parameters-toggle">
                    <span className="Parameters-toggle-element-profile">Profil</span>
                    <input
                        className="Parameters-toggle-switch"
                        type="checkbox"
                        onClick={handleToggle}
                    />
                    <span className="Parameters-toggle-element-password">Mot de passe</span>
                </div>

                {isToggle && <ParametersProfile {...profile} />}

                {!isToggle && <ParametersPassword {...profile} />}

            </div>
        );
    }
    return <Spinner />;
}

// -- Mon export
export default Parameters;
