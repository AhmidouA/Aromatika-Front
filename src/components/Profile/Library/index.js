// -- Mes imports extérieurs
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// -- Mes imports locaux
import axiosInstance from '../../../utils/axios';

// -- Mon composant
function Library({ oil_id }) {
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
    <div className="Profile-favorite-oils-library-element">
      <Link to={`/oil/${oil_id}`} redirect className="Profile-favorite-oils-library-element-link">
        <img
          className="Profile-favorite-oils-library-element-image"
          src={`/img/essentialOils/${oil?.name}.png`}
          alt={`Picture of ${oil?.name}`}
        />
        <p className="Profile-favorite-oils-library-element-title">{oil?.name}</p>
      </Link>
    </div>
  );
}

// -- Mon export
export default Library;
