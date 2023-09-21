// -- Mes imports locaux
import "./style.scss";
import avatarAn from './avatar_anis.webp';
import avatarS from './avatar_sophie.jpg';
import avatarA from './avatar_ahmed.webp';
import avatarC from './avatar_clem.jpg';
import avatarY from './avatar_yoann.jpg';

// -- Mon composant
function About() {
    return (
        <div className="About">
            <div className="About-border">

                <div className="About-profile-left">
                    <img className="About-profile-avatar" src={avatarAn} />
                    <div className="About-profile-left-description-container">
                        <h2 className="About-profile-left-description-name">Anis</h2>
                        <h3 className="About-profile-left-description-role">Product owner et concepteur du projet</h3>
                        <p className="About-profile-left-description-resume">En cours de rédaction...</p>
                    </div>
                </div>
                <div className="About-profile-right">
                    <img className="About-profile-avatar" src={avatarS} />
                    <div className="About-profile-right-description-container">
                        <h2 className="About-profile-right-description-name">Sophie</h2>
                        <h3 className="About-profile-right-description-role">Scrum master</h3>
                        <p className="About-profile-right-description-resume">En cours de rédaction...</p>
                    </div>
                </div>
                <div className="About-profile-left">
                    <img className="About-profile-avatar" src={avatarA} />
                    <div className="About-profile-left-description-container">
                        <h2 className="About-profile-left-description-name">Ahmed</h2>
                        <h3 className="About-profile-left-description-role">Full Stack et Lead dev back</h3>
                        <p className="About-profile-left-description-resume">Passioné par la culture asiatique, les voyages et le code. Après plusieurs années en tant que chef de projet en E-commece, j'ai décidé de me reconvertir dans le développement web.</p>
                    </div>
                </div>
                <div className="About-profile-right">
                    <img className="About-profile-avatar" src={avatarC} />
                    <div className="About-profile-right-description-container">
                        <h2 className="About-profile-right-description-name">Clémence</h2>
                        <h3 className="About-profile-right-description-role">Lead dev front</h3>
                        <p className="About-profile-right-description-resume">Amoureuse de culture pop et manga. Après plusieurs années en tant que chargée de compte en Irlande, elle a décidé de se reconvertir dans le développement web.</p>
                    </div>
                </div>
                <div className="About-profile-left">
                    <img className="About-profile-avatar" src={avatarY} />
                    <div className="About-profile-left-description-container">
                        <h2 className="About-profile-left-description-name">Yoann</h2>
                        <h3 className="About-profile-left-description-role">Git master et designer</h3>
                        <p className="About-profile-left-description-resume">Passioné d'animation statique, il a été tour à tour cascadeur, vendeur de choléstérol, dresseur de requins, gardien de troupeau et apprenti virtuel de Picasso. Tout ceci est bien sûr faux (quoique) mais ce qui est certain c'est qu'il ajoute une corde à son arc en devenant développeur web.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

// -- Mon export
export default About;
