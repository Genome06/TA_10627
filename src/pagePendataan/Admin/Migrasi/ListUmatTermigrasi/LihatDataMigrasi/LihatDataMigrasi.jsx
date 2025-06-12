import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './LihatDataMigrasi.css';

const LihatDataMigrasi = () => {
  const { id } = useParams(); // Get migrated user ID from URL
  const navigate = useNavigate();
  
  // State untuk data umat termigrasi
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data umat termigrasi yang sama dengan di ListUmatTermigrasi
  const dataUmatTermigrasi = {
    1: {
      id: 1,
      nama: "Maria Magdalena Santos",
      nik: "3471015508750001",
      nomorKK: "1234567890123456",
      jenisKelamin: "Perempuan",
      tempatLahir: "Jakarta",
      tanggalLahir: "1975-08-15",
      alamat: "Jl. Sudirman No. 123, Jakarta Pusat",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "S2 Manajemen",
      pekerjaan: "Direktur",
      nomorTelepon: "08111222333",
      statusDalamKeluarga: "Istri",
      namaAyah: "Yohanes Santos",
      namaIbu: "Elisabeth Santos",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B101001",
      noBukuBaptis: "BB101001",
      tanggalBaptis: "1975-09-15",
      namaParokiAsalBaptis: "Paroki Katedral Jakarta",
      isKomuni: true,
      tanggalKomuni: "1985-09-15",
      namaParokiAsalKomuni: "Paroki Katedral Jakarta",
      isKrisma: true,
      tanggalKrisma: "1990-09-15",
      namaParokiAsalKrisma: "Paroki Katedral Jakarta",
      isPernikahan: true,
      tanggalPernikahan: "2000-05-20",
      nomorAktaPernikahanGereja: "AP101001",
      namaParokiAsalPernikahan: "Paroki Katedral Jakarta",
      // Data migrasi
      jenisKepindahan: "Perpindahan Keuskupan",
      nomorKKBaru: "2345678901234567",
      statusDalamKeluargaBaru: "Istri"
    },
    2: {
      id: 2,
      nama: "Yohanes Baptista Sari",
      nik: "3471012211820002",
      nomorKK: "2345678901234567",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Surabaya",
      tanggalLahir: "1982-11-22",
      alamat: "Jl. Thamrin No. 456, Surabaya",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "S1 Teknik",
      pekerjaan: "Manager",
      nomorTelepon: "08222333444",
      statusDalamKeluarga: "Suami",
      namaAyah: "Petrus Sari",
      namaIbu: "Maria Sari",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B102001",
      noBukuBaptis: "BB102001",
      tanggalBaptis: "1982-12-22",
      namaParokiAsalBaptis: "Paroki Hati Kudus Surabaya",
      isKomuni: true,
      tanggalKomuni: "1992-12-22",
      namaParokiAsalKomuni: "Paroki Hati Kudus Surabaya",
      isKrisma: true,
      tanggalKrisma: "1997-12-22",
      namaParokiAsalKrisma: "Paroki Hati Kudus Surabaya",
      isPernikahan: true,
      tanggalPernikahan: "2005-08-15",
      nomorAktaPernikahanGereja: "AP102001",
      namaParokiAsalPernikahan: "Paroki Hati Kudus Surabaya",
      // Data migrasi
      jenisKepindahan: "Perpindahan KK",
      nomorKKBaru: "3456789012345678",
      statusDalamKeluargaBaru: "Suami"
    },
    3: {
      id: 3,
      nama: "Theresia Angela Putri",
      nik: "3471010304900003",
      nomorKK: "3456789012345678",
      jenisKelamin: "Perempuan",
      tempatLahir: "Bandung",
      tanggalLahir: "1990-04-03",
      alamat: "Jl. Asia Afrika No. 789, Bandung",
      paroki: "Paroki Pangkalan",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "S1 Ekonomi",
      pekerjaan: "Konsultan",
      nomorTelepon: "08333444555",
      statusDalamKeluarga: "Anak",
      namaAyah: "Antonius Putri",
      namaIbu: "Angela Putri",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B103001",
      noBukuBaptis: "BB103001",
      tanggalBaptis: "1990-05-03",
      namaParokiAsalBaptis: "Paroki St. Theresia Bandung",
      isKomuni: true,
      tanggalKomuni: "2000-05-03",
      namaParokiAsalKomuni: "Paroki St. Theresia Bandung",
      isKrisma: true,
      tanggalKrisma: "2005-05-03",
      namaParokiAsalKrisma: "Paroki St. Theresia Bandung",
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: "",
      // Data migrasi
      jenisKepindahan: "Perpindahan Agama",
      nomorKKBaru: "",
      statusDalamKeluargaBaru: ""
    },
    4: {
      id: 4,
      nama: "Fransiskus Xavier Budi",
      nik: "3471011709880004",
      nomorKK: "4567890123456789",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Medan",
      tanggalLahir: "1988-09-17",
      alamat: "Jl. Merdeka No. 321, Medan",
      paroki: "Paroki Baciro",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S1 Teknik Sipil",
      pekerjaan: "Insinyur",
      nomorTelepon: "08444555666",
      statusDalamKeluarga: "Suami",
      namaAyah: "Xavier Budi",
      namaIbu: "Fransiska Budi",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B104001",
      noBukuBaptis: "BB104001",
      tanggalBaptis: "1988-10-17",
      namaParokiAsalBaptis: "Paroki St. Fransiskus Medan",
      isKomuni: true,
      tanggalKomuni: "1998-10-17",
      namaParokiAsalKomuni: "Paroki St. Fransiskus Medan",
      isKrisma: true,
      tanggalKrisma: "2003-10-17",
      namaParokiAsalKrisma: "Paroki St. Fransiskus Medan",
      isPernikahan: true,
      tanggalPernikahan: "2010-06-12",
      nomorAktaPernikahanGereja: "AP104001",
      namaParokiAsalPernikahan: "Paroki St. Fransiskus Medan",
      // Data migrasi
      jenisKepindahan: "Perpindahan KK",
      nomorKKBaru: "5678901234567890",
      statusDalamKeluargaBaru: "Suami"
    },
    5: {
      id: 5,
      nama: "Katarina Elisabeth Dewi",
      nik: "3471010812950005",
      nomorKK: "5678901234567890",
      jenisKelamin: "Perempuan",
      tempatLahir: "Semarang",
      tanggalLahir: "1995-12-08",
      alamat: "Jl. Pemuda No. 654, Semarang",
      paroki: "Paroki Pangkalan",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "S1 Informatika",
      pekerjaan: "Software Engineer",
      nomorTelepon: "08555666777",
      statusDalamKeluarga: "Anak",
      namaAyah: "Elisabeth Dewi",
      namaIbu: "Katarina Dewi",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B105001",
      noBukuBaptis: "BB105001",
      tanggalBaptis: "1996-01-08",
      namaParokiAsalBaptis: "Paroki St. Katarina Semarang",
      isKomuni: true,
      tanggalKomuni: "2006-01-08",
      namaParokiAsalKomuni: "Paroki St. Katarina Semarang",
      isKrisma: true,
      tanggalKrisma: "2011-01-08",
      namaParokiAsalKrisma: "Paroki St. Katarina Semarang",
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: "",
      // Data migrasi
      jenisKepindahan: "Perpindahan Keuskupan",
      nomorKKBaru: "6789012345678901",
      statusDalamKeluargaBaru: "Anak"
    }
  };

  // Load data berdasarkan ID
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call - same timing as DataKeluarga
    setTimeout(() => {
      const data = dataUmatTermigrasi[id];
      if (data) {
        setUserData(data);
      } else {
        toast.error(`Data umat termigrasi dengan ID ${id} tidak ditemukan`);
        navigate('/pendataan/admin/list-umat-termigrasi');
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  // Handle kembali
  const handleKembali = () => {
    navigate('/pendataan/admin/list-umat-termigrasi');
  };

  // Format tanggal untuk display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Loading state - SAME AS DataKeluarga
  if (loading) {
    return (
      <div className="lihat-data-migrasi-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data migrasi...</p>
      </div>
    );
  }

  // Error state - SAME AS DataKeluarga structure
  if (!userData) {
    return (
      <div className="lihat-data-migrasi-error">
        <h2>Data migrasi tidak ditemukan</h2>
        <button onClick={handleKembali} className="lihat-data-migrasi-back-btn">
          Kembali ke List Umat Termigrasi
        </button>
      </div>
    );
  }

  return (
    <div className="lihat-data-migrasi">
      <div className="lihat-data-migrasi-header">
        <h1>Lihat Data Migrasi Umat</h1>
      </div>

      <div className="lihat-data-migrasi-content">
        {/* Data Umat Ingin Dimigrasi (Read Only) */}
        <div className="lihat-data-migrasi-card">
          <h2>Data Umat Sudah Dimigrasi (Read Only)</h2>
          
          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Nama Umat <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.nama}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
            
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                NIK <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.nik}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
          </div>

          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Nomor KK (Kartu Keluarga) <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.nomorKK}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
            
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                value={userData.jenisKelamin}
                className="lihat-data-migrasi-select"
                disabled
              >
                <option value={userData.jenisKelamin}>{userData.jenisKelamin}</option>
              </select>
            </div>
          </div>

          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                value={userData.alamat}
                className="lihat-data-migrasi-textarea"
                readOnly
                rows="3"
              />
            </div>
            
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Tempat Lahir <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.tempatLahir}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
          </div>

          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                value={userData.paroki}
                className="lihat-data-migrasi-select"
                disabled
              >
                <option value={userData.paroki}>{userData.paroki}</option>
              </select>
            </div>
            
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Tanggal Lahir <span className="required">*</span>
              </label>
              <input
                type="date"
                value={userData.tanggalLahir}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
          </div>

          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                value={userData.lingkungan}
                className="lihat-data-migrasi-select"
                disabled
              >
                <option value={userData.lingkungan}>{userData.lingkungan}</option>
              </select>
            </div>
            
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Pendidikan <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.pendidikan}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
          </div>

          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Pekerjaan <span className="required">*</span>
              </label>
              <select
                value={userData.pekerjaan}
                className="lihat-data-migrasi-select"
                disabled
              >
                <option value={userData.pekerjaan}>{userData.pekerjaan}</option>
              </select>
            </div>
            
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Nomor Telepon / Handphone <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.nomorTelepon}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
          </div>

          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Status Dalam Keluarga <span className="required">*</span>
              </label>
              <select
                value={userData.statusDalamKeluarga}
                className="lihat-data-migrasi-select"
                disabled
              >
                <option value={userData.statusDalamKeluarga}>{userData.statusDalamKeluarga}</option>
              </select>
            </div>
            
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Nama Ayah <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.namaAyah}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
          </div>

          <div className="lihat-data-migrasi-row">
            <div className="lihat-data-migrasi-col">
              <label className="lihat-data-migrasi-label">
                Nama Ibu <span className="required">*</span>
              </label>
              <input
                type="text"
                value={userData.namaIbu}
                className="lihat-data-migrasi-input"
                readOnly
              />
            </div>
            <div className="lihat-data-migrasi-col">
              {/* Empty column for spacing */}
            </div>
          </div>

          {/* Baptis Section */}
          <div className="lihat-data-migrasi-sacrament-section">
            <div className="lihat-data-migrasi-checkbox-wrapper">
              <input
                type="checkbox"
                checked={userData.isBaptis}
                className="lihat-data-migrasi-checkbox"
                disabled
              />
              <label className="lihat-data-migrasi-checkbox-label">
                Apakah Sudah Menerima Sakramen Baptis ?
              </label>
            </div>

            {userData.isBaptis && (
              <div className="lihat-data-migrasi-sacrament-details">
                <div className="lihat-data-migrasi-row">
                  <div className="lihat-data-migrasi-col">
                    <label className="lihat-data-migrasi-label">
                      No Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={userData.noBaptis}
                      className="lihat-data-migrasi-input"
                      readOnly
                    />
                  </div>
                  
                  <div className="lihat-data-migrasi-col">
                    <label className="lihat-data-migrasi-label">
                      No Buku Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={userData.noBukuBaptis}
                      className="lihat-data-migrasi-input"
                      readOnly
                    />
                  </div>
                </div>

                <div className="lihat-data-migrasi-row">
                  <div className="lihat-data-migrasi-col">
                    <label className="lihat-data-migrasi-label">
                      Tanggal Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      value={userData.tanggalBaptis}
                      className="lihat-data-migrasi-input"
                      readOnly
                    />
                  </div>
                  
                  <div className="lihat-data-migrasi-col">
                    <label className="lihat-data-migrasi-label">
                      Nama Paroki Asal Baptis <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={userData.namaParokiAsalBaptis}
                      className="lihat-data-migrasi-input"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Komuni Section */}
          {userData.isBaptis && (
            <div className="lihat-data-migrasi-sacrament-section">
              <div className="lihat-data-migrasi-checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={userData.isKomuni}
                  className="lihat-data-migrasi-checkbox"
                  disabled
                />
                <label className="lihat-data-migrasi-checkbox-label">
                  Apakah Sudah Menerima Sakramen Ekaristi / Komuni Pertama ?
                </label>
              </div>

              {userData.isKomuni && (
                <div className="lihat-data-migrasi-sacrament-details">
                  <div className="lihat-data-migrasi-row">
                    <div className="lihat-data-migrasi-col">
                      <label className="lihat-data-migrasi-label">
                        Tanggal Komuni <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        value={userData.tanggalKomuni}
                        className="lihat-data-migrasi-input"
                        readOnly
                      />
                    </div>
                    
                    <div className="lihat-data-migrasi-col">
                      <label className="lihat-data-migrasi-label">
                        Nama Paroki Asal Komuni Pertama <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={userData.namaParokiAsalKomuni}
                        className="lihat-data-migrasi-input"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Krisma Section */}
          {userData.isKomuni && (
            <div className="lihat-data-migrasi-sacrament-section">
              <div className="lihat-data-migrasi-checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={userData.isKrisma}
                  className="lihat-data-migrasi-checkbox"
                  disabled
                />
                <label className="lihat-data-migrasi-checkbox-label">
                  Apakah Sudah Menerima Sakramen Krisma / Penguatan ?
                </label>
              </div>

              {userData.isKrisma && (
                <div className="lihat-data-migrasi-sacrament-details">
                  <div className="lihat-data-migrasi-row">
                    <div className="lihat-data-migrasi-col">
                      <label className="lihat-data-migrasi-label">
                        Tanggal Krisma <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        value={userData.tanggalKrisma}
                        className="lihat-data-migrasi-input"
                        readOnly
                      />
                    </div>
                    
                    <div className="lihat-data-migrasi-col">
                      <label className="lihat-data-migrasi-label">
                        Nama Paroki Asal Krisma <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={userData.namaParokiAsalKrisma}
                        className="lihat-data-migrasi-input"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pernikahan Section */}
          {userData.isKrisma && (
            <div className="lihat-data-migrasi-sacrament-section">
              <div className="lihat-data-migrasi-checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={userData.isPernikahan}
                  className="lihat-data-migrasi-checkbox"
                  disabled
                />
                <label className="lihat-data-migrasi-checkbox-label">
                  Apakah Sudah Menerima Sakramen Pernikahan ?
                </label>
              </div>

              {userData.isPernikahan && (
                <div className="lihat-data-migrasi-sacrament-details">
                  <div className="lihat-data-migrasi-row">
                    <div className="lihat-data-migrasi-col">
                      <label className="lihat-data-migrasi-label">
                        Tanggal Pernikahan <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        value={userData.tanggalPernikahan}
                        className="lihat-data-migrasi-input"
                        readOnly
                      />
                    </div>
                    
                    <div className="lihat-data-migrasi-col">
                      <label className="lihat-data-migrasi-label">
                        Nomor Akta Pernikahan Gereja <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={userData.nomorAktaPernikahanGereja}
                        className="lihat-data-migrasi-input"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="lihat-data-migrasi-row">
                    <div className="lihat-data-migrasi-col">
                      <label className="lihat-data-migrasi-label">
                        Nama Paroki Asal Pernikahan <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={userData.namaParokiAsalPernikahan}
                        className="lihat-data-migrasi-input"
                        readOnly
                      />
                    </div>
                    <div className="lihat-data-migrasi-col">
                      {/* Empty column for spacing */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Lihat Data Migrasi Umat */}
        <div className="lihat-data-migrasi-card">
          <h2>Lihat Data Migrasi Umat</h2>
          
          {/* Status Badge */}
          <div className="lihat-data-migrasi-status-badge">
            <div className="lihat-data-migrasi-status-icon"></div>
            <span>Status: Sudah Migrasi</span>
          </div>

          <div className="lihat-data-migrasi-migration-section">
            <h3>Informasi Migrasi</h3>
            
            <div className="lihat-data-migrasi-row">
              <div className="lihat-data-migrasi-col">
                <label className="lihat-data-migrasi-label">
                  Jenis Perpindahan <span className="required">*</span>
                </label>
                <select
                  value={userData.jenisKepindahan}
                  className="lihat-data-migrasi-select"
                  disabled
                >
                  <option value={userData.jenisKepindahan}>{userData.jenisKepindahan}</option>
                </select>
              </div>
              
              <div className="lihat-data-migrasi-col">
                {userData.jenisKepindahan !== "Perpindahan Agama" && (
                  <>
                    <label className="lihat-data-migrasi-label">
                      Nomor KK (Kartu Keluarga) Yang Baru <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={userData.nomorKKBaru || ''}
                      className="lihat-data-migrasi-input"
                      readOnly
                    />
                  </>
                )}
              </div>
            </div>

            {userData.jenisKepindahan !== "Perpindahan Agama" && (
              <div className="lihat-data-migrasi-row">
                <div className="lihat-data-migrasi-col">
                  <label className="lihat-data-migrasi-label">
                    Status Dalam Keluarga <span className="required">*</span>
                  </label>
                  <select
                    value={userData.statusDalamKeluargaBaru}
                    className="lihat-data-migrasi-select"
                    disabled
                  >
                    <option value={userData.statusDalamKeluargaBaru}>{userData.statusDalamKeluargaBaru}</option>
                  </select>
                </div>
                <div className="lihat-data-migrasi-col">
                  {/* Empty column for spacing */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="lihat-data-migrasi-actions">
          <button
            type="button"
            onClick={handleKembali}
            className="lihat-data-migrasi-btn-kembali"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default LihatDataMigrasi;