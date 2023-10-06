import React from 'react'

import { useSelector } from "react-redux";
import handleCart from '../Redux/reducer/HandleCart';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const state = useSelector((state) => state.handelCart);
    console.log(state);
    const history = useNavigate()
    const handelCartlist = ()=>{
      history("/cart")
    }
    const handleHome = ()=>{
      history("/")
    }
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={handleHome}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Registation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={handelCartlist} >Cart{1}</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
