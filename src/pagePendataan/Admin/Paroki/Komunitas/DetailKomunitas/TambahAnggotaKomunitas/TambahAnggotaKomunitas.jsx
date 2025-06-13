import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './TambahAnggotaKomunitas.css';

const TambahAnggotaKomunitas = () => {
  const { id } = useParams(); // ID komunitas
  const navigate = useNavigate();
  
  // Data komunitas untuk menampilkan nama komunitas
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
  
  // Form state berdasarkan figma
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nik: '',
    alamat: '',
    jenisKelamin: '',
    tempatLahir: '',
    tanggalLahir: '',
    paroki: '',
    lingkungan: '',
    jabatan: '',
    pendidikan: '',
    pekerjaan: '',
    nomorTelepon: ''
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Loading state
  const [loading, setLoading] = useState(true);

  // Komunitas info
  const [komunitasInfo, setKomunitasInfo] = useState(null);

  // Dropdown options berdasarkan figma
  const dropdownOptions = {
    jenisKelamin: ['Laki-Laki', 'Perempuan'],
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
    lingkungan: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan'],
    jabatan: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara', 'Anggota'],
    pekerjaan: ['Dokter', 'Guru', 'Pns', 'Lurah', 'Pegawai Swasta', 'Wiraswasta', 'Mahasiswa', 'Pelajar', 'Lainnya']
  };

  // Load komunitas info saat component mount
  useEffect(() => {
    const loadKomunitasInfo = () => {
      const komunitas = komunitasData[id];
      
      if (komunitas) {
        setKomunitasInfo(komunitas);
      } else {
        toast.error('Data komunitas tidak ditemukan', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate('/pendataan/admin/komunitas-omk');
        return;
      }
      
      setLoading(false);
    };

    // Simulate loading delay
    setTimeout(loadKomunitasInfo, 500);
  }, [id, navigate]);

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

    // Required fields validation berdasarkan figma
    const requiredFields = [
      'namaLengkap', 'nik', 'alamat', 'jenisKelamin', 'tempatLahir', 
      'tanggalLahir', 'paroki', 'lingkungan', 'jabatan', 'pendidikan', 
      'pekerjaan', 'nomorTelepon'
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'Field ini wajib diisi';
      }
    });

    // NIK validation (16 digits)
    if (formData.nik && !/^\d{16}$/.test(formData.nik)) {
      newErrors.nik = 'NIK harus 16 digit angka';
    }

    // Phone number validation
    if (formData.nomorTelepon && !/^[0-9+\-\s()]+$/.test(formData.nomorTelepon)) {
      newErrors.nomorTelepon = 'Format nomor telepon tidak valid';
    }

    // Date validation - tidak boleh tanggal masa depan
    if (formData.tanggalLahir) {
      const selectedDate = new Date(formData.tanggalLahir);
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      
      if (selectedDate > today) {
        newErrors.tanggalLahir = 'Tanggal lahir tidak boleh lebih dari hari ini';
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
        toast.success('Berhasil Menambah Data Anggota Komunitas', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Navigate back to DetailKomunitas page
        navigate(`/pendataan/admin/komunitas-omk/detail/${id}`);
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
      nik: '',
      alamat: '',
      jenisKelamin: '',
      tempatLahir: '',
      tanggalLahir: '',
      paroki: '',
      lingkungan: '',
      jabatan: '',
      pendidikan: '',
      pekerjaan: '',
      nomorTelepon: ''
    });
    setErrors({});
  };

  // Handle batal (kembali ke detail komunitas)
  const handleBatal = () => {
    navigate(`/pendataan/admin/komunitas-omk/detail/${id}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="tambah-anggota-komunitas-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data komunitas...</p>
      </div>
    );
  }

  return (
    <div className="tambah-anggota-komunitas">
      <div className="tambah-anggota-komunitas-header">
        <h1>Input Data Anggota Komunitas</h1>
      </div>

      <form onSubmit={handleSubmit} className="tambah-anggota-komunitas-form">
        {/* Input Data Anggota Komunitas */}
        <div className="tambah-anggota-komunitas-card">
          <h2>Input Data Anggota Komunitas {komunitasInfo ? komunitasInfo.nama : ''}</h2>
          
          {/* Row 1: Nama Lengkap & NIK */}
          <div className="tambah-anggota-komunitas-row">
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Nama Lengkap <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-input ${errors.namaLengkap ? 'error' : ''}`}
                placeholder="Nama Lengkap"
              />
              {errors.namaLengkap && <span className="error-message">{errors.namaLengkap}</span>}
            </div>
            
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                NIK <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-input ${errors.nik ? 'error' : ''}`}
                placeholder="NIK"
                maxLength="16"
              />
              {errors.nik && <span className="error-message">{errors.nik}</span>}
            </div>
          </div>

          {/* Row 2: Alamat & Jenis Kelamin */}
          <div className="tambah-anggota-komunitas-row">
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Alamat"
                rows="3"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>
            
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-select ${errors.jenisKelamin ? 'error' : ''}`}
              >
                <option value="">Jenis Kelamin</option>
                {dropdownOptions.jenisKelamin.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.jenisKelamin && <span className="error-message">{errors.jenisKelamin}</span>}
            </div>
          </div>

          {/* Row 3: Paroki & Tempat Lahir */}
          <div className="tambah-anggota-komunitas-row">
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>
            
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Tempat Lahir <span className="required">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                value={formData.tempatLahir}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-input ${errors.tempatLahir ? 'error' : ''}`}
                placeholder="Tempat Lahir"
              />
              {errors.tempatLahir && <span className="error-message">{errors.tempatLahir}</span>}
            </div>
          </div>

          {/* Row 4: Lingkungan & Tanggal Lahir */}
          <div className="tambah-anggota-komunitas-row">
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkungan"
                value={formData.lingkungan}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-select ${errors.lingkungan ? 'error' : ''}`}
              >
                <option value="">Lingkungan</option>
                {dropdownOptions.lingkungan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.lingkungan && <span className="error-message">{errors.lingkungan}</span>}
            </div>
            
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Tanggal Lahir <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-input ${errors.tanggalLahir ? 'error' : ''}`}
                max={new Date().toISOString().split('T')[0]}
              />
              {errors.tanggalLahir && <span className="error-message">{errors.tanggalLahir}</span>}
            </div>
          </div>

          {/* Row 5: Jabatan & Pendidikan */}
          <div className="tambah-anggota-komunitas-row">
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Jabatan <span className="required">*</span>
              </label>
              <select
                name="jabatan"
                value={formData.jabatan}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-select ${errors.jabatan ? 'error' : ''}`}
              >
                <option value="">Jabatan</option>
                {dropdownOptions.jabatan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.jabatan && <span className="error-message">{errors.jabatan}</span>}
            </div>
            
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Pendidikan <span className="required">*</span>
              </label>
              <input
                type="text"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-input ${errors.pendidikan ? 'error' : ''}`}
                placeholder="Pendidikan"
              />
              {errors.pendidikan && <span className="error-message">{errors.pendidikan}</span>}
            </div>
          </div>

          {/* Row 6: Pekerjaan & Nomor Telepon */}
          <div className="tambah-anggota-komunitas-row">
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Pekerjaan <span className="required">*</span>
              </label>
              <select
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-select ${errors.pekerjaan ? 'error' : ''}`}
              >
                <option value="">Jenis Pekerjaan</option>
                {dropdownOptions.pekerjaan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.pekerjaan && <span className="error-message">{errors.pekerjaan}</span>}
            </div>
            
            <div className="tambah-anggota-komunitas-col">
              <label className="tambah-anggota-komunitas-label">
                Nomor Telepon / Handphone <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleInputChange}
                className={`tambah-anggota-komunitas-input ${errors.nomorTelepon ? 'error' : ''}`}
                placeholder="Nomor Telepon / Handphone"
              />
              {errors.nomorTelepon && <span className="error-message">{errors.nomorTelepon}</span>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="tambah-anggota-komunitas-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="tambah-anggota-komunitas-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="tambah-anggota-komunitas-btn-submit"
          >
            Simpan Data Anggota Komunitas
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahAnggotaKomunitas;