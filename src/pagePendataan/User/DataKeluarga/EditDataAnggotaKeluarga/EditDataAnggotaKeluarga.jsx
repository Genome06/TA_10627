import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditDataAnggotaKeluarga.css';

const EditDataAnggotaKeluarga = () => {
  const { memberId } = useParams(); // memberId untuk anggota yang akan diedit
  const navigate = useNavigate();
  
  // Tentukan apakah ini kepala keluarga atau anggota berdasarkan memberId
  const isKepalaKeluarga = !memberId;
  
  // Data keluarga untuk user (Adrianus William Jensen family)
  const familyData = {
    kepalaKeluarga: {
      id: 1,
      nama: "Adrianus William Jensen",
      nik: "3471012008800001",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Yogyakarta",
      tanggalLahir: "1980-06-20",
      alamat: "Jl. Babarsari No. 123, Yogyakarta",
      nomorHp: "08123456789",
      statusPernikahan: "Sudah Menikah",
      pekerjaan: "Dokter",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      nomorKK: "1234567890123456",
      statusDalamKeluarga: "Suami",
      pendidikan: "S2 Kedokteran",
      namaAyah: "Yohanes Jensen",
      namaIbu: "Maria Jensen",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B001",
      noBukuBaptis: "BB001",
      tanggalBaptis: "2000-01-01",
      namaParokiAsalBaptis: "Paroki Babarsari",
      isKomuni: true,
      tanggalKomuni: "2010-01-01",
      namaParokiAsalKomuni: "Paroki Babarsari",
      isKrisma: true,
      tanggalKrisma: "2015-01-01",
      namaParokiAsalKrisma: "Paroki Babarsari",
      isPernikahan: true,
      tanggalPernikahan: "2005-01-01",
      nomorAktaPernikahanGereja: "AP001",
      namaParokiAsalPernikahan: "Paroki Babarsari"
    },
    anggotaKeluarga: [
      {
        id: 2,
        nama: "Maria Theresia Jensen",
        nik: "3471015512850002",
        jenisKelamin: "Perempuan",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "1985-12-15",
        alamat: "Jl. Babarsari No. 123, Yogyakarta",
        nomorHp: "08123456790",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Guru",
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        statusDalamKeluarga: "Istri",
        pendidikan: "S1 Pendidikan",
        namaAyah: "Antonius Maria",
        namaIbu: "Theresia Maria",
        // Sakramen data
        isBaptis: true,
        noBaptis: "B002",
        noBukuBaptis: "BB002",
        tanggalBaptis: "2000-02-01",
        namaParokiAsalBaptis: "Paroki Babarsari",
        isKomuni: true,
        tanggalKomuni: "2010-02-01",
        namaParokiAsalKomuni: "Paroki Babarsari",
        isKrisma: true,
        tanggalKrisma: "2015-02-01",
        namaParokiAsalKrisma: "Paroki Babarsari",
        isPernikahan: true,
        tanggalPernikahan: "2005-01-01",
        nomorAktaPernikahanGereja: "AP001",
        namaParokiAsalPernikahan: "Paroki Babarsari"
      },
      {
        id: 3,
        nama: "Antonius William Jensen Jr",
        nik: "3471011005100003",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "2010-05-10",
        alamat: "Jl. Babarsari No. 123, Yogyakarta",
        nomorHp: "",
        statusPernikahan: "Belum Menikah",
        pekerjaan: "Pelajar",
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        statusDalamKeluarga: "Anak",
        pendidikan: "SD",
        namaAyah: "Adrianus William Jensen",
        namaIbu: "Maria Theresia Jensen",
        // Sakramen data
        isBaptis: true,
        noBaptis: "B003",
        noBukuBaptis: "BB003",
        tanggalBaptis: "2010-06-01",
        namaParokiAsalBaptis: "Paroki Babarsari",
        isKomuni: true,
        tanggalKomuni: "2020-06-01",
        namaParokiAsalKomuni: "Paroki Babarsari",
        isKrisma: false,
        tanggalKrisma: "",
        namaParokiAsalKrisma: "",
        isPernikahan: false,
        tanggalPernikahan: "",
        nomorAktaPernikahanGereja: "",
        namaParokiAsalPernikahan: ""
      }
    ]
  };
  
  // Form state - identik dengan admin
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

  // Loading state
  const [loading, setLoading] = useState(true);

  // State untuk password reset (hanya untuk kepala keluarga)
  const [isResetPassword, setIsResetPassword] = useState(false);

  // Error state
  const [errors, setErrors] = useState({});

  // Dropdown options - identik dengan admin
  const dropdownOptions = {
    statusDalamKeluarga: ['Suami', 'Istri', 'Anak', 'Adik', 'Lain-Lain'],
    pekerjaan: ['Dokter', 'Pegawai Negeri Sipil (Pns)', 'Wiraswasta', 'Pegawai Swasta', 'Guru', 'Pelajar', 'Belum Bekerja', 'Lurah', 'Camat', 'PNS'],
    jenisKelamin: ['Laki-laki', 'Perempuan'],
    lingkungan: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan'],
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan']
  };

  // Load existing data
  useEffect(() => {
    loadExistingData();
  }, [memberId]);

  const loadExistingData = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let memberData = null;

      if (isKepalaKeluarga) {
        // Jika edit kepala keluarga
        memberData = familyData.kepalaKeluarga;
      } else {
        // Jika edit anggota keluarga, cari berdasarkan memberId
        memberData = familyData.anggotaKeluarga?.find(member => member.id === parseInt(memberId));
        
        if (!memberData) {
          toast.error(`Data anggota dengan ID ${memberId} tidak ditemukan`);
          navigate('/pendataan/kepalaKeluarga/data-keluarga');
          return;
        }
      }

      // Map data ke form state
      const existingData = {
        namaLengkap: memberData.nama || '',
        nomorKK: memberData.nomorKK || '', // Hanya ada untuk kepala keluarga
        alamat: memberData.alamat || '',
        paroki: memberData.paroki || '',
        lingkungan: memberData.lingkungan || '',
        isBaptis: memberData.isBaptis || false,
        noBaptis: memberData.noBaptis || '',
        noBukuBaptis: memberData.noBukuBaptis || '',
        tanggalBaptis: memberData.tanggalBaptis || '',
        namaParokiAsalBaptis: memberData.namaParokiAsalBaptis || '',
        isKomuni: memberData.isKomuni || false,
        tanggalKomuni: memberData.tanggalKomuni || '',
        namaParokiAsalKomuni: memberData.namaParokiAsalKomuni || '',
        isKrisma: memberData.isKrisma || false,
        tanggalKrisma: memberData.tanggalKrisma || '',
        namaParokiAsalKrisma: memberData.namaParokiAsalKrisma || '',
        isPernikahan: memberData.isPernikahan || false,
        tanggalPernikahan: memberData.tanggalPernikahan || '',
        nomorAktaPernikahanGereja: memberData.nomorAktaPernikahanGereja || '',
        namaParokiAsalPernikahan: memberData.namaParokiAsalPernikahan || '',
        nik: memberData.nik || '',
        jenisKelamin: memberData.jenisKelamin || '',
        tempatLahir: memberData.tempatLahir || '',
        tanggalLahir: memberData.tanggalLahir || '',
        pendidikan: memberData.pendidikan || '',
        pekerjaan: memberData.pekerjaan || '',
        nomorTelepon: memberData.nomorHp || '',
        statusDalamKeluarga: memberData.statusDalamKeluarga || '',
        namaAyah: memberData.namaAyah || '',
        namaIbu: memberData.namaIbu || ''
      };

      setFormData(existingData);
      setLoading(false);
    }, 500);
  };

  // Handle input change - identik dengan admin
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

  // Handle password reset checkbox - identik dengan admin
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

  // Validation function - identik dengan admin
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

  // Handle form submit - identik dengan admin
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    // Simulasi API call
    console.log('Data yang akan diedit:', formData);
    console.log('Member ID:', memberId);
    console.log('Is Kepala Keluarga:', isKepalaKeluarga);
    
    // Success notification
    const successMessage = isKepalaKeluarga 
      ? 'Berhasil Edit Data Kepala Keluarga'
      : 'Berhasil Edit Data Anggota Keluarga';
    
    toast.success(successMessage);
    
    // Navigate back to data keluarga
    setTimeout(() => {
      navigate('/pendataan/kepalaKeluarga/data-keluarga');
    }, 1500);
  };

  // Handle batal
  const handleBatal = () => {
    navigate('/pendataan/kepalaKeluarga/data-keluarga');
  };

  // Loading state
  if (loading) {
    return (
      <div className="edit-data-anggota-keluarga-user">
        <div className="edit-data-anggota-keluarga-user-loading">
          <div className="loading-spinner"></div>
          <p>Memuat data untuk diedit...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-data-anggota-keluarga-user">
      <div className="edit-data-anggota-keluarga-user-header">
        <h1>
          {isKepalaKeluarga ? 'Edit Data Kepala Keluarga' : 'Edit Data Anggota Keluarga'}
        </h1>
      </div>

      <form className="edit-data-anggota-keluarga-user-form" onSubmit={handleSubmit}>
        {/* Data Pribadi */}
        <div className="edit-data-anggota-keluarga-user-card">
          <h2>Data Pribadi</h2>
          
          <div className="edit-data-anggota-keluarga-user-row">
            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Nama Lengkap <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-input ${errors.namaLengkap ? 'error' : ''}`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.namaLengkap && <span className="error-message">{errors.namaLengkap}</span>}
            </div>

            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                NIK <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-input ${errors.nik ? 'error' : ''}`}
                placeholder="Masukkan NIK"
              />
              {errors.nik && <span className="error-message">{errors.nik}</span>}
            </div>
          </div>

          {isKepalaKeluarga && (
            <div className="edit-data-anggota-keluarga-user-row">
              <div className="edit-data-anggota-keluarga-user-col">
                <label className="edit-data-anggota-keluarga-user-label">
                  Nomor KK <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="nomorKK"
                  value={formData.nomorKK}
                  onChange={handleInputChange}
                  className={`edit-data-anggota-keluarga-user-input ${errors.nomorKK ? 'error' : ''}`}
                  placeholder="Masukkan nomor KK"
                />
                {errors.nomorKK && <span className="error-message">{errors.nomorKK}</span>}
              </div>
              <div className="edit-data-anggota-keluarga-user-col">
                {/* Empty column for spacing when KK is displayed */}
              </div>
            </div>
          )}

          <div className="edit-data-anggota-keluarga-user-row">
            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-select ${errors.jenisKelamin ? 'error' : ''}`}
              >
                <option value="">Pilih Jenis Kelamin</option>
                {dropdownOptions.jenisKelamin.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.jenisKelamin && <span className="error-message">{errors.jenisKelamin}</span>}
            </div>

            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Tempat Lahir <span className="required">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                value={formData.tempatLahir}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-input ${errors.tempatLahir ? 'error' : ''}`}
                placeholder="Masukkan tempat lahir"
              />
              {errors.tempatLahir && <span className="error-message">{errors.tempatLahir}</span>}
            </div>
          </div>

          <div className="edit-data-anggota-keluarga-user-row">
            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Masukkan alamat lengkap"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>

            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Tanggal Lahir <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-input ${errors.tanggalLahir ? 'error' : ''}`}
              />
              {errors.tanggalLahir && <span className="error-message">{errors.tanggalLahir}</span>}
            </div>
          </div>

          <div className="edit-data-anggota-keluarga-user-row">
            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Pilih Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>

            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">Pendidikan</label>
              <input
                type="text"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleInputChange}
                className="edit-data-anggota-keluarga-user-input"
                placeholder="Masukkan pendidikan terakhir"
              />
            </div>
          </div>

          <div className="edit-data-anggota-keluarga-user-row">
            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkungan"
                value={formData.lingkungan}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-select ${errors.lingkungan ? 'error' : ''}`}
              >
                <option value="">Pilih Lingkungan</option>
                {dropdownOptions.lingkungan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.lingkungan && <span className="error-message">{errors.lingkungan}</span>}
            </div>

            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">Pekerjaan</label>
              <select
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleInputChange}
                className="edit-data-anggota-keluarga-user-select"
              >
                <option value="">Pilih Pekerjaan</option>
                {dropdownOptions.pekerjaan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="edit-data-anggota-keluarga-user-row">
            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">Nomor Telepon</label>
              <input
                type="tel"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleInputChange}
                className="edit-data-anggota-keluarga-user-input"
                placeholder="Masukkan nomor telepon"
              />
            </div>

            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">
                Status Dalam Keluarga <span className="required">*</span>
              </label>
              <select
                name="statusDalamKeluarga"
                value={formData.statusDalamKeluarga}
                onChange={handleInputChange}
                className={`edit-data-anggota-keluarga-user-select ${errors.statusDalamKeluarga ? 'error' : ''}`}
              >
                <option value="">Pilih Status</option>
                {dropdownOptions.statusDalamKeluarga.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.statusDalamKeluarga && <span className="error-message">{errors.statusDalamKeluarga}</span>}
            </div>
          </div>

          <div className="edit-data-anggota-keluarga-user-row">
            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">Nama Ayah</label>
              <input
                type="text"
                name="namaAyah"
                value={formData.namaAyah}
                onChange={handleInputChange}
                className="edit-data-anggota-keluarga-user-input"
                placeholder="Masukkan nama ayah"
              />
            </div>

            <div className="edit-data-anggota-keluarga-user-col">
              <label className="edit-data-anggota-keluarga-user-label">Nama Ibu</label>
              <input
                type="text"
                name="namaIbu"
                value={formData.namaIbu}
                onChange={handleInputChange}
                className="edit-data-anggota-keluarga-user-input"
                placeholder="Masukkan nama ibu"
              />
            </div>
          </div>

          {/* Data Sakramen */}
          {/* Baptis */}
          <div className="edit-data-anggota-keluarga-user-sacrament-section">
            <div className="edit-data-anggota-keluarga-user-checkbox-wrapper">
              <input
                type="checkbox"
                id="isBaptis"
                name="isBaptis"
                checked={formData.isBaptis}
                onChange={handleInputChange}
                className="edit-data-anggota-keluarga-user-checkbox"
              />
              <label htmlFor="isBaptis" className="edit-data-anggota-keluarga-user-checkbox-label">
                Apakah Sudah Menerima Sakramen Baptis ?
              </label>
            </div>
            
            {formData.isBaptis && (
              <div className="edit-data-anggota-keluarga-user-sacrament-details">
                <div className="edit-data-anggota-keluarga-user-row">
                  <div className="edit-data-anggota-keluarga-user-col">
                    <label className="edit-data-anggota-keluarga-user-label">No. Baptis</label>
                    <input
                      type="text"
                      name="noBaptis"
                      value={formData.noBaptis}
                      onChange={handleInputChange}
                      className="edit-data-anggota-keluarga-user-input"
                      placeholder="Masukkan no. baptis"
                    />
                  </div>
                  <div className="edit-data-anggota-keluarga-user-col">
                    <label className="edit-data-anggota-keluarga-user-label">No. Buku Baptis</label>
                    <input
                      type="text"
                      name="noBukuBaptis"
                      value={formData.noBukuBaptis}
                      onChange={handleInputChange}
                      className="edit-data-anggota-keluarga-user-input"
                      placeholder="Masukkan no. buku baptis"
                    />
                  </div>
                </div>
                <div className="edit-data-anggota-keluarga-user-row">
                  <div className="edit-data-anggota-keluarga-user-col">
                    <label className="edit-data-anggota-keluarga-user-label">Tanggal Baptis</label>
                    <input
                      type="date"
                      name="tanggalBaptis"
                      value={formData.tanggalBaptis}
                      onChange={handleInputChange}
                      className="edit-data-anggota-keluarga-user-input"
                    />
                  </div>
                  <div className="edit-data-anggota-keluarga-user-col">
                    <label className="edit-data-anggota-keluarga-user-label">Nama Paroki Asal Baptis</label>
                    <input
                      type="text"
                      name="namaParokiAsalBaptis"
                      value={formData.namaParokiAsalBaptis}
                      onChange={handleInputChange}
                      className="edit-data-anggota-keluarga-user-input"
                      placeholder="Masukkan nama paroki asal baptis"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Komuni */}
          {formData.isBaptis && (
            <div className="edit-data-anggota-keluarga-user-sacrament-section">
              <div className="edit-data-anggota-keluarga-user-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKomuni"
                  name="isKomuni"
                  checked={formData.isKomuni}
                  onChange={handleInputChange}
                  className="edit-data-anggota-keluarga-user-checkbox"
                />
                <label htmlFor="isKomuni" className="edit-data-anggota-keluarga-user-checkbox-label">
                  Apakah Sudah Menerima Sakramen Ekaristi / Komuni Pertama ?
                </label>
              </div>
              
              {formData.isKomuni && (
                <div className="edit-data-anggota-keluarga-user-sacrament-details">
                  <div className="edit-data-anggota-keluarga-user-row">
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">Tanggal Komuni</label>
                      <input
                        type="date"
                        name="tanggalKomuni"
                        value={formData.tanggalKomuni}
                        onChange={handleInputChange}
                        className="edit-data-anggota-keluarga-user-input"
                      />
                    </div>
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">Nama Paroki Asal Komuni Pertama</label>
                      <input
                        type="text"
                        name="namaParokiAsalKomuni"
                        value={formData.namaParokiAsalKomuni}
                        onChange={handleInputChange}
                        className="edit-data-anggota-keluarga-user-input"
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
            <div className="edit-data-anggota-keluarga-user-sacrament-section">
              <div className="edit-data-anggota-keluarga-user-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKrisma"
                  name="isKrisma"
                  checked={formData.isKrisma}
                  onChange={handleInputChange}
                  className="edit-data-anggota-keluarga-user-checkbox"
                />
                <label htmlFor="isKrisma" className="edit-data-anggota-keluarga-user-checkbox-label">
                  Apakah Sudah Menerima Sakramen Krisma / Penguatan ?
                </label>
              </div>
              
              {formData.isKrisma && (
                <div className="edit-data-anggota-keluarga-user-sacrament-details">
                  <div className="edit-data-anggota-keluarga-user-row">
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">Tanggal Krisma</label>
                      <input
                        type="date"
                        name="tanggalKrisma"
                        value={formData.tanggalKrisma}
                        onChange={handleInputChange}
                        className="edit-data-anggota-keluarga-user-input"
                      />
                    </div>
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">Nama Paroki Asal Krisma</label>
                      <input
                        type="text"
                        name="namaParokiAsalKrisma"
                        value={formData.namaParokiAsalKrisma}
                        onChange={handleInputChange}
                        className="edit-data-anggota-keluarga-user-input"
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
            <div className="edit-data-anggota-keluarga-user-sacrament-section">
              <div className="edit-data-anggota-keluarga-user-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isPernikahan"
                  name="isPernikahan"
                  checked={formData.isPernikahan}
                  onChange={handleInputChange}
                  className="edit-data-anggota-keluarga-user-checkbox"
                />
                <label htmlFor="isPernikahan" className="edit-data-anggota-keluarga-user-checkbox-label">
                  Apakah Sudah Menerima Sakramen Pernikahan ?
                </label>
              </div>
              
              {formData.isPernikahan && (
                <div className="edit-data-anggota-keluarga-user-sacrament-details">
                  <div className="edit-data-anggota-keluarga-user-row">
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">Tanggal Pernikahan</label>
                      <input
                        type="date"
                        name="tanggalPernikahan"
                        value={formData.tanggalPernikahan}
                        onChange={handleInputChange}
                        className="edit-data-anggota-keluarga-user-input"
                      />
                    </div>
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">Nomor Akta Pernikahan Gereja</label>
                      <input
                        type="text"
                        name="nomorAktaPernikahanGereja"
                        value={formData.nomorAktaPernikahanGereja}
                        onChange={handleInputChange}
                        className="edit-data-anggota-keluarga-user-input"
                        placeholder="Masukkan nomor akta pernikahan"
                      />
                    </div>
                  </div>
                  <div className="edit-data-anggota-keluarga-user-row">
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">Nama Paroki Asal Pernikahan</label>
                      <input
                        type="text"
                        name="namaParokiAsalPernikahan"
                        value={formData.namaParokiAsalPernikahan}
                        onChange={handleInputChange}
                        className="edit-data-anggota-keluarga-user-input"
                        placeholder="Masukkan nama paroki asal pernikahan"
                      />
                    </div>
                    <div className="edit-data-anggota-keluarga-user-col">
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
          <div className="edit-data-anggota-keluarga-user-card">
            <h2>Reset Password</h2>
            
            <div className="edit-data-anggota-keluarga-user-password-section">
              <div className="edit-data-anggota-keluarga-user-password-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isResetPassword"
                  checked={isResetPassword}
                  onChange={handlePasswordResetChange}
                  className="edit-data-anggota-keluarga-user-password-checkbox"
                />
                <label htmlFor="isResetPassword" className="edit-data-anggota-keluarga-user-password-checkbox-label">
                  Apakah Anda Ingin Mereset Password Anda ?
                </label>
              </div>
              
              {isResetPassword && (
                <div className="edit-data-anggota-keluarga-user-password-details">
                  <div className="edit-data-anggota-keluarga-user-row">
                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">
                        Password Baru <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        name="passwordBaru"
                        value={formData.passwordBaru}
                        onChange={handleInputChange}
                        className={`edit-data-anggota-keluarga-user-input ${errors.passwordBaru ? 'error' : ''}`}
                        placeholder="Masukkan password baru"
                      />
                      {errors.passwordBaru && <span className="error-message">{errors.passwordBaru}</span>}
                    </div>

                    <div className="edit-data-anggota-keluarga-user-col">
                      <label className="edit-data-anggota-keluarga-user-label">
                        Konfirmasi Password Baru <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        name="konfirmasiPasswordBaru"
                        value={formData.konfirmasiPasswordBaru}
                        onChange={handleInputChange}
                        className={`edit-data-anggota-keluarga-user-input ${errors.konfirmasiPasswordBaru ? 'error' : ''}`}
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
        <div className="edit-data-anggota-keluarga-user-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="edit-data-anggota-keluarga-user-btn-batal"
          >
            Batal
          </button>
          <button
            type="submit"
            className="edit-data-anggota-keluarga-user-btn-submit"
          >
            {isKepalaKeluarga ? 'Edit Data Kepala Keluarga' : 'Edit Data Anggota Keluarga'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDataAnggotaKeluarga;