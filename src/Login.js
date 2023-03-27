import React, { useState,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {  setUserSession } from './Utils/Common';
import './App.css';
import {AiFillLock} from "react-icons/ai";
import {AiOutlineGooglePlus} from "react-icons/ai"
import "@fontsource/poppins";
import {GoogleLogin} from "react-google-login";
import { gapi } from 'gapi-script';

const clientId="75609989716-u868ui4qjdknqaa42854u3bg7jl5omt8.apps.googleusercontent.com";
function Login(props) {
  
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  });
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
      props.history.push('/dashboard');
      
      }
      
      toast.error(response.data.message|| response.data.error);
   
      
    })
  }
  

      const onSuccess = (res) => {
        // alert(response.data.message|| response.data.error);
        // alert("Login Successful");
        setUserSession(res.credentials);
        props.history.push('/dashboard');
        var name = res.profileObj.name;
        document.getElementById('roh').innerHTML=name;
        
      }
      const onFailure =(res) => {
        console.log("Login Failed",res);
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
    <form onSubmit={handleLogin}>
  
  <div className="segment">
    <h1>Log In</h1>
  </div>
  
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="text" id="roh" placeholder="Email Address" {...username} autoComplete="new-password" required/>
  </label>
  <label>
    <input className={darkMode ? 'idark' : 'ilight'} type="password" placeholder="Password" {...password} autoComplete="new-password" required/>
  </label>
{/*   
    <span style={{
          fontWeight: 'bold',
          color: 'red',
          fontFamily:'poppins',
          justifyContent:'center',
          display:'flex',
          alignItems:'center'
        }}></span> */}
        <br/>
  <div className='btn'>
  <button className={darkMode ? 'redd' : 'red'} type="submit" disabled={loading}><AiFillLock className='lock'/> {loading ? 'Logging In...' : 'Log in'}</button>
  </div>
  <br/>
  <div className='btn'>
  
  <GoogleLogin
    clientId={clientId}
    render={renderProps => (
      <button className={darkMode ? 'redd' : 'red'} onClick={renderProps.onClick}><AiOutlineGooglePlus className='lock2'/> Log in</button>
    )}

    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />
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
// Login();
export default Login;