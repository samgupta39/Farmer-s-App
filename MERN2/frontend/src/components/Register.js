import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from "../components/Navbar";
const Register = () => {
  const[user,setUser] = useState({
    username:"",email:"",fname:"" ,lname:"",pnum:"",state:"",city:"",dist:"",DOB:"",password:""
}); 

let name,value;
const handlechange=(e)=>{
    name=e.target.name;
    value=e.target.value;

     setUser({...user,[name]:value});
}
  const hist = useHistory();
  // const pass=(e)=>{
  //   console.log("hell0");
  //   hist.push("/signup");
  // }
  const pass= async(e)=>{
    console.log("called");
    e.preventDefault();

    const[username,email,fname,lname,pnum,state,city,dist,DOB,password] = user;

    const response=await fetch("/register",{
      
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringyfy({
        username,email,fname ,lname,pnum,state,city,dist,DOB,password
      })
      
    });
    const data = await response.json();
    console.log("in");
    if(data.status===422 || !data){
      window.alert("Invalid");
      console.log("hi");
    }
    else{
      alert("succes");
      console.log("hello");
      hist.push("/signin");
    }
  }
  return (
    <>
    
    <form onSubmit={pass} method="POST">
      <div className='imageregister'> 
       
    <div class="registration">
    
    <div class="input-group mb-3">
     
     <span class="input-group-text" id="basic-addon1">@</span>
     <input type="text" 
            class="form-control" 
            style={{transition:"top 200ms"}}
            placeholder="Username  "               
            aria-label="Username" 
            aria-describedby="basic-addon1"
            onChange={handlechange}
           value={user.username}
            name="username"
            />
            
     </div>
     
     <div class="input-group mb-3">
     <input type="email" 
            class="form-control" 
            placeholder="Recipient's Email" 
            onChange={handlechange}
            value={user.email}
            name="email"  
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2"
     
            />
     <span class="input-group-text" id="basic-addon2">@example.com</span>
     </div>
      <div class="input-group mb-3">
     <span class="input-group-text" id="basic-addon3">First Name</span>
     <input type="text" 
            onChange={handlechange}
            value={user.fname}
            name="fname" 
            class="form-control" 
            id="basic-url" 
            aria-describedby="basic-addon3"
             />
     <span class="input-group-text" id="basic-addon3">Last Name</span>
     <input type="text" 
            onChange={handlechange}
            value={user.lname}
            name="lname" 
            class="form-control" 
            id="basic-url" 
            aria-describedby="basic-addon3"
            />
     </div>
     <div class="input-group mb-3">
     <span class="input-group-text">Phone Number</span>
     <span class="input-group-text">+91 </span>
     <input type="text" 
            class="form-control" 
            aria-label="Amount (to the nearest dollar)"
            onChange={handlechange}
            value={user.pnum}
            name="pnum" 
            />
     
     </div>
     <div class="input-group mb-3">
     <span class="input-group-text">STATE</span>
     <input type="text" 
            class="form-control" 
            aria-label="Amount (to the nearest dollar)"
            onChange={handlechange}
            value={user.state}
            name="state" 
            />
            <span class="input-group-text">CITY</span>
     <input type="text" 
            class="form-control" 
            aria-label="Amount (to the nearest dollar)"
            onChange={handlechange}
            value={user.city}
            name="city" 
            />
             <span class="input-group-text">DISTRICT</span>
     <input type="text" 
            class="form-control" 
            aria-label="Amount (to the nearest dollar)"
            onChange={handlechange}
            value={user.dist}
            name="dist" 
            />
     </div>
     <div class="input-group mb-3">
     <span class="input-group-text">Date Of Birth</span>
     
     <input type="" 
            class="form-control" 
            aria-label="Amount (to the nearest dollar)"
            onChange={handlechange}
            value={user.DOB}
            name="DOB" 
            />
     <span class="input-group-text">DD/MM/YYYY </span>
     </div>
     
     <div class="input-group mb-3">
     <span class="input-group-text">Password</span>
     <input type="password" 
            class="form-control" 
            onChange={handlechange}
            value={user.password}
            name="password" 
            older="Password" 
            aria-label="Username"
            />
     <span class="input-group-text">ConfirmPassowrd</span>
     <input type="password" 
            class="form-control" 
            onChange={handlechange}
            value={user.confirmpassword}
            name="confirmpassword" 
            holder="confirm Password" 
            aria-label="Server"
            />
     </div>
     
     <div class="input-group">
      
     <button type="submit" 
             class="btn btn-primary" 
             style={{marginBottom:"1px" ,marginLeft:"1px"}}
              // onClick={pass}
             >Register</button> 
      
     </div>
     </div>
    </div>
    </form>
    </>
  )
  }

export default Register