import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './TambahKomunitas.css';

const TambahKomunitas = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    namaKomunitas: '',
    tanggalTerbentuk: '',
    paroki: ''
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Dropdown options berdasarkan gambar
  const dropdownOptions = {
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan']
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
      today.setHours(23, 59, 59, 999); // Set to end of today
      
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
        toast.success('Berhasil Menambahkan Data Komunitas Baru', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Navigate back to Komunitas page
        navigate('/pendataan/admin/komunitas-omk');
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
      namaKomunitas: '',
      tanggalTerbentuk: '',
      paroki: ''
    });
    setErrors({});
  };

  // Handle batal (kembali ke komunitas)
  const handleBatal = () => {
    navigate('/pendataan/admin/komunitas-omk');
  };

  return (
    <div className="tambah-komunitas">
      <div className="tambah-komunitas-header">
        <h1>Input Data Komunitas / OMK</h1>
      </div>

      <form onSubmit={handleSubmit} className="tambah-komunitas-form">
        {/* Input Data Komunitas */}
        <div className="tambah-komunitas-card">
          <h2>Input Data Komunitas / OMK</h2>
          
          {/* Nama Komunitas */}
          <div className="tambah-komunitas-row">
            <div className="tambah-komunitas-col">
              <label className="tambah-komunitas-label">
                Nama Komunitas <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaKomunitas"
                value={formData.namaKomunitas}
                onChange={handleInputChange}
                className={`tambah-komunitas-input ${errors.namaKomunitas ? 'error' : ''}`}
                placeholder="Nama Komunitas"
              />
              {errors.namaKomunitas && <span className="error-message">{errors.namaKomunitas}</span>}
            </div>
          </div>

          {/* Tanggal Terbentuk */}
          <div className="tambah-komunitas-row">
            <div className="tambah-komunitas-col">
              <label className="tambah-komunitas-label">
                Tanggal Terbentuk <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalTerbentuk"
                value={formData.tanggalTerbentuk}
                onChange={handleInputChange}
                className={`tambah-komunitas-input ${errors.tanggalTerbentuk ? 'error' : ''}`}
                max={new Date().toISOString().split('T')[0]} // Prevent future dates
              />
              {errors.tanggalTerbentuk && <span className="error-message">{errors.tanggalTerbentuk}</span>}
            </div>
          </div>
            
          {/* Paroki */}
          <div className="tambah-komunitas-row">
            <div className="tambah-komunitas-col">
              <label className="tambah-komunitas-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`tambah-komunitas-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="tambah-komunitas-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="tambah-komunitas-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="tambah-komunitas-btn-submit"
          >
            Simpan Data Komunitas
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahKomunitas;