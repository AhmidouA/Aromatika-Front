import "../styles.scss";
import { BiMenu } from 'react-icons/bi';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const BurgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleModal}>
        <BiMenu className="BurgerMenu-icon" alt="Burger Menu Icon" />
      </div>
      {isOpen &&
        <div ref={modalRef}>
          <div className="BurgerMenu-icon-modal">
            <Link to='/'>Huiles essentielles</Link>
            <Link to='#'>Huiles végétales</Link>
            <Link to='#'>Blog</Link>
            <Link to='/utilisation'>Conditions d'utilisations</Link>
            <Link to='/a-propos'>A propos</Link>
          </div>
        </div>
      }
    </div>
  );
};


export default BurgerMenu;