import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

// Toast React
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// axios API 
import axios from 'axios';

// Component Css
import {Container, Form, FormGroup, FormInput, ValidationButton} from '../Register/styles';

const ResetPassword = () => {

  const navigate = useNavigate();
    
  /**       Les states */
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();


  /**       Les props */
  const {id, token} = useParams();


  /**       Les methode */
  const validUser = async () => {

    try {
        const response = await fetch(`https://aromatika-back-api.onrender.com/profile/reset-password/${id}/${token}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            }        
        });

        const data = await response.json()

        if (response.status === 500 && data.error === "Erreur lors de la récupération du mot de passe") {
          toast.error(`Erreur lors de la récupération. Veuillez vérifier votre boite mail`)
          setTimeout(() => {
            
            navigate('*');
        }, 3000);

        } else if (response.status === 400 && data.message === "Le compte n'existe pas") {         
          // console.log("user No valid") 
          toast.error(`Votre Compte n'existe pas, Veuillez vous inscrire.`)
          setTimeout(() => {
  
            navigate('*');
        }, 3000);

        } else {
          toast.success(`Votre pouvez modifier votre mot de passe.`)
        };   
       
    } catch (error) {
      console.error("error dans le Reset Password", error)              
    }
}


  // validation du formulaire mot de passe
  const handleSubmit = async (event) => {
    event.preventDefault();

      try {
        const response = await axios.post(`https://aromatika-back-api.onrender.com/profile/reset-password/${id}/${token}`, {
          password: password,
          confirmPassword: newPassword
        });
        toast.success(`Votre mot de passe a été modifié avec succès ＼(≧▽≦)／`);    
        
        setTimeout(() => {
          navigate('/login');
      }, 2500);
        
      } catch (error) {
        console.error("error dans le Reset Password", error)

        if (axios.isAxiosError(error) && error.response.data.message === "Tous les champs doivent être remplis") {
          toast.error(`Tous les champs doivent être remplis.`);
        }
        if (axios.isAxiosError(error) && error.response.data.message === "Le compte n'existe pas") {
          toast.error(`Votre Compte n'existe pas, Veuillez vous inscrire.`);
        }
        if (axios.isAxiosError(error) && error.response.data.message === "Le nouveaux mots de passe ne correspondent pas") {
          toast.error(`Le mot de passe et sa confirmation ne correspondent pas.`);
        }
      };

      setPassword("")
      setNewPassword("")
  };



  /**       Les hooks */
  useEffect(() => {
    // vérifie le token et l'user
    validUser()
  }, [])
  

  return (
    <Container >
    <Form onSubmit={handleSubmit}>
    <h2>Aromatikä</h2>
        <FormGroup >
            <label htmlFor='password'>Nouveau mot de passe :</label>
                <FormInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type='password'
                    id='password'
                    name='password'
                    placeholder=''
                    aria-label='password' 
                                         
                />

              <label htmlFor="new_password">Confirmer le nouveau mot de passe :</label>
                <FormInput                        
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"
                    id="new_password"
                    name="new_password"
                    placeholder=""
                    aria-label='new_password'
                                         
                />
            <ValidationButton type='submit'>Envoyer</ValidationButton>                    
        </FormGroup>
    </Form>
</Container>
  )
}

export default ResetPassword;