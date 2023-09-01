import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navigations = () => {
    const [isLoggedIn,setLoggedIn] = useState(false)
    const navigate = useNavigate();
    const logout = ()=>{
        sessionStorage.clear();
        console.log("cleared");
        // navigate("/");
        window.location.reload();
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
    <a className="navbar-brand" href="#">Trendy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link"  to="/">Products</Link>
        </li>
        {isLoggedIn?"":<li className="nav-item">
          <Link className="nav-link"  to="/login">Login</Link>
        </li>}
        {isLoggedIn?"":<li className="nav-item">
          <Link className="nav-link"  to="/signup">signup</Link>
        </li>}
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

export default Navigations