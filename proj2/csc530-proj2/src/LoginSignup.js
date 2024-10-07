// File: src/LoginSignup.js

import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login request
      try {
        const response = await axios.post('http://localhost:5000/login', {
          email: formData.email,
          password: formData.password
        });
        if (response.data.success) {
          alert('Login successful');
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in.');
      }
    } else {
      // Sign up request
      try {
        const response = await axios.post('http://localhost:5000/signup', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        });
        if (response.data.success) {
          alert('Signup successful');
          setIsLogin(true);
        } else {
          alert('Signup failed');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        alert('An error occurred while signing up.');
      }
    }
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" value={formData.role} onChange={handleChange}>
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
          </div>
          <button type="submit" className="form-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p onClick={toggleForm} className="toggle-link">
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;