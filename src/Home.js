import React from 'react';
import { useState,useEffect } from 'react';
import curve from "./curve.png";
import char from "./char.png";
// import { Link } from 'react-router-dom';
import {BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'



function Home() {
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
    <div>
    <div className={darkMode ? 'darkButton darkButton_dark' : 'darkButton'} onClick={() => setDarkMode(!darkMode)} >
    <div class="darkButton__indicator"></div>
  </div>
    <section>
      
    <img src={curve} alt="wave" className="wave"/>
       <div className="contentBx">
        <h2 className={darkMode ? 'headd' : 'head'}>Personal Neumorphic Space</h2>
        <p className={darkMode ? 'pd' : 'p'}>
        Multiply your efficiency and inprove your focus through your personalised space<br/>
        Organised solution for your messy schedule
        </p>
       <a href="https://www.mockplus.com/blog/post/neumorphic-design-examples-ui-kits" target='blank'><p className={darkMode ? 'red2' : 'red1'}>Learn more<MdOutlineKeyboardArrowRight className='more'/></p></a> 
       </div>
       <div className="imgBx">
           <img src={char} alt="boy"/>
       </div>
       <ul className={darkMode ? 'scid' : 'sci'}>
       <li><a href="https://github.com/Princerey/Login-cum-SignUp-Authentication" target='blank'><BsGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/rohit-kumar-771627242/" target='blank'><FaLinkedinIn/></a></li>
            <li><a href="https://twitter.com/_Prince_rey_?t=3KjsFWNRyDIyUxnilGf8fA&s=09" target='blank'><FaTwitter/></a></li>
       </ul>
</section>   
</div>
  );
  
}
// Home();
export default Home;
