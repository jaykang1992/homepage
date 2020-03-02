import React, { Component } from 'react';
import './App.css';
import practiceCode from './practiceCode/code'
import home from './home/home'
import book from './book/book'
import { Route, NavLink,HashRouter} from 'react-router-dom';

class App extends Component{
  render(){
    
    return (
      <div className='background' >
        <HashRouter>
          <ul className='header'>
            <li><NavLink to="/">About  </NavLink></li>
            <li><NavLink to="/code">Practice Code</NavLink></li>
            <li><NavLink to="/book">Read Book</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={home}></Route>
            <Route path='/code' component={practiceCode}></Route>
            <Route path='/book' component={book}></Route>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
