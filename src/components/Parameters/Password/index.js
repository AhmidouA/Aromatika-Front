// -- Mon composant
function ParametersPassword({ userMail }) {
    return (
        <div className="Parameters-password">

            <p className="Parameters-password-user-email">Email : {userMail}</p>

            <form className="Parameters-password-form">
                <div className="Parameters-password-form-container">
                    <label className="Parameters-password-form-label" for="password">Nouveau mot de passe :</label>
                    <input
                        className="Parameters-password-form-input"
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Entrer un nouveau mot de passe"
                    />
                </div>

                <div className="Parameters-password-form-container">
                    <label className="Parameters-password-form-label" for="new_password">Confirmer le nouveau mot de passe :</label>
                    <input
                        className="Parameters-password-form-input"
                        type="text"
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
