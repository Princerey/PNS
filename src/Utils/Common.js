
import axios from 'axios';
// return the user data from the session storage
export const getData = () => {
  const token = getToken();
  axios.get("https://express-auth-jwt.onrender.com/auth/info", {
    headers: { "Authorization": `${token}` }}).then(response => {
      document.getElementById('roh').innerHTML = (response.data.user.about);
    });
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token');
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
}

// set the token and user from the session storage
export const setUserSession = (token) => {
  sessionStorage.setItem('token', token);
}