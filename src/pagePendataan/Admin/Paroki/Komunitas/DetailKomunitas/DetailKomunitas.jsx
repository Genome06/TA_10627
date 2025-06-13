import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './DetailKomunitas.css';

const DetailKomunitas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Data komunitas berdasarkan ID dari halaman sebelumnya
  const komunitasData = {
    1: { nama: "OMK", ketua: "Eduard" },
    2: { nama: "Lektor", ketua: "Rival" },
    3: { nama: "Pemazmur", ketua: "Edi" },
    4: { nama: "Paduan Suara", ketua: "Maria" },
    5: { nama: "Prodiakon", ketua: "Antonius" },
    6: { nama: "Misdinar", ketua: "Theresia" },
    7: { nama: "Karismatik", ketua: "Fransiskus" },
    8: { nama: "Wanita Katolik", ketua: "Yohanes" },
    9: { nama: "Pria Katolik", ketua: "Stefanus" },
    10: { nama: "Remaja Katolik", ketua: "Bernadette" }
  };

  // Data anggota komunitas - sama untuk semua komunitas sesuai figma
  const [anggotaKomunitas] = useState([
    {
      id: 1,
      nama: "Adrianus William Jensen",
      nik: "xxxxxxxxxx",
      tanggalLahir: "20-06-1980",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      pekerjaan: "Dokter",
      jabatan: "Ketua"
    },
    {
      id: 2,
      nama: "Edward Thomas Adi Kurniawan",
      nik: "xxxxxxxxxx",
      tanggalLahir: "21-06-2002",
      alamat: "Babarsari", 
      nomorHp: "08xxxxxxxxx",
      pekerjaan: "Guru",
      jabatan: "Anggota"
    },
    {
      id: 3,
      nama: "Eduardo Camavinga",
      nik: "xxxxxxxxxx",
      tanggalLahir: "23-08-1990",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      pekerjaan: "Pns",
      jabatan: "Sekretaris"
    },
    {
      id: 4,
      nama: "Carvajal",
      nik: "xxxxxxxxxx",
      tanggalLahir: "23-06-2000",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      pekerjaan: "Lurah",
      jabatan: "Anggota"
    }
  ]);

  const [komunitasInfo, setKomunitasInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    pekerjaan: [],
    jabatan: []
  });
  const [tempFilters, setTempFilters] = useState({
    pekerjaan: [],
    jabatan: []
  });
  const [openFilter, setOpenFilter] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Popup states
  const [showDeleteKomunitasPopup, setShowDeleteKomunitasPopup] = useState(false);
  const [showDeleteAnggotaPopup, setShowDeleteAnggotaPopup] = useState(false);
  const [anggotaToDelete, setAnggotaToDelete] = useState(null);

  // Filter options
  const filterOptions = {
    pekerjaan: ["Dokter", "Guru", "Pns", "Lurah"],
    jabatan: ["Ketua", "Sekretaris", "Anggota"]
  };

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const komunitas = komunitasData[id] || komunitasData[1];
      setKomunitasInfo(komunitas);
      setLoading(false);
    }, 500);
  }, [id]);

  // Search handler
  const handleTempSearchChange = (e) => {
    setTempSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(tempSearchTerm);
    setCurrentPage(1);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  // Filter handlers
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

  const handleFilterToggle = (filterType) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

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

  // Filter and search logic
  const filteredAnggota = anggotaKomunitas.filter(anggota => {
    const matchesSearch = searchTerm === '' || 
      Object.values(anggota).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesFilters = Object.entries(filters).every(([key, valueArray]) => {
      if (valueArray.length === 0) return true;
      return valueArray.includes(anggota[key]);
    });

    return matchesSearch && matchesFilters;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAnggota.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAnggota.length / itemsPerPage);

  // Pagination handlers
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
  const handleEditKomunitas = () => {
    navigate(`/pendataan/admin/komunitas-omk/edit/${id}`);
  };

  const handleTambahAnggotaKomunitas = () => {
    navigate(`/pendataan/admin/komunitas-omk/detail/${id}/tambah-anggota`);
  };

  const handleEditAnggota = (anggotaId) => {
    navigate(`/pendataan/admin/komunitas-omk/detail/${id}/edit-anggota/${anggotaId}`);
  };

  // Show delete komunitas popup
  const handleShowDeleteKomunitasPopup = () => {
    setShowDeleteKomunitasPopup(true);
  };

  // Show delete anggota popup
  const handleDeleteAnggota = (anggota) => {
    setAnggotaToDelete(anggota);
    setShowDeleteAnggotaPopup(true);
  };

  // Delete komunitas handlers
  const handleConfirmDeleteKomunitas = () => {
    setTimeout(() => {
      setShowDeleteKomunitasPopup(false);
      toast.success('Berhasil menghapus data komunitas!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      setTimeout(() => {
        navigate('/pendataan/admin/komunitas-omk');
      }, 1000);
    }, 500);
  };

  const handleCancelDeleteKomunitas = () => {
    setShowDeleteKomunitasPopup(false);
    toast.error('Batal menghapus data komunitas!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Delete anggota handlers
  const handleConfirmDeleteAnggota = () => {
    setTimeout(() => {
      setShowDeleteAnggotaPopup(false);
      setAnggotaToDelete(null);
      toast.success('Berhasil Menghapus Data Anggota Komunitas', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 500);
  };

  const handleCancelDeleteAnggota = () => {
    setShowDeleteAnggotaPopup(false);
    setAnggotaToDelete(null);
    toast.error('Batal Menghapus Data Anggota Komunitas', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Close filters when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.detail-komunitas-filter-dropdown')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) {
    return (
      <div className="detail-komunitas-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data komunitas...</p>
      </div>
    );
  }

  if (!komunitasInfo) {
    return (
      <div className="detail-komunitas-error">
        <h2>Data komunitas tidak ditemukan</h2>
        <button onClick={() => navigate('/pendataan/admin/komunitas-omk')} className="detail-komunitas-back-btn">
          Kembali ke Komunitas
        </button>
      </div>
    );
  }

  return (
    <div className="detail-komunitas">
      <div className="detail-komunitas-header">
        <h1>Komunitas {komunitasInfo.nama}</h1>
      </div>

      {/* Search and Filter Card */}
      <div className="detail-komunitas-search-filter-card">
        <div className="detail-komunitas-search-section">
          <div className="detail-komunitas-search-input-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={tempSearchTerm}
              onChange={handleTempSearchChange}
              onKeyPress={handleSearchKeyPress}
              className="detail-komunitas-search-input"
            />
            <button className="detail-komunitas-search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>

        <div className="detail-komunitas-filters-section">
          <div className="detail-komunitas-filter-controls">
            {/* Pekerjaan Filter */}
            <div className={`detail-komunitas-filter-dropdown ${openFilter === 'pekerjaan' ? 'active' : ''}`}>
              <button 
                className="detail-komunitas-filter-btn"
                onClick={() => handleFilterToggle('pekerjaan')}
              >
                <span className="filter-text">{getFilterDisplayText('pekerjaan')}</span>
                <span className="detail-komunitas-dropdown-arrow">▼</span>
              </button>
              {openFilter === 'pekerjaan' && (
                <div className="detail-komunitas-filter-options">
                  {filterOptions.pekerjaan.map(option => (
                    <label key={option} className="detail-komunitas-filter-option">
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

            {/* Jabatan Filter */}
            <div className={`detail-komunitas-filter-dropdown ${openFilter === 'jabatan' ? 'active' : ''}`}>
              <button 
                className="detail-komunitas-filter-btn"
                onClick={() => handleFilterToggle('jabatan')}
              >
                <span className="filter-text">{getFilterDisplayText('jabatan')}</span>
                <span className="detail-komunitas-dropdown-arrow">▼</span>
              </button>
              {openFilter === 'jabatan' && (
                <div className="detail-komunitas-filter-options">
                  {filterOptions.jabatan.map(option => (
                    <label key={option} className="detail-komunitas-filter-option">
                      <input
                        type="checkbox"
                        checked={(tempFilters.jabatan || []).includes(option)}
                        onChange={() => handleTempFilterChange('jabatan', option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button className="detail-komunitas-apply-filter-btn" onClick={handleApplyFilter}>
              Apply Filter
            </button>
          </div>
        </div>

        <div className="detail-komunitas-actions-section">
          <button className="detail-komunitas-action-btn-primary" onClick={handleEditKomunitas}>
            Edit Komunitas
          </button>
          <button className="detail-komunitas-action-btn-secondary" onClick={handleShowDeleteKomunitasPopup}>
            Hapus Komunitas
          </button>
          <button className="detail-komunitas-action-btn-tertiary" onClick={handleTambahAnggotaKomunitas}>
            Tambah Anggota Komunitas
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="detail-komunitas-table-card">
        <div className="detail-komunitas-table-container">
          <table className="detail-komunitas-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>NIK</th>
                <th>Tanggal Lahir</th>
                <th>Alamat</th>
                <th>Nomor Hp</th>
                <th>Pekerjaan</th>
                <th>Jabatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((anggota, index) => (
                <tr key={anggota.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{anggota.nama}</td>
                  <td>{anggota.nik}</td>
                  <td>{anggota.tanggalLahir}</td>
                  <td>{anggota.alamat}</td>
                  <td>{anggota.nomorHp}</td>
                  <td>{anggota.pekerjaan}</td>
                  <td>{anggota.jabatan}</td>
                  <td>
                    <div className="detail-komunitas-actions">
                      <button 
                        className="detail-komunitas-action-btn edit-btn"
                        onClick={() => handleEditAnggota(anggota.id)}
                        title="Edit data anggota"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button 
                        className="detail-komunitas-action-btn delete-btn"
                        onClick={() => handleDeleteAnggota(anggota)}
                        title="Hapus data anggota"
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

        {/* Pagination */}
        <div className="detail-komunitas-pagination-container">
          <div className="detail-komunitas-pagination-info">
            Data Per Halaman - {itemsPerPage}
          </div>
          <div className="detail-komunitas-pagination-controls">
            <button 
              className="detail-komunitas-pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="detail-komunitas-pagination-text">
              {indexOfFirstItem + 1} dari {filteredAnggota.length}
            </span>
            <button 
              className="detail-komunitas-pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Legend Section */}
        <div className="detail-komunitas-legend-section">
          <h3>Keterangan:</h3>
          <div className="detail-komunitas-legend-items">
            <div className="detail-komunitas-legend-item">
              <div className="detail-komunitas-legend-icon-box edit-icon-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Edit Data Anggota</span>
            </div>
            <div className="detail-komunitas-legend-item">
              <div className="detail-komunitas-legend-icon-box delete-icon-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Hapus Data Anggota</span>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Komunitas Popup */}
      {showDeleteKomunitasPopup && (
        <div className="detail-komunitas-popup-overlay">
          <div className="detail-komunitas-popup-container">
            <div className="detail-komunitas-popup-content">
              <h3 className="detail-komunitas-popup-title">
                Apakah Anda Yakin Ingin Menghapus
              </h3>
              <p className="detail-komunitas-popup-subtitle">
                Data Komunitas Ini ?
              </p>
              
              <div className="detail-komunitas-popup-buttons">
                <button 
                  className="detail-komunitas-popup-btn detail-komunitas-popup-btn-cancel"
                  onClick={handleCancelDeleteKomunitas}
                >
                  Tidak
                </button>
                <button 
                  className="detail-komunitas-popup-btn detail-komunitas-popup-btn-confirm"
                  onClick={handleConfirmDeleteKomunitas}
                >
                  Iya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Anggota Popup */}
      {showDeleteAnggotaPopup && anggotaToDelete && (
        <div className="detail-komunitas-popup-overlay">
          <div className="detail-komunitas-popup-container">
            <div className="detail-komunitas-popup-content">
              <h3 className="detail-komunitas-popup-title">
                Apakah Anda Yakin Ingin Menghapus
              </h3>
              <p className="detail-komunitas-popup-subtitle">
                Data Anggota Komunitas Ini ?
              </p>
              
              <div className="detail-komunitas-popup-buttons">
                <button 
                  className="detail-komunitas-popup-btn detail-komunitas-popup-btn-cancel"
                  onClick={handleCancelDeleteAnggota}
                >
                  Tidak
                </button>
                <button 
                  className="detail-komunitas-popup-btn detail-komunitas-popup-btn-confirm"
                  onClick={handleConfirmDeleteAnggota}
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

export default DetailKomunitas;