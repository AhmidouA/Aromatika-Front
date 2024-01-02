// -- Mes imports locaux
import axiosInstance from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { FaPlus } from "react-icons/fa";
import avatar from "../avatar.jpg";


// -- Mon composant
function ParametersProfile({ userId, userName, userImage }) {
    const navigate = useNavigate();

    const [file, setFile] = useState('');
    // console.log("FILE", file);

    // pour visualiser la photo
    const [picture, setPicture] = useState(null)


    /**       Les methode */
    const handleImageChange = (event) => {
        setPicture(URL.createObjectURL(event.target.files[0]));
        return setFile(event.target.files[0]);
    };

    const handleSubmitPicture = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await axiosInstance.post(`/profile/picture/${userId}`, formData);
            setFile('');

            toast.success(`Votre photo de profil a été changée avec succès ＼(≧▽≦)／`);

            setTimeout(() => {
                navigate('/profil');
            }, 2500);

        } catch (error) {
            console.log(error);
        }
    };


    /**       Les props */
    const id = userId;


    /**       Les states */
    const [profile, setProfile] = useState(null)
    const [pseudo, setPseudo] = useState("");
    const [usernameInStore, setUsernameInStore] = useState(""); 
    


    
    /**       Les methode */
    const handleSubmitUsername = async (event) => {
        event.preventDefault();

        try {
            const authKey = localStorage.getItem('authKey');
            const response = await axiosInstance.put(`/profile/username/${id}`, {
                username: pseudo,
            }, {
                headers: {
                    Authorization: `Bearer ${authKey}`,
                },
            });
                toast.success(`Votre Pseudo de profil a bien été modifié. 
                            Lors de votre prochaine connexion votre pseudo sera mis à jour   
                            ＼(≧▽≦)／`);

            localStorage.setItem('username', response.data.username)
            
            setTimeout(() => {
            navigate('/profil');
            }, 5000); 

        } catch(error) {
            console.log(error);
            if (error.response.data.message = "Ce nom d'utilisateur est déjà pris") {
                toast.error('Ce Pseudo est déjà pris');
            } else {
            toast.error('Erreur lors de la modification du Pseudo. Veuillez réessayer plus tard.');
            }
        }          
    };


    /**       Les hooks */
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axiosInstance.get(`/profile`, 
                    {headers: {Authorization: `Bearer ${authKey}`,},
                });
                const storedUsername = localStorage.getItem('username');
                if (storedUsername) {
                    setUsernameInStore(storedUsername);
                } else {
                    setUsernameInStore(response.data.userName);
                }
                

            } catch (error) {
                console.log(error);
                }
        };
        fetchProfile();            
    }, []);


    return (
        <div className="Parameters-profile">

            <div className="Parameters-profile-avatar">
                <form className="Parameters-profile-avatar-form">
                    <label className="Parameters-profile-avatar-form-label" htmlFor="avatar">Mon avatar actuel :</label>
                    <div className="Parameters-profile-avatar-form-container">
                        <div className="Parameters-profile-avatar-form-plus-hover">                      
                            <img
                                className="Parameters-profile-avatar-form-avatar-image"
                                
                                src={userImage ? `${process.env.REACT_APP_BASE_URL}/profile/picture/${userImage}` : avatar}
                                alt="The avatar you downloaded"
                            />
                            <label htmlFor="avatar" className="Parameters-profile-avatar-form-plus-text">Changer d'avatar</label>
                            
          
                            <input
                                className="Parameters-profile-avatar-form-avatar-input"
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept='image/*'
                                onChange={handleImageChange}
                            />
                             <input
                                className="Parameters-profile-avatar-form-submit"
                                type="submit"
                                value="Valider"
                                onClick={handleSubmitPicture}
                            />                          
                        </div>  
                            {/* Pour visualiser la photo au avant de valider */}
                            {/* Le nom de la nouvelle image quand il telecharge */}
                            
                            {picture !== null && (
                            <div
                                className="Parameters-profile-avatar-form-centered"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                
                                <img
                                className="Parameters-profile-avatar-form-avatar-image"
                                style={{ maxWidth: '13rem',  maxHeight: '13rem'}}
                                src={picture}
                                alt="The avatar you downloaded"
                                />
                                 <br />
                               
                            </div>
                             
                            )}
                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{file.name}</p>
                    </div>
                </form>
            </div>

            <div className="Parameters-profile-pseudo">
                <form className="Parameters-profile-pseudo-form" onSubmit={handleSubmitUsername}>
                    <label className="Parameters-profile-pseudo-form-label" for="pseudo">Mon pseudo actuel : {usernameInStore}</label>
                    <div className="Parameters-profile-pseudo-form-container">
                        <input
                            className="Parameters-profile-pseudo-form-input"
                            type="text"
                            id="pseudo"
                            name="pseudo"
                            placeholder="Entrer un nouveau pseudo"
                            value={pseudo}
                            onChange={(event) => setPseudo(event.target.value)}
                        />
                        <input className="Parameters-profile-pseudo-form-submit" type="submit" value="Valider" />
                    </div>
                </form>
            </div>

        </div>
    );
}

// -- Mon export
export default ParametersProfile;
