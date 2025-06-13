import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './TambahTempatZiarah.css';

const TambahTempatZiarah = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    namaTempatZiarah: '',
    tanggalTerbentuk: '',
    alamat: '',
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
      'namaTempatZiarah', 'tanggalTerbentuk', 'alamat', 'paroki'
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
        toast.success('Berhasil Menambahkan Data Tempat Ziarah Baru', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Navigate back to Tempat Ziarah page
        navigate('/pendataan/admin/tempat-ziarah');
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
      namaTempatZiarah: '',
      tanggalTerbentuk: '',
      alamat: '',
      paroki: ''
    });
    setErrors({});
  };

  // Handle batal (kembali ke tempat ziarah)
  const handleBatal = () => {
    navigate('/pendataan/admin/tempat-ziarah');
  };

  return (
    <div className="tambah-tempat-ziarah">
      <div className="tambah-tempat-ziarah-header">
        <h1>Input Data Tempat Ziarah</h1>
      </div>

      <form onSubmit={handleSubmit} className="tambah-tempat-ziarah-form">
        {/* Input Data Tempat Ziarah */}
        <div className="tambah-tempat-ziarah-card">
          <h2>Input Data Tempat Ziarah</h2>
          
          <div className="tambah-tempat-ziarah-row">
            <div className="tambah-tempat-ziarah-col">
              <label className="tambah-tempat-ziarah-label">
                Nama Tempat Ziarah <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaTempatZiarah"
                value={formData.namaTempatZiarah}
                onChange={handleInputChange}
                className={`tambah-tempat-ziarah-input ${errors.namaTempatZiarah ? 'error' : ''}`}
                placeholder="Nama Tempat Ziarah"
              />
              {errors.namaTempatZiarah && <span className="error-message">{errors.namaTempatZiarah}</span>}
            </div>
            
            <div className="tambah-tempat-ziarah-col">
              <label className="tambah-tempat-ziarah-label">
                Tanggal Terbentuk <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalTerbentuk"
                value={formData.tanggalTerbentuk}
                onChange={handleInputChange}
                className={`tambah-tempat-ziarah-input ${errors.tanggalTerbentuk ? 'error' : ''}`}
                max={new Date().toISOString().split('T')[0]} // Prevent future dates
              />
              {errors.tanggalTerbentuk && <span className="error-message">{errors.tanggalTerbentuk}</span>}
            </div>
          </div>

          <div className="tambah-tempat-ziarah-row">
            <div className="tambah-tempat-ziarah-col">
              <label className="tambah-tempat-ziarah-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`tambah-tempat-ziarah-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Alamat"
                rows="4"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>
            
            <div className="tambah-tempat-ziarah-col">
              <label className="tambah-tempat-ziarah-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`tambah-tempat-ziarah-select ${errors.paroki ? 'error' : ''}`}
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
        <div className="tambah-tempat-ziarah-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="tambah-tempat-ziarah-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="tambah-tempat-ziarah-btn-submit"
          >
            Simpan Data Tempat Ziarah
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahTempatZiarah;