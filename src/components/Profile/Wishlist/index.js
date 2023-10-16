// -- Mes imports extérieurs
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// -- Mes imports locaux
import axiosInstance from '../../../utils/axios';

// -- Mon composant
function Wishlist({ oil_id }) {
    // PLAN
    // 1 - Je dois récupérer les noms des huiles et les images grâce aux ids passés en props
    // 2 - Mettre les infos des 3 huiles dans mon state "oils"
    // 3 - Dynamiser ma div avec les infos contenus dans mon state "oils"

    // Pour récupérer les données des huiles et les afficher
    const [oil, setOil] = useState(null);

    useEffect(() => {
        const fetchOil = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axiosInstance.get(`/essential/${oil_id}`, { headers: { Authorization: `Bearer ${authKey}` } });
                setOil(response.data);
                // console.log("DATA", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOil();
    }, []);

    return (
        <div className="Profile-favorite-oils-wish-element">
            <Link to={`/oil/${oil_id}`} redirect className="Profile-favorite-oils-wish-element-link">
                <img
                    className="Profile-favorite-oils-wish-element-image"
                    src={`/img/essentialOils/${oil?.name}.png`}
                    alt={`Picture of ${oil?.name}`}
                />
                <p className="Profile-favorite-oils-wish-element-title">{oil?.name}</p>
            </Link>
        </div>
    );
}

// -- Mon export
export default Wishlist;
