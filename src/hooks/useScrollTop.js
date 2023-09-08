import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollTop() {
  const location = useLocation();

  // On scrolle en haut de la page uniquement quand
  // l'URL est modifiée
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
}

export default useScrollTop;
