import React from 'react';
import './App.css';
import practiceCode from './practiceCode/code'
import home from './home/home'
import { Route, NavLink,HashRouter, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='background' >
      <HashRouter>
        <ul className='header'>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/code">Practice Code</NavLink></li>
        </ul>
        <div className='content'>
          <Route exact path='/' component={home}></Route>
          <Route path='/code' component={practiceCode}></Route>
        </div>
      </HashRouter>
    </div>
    
  );
}

export default App;
