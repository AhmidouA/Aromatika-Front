// -- Mes imports locaux
import { useNavigate } from "react-router-dom";
import "../style.scss";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// -- Mon composant
function Map() {

  const handleClick = (e) => {
    e.preventDefault()
    toast.info(`Le blog est en cours de création... Revenez plus tard ＼(≧▽≦)／`);

}


  return (
    <div className="Footer-map">
      <a
        href="#"
        aria-label="Check all of our essential oils"
      >
        Huiles essentielles
      </a>
      <a
        href="#"
        aria-label="Check all of our essential oils"
      >
        Huiles végétales
      </a>
      <a
        href="#"
        aria-label="Check out our articles on how to use essential oils"
        onClick={handleClick}
      >
        Blog
      </a>
      <a
        href="/utilisation"
        aria-label="Learn more about our advices regarding the use of essential oils"
      >
        Conseils d'utilisation
      </a>
    </div>
  );
}

// -- Mon export
export default Map;
