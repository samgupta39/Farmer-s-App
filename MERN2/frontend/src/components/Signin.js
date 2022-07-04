import Navbar from "../components/Navbar"
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../images/farm2.png.jpg";
const Signin = () => {
    let h = useHistory();
      const logout=()=>{
          h.push("/logout");
      }
    let homepage = useHistory();
    const[input,setInput]=useState({
      email:"",password:""
    });
    let name,value;
    const handle=(e)=>{
      name=e.target.name;
      value= e.target.value;
  
      setInput({...input,[name]:value});
    }
    const loginbtn=()=>{
      if(input.email && input.password){
        homepage.push("/");
        //alert("successfull");
      }
      else{
        alert("please fill");
      }
    }
    const Toregister =()=>{

      
      console.log("regsiter");
      h.push("/register") 
    }  

  return (
    <>
    <div className="Auth-form-container" >
   
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              name="email"
              value={input.email}
              type="email"
              onChange={handle}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>    
      
          <div className="form-group mt-3">
            <label>Password</label>
            <input
                name="password"
                value={input.password}
                type="email"
                onChange={handle}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button 
            onClick={loginbtn}
            type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <br/>
          <div className="loginsubmit">
          <h5>New User?</h5>
          <button 
          className="butn" 
          onClick={Toregister}
          style={{borderRadius:"5px", backgroundColor:"snow"} }>Register</button>
          </div>
          
        </div>
        
      </form>
      
    </div>
   
    </>
  )
}

export default Signin;