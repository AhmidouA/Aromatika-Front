// -- Mes imports extérieurs
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

// -- Mes imports locaux
import "../style.scss";
import styled from 'styled-components';


const hover_link = styled.div`
    a:hover{
    transform: scale(1.2);
    z-index: 2;
}`;

// -- Mon composant
function Social() {
    return (
        <div className="Footer-social">
            <h2 className="Footer-social-subtitle">Suivez-nous</h2>
            <div className="Footer-social-logoContainer">
                <div className="Footer-social-tooltip">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="Footer-social-logo" />  
                    <span className="Footer-social-logo-tooltiptext Footer-social-logo-tooltiptext-twitter">Twitter</span>
                </a>

                </div>

                <div className="Footer-social-tooltip">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="Footer-social-logo" />
                    <span className="Footer-social-logo-tooltiptext Footer-social-logo-tooltiptext-instagram">Instagram</span>
                </a>
                </div>

                <div className="Footer-social-tooltip">
                <a href ="https://Facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="Footer-social-logo" />
                    <span className="Footer-social-logo-tooltiptext Footer-social-logo-tooltiptext-facebook">Facebook</span>
                </a>
                </div>
            </div>
        </div>
    );
}

// -- Mon export
export default Social;
