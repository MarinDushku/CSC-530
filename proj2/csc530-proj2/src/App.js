// File: src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import LoginSignup from './LoginSignup';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <nav className="navigation">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login"><button className="get-started-btn">Get Started</button></Link>
          </div>
        </header>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className="hero">
                  <div className="hero-content">
                    <h1>Discover Amazing Products</h1>
                    <p>Your one-stop destination for everything you need.</p>
                    <button className="shop-now-btn">Shop Now</button>
                  </div>
                  <div className="hero-image">
                    <img src="https://via.placeholder.com/600x400" alt="Shopping" />
                  </div>
                </section>

                {/* Featured Products Section */}
                <section className="featured-products">
                  <h2>Featured Products</h2>
                  <div className="product-list">
                    <div className="product-item">
                      <img src="https://via.placeholder.com/200" alt="Product 1" />
                      <p>Product 1</p>
                      <span>$29.99</span>
                    </div>
                    <div className="product-item">
                      <img src="https://via.placeholder.com/200" alt="Product 2" />
                      <p>Product 2</p>
                      <span>$49.99</span>
                    </div>
                    <div className="product-item">
                      <img src="https://via.placeholder.com/200" alt="Product 3" />
                      <p>Product 3</p>
                      <span>$19.99</span>
                    </div>
                  </div>
                </section>

                {/* About Us Section */}
                <section className="about-us">
                  <h2>About Us</h2>
                  <p>
                    We are dedicated to bringing you the best products from around the world. Our mission is to provide an amazing shopping experience with a diverse range of quality items.
                  </p>
                </section>

                {/* Contact Us Section */}
                <section className="contact-us">
                  <h2>Contact Us</h2>
                  <p>
                    Have questions or need support? Reach out to us at <a href="mailto:support@example.com">support@example.com</a> and we will be happy to assist you.
                  </p>
                </section>
              </>
            }
          />

          {/* Login/Signup Page */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
