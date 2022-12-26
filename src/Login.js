import React, { useState } from 'react';
import axios from 'axios';
import {  setUserSession } from './Utils/Common';
import './App.css';
import {AiFillLock} from "react-icons/ai";
import "@fontsource/poppins";


function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://express-auth-jwt.onrender.com/auth/login', { email: username.value , password: password.value }).then(response => {
      setLoading(false);
      if(response.data.error==="User does not exist" || response.data.message==="Invalid credentials")
      {
        setUserSession(""); 
      }
      else
      {
      setUserSession(response.data.token);
      }
      alert(response.data.message|| response.data.error);
        props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
  });
  }
  var darkMode;
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
       darkMode=true;
    } 
    else {
      darkMode=false;
    }
  return (
    <div className='heigh'>
    <form >
  
  <div className="segment">
    <h1>Log In</h1>
  </div>
  
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="text" id="roh" placeholder="Email Address" {...username} autoComplete="new-password" required/>
  </label>
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="password" placeholder="Password" {...password} autoComplete="new-password"required/>
  </label>
  <div className='btn'>
  {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
  <button className={darkMode ? 'redd' : 'red'} type="button"  onClick={handleLogin} disabled={loading}><AiFillLock className='lock'/> {loading ? 'Logging In...' : 'Log in'}</button>
  </div>
</form>
</div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
// Login();
export default Login;