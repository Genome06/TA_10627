import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './TambahDataUmat.css';

const TambahDataUmat = () => {
  const navigate = useNavigate();
  
  // Form state untuk Kepala Keluarga
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nomorKK: '',
    alamat: '',
    paroki: '',
    lingkungan: '',
    isBaptis: false,
    noBaptis: '',
    noBukuBaptis: '',
    tanggalBaptis: '',
    namaParokiAsalBaptis: '',
    isKomuni: false,
    tanggalKomuni: '',
    namaParokiAsalKomuni: '',
    isKrisma: false,
    tanggalKrisma: '',
    namaParokiAsalKrisma: '',
    isPernikahan: false,
    tanggalPernikahan: '',
    nomorAktaPernikahanGereja: '',
    namaParokiAsalPernikahan: '',
    // Data Anggota Keluarga
    nik: '',
    jenisKelamin: '',
    tempatLahir: '',
    tanggalLahir: '',
    pendidikan: '',
    pekerjaan: '',
    nomorTelepon: '',
    statusDalamKeluarga: '',
    namaAyah: '',
    namaIbu: '',
    // Password
    passwordBaru: '',
    konfirmasiPasswordBaru: ''
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Dropdown options berdasarkan gambar
  const dropdownOptions = {
    statusDalamKeluarga: ['Suami', 'Istri', 'Anak', 'Lain-Lain'],
    pekerjaan: ['Dokter', 'Pegawai Negeri Sipil (Pns)', 'Wiraswasta', 'Pegawai Swasta'],
    jenisKelamin: ['Laki - Laki', 'Perempuan'],
    lingkungan: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan'],
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan', 'Lingkungan']
  };

  // Handle input change dengan logic hierarki sakramen
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Logic untuk hierarki sakramen
      if (name === 'isBaptis' && !checked) {
        // Jika Baptis di-uncheck, uncheck semua sakramen lainnya
        setFormData(prev => ({
          ...prev,
          isBaptis: false,
          isKomuni: false,
          isKrisma: false,
          isPernikahan: false,
          // Reset semua field sakramen
          noBaptis: '',
          noBukuBaptis: '',
          tanggalBaptis: '',
          namaParokiAsalBaptis: '',
          tanggalKomuni: '',
          namaParokiAsalKomuni: '',
          tanggalKrisma: '',
          namaParokiAsalKrisma: '',
          tanggalPernikahan: '',
          nomorAktaPernikahanGereja: '',
          namaParokiAsalPernikahan: ''
        }));
      } else if (name === 'isKomuni' && !checked) {
        // Jika Komuni di-uncheck, uncheck Krisma dan Pernikahan
        setFormData(prev => ({
          ...prev,
          isKomuni: false,
          isKrisma: false,
          isPernikahan: false,
          // Reset field komuni, krisma, dan pernikahan
          tanggalKomuni: '',
          namaParokiAsalKomuni: '',
          tanggalKrisma: '',
          namaParokiAsalKrisma: '',
          tanggalPernikahan: '',
          nomorAktaPernikahanGereja: '',
          namaParokiAsalPernikahan: ''
        }));
      } else if (name === 'isKrisma' && !checked) {
        // Jika Krisma di-uncheck, uncheck Pernikahan
        setFormData(prev => ({
          ...prev,
          isKrisma: false,
          isPernikahan: false,
          // Reset field krisma dan pernikahan
          tanggalKrisma: '',
          namaParokiAsalKrisma: '',
          tanggalPernikahan: '',
          nomorAktaPernikahanGereja: '',
          namaParokiAsalPernikahan: ''
        }));
      } else if (name === 'isPernikahan' && !checked) {
        // Jika Pernikahan di-uncheck, hanya reset field pernikahan
        setFormData(prev => ({
          ...prev,
          isPernikahan: false,
          // Reset field pernikahan
          tanggalPernikahan: '',
          nomorAktaPernikahanGereja: '',
          namaParokiAsalPernikahan: ''
        }));
      } else {
        // Jika checkbox di-check, hanya update checkbox tersebut
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      // Handle input biasa (non-checkbox)
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing/changing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear errors untuk field yang di-reset saat checkbox di-uncheck
    if (type === 'checkbox' && !checked) {
      const fieldsToReset = [];
      
      if (name === 'isBaptis') {
        fieldsToReset.push(
          'noBaptis', 'noBukuBaptis', 'tanggalBaptis', 'namaParokiAsalBaptis',
          'tanggalKomuni', 'namaParokiAsalKomuni',
          'tanggalKrisma', 'namaParokiAsalKrisma',
          'tanggalPernikahan', 'nomorAktaPernikahanGereja', 'namaParokiAsalPernikahan'
        );
      } else if (name === 'isKomuni') {
        fieldsToReset.push(
          'tanggalKomuni', 'namaParokiAsalKomuni',
          'tanggalKrisma', 'namaParokiAsalKrisma',
          'tanggalPernikahan', 'nomorAktaPernikahanGereja', 'namaParokiAsalPernikahan'
        );
      } else if (name === 'isKrisma') {
        fieldsToReset.push(
          'tanggalKrisma', 'namaParokiAsalKrisma',
          'tanggalPernikahan', 'nomorAktaPernikahanGereja', 'namaParokiAsalPernikahan'
        );
      } else if (name === 'isPernikahan') {
        fieldsToReset.push(
          'tanggalPernikahan', 'nomorAktaPernikahanGereja', 'namaParokiAsalPernikahan'
        );
      }

      // Clear errors untuk field yang di-reset
      if (fieldsToReset.length > 0) {
        setErrors(prev => {
          const newErrors = { ...prev };
          fieldsToReset.forEach(field => {
            delete newErrors[field];
          });
          return newErrors;
        });
      }
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      'namaLengkap', 'nomorKK', 'alamat', 'paroki', 'lingkungan',
      'nik', 'jenisKelamin', 'tempatLahir', 'tanggalLahir', 'pendidikan',
      'pekerjaan', 'nomorTelepon', 'statusDalamKeluarga', 'namaAyah', 'namaIbu',
      'passwordBaru', 'konfirmasiPasswordBaru'
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'Field ini wajib diisi';
      }
    });

    // Conditional required fields
    if (formData.isBaptis) {
      if (!formData.noBaptis) newErrors.noBaptis = 'Field ini wajib diisi';
      if (!formData.noBukuBaptis) newErrors.noBukuBaptis = 'Field ini wajib diisi';
      if (!formData.tanggalBaptis) newErrors.tanggalBaptis = 'Field ini wajib diisi';
      if (!formData.namaParokiAsalBaptis) newErrors.namaParokiAsalBaptis = 'Field ini wajib diisi';
    }

    if (formData.isKomuni) {
      if (!formData.tanggalKomuni) newErrors.tanggalKomuni = 'Field ini wajib diisi';
      if (!formData.namaParokiAsalKomuni) newErrors.namaParokiAsalKomuni = 'Field ini wajib diisi';
    }

    if (formData.isKrisma) {
      if (!formData.tanggalKrisma) newErrors.tanggalKrisma = 'Field ini wajib diisi';
      if (!formData.namaParokiAsalKrisma) newErrors.namaParokiAsalKrisma = 'Field ini wajib diisi';
    }

    if (formData.isPernikahan) {
      if (!formData.tanggalPernikahan) newErrors.tanggalPernikahan = 'Field ini wajib diisi';
      if (!formData.nomorAktaPernikahanGereja) newErrors.nomorAktaPernikahanGereja = 'Field ini wajib diisi';
      if (!formData.namaParokiAsalPernikahan) newErrors.namaParokiAsalPernikahan = 'Field ini wajib diisi';
    }

    // Password validation
    if (formData.passwordBaru !== formData.konfirmasiPasswordBaru) {
      newErrors.konfirmasiPasswordBaru = 'Password tidak sama';
    }

    if (formData.passwordBaru && formData.passwordBaru.length < 6) {
      newErrors.passwordBaru = 'Password minimal 6 karakter';
    }

    // Phone number validation
    if (formData.nomorTelepon && !/^[0-9+\-\s()]+$/.test(formData.nomorTelepon)) {
      newErrors.nomorTelepon = 'Format nomor telepon tidak valid';
    }

    // NIK validation (16 digits)
    if (formData.nik && !/^\d{16}$/.test(formData.nik)) {
      newErrors.nik = 'NIK harus 16 digit angka';
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
        toast.success('Berhasil menambah keluarga baru!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Navigate to random family data (1-5)
        const randomFamilyId = Math.floor(Math.random() * 5) + 1;
        navigate(`/pendataan/admin/data-keluarga/${randomFamilyId}`);
      }, 1000);
    } else {
      toast.error('Mohon periksa kembali form Anda', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Handle reset
  const handleReset = () => {
    setFormData({
      namaLengkap: '',
      nomorKK: '',
      alamat: '',
      paroki: '',
      lingkungan: '',
      isBaptis: false,
      noBaptis: '',
      noBukuBaptis: '',
      tanggalBaptis: '',
      namaParokiAsalBaptis: '',
      isKomuni: false,
      tanggalKomuni: '',
      namaParokiAsalKomuni: '',
      isKrisma: false,
      tanggalKrisma: '',
      namaParokiAsalKrisma: '',
      isPernikahan: false,
      tanggalPernikahan: '',
      nomorAktaPernikahanGereja: '',
      namaParokiAsalPernikahan: '',
      nik: '',
      jenisKelamin: '',
      tempatLahir: '',
      tanggalLahir: '',
      pendidikan: '',
      pekerjaan: '',
      nomorTelepon: '',
      statusDalamKeluarga: '',
      namaAyah: '',
      namaIbu: '',
      passwordBaru: '',
      konfirmasiPasswordBaru: ''
    });
    setErrors({});
  };

  // Handle batal (kembali ke data umat)
  const handleBatal = () => {
    navigate('/pendataan/admin/data-umat');
  };

  return (
    <div className="tambah-data-umat">
      <div className="tambah-data-umat-header">
        <h1>Input Data Keluarga</h1>
      </div>

      <form onSubmit={handleSubmit} className="tambah-data-umat-form">
        {/* Input Data Kepala Keluarga */}
        <div className="tambah-data-umat-card">
          <h2>Input Data Kepala Keluarga</h2>
          
          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Nama Lengkap Kepala Keluarga <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.namaLengkap ? 'error' : ''}`}
                placeholder="Nama Lengkap Kepala Keluarga"
              />
              {errors.namaLengkap && <span className="error-message">{errors.namaLengkap}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                NIK <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.nik ? 'error' : ''}`}
                placeholder="NIK"
                maxLength="16"
              />
              {errors.nik && <span className="error-message">{errors.nik}</span>}
            </div>
          </div>

          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Nomor KK (Kartu Keluarga) <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nomorKK"
                value={formData.nomorKK}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.nomorKK ? 'error' : ''}`}
                placeholder="Nomor KK (Kartu Keluarga)"
              />
              {errors.nomorKK && <span className="error-message">{errors.nomorKK}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                className={`tambah-data-umat-select ${errors.jenisKelamin ? 'error' : ''}`}
              >
                <option value="">Jenis Kelamin</option>
                {dropdownOptions.jenisKelamin.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.jenisKelamin && <span className="error-message">{errors.jenisKelamin}</span>}
            </div>
          </div>

          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`tambah-data-umat-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Alamat"
                rows="3"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Tempat Lahir <span className="required">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                value={formData.tempatLahir}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.tempatLahir ? 'error' : ''}`}
                placeholder="Tempat Lahir"
              />
              {errors.tempatLahir && <span className="error-message">{errors.tempatLahir}</span>}
            </div>
          </div>

          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`tambah-data-umat-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Tanggal Lahir <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.tanggalLahir ? 'error' : ''}`}
              />
              {errors.tanggalLahir && <span className="error-message">{errors.tanggalLahir}</span>}
            </div>
          </div>

          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkungan"
                value={formData.lingkungan}
                onChange={handleInputChange}
                className={`tambah-data-umat-select ${errors.lingkungan ? 'error' : ''}`}
              >
                <option value="">Lingkungan</option>
                {dropdownOptions.lingkungan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.lingkungan && <span className="error-message">{errors.lingkungan}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Pendidikan <span className="required">*</span>
              </label>
              <input
                type="text"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.pendidikan ? 'error' : ''}`}
                placeholder="Pendidikan"
              />
              {errors.pendidikan && <span className="error-message">{errors.pendidikan}</span>}
            </div>
          </div>

          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Pekerjaan <span className="required">*</span>
              </label>
              <select
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleInputChange}
                className={`tambah-data-umat-select ${errors.pekerjaan ? 'error' : ''}`}
              >
                <option value="">Jenis Pekerjaan</option>
                {dropdownOptions.pekerjaan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.pekerjaan && <span className="error-message">{errors.pekerjaan}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Nomor Telepon / Handphone <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.nomorTelepon ? 'error' : ''}`}
                placeholder="Nomor Telepon / Handphone"
              />
              {errors.nomorTelepon && <span className="error-message">{errors.nomorTelepon}</span>}
            </div>
          </div>

          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Status Dalam Keluarga <span className="required">*</span>
              </label>
              <select
                name="statusDalamKeluarga"
                value={formData.statusDalamKeluarga}
                onChange={handleInputChange}
                className={`tambah-data-umat-select ${errors.statusDalamKeluarga ? 'error' : ''}`}
              >
                <option value="">Status Dalam Keluarga</option>
                {dropdownOptions.statusDalamKeluarga.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.statusDalamKeluarga && <span className="error-message">{errors.statusDalamKeluarga}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Nama Ayah <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaAyah"
                value={formData.namaAyah}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.namaAyah ? 'error' : ''}`}
                placeholder="Nama Ayah"
              />
              {errors.namaAyah && <span className="error-message">{errors.namaAyah}</span>}
            </div>
          </div>

          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Nama Ibu <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaIbu"
                value={formData.namaIbu}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.namaIbu ? 'error' : ''}`}
                placeholder="Nama Ibu"
              />
              {errors.namaIbu && <span className="error-message">{errors.namaIbu}</span>}
            </div>
            <div className="tambah-data-umat-col">
              {/* Empty column for spacing */}
            </div>
          </div>

          {/* Baptis Section */}
          <div className="tambah-data-umat-sacrament-section">
            <div className="tambah-data-umat-checkbox-wrapper">
              <input
                type="checkbox"
                id="isBaptis"
                name="isBaptis"
                checked={formData.isBaptis}
                onChange={handleInputChange}
                className="tambah-data-umat-checkbox"
              />
              <label htmlFor="isBaptis" className="tambah-data-umat-checkbox-label">
                Apakah Sudah Menerima Sakramen Baptis ?
              </label>
            </div>

            {formData.isBaptis && (
              <div className="tambah-data-umat-sacrament-details">
                <div className="tambah-data-umat-row">
                  <div className="tambah-data-umat-col">
                    <label className="tambah-data-umat-label">
                      No Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="noBaptis"
                      value={formData.noBaptis}
                      onChange={handleInputChange}
                      className={`tambah-data-umat-input ${errors.noBaptis ? 'error' : ''}`}
                      placeholder="No Baptis"
                    />
                    {errors.noBaptis && <span className="error-message">{errors.noBaptis}</span>}
                  </div>
                  
                  <div className="tambah-data-umat-col">
                    <label className="tambah-data-umat-label">
                      No Buku Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="noBukuBaptis"
                      value={formData.noBukuBaptis}
                      onChange={handleInputChange}
                      className={`tambah-data-umat-input ${errors.noBukuBaptis ? 'error' : ''}`}
                      placeholder="No Buku Baptis"
                    />
                    {errors.noBukuBaptis && <span className="error-message">{errors.noBukuBaptis}</span>}
                  </div>
                </div>

                <div className="tambah-data-umat-row">
                  <div className="tambah-data-umat-col">
                    <label className="tambah-data-umat-label">
                      Tanggal Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      name="tanggalBaptis"
                      value={formData.tanggalBaptis}
                      onChange={handleInputChange}
                      className={`tambah-data-umat-input ${errors.tanggalBaptis ? 'error' : ''}`}
                    />
                    {errors.tanggalBaptis && <span className="error-message">{errors.tanggalBaptis}</span>}
                  </div>
                  
                  <div className="tambah-data-umat-col">
                    <label className="tambah-data-umat-label">
                      Nama Paroki Asal Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="namaParokiAsalBaptis"
                      value={formData.namaParokiAsalBaptis}
                      onChange={handleInputChange}
                      className={`tambah-data-umat-input ${errors.namaParokiAsalBaptis ? 'error' : ''}`}
                      placeholder="Nama Paroki Asal Baptis"
                    />
                    {errors.namaParokiAsalBaptis && <span className="error-message">{errors.namaParokiAsalBaptis}</span>}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Komuni Section - Only show if Baptis is checked */}
          {formData.isBaptis && (
            <div className="tambah-data-umat-sacrament-section">
              <div className="tambah-data-umat-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKomuni"
                  name="isKomuni"
                  checked={formData.isKomuni}
                  onChange={handleInputChange}
                  className="tambah-data-umat-checkbox"
                />
                <label htmlFor="isKomuni" className="tambah-data-umat-checkbox-label">
                  Apakah Sudah Menerima Sakramen Ekaristi / Komuni Pertama ?
                </label>
              </div>

              {formData.isKomuni && (
                <div className="tambah-data-umat-sacrament-details">
                  <div className="tambah-data-umat-row">
                    <div className="tambah-data-umat-col">
                      <label className="tambah-data-umat-label">
                        Tanggal Komuni <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        name="tanggalKomuni"
                        value={formData.tanggalKomuni}
                        onChange={handleInputChange}
                        className={`tambah-data-umat-input ${errors.tanggalKomuni ? 'error' : ''}`}
                      />
                      {errors.tanggalKomuni && <span className="error-message">{errors.tanggalKomuni}</span>}
                    </div>
                    
                    <div className="tambah-data-umat-col">
                      <label className="tambah-data-umat-label">
                        Nama Paroki Asal Komuni Pertama <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="namaParokiAsalKomuni"
                        value={formData.namaParokiAsalKomuni}
                        onChange={handleInputChange}
                        className={`tambah-data-umat-input ${errors.namaParokiAsalKomuni ? 'error' : ''}`}
                        placeholder="Nama Paroki Asal Komuni Pertama"
                      />
                      {errors.namaParokiAsalKomuni && <span className="error-message">{errors.namaParokiAsalKomuni}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Krisma Section - Only show if Komuni is checked */}
          {formData.isKomuni && (
            <div className="tambah-data-umat-sacrament-section">
              <div className="tambah-data-umat-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKrisma"
                  name="isKrisma"
                  checked={formData.isKrisma}
                  onChange={handleInputChange}
                  className="tambah-data-umat-checkbox"
                />
                <label htmlFor="isKrisma" className="tambah-data-umat-checkbox-label">
                  Apakah Sudah Menerima Sakramen Krisma / Penguatan ?
                </label>
              </div>

              {formData.isKrisma && (
                <div className="tambah-data-umat-sacrament-details">
                  <div className="tambah-data-umat-row">
                    <div className="tambah-data-umat-col">
                      <label className="tambah-data-umat-label">
                        Tanggal Krisma <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        name="tanggalKrisma"
                        value={formData.tanggalKrisma}
                        onChange={handleInputChange}
                        className={`tambah-data-umat-input ${errors.tanggalKrisma ? 'error' : ''}`}
                      />
                      {errors.tanggalKrisma && <span className="error-message">{errors.tanggalKrisma}</span>}
                    </div>
                    
                    <div className="tambah-data-umat-col">
                      <label className="tambah-data-umat-label">
                        Nama Paroki Asal Krisma <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="namaParokiAsalKrisma"
                        value={formData.namaParokiAsalKrisma}
                        onChange={handleInputChange}
                        className={`tambah-data-umat-input ${errors.namaParokiAsalKrisma ? 'error' : ''}`}
                        placeholder="Nama Paroki Asal Krisma"
                      />
                      {errors.namaParokiAsalKrisma && <span className="error-message">{errors.namaParokiAsalKrisma}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pernikahan Section - Only show if Krisma is checked */}
          {formData.isKrisma && (
            <div className="tambah-data-umat-sacrament-section">
              <div className="tambah-data-umat-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isPernikahan"
                  name="isPernikahan"
                  checked={formData.isPernikahan}
                  onChange={handleInputChange}
                  className="tambah-data-umat-checkbox"
                />
                <label htmlFor="isPernikahan" className="tambah-data-umat-checkbox-label">
                  Apakah Sudah Menerima Sakramen Pernikahan ?
                </label>
              </div>

              {formData.isPernikahan && (
                <div className="tambah-data-umat-sacrament-details">
                  <div className="tambah-data-umat-row">
                    <div className="tambah-data-umat-col">
                      <label className="tambah-data-umat-label">
                        Tanggal Pernikahan <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        name="tanggalPernikahan"
                        value={formData.tanggalPernikahan}
                        onChange={handleInputChange}
                        className={`tambah-data-umat-input ${errors.tanggalPernikahan ? 'error' : ''}`}
                      />
                      {errors.tanggalPernikahan && <span className="error-message">{errors.tanggalPernikahan}</span>}
                    </div>
                    
                    <div className="tambah-data-umat-col">
                      <label className="tambah-data-umat-label">
                        Nomor Akta Pernikahan Gereja <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="nomorAktaPernikahanGereja"
                        value={formData.nomorAktaPernikahanGereja}
                        onChange={handleInputChange}
                        className={`tambah-data-umat-input ${errors.nomorAktaPernikahanGereja ? 'error' : ''}`}
                        placeholder="Nomor Akta Pernikahan Gereja"
                      />
                      {errors.nomorAktaPernikahanGereja && <span className="error-message">{errors.nomorAktaPernikahanGereja}</span>}
                    </div>
                  </div>

                  <div className="tambah-data-umat-row">
                    <div className="tambah-data-umat-col">
                      <label className="tambah-data-umat-label">
                        Nama Paroki Asal Pernikahan <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="namaParokiAsalPernikahan"
                        value={formData.namaParokiAsalPernikahan}
                        onChange={handleInputChange}
                        className={`tambah-data-umat-input ${errors.namaParokiAsalPernikahan ? 'error' : ''}`}
                        placeholder="Nama Paroki Asal Pernikahan"
                      />
                      {errors.namaParokiAsalPernikahan && <span className="error-message">{errors.namaParokiAsalPernikahan}</span>}
                    </div>
                    <div className="tambah-data-umat-col">
                      {/* Empty column for spacing */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Create Password Section */}
        <div className="tambah-data-umat-card">
          <h2>Create Password User Umat</h2>
          
          <div className="tambah-data-umat-row">
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Password Baru <span className="required">*</span>
              </label>
              <input
                type="password"
                name="passwordBaru"
                value={formData.passwordBaru}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.passwordBaru ? 'error' : ''}`}
                placeholder="Password Baru"
              />
              {errors.passwordBaru && <span className="error-message">{errors.passwordBaru}</span>}
            </div>
            
            <div className="tambah-data-umat-col">
              <label className="tambah-data-umat-label">
                Konfirmasi Password Baru <span className="required">*</span>
              </label>
              <input
                type="password"
                name="konfirmasiPasswordBaru"
                value={formData.konfirmasiPasswordBaru}
                onChange={handleInputChange}
                className={`tambah-data-umat-input ${errors.konfirmasiPasswordBaru ? 'error' : ''}`}
                placeholder="Konfirmasi Password Baru"
              />
              {errors.konfirmasiPasswordBaru && <span className="error-message">{errors.konfirmasiPasswordBaru}</span>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="tambah-data-umat-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="tambah-data-umat-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="tambah-data-umat-btn-submit"
          >
            Simpan Data Umat
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahDataUmat;