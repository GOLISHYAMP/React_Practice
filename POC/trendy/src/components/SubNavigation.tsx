import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const SubNavigations = () => {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/shirts">Shirts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/jeans">Jeans</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/shoes">Jeans</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/goggles">Goggles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/Tshirt">Tshirts</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default SubNavigations