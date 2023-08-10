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
import AddProduct from './components/AddProduct';
import { myContext, newContext} from './components/ProductContext';
import { Product } from './utility/Product';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Api_call from './components/Api_call';


function App() {
  const msg = "hello Boss";
  const products:Product[]=[
    {id:1001,name:"Laptop",price:70000},
    {id:1002,name:"Headphone",price:7000},
    {id:1003,name:"Tablet",price:7000},
    {id:1004,name:"TV",price:50000}];
  return (
    <div>
      {/* <Api_call></Api_call> */}
      <myContext.Provider value={msg}>
      <newContext.Provider value={products}>
      
      
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
        
        <Route path = "/" element= {<Login></Login>}></Route>
          <Route path = "/demo" element= {<Demo></Demo>}></Route>
          <Route path = "/aboutus/:name" element= {<Aboutus></Aboutus>}></Route>
          <Route path = "/contactus" element= {<Contactus></Contactus>}></Route>
          <Route path = "/edit/:id" element= {<EditProduct></EditProduct>}></Route>
          <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/getProduct/:id" element= {<ProductDetails></ProductDetails>}></Route>
          <Route path = "/*" element= {<PageNotFound></PageNotFound>}></Route>
          

        </Routes>
      </Router>
      </newContext.Provider>
        </myContext.Provider>

    </div>
  );
}

export default App;
