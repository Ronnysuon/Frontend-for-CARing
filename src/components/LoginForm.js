import React from 'react'
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/authStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import './LoginForm.css'
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const  handleLogin = async (e) => {
        e.preventDefault();
       await store.login();
       navigate("/");
    };
  return (
    <section class="pr-1 mb-4">
      
      <div class="card" >
      <h5 class="card-header info-color white-text text-center py-4">Login</h5>
      <form class="text-center" onSubmit={handleLogin}>
        <label>Email Address</label>
          <input 
          onChange={store.updateLoginForm} 
          value={store.loginForm.email} 
          type="email" 
          name="email"
          class="form-control"
          placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

          <div class="form-group">
          <label>Password</label>
          <input 
          onChange={store.updateLoginForm} 
          value={store.loginForm.password} 
          type="password" 
          name="password"
          class="form-control"
          />
          </div>

          <button 
          type="submit" 
          class="btn btn-primary">Login
          </button>

          
      </form>
      
      </div>
    </section>
  )
}
