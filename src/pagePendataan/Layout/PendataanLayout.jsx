import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../components/SideBar/Sidebar';
import Logout from '../../components/LogOut/Logout';
import { authUtils } from '../../utils/auth';
import './PendataanLayout.css';

const PendataanLayout = () => {
  const navigate = useNavigate();
  const [showLogoutWarning, setShowLogoutWarning] = useState(false);
  
  useEffect(() => {
    // Check authentication status every minute
    const authCheckInterval = setInterval(() => {
      if (!authUtils.isAuthenticated()) {
        console.log('Session expired, redirecting to login...');
        navigate('/login');
        return;
      }
      
      // Check if session will expire in next 15 minutes
      const expiryTime = localStorage.getItem('expiryTime') || sessionStorage.getItem('expiryTime');
      if (expiryTime) {
        const timeUntilExpiry = new Date(expiryTime) - new Date();
        const minutesUntilExpiry = Math.floor(timeUntilExpiry / (1000 * 60));
        
        // Show warning if less than 15 minutes remaining
        if (minutesUntilExpiry <= 15 && minutesUntilExpiry > 0) {
          setShowLogoutWarning(true);
        } else {
          setShowLogoutWarning(false);
        }
      }
    }, 60000); // Check every minute
    
    // Activity listeners to extend session
    const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    
    const handleActivity = () => {
      if (authUtils.isAuthenticated()) {
        authUtils.updateExpiry();
        setShowLogoutWarning(false);
      }
    };
    
    // Add activity listeners
    activityEvents.forEach(event => {
      document.addEventListener(event, handleActivity);
    });
    
    // Cleanup
    return () => {
      clearInterval(authCheckInterval);
      activityEvents.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [navigate]);
  
  // Handle extend session
  const handleExtendSession = () => {
    authUtils.updateExpiry();
    setShowLogoutWarning(false);
  };
  
  // Handle force logout
  const handleForceLogout = () => {
    authUtils.clearAuth();
    navigate('/login');
  };
  
  return (
    <div className="pendataan-layout">
      <Sidebar />
      <div className="pendataan-content">
        {/* Header hanya berisi Logout */}
        <div className="pendataan-header">
          <Logout />
        </div>
        
        {/* Main Content */}
        <div className="pendataan-main-content">
          <Outlet />
        </div>
        
        {/* Session Warning Modal */}
        {showLogoutWarning && (
          <div className="session-warning-overlay">
            <div className="session-warning-modal">
              <h3>⚠️ Sesi Akan Berakhir</h3>
              <p>Sesi Anda akan berakhir dalam 15 menit. Apakah Anda ingin memperpanjang sesi?</p>
              <div className="session-warning-buttons">
                <button 
                  className="btn-extend-session"
                  onClick={handleExtendSession}
                >
                  Perpanjang Sesi
                </button>
                <button 
                  className="btn-logout-now"
                  onClick={handleForceLogout}
                >
                  Logout Sekarang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Toast Container untuk semua halaman pendataan */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default PendataanLayout;