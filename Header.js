
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaPhoneAlt } from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {BiLogIn} from 'react-icons/bi';
import {GrCart} from 'react-icons/gr';
import {FiSearch} from 'react-icons/fi';

 const Header=()=>{
     return(
      
       <div className="container">
          <div>
           <div>
         <div className="dropdown">
         <nav className="navbar navbar-expand-lg navbar-light ">
         <a className=" dropdown-toggle">USD    </a>
       
         <a className=" dropdown-toggle">ENG    </a>
       
      <button className="navbar-toggler dropdown-toggle" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" >Links</button>
      <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
      <li  className="nav-item">  <a className=" nav-link  call"  href="#"> < FaPhoneAlt />CALL:+01432 896 453</a></li>
      <li  className="nav-item">  <a className=" nav-link   contact" href="#">CONTACT US</a></li>
      <li  className="nav-item">    <a className=" nav-link   mywish" href="#"><FaHeart /> MYWISHLIST(0)</a></li>
      <li  className="nav-item">   <a className=" nav-link  about"  href="#">ABOUT</a></li>
      <li  className="nav-item">    <a className="nav-link  login"  href="#"><BiLogIn/>LOGIN</a></li>
        </ul>
      </div>
      </nav>
      </div> 
      </div>
   <hr/>
  </div> 

  <div className="iteam">

 
  <nav className="navbar navbar-expand-lg navbar-light ">
  <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#myNavBar">
    <span className="navbar-toggler-icon ">

    </span>
  </button>
  
  
 
  <a href=""> <img  className="navbar-brand logo" src="https://d-themes.com/react/molla/demo-2/assets/images/logo.png"/></a>
  <b>
  <div className=" collapse navbar-collapse" id="myNavBar">
 <ul className="navbar-nav ">
 

 <li  className="nav-item"> <a className="nav-link active dropdown-toggle shops"   href="">HOME</a></li>
 <li  className="nav-item"> <a className="nav-link dropdown-toggle shops"  href="">SHOP</a> </li>
 <li  className="nav-item"> <a className="nav-link dropdown-toggle shops"  href=""> PRODUCT</a></li>
  <li  className="nav-item">  <a className="nav-link dropdown-toggle shops "  href="">PAGES</a></li>
  <li  className="nav-item"> <a className="nav-link dropdown-toggle shops"  href=""> BLOGS</a></li>
    <li  className="nav-item"> <a className="nav-link dropdown-toggle shops"  href="">ELEMENT</a></li>
  
   <li  className="nav-iteam">
   <form class="d-flex">
     <input type="text" className=' form-control me-2 search' placeholder="search " aria-label="Search"/>
     <a  className="searchicon" href=""><FiSearch/></a>
     </form>
     </li>
   
    </ul>
    
   </div>
   </b>
  
    

   <a href=""><GrCart className="cartimg"/> 
   <button className="cart"> 0</button>
  
   </a>
 
   </nav>
   
  
   
        </div>

        
   
      </div>);
      

 }
 export default Header;