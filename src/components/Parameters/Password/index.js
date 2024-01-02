// React
import React, {useState, useEffect} from "react";
// React Router
import { useParams } from 'react-router-dom';
// Icon rediection
import { useNavigate } from 'react-router-dom';
// Css Component
import styled from 'styled-components';
// Toast React
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// axios API 
import axiosInstance from '../../../utils/axios';

import useScrollTop from '../../../hooks/useScrollTop';


// Css
const BtnStyleOldPassword = styled.div`
    /* Styling the button */
        position: absolute;
        top: 665px;
        right: -1px;
        cursor: pointer;
        background-color: transparent;
        height: 50px;
        width: 150px;
        color: black;
        font-size: 1em;
        `;


const BtnStyleNewPassword = styled.div`
    /* Styling the button */
        position: absolute;
        top: 729px;
        right: -1px;
        cursor: pointer;
        background-color: transparent;
        height: 50px;
        width: 150px;
        color: black;
        font-size: 1em;
        `;

// -- Mon composant
function ParametersPassword({ userMail }) {

    // profil scroller
    useScrollTop();

    const navigate = useNavigate();

    const [oldPasswordIsVisible, setOldPasswordIsVisible] = useState(false);
    const [newPasswordIsVisible, setNewPasswordIsVisible] = useState(false);

    const [profile, setProfile] = useState(null)
    const [userId, setUserId] = useState(null);
    // console.log("userId dans Password >>>>>>", userId)


    // methode pour voir l'ancien password 
    const showOldPassword = (event) => {
        event.preventDefault();
        setOldPasswordIsVisible(!oldPasswordIsVisible);
      };
    // methode pour voir le nouveau password 
    const showNewPassword = (event) => {
        event.preventDefault();
        setNewPasswordIsVisible(!newPasswordIsVisible);
      };


    
    // User Data (Profile)
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axiosInstance.get(`/profile`, { headers: { Authorization: `Bearer ${authKey}` } });
                setProfile(response.data);
                // console.log("response Data Dans Password", response.data)
                
                setUserId(response.data.userId);
                // console.log("UserId Dans Password", response.data.userId)
        
            } catch (error) {
                console.log(error);
                }
        };
        fetchProfile();   
            
    }, []);
 

    // state pour modifier le mot de pass
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

    
    const id = userId
    // console.log('ID dans Password >>>>>>>>>>>>>>>>>>> ', id);
    
    // methode pour modifier le password 
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axiosInstance.put(`/profile/password/${id}`, {
            oldPassword: oldPassword,
            password: newPassword,
            confirmPassword: newPasswordConfirm
          });

          toast.success(`Votre mot de passe a bien été modifié avec succès ＼(≧▽≦)／`);
    
          setTimeout(() => {
            navigate('/profil');
          }, 2000); // 2seconde
    
        } catch (error) {
          console.log(error);

          if (error.response.data.message === 'Mot de passe incorrect') {
            toast.error('Votre ancien mot de passe est incorrect.');

          } else if (error.response.data.message === "Le nouveaux mots de passe ne correspondent pas") {
            toast.error("Le mot de passe et sa confirmation ne correspondent pas.");

          } else if (error.response.data.message === "Le nouveau mot de passe doit être différent de l'ancien mot de passe") {
            toast.error("Le nouveau mot de passe doit être différent de l'ancien mot de passe.");

          } else {
            toast.error('Erreur lors de la modification du mot de passe. Veuillez réessayer plus tard.');
          }
        }
        setOldPassword("");
        setNewPassword("");
        setNewPasswordConfirm("");
    };

                

    return (
        <div className="Parameters-password">

            <p className="Parameters-password-user-email">Email : {userMail}</p>

            <form className="Parameters-password-form" onSubmit={handleSubmit}>

            <div className="Parameters-password-form-container">
                    <label className="Parameters-password-form-label" htmlFor="new_password">Ancien mot de passe :</label>
                    <BtnStyleOldPassword onClick={showOldPassword}>{oldPasswordIsVisible ? "Cacher" : "Afficher"} </BtnStyleOldPassword> 
                    <input
                        className="Parameters-password-form-input"
                        type={oldPasswordIsVisible ? "text" : "password"}
                        id="oldPassword"
                        name="oldPassword"
                        placeholder="Veuillez confirmer le nouveau mot de passe"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>

                <div className="Parameters-password-form-container">
                    <label className="Parameters-password-form-label" htmlFor="password">Nouveau mot de passe :</label>
                    <BtnStyleNewPassword onClick={showNewPassword}>{newPasswordIsVisible ? "Cacher" : "Afficher"} </BtnStyleNewPassword>      
                    <input 
                        className="Parameters-password-form-input"
                        type={newPasswordIsVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Entrer un nouveau mot de passe"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    /> 
                </div>

                <div className="Parameters-password-form-container">
                    <label className="Parameters-password-form-label" htmlFor="new_password">Confirmer le nouveau mot de passe :</label>
                    <input
                        className="Parameters-password-form-input"
                        type="password"
                        id="new_password"
                        name="new_password"
                        placeholder="Veuillez confirmer le nouveau mot de passe"
                        value={newPasswordConfirm}
                        onChange={(e) => setNewPasswordConfirm(e.target.value)}
                    />
                </div>

                <input className="Parameters-password-form-submit" type="submit" value="Valider" />

            </form>
        </div>
    );

};  

// -- Mon export
export default ParametersPassword;
