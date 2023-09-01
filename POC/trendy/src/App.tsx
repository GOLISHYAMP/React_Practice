import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Products from './components/Products';
import Signup from './components/Signup';

// import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Router>
        {/* <Navigations></Navigations> */}
        <Routes>
        
        <Route path = "/" element= {<Products></Products>}></Route>
        <Route path = "/login" element= {<Login></Login>}></Route>
        <Route path = "/signup" element= {<Signup></Signup>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
