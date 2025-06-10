import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEye, FaEyeSlash, FaRedo } from 'react-icons/fa';
import logo from '/assets/logo_2.png';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  
  // CAPTCHA states
  const [captchaText, setCaptchaText] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);
  const canvasRef = useRef(null);
  
  const navigate = useNavigate();

  // Generate simple CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    drawCaptcha(result);
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = '#ddd';
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
    
    // Draw text
    ctx.font = '20px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 7);
  };

  // Initialize CAPTCHA on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle account lockout
  React.useEffect(() => {
    if (isLocked && lockTimer > 0) {
      const timer = setTimeout(() => {
        setLockTimer(lockTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isLocked && lockTimer === 0) {
      setIsLocked(false);
      setLoginAttempts(0);
      setShowCaptcha(false);
    }
  }, [isLocked, lockTimer]);

  // Kredensial yang valid untuk setiap role
  const validCredentials = {
    admin: {
      username: 'admin',
      password: 'admin123'
    },
    user: {
      username: '12345678',
      password: 'user123'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Check if account is locked
    if (isLocked) {
      setError(`Akun terkunci. Coba lagi dalam ${lockTimer} detik.`);
      return;
    }

    // Basic validation - cek apakah field kosong
    if (!username && !password) {
      setError('Silakan masukkan username dan password');
      return;
    } else if (!username) {
      setError('Silakan masukkan username');
      return;
    } else if (!password) {
      setError('Silakan masukkan password');
      return;
    }

    // CAPTCHA validation (show after 2 failed attempts)
    if (showCaptcha) {
      if (!userCaptcha) {
        setError('Silakan masukkan kode CAPTCHA');
        return;
      }
      if (userCaptcha.toLowerCase() !== captchaText.toLowerCase()) {
        setError('Kode CAPTCHA salah');
        generateCaptcha();
        setUserCaptcha('');
        return;
      }
    }

    // Validasi kredensial dan tentukan role
    let userRole = null;
    let isValidCredentials = false;

    // Cek apakah username cocok dengan admin atau user
    if (username === validCredentials.admin.username) {
      if (password === validCredentials.admin.password) {
        userRole = 'admin';
        isValidCredentials = true;
      } else {
        setError('Password admin tidak sesuai');
        handleFailedLogin();
        return;
      }
    } else if (username === validCredentials.user.username) {
      if (password === validCredentials.user.password) {
        userRole = 'user';
        isValidCredentials = true;
      } else {
        setError('Password kepala keluarga tidak sesuai');
        handleFailedLogin();
        return;
      }
    } else {
      setError('Username tidak ditemukan');
      handleFailedLogin();
      return;
    }

    // Jika kredensial valid, reset attempts dan simpan role
    if (isValidCredentials && userRole) {
      // Reset login attempts
      setLoginAttempts(0);
      setShowCaptcha(false);
      
      // Simpan informasi login
      const userData = {
        userRole,
        username,
        loginTime: new Date().toISOString()
      };
      
      if (rememberMe) {
        localStorage.setItem('userRole', userRole);
        localStorage.setItem('username', username);
        localStorage.setItem('loginTime', userData.loginTime);
      } else {
        sessionStorage.setItem('userRole', userRole);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('loginTime', userData.loginTime);
      }

      console.log('Login berhasil:', userData);
      
      // Redirect berdasarkan role
      if (userRole === 'admin') {
        navigate('/pendataan/admin/dashboard');
      } else if (userRole === 'user') {
        navigate('/pendataan/kepalaKeluarga/dashboard');
      }
    }
  };

  const handleFailedLogin = () => {
    const newAttempts = loginAttempts + 1;
    setLoginAttempts(newAttempts);
    
    // Show CAPTCHA after 2 failed attempts
    if (newAttempts >= 2) {
      setShowCaptcha(true);
      generateCaptcha();
    }
    
    // Lock account after 5 failed attempts
    if (newAttempts >= 5) {
      setIsLocked(true);
      setLockTimer(300); // 5 minutes
      setError('Terlalu banyak percobaan login gagal. Akun dikunci selama 5 menit.');
    }
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
            <div className="concrega-brand">
              <img src={logo} alt="Logo Keuskupan Agung Kupang" className="login-logo" />
              <h1 className="login-title">CONCREGA</h1>
            </div>
            <h2 className="login-subtitle">
              SISTEM PENDATAAN UMAT KEUSKUPAN AGUNG KUPANG
            </h2>
          </div>
          
          <div className="login-form-container">
            <div className="user-icon-wrapper">
              <div className="user-icon-container">
                <FaUser className="user-icon" />
              </div>
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
                  disabled={isLocked}
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
                  disabled={isLocked}
                />
                <button 
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={isLocked}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              {showCaptcha && (
                <div className="form-group captcha-group">
                  <div className="captcha-container">
                    <canvas 
                      ref={canvasRef} 
                      width="150" 
                      height="50" 
                      className="captcha-canvas"
                    />
                    <button 
                      type="button" 
                      className="captcha-refresh"
                      onClick={generateCaptcha}
                      disabled={isLocked}
                    >
                      <FaRedo />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Masukkan kode CAPTCHA"
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    className="form-input"
                    disabled={isLocked}
                  />
                </div>
              )}
              
              <div className="form-group remember-me">
                <label className="remember-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="remember-checkbox"
                    disabled={isLocked}
                  />
                  <span className="checkbox-text">Remember Me</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="login-button"
                disabled={isLocked}
              >
                {isLocked ? `Terkunci (${lockTimer}s)` : 'Log In'}
              </button>
              
              {loginAttempts > 0 && loginAttempts < 5 && (
                <div className="login-warning">
                  Percobaan login: {loginAttempts}/5
                </div>
              )}
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