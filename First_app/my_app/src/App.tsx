import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DemoFunctional } from './components/demo_functional_comp';
import { ClassComponent } from './components/demo_class';
import { Demo } from './components/Demo';
import Class_prac from './components/prac_class';
import Prac_funct from './components/prac_funct';
import { Prac } from './components/prac';
import EventDemo from './components/EventDemo';
import ParentComponent from './components/ParentComponent';
import UseStateDemo from './components/UseStateDemo';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import { Navigations } from './components/Navigations';
import PageNotFound from './components/PageNotFound';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div>
      {/* <DemoFunctional></DemoFunctional>
      <ClassComponent></ClassComponent>
      <Demo></Demo>
      <Class_prac id={0} name={''}></Class_prac>
      <Prac_funct></Prac_funct>
      <Prac></Prac>
      <EventDemo></EventDemo>
      <ParentComponent></ParentComponent>
      <UseStateDemo></UseStateDemo> */}
      <Router>
        <Navigations></Navigations>
        <Routes>
        
          <Route path = "/" element= {<Demo></Demo>}></Route>
          <Route path = "/aboutus/:name" element= {<Aboutus></Aboutus>}></Route>
          <Route path = "/contactus" element= {<Contactus></Contactus>}></Route>
          <Route path = "/edit/:id" element= {<EditProduct></EditProduct>}></Route>

          <Route path = "/*" element= {<PageNotFound></PageNotFound>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
