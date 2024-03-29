import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
// import { getToken, setUserSession } from './Utils/Common';

function App() {
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
      <HashRouter>
        <div>
          <div className={darkMode ? 'header' : 'headerd'}>
            <NavLink exact activeClassName="active" to="/" >Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/signup">SignUp</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            {/* <button onClick={() => setDarkMode(!darkMode)}>Switch</button> */}
            {/* <div className={darkMode ? 'darkButton darkButton_dark' : 'darkButton'} onClick={() => setDarkMode(!darkMode)} >
              <div class="darkButton__indicator"></div>
            </div> */}
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
      </HashRouter>
    </div>
    
  );
 
}

export default App;
