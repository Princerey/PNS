import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {MdContacts} from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.success(response.data.message);
      props.history.push('/login');
    }).catch(error => {
      setLoading(false);
      toast.error("User already exists please enter new email address or try logging in." || error.response.data.message);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("User already exists please enter new email address or try logging in.");
  });
  }
  
    const [darkMode, setDarkMode] = useState(false);
      useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
      }, []);
    
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
      }, [darkMode]);


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='heigh'>
       <div className={darkMode ? 'darkButton darkButton_dark' : 'darkButton'} onClick={() => setDarkMode(!darkMode)} >
              <div class="darkButton__indicator"></div>
            </div>
    <form onSubmit={handleSignUp}>
  
  <div class="segment">
    <h1>Sign Up</h1>
  </div>
  
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="text" placeholder="Email Address" {...email} autoComplete="new-password" required/>
  </label>
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="password" placeholder="Password" {...password} autoComplete="new-password" required/>
  </label>
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="text" placeholder="Username" {...about} autoComplete="new-password" required/>
  </label>
  <div className='btn'>
  {/* {error && <><small style={{ color: 'red', fontFamily:"poppins" }}>{error}</small><br /></>}<br /> */}
  <button className={darkMode ? 'redd' : 'red'} type="submit"  disabled={loading}><MdContacts className='lock'/> {loading ? 'Signing Up...' : ' Sign Up'}</button>
  </div>
</form>
</div>
</>
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