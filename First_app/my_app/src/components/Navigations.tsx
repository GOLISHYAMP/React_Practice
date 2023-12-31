import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const Navigations = () => {
  const [isLoggedIn,setLoggedIn] = useState(false);
  const logout = ()=>{
    sessionStorage.clear();
    console.log("cleared");
  }
  useEffect(() => {
    if (sessionStorage.getItem("emailId") != null){
      setLoggedIn(true);
    } 

    return () => {
      
    }
  })
  
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/demo">Demo Page</Link>
        </li>:""}
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/aboutus/:name">About us</Link>
        </li>:""}
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/contactus">Contact us</Link>
        </li>:""}
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/edit/:id">Edit Product</Link>
        </li>:""}
        {/* <td><Link className="nav-link" to="/addproduct">AddProduct_clickHere</Link></td> */}
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/addproduct">Add Product</Link>
        </li>:""}
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/getProduct/:id">Get Product Details</Link>
        </li>:""}
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/" onClick={logout}>Logout</Link>
        </li>:""}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}