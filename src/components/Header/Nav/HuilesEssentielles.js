import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../styles.scss";

const HE = () => {
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
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const authKey = localStorage.getItem('authKey');
        const response = await axios.get(`https://aromatika-back.vercel.app/categories/essential/`, { headers: { Authorization: `Bearer ${authKey}` } });
        setCategories(response);
        console.log("DATA", response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const getCategoryName = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "Cosmetique";
      case 2:
        return "Enfant et nourrissons";
      case 3:
        return "Femmes enceintes";
      case 4:
        return "Stress et anxiété";
      case 5:
        return "Sportifs";
      case 6:
        return "Bien-être";
      case 7:
        return "Usage domestique";
      case 8:
        return "Diffusion";
      // ajoutez des cas pour les autres ID de catégorie
      default:
        return "Unknown Category";
    }
  };

  return (
    <div>
      <a className='HE' onClick={handleClick}>Huiles essentielles</a>
      {showList && (
        <ul ref={modalRef} className='HE-list'>

          {categories && categories.data.map(category => (
            <li  key={category.id} >
              <a className="HE-list-links" href={`/category/${category.id}`}>
                {getCategoryName(category.id)}
              </a>
            </li>))}
        </ul>
      )}
    </div>
  );
};

export default HE;

