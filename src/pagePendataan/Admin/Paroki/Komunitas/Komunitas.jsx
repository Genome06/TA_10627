import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Komunitas.css';

const Komunitas = () => {
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

  // Data komunitas dengan berbagai paroki
  const [dataKomunitas] = useState([
    {
      id: 1,
      nama: "OMK",
      ketua: "Eduard",
      tanggalTerbentuk: "20-06-1980",
      jumlahAnggota: 100,
      paroki: "Paroki Babarsari"
    },
    {
      id: 2,
      nama: "Lektor",
      ketua: "Rival",
      tanggalTerbentuk: "21-06-2002",
      jumlahAnggota: 100,
      paroki: "Paroki Baciro"
    },
    {
      id: 3,
      nama: "Pemazmur",
      ketua: "Edi",
      tanggalTerbentuk: "23-08-1990",
      jumlahAnggota: 50,
      paroki: "Paroki Pangkalan"
    },
    {
      id: 4,
      nama: "Paduan Suara",
      ketua: "Maria",
      tanggalTerbentuk: "15-03-1985",
      jumlahAnggota: 75,
      paroki: "Paroki Babarsari"
    },
    {
      id: 5,
      nama: "Prodiakon",
      ketua: "Antonius",
      tanggalTerbentuk: "10-12-1992",
      jumlahAnggota: 30,
      paroki: "Paroki Baciro"
    },
    {
      id: 6,
      nama: "Misdinar",
      ketua: "Theresia",
      tanggalTerbentuk: "22-11-1995",
      jumlahAnggota: 60,
      paroki: "Paroki Pangkalan"
    },
    {
      id: 7,
      nama: "Karismatik",
      ketua: "Fransiskus",
      tanggalTerbentuk: "04-10-1988",
      jumlahAnggota: 120,
      paroki: "Paroki Babarsari"
    },
    {
      id: 8,
      nama: "Wanita Katolik",
      ketua: "Yohanes",
      tanggalTerbentuk: "30-04-1999",
      jumlahAnggota: 85,
      paroki: "Paroki Baciro"
    },
    {
      id: 9,
      nama: "Pria Katolik",
      ketua: "Stefanus",
      tanggalTerbentuk: "12-09-1983",
      jumlahAnggota: 95,
      paroki: "Paroki Pangkalan"
    },
    {
      id: 10,
      nama: "Remaja Katolik",
      ketua: "Bernadette",
      tanggalTerbentuk: "18-07-1997",
      jumlahAnggota: 110,
      paroki: "Paroki Babarsari"
    }
  ]);

  // Filter options
  const filterOptions = {
    paroki: ["Paroki Babarsari", "Paroki Baciro", "Paroki Pangkalan"]
  };

  // Filter dan search logic
  const filteredData = dataKomunitas.filter(item => {
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
  const handleTambahKomunitas = () => {
    navigate('/pendataan/admin/komunitas-omk/tambah');
  };

  const handleViewDetailKomunitas = (id) => {
    navigate(`/pendataan/admin/komunitas-omk/detail/${id}`);
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
      if (!event.target.closest('.komunitas-filter-dropdown')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="komunitas">
      <div className="komunitas-header">
        <h1>Daftar Komunitas dan OMK</h1>
      </div>

      {/* Search and Filter Card */}
      <div className="komunitas-search-filter-card">
        <div className="komunitas-search-section">
          <div className="komunitas-search-input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={tempSearchTerm}
              onChange={handleTempSearchChange}
              onKeyPress={handleSearchKeyPress}
              className="komunitas-search-input"
            />
            <button className="komunitas-search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>

        <div className="komunitas-filters-section">
          <div className="komunitas-filter-controls">
            {/* Paroki Filter */}
            <div className={`komunitas-filter-dropdown ${openFilter === 'paroki' ? 'active' : ''}`}>
              <button 
                className="komunitas-filter-btn"
                onClick={() => handleFilterToggle('paroki')}
              >
                <span className="filter-text">{getFilterDisplayText('paroki')}</span>
                <span className="komunitas-dropdown-arrow">▼</span>
              </button>
              {openFilter === 'paroki' && (
                <div className="komunitas-filter-options">
                  {filterOptions.paroki.map(option => (
                    <label key={option} className="komunitas-filter-option">
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

            <button className="komunitas-apply-filter-btn" onClick={handleApplyFilter}>
              Apply Filter
            </button>
          </div>
          
          {/* Tombol Tambah Komunitas - sejajar dengan filter */}
          <button className="komunitas-add-data-btn" onClick={handleTambahKomunitas}>
            Tambah Komunitas
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="komunitas-table-card">
        {/* Table Section */}
        <div className="komunitas-table-container">
          <table className="komunitas-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Komunitas / OMK</th>
                <th>Ketua</th>
                <th>Tanggal Terbentuk</th>
                <th>Jumlah Anggota</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.ketua}</td>
                  <td>{item.tanggalTerbentuk}</td>
                  <td>{item.jumlahAnggota}</td>
                  <td>
                    <div className="komunitas-actions">
                      <button 
                        className="komunitas-action-btn view-btn"
                        onClick={() => handleViewDetailKomunitas(item.id)}
                        title="Lihat detail komunitas"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            fill="#F6AD55"
                          />
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
        <div className="komunitas-pagination-container">
          <div className="komunitas-pagination-info">
            Data Per Halaman - {itemsPerPage}
          </div>
          <div className="komunitas-pagination-controls">
            <button 
              className="komunitas-pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="komunitas-pagination-text">
              {indexOfFirstItem + 1} dari {filteredData.length}
            </span>
            <button 
              className="komunitas-pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Legend Section */}
        <div className="komunitas-legend-section">
          <h3>Keterangan:</h3>
          <div className="komunitas-legend-items">
            <div className="komunitas-legend-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="komunitas-legend-icon"
              >
                <path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                  fill="#F6AD55"
                />
              </svg>
              <span>Klik untuk melihat detail komunitas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komunitas;