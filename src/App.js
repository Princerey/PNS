import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
// import { getToken, setUserSession } from './Utils/Common';

function App() {
  // const [authLoading, setAuthLoading] = useState(true);

  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }
  //     setUserSession(token);
  //     setAuthLoading(false);
  //   });

  // if (authLoading && getToken()) {
  //   return <div className="content">Checking Authentication...</div>
  // }
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
    <div className="App">
      <BrowserRouter>
        <div>
          <div className={darkMode ? 'headerd' : 'header'}>
            <NavLink exact activeClassName="active" to="/" >Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/signup">SignUp</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            {/* <button onClick={() => setDarkMode(!darkMode)}>Switch</button> */}
            <div className={darkMode ? 'darkButton darkButton_dark' : 'darkButton'} onClick={() => setDarkMode(!darkMode)} >
              <div class="darkButton__indicator"></div>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PublicRoute path="/signup" component={SignUp} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
    
  );
 
}

export default App;
