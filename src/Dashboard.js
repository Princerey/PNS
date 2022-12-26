
import React,{useState,useEffect,useRef} from 'react';
import { getData, removeUserSession } from './Utils/Common';
import './dashboard.css';
import {FaPlay} from 'react-icons/fa';
import {GiPauseButton} from 'react-icons/gi'
import{AiOutlineLogout} from 'react-icons/ai'
import{FaHome} from 'react-icons/fa';
import {FaPalette} from 'react-icons/fa';
import {BiSearchAlt} from 'react-icons/bi'
import Sound from 'react-sound';
import soothing from './peace.mp3'
import study from './study.mp3'
import cool from './cool.mp3'

// import ScriptTag from 'react-script-tag';
function Dashboard(props) {
  getData();
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  const home = () => {
    props.history.push('/');
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
  const [pausec, setIsActive] = useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
    
    if(isPlaying2===true&&isPlaying1===false&&isPlaying===true)
    {
    setIsPlaying2(!isPlaying2);
    setIsAct1(!ischeck1);
    }
    if(isPlaying2===false&&isPlaying1===true&&isPlaying===true)
    {
    setIsPlaying1(!isPlaying1);
    setIsAct2(!ischeck2);
    }
    if(isPlaying2===false&&isPlaying1===false&&isPlaying===false)
    {
    setIsPlaying(!isPlaying);
    setIsAct3(!ischeck3);
    }
    if(isPlaying2===false&&isPlaying1===false&&isPlaying===true)
    {
       if(ischeck1===true&&ischeck2===false&&ischeck3===false)
       {
        if(isPlaying2===false)
        {
        setIsPlaying2(!isPlaying2);
        }
        if(isPlaying1===true)
        {
        setIsPlaying1(!isPlaying1);
        }
        if(isPlaying===false)
        {
        setIsPlaying(!isPlaying);
        }
       }
       else if(ischeck2===true &&ischeck1===false&&ischeck3===false)
       {
        if(isPlaying1===false)
        {
        setIsPlaying1(!isPlaying1);
       }
       if(isPlaying===false)
        {
        setIsPlaying(!isPlaying);
        }
        if(isPlaying2===true)
        {
        setIsPlaying2(!isPlaying2);
        }
      }
       else if(ischeck3===true&&ischeck2===false&&ischeck1===false)
       {
        if(isPlaying===true)
        {
        setIsPlaying(!isPlaying);
        }
        if(isPlaying1===true)
        {
        setIsPlaying1(!isPlaying1);
        }
        if(isPlaying2===true)
        {
        setIsPlaying2(!isPlaying2);
        }
       }
       else if (ischeck1===false && ischeck2===false && ischeck3===false)
       {
        props.history.push('/login');
       }
       else
       {
        props.history.push('/login');
       }

    }
  };
  const handleClick1 = event => {
    if(pausec===true)
    {
      setIsActive(current => !current);
    }
    if(isPlaying2===true)
    {
    setIsPlaying2(false);
    }
    if(isPlaying1===false)
    {
    setIsPlaying1(true);
    }
    if(isPlaying===false)
    {
    setIsPlaying(true);
    }
  }
  const handleClick3 = event => {
    if(pausec===true)
    {
      setIsActive(current => !current);
    }
    if(isPlaying2===false)
    {
    setIsPlaying2(true);
    }
    if(isPlaying1===true)
    {
    setIsPlaying1(false);
    }
    if(isPlaying===false)
    {
    setIsPlaying(true);
    }
  }
  const handleClick2 = event => {
    if(pausec===true)
    {
      setIsActive(current => !current);
    }
    if(isPlaying2===true)
    {
    setIsPlaying2(false);
    }
    if(isPlaying1===true)
    {
    setIsPlaying1(false);
    }
    if(isPlaying===true)
    {
    setIsPlaying(false);
    }
  }
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const hour = date.getHours() * 30 ; // Move 30degree on first hour, 60 degree on second and so on. 
  const minute = date.getMinutes() * 6; //same as above.
  const second = date.getSeconds() * 6;
  var hour1 = date.getHours() ; // Move 30degree on first hour, 60 degree on second and so on. 
  var minute1 = date.getMinutes(); //same as above.
  var second1 = date.getSeconds();
  if(second1<10)
  {
    second1 = '0'+date.getSeconds();
  }
  if(minute1<10)
  {
    minute1 = '0'+date.getMinutes();
  }
  if(hour1<10)
  {
    hour1 = '0'+date.getHours();
  }
  
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [ischeck1, setIsAct1] = useState(false);
  const [ischeck2, setIsAct2] = useState(false);
  const [ischeck3, setIsAct3] = useState(false);
  const search = useRef(null);
  const link = useRef(null);
  const pause = useRef(null);
  useEffect(() => {
  search.current.onchange=search.current.onkeyup= function() {
      link.current.search= '?q='+encodeURIComponent(search.current.value);
      link.current.firstChild.data= link.current.href;
  };
  });
  const [message, setMessage] = useState('');
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      link.current.click();
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
 
const current = new Date();
  const date1 = `${dayWeek[current.getDay()]}, ${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
  return (
    <div className='heigh'>
     <h2 className={darkMode ? 'h2d' : 'h2l'}>Welcome&nbsp;<span id="roh"></span>&nbsp;to your Personal space</h2>
     <div className="container">
  <div className={darkMode ? 'componentsd' : 'componentsl'}>
    
    
    <div className={darkMode ? 'clockd' : 'clockl'}>
      <div className="hand hours"  style={{ transform: "rotate(" + hour + "deg)" }} ></div>
      <div className="hand minutes" style={{ transform: "rotate(" + minute + "deg)" }}></div>
      <div className="hand seconds" style={{ transform: "rotate(" + second + "deg)"}}></div>
      <div className="point"></div>
      <div className="marker">
        <span className="marker__1"></span>
        <span className="marker__2"></span>
        <span className="marker__3"></span>
        <span className="marker__4"></span>
      </div>
    </div>
    
    <div className={darkMode ? 'chipd' : 'chipl'}>
      <div className={darkMode ? "chip__icond" : "chip__icon"}>
     < FaPalette className="color-palette"/></div>
      <p>Neumorphic Design</p>
    </div>
    



    <div class="container1">
      <div class="display-date">
        <span id="day">{date1}</span>
      </div>
      </div>

      <div class="container2">
      <div class="display-time">{hour1}:{minute1}:{second1}</div>
    </div>

    <div className="circle">
      <span className={darkMode ? 'circle__btnd' : 'circle__btn'} id={pausec ? "shadow" : ''} onClick={handleClick} ref={pause}>
        <FaPlay className={ pausec ? "play visibility" : "play"} name="play" />
        <GiPauseButton className={ pausec ? "pause visibility" : "pause"} name="pause"/>
      </span>
      <span className={darkMode ?  "circle__back-1d" : "circle__back-1"} id={pausec ? 'paused' : ''}></span>
      <span className={darkMode ? "circle__back-2d" : "circle__back-2"} id={pausec ? 'paused' : ''}></span>
    </div>
    
    <div className="form" id="store">
      <textarea  className={darkMode ? "form__inputd" : "form__input"} placeholder="Type anything...
      Notes | To-do list |" id="data"></textarea>
    </div>
    <div className={darkMode ? "searchd" : "search"}>
      <input type="text" class="search__input" ref={search} placeholder="                 Search..."  onChange={event => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        id="message"
        name="message"/>
      <div className="icon">
        <a ref={link} href="http://www.google.com/search" target='_blank' rel="noopener noreferrer" className='ag'><BiSearchAlt name='search'/></a>
      </div>
    </div>

    
    <div className={darkMode ?"segmented-controld" : "segmented-control"}>
      
      <input type="radio" name="radio2" value="3" id="tab-1" />
      <label for="tab-1" className= "segmented-control__1" onClick={handleClick2}>
        <p >😌</p>
        <Sound
      url={soothing}
      playStatus={isPlaying ? Sound.status.STOPPED : Sound.status.PLAYING}
      volume={95}
      loop={true}
    />
        
        </label>
      
      <input type="radio" name="radio2" value="4" id="tab-2" />
      <label for="tab-2" className= "segmented-control__2" onClick={handleClick1}>
        <p >🤓</p></label>
        <Sound
      url={study}
      playStatus={isPlaying1 ? Sound.status.PLAYING : Sound.status.STOPPED}
      volume={95}
      loop={true}
    />
      
      <input type="radio" name="radio2" value="5" id="tab-3" />
      <label for="tab-3" className= "segmented-control__3" onClick={handleClick3}>
        <p >😎</p></label>
        <Sound
      url={cool}
      playStatus={isPlaying2 ? Sound.status.PLAYING : Sound.status.STOPPED}
      volume={95}
      loop={true}
    />
      <div className={darkMode ? "segmented-control__colord" : "segmented-control__color"}></div>
    </div>
    
    <div className="icon" onClick={home}>
      <div className={darkMode ? "icon__homed" : "icon__home"}>
        <FaHome name="home"/></div>
        <div className={darkMode ? "btn1d btn1__secondaryd" :"btn1 btn1__secondary"} onClick={handleLogout} ><p><AiOutlineLogout className='lock1'/>Logout</p></div>
    </div>
   
  </div>
</div>
    </div>
    
   
  );

}

export default Dashboard;
