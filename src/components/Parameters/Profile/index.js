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


    // ROUTES BACK
    // router.post(‘/profile/picture/:id’, auth.checkToken, upload.single(‘image’), userController.addPicture);
    // router.get(‘/profile/picture/:file’, userController.streamPicture);

    // PLAN Image
    // 1 - Si l'utilisateur veut changer de photo, je dois récupérer la photo
    // 2 - Et envoyer la photo en post

    /**       Les states */
    // Je récupère mon image envoyée par mon utilisateur et je la stocke dans file
    const [file, setFile] = useState('');
    console.log("FILE", file);


    /**       Les methode */

    // Pour récupérer l'image envoyée dans mon input du form "Profile Avatar"
    const handleImageChange = (event) => {
        return setFile(event.target.files[0]);
    };


    // Pour envoyer l'image en post lors du clic du bouton envoyé
    const handleSubmitPicture = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await axiosInstance.post(`/profile/picture/${userId}`, formData);
            // console.log("response Depuis les param pour la photo", response)
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


    // PLAN Update userName

    /**       Les props */
    const id = userId;


    /**       Les states */
    // state profile
    const [profile, setProfile] = useState(null)
    // state new username
    const [pseudo, setPseudo] = useState("");
    

    /**       Les methode */
    // methode validation du from pour le changement du Pseudo
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
            console.log("response Dans le handleSubmitUsername Params Profile", response)

             // On envoie un toast de succès après une modification réussie du mot de passe
             toast.success(`Votre Pseudo de profil a bien été modifié. 
                            Lors de votre prochaine connexion votre pseudo sera mis à jour   
                            ＼(≧▽≦)／`);


            console.log("response Dans le params", response.data)
            localStorage.setItem('username', response.data.username)
            


            // On redirige vers la page profil après une seconde
            setTimeout(() => {
            navigate('/profil');
            }, 5000); // 2seconde

        } catch(error) {
            console.log(error);
            // console.log("error.response.message.data>>>>", error.response.data.message)
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
                // localStorage pour le token
                const authKey = localStorage.getItem('authKey');
                // response avec l'autorisation du token
                const response = await axiosInstance.get(`/profile`, 
                    {headers: {Authorization: `Bearer ${authKey}`,},
                });

                console.log("useEffect Dans le params profile", response)
                // Mettre à jour le pseudonyme dans l'état local à partir du localStorage
                const storedUsername = localStorage.getItem("username");
                // Vérifie si un pseudonyme est stocké dans le localStorage
                if (storedUsername) {
                    // Met à jour l'état profile en utilisant la fonction setProfile
                    // en copiant d'abord les valeurs précédentes (prevProfile) avec ...
                    // puis en remplaçant userName par la valeur stockée localement (storedUsername)
                    setProfile((prevProfile) => ({
                        ...prevProfile, // Copie les valeurs précédentes de prevProfile
                        userName: storedUsername // Remplace userName par storedUsername

                    }))
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
                            {/* Le nom de la nouvelle image quand il telecharge */}
                            <p>{file.name}</p>
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
                    </div>
                </form>
            </div>

            <div className="Parameters-profile-pseudo">
                <form className="Parameters-profile-pseudo-form" onSubmit={handleSubmitUsername}>
                    <label className="Parameters-profile-pseudo-form-label" for="pseudo">Mon pseudo actuel : {profile?.userName}</label>
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
