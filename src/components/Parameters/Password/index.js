// React
import React, {useState} from "react";
// Icon React
import {AiFillEye} from "react-icons/ai";
// Css Component
import styled from 'styled-components';


// Css
const BtnStyle = styled.div`
    /* Styling the button */
        position: absolute;
        top: 665px;
        right: -1px;
        cursor: pointer;
        background-color: transparent;
        height: 50px;
        width: 150px;
        color: balck;
        font-size: 1em;
        `;

// -- Mon composant
function ParametersPassword({ userMail }) {

    // state pour voir son mot de passe taper
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    
    // methode pour voir le password
    const showPassword = (event) => {
        event.preventDefault();
        return setPasswordIsVisible(!passwordIsVisible);
    };

    return (
        <div className="Parameters-password">

            <p className="Parameters-password-user-email">Email : {userMail}</p>

            <form className="Parameters-password-form">
                <div className="Parameters-password-form-container">
                    <label className="Parameters-password-form-label" htmlFor="password">Nouveau mot de passe :</label>
                    <BtnStyle onClick={showPassword}>{passwordIsVisible ? "Cacher" : "Afficher"} </BtnStyle>      
                    <input 
                        className="Parameters-password-form-input"
                        type={passwordIsVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Entrer un nouveau mot de passe"
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
                    />
                </div>

                <input className="Parameters-password-form-submit" type="submit" value="Valider" />

            </form>
        </div>
    );
}

// -- Mon export
export default ParametersPassword;
