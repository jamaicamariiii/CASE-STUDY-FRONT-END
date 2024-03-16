import Home from "../pages/Home";
import Services from  "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Cleaners from "../pages/Cleaners/Cleaners";
import CleanersDetails from "../pages/Cleaners/CleanersDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
    return (
    <Routes>
       <Route path ="/" element = {<Home/>}/> 
       <Route path ="/home" element = {<Home/>}/> 
       <Route path ="/cleaners" element = {<Cleaners/>}/> 
       <Route path ="/cleaners/:id" element = {<CleanersDetails/>}/> 
       <Route path ="/login" element = {<Login/>}/> 
       <Route path ="/register" element = {<Signup/>}/> 
       <Route path ="/contact" element = {<Contact/>}/> 
       <Route path ="/services" element = {<Services/>}/>
       <Route path ="/users/profile/me" element = {<MyAccount/>}/> 
       <Route path ="/cleaners/profile/me" element = {<Dashboard/>}/> 

      
    </Routes>
    );
};

export default Routers;