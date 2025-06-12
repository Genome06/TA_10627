import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MigrasiUmat.css';

const MigrasiUmat = () => {
  const navigate = useNavigate();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');
  // Changed filters to support arrays for multiple selection
  const [filters, setFilters] = useState({
    pekerjaan: [],
    paroki: [],
    statusPernikahan: [],
    statusKehidupan: []
  });
  const [tempFilters, setTempFilters] = useState({
    pekerjaan: [],
    paroki: [],
    statusPernikahan: [],
    statusKehidupan: []
  });
  const [openFilter, setOpenFilter] = useState(null);

  // Data umat - sama persis dengan DataUmat (15 data: 10 dari desain + 5 tambahan)
  const [dataUmat] = useState([
    {
      id: 1,
      nama: "Adrianus William Jensen",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "20-06-1980",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Dokter",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 2,
      nama: "Felisa Thanti Adl Kurniawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "21-06-2002",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Guru",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 3,
      nama: "Eduardo Camavinga",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "23-08-1990",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Pns",
      paroki: "xxxxx",
      statusKehidupan: "Sudah Meninggal" // Changed to deceased
    },
    {
      id: 4,
      nama: "Carvajal",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "23-06-2000",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Lurah",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 5,
      nama: "Richardo Kaka",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "25-12-2000",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Camat",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 6,
      nama: "Adrianus William Jensen",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "28-12-2001",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Pengacara",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 7,
      nama: "Edward Thomas Adl Kurniawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "28-02-2002",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Dokter",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 8,
      nama: "Eduardo Camavinga",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "21-06-2003",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Aktor",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 9,
      nama: "Carvajal",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "12-01-1991",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Pemain Bola",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 10,
      nama: "Richardo Kaka",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "11-02-2009",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Belum Bekerja",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal"
    },
    // 5 data tambahan
    {
      id: 11,
      nama: "Maria Santika Dewi",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "15-03-1985",
      alamat: "Pangkalan",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Wiraswasta",
      paroki: "Paroki Pangkalan",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 12,
      nama: "Antonius Budi Setiawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "22-11-1992",
      alamat: "Baciro",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Dokter",
      paroki: "Paroki Baciro",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 13,
      nama: "Theresia Wijaya",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "08-07-1988",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "PNS",
      paroki: "Paroki Babarsari",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 14,
      nama: "Fransiskus Aldi Pratama",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "30-04-1995",
      alamat: "Pangkalan",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Wiraswasta",
      paroki: "Paroki Pangkalan",
      statusKehidupan: "Belum Meninggal"
    },
    {
      id: 15,
      nama: "Yohanes Kurniawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "12-09-1990",
      alamat: "Baciro",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Guru",
      paroki: "Paroki Baciro",
      statusKehidupan: "Belum Meninggal"
    }
  ]);

  // Filter options - sama seperti DataUmat
  const filterOptions = {
    pekerjaan: ["Dokter", "PNS", "Wiraswasta", "Belum Bekerja", "Guru", "Lurah", "Camat", "Pengacara", "Aktor", "Pemain Bola"],
    paroki: ["Paroki Pangkalan", "Paroki Babarsari", "Paroki Baciro"],
    statusPernikahan: ["Sudah Menikah", "Belum Menikah"],
    statusKehidupan: ["Sudah Meninggal", "Belum Meninggal"]
  };

  // Updated filter and search logic for multiple selection - sama seperti DataUmat
  const filteredData = dataUmat.filter(item => {
    const matchesSearch = searchTerm === '' || 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesFilters = Object.entries(filters).every(([key, valueArray]) => {
      if (valueArray.length === 0) return true;
      
      if (key === 'pekerjaan') return valueArray.includes(item.pekerjaan);
      if (key === 'paroki') return valueArray.includes(item.paroki);
      if (key === 'statusPernikahan') return valueArray.includes(item.status);
      if (key === 'statusKehidupan') return valueArray.includes(item.statusKehidupan);
      
      return true;
    });

    return matchesSearch && matchesFilters;
  });

  // Pagination logic - sama seperti DataUmat
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Updated filter change handler for multiple selection - sama seperti DataUmat
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

  const handleMigrasiUmat = (id) => {
    // Navigasi ke halaman input migrasi umat dengan parameter ID
    console.log(`Migrasi umat dengan ID: ${id}`);
    navigate(`/pendataan/admin/migrasi-umat/input/${id}`);
  };
  
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

  // Get display text for filter buttons - sama seperti DataUmat
  const getFilterDisplayText = (filterType) => {
    const selectedItems = tempFilters[filterType] || [];
    if (selectedItems.length === 0) {
      return filterType.charAt(0).toUpperCase() + filterType.slice(1).replace(/([A-Z])/g, ' $1');
    } else if (selectedItems.length === 1) {
      return selectedItems[0];
    } else {
      return `${selectedItems.length} dipilih`;
    }
  };

  // Close filters when clicking outside - sama seperti DataUmat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.migrasi-umat-filter-dropdown')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="migrasi-umat">
      <div className="migrasi-umat-header">
        <h1>Migrasi Umat</h1>
      </div>

      {/* Search and Filter Card */}
      <div className="migrasi-umat-search-filter-card">
        <div className="migrasi-umat-search-section">
          <div className="migrasi-umat-search-input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={tempSearchTerm}
              onChange={handleTempSearchChange}
              className="migrasi-umat-search-input"
            />
            <button className="migrasi-umat-search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>

        <div className="migrasi-umat-filters-section">
          {/* Pekerjaan Filter */}
          <div className={`migrasi-umat-filter-dropdown ${openFilter === 'pekerjaan' ? 'active' : ''}`}>
            <button 
              className="migrasi-umat-filter-btn"
              onClick={() => handleFilterToggle('pekerjaan')}
            >
              <span className="filter-text">{getFilterDisplayText('pekerjaan')}</span>
              <span className="migrasi-umat-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'pekerjaan' && (
              <div className="migrasi-umat-filter-options">
                {filterOptions.pekerjaan.map(option => (
                  <label key={option} className="migrasi-umat-filter-option">
                    <input
                      type="checkbox"
                      checked={(tempFilters.pekerjaan || []).includes(option)}
                      onChange={() => handleTempFilterChange('pekerjaan', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Paroki Filter */}
          <div className={`migrasi-umat-filter-dropdown ${openFilter === 'paroki' ? 'active' : ''}`}>
            <button 
              className="migrasi-umat-filter-btn"
              onClick={() => handleFilterToggle('paroki')}
            >
              <span className="filter-text">{getFilterDisplayText('paroki')}</span>
              <span className="migrasi-umat-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'paroki' && (
              <div className="migrasi-umat-filter-options">
                {filterOptions.paroki.map(option => (
                  <label key={option} className="migrasi-umat-filter-option">
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

          {/* Status Pernikahan Filter */}
          <div className={`migrasi-umat-filter-dropdown ${openFilter === 'statusPernikahan' ? 'active' : ''}`}>
            <button 
              className="migrasi-umat-filter-btn"
              onClick={() => handleFilterToggle('statusPernikahan')}
            >
              <span className="filter-text">{getFilterDisplayText('statusPernikahan')}</span>
              <span className="migrasi-umat-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'statusPernikahan' && (
              <div className="migrasi-umat-filter-options">
                {filterOptions.statusPernikahan.map(option => (
                  <label key={option} className="migrasi-umat-filter-option">
                    <input
                      type="checkbox"
                      checked={(tempFilters.statusPernikahan || []).includes(option)}
                      onChange={() => handleTempFilterChange('statusPernikahan', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Status Kehidupan Filter */}
          <div className={`migrasi-umat-filter-dropdown ${openFilter === 'statusKehidupan' ? 'active' : ''}`}>
            <button 
              className="migrasi-umat-filter-btn"
              onClick={() => handleFilterToggle('statusKehidupan')}
            >
              <span className="filter-text">{getFilterDisplayText('statusKehidupan')}</span>
              <span className="migrasi-umat-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'statusKehidupan' && (
              <div className="migrasi-umat-filter-options">
                {filterOptions.statusKehidupan.map(option => (
                  <label key={option} className="migrasi-umat-filter-option">
                    <input
                      type="checkbox"
                      checked={(tempFilters.statusKehidupan || []).includes(option)}
                      onChange={() => handleTempFilterChange('statusKehidupan', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Tombol Apply Filter - posisi di pojok bawah kanan seperti tombol tambah data umat */}
        <button className="migrasi-umat-apply-filter-btn" onClick={handleApplyFilter}>
          Apply Filter
        </button>
      </div>

      {/* Table Card */}
      <div className="migrasi-umat-table-card">
        {/* Table Section */}
        <div className="migrasi-umat-table-container">
          <table className="migrasi-umat-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Nomor Baptis</th>
                <th>Tanggal Lahir</th>
                <th>Alamat</th>
                <th>Nomor Hp</th>
                <th>Status</th>
                <th>Pekerjaan</th>
                <th>Paroki</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id} className={item.statusKehidupan === 'Sudah Meninggal' ? 'deceased' : ''}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.nomorBaptis}</td>
                  <td>{item.tanggalLahir}</td>
                  <td>{item.alamat}</td>
                  <td>{item.nomorHp}</td>
                  <td>{item.status}</td>
                  <td>{item.pekerjaan}</td>
                  <td>{item.paroki}</td>
                  <td>
                    <button 
                      className="migrasi-umat-action-btn migrasi-umat-edit-btn"
                      onClick={() => handleMigrasiUmat(item.id)}
                      title="Migrasi Data Umat"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="migrasi-umat-pagination-container">
          <div className="migrasi-umat-pagination-info">
            Data Per Halaman - {itemsPerPage}
          </div>
          <div className="migrasi-umat-pagination-controls">
            <button 
              className="migrasi-umat-pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="migrasi-umat-pagination-text">
              {indexOfFirstItem + 1} dari {filteredData.length}
            </span>
            <button 
              className="migrasi-umat-pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Legend Section */}
        <div className="migrasi-umat-legend-section">
          <h3>Keterangan:</h3>
          <div className="migrasi-umat-legend-items">
            <div className="migrasi-umat-legend-item">
              <div className="migrasi-umat-legend-color-box deceased"></div>
              <span>Umat Yang Sudah Meninggal</span>
            </div>
            <div className="migrasi-umat-legend-item">
              <div className="migrasi-umat-legend-icon-box edit-icon-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Migrasi Data Umat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrasiUmat;