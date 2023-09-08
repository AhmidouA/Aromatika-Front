// -- Mes imports locaux
import "./style.scss";
import { GiBrokenPottery, GiPoisonBottle, GiFireBottle, GiPoisonGas } from 'react-icons/gi';
import { Link } from "react-router-dom";


// -- Mon composant
function Error() {
    return (
        <div className="Error">

            <div className="Error-header">
                <h2 className="Error-header-title">OUUUUUUUUUUUUUPS !</h2>
                <p className="Error-header-info">La page que vous recherchez semble introuvable.</p>
                <p className="Error-header-info-code">Code d'erreur : 404</p>
                <p className="Error-header-redirect">Pour revenir à l’accueil c'est par <Link to="/" className="Error-header-redirect-link">ici</Link> !</p>
            </div>

            <div className="Error-icon">
                <GiPoisonGas className="Error-icon-smoke" />
                <GiPoisonBottle className="Error-icon-poison" />
            </div>

        </div>
    );
}

// -- Mon export
export default Error;
