import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/farmer.png";
const Navbar=()=>{
    return(
        <>
        <div>
  <nav class="navbar navbar-expand-lg bg-light" >
  <div class="container-fluid" style={{backgroundColor:"transparent"}}>
    <img src={logo} alt="farmoing" style={{width:"4%"}}/>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink style={{textDecoration:"none", color:"CaptionText" }}  to="/home">Home</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink style={{textDecoration:"none", color:"CaptionText" }}  to="/dashboard">MyDashBoard</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"CaptionText"}} to="/signin">Signin</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"CaptionText"}} to="/market">Market</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"CaptionText"}} to="/market">Mar </NavLink></a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link"><NavLink style={{textDecoration:"none",color:"CaptionText"}} to="/registeration"> Register</NavLink></a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
</div>
        </>
    )
    
}
export default Navbar;
