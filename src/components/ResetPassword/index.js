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
  console.log("password dans le reset Password", password)
  console.log("password dans le reset newPassword", newPassword)


  /**       Les props */
  const {id, token} = useParams();
  console.log("id dans le reset Password", id);
  console.log("token dans le reset Passwordken", token);


  /**       Les methode */
  // Si c'est le bon utilisateur et token
  const validUser = async () => {

    try {
        const response = await fetch(`https://aromatika-back.vercel.app/profile/reset-password/${id}/${token}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            }        
        });
        console.log("response dans le Reset Password validUser",response)

        const data = await response.json()
        console.log("data dans le Reset Password validUser", data)
        console.log("data dans le Reset Password validUser", data.message)

        if (response.status === 500 && data.error === "Erreur lors de la récupération du mot de passe") {
          console.log("user No valid") 
          toast.error(`Erreur lors de la récupération. Veuillez vérifier votre boite mail`)
          setTimeout(() => {
            
            navigate('*');
        }, 3000); // 3seconde

        } else if (response.status === 400 && data.message === "Le compte n'existe pas") {         
          console.log("user No valid") 
          toast.error(`Votre Compte n'existe pas, Veuillez vous inscrire.`)
          setTimeout(() => {
  
            navigate('*');
        }, 3000); // 3seconde

        } else {
          toast.success(`Votre pouvez modifier votre mot de passe.`)
          console.log("user No valid")
        };   
       
    } catch (error) {
      console.error("error dans le Reset Password", error)              
    }
}


  // validation du formulaire mot de passe
  const handleSubmit = async (event) => {
    event.preventDefault();

      try {

        console.log("Je suis ici au debut du try dans le Reset Password")
        const response = await axios.post(`https://aromatika-back.vercel.app/profile/reset-password/${id}/${token}`, {
          password: password,
          confirmPassword: newPassword
        });
        // console.log("response dans le Reset Password", response)

        // On envoie un toast de succès après une modification réussie du mot de passe
        toast.success(`Votre mot de passe a été modifié avec succès ＼(≧▽≦)／`);    
        
        setTimeout(() => {
          navigate('/login');
      }, 2500); // 2seconde
        
      } catch (error) {
        console.error("error dans le Reset Password", error)
        // console.log("error.response.message.data>>>>", error.response.data.message)

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