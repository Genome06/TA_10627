import React, { useState, useRef, useEffect, useContext } from 'react';
import './NavbarRegular.css';
import { FaSearch, FaTimes, FaChevronDown, FaBars } from 'react-icons/fa';
import logo from '/assets/logo_2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

// Data dropdown items
const dropdownItems = {
  'Profil KAK': [
    { title: 'Sejarah', path: '/sejarah' },
    { title: 'Arah Dasar KAK', path: '/arah-dasar-kak' },
    { title: 'Perak Episcopal Mgr Petrus Turang', path: '/perak-episcopal' }
  ],
  'Komisi': [
    { title: 'Komisi Liturgi', path: '/komisi/liturgi' },
    { title: 'Komisi Kitab Suci', path: '/komisi/kitab-suci' },
    { title: 'Komisi Pendidikan', path: '/komisi/pendidikan' },
    { title: 'Komisi Kateketik', path: '/komisi/kateketik' },
    { title: 'Komisi PSE', path: '/komisi/pse' },
    { title: 'Komisi HAK', path: '/komisi/hak' },
    { title: 'Komisi Kepemudaan', path: '/komisi/kepemudaan' },
    { title: 'Komisi Keluarga', path: '/komisi/keluarga' },
    { title: 'Komisi Komsos', path: '/komisi/komsos' },
    { title: 'Komisi KPMP', path: '/komisi/kpmp' },
    { title: 'Komisi Seminari', path: '/komisi/seminari' }
  ],
  'Paroki': [
    { title: 'Wilayah Kota Kupang', path: '/kota-kupang' },
    { title: 'Wilayah Kabupaten Kupang', path: '/kabupaten-kupang' },
    { title: 'Wilayah TTS', path: '/tts' },
    { title: 'Wilayah Kepulauan', path: '/kepulauan' }
  ],
  'Informasi': [
    { title: 'Download Area', path: '/informasi/download' },
    { title: 'Kontak', path: '/informasi/kontak' },
    { title: 'Galeri', path: '/informasi/galeri' },
    { title: 'Kegiatan Keuskupan', path: '/informasi/kegiatan-keuskupan' }
  ]
};

