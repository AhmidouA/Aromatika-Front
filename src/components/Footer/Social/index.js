// -- Mes imports extérieurs
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

// -- Mes imports locaux
import "../style.scss";

// -- Mon composant
function Social() {
    return (
        <div className="Footer-social">
            <h2 className="Footer-social-subtitle">Suivez-nous</h2>
            <div className="Footer-social-logoContainer">
                <div className="Footer-social-tooltip">
                    <FaTwitter className="Footer-social-logo" />
                    <span className="Footer-social-logo-tooltiptext Footer-social-logo-tooltiptext-twitter">Twitter</span>
                </div>

                <div className="Footer-social-tooltip">
                    <FaInstagram className="Footer-social-logo" />
                    <span className="Footer-social-logo-tooltiptext Footer-social-logo-tooltiptext-instagram">Instagram</span>
                </div>

                <div className="Footer-social-tooltip">
                    <FaFacebook className="Footer-social-logo" />
                    <span className="Footer-social-logo-tooltiptext Footer-social-logo-tooltiptext-facebook">Facebook</span>
                </div>
            </div>
        </div>
    );
}

// -- Mon export
export default Social;
