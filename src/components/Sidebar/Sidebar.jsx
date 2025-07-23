import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUsers, 
  FaExchangeAlt, 
  FaChartBar, 
  FaChurch,
  FaChevronDown,
  FaChevronUp,
  FaAngleDoubleLeft,
  FaAngleDoubleRight
} from 'react-icons/fa';
import logo from '/assets/logo_2.png';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  // PERBAIKAN: Function untuk mendapatkan user role sesuai struktur localStorage yang sebenarnya
  const getUserRole = () => {
    // Cek localStorage untuk userRole
    const userRoleFromLocal = localStorage.getItem('userRole');
    if (userRoleFromLocal) {
      return userRoleFromLocal;
    }
    
    // Fallback: cek sessionStorage untuk userRole
    const userRoleFromSession = sessionStorage.getItem('userRole');
    if (userRoleFromSession) {
      return userRoleFromSession;
    }
    
    // Fallback: cek dari URL path untuk auto-detect
    if (location.pathname.includes('/pendataan/user/')) {
      return 'user';
    }
    
    if (location.pathname.includes('/pendataan/kepalaKeluarga/')) {
      return 'user';
    }
    
    // Default ke admin
    return 'admin';
  };

  const userRole = getUserRole();

  // PERBAIKAN: Menu items berdasarkan role dengan path yang sesuai main.jsx
  const getMenuItems = () => {
    if (userRole === 'user') {
      // Menu untuk role user (kepala keluarga)
      return [
        {
          id: 'home',
          label: 'Home',
          icon: <FaHome />,
          path: '/pendataan/kepalaKeluarga/dashboard', // Sesuai dengan route di main.jsx
          type: 'link'
        },
        {
          id: 'umat',
          label: 'Umat',
          icon: <FaUsers />,
          path: '/pendataan/kepalaKeluarga/data-keluarga', // Path untuk data keluarga user
          type: 'link',
          relatedPaths: [
            '/pendataan/kepalaKeluarga/data-keluarga/tambah',
            '/pendataan/kepalaKeluarga/data-keluarga/edit/:id',
            '/pendataan/kepalaKeluarga/data-keluarga/edit'
          ]
        }
      ];
    }
    
    // Menu untuk role admin (menu lengkap)
    return [
      {
        id: 'home',
        label: 'Home',
        icon: <FaHome />,
        path: '/pendataan/admin/dashboard',
        type: 'link'
      },
      {
        id: 'umat',
        label: 'Umat',
        icon: <FaUsers />,
        path: '/pendataan/admin/data-umat',
        type: 'link',
        relatedPaths: [
          '/pendataan/admin/data-umat/tambah',
          '/pendataan/admin/data-keluarga'
        ]
      },
      {
        id: 'migrasi',
        label: 'Migrasi',
        icon: <FaExchangeAlt />,
        type: 'dropdown',
        children: [
          {
            id: 'migrasi-umat',
            label: 'Migrasi Umat',
            path: '/pendataan/admin/migrasi-umat',
            relatedPaths: [
              '/pendataan/admin/migrasi-umat/input/:id',
            ]
          },
          {
            id: 'list-umat-termigrasi',
            label: 'List Umat Termigrasi',
            path: '/pendataan/admin/list-umat-termigrasi',
            relatedPaths: [
              '/pendataan/admin/list-umat-termigrasi/lihat-data-migrasi/:id'
            ]
          }
        ]
      },
      {
        id: 'statistik',
        label: 'Statistik',
        icon: <FaChartBar />,
        path: '/pendataan/admin/statistik',
        type: 'link'
      },
      {
        id: 'paroki',
        label: 'Paroki',
        icon: <FaChurch />,
        type: 'dropdown',
        children: [
          {
            id: 'komunitas-omk',
            label: 'Komunitas / OMK',
            path: '/pendataan/admin/komunitas-omk',
            relatedPaths: [
              '/pendataan/admin/komunitas-omk/tambah',
              '/pendataan/admin/komunitas-omk/detail/:id',
              '/pendataan/admin/komunitas-omk/edit/:id',
              '/pendataan/admin/komunitas-omk/detail/:id/tambah-anggota',
              '/pendataan/admin/komunitas-omk/detail/:id/edit-anggota/:anggotaId'
            ]
          },
          {
            id: 'tempat-ziarah',
            label: 'Tempat Ziarah',
            path: '/pendataan/admin/tempat-ziarah',
            relatedPaths: [
              '/pendataan/admin/tempat-ziarah/tambah',
              '/pendataan/admin/tempat-ziarah/edit/:id'
            ]
          }
        ]
      }
    ];
  };

  const menuItems = getMenuItems();

  // Effect untuk menutup dropdown ketika sidebar di-collapse
  useEffect(() => {
    if (isCollapsed) {
      setOpenDropdowns({});
    }
  }, [isCollapsed]);

  // Effect untuk menutup dropdown ketika mobile sidebar ditutup
  useEffect(() => {
    if (!isMobileOpen) {
      setOpenDropdowns({});
    }
  }, [isMobileOpen]);

  // PERBAIKAN: Effect untuk reset dropdown ketika role berubah
  useEffect(() => {
    setOpenDropdowns({});
  }, [userRole]);

  // PERBAIKAN: Debug log untuk melihat role yang terdeteksi
  useEffect(() => {
    console.log('Current user role:', userRole);
    console.log('Current path:', location.pathname);
    console.log('Menu items:', menuItems);
  }, [userRole, location.pathname, menuItems]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleDropdown = (itemId) => {
    // Jangan buka dropdown jika sidebar dalam mode collapsed
    if (isCollapsed) {
      return;
    }

    setOpenDropdowns(prev => {
      // Tutup semua dropdown lain kecuali yang diklik
      const newDropdowns = {};
      newDropdowns[itemId] = !prev[itemId];
      return newDropdowns;
    });
  };

  // Function untuk handle klik menu tanpa dropdown
  const handleMenuClick = () => {
    // Tutup semua dropdown yang terbuka
    setOpenDropdowns({});
    // Tutup mobile sidebar jika terbuka
    setIsMobileOpen(false);
  };

  // Updated isActive function untuk menangani related paths
  const isActive = (item) => {
    // Jika item adalah string (path langsung)
    if (typeof item === 'string') {
      return location.pathname === item;
    }
    
    // Jika item adalah object dengan path dan relatedPaths
    if (item.path && location.pathname === item.path) {
      return true;
    }
    
    // Check related paths jika ada
    if (item.relatedPaths) {
      return item.relatedPaths.some(relatedPath => {
        // Handle dynamic routes dengan parameter
        if (relatedPath.includes(':')) {
          // Convert :id pattern to regex
          const regexPattern = relatedPath.replace(/:[\w]+/g, '[^/]+');
          const regex = new RegExp(`^${regexPattern}$`);
          return regex.test(location.pathname);
        }
        
        // Handle exact match atau starts with untuk nested routes
        return location.pathname === relatedPath || 
               location.pathname.startsWith(relatedPath + '/');
      });
    }
    
    return false;
  };

  // Updated isDropdownActive function untuk menangani related paths pada dropdown children
  const isDropdownActive = (children) => {
    return children.some(child => {
      // Check exact path match
      if (location.pathname === child.path) {
        return true;
      }
      
      // Check related paths jika ada
      if (child.relatedPaths) {
        return child.relatedPaths.some(relatedPath => {
          // Handle dynamic routes dengan parameter
          if (relatedPath.includes(':')) {
            // Convert :id pattern to regex
            const regexPattern = relatedPath.replace(/:[\w]+/g, '[^/]+');
            const regex = new RegExp(`^${regexPattern}$`);
            return regex.test(location.pathname);
          }
          
          // Handle exact match atau starts with untuk nested routes
          return location.pathname === relatedPath || 
                 location.pathname.startsWith(relatedPath + '/');
        });
      }
      
      return false;
    });
  };

  // PERBAIKAN: Update logo text berdasarkan role
  const getLogoText = () => {
    if (userRole === 'user') {
      return {
        title: 'CONCREGA',
        subtitle: 'Portal Kepala Keluarga'
      };
    }
    
    return {
      title: 'CONCREGA',
      subtitle: 'Sistem Pendataan Umat'
    };
  };

  const logoText = getLogoText();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className={`sidebar-mobile-toggle ${isMobileOpen ? 'sidebar-open' : ''}`}
        onClick={toggleMobile}
      >
        {isMobileOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && <div className="sidebar-mobile-overlay" onClick={toggleMobile}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          {!isCollapsed && (
            <div className="sidebar-logo">
              <img src={logo} alt="Logo Keuskupan" className="sidebar-logo-img" />
              <div className="sidebar-logo-text">
                <h3>{logoText.title}</h3>
                <p>{logoText.subtitle}</p>
              </div>
            </div>
          )}
          
          {/* Desktop Toggle Button */}
          <button 
            className="sidebar-toggle-btn sidebar-desktop-only" 
            onClick={toggleSidebar}
          >
            {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="sidebar-nav-item">
                {item.type === 'link' ? (
                  <Link 
                    to={item.path} 
                    className={`sidebar-nav-link ${isActive(item) ? 'active' : ''}`}
                    onClick={handleMenuClick}
                  >
                    <div className="sidebar-nav-content">
                      <span className="sidebar-nav-icon">{item.icon}</span>
                      {!isCollapsed && <span className="sidebar-nav-text">{item.label}</span>}
                    </div>
                  </Link>
                ) : (
                  <div className="sidebar-nav-dropdown">
                    <button 
                      className={`sidebar-nav-link sidebar-dropdown-toggle ${isDropdownActive(item.children) ? 'active' : ''}`}
                      onClick={() => toggleDropdown(item.id)}
                    >
                      <div className="sidebar-nav-content">
                        <span className="sidebar-nav-icon">{item.icon}</span>
                        {!isCollapsed && <span className="sidebar-nav-text">{item.label}</span>}
                      </div>
                      {!isCollapsed && (
                        <span className="sidebar-dropdown-arrow">
                          {openDropdowns[item.id] ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      )}
                    </button>
                    
                    {/* Dropdown Items */}
                    <ul className={`sidebar-dropdown-menu ${openDropdowns[item.id] && !isCollapsed ? 'open' : ''}`}>
                      {item.children.map((child) => (
                        <li key={child.id} className="sidebar-dropdown-item">
                          <Link 
                            to={child.path} 
                            className={`sidebar-dropdown-link ${isActive(child) ? 'active' : ''}`}
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;