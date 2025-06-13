import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './TempatZiarah.css';

const TempatZiarah = () => {
  const navigate = useNavigate();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    paroki: []
  });
  const [tempFilters, setTempFilters] = useState({
    paroki: []
  });
  const [openFilter, setOpenFilter] = useState(null);

  // State untuk popup hapus
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [tempatZiarahToDelete, setTempatZiarahToDelete] = useState(null);

  // Data tempat ziarah dengan berbagai paroki
  const [dataTempatZiarah] = useState([
    {
      id: 1,
      nama: "Gua Maria",
      tanggalTerbentuk: "20-06-1980",
      alamat: "Jl. Babarsari No. 100, Yogyakarta",
      paroki: "Paroki Babarsari"
    },
    {
      id: 2,
      nama: "Museum Gereja",
      tanggalTerbentuk: "21-06-2002",
      alamat: "Jl. Malioboro No. 100, Yogyakarta",
      paroki: "Paroki Baciro"
    },
    {
      id: 3,
      nama: "Gereja Tua Santo Petrus",
      tanggalTerbentuk: "15-08-1975",
      alamat: "Jl. Kaliurang Km 5, Yogyakarta",
      paroki: "Paroki Pangkalan"
    },
    {
      id: 4,
      nama: "Kapel Santa Maria",
      tanggalTerbentuk: "10-12-1990",
      alamat: "Jl. Seturan Raya No. 25, Yogyakarta",
      paroki: "Paroki Babarsari"
    },
    {
      id: 5,
      nama: "Monumen Kristus Raja",
      tanggalTerbentuk: "25-03-1985",
      alamat: "Jl. Baciro Kidul No. 50, Yogyakarta",
      paroki: "Paroki Baciro"
    },
    {
      id: 6,
      nama: "Groto Lourdes",
      tanggalTerbentuk: "14-02-1992",
      alamat: "Jl. Pangkalan Raya No. 78, Yogyakarta",
      paroki: "Paroki Pangkalan"
    },
    {
      id: 7,
      nama: "Makam Keramat Santo Fransiskus",
      tanggalTerbentuk: "04-10-1988",
      alamat: "Jl. Babarsari Tengah No. 33, Yogyakarta",
      paroki: "Paroki Babarsari"
    },
    {
      id: 8,
      nama: "Kapel Adoration",
      tanggalTerbentuk: "22-11-1995",
      alamat: "Jl. Baciro Tengah No. 88, Yogyakarta",
      paroki: "Paroki Baciro"
    },
    {
      id: 9,
      nama: "Taman Doa Maria",
      tanggalTerbentuk: "30-04-1999",
      alamat: "Jl. Pangkalan Utara No. 12, Yogyakarta",
      paroki: "Paroki Pangkalan"
    },
    {
      id: 10,
      nama: "Salib Bukit",
      tanggalTerbentuk: "12-09-1983",
      alamat: "Jl. Babarsari Bukit No. 77, Yogyakarta",
      paroki: "Paroki Babarsari"
    }
  ]);

  // Filter options
  const filterOptions = {
    paroki: ["Paroki Babarsari", "Paroki Baciro", "Paroki Pangkalan"]
  };

  // Filter dan search logic
  const filteredData = dataTempatZiarah.filter(item => {
    const matchesSearch = searchTerm === '' || 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesFilters = Object.entries(filters).every(([key, valueArray]) => {
      if (valueArray.length === 0) return true;
      
      if (key === 'paroki') return valueArray.includes(item.paroki);
      
      return true;
    });

    return matchesSearch && matchesFilters;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Filter change handler
  const handleTempFilterChange = (filterType, value) => {
    setTempFilters(prev => {
      const currentArray = prev[filterType] || [];
      const isSelected = currentArray.includes(value);
      
      return {
        ...prev,
        [filterType]: isSelected 
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const handleApplyFilter = () => {
    setFilters(tempFilters);
    setSearchTerm(tempSearchTerm);
    setCurrentPage(1);
    setOpenFilter(null);
  };

  const handleSearchClick = () => {
    setSearchTerm(tempSearchTerm);
    setCurrentPage(1);
  };

  const handleFilterToggle = (filterType) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const handleTempSearchChange = (e) => {
    setTempSearchTerm(e.target.value);
  };

  // Handle search dengan Enter key
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  // Pagination handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Action handlers
  const handleTambahTempatZiarah = () => {
    navigate('/pendataan/admin/tempat-ziarah/tambah');
  };

  const handleEditTempatZiarah = (id) => {
    navigate(`/pendataan/admin/tempat-ziarah/edit/${id}`);
  };

  const handleDeleteTempatZiarah = (tempatZiarah) => {
    setTempatZiarahToDelete(tempatZiarah);
    setShowDeletePopup(true);
  };

  // Delete popup handlers
  const handleConfirmDelete = () => {
    setTimeout(() => {
      setShowDeletePopup(false);
      setTempatZiarahToDelete(null);
      toast.success('Berhasil menghapus data tempat ziarah!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 500);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
    setTempatZiarahToDelete(null);
    toast.error('Batal menghapus data tempat ziarah!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Get display text untuk filter buttons
  const getFilterDisplayText = (filterType) => {
    const selectedItems = tempFilters[filterType] || [];
    if (selectedItems.length === 0) {
      return filterType.charAt(0).toUpperCase() + filterType.slice(1);
    } else if (selectedItems.length === 1) {
      return selectedItems[0];
    } else {
      return `${selectedItems.length} dipilih`;
    }
  };

  // Close filters ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.tempat-ziarah-filter-dropdown')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="tempat-ziarah">
      <div className="tempat-ziarah-header">
        <h1>Daftar Tempat Ziarah</h1>
      </div>

      {/* Search and Filter Card */}
      <div className="tempat-ziarah-search-filter-card">
        <div className="tempat-ziarah-search-section">
          <div className="tempat-ziarah-search-input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={tempSearchTerm}
              onChange={handleTempSearchChange}
              onKeyPress={handleSearchKeyPress}
              className="tempat-ziarah-search-input"
            />
            <button className="tempat-ziarah-search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>

        <div className="tempat-ziarah-filters-section">
          <div className="tempat-ziarah-filter-controls">
            {/* Paroki Filter */}
            <div className={`tempat-ziarah-filter-dropdown ${openFilter === 'paroki' ? 'active' : ''}`}>
              <button 
                className="tempat-ziarah-filter-btn"
                onClick={() => handleFilterToggle('paroki')}
              >
                <span className="filter-text">{getFilterDisplayText('paroki')}</span>
                <span className="tempat-ziarah-dropdown-arrow">▼</span>
              </button>
              {openFilter === 'paroki' && (
                <div className="tempat-ziarah-filter-options">
                  {filterOptions.paroki.map(option => (
                    <label key={option} className="tempat-ziarah-filter-option">
                      <input
                        type="checkbox"
                        checked={(tempFilters.paroki || []).includes(option)}
                        onChange={() => handleTempFilterChange('paroki', option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button className="tempat-ziarah-apply-filter-btn" onClick={handleApplyFilter}>
              Apply Filter
            </button>
          </div>
          
          {/* Tombol Tambah Tempat Ziarah - sejajar dengan filter */}
          <button className="tempat-ziarah-add-data-btn" onClick={handleTambahTempatZiarah}>
            Tambah Tempat Ziarah
          </button>
        </div>
        
        {/* Tombol Tambah Tempat Ziarah */}
        
      </div>

      {/* Table Card */}
      <div className="tempat-ziarah-table-card">
        {/* Table Section */}
        <div className="tempat-ziarah-table-container">
          <table className="tempat-ziarah-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Tempat Ziarah</th>
                <th>Tanggal Terbentuk</th>
                <th>Alamat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.tanggalTerbentuk}</td>
                  <td>{item.alamat}</td>
                  <td>
                    <div className="tempat-ziarah-actions">
                      <button 
                        className="tempat-ziarah-action-btn edit-btn"
                        onClick={() => handleEditTempatZiarah(item.id)}
                        title="Edit tempat ziarah"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button 
                        className="tempat-ziarah-action-btn delete-btn"
                        onClick={() => handleDeleteTempatZiarah(item)}
                        title="Hapus tempat ziarah"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="tempat-ziarah-pagination-container">
          <div className="tempat-ziarah-pagination-info">
            Data Per Halaman - {itemsPerPage}
          </div>
          <div className="tempat-ziarah-pagination-controls">
            <button 
              className="tempat-ziarah-pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="tempat-ziarah-pagination-text">
              {indexOfFirstItem + 1} dari {filteredData.length}
            </span>
            <button 
              className="tempat-ziarah-pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Legend Section */}
        <div className="tempat-ziarah-legend-section">
          <h3>Keterangan:</h3>
          <div className="tempat-ziarah-legend-items">
            <div className="tempat-ziarah-legend-item">
              <div className="tempat-ziarah-legend-icon-box edit-icon-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Edit Data Tempat Ziarah</span>
            </div>
            <div className="tempat-ziarah-legend-item">
              <div className="tempat-ziarah-legend-icon-box delete-icon-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Hapus Data Tempat Ziarah</span>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Popup */}
      {showDeletePopup && tempatZiarahToDelete && (
        <div className="tempat-ziarah-popup-overlay">
          <div className="tempat-ziarah-popup-container">
            <div className="tempat-ziarah-popup-content">
              <h3 className="tempat-ziarah-popup-title">
                Apakah Anda Yakin Ingin Menghapus
              </h3>
              <p className="tempat-ziarah-popup-subtitle">
                Data Tempat Ziarah "{tempatZiarahToDelete.nama}" ?
              </p>
              
              <div className="tempat-ziarah-popup-buttons">
                <button 
                  className="tempat-ziarah-popup-btn tempat-ziarah-popup-btn-cancel"
                  onClick={handleCancelDelete}
                >
                  Tidak
                </button>
                <button 
                  className="tempat-ziarah-popup-btn tempat-ziarah-popup-btn-confirm"
                  onClick={handleConfirmDelete}
                >
                  Iya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TempatZiarah;