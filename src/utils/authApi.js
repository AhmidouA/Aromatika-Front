import axiosInstance from './axios';

// Regular expression to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression to validate username format
const usernameRegex = /^.{4,}$/;

// Regular expression to validate password format
const passwordRegex = /^.{4,}$/;

export const validateInput = (inputType, inputValue) => {
  switch (inputType) {
    case 'username':
      if (!usernameRegex.test(inputValue)) {
        return "Nom d'utilisateur invalide. Veuillez entrer un nom d'utilisateur valide.";
      }
      break;
    case 'email':
      if (!emailRegex.test(inputValue)) {
        return 'Adresse email invalide. Veuillez entrer une adresse email valide.';
      }
      break;
    case 'password':
      if (!passwordRegex.test(inputValue)) {
        return 'Mot de passe invalide. Veuillez entrer un mot de passe valide.';
      }
      break;
    default:
      return '';
  }
  return '';
};

export const registerUser = async (username, email, password, confirmPassword) => {
  const validationErrors = [];
  const usernameError = validateInput('username', username);
  if (usernameError) {
    validationErrors.push(usernameError);
  }
  const emailError = validateInput('email', email);
  if (emailError) {
    validationErrors.push(emailError);
  }
  const passwordError = validateInput('password', password);
  if (passwordError) {
    validationErrors.push(passwordError);
  }
  if (password !== confirmPassword) {
    validationErrors.push('Les mots de passe ne correspondent pas. Veuillez réessayer.');
  }
  if (validationErrors.length > 0) {
    throw validationErrors;
  }

  try {
    const response = await axiosInstance.post('/signup', {
      username,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (email, password) => {
  const validationErrors = [];
  const emailError = validateInput('email', email);
  if (emailError) {
    validationErrors.push(emailError);
  }
  const passwordError = validateInput('password', password);
  if (passwordError) {
    validationErrors.push(passwordError);
  }
  if (validationErrors.length > 0) {
    throw validationErrors;
  }

  try {
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("error Dans authApi", error)
    throw error.response.data;
  }
};

/*
Regular expressions used for validation:

EMAIL_REGEX: to validate email format.
/^ - start of string
[^\s@]+ - match one or more characters that are not whitespace or '@'
@ - match the '@' symbol
[^\s@]+ - match one or more characters that are not whitespace or '@'
. - match a period
[^\s@]+ - match one or more characters that are not whitespace or '@'
$ - end of string
USERNAME_REGEX: to validate username format.
/^[^\s] - match one character that is not whitespace
[a-zA-Z0-9_]{4,} - match four or more characters that are either letters (upper or lowercase), digits, or underscores
$ - end of string
PASSWORD_REGEX: to validate password format.
/^.{6,}$/ - match any character (except newline), six or more times
*/
