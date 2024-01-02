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
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authKey = localStorage.getItem('authKey');
        setIsLoggedIn(authKey ? true : false);
    }, []);

    const [profile, setProfile] = useState(null);

    const [isLoading, toggleIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axiosInstance.get(`/profile`, { headers: { Authorization: `Bearer ${authKey}` } });
                setProfile(response.data);
                toggleIsLoading(false);
                // console.log("DATA", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile();
    }, []);

    const filteredLibrary = profile?.userAromatheques.filter((userFav) => userFav.aromatheque === true);

    if (!isLoggedIn) {
        return <Error />;
    }

    if (!isLoading) {
        return (
            <div className="Library">
                <div className="Library-header">
                    <Link to="/profil">
                        <img
                            className="Library-header-avatar"
                            src={profile?.userImage ? `${process.env.REACT_APP_BASE_URL}/profile/picture/${profile?.userImage}` : avatar}
                            alt="Avatar from current user"
                        />
                    </Link>
                    <h2 className="Library-header-pseudo">{profile?.userName}</h2>
                    <p className="Library-header-register-date">Membre depuis : {dayjs(`${profile?.created_at}`).format('DD MMMM YYYY')} </p>
                </div>

                <div className="Library-favorite-oils">

                    <div className="Library-favorite-oils-header">
                        <GiBrandyBottle className="Library-favorite-oils-header-icon" aria-label="Oil bottle icon" />
                        <h3 className="Library-favorite-oils-header-title">{filteredLibrary.length > 0 ? `${filteredLibrary.length} huiles dans votre aromathèque` : "0 huile dans votre aromathèque"}</h3>
                    </div>

                    <div className="Library-favorite-oils-element-container">
                        {filteredLibrary.length > 0 ? filteredLibrary.map((favorite) => (
                                <Oil key={favorite.id} {...favorite} />
                            ))
                            : <p className="Library-favorite-oils-element-title">Vous n'avez pas d'huiles dans votre aromathèque.</p>
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
