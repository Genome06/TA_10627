import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './DataKeluarga.css';

const DataKeluarga = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Data keluarga dengan 5 kepala keluarga dan anggota keluarganya
  const familyData = {
    1: {
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
    },
    2: {
      kepalaKeluarga: {
        id: 4,
        nama: "Eduardo Camavinga",
        nik: "3471012308900004",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "23-08-1990",
        alamat: "Babarsari",
        nomorHp: "08234567891",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Pns",
        paroki: "xxxxx",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      anggotaKeluarga: [
        {
          id: 5,
          nama: "Felisa Thanti Adl Kurniawan",
          nik: "3471016102920005",
          jenisKelamin: "Perempuan",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "21-06-2002",
          alamat: "Babarsari",
          nomorHp: "08234567892",
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
          id: 6,
          nama: "Gabriel Camavinga",
          nik: "3471011203150006",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "12-03-2015",
          alamat: "Babarsari",
          nomorHp: "-",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Belum Bekerja",
          paroki: "xxxxx",
          statusDalamKeluarga: "Anak",
          baptis: "Sudah",
          komuni: "Belum",
          krisma: "Belum",
          nikah: "Belum"
        }
      ]
    },
    3: {
      kepalaKeluarga: {
        id: 7,
        nama: "Carvajal",
        nik: "3471012306000007",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "23-06-2000",
        alamat: "Babarsari",
        nomorHp: "08345678903",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Lurah",
        paroki: "xxxxx",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      anggotaKeluarga: [
        {
          id: 8,
          nama: "Theresia Wijaya Carvajal",
          nik: "3471015507880008",
          jenisKelamin: "Perempuan",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "08-07-1988",
          alamat: "Babarsari",
          nomorHp: "08345678904",
          statusPernikahan: "Sudah Menikah",
          pekerjaan: "PNS",
          paroki: "xxxxx",
          statusDalamKeluarga: "Istri",
          baptis: "Sudah",
          komuni: "Sudah",
          krisma: "Sudah",
          nikah: "Sudah"
        },
        {
          id: 9,
          nama: "Rafael Carvajal",
          nik: "3471011008220009",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "10-08-2022",
          alamat: "Babarsari",
          nomorHp: "-",
          statusPernikahan: "Belum Meninggal",
          pekerjaan: "Belum Bekerja",
          paroki: "xxxxx",
          statusDalamKeluarga: "Anak",
          baptis: "Sudah",
          komuni: "Belum",
          krisma: "Belum",
          nikah: "Belum"
        }
      ]
    },
    4: {
      kepalaKeluarga: {
        id: 10,
        nama: "Richardo Kaka",
        nik: "3471012512000010",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "25-12-2000",
        alamat: "Babarsari",
        nomorHp: "08456789012",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Camat",
        paroki: "xxxxx",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      anggotaKeluarga: [
        {
          id: 11,
          nama: "Maria Santika Dewi Kaka",
          nik: "3471015503850011",
          jenisKelamin: "Perempuan",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "15-03-1985",
          alamat: "Babarsari",
          nomorHp: "08456789013",
          statusPernikahan: "Sudah Menikah",
          pekerjaan: "Wiraswasta",
          paroki: "xxxxx",
          statusDalamKeluarga: "Istri",
          baptis: "Sudah",
          komuni: "Sudah",
          krisma: "Sudah",
          nikah: "Sudah"
        },
        {
          id: 12,
          nama: "Cristiano Kaka",
          nik: "3471011807180012",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "18-07-2018",
          alamat: "Babarsari",
          nomorHp: "-",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Belum Bekerja",
          paroki: "xxxxx",
          statusDalamKeluarga: "Anak",
          baptis: "Sudah",
          komuni: "Belum",
          krisma: "Belum",
          nikah: "Belum"
        }
      ]
    },
    5: {
      kepalaKeluarga: {
        id: 13,
        nama: "Antonius Budi Setiawan",
        nik: "3471012211920013",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "22-11-1992",
        alamat: "Babarsari",
        nomorHp: "08567890123",
        statusPernikahan: "Belum Menikah",
        pekerjaan: "Dokter",
        paroki: "xxxxx",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Belum"
      },
      anggotaKeluarga: [
        {
          id: 14,
          nama: "Yohanes Kurniawan Setiawan",
          nik: "3471011209950014",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "12-09-1995",
          alamat: "Babarsari",
          nomorHp: "08567890124",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Guru",
          paroki: "xxxxx",
          statusDalamKeluarga: "Adik",
          baptis: "Sudah",
          komuni: "Sudah",
          krisma: "Sudah",
          nikah: "Belum"
        },
        {
          id: 15,
          nama: "Fransiskus Aldi Pratama Setiawan",
          nik: "3471013004970015",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "30-04-1997",
          alamat: "Babarsari",
          nomorHp: "08567890125",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Wiraswasta",
          paroki: "xxxxx",
          statusDalamKeluarga: "Adik",
          baptis: "Sudah",
          komuni: "Sudah",
          krisma: "Sudah",
          nikah: "Belum"
        }
      ]
    }
  };

  const [familyInfo, setFamilyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Search states - same as DataUmat
  const [searchTerm, setSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');

  // Add pagination states like DataUmat
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Add popup states - untuk hapus data keluarga dan hapus anggota keluarga
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDeleteMemberPopup, setShowDeleteMemberPopup] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const family = familyData[id] || familyData[1];
      setFamilyInfo(family);
      setLoading(false);
    }, 500);
  }, [id]);

  // Handle search like DataUmat
  const handleTempSearchChange = (e) => {
    setTempSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(tempSearchTerm);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle Enter key press for search
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  // Add pagination handlers like DataUmat
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

  const handleBack = () => {
    navigate('/pendataan/admin/data-umat');
  };

  const handleTambahAnggota = () => {
    navigate(`/pendataan/admin/data-keluarga/${id}/tambah`);
  };

  const handleEditAnggota = (memberId) => {
    // Cek apakah ini kepala keluarga (id pertama dalam array allMembers)
    const allMembers = [familyInfo.kepalaKeluarga, ...familyInfo.anggotaKeluarga];
    const memberIndex = allMembers.findIndex(member => member.id === memberId);
    
    if (memberIndex === 0) {
      // Ini adalah kepala keluarga
      navigate(`/pendataan/admin/data-keluarga/${id}/edit`);
    } else {
      // Ini adalah anggota keluarga
      navigate(`/pendataan/admin/data-keluarga/${id}/edit/${memberId}`);
    }
  };

  // Updated handleDeleteAnggota untuk show popup
  const handleDeleteAnggota = (memberId) => {
    const member = familyInfo.anggotaKeluarga.find(m => m.id === memberId);
    if (member) {
      setMemberToDelete(member);
      setShowDeleteMemberPopup(true);
    }
  };

  // Handle delete family popup
  const handleShowDeletePopup = () => {
    setShowDeletePopup(true);
  };

  const handleCloseDeletePopup = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDeleteFamily = () => {
    // Simulate delete process
    setTimeout(() => {
      setShowDeletePopup(false);
      toast.success('Berhasil menghapus data keluarga!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Navigate back to DataUmat after a short delay
      setTimeout(() => {
        navigate('/pendataan/admin/data-umat');
      }, 1000);
    }, 500);
  };

  const handleCancelDeleteFamily = () => {
    setShowDeletePopup(false);
    toast.error('Batal menghapus data keluarga!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // New handlers untuk delete member popup
  const handleConfirmDeleteMember = () => {
    // Simulate delete process
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
      
      // Optional: Update familyInfo state to remove deleted member
      // setFamilyInfo(prevState => ({
      //   ...prevState,
      //   anggotaKeluarga: prevState.anggotaKeluarga.filter(member => member.id !== memberToDelete.id)
      // }));
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

  const handlePindahDomisili = () => {
    navigate(`/pendataan/admin/data-keluarga/${id}/pindah-domisili`);
  };

  if (loading) {
    return (
      <div className="data-keluarga-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data keluarga...</p>
      </div>
    );
  }

  if (!familyInfo) {
    return (
      <div className="data-keluarga-error">
        <h2>Data keluarga tidak ditemukan</h2>
        <button onClick={handleBack} className="data-keluarga-back-btn">
          Kembali ke Data Umat
        </button>
      </div>
    );
  }

  // Combine kepala keluarga and anggota keluarga
  const allMembers = [familyInfo.kepalaKeluarga, ...familyInfo.anggotaKeluarga];

  // Filter members based on search term - same logic as DataUmat
  const filteredMembers = allMembers.filter(member => {
    if (searchTerm === '') return true;
    
    return Object.values(member).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Add pagination logic like DataUmat
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  return (
    <div className="data-keluarga">
      <div className="data-keluarga-header">
        <h1>Data Keluarga</h1>
      </div>

      {/* Search and Action Card - Same structure as DataUmat */}
      <div className="data-keluarga-search-filter-card">
        <div className="data-keluarga-search-section">
          <div className="data-keluarga-search-input-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={tempSearchTerm}
              onChange={handleTempSearchChange}
              onKeyPress={handleSearchKeyPress}
              className="data-keluarga-search-input"
            />
            <button className="data-keluarga-search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>

        <div className="data-keluarga-actions-section">
          <button className="data-keluarga-action-btn-primary" onClick={handlePindahDomisili}>
            Pindah Domisili Keuskupan
          </button>
          <button className="data-keluarga-action-btn-secondary" onClick={handleShowDeletePopup}>
            Hapus Data Keluarga
          </button>
          <button className="data-keluarga-action-btn-tertiary" onClick={handleTambahAnggota}>
            Tambah Anggota Keluarga
          </button>
        </div>
      </div>

      {/* Table Card - Same structure as DataUmat */}
      <div className="data-keluarga-table-card">
        <div className="data-keluarga-table-container">
          <table className="data-keluarga-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Nomor Baptis </th>
                <th>Tanggal Lahir </th>
                <th>Alamat</th>
                <th>Nomor Hp </th>
                <th>Status</th>
                <th>Pekerjaan </th>
                <th>Paroki</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((member, index) => {
                // Find original index for proper numbering and kepala keluarga detection
                const originalIndex = allMembers.findIndex(m => m.id === member.id);
                return (
                  <tr key={member.id} className={originalIndex === 0 ? 'kepala-keluarga' : ''}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>
                      {member.nama}
                      {originalIndex === 0 && <span className="kepala-keluarga-badge">Kepala Keluarga</span>}
                    </td>
                    <td>xxxxxxxxx</td>
                    <td>{member.tanggalLahir}</td>
                    <td>{member.alamat}</td>
                    <td>{member.nomorHp === '-' ? '08xxxxxxxxx' : '08xxxxxxxxx'}</td>
                    <td>{member.statusPernikahan}</td>
                    <td>{member.pekerjaan}</td>
                    <td>{member.paroki}</td>
                    <td>
                      <div className="data-keluarga-actions">
                        <button 
                          className="data-keluarga-action-btn edit-btn"
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
                            className="data-keluarga-action-btn delete-btn"
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

        {/* Pagination - Same as DataUmat with navigation buttons */}
        <div className="data-keluarga-pagination-container">
          <div className="data-keluarga-pagination-info">
            Data Per Halaman - {itemsPerPage}
          </div>
          <div className="data-keluarga-pagination-controls">
            <button 
              className="data-keluarga-pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="data-keluarga-pagination-text">
              {indexOfFirstItem + 1} dari {filteredMembers.length}
            </span>
            <button 
              className="data-keluarga-pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Legend Section */}
        <div className="data-keluarga-legend-section">
          <h3>Keterangan:</h3>
          <div className="data-keluarga-legend-items">
            <div className="data-keluarga-legend-item">
              <div className="data-keluarga-legend-color-box kepala-keluarga-color"></div>
              <span>Kepala Keluarga</span>
            </div>
            <div className="data-keluarga-legend-item">
              <div className="data-keluarga-legend-color-box deceased-color"></div>
              <span>Umat Yang Sudah Meninggal</span>
            </div>
            <div className="data-keluarga-legend-item">
              <div className="data-keluarga-legend-icon-box edit-icon-legend">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Edit Anggota Keluarga</span>
            </div>
            <div className="data-keluarga-legend-item">
              <div className="data-keluarga-legend-icon-box delete-icon-legend">
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

      {/* Delete Family Confirmation Popup */}
      {showDeletePopup && (
        <div className="data-keluarga-popup-overlay">
          <div className="data-keluarga-popup-container">
            <div className="data-keluarga-popup-content">
              <h3 className="data-keluarga-popup-title">
                Apakah Anda Yakin Ingin Menghapus
              </h3>
              <p className="data-keluarga-popup-subtitle">
                Data Keluarga Ini ?
              </p>
              
              <div className="data-keluarga-popup-buttons">
                <button 
                  className="data-keluarga-popup-btn data-keluarga-popup-btn-cancel"
                  onClick={handleCancelDeleteFamily}
                >
                  Tidak
                </button>
                <button 
                  className="data-keluarga-popup-btn data-keluarga-popup-btn-confirm"
                  onClick={handleConfirmDeleteFamily}
                >
                  Iya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Member Confirmation Popup */}
      {showDeleteMemberPopup && memberToDelete && (
        <div className="data-keluarga-popup-overlay">
          <div className="data-keluarga-popup-container">
            <div className="data-keluarga-popup-content">
              <h3 className="data-keluarga-popup-title">
                Apakah Anda Yakin Ingin Menghapus
              </h3>
              <p className="data-keluarga-popup-subtitle">
                Data Anggota Keluarga Ini ?
              </p>
              
              <div className="data-keluarga-popup-buttons">
                <button 
                  className="data-keluarga-popup-btn data-keluarga-popup-btn-cancel"
                  onClick={handleCancelDeleteMember}
                >
                  Tidak
                </button>
                <button 
                  className="data-keluarga-popup-btn data-keluarga-popup-btn-confirm"
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