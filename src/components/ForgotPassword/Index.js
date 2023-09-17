import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

// Toast React
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// axios API 
import axiosInstance from '../../utils/axios';


// Component Css
import {Container, Form, FormGroup, FormInput, ValidationButton, ForgotPasswordLink} from '../Register/styles';
import axios from 'axios';


const ForgotPassword = () => {

    const navigate = useNavigate();
    

    /**       Les states */
    const [email, setEmail] = useState();



    /**       Les methode */

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {         
            const response = await axios.post('https://aromatika-back-api.onrender.com/profile/forgot-password', {
                email: email
                });

            // On envoie un toast de succès après une modification réussie du mot de passe
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
                    <Link className={ForgotPasswordLink}  to="/login">Déjé Inscrit ? Connectez-vous.</Link>
                    
                </FormGroup>
            </Form>
        </Container>
    </div>
  )
}


export default ForgotPassword