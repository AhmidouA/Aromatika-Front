import '../styles.scss';
import { BiSearchAlt } from 'react-icons/bi';
import React, { useState, useEffect, useRef } from 'react';

const Search = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const formRef = useRef(null);

  const handleClick = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  return (
    <div className='search'>
      <BiSearchAlt className='search-icon' onClick={() => setFormVisible(!isFormVisible)} />
      {isFormVisible && (
        <form ref={formRef} className='search-form'>
          <input className='search-input' type='text' placeholder='Entrez votre recherche...' />
          <button className='search-btn'>Go</button>
        </form>
      )}
    </div>
  );
};

export default Search;
