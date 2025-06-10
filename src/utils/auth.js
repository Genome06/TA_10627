// Authentication utility functions
export const authUtils = {
  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    const expiryTime = localStorage.getItem('expiryTime') || sessionStorage.getItem('expiryTime');
    
    if (!token || !expiryTime) {
      return false;
    }
    
    // Check if token is expired
    const now = new Date();
    const expiry = new Date(expiryTime);
    
    if (now > expiry) {
      this.clearAuth();
      return false;
    }
    
    return true;
  },
  
  // Get current user data
  getCurrentUser() {
    if (!this.isAuthenticated()) {
      return null;
    }
    
    return {
      username: localStorage.getItem('username') || sessionStorage.getItem('username'),
      userRole: localStorage.getItem('userRole') || sessionStorage.getItem('userRole'),
      authToken: localStorage.getItem('authToken') || sessionStorage.getItem('authToken'),
      loginTime: localStorage.getItem('loginTime') || sessionStorage.getItem('loginTime'),
      expiryTime: localStorage.getItem('expiryTime') || sessionStorage.getItem('expiryTime')
    };
  },
  
  // Clear all authentication data
  clearAuth() {
    // Clear localStorage
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    localStorage.removeItem('loginTime');
    localStorage.removeItem('expiryTime');
    
    // Clear sessionStorage
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('loginTime');
    sessionStorage.removeItem('expiryTime');
  },
  
  // Get user role
  getUserRole() {
    if (!this.isAuthenticated()) {
      return null;
    }
    return localStorage.getItem('userRole') || sessionStorage.getItem('userRole');
  },
  
  // Check if user has specific role
  hasRole(role) {
    return this.getUserRole() === role;
  },
  
  // Update expiry time (for activity tracking)
  updateExpiry() {
    const newExpiryTime = new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString();
    
    if (localStorage.getItem('authToken')) {
      localStorage.setItem('expiryTime', newExpiryTime);
    }
    if (sessionStorage.getItem('authToken')) {
      sessionStorage.setItem('expiryTime', newExpiryTime);
    }
  }
};