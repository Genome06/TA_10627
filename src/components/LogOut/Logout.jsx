import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { authUtils } from '../../utils/auth';
import './Logout.css';

const Logout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Get user data from storage
  useEffect(() => {
    const currentUser = authUtils.getCurrentUser();
    if (currentUser) {
      setUserRole(currentUser.userRole || 'Admin');
      setUsername(currentUser.username || 'Admin');
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear all authentication data
    authUtils.clearAuth();
    
    // Close dropdown
    setIsDropdownOpen(false);
    
    // Navigate to home page
    navigate('/');
  };

  // Format role for display
  const formatRole = (role) => {
    if (role === 'admin') return 'Admin';
    if (role === 'user') return 'Kepala Keluarga';
    return role || 'Admin';
  };

  return (
    <div className="logout-container" ref={dropdownRef}>
      {/* User Profile Button */}
      <button 
        className={`logout-profile-btn ${isDropdownOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        <div className="logout-profile-content">
          <div className="logout-user-icon">
            <FaUser />
          </div>
          <span className="logout-user-name">{formatRole(userRole)}</span>
          <FaChevronDown className={`logout-chevron ${isDropdownOpen ? 'rotated' : ''}`} />
        </div>
      </button>

      {/* Dropdown Menu */}
      <div className={`logout-dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Logout;