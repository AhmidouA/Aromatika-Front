import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

// Toast React
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// axios API 
import axiosInstance from '../../utils/axios';

// Component Css
import {Container, Form, FormGroup, FormInput, ValidationButton, ForgotPasswordLink} from '../Register/styles';


const ForgotPassword = () => {

    const redirectPage = useNavigate();

    /**       Les states */
    const [email, setEmail] = useState("");



    /**       Les methode */
    // methode Email
    const handleEmail = (event) => {
        setEmail(event.target.value)
    };
    // button display
    const disabledBtn = () => {
        if (email === '') {
            return "disabled"
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try { 
            // je passe mes state dans le cors de ma requet comme dans handleFavoriteToggle(oilDetailContainer)(params + body)
            const response = await axiosInstance.post(`/profile/forgot-password`, {
                email: email,
                });
        } catch (error) {
            console.log(error);
            //console.log("error.response.message.data>>>>", error.response.data.message)
            if (error.response.data.message === `Le compte n'existe pas`) {
            toast.error('Votre adresse mail est incorrecte.');
            }
        }; 
    };  
    



    /**       Les hooks */



  return (
    <div>
        <Container>
            <Form>
            <h2>Aromatikä</h2>
                <FormGroup onSubmit={handleSubmit}>
                    <label htmlFor='email'>Votre adresse mail:</label>
                        <FormInput
                            onChange={handleEmail}
                            type='email'
                            id='email'
                            name='email'
                            placeholder=''
                            aria-label='Email' 
                            required                     
                        />
                    <ValidationButton  disabled={disabledBtn()} type='submit'>Envoyer</ValidationButton>
                    <Link className={ForgotPasswordLink}  to="/login">Déjé Inscrit ? Connectez-vous.</Link>
                    
                </FormGroup>
            </Form>
        </Container>
    </div>
  )
}


export default ForgotPassword