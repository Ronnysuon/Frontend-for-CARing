import React from 'react'
import authStore from '../stores/authStore';
import { useNavigate } from 'react-router-dom';


export default function SignupForm() {
    const store = authStore();
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate("/login");
    }
  
  return (
    <div class="card">
      <h5 class="card-header info-color white-text text-center py-4">Sign Up</h5>
    <form class="text-center" onSubmit={handleSignup}>
        <label>Email Address:</label>
        <input
        class="form-control" 
        onChange={store.updateSignupForm} 
        value={store.signupForm.email} 
        type="email" 
        name="email"
        placeholder="Please enter an email..."
        />
        <label>Password:</label>
        <input
        class="form-control" 
        onChange={store.updateSignupForm} 
        value={store.signupForm.password} 
        type="password" 
        name="password"
        placeholder="Please enter a password..."
        />
        <button 
        class="btn btn-primary"
        type="submit">Sign Up
        </button> 
    </form>
    </div>
  )
}