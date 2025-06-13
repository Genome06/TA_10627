import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditTempatZiarah.css';

const EditTempatZiarah = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Data tempat ziarah berdasarkan ID (sama dengan data di Tempatziarah.jsx)
  const tempatZiarahData = {
    1: {
      nama: "Gua Maria",
      tanggalTerbentuk: "1980-06-20",
      alamat: "Jl. Babarsari No. 100, Yogyakarta",
      paroki: "Paroki Babarsari"
    },
    2: {
      nama: "Museum Gereja",
      tanggalTerbentuk: "2002-06-21",
      alamat: "Jl. Malioboro No. 100, Yogyakarta",
      paroki: "Paroki Baciro"
    },
    3: {
      nama: "Gereja Tua Santo Petrus",
      tanggalTerbentuk: "1975-08-15",
      alamat: "Jl. Kaliurang Km 5, Yogyakarta",
      paroki: "Paroki Pangkalan"
    },
    4: {
      nama: "Kapel Santa Maria",
      tanggalTerbentuk: "1990-12-10",
      alamat: "Jl. Seturan Raya No. 25, Yogyakarta",
      paroki: "Paroki Babarsari"
    },
    5: {
      nama: "Monumen Kristus Raja",
      tanggalTerbentuk: "1985-03-25",
      alamat: "Jl. Baciro Kidul No. 50, Yogyakarta",
      paroki: "Paroki Baciro"
    },
    6: {
      nama: "Groto Lourdes",
      tanggalTerbentuk: "1992-02-14",
      alamat: "Jl. Pangkalan Raya No. 78, Yogyakarta",
      paroki: "Paroki Pangkalan"
    },
    7: {
      nama: "Makam Keramat Santo Fransiskus",
      tanggalTerbentuk: "1988-10-04",
      alamat: "Jl. Babarsari Tengah No. 33, Yogyakarta",
      paroki: "Paroki Babarsari"
    },
    8: {
      nama: "Kapel Adoration",
      tanggalTerbentuk: "1995-11-22",
      alamat: "Jl. Baciro Tengah No. 88, Yogyakarta",
      paroki: "Paroki Baciro"
    },
    9: {
      nama: "Taman Doa Maria",
      tanggalTerbentuk: "1999-04-30",
      alamat: "Jl. Pangkalan Utara No. 12, Yogyakarta",
      paroki: "Paroki Pangkalan"
    },
    10: {
      nama: "Salib Bukit",
      tanggalTerbentuk: "1983-09-12",
      alamat: "Jl. Babarsari Bukit No. 77, Yogyakarta",
      paroki: "Paroki Babarsari"
    }
  };
  
  // Form state
  const [formData, setFormData] = useState({
    namaTempatZiarah: '',
    tanggalTerbentuk: '',
    alamat: '',
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

  // Load data tempat ziarah saat component mount
  useEffect(() => {
    const loadTempatZiarahData = () => {
      const tempatZiarah = tempatZiarahData[id];
      
      if (tempatZiarah) {
        setFormData({
          namaTempatZiarah: tempatZiarah.nama,
          tanggalTerbentuk: tempatZiarah.tanggalTerbentuk,
          alamat: tempatZiarah.alamat,
          paroki: tempatZiarah.paroki
        });
      } else {
        toast.error('Data tempat ziarah tidak ditemukan', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate('/pendataan/admin/tempat-ziarah');
        return;
      }
      
      setLoading(false);
    };

    // Simulate loading delay
    setTimeout(loadTempatZiarahData, 500);
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
        toast.success('Berhasil Mengupdate Data Tempat Ziarah', {
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

  // Handle reset (kembali ke data original)
  const handleReset = () => {
    const tempatZiarah = tempatZiarahData[id];
    if (tempatZiarah) {
      setFormData({
        namaTempatZiarah: tempatZiarah.nama,
        tanggalTerbentuk: tempatZiarah.tanggalTerbentuk,
        alamat: tempatZiarah.alamat,
        paroki: tempatZiarah.paroki
      });
    }
    setErrors({});
  };

  // Handle batal (kembali ke tempat ziarah)
  const handleBatal = () => {
    navigate('/pendataan/admin/tempat-ziarah');
  };

  // Loading state
  if (loading) {
    return (
      <div className="edit-tempat-ziarah-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data tempat ziarah...</p>
      </div>
    );
  }

  return (
    <div className="edit-tempat-ziarah">
      <div className="edit-tempat-ziarah-header">
        <h1>Edit Data Tempat Ziarah</h1>
      </div>

      <form onSubmit={handleSubmit} className="edit-tempat-ziarah-form">
        {/* Edit Data Tempat Ziarah */}
        <div className="edit-tempat-ziarah-card">
          <h2>Edit Data Tempat Ziarah</h2>
          
          <div className="edit-tempat-ziarah-row">
            <div className="edit-tempat-ziarah-col">
              <label className="edit-tempat-ziarah-label">
                Nama Tempat Ziarah <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaTempatZiarah"
                value={formData.namaTempatZiarah}
                onChange={handleInputChange}
                className={`edit-tempat-ziarah-input ${errors.namaTempatZiarah ? 'error' : ''}`}
                placeholder="Nama Tempat Ziarah"
              />
              {errors.namaTempatZiarah && <span className="error-message">{errors.namaTempatZiarah}</span>}
            </div>
            
            <div className="edit-tempat-ziarah-col">
              <label className="edit-tempat-ziarah-label">
                Tanggal Terbentuk <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalTerbentuk"
                value={formData.tanggalTerbentuk}
                onChange={handleInputChange}
                className={`edit-tempat-ziarah-input ${errors.tanggalTerbentuk ? 'error' : ''}`}
                max={new Date().toISOString().split('T')[0]}
              />
              {errors.tanggalTerbentuk && <span className="error-message">{errors.tanggalTerbentuk}</span>}
            </div>
          </div>

          <div className="edit-tempat-ziarah-row">
            <div className="edit-tempat-ziarah-col">
              <label className="edit-tempat-ziarah-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`edit-tempat-ziarah-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Alamat"
                rows="4"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>
            
            <div className="edit-tempat-ziarah-col">
              <label className="edit-tempat-ziarah-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`edit-tempat-ziarah-select ${errors.paroki ? 'error' : ''}`}
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
        <div className="edit-tempat-ziarah-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="edit-tempat-ziarah-btn-batal"
          >
            Batal
          </button>
          
          <button
            type="submit"
            className="edit-tempat-ziarah-btn-submit"
          >
            Update Data Tempat Ziarah
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTempatZiarah;