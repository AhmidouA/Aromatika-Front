import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  FormInput,
  ButtonContainer,
  ActiveButton,
  InactiveButton,
  ValidationButton,
  ForgotPasswordLink,
} from './styles';
import { setEmail, setPassword, setIsRegister, setUsername, setConfirmPassword } from '../../store/formSlice';
import { loginUser, registerUser } from '../../utils/authApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Register() {
  const navigate = useNavigate();
  const [isLoginActive, setIsLoginActive] = useState(true);
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  // handle click event for 'S'identifier' button
  const handleActiveButtonClick = (event) => {
    event.preventDefault();
    setIsLoginActive(true);
    dispatch(setIsRegister(false));
  };

  // handle click event for 'S'inscrire' button
  const handleInactiveButtonClick = (event) => {
    event.preventDefault();
    setIsLoginActive(false);
    dispatch(setIsRegister(true));
  };

  // Declare the timer variable
  let timer;

  // handle input change event for form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        dispatch(setEmail(value));
        break;
      case 'password':
        dispatch(setPassword(value));
        break;
      case 'username':
        dispatch(setUsername(value));
        break;
      case 'confirmPassword':
        dispatch(setConfirmPassword(value));
        break;
      default:
        break;
    }
  };

  // reset the form data when switching form modes
  const resetFormData = () => {
    dispatch(setEmail(''));
    dispatch(setPassword(''));
    dispatch(setUsername(''));
    dispatch(setConfirmPassword(''));
  };

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    resetFormData();

    if (isLoginActive) {
      // If user is logging in, make POST request to login endpoint
      try {
        const response = await loginUser(formData.email, formData.password);
        localStorage.setItem('authKey', response.token);
        localStorage.setItem('username', response.name); // stocker le nom d'utilisateur dans le local storage
        localStorage.setItem('userId', response.user_id); // stocker l'id de l'utilisateur dans le local storagel'utilisateur
        const username = localStorage.getItem('username');
        toast.success(`Vous êtes maintenant connecté en tant que ${username}!`);

        // Redirect to the main page after one second
        setTimeout(() => {
          navigate('/');
        }, 2500);
      } catch (error) {
        console.log("error message dane le Register", error )
        if (error[0] === "Mot de passe invalide. Veuillez entrer un mot de passe valide.") {
          return toast.error(`Votre mot de passe est invalide`);
        } else if (error[0] === "Adresse email invalide. Veuillez entrer une adresse email valide.") {
          return toast.error(`Votre adresse email invalide`);
        } else if (error[0] === "utilisateur ou mot de passe incorrect") {
          return toast.error(`Adresse mail ou mot de passe incorrect`)
        }
        toast.error(`Erreur lors de la connexion en tant que ${formData.email}. Veuillez réessayer plus tard.`);
      }
    } else {
      // If user is registering, make POST request to signup endpoint
      try {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          throw new Error("Le format de l'adresse email n'est pas correct");
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Les mots de passe ne correspondent pas.');
        }
        const response = await registerUser(
          formData.username,
          formData.email,
          formData.password,
          formData.confirmPassword
        );
        // console.log(response); // handle success response
        toast.success('Compte créé avec succès !');

        // Redirect to the main page after one second
        setTimeout(() => {
          navigate('/');
        }, 2500);
      } catch (error) {
        console.log(error); // handle error response
        if (error.message === 'Les mots de passe ne correspondent pas.') {
          toast.error('Les mots de passe ne correspondent pas.');
        } else if (
          error.response?.status === 409 &&
          error.response.data?.message === "Nom d'utilisateur déjà utilisé"
        ) {
          toast.error("Ce nom d'utilisateur est déjà pris.");
        } else if (error.message === "Le format de l'adresse email n'est pas correct") {
          toast.error("Le format de l'adresse email n'est pas correct", { toastId: 'email-error' });
        } else {
          toast.error('Erreur lors de la création de compte. Veuillez réessayer plus tard.');
        }
      }
    }
  };

  // handle form submission on Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
        <h2>Aromatikä</h2>
        <ButtonContainer>
          <ActiveButton isLoginActive={isLoginActive} onClick={handleActiveButtonClick}>
            S'identifier
          </ActiveButton>
          <InactiveButton isLoginActive={isLoginActive} onClick={handleInactiveButtonClick}>
            S'inscrire
          </InactiveButton>
        </ButtonContainer>
        {!isLoginActive && (
          <>
            <FormGroup>
              <label htmlFor='username'>Nom d'utilisateur:</label>
              <FormInput
                type='text'
                id='username'
                name='username'
                placeholder=''
                aria-label='Nom d utilisateur'
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor='email'>Email:</label>
              <FormInput
                type='email'
                id='email'
                name='email'
                placeholder=''
                aria-label='Email'
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor='password'>Mot de passe:</label>
              <FormInput
                type='password'
                id='password'
                name='password'
                placeholder=''
                aria-label='Mot de passe'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor='confirm-password'>Confirmation du mot de passe:</label>
              <FormInput
                type='password'
                id='confirm-password'
                name='confirmPassword'
                placeholder=''
                aria-label='Confirmation du mot de passe'
                onChange={handleInputChange}
              />
            </FormGroup>
          </>
        )}
        {isLoginActive && (
          <>
            <FormGroup>
              <label htmlFor='email'>Votre email:</label>
              <FormInput
                type='email'
                id='email'
                name='email'
                placeholder=''
                aria-label='Email'
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor='password'>Votre mot de passe:</label>
              <FormInput
                type='password'
                id='password'
                name='password'
                placeholder=''
                aria-label='Mot de passe'
                onChange={handleInputChange}
              />
            </FormGroup>
          </>
        )}
        <ButtonContainer>
          <ValidationButton isLoginActive={isLoginActive} type='submit'>
            {isLoginActive ? 'Me connecter' : 'Valider'}
          </ValidationButton>
        </ButtonContainer>
      </Form>
      {isLoginActive && <Link to="/forgot-password">Mot de passe oublié ?</Link>}
    </Container>
  );
}

export default Register;


