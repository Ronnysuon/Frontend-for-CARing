import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.rtl.css';



export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <span class="navb"/>
    <ul class="navbar-nav ml-auto ">

        <li class="nav-item active">
          <a href="#" class="nav-link">
          <Link to="/"> Home </Link>
          </a>
        </li>

        <li class="nav-item active">
          <a href="#" class="nav-link">
          <Link to="/login"> Login </Link>
          </a>
        </li>
          

        <li class="nav-item active">
          <a href="#" class="nav-link">
            <Link to="/dash"> Warning Lights </Link>
          </a>
        </li>

        <li class="nav-item active">
         <a href="#" class="nav-link">
            <Link to="/search"> Search </Link>
          </a>  
        </li>
        
        <li class="nav-item active">
          <a href="#" class="nav-link">
            <Link to="/signup"> Signup </Link>
          </a>
        </li>

        <li class="nav-item active ">
          <a href="#" class="nav-link">
            <Link to="/logout"> Logout </Link>
          </a>
        </li>

      
      </ul>
      </nav>
  )
}
