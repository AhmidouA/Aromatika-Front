// -- Mes imports locaux
import axiosInstance from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { FaPlus } from "react-icons/fa";
import avatar from "../avatar.jpg";

// -- Mon composant
function ParametersProfile({ userId, userName, userImage }) {
    const navigate = useNavigate();

    // ROUTES BACK
    // router.post(‘/profile/picture/:id’, auth.checkToken, upload.single(‘image’), userController.addPicture);
    // router.get(‘/profile/picture/:file’, userController.streamPicture);

    // PLAN
    // 1 - Si l'utilisateur veut changer de photo, je dois récupérer la photo
    // 2 - Et envoyer la photo en post

    // Je récupère mon image envoyée par mon utilisateur et je la stocke dans file
    const [file, setFile] = useState('');
    console.log("FILE", file);

    // Pour récupérer l'image envoyée dans mon input du form "Profile Avatar"
    const handleImageChange = (event) => {
        return setFile(event.target.files[0]);
    };

    // Pour envoyer l'image en post lors du clic du bouton envoyé
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await axiosInstance.post(`/profile/picture/${userId}`, formData);
            console.log("response Depuis les param", response)
            setFile('');

            // On envoie un toast de succès
            toast.success(`Votre photo de profil a été changée avec succès ＼(≧▽≦)／`);

            // On redirige vers la page profil après une seconde
            setTimeout(() => {
                navigate('/profil');
            }, 2500);
        } catch (error) {
            console.log(error);
        }
    };

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
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className="Parameters-profile-pseudo">
                <form className="Parameters-profile-pseudo-form">
                    <label className="Parameters-profile-pseudo-form-label" for="pseudo">Mon pseudo actuel : {userName}</label>
                    <div className="Parameters-profile-pseudo-form-container">
                        <input
                            className="Parameters-profile-pseudo-form-input"
                            type="text"
                            id="pseudo"
                            name="pseudo"
                            placeholder="Entrer un nouveau pseudo"
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
