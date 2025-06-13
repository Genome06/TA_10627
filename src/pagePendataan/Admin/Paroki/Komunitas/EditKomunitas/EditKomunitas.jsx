import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditKomunitas.css';

const EditKomunitas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Data komunitas berdasarkan ID (sama dengan DetailKomunitas)
  const komunitasData = {
    1: { nama: "OMK", ketua: "Eduard", tanggalTerbentuk: "1980-06-20", paroki: "Paroki Babarsari" },
    2: { nama: "Lektor", ketua: "Rival", tanggalTerbentuk: "2002-06-21", paroki: "Paroki Baciro" },
    3: { nama: "Pemazmur", ketua: "Edi", tanggalTerbentuk: "1990-08-23", paroki: "Paroki Pangkalan" },
    4: { nama: "Paduan Suara", ketua: "Maria", tanggalTerbentuk: "1985-03-15", paroki: "Paroki Babarsari" },
    5: { nama: "Prodiakon", ketua: "Antonius", tanggalTerbentuk: "1992-12-10", paroki: "Paroki Baciro" },
    6: { nama: "Misdinar", ketua: "Theresia", tanggalTerbentuk: "1995-11-22", paroki: "Paroki Pangkalan" },
    7: { nama: "Karismatik", ketua: "Fransiskus", tanggalTerbentuk: "1988-10-04", paroki: "Paroki Babarsari" },
    8: { nama: "Wanita Katolik", ketua: "Yohanes", tanggalTerbentuk: "1999-04-30", paroki: "Paroki Baciro" },
    9: { nama: "Pria Katolik", ketua: "Stefanus", tanggalTerbentuk: "1983-09-12", paroki: "Paroki Pangkalan" },
    10: { nama: "Remaja Katolik", ketua: "Bernadette", tanggalTerbentuk: "1997-07-18", paroki: "Paroki Babarsari" }
  };
  
  // Form state
  const [formData, setFormData] = useState({
    namaKomunitas: '',
    tanggalTerbentuk: '',
    paroki: ''
  });

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [errors, setErrors] = useState({});

  // Dropdown options
  const dropdownOptions = {
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan']
  };

  // Load data komunitas saat component mount
  useEffect(() => {
    const loadKomunitasData = () => {
      const komunitas = komunitasData[id];
      
      if (komunitas) {
        setFormData({
          namaKomunitas: komunitas.nama,
          tanggalTerbentuk: komunitas.tanggalTerbentuk,
          paroki: komunitas.paroki
        });
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
    setTimeout(loadKomunitasData, 500);
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

    // Required fields validation
    const requiredFields = [
      'namaKomunitas', 'tanggalTerbentuk', 'paroki'
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'Field ini wajib diisi';
      }
    });

    // Date validation - tidak boleh tanggal masa depan
    if (formData.tanggalTerbentuk) {
      const selectedDate = new Date(formData.tanggalTerbentuk);
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      
      if (selectedDate > today) {
        newErrors.tanggalTerbentuk = 'Tanggal tidak boleh lebih dari hari ini';
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
        toast.success('Berhasil Mengupdate Data Komunitas', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Navigate back to DetailKomunitas page
        navigate(`/pendataan/admin/komunitas-omk`);
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
    const komunitas = komunitasData[id];
    if (komunitas) {
      setFormData({
        namaKomunitas: komunitas.nama,
        tanggalTerbentuk: komunitas.tanggalTerbentuk,
        paroki: komunitas.paroki
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
      <div className="edit-komunitas-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data komunitas...</p>
      </div>
    );
  }

  return (
    <div className="edit-komunitas">
      <div className="edit-komunitas-header">
        <h1>Edit Data Komunitas / OMK</h1>
      </div>

      <form onSubmit={handleSubmit} className="edit-komunitas-form">
        {/* Edit Data Komunitas */}
        <div className="edit-komunitas-card">
          <h2>Edit Data Komunitas / OMK</h2>
          
          {/* Nama Komunitas */}
          <div className="edit-komunitas-row">
            <div className="edit-komunitas-col">
              <label className="edit-komunitas-label">
                Nama Komunitas <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaKomunitas"
                value={formData.namaKomunitas}
                onChange={handleInputChange}
                className={`edit-komunitas-input ${errors.namaKomunitas ? 'error' : ''}`}
                placeholder="Nama Komunitas"
              />
              {errors.namaKomunitas && <span className="error-message">{errors.namaKomunitas}</span>}
            </div>
          </div>

          {/* Tanggal Terbentuk */}
          <div className="edit-komunitas-row">
            <div className="edit-komunitas-col">
              <label className="edit-komunitas-label">
                Tanggal Terbentuk <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalTerbentuk"
                value={formData.tanggalTerbentuk}
                onChange={handleInputChange}
                className={`edit-komunitas-input ${errors.tanggalTerbentuk ? 'error' : ''}`}
                max={new Date().toISOString().split('T')[0]}
              />
              {errors.tanggalTerbentuk && <span className="error-message">{errors.tanggalTerbentuk}</span>}
            </div>
          </div>
            
          {/* Paroki */}
          <div className="edit-komunitas-row">
            <div className="edit-komunitas-col">
              <label className="edit-komunitas-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`edit-komunitas-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Pilih Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="edit-komunitas-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="edit-komunitas-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="edit-komunitas-btn-submit"
          >
            Update Data Komunitas
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditKomunitas;