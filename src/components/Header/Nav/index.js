import "../styles.scss";
import HE from "./HuilesEssentielles";
import HV from "./HuilesVegetales";

function Nav() {
    return (
        <div className="header-nav">
            <HE/>
            <HV/>
            
            <a
                href="#"
                className="header-link"
                aria-label="Check out our articles on how to use essential oils"
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