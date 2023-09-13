import React, { useRef, useEffect } from 'react';
import '../styles.scss';

const HV = () => {
  const [showList, setShowList] = React.useState(false);
  const modalRef = useRef(null);

  const handleClick = () => {
    setShowList(!showList);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return (
    <div>
      <a className='HV' onClick={handleClick}>
        Huiles végétales
      </a>
      {/* 
      {showList && (
        <ul ref={modalRef} className='HV-list'>
          <li>
            <a className='HV-list-links' href='#'>
              Cosmétique
            </a>
          </li>
          <li>
            <a className='HV-list-links' href='#'>
              Enfants et nourrissons
            </a>
          </li>
          <li>
            <a className='HV-list-links' href='#'>
              Femmes enceintes
            </a>
          </li>
          <li>
            <a className='HV-list-links' href='#'>
              Stress et anxiété
            </a>
          </li>
          <li>
            <a className='HV-list-links' href='#'>
              Sportifs
            </a>
          </li>
          <li>
            <a className='HV-list-links' href='#'>
              Bien-être
            </a>
          </li>
          <li>
            <a className='HV-list-links' href='#'>
              Usage domestique
            </a>
          </li>
          <li>
            <a className='HV-list-links' href='#'>
              Diffusion
            </a>
          </li>
        </ul>
      )}
       */}
    </div>
  );
};

export default HV;
