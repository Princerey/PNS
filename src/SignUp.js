import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {MdContacts} from "react-icons/md";
// import { setUserSession } from './Utils/Common';

function SignUp(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const about = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleSignUp = () => {
    setError(null);
    setLoading(true);
    axios.post('https://express-auth-jwt.onrender.com/auth/signup', { email: email.value , password: password.value , about:about.value}).then(response => {
      setLoading(false);
      alert(response.data.message);
      props.history.push('/login');
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
    <form>
  
  <div class="segment">
    <h1>Sign Up</h1>
  </div>
  
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="text" placeholder="Email Address" {...email} autoComplete="new-password"/>
  </label>
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="password" placeholder="Password" {...password} autoComplete="new-password"/>
  </label>
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="text" placeholder="Username" {...about} autoComplete="new-password"/>
  </label>
  <div className='btn'>
  {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
  <button className={darkMode ? 'redd' : 'red'} type="button" onClick={handleSignUp} disabled={loading}><MdContacts className='lock'/> {loading ? 'Signing Up...' : ' Sign Up'}</button>
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
// SignUp();
export default SignUp;