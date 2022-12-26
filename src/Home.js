import React from 'react';
import curve from "./curve.png";
import char from "./char.png";
// import { Link } from 'react-router-dom';
import {BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'



function Home() {
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
    
    <section>
    <img src={curve} alt="wave" className="wave"/>
       <div className="contentBx">
        <h2 className={darkMode ? 'headd' : 'head'}>Neumorphic Design</h2>
        <p className={darkMode ? 'pd' : 'p'}>
           Neumorphic design, also known as "neumorphism" or "soft UI", is a minimal visual design style that uses monochromatic colors, subtle shadows and low contrasts ......
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
  );
  
}
// Home();
export default Home;
