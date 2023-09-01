import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Demo from './components/Demo';

// import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Router>
        {/* <Navigations></Navigations> */}
        <Routes>
        
        <Route path = "/" element= {<Login></Login>}></Route>
        <Route path = "/demo" element= {<Demo></Demo>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