const Navbar_regular = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeout = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [isSearchExpandedMobile, setIsSearchExpandedMobile] = useState(false);
  const mobileSearchRef = useRef(null);

  // Simulated searchable items for frontend-only search
  const searchableItems = [
    { title: 'Home', path: '/' },
    ...Object.values(dropdownItems).flat(),
    { title: 'Login', path: '/login' },
    { title: 'Berita Harian', path: '/berita-harian' },
    { title: 'Suara Gembala', path: '/suara-gembala' },
    { title: 'Tokoh', path: '/tokoh' },
    { title: 'Konsultasi Iman', path: '/konsultasi-iman' },
    { title: 'Serba-Serbi', path: '/serba-serbi' },
    { title: 'Renungan Harian', path: '/renungan-harian' }
  ];

  const filteredResults = searchQuery
    ? searchableItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Handle dropdown hover
  const handleDropdownHover = (item) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(item);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Untuk mobile search box
      if (isSearchExpandedMobile && 
          mobileSearchRef.current && 
          !mobileSearchRef.current.contains(e.target)) {
        setIsSearchExpandedMobile(false);
      }

      // Untuk search box
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        if (searchQuery === '') setIsSearchExpanded(false);
      }
      
      // Untuk mobile menu
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(e.target) && 
          !e.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchExpandedMobile, searchQuery]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
     <div className={`navbarContainer ${scrolled ? 'scrolled' : ''}`}>
      {!scrolled && <div className="top-bar"></div>}

      <div className={`navbarRegular ${isSearchExpandedMobile ? 'search-expanded' : ''}`}>
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="judulLogo">Keuskupan Agung Kupang</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          {['Home', 'Profil KAK', 'Komisi', 'Paroki', 'Informasi', 'Login'].map((item) => {
            const hasDropdown = dropdownItems[item];
            const path = item === 'Home' ? '/' : item === 'Login' ? '/login' : null;
            // Cek apakah salah satu path di dropdown aktif
            const isDropdownActive = hasDropdown && dropdownItems[item].some(sub =>
              location.pathname === sub.path || location.pathname.startsWith(sub.path + '/')
            );
            const isActive = location.pathname === path || isDropdownActive;

            return (
              <li
                key={item}
                onMouseEnter={() => hasDropdown && handleDropdownHover(item)}
                onMouseLeave={handleDropdownLeave}
                className={`nav-item${isActive ? ' active' : ''}`}
              >
                {path ? (
                  <Link to={path} className={isActive ? 'nav-link active-nav-link' : 'nav-link'}>
                    {item}
                    {hasDropdown && <FaChevronDown className="dropdown-arrow" />}
                    {isActive && <div className="active-indicator" />}
                  </Link>
                ) : (
                  <span className={isActive ? 'active-nav-link nav-link-with-dropdown' : 'nav-link-with-dropdown'}>
                    {item}
                    {hasDropdown && <FaChevronDown className="dropdown-arrow" />}
                    {isActive && <div className="active-indicator" />}
                  </span>
                )}

                {hasDropdown && activeDropdown === item && (
                  <div
                    className="dropdown-menu"
                    role="menu"
                    tabIndex={-1}
                    aria-label={`${item} submenu`}
                    onMouseEnter={() => handleDropdownHover(item)}
                    onMouseLeave={handleDropdownLeave}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    {dropdownItems[item].map((subItem, idx) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="dropdown-item"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.target.click();
                          }
                        }}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className={`search-container ${isSearchExpanded ? 'expanded' : ''}`} ref={searchRef}>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchExpanded(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                  navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                  setIsSearchExpanded(false);
                }
              }}
            />
            {isSearchExpanded ? (
              <FaTimes 
                className="search-icon" 
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchExpanded(false);
                }}
              />
            ) : (
              <FaSearch className="search-icon" onClick={() => setIsSearchExpanded(true)} />
            )}
          </div>
          {/* Hasil pencarian simulasi */}
          {isSearchExpanded && searchQuery && (
            <div className="search-results">
              {filteredResults.length > 0 ? (
                filteredResults.map(item => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="search-result-item"
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchExpanded(false);
                    }}
                  >
                    {item.title}
                  </Link>
                ))
              ) : (
                <div className="no-results">No results found</div>
              )}
            </div>
          )}
        </div>
        <div className="navbar-icons-container">
          {/* Hamburger Menu Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            // style={{ display: isSearchExpandedMobile ? 'none' : 'flex' }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu - Posisi di bawah navbar */}
          {isMobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="mobile-menu"
            >
              {/* Garis oranye pembatas di atas menu */}
              <div className="orange-top-border"></div> 
              <div className="mobile-menu-content">
                {/* Menu Home */}
                <div className="menu-category">
                  <h3 className="category-title">Home</h3>
                  <div className="category-divider"></div>
                  <ul className="submenu-items">
                    <li>
                      <Link to="/" className="submenu-item" onClick={closeMobileMenu}>
                        Masuk ke Beranda
                      </Link>
                    </li>
                  </ul>
                </div>
                {Object.entries(dropdownItems).map(([category, items]) => (
                  <div key={category} className="menu-category">
                    <h3 className="category-title">{category}</h3>
                    <div className="category-divider"></div>
                    <ul className="submenu-items">
                      {items.map((item) => (
                        <li key={item.title}>
                          <Link 
                            to={item.path}
                            className="submenu-item"
                            onClick={closeMobileMenu}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* Menu Login */}
                <div className="menu-category">
                  <h3 className="category-title">Login</h3>
                  <div className="category-divider"></div>
                  <ul className="submenu-items">
                    <li>
                      <Link to="/login" className="submenu-item" onClick={closeMobileMenu}>
                        Masuk ke Akun Pendataan Umat
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Bagian baru: Mobile Search */}
          <div className="mobile-search-container">
            {isSearchExpandedMobile ? (
              <div className="mobile-search-expanded" ref={mobileSearchRef}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                      setIsSearchExpandedMobile(false);
                    }
                  }}
                />
                <FaTimes 
                  className="search-icon" 
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchExpandedMobile(false);
                  }}
                />
                {/* Hasil pencarian untuk mobile */}
                {searchQuery && (
                  <div className="mobile-search-results">
                    {filteredResults.length > 0 ? (
                      filteredResults.map(item => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="mobile-search-result-item"
                          onClick={() => {
                            setSearchQuery('');
                            setIsSearchExpandedMobile(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))
                    ) : (
                      <div className="mobile-no-results">No results found</div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button 
                className="mobile-search-toggle" 
                onClick={() => setIsSearchExpandedMobile(true)}
                aria-label="Search"
              >
                <FaSearch />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_regular;