import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './DataKeluarga.css';

const DataKeluarga = () => {
  const navigate = useNavigate();
  
  // Data keluarga khusus untuk user (Adrianus William Jensen family)
  const familyData = {
    kepalaKeluarga: {
      id: 1,
      nama: "Adrianus William Jensen",
      nik: "3471012008800001",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Yogyakarta",
      tanggalLahir: "20-06-1980",
      alamat: "Babarsari",
      nomorHp: "08123456789",
      statusPernikahan: "Sudah Menikah",
      pekerjaan: "Dokter",
      paroki: "xxxxx",
      statusDalamKeluarga: "Kepala Keluarga",
      baptis: "Sudah",
      komuni: "Sudah",
      krisma: "Sudah",
      nikah: "Sudah"
    },
    anggotaKeluarga: [
      {
        id: 2,
        nama: "Maria Theresia Jensen",
        nik: "3471015512850002",
        jenisKelamin: "Perempuan",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "15-12-1985",
        alamat: "Babarsari",
        nomorHp: "08123456790",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Guru",
        paroki: "xxxxx",
        statusDalamKeluarga: "Istri",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      {
        id: 3,
        nama: "Antonius William Jensen Jr",
        nik: "3471011005100003",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "10-05-2010",
        alamat: "Babarsari",
        nomorHp: "-",
        statusPernikahan: "Belum Menikah",
        pekerjaan: "Pelajar",
        paroki: "xxxxx",
        statusDalamKeluarga: "Anak",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Belum",
        nikah: "Belum"
      }
    ]
  };

  const [familyInfo, setFamilyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Search states - same as admin DataKeluarga
  const [searchTerm, setSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Popup states - hanya untuk hapus anggota keluarga (tidak ada hapus keluarga)
  const [showDeleteMemberPopup, setShowDeleteMemberPopup] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setFamilyInfo(familyData);
      setLoading(false);
    }, 500);
  }, []);

  // Handle search - same as admin
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

  const handleTambahAnggota = () => {
    navigate('/pendataan/kepalaKeluarga/data-keluarga/tambah');
  };

  const handleEditAnggota = (memberId) => {
    // Cek apakah ini kepala keluarga
    const allMembers = [familyInfo.kepalaKeluarga, ...familyInfo.anggotaKeluarga];
    const memberIndex = allMembers.findIndex(member => member.id === memberId);
    
    if (memberIndex === 0) {
      // Ini adalah kepala keluarga
      navigate('/pendataan/kepalaKeluarga/data-keluarga/edit');
    } else {
      // Ini adalah anggota keluarga
      navigate(`/pendataan/kepalaKeluarga/data-keluarga/edit/${memberId}`);
    }
  };

  // Handle delete anggota (tanpa hapus keluarga)
  const handleDeleteAnggota = (memberId) => {
    const member = familyInfo.anggotaKeluarga.find(m => m.id === memberId);
    if (member) {
      setMemberToDelete(member);
      setShowDeleteMemberPopup(true);
    }
  };

  // Delete member handlers
  const handleConfirmDeleteMember = () => {
    setTimeout(() => {
      setShowDeleteMemberPopup(false);
      setMemberToDelete(null);
      toast.success('Berhasil Menghapus Data Anggota Keluarga', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 500);
  };

  const handleCancelDeleteMember = () => {
    setShowDeleteMemberPopup(false);
    setMemberToDelete(null);
    toast.error('Batal Menghapus Data Anggota Keluarga', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (loading) {
    return (
      <div className="data-keluarga-user-loading">
        <div className="loading-spinner-user"></div>
        <p>Memuat data keluarga...</p>
      </div>
    );
  }

  if (!familyInfo) {
    return (
      <div className="data-keluarga-user-error">
        <h2>Data keluarga tidak ditemukan</h2>
      </div>
    );
  }

  // Combine kepala keluarga and anggota keluarga
  const allMembers = [familyInfo.kepalaKeluarga, ...familyInfo.anggotaKeluarga];

  // Filter members based on search term
  const filteredMembers = allMembers.filter(member => {
    if (searchTerm === '') return true;
    
    return Object.values(member).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  return (
    <div className="data-keluarga-user">
      <div className="data-keluarga-user-header">
        <h1>Data Keluarga</h1>
      </div>

      {/* Search and Action Card - Tanpa button Pindah Domisili dan Hapus Data Keluarga */}
      <div className="data-keluarga-user-search-filter-card">
        <div className="data-keluarga-user-search-section">
          <div className="data-keluarga-user-search-input-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={tempSearchTerm}
              onChange={handleTempSearchChange}
              onKeyPress={handleSearchKeyPress}
              className="data-keluarga-user-search-input"
            />
            <button className="data-keluarga-user-search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>

        {/* PERBAIKAN: Hanya button Tambah Anggota Keluarga untuk user */}
        <div className="data-keluarga-user-actions-section">
          <button className="data-keluarga-user-action-btn-tertiary" onClick={handleTambahAnggota}>
            Tambah Anggota Keluarga
          </button>
        </div>
      </div>

      {/* Table Card - Same structure as admin */}
      <div className="data-keluarga-user-table-card">
        <div className="data-keluarga-user-table-container">
          <table className="data-keluarga-user-table">
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
              {currentItems.map((member, index) => {
                const originalIndex = allMembers.findIndex(m => m.id === member.id);
                return (
                  <tr key={member.id} className={originalIndex === 0 ? 'kepala-keluarga-user' : ''}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>
                      {member.nama}
                      {originalIndex === 0 && <span className="kepala-keluarga-user-badge">Kepala Keluarga</span>}
                    </td>
                    <td>xxxxxxxxx</td>
                    <td>{member.tanggalLahir}</td>
                    <td>{member.alamat}</td>
                    <td>{member.nomorHp === '-' ? '08xxxxxxxxx' : '08xxxxxxxxx'}</td>
                    <td>{member.statusPernikahan}</td>
                    <td>{member.pekerjaan}</td>
                    <td>{member.paroki}</td>
                    <td>
                      <div className="data-keluarga-user-actions">
                        <button 
                          className="data-keluarga-user-action-btn edit-btn-user"
                          onClick={() => handleEditAnggota(member.id)}
                          title="Edit anggota keluarga"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        {originalIndex !== 0 && (
                          <button 
                            className="data-keluarga-user-action-btn delete-btn-user"
                            onClick={() => handleDeleteAnggota(member.id)}
                            title="Hapus anggota keluarga"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination - Same as admin */}
        <div className="data-keluarga-user-pagination-container">
          <div className="data-keluarga-user-pagination-info">
            Data Per Halaman - {itemsPerPage}
          </div>
          <div className="data-keluarga-user-pagination-controls">
            <button 
              className="data-keluarga-user-pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="data-keluarga-user-pagination-text">
              {indexOfFirstItem + 1} dari {filteredMembers.length}
            </span>
            <button 
              className="data-keluarga-user-pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Legend Section - Same as admin */}
        <div className="data-keluarga-user-legend-section">
          <h3>Keterangan:</h3>
          <div className="data-keluarga-user-legend-items">
            <div className="data-keluarga-user-legend-item">
              <div className="data-keluarga-user-legend-color-box kepala-keluarga-user-color"></div>
              <span>Kepala Keluarga</span>
            </div>
            <div className="data-keluarga-user-legend-item">
              <div className="data-keluarga-user-legend-color-box deceased-user-color"></div>
              <span>Umat Yang Sudah Meninggal</span>
            </div>
            <div className="data-keluarga-user-legend-item">
              <div className="data-keluarga-user-legend-icon-box edit-icon-user-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Edit Anggota Keluarga</span>
            </div>
            <div className="data-keluarga-user-legend-item">
              <div className="data-keluarga-user-legend-icon-box delete-icon-user-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Hapus Anggota Keluarga</span>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Member Confirmation Popup - Tanpa popup hapus keluarga */}
      {showDeleteMemberPopup && memberToDelete && (
        <div className="data-keluarga-user-popup-overlay">
          <div className="data-keluarga-user-popup-container">
            <div className="data-keluarga-user-popup-content">
              <h3 className="data-keluarga-user-popup-title">
                Apakah Anda Yakin Ingin Menghapus
              </h3>
              <p className="data-keluarga-user-popup-subtitle">
                Data Anggota Keluarga Ini ?
              </p>
              
              <div className="data-keluarga-user-popup-buttons">
                <button 
                  className="data-keluarga-user-popup-btn data-keluarga-user-popup-btn-cancel"
                  onClick={handleCancelDeleteMember}
                >
                  Tidak
                </button>
                <button 
                  className="data-keluarga-user-popup-btn data-keluarga-user-popup-btn-confirm"
                  onClick={handleConfirmDeleteMember}
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

export default DataKeluarga;