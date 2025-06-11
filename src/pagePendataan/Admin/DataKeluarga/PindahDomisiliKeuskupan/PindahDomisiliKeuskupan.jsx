import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './PindahDomisiliKeuskupan.css';

const PindahDomisiliKeuskupan = () => {
  const { id } = useParams(); // Get family ID from URL
  const navigate = useNavigate();
  
  // Data keluarga yang sama dengan DataKeluarga.jsx
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
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "1234567890123456",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      anggotaKeluarga: [
        // ... data anggota keluarga
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
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "2345678901234567",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      anggotaKeluarga: [
        // ... data anggota keluarga
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
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "3456789012345678",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      anggotaKeluarga: [
        // ... data anggota keluarga
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
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "4567890123456789",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Sudah"
      },
      anggotaKeluarga: [
        // ... data anggota keluarga
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
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "5678901234567890",
        statusDalamKeluarga: "Kepala Keluarga",
        baptis: "Sudah",
        komuni: "Sudah",
        krisma: "Sudah",
        nikah: "Belum"
      },
      anggotaKeluarga: [
        // ... data anggota keluarga
      ]
    }
  };
  
  // Form state
  const [formData, setFormData] = useState({
    // Data Umat (Read Only) - akan diisi dari kepala keluarga
    namaUmat: '',
    nomorKK: '',
    alamat: '',
    paroki: '',
    lingkungan: '',
    // Input Data Migrasi Umat
    keuskupan: '',
    alamatBaru: '',
    parokiBaru: '',
    lingkunganBaru: '',
    tanggalPindahKeuskupan: ''
  });

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [errors, setErrors] = useState({});

  // Dropdown options
  const dropdownOptions = {
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
    lingkungan: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan'],
    keuskupan: ['Keuskupan A', 'Keuskupan B', 'Keuskupan C', 'Keuskupan D'],
    parokiBaru: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
    lingkunganBaru: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan']
  };

  // Load existing family data
  useEffect(() => {
    loadFamilyData();
  }, [id]);

  const loadFamilyData = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const family = familyData[id] || familyData[1];
      const kepalaKeluarga = family.kepalaKeluarga;
      
      // Set data dari kepala keluarga ke form read-only fields
      const existingFamilyData = {
        namaUmat: kepalaKeluarga.nama,
        nomorKK: kepalaKeluarga.nomorKK,
        alamat: `Jl. ${kepalaKeluarga.alamat} No. 123, Yogyakarta`, // Format alamat lengkap
        paroki: kepalaKeluarga.paroki,
        lingkungan: kepalaKeluarga.lingkungan
      };

      setFormData(prev => ({
        ...prev,
        ...existingFamilyData
      }));
      
      setLoading(false);
    }, 500);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing/changing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      'keuskupan',
      'alamatBaru', 
      'parokiBaru',
      'lingkunganBaru',
      'tanggalPindahKeuskupan'
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'Field ini wajib diisi';
      }
    });

    // Date validation - pastikan tanggal tidak di masa depan yang terlalu jauh
    if (formData.tanggalPindahKeuskupan) {
      const selectedDate = new Date(formData.tanggalPindahKeuskupan);
      const today = new Date();
      const maxDate = new Date();
      maxDate.setFullYear(today.getFullYear() + 1); // Max 1 tahun ke depan

      if (selectedDate > maxDate) {
        newErrors.tanggalPindahKeuskupan = 'Tanggal tidak boleh lebih dari 1 tahun ke depan';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        toast.success('Berhasil Memindahkan Domisili Keuskupan Keluarga Ini', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Navigate to migrasi page
        navigate('/pendataan/admin/migrasi-umat');
      }, 1000);
    } else {
      toast.error('Mohon lengkapi semua field yang wajib diisi', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Handle batal (kembali ke data keluarga)
  const handleBatal = () => {
    navigate(`/pendataan/admin/data-keluarga/${id}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="pindah-domisili-keuskupan">
        <div className="data-keluarga-loading">
          <div className="loading-spinner"></div>
          <p>Memuat data keluarga...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pindah-domisili-keuskupan">
      <div className="pindah-domisili-keuskupan-header">
        <h1>Input Data Migrasi Umat</h1>
      </div>

      <form onSubmit={handleSubmit} className="pindah-domisili-keuskupan-form">
        {/* Data Umat Ingin Dimigrasi (Read Only) */}
        <div className="pindah-domisili-keuskupan-card">
          <h2>Data Umat Ingin Dimigrasi (Read Only)</h2>
          
          <div className="pindah-domisili-keuskupan-row">
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Nama Umat <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaUmat"
                value={formData.namaUmat}
                readOnly
                className="pindah-domisili-keuskupan-input"
                placeholder="Nama Umat"
              />
            </div>
            
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Nomor KK (Kartu Keluarga) <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nomorKK"
                value={formData.nomorKK}
                readOnly
                className="pindah-domisili-keuskupan-input"
                placeholder="Nomor KK (Kartu Keluarga)"
              />
            </div>
          </div>

          <div className="pindah-domisili-keuskupan-full-row">
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                readOnly
                className="pindah-domisili-keuskupan-textarea"
                placeholder="Alamat"
                rows="3"
              />
            </div>
          </div>

          <div className="pindah-domisili-keuskupan-row">
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                disabled
                className="pindah-domisili-keuskupan-select"
                style={{ backgroundColor: '#F7FAFC', color: '#718096', cursor: 'not-allowed' }}
              >
                <option value="">Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkungan"
                value={formData.lingkungan}
                disabled
                className="pindah-domisili-keuskupan-select"
                style={{ backgroundColor: '#F7FAFC', color: '#718096', cursor: 'not-allowed' }}
              >
                <option value="">Lingkungan</option>
                {dropdownOptions.lingkungan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Input Data Migrasi Umat */}
        <div className="pindah-domisili-keuskupan-card">
          <h2>Input Data Migrasi Umat</h2>
          
          <div className="pindah-domisili-keuskupan-full-row">
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Keuskupan <span className="required">*</span>
              </label>
              <select
                name="keuskupan"
                value={formData.keuskupan}
                onChange={handleInputChange}
                className={`pindah-domisili-keuskupan-select ${errors.keuskupan ? 'error' : ''}`}
              >
                <option value="">Keuskupan</option>
                {dropdownOptions.keuskupan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.keuskupan && <span className="error-message">{errors.keuskupan}</span>}
            </div>
          </div>

          <div className="pindah-domisili-keuskupan-full-row">
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamatBaru"
                value={formData.alamatBaru}
                onChange={handleInputChange}
                className={`pindah-domisili-keuskupan-textarea ${errors.alamatBaru ? 'error' : ''}`}
                placeholder="Alamat Baru"
                rows="3"
              />
              {errors.alamatBaru && <span className="error-message">{errors.alamatBaru}</span>}
            </div>
          </div>

          <div className="pindah-domisili-keuskupan-row">
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="parokiBaru"
                value={formData.parokiBaru}
                onChange={handleInputChange}
                className={`pindah-domisili-keuskupan-select ${errors.parokiBaru ? 'error' : ''}`}
              >
                <option value="">Paroki</option>
                {dropdownOptions.parokiBaru.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.parokiBaru && <span className="error-message">{errors.parokiBaru}</span>}
            </div>
            
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkunganBaru"
                value={formData.lingkunganBaru}
                onChange={handleInputChange}
                className={`pindah-domisili-keuskupan-select ${errors.lingkunganBaru ? 'error' : ''}`}
              >
                <option value="">Lingkungan</option>
                {dropdownOptions.lingkunganBaru.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.lingkunganBaru && <span className="error-message">{errors.lingkunganBaru}</span>}
            </div>
          </div>

          <div className="pindah-domisili-keuskupan-full-row">
            <div className="pindah-domisili-keuskupan-col">
              <label className="pindah-domisili-keuskupan-label">
                Tanggal Pindah Keuskupan <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalPindahKeuskupan"
                value={formData.tanggalPindahKeuskupan}
                onChange={handleInputChange}
                className={`pindah-domisili-keuskupan-input ${errors.tanggalPindahKeuskupan ? 'error' : ''}`}
              />
              {errors.tanggalPindahKeuskupan && <span className="error-message">{errors.tanggalPindahKeuskupan}</span>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pindah-domisili-keuskupan-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="pindah-domisili-keuskupan-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="pindah-domisili-keuskupan-btn-submit"
          >
            Migrasi Data Umat
          </button>
        </div>
      </form>
    </div>
  );
};

export default PindahDomisiliKeuskupan;