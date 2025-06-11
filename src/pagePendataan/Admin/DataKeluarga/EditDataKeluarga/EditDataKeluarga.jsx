import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditDataKeluarga.css';

const EditDataKeluarga = () => {
  const { id, memberId } = useParams(); // id untuk keluarga, memberId untuk anggota
  const navigate = useNavigate();
  
  // Tentukan apakah ini kepala keluarga atau anggota
  const isKepalaKeluarga = !memberId;
  
  // Form state
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

  // State untuk password reset (hanya untuk kepala keluarga)
  const [isResetPassword, setIsResetPassword] = useState(false);

  // Error state
  const [errors, setErrors] = useState({});

  // Dropdown options
  const dropdownOptions = {
    statusDalamKeluarga: ['Suami', 'Istri', 'Anak', 'Lain-Lain'],
    pekerjaan: ['Dokter', 'Pegawai Negeri Sipil (Pns)', 'Wiraswasta', 'Pegawai Swasta'],
    jenisKelamin: ['Laki - Laki', 'Perempuan'],
    lingkungan: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan'],
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan', 'Lingkungan']
  };

  // Load existing data
  useEffect(() => {
    loadExistingData();
  }, [id, memberId]);

  const loadExistingData = () => {
    // Simulasi data yang sudah ada (replace dengan API call)
    const existingData = {
      namaLengkap: 'John Doe',
      nomorKK: '1234567890123456',
      alamat: 'Jl. Contoh No. 123',
      paroki: 'Paroki Babarsari',
      lingkungan: 'Lingkungan Babarsari',
      isBaptis: true,
      noBaptis: 'B001',
      noBukuBaptis: 'BB001',
      tanggalBaptis: '2000-01-01',
      namaParokiAsalBaptis: 'Paroki Babarsari',
      isKomuni: true,
      tanggalKomuni: '2010-01-01',
      namaParokiAsalKomuni: 'Paroki Babarsari',
      isKrisma: false,
      tanggalKrisma: '',
      namaParokiAsalKrisma: '',
      isPernikahan: false,
      tanggalPernikahan: '',
      nomorAktaPernikahanGereja: '',
      namaParokiAsalPernikahan: '',
      nik: '1234567890123456',
      jenisKelamin: 'Laki - Laki',
      tempatLahir: 'Jakarta',
      tanggalLahir: '1990-01-01',
      pendidikan: 'S1',
      pekerjaan: 'Dokter',
      nomorTelepon: '081234567890',
      statusDalamKeluarga: isKepalaKeluarga ? 'Suami' : 'Anak',
      namaAyah: 'Ayah Doe',
      namaIbu: 'Ibu Doe'
    };

    setFormData(existingData);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
      
      // Reset dependent fields when unchecking
      if (!checked) {
        if (name === 'isBaptis') {
          setFormData(prev => ({
            ...prev,
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
            namaParokiAsalPernikahan: ''
          }));
        } else if (name === 'isKomuni') {
          setFormData(prev => ({
            ...prev,
            tanggalKomuni: '',
            namaParokiAsalKomuni: '',
            isKrisma: false,
            tanggalKrisma: '',
            namaParokiAsalKrisma: '',
            isPernikahan: false,
            tanggalPernikahan: '',
            nomorAktaPernikahanGereja: '',
            namaParokiAsalPernikahan: ''
          }));
        } else if (name === 'isKrisma') {
          setFormData(prev => ({
            ...prev,
            tanggalKrisma: '',
            namaParokiAsalKrisma: '',
            isPernikahan: false,
            tanggalPernikahan: '',
            nomorAktaPernikahanGereja: '',
            namaParokiAsalPernikahan: ''
          }));
        }
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle password reset checkbox
  const handlePasswordResetChange = (e) => {
    setIsResetPassword(e.target.checked);
    if (!e.target.checked) {
      setFormData(prev => ({
        ...prev,
        passwordBaru: '',
        konfirmasiPasswordBaru: ''
      }));
      setErrors(prev => ({
        ...prev,
        passwordBaru: '',
        konfirmasiPasswordBaru: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      'namaLengkap', 'alamat', 'paroki', 'lingkungan', 'nik', 
      'jenisKelamin', 'tempatLahir', 'tanggalLahir', 'statusDalamKeluarga'
    ];

    if (isKepalaKeluarga) {
      requiredFields.push('nomorKK');
    }

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'Field ini wajib diisi';
      }
    });

    // Password validation for kepala keluarga
    if (isKepalaKeluarga && isResetPassword) {
      if (!formData.passwordBaru || formData.passwordBaru.length < 6) {
        newErrors.passwordBaru = 'Password minimal 6 karakter';
      }
      if (formData.passwordBaru !== formData.konfirmasiPasswordBaru) {
        newErrors.konfirmasiPasswordBaru = 'Konfirmasi password tidak sesuai';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    // Simulasi API call
    console.log('Data yang akan diedit:', formData);
    
    // Success notification
    const successMessage = isKepalaKeluarga 
      ? 'Berhasil Edit Data Kepala Keluarga'
      : 'Berhasil Edit Data Anggota Keluarga';
    
    toast.success(successMessage);
    
    // Navigate back to data keluarga
    setTimeout(() => {
      navigate(`/pendataan/admin/data-keluarga/${id}`);
    }, 1500);
  };

  // Handle batal
  const handleBatal = () => {
    navigate(`/pendataan/admin/data-keluarga/${id}`);
  };

  return (
    <div className="edit-data-keluarga">
      <div className="edit-data-keluarga-header">
        <h1>
          {isKepalaKeluarga ? 'Edit Data Kepala Keluarga' : 'Edit Data Anggota Keluarga'}
        </h1>
      </div>

      <form className="edit-data-keluarga-form" onSubmit={handleSubmit}>
        {/* Data Pribadi */}
        <div className="edit-data-keluarga-card">
          <h2>Data Pribadi</h2>
          
          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Nama Lengkap <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.namaLengkap ? 'error' : ''}`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.namaLengkap && <span className="error-message">{errors.namaLengkap}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                NIK <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.nik ? 'error' : ''}`}
                placeholder="Masukkan NIK"
              />
              {errors.nik && <span className="error-message">{errors.nik}</span>}
            </div>
          </div>

          {isKepalaKeluarga && (
            <div className="edit-data-keluarga-row">
              <div className="edit-data-keluarga-col">
                <label className="edit-data-keluarga-label">
                  Nomor KK <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="nomorKK"
                  value={formData.nomorKK}
                  onChange={handleInputChange}
                  className={`edit-data-keluarga-input ${errors.nomorKK ? 'error' : ''}`}
                  placeholder="Masukkan nomor KK"
                />
                {errors.nomorKK && <span className="error-message">{errors.nomorKK}</span>}
              </div>
              <div className="edit-data-keluarga-col">
                {/* Empty column for spacing when KK is displayed */}
              </div>
            </div>
          )}

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.jenisKelamin ? 'error' : ''}`}
              >
                <option value="">Pilih Jenis Kelamin</option>
                {dropdownOptions.jenisKelamin.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.jenisKelamin && <span className="error-message">{errors.jenisKelamin}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Tempat Lahir <span className="required">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                value={formData.tempatLahir}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.tempatLahir ? 'error' : ''}`}
                placeholder="Masukkan tempat lahir"
              />
              {errors.tempatLahir && <span className="error-message">{errors.tempatLahir}</span>}
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`edit-data-keluarga-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Masukkan alamat lengkap"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Tanggal Lahir <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.tanggalLahir ? 'error' : ''}`}
              />
              {errors.tanggalLahir && <span className="error-message">{errors.tanggalLahir}</span>}
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Pilih Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Pendidikan</label>
              <input
                type="text"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan pendidikan terakhir"
              />
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkungan"
                value={formData.lingkungan}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.lingkungan ? 'error' : ''}`}
              >
                <option value="">Pilih Lingkungan</option>
                {dropdownOptions.lingkungan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.lingkungan && <span className="error-message">{errors.lingkungan}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Pekerjaan</label>
              <select
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleInputChange}
                className="edit-data-keluarga-select"
              >
                <option value="">Pilih Pekerjaan</option>
                {dropdownOptions.pekerjaan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Nomor Telepon</label>
              <input
                type="tel"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan nomor telepon"
              />
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Status Dalam Keluarga <span className="required">*</span>
              </label>
              <select
                name="statusDalamKeluarga"
                value={formData.statusDalamKeluarga}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.statusDalamKeluarga ? 'error' : ''}`}
              >
                <option value="">Pilih Status</option>
                {dropdownOptions.statusDalamKeluarga.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.statusDalamKeluarga && <span className="error-message">{errors.statusDalamKeluarga}</span>}
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Nama Ayah</label>
              <input
                type="text"
                name="namaAyah"
                value={formData.namaAyah}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan nama ayah"
              />
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Nama Ibu</label>
              <input
                type="text"
                name="namaIbu"
                value={formData.namaIbu}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan nama ibu"
              />
            </div>
          </div>

          {/* Data Sakramen */}
          {/* Baptis */}
          <div className="edit-data-keluarga-sacrament-section">
            <div className="edit-data-keluarga-checkbox-wrapper">
              <input
                type="checkbox"
                id="isBaptis"
                name="isBaptis"
                checked={formData.isBaptis}
                onChange={handleInputChange}
                className="edit-data-keluarga-checkbox"
              />
              <label htmlFor="isBaptis" className="edit-data-keluarga-checkbox-label">
                Apakah Sudah Menerima Sakramen Baptis ?
              </label>
            </div>
            
            {formData.isBaptis && (
              <div className="edit-data-keluarga-sacrament-details">
                <div className="edit-data-keluarga-row">
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">No. Baptis</label>
                    <input
                      type="text"
                      name="noBaptis"
                      value={formData.noBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                      placeholder="Masukkan no. baptis"
                    />
                  </div>
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">No. Buku Baptis</label>
                    <input
                      type="text"
                      name="noBukuBaptis"
                      value={formData.noBukuBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                      placeholder="Masukkan no. buku baptis"
                    />
                  </div>
                </div>
                <div className="edit-data-keluarga-row">
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">Tanggal Baptis</label>
                    <input
                      type="date"
                      name="tanggalBaptis"
                      value={formData.tanggalBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                    />
                  </div>
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">Nama Paroki Asal Baptis</label>
                    <input
                      type="text"
                      name="namaParokiAsalBaptis"
                      value={formData.namaParokiAsalBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                      placeholder="Masukkan nama paroki asal baptis"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Komuni */}
          {formData.isBaptis && (
            <div className="edit-data-keluarga-sacrament-section">
              <div className="edit-data-keluarga-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKomuni"
                  name="isKomuni"
                  checked={formData.isKomuni}
                  onChange={handleInputChange}
                  className="edit-data-keluarga-checkbox"
                />
                <label htmlFor="isKomuni" className="edit-data-keluarga-checkbox-label">
                  Apakah Sudah Menerima Sakramen Ekaristi / Komuni Pertama ?
                </label>
              </div>
              
              {formData.isKomuni && (
                <div className="edit-data-keluarga-sacrament-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Tanggal Komuni</label>
                      <input
                        type="date"
                        name="tanggalKomuni"
                        value={formData.tanggalKomuni}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nama Paroki Asal Komuni Pertama</label>
                      <input
                        type="text"
                        name="namaParokiAsalKomuni"
                        value={formData.namaParokiAsalKomuni}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nama paroki asal komuni"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Krisma */}
          {formData.isKomuni && (
            <div className="edit-data-keluarga-sacrament-section">
              <div className="edit-data-keluarga-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKrisma"
                  name="isKrisma"
                  checked={formData.isKrisma}
                  onChange={handleInputChange}
                  className="edit-data-keluarga-checkbox"
                />
                <label htmlFor="isKrisma" className="edit-data-keluarga-checkbox-label">
                  Apakah Sudah Menerima Sakramen Krisma / Penguatan ?
                </label>
              </div>
              
              {formData.isKrisma && (
                <div className="edit-data-keluarga-sacrament-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Tanggal Krisma</label>
                      <input
                        type="date"
                        name="tanggalKrisma"
                        value={formData.tanggalKrisma}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nama Paroki Asal Krisma</label>
                      <input
                        type="text"
                        name="namaParokiAsalKrisma"
                        value={formData.namaParokiAsalKrisma}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nama paroki asal krisma"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pernikahan */}
          {formData.isKrisma && (
            <div className="edit-data-keluarga-sacrament-section">
              <div className="edit-data-keluarga-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isPernikahan"
                  name="isPernikahan"
                  checked={formData.isPernikahan}
                  onChange={handleInputChange}
                  className="edit-data-keluarga-checkbox"
                />
                <label htmlFor="isPernikahan" className="edit-data-keluarga-checkbox-label">
                  Apakah Sudah Menerima Sakramen Pernikahan ?
                </label>
              </div>
              
              {formData.isPernikahan && (
                <div className="edit-data-keluarga-sacrament-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Tanggal Pernikahan</label>
                      <input
                        type="date"
                        name="tanggalPernikahan"
                        value={formData.tanggalPernikahan}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nomor Akta Pernikahan Gereja</label>
                      <input
                        type="text"
                        name="nomorAktaPernikahanGereja"
                        value={formData.nomorAktaPernikahanGereja}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nomor akta pernikahan"
                      />
                    </div>
                  </div>
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nama Paroki Asal Pernikahan</label>
                      <input
                        type="text"
                        name="namaParokiAsalPernikahan"
                        value={formData.namaParokiAsalPernikahan}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nama paroki asal pernikahan"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      {/* Empty column for spacing */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Password Reset Section - Hanya untuk Kepala Keluarga */}
        {isKepalaKeluarga && (
          <div className="edit-data-keluarga-card">
            <h2>Reset Password</h2>
            
            <div className="edit-data-keluarga-password-section">
              <div className="edit-data-keluarga-password-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isResetPassword"
                  checked={isResetPassword}
                  onChange={handlePasswordResetChange}
                  className="edit-data-keluarga-password-checkbox"
                />
                <label htmlFor="isResetPassword" className="edit-data-keluarga-password-checkbox-label">
                  Apakah Anda Ingin Mereset Password Anda ?
                </label>
              </div>
              
              {isResetPassword && (
                <div className="edit-data-keluarga-password-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">
                        Password Baru <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        name="passwordBaru"
                        value={formData.passwordBaru}
                        onChange={handleInputChange}
                        className={`edit-data-keluarga-input ${errors.passwordBaru ? 'error' : ''}`}
                        placeholder="Masukkan password baru"
                      />
                      {errors.passwordBaru && <span className="error-message">{errors.passwordBaru}</span>}
                    </div>

                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">
                        Konfirmasi Password Baru <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        name="konfirmasiPasswordBaru"
                        value={formData.konfirmasiPasswordBaru}
                        onChange={handleInputChange}
                        className={`edit-data-keluarga-input ${errors.konfirmasiPasswordBaru ? 'error' : ''}`}
                        placeholder="Konfirmasi password baru"
                      />
                      {errors.konfirmasiPasswordBaru && <span className="error-message">{errors.konfirmasiPasswordBaru}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="edit-data-keluarga-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="edit-data-keluarga-btn-batal"
          >
            Batal
          </button>
          <button
            type="submit"
            className="edit-data-keluarga-btn-submit"
          >
            {isKepalaKeluarga ? 'Edit Data Kepala Keluarga' : 'Edit Data Anggota Keluarga'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDataKeluarga;