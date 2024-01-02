// -- Mes imports extérieurs
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// -- Mes imports locaux
import axiosInstance from '../../../utils/axios';

// -- Mon composant
function Oil({ oil_id }) {

    const [oil, setOil] = useState(null);

    useEffect(() => {
        const fetchOil = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axiosInstance.get(`/essential/${oil_id}`, { headers: { Authorization: `Bearer ${authKey}` } });
                setOil(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOil();
    }, []);

    return (
        <div className="Favorite-oils-element">
            <Link to={`/oil/${oil_id}`} redirect className="Favorite-oils-element-link">
                <img
                    className="Favorite-oils-element-image"
                    src={`/img/essentialOils/${oil?.name}.png`}
                    alt={`Picture of ${oil?.name}`}
                />
                <p className="Favorite-oils-element-title">{oil?.name}</p>
            </Link>
        </div>
    );
}

export default Oil;



