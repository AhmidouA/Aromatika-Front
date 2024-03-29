import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../styles.scss";
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const HE = () => {
  const [showList, setShowList] = React.useState(false);
  const modalRef = useRef(null);

  const navigate = useNavigate()

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
        const response = await axios.get(`https://aromatika-back-api.onrender.com/categories/essential/`, { headers: { Authorization: `Bearer ${authKey}` } });
        setCategories(response);
        // console.log("DATA", response);
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
        <div>
          {categories && categories.data ? (
            <ul ref={modalRef} className='HE-list'>
              {categories.data.map(category => (
                <li key={category.id} >
                  <a className="HE-list-links" href={`/category/${category.id}`}>
                    {getCategoryName(category.id)}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <>
              {toast.info(`Vous devez vous connecter ＼(≧▽≦)／`)}
              {setTimeout(() => {
              navigate('/login');
              }, 3000)}
              {setShowList(!showList)}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HE;

