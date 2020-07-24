import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch 

} from 'react-router-dom';
import home from './Component/home.js';
import products from './Component/products.js';
import category from './Component/category.js';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <switch>
        <Route exact path='/' component={home}></Route>
      <Route exact path='/about' component={about}></Route>
      <Route exact path='/contact' component={contact}></Route>
      </switch>
      </div>
      
    </Router>
  );
}

export default App;
