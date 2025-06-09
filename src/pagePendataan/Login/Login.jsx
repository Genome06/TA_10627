import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '/assets/logo_2.png';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!username || !password) {
      setError('Silakan masukkan username dan password');
      return;
    }

    // Here you would normally connect to your API for authentication
    console.log('Login attempt:', { username, password, rememberMe });
    
    // For demonstration purposes, you would redirect to a dashboard page
    // navigate('/pendataan/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-top-bar"></div>
      
      <div className="login-header-container">
        <Link to="/" className="login-logo-link">
          <div className="login-top-logo">
            <img src={logo} alt="Logo Keuskupan Agung Kupang" className="login-logo-small" />
            <span className="login-top-title">KEUSKUPAN AGUNG KUPANG</span>
          </div>
        </Link>
      </div>
      
      <div className="login-container">
        <div className="login-center-content">
          <div className="login-header">
            <img src={logo} alt="Logo Keuskupan Agung Kupang" className="login-logo" />
            <h1 className="login-title">KEUSKUPAN AGUNG KUPANG</h1>
            <h2 className="login-subtitle">SISTEM PENDATAAN UMAT</h2>
          </div>
          
          <div className="login-form-container">
            <div className="user-icon-container">
              <FaUser className="user-icon" />
            </div>
            
            <form className="login-form" onSubmit={handleSubmit}>
              {error && <div className="login-error">{error}</div>}
              
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-input"
                />
              </div>
              
              <div className="form-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
                <button 
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              <div className="form-group remember-me">
                <label className="remember-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="remember-checkbox"
                  />
                  <span className="checkbox-text">Remember Me</span>
                </label>
              </div>
              
              <button type="submit" className="login-button">
                Log In
              </button>
            </form>
          </div>
        </div>
        
        <div className="login-footer">
          © {new Date().getFullYear()} Keuskupan Agung Kupang. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;