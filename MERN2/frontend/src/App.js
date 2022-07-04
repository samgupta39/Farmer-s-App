import React from 'react'
import Navbar from "./components/Navbar";
import {Route,Switch} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Signin from "./components/Signin";
import Logout from './components/Market';
import Register from './components/Register';
import Market from './components/Market';
import "./App.css";import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <div>
       <Navbar/>  
      <Switch>
        <Route exact path="/dashboard " component={Dashboard}/> 
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/" component={Market}/>
        {/* <Route exact path="/aboutus" component={AboutUs}/>*/}
        <Route exact path="/register" component={Register}/> 
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App