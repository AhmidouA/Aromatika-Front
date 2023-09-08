import React from 'react';
import './styles.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {

    const [categories, setCategories] = useState(null);

    // On ajoute un state pour gérer le temps d'attente avec l'appel API
    const [isLoading, toggleIsLoading] = useState(true);

    // Mon spinner s'affiche si l'utilisateur n'est pas connecté
    // On ajoute une condition pour que le spinner ne s'affiche pas si l'utilisateur n'est pas connecté
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authKey = localStorage.getItem('authKey');
        setIsLoggedIn(authKey ? true : false);
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const authKey = localStorage.getItem('authKey');
                const response = await axios.get(`https://aromatika-back-api.onrender.com/categories/essential/`, { headers: { Authorization: `Bearer ${authKey}` } });
                setCategories(response);
                toggleIsLoading(false);
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
        <div className="categories">
            <div className='categories-container'>

                {isLoggedIn && isLoading && (
                    <div className="categories-spinner-container">
                        <div class="categories-spinner-lds-dual-ring"></div>
                    </div>
                )}

                <ul className='categories-list' >
                    {categories && categories.data.map(category => (
                        <li className='categories-link' key={category.id}>
                            <a className="categories-link-title" >
                                {getCategoryName(category.id)}
                            </a>
                            <a className='categories-link-text' href={`/category/${category.id}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>

                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Categories;



