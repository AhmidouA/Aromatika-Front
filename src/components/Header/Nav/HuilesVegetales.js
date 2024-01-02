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
    </div>
  );
};

export default HV;
