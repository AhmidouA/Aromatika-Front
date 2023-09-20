import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

// Toast React
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// axios API 
import axios from 'axios';

// Component Css
import {Container, Form, FormGroup, FormInput, ValidationButton} from '../Register/styles';



const ForgotPassword = () => {

    const navigate = useNavigate();

    /**       Les props */ 
    

    /**       Les states */
    // Email
    const [email, setEmail] = useState();



    /**       Les methode */
    // validation du formulaire envoi de mail
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {         
            const response = await axios.post('https://aromatika-back.vercel.app/profile/forgot-password', {
                email: email
                });

            // On envoie un toast de succès après une vérification du mail
            toast.success(`L'email est parti. Veuillez vérifier votre boîte mail ${email}. ＼(≧▽≦)／`);

            setTimeout(() => {
                navigate('/');
            }, 2500); // 2seconde

                
        } catch (error) {
            console.log(error);
            //console.log("error.response.message.data>>>>", error.response.data.message)
            if (axios.isAxiosError(error) && error.response.status === 404) {
                toast.error(`Votre adresse mail ${email} est incorrecte.`);
              }
        };

        setEmail("")
    };  


  return (
    <div>
        <Container >
            <Form onSubmit={handleSubmit}>
            <h2>Aromatikä</h2>
                <FormGroup >
                    <label htmlFor='email'>Votre adresse mail:</label>
                        <FormInput
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type='email'
                            id='email'
                            name='email'
                            placeholder=''
                            aria-label='Email' 
                            required                     
                        />
                    <ValidationButton type='submit'>Envoyer</ValidationButton>
                    <Link to="/login">Déjé Inscrit ? Connectez-vous.</Link>
                    
                </FormGroup>
            </Form>
        </Container>
    </div>
  )
}


export default ForgotPassword