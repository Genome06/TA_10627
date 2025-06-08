import React, { useState } from 'react';
import './Kontak.css';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
    asalParoki: '',
    noWa: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nama.trim()) errors.nama = "Nama wajib diisi";
    if (!formData.email.trim()) {
      errors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Format email tidak valid";
    }
    if (!formData.pesan.trim()) errors.pesan = "Pesan wajib diisi";
    if (!formData.asalParoki.trim()) errors.asalParoki = "Asal paroki wajib diisi";
    if (!formData.noWa.trim()) errors.noWa = "Nomor WA/HP wajib diisi";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setFormErrors({});

      // Simulasi pengiriman data
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          nama: '',
          email: '',
          pesan: '',
          asalParoki: '',
          noWa: ''
        });

        // Reset notifikasi sukses setelah 3 detik
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="kontak-page">
      <div className="kontak-container">
        
        {/* Form Kontak Sekretariat */}
        <div className="kontak-card">
          <h2 className="kontak-title">Kontak Sekretariat</h2>
          
          <form className="kontak-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama"
                  className={formErrors.nama ? "error" : ""}
                />
                {formErrors.nama && <span className="error-message">{formErrors.nama}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Alamat Email"
                  className={formErrors.email ? "error" : ""}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Pesan"
                rows="6"
                className={formErrors.pesan ? "error" : ""}
              ></textarea>
              {formErrors.pesan && <span className="error-message">{formErrors.pesan}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="asalParoki"
                value={formData.asalParoki}
                onChange={handleChange}
                placeholder="Asal Paroki"
                className={formErrors.asalParoki ? "error" : ""}
              />
              {formErrors.asalParoki && <span className="error-message">{formErrors.asalParoki}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="noWa"
                value={formData.noWa}
                onChange={handleChange}
                placeholder="Nomor WA Aktif/ HP Aktif"
                className={formErrors.noWa ? "error" : ""}
              />
              {formErrors.noWa && <span className="error-message">{formErrors.noWa}</span>}
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Mengirim...' : 'Kirim'}
              </button>
            </div>

            {submitSuccess && (
              <div className="success-message">
                Pesan Anda berhasil dikirim. Terima kasih!
              </div>
            )}
          </form>
        </div>

        {/* Lokasi Keuskupan */}
        <div className="kontak-card">
          <h2 className="kontak-title">Lokasi Keuskupan</h2>
          
          <div className="maps-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.563092302777!2d123.60375321148!3d-10.18198399222297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c56899bd8c1fcf3%3A0x5a4c254145ec137f!2sKeuskupan%20Agung%20Kupang!5e0!3m2!1sid!2sid!4v1685834897835!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Keuskupan Agung Kupang"
            ></iframe>
          </div>

          <div className="kontak-info">
            <div className="kontak-info-item">
              <FaMapMarkerAlt className="kontak-icon" />
              <div>
                <h3>Keuskupan Agung</h3>
                <p>Jl. Lakssidi Adi Sucipto, Bakunase, Kec. Kota Raja, Kota Kupang, Nusa Tenggara Tim. 85226, Indonesia</p>
              </div>
            </div>
            
            <div className="kontak-info-item">
              <FaPhone className="kontak-icon" />
              <div>
                <h3>Telepon</h3>
                <p>(0380) 820032</p>
              </div>
            </div>
            
            <div className="kontak-info-item">
              <FaEnvelope className="kontak-icon" />
              <div>
                <h3>Email</h3>
                <p>keuskupanagungkupang@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Kontak;