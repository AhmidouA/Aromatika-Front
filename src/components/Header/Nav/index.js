import "../styles.scss";
import HE from "./HuilesEssentielles";
import HV from "./HuilesVegetales";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Nav() {

    const handleClick = (e) => {
        e.preventDefault
        toast.info(`Le blog est en cours de création... Revenez plus tard ＼(≧▽≦)／`);
    }
    return (
        <div className="header-nav">
            <HE/>
            <HV/>
            
            <a
                href="#"
                className="header-link"
                aria-label="Check out our articles on how to use essential oils"
                onClick={handleClick}
            >
                Blog 
                
            </a>
            <a
                href="/utilisation"
                className="header-link"
                aria-label="Learn more about our advices regarding the use of essential oils"
            >
                Conseils d'utilisation
            </a>
            <a
                href="/a-propos"
                className="header-link"
                aria-label="Learn more about us"
            >
                A propos
            </a>
        </div>
    );
}

export default Nav;