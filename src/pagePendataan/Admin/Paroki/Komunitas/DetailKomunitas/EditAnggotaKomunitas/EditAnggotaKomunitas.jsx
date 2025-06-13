import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditAnggotaKomunitas.css';

const EditAnggotaKomunitas = () => {
  const { id, anggotaId } = useParams(); // ID komunitas & ID anggota
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

  // Data anggota komunitas untuk edit (sama dengan data di DetailKomunitas)
  const anggotaData = {
    1: {
      id: 1,
      nama: "Adrianus William Jensen",
      nik: "3304011234567890",
      alamat: "Jl. Babarsari No. 123, Yogyakarta",
      jenisKelamin: "Laki-Laki",
      tempatLahir: "Jakarta",
      tanggalLahir: "1980-06-20",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      jabatan: "Ketua",
      pendidikan: "S1 Kedokteran",
      pekerjaan: "Dokter",
      nomorTelepon: "081234567890"
    },
    2: {
      id: 2,
      nama: "Edward Thomas Adi Kurniawan",
      nik: "3304011234567891",
      alamat: "Jl. Babarsari No. 124, Yogyakarta",
      jenisKelamin: "Laki-Laki",
      tempatLahir: "Bandung",
      tanggalLahir: "2002-06-21",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      jabatan: "Anggota",
      pendidikan: "S1 Pendidikan",
      pekerjaan: "Guru",
      nomorTelepon: "081234567891"
    },
    3: {
      id: 3,
      nama: "Eduardo Camavinga",
      nik: "3304011234567892",
      alamat: "Jl. Babarsari No. 125, Yogyakarta",
      jenisKelamin: "Laki-Laki",
      tempatLahir: "Semarang",
      tanggalLahir: "1990-08-23",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      jabatan: "Sekretaris",
      pendidikan: "S1 Administrasi",
      pekerjaan: "Pns",
      nomorTelepon: "081234567892"
    },
    4: {
      id: 4,
      nama: "Carvajal",
      nik: "3304011234567893",
      alamat: "Jl. Babarsari No. 126, Yogyakarta",
      jenisKelamin: "Laki-Laki",
      tempatLahir: "Solo",
      tanggalLahir: "2000-06-23",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      jabatan: "Anggota",
      pendidikan: "S1 Pemerintahan",
      pekerjaan: "Lurah",
      nomorTelepon: "081234567893"
    }
  };
  
  // Form state
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

  // Info states
  const [komunitasInfo, setKomunitasInfo] = useState(null);
  const [anggotaInfo, setAnggotaInfo] = useState(null);

  // Dropdown options
  const dropdownOptions = {
    jenisKelamin: ['Laki-Laki', 'Perempuan'],
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
    lingkungan: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan'],
    jabatan: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara', 'Anggota'],
    pekerjaan: ['Dokter', 'Guru', 'Pns', 'Lurah', 'Pegawai Swasta', 'Wiraswasta', 'Mahasiswa', 'Pelajar', 'Lainnya']
  };

  // Load data saat component mount
  useEffect(() => {
    const loadData = () => {
      const komunitas = komunitasData[id];
      const anggota = anggotaData[anggotaId];
      
      if (!komunitas) {
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

      if (!anggota) {
        toast.error('Data anggota tidak ditemukan', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate(`/pendataan/admin/komunitas-omk/detail/${id}`);
        return;
      }

      setKomunitasInfo(komunitas);
      setAnggotaInfo(anggota);

      // Pre-fill form dengan data existing
      setFormData({
        namaLengkap: anggota.nama,
        nik: anggota.nik,
        alamat: anggota.alamat,
        jenisKelamin: anggota.jenisKelamin,
        tempatLahir: anggota.tempatLahir,
        tanggalLahir: anggota.tanggalLahir,
        paroki: anggota.paroki,
        lingkungan: anggota.lingkungan,
        jabatan: anggota.jabatan,
        pendidikan: anggota.pendidikan,
        pekerjaan: anggota.pekerjaan,
        nomorTelepon: anggota.nomorTelepon
      });
      
      setLoading(false);
    };

    // Simulate loading delay
    setTimeout(loadData, 500);
  }, [id, anggotaId, navigate]);

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
        toast.success('Berhasil Mengupdate Data Anggota Komunitas', {
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

  // Handle reset (kembali ke data original)
  const handleReset = () => {
    if (anggotaInfo) {
      setFormData({
        namaLengkap: anggotaInfo.nama,
        nik: anggotaInfo.nik,
        alamat: anggotaInfo.alamat,
        jenisKelamin: anggotaInfo.jenisKelamin,
        tempatLahir: anggotaInfo.tempatLahir,
        tanggalLahir: anggotaInfo.tanggalLahir,
        paroki: anggotaInfo.paroki,
        lingkungan: anggotaInfo.lingkungan,
        jabatan: anggotaInfo.jabatan,
        pendidikan: anggotaInfo.pendidikan,
        pekerjaan: anggotaInfo.pekerjaan,
        nomorTelepon: anggotaInfo.nomorTelepon
      });
    }
    setErrors({});
  };

  // Handle batal (kembali ke detail komunitas)
  const handleBatal = () => {
    navigate(`/pendataan/admin/komunitas-omk/detail/${id}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="edit-anggota-komunitas-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data anggota komunitas...</p>
      </div>
    );
  }

  return (
    <div className="edit-anggota-komunitas">
      <div className="edit-anggota-komunitas-header">
        <h1>Edit Data Anggota Komunitas</h1>
      </div>

      <form onSubmit={handleSubmit} className="edit-anggota-komunitas-form">
        {/* Edit Data Anggota Komunitas */}
        <div className="edit-anggota-komunitas-card">
          <h2>Edit Data Anggota Komunitas {komunitasInfo ? komunitasInfo.nama : ''}</h2>
          
          {/* Row 1: Nama Lengkap & NIK */}
          <div className="edit-anggota-komunitas-row">
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Nama Lengkap <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-input ${errors.namaLengkap ? 'error' : ''}`}
                placeholder="Nama Lengkap"
              />
              {errors.namaLengkap && <span className="error-message">{errors.namaLengkap}</span>}
            </div>
            
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                NIK <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-input ${errors.nik ? 'error' : ''}`}
                placeholder="NIK"
                maxLength="16"
              />
              {errors.nik && <span className="error-message">{errors.nik}</span>}
            </div>
          </div>

          {/* Row 2: Alamat & Jenis Kelamin */}
          <div className="edit-anggota-komunitas-row">
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Alamat"
                rows="3"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>
            
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-select ${errors.jenisKelamin ? 'error' : ''}`}
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
          <div className="edit-anggota-komunitas-row">
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>
            
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Tempat Lahir <span className="required">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                value={formData.tempatLahir}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-input ${errors.tempatLahir ? 'error' : ''}`}
                placeholder="Tempat Lahir"
              />
              {errors.tempatLahir && <span className="error-message">{errors.tempatLahir}</span>}
            </div>
          </div>

          {/* Row 4: Lingkungan & Tanggal Lahir */}
          <div className="edit-anggota-komunitas-row">
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkungan"
                value={formData.lingkungan}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-select ${errors.lingkungan ? 'error' : ''}`}
              >
                <option value="">Lingkungan</option>
                {dropdownOptions.lingkungan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.lingkungan && <span className="error-message">{errors.lingkungan}</span>}
            </div>
            
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Tanggal Lahir <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-input ${errors.tanggalLahir ? 'error' : ''}`}
                max={new Date().toISOString().split('T')[0]}
              />
              {errors.tanggalLahir && <span className="error-message">{errors.tanggalLahir}</span>}
            </div>
          </div>

          {/* Row 5: Jabatan & Pendidikan */}
          <div className="edit-anggota-komunitas-row">
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Jabatan <span className="required">*</span>
              </label>
              <select
                name="jabatan"
                value={formData.jabatan}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-select ${errors.jabatan ? 'error' : ''}`}
              >
                <option value="">Jabatan</option>
                {dropdownOptions.jabatan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.jabatan && <span className="error-message">{errors.jabatan}</span>}
            </div>
            
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Pendidikan <span className="required">*</span>
              </label>
              <input
                type="text"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-input ${errors.pendidikan ? 'error' : ''}`}
                placeholder="Pendidikan"
              />
              {errors.pendidikan && <span className="error-message">{errors.pendidikan}</span>}
            </div>
          </div>

          {/* Row 6: Pekerjaan & Nomor Telepon */}
          <div className="edit-anggota-komunitas-row">
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Pekerjaan <span className="required">*</span>
              </label>
              <select
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-select ${errors.pekerjaan ? 'error' : ''}`}
              >
                <option value="">Jenis Pekerjaan</option>
                {dropdownOptions.pekerjaan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.pekerjaan && <span className="error-message">{errors.pekerjaan}</span>}
            </div>
            
            <div className="edit-anggota-komunitas-col">
              <label className="edit-anggota-komunitas-label">
                Nomor Telepon / Handphone <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleInputChange}
                className={`edit-anggota-komunitas-input ${errors.nomorTelepon ? 'error' : ''}`}
                placeholder="Nomor Telepon / Handphone"
              />
              {errors.nomorTelepon && <span className="error-message">{errors.nomorTelepon}</span>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="edit-anggota-komunitas-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="edit-anggota-komunitas-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="edit-anggota-komunitas-btn-submit"
          >
            Update Data Anggota Komunitas
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAnggotaKomunitas;