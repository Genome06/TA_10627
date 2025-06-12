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

  // Data umat termigrasi yang lengkap sesuai dengan ListUmatTermigrasi (10 data)
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
      statusDalamKeluargaBaru: "Istri",
      // Data untuk perpindahan keuskupan
      keuskupan: "Keuskupan Semarang",
      alamatBaru: "Jl. Pandanaran No. 45, Semarang Tengah",
      parokiBaru: "Paroki Hati Kudus Semarang",
      lingkunganBaru: "Lingkungan Santo Yosef",
      tanggalPindahKeuskupan: "2024-01-15"
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
      agamaBaru: "Islam",
      tanggalPindahAgama: "2024-02-20"
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
      statusDalamKeluargaBaru: "Anak",
      // Data untuk perpindahan keuskupan
      keuskupan: "Keuskupan Surabaya",
      alamatBaru: "Jl. Darmo Permai No. 123, Surabaya",
      parokiBaru: "Paroki Santo Fransiskus Surabaya",
      lingkunganBaru: "Lingkungan Santa Maria",
      tanggalPindahKeuskupan: "2024-03-20"
    },
    6: {
      id: 6,
      nama: "Antonius Paulus Wijaya",
      nik: "3471012501780006",
      nomorKK: "6789012345678902",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Makassar",
      tanggalLahir: "1978-01-25",
      alamat: "Jl. Veteran No. 987, Makassar",
      paroki: "Paroki Babarsari",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "D3 Penerbangan",
      pekerjaan: "Pilot",
      nomorTelepon: "08666777888",
      statusDalamKeluarga: "Suami",
      namaAyah: "Paulus Wijaya",
      namaIbu: "Antonina Wijaya",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B106001",
      noBukuBaptis: "BB106001",
      tanggalBaptis: "1978-02-25",
      namaParokiAsalBaptis: "Paroki St. Antonius Makassar",
      isKomuni: true,
      tanggalKomuni: "1988-02-25",
      namaParokiAsalKomuni: "Paroki St. Antonius Makassar",
      isKrisma: true,
      tanggalKrisma: "1993-02-25",
      namaParokiAsalKrisma: "Paroki St. Antonius Makassar",
      isPernikahan: true,
      tanggalPernikahan: "2003-07-10",
      nomorAktaPernikahanGereja: "AP106001",
      namaParokiAsalPernikahan: "Paroki St. Antonius Makassar",
      // Data migrasi
      jenisKepindahan: "Perpindahan Agama",
      agamaBaru: "Protestan",
      tanggalPindahAgama: "2024-03-10"
    },
    7: {
      id: 7,
      nama: "Monica Kristina Lestari",
      nik: "3471011406850007",
      nomorKK: "7890123456789013",
      jenisKelamin: "Perempuan",
      tempatLahir: "Denpasar",
      tanggalLahir: "1985-06-14",
      alamat: "Jl. Sunset Road No. 456, Denpasar",
      paroki: "Paroki Baciro",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S1 Farmasi",
      pekerjaan: "Farmasi",
      nomorTelepon: "08777888999",
      statusDalamKeluarga: "Istri",
      namaAyah: "Kristinus Lestari",
      namaIbu: "Monica Lestari",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B107001",
      noBukuBaptis: "BB107001",
      tanggalBaptis: "1985-07-14",
      namaParokiAsalBaptis: "Paroki St. Monica Denpasar",
      isKomuni: true,
      tanggalKomuni: "1995-07-14",
      namaParokiAsalKomuni: "Paroki St. Monica Denpasar",
      isKrisma: true,
      tanggalKrisma: "2000-07-14",
      namaParokiAsalKrisma: "Paroki St. Monica Denpasar",
      isPernikahan: true,
      tanggalPernikahan: "2008-12-06",
      nomorAktaPernikahanGereja: "AP107001",
      namaParokiAsalPernikahan: "Paroki St. Monica Denpasar",
      // Data migrasi
      jenisKepindahan: "Perpindahan KK",
      nomorKKBaru: "8901234567890124",
      statusDalamKeluargaBaru: "Istri"
    },
    8: {
      id: 8,
      nama: "Stefanus Martinus Adi",
      nik: "3471012910920008",
      nomorKK: "8901234567890125",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Palembang",
      tanggalLahir: "1992-10-29",
      alamat: "Jl. Sudirman No. 789, Palembang",
      paroki: "Paroki Pangkalan",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "S1 Arsitektur",
      pekerjaan: "Arsitek",
      nomorTelepon: "08888999000",
      statusDalamKeluarga: "Anak",
      namaAyah: "Martinus Adi",
      namaIbu: "Stefania Adi",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B108001",
      noBukuBaptis: "BB108001",
      tanggalBaptis: "1992-11-29",
      namaParokiAsalBaptis: "Paroki St. Stefanus Palembang",
      isKomuni: true,
      tanggalKomuni: "2002-11-29",
      namaParokiAsalKomuni: "Paroki St. Stefanus Palembang",
      isKrisma: true,
      tanggalKrisma: "2007-11-29",
      namaParokiAsalKrisma: "Paroki St. Stefanus Palembang",
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: "",
      // Data migrasi
      jenisKepindahan: "Perpindahan Keuskupan",
      nomorKKBaru: "9012345678901236",
      statusDalamKeluargaBaru: "Anak",
      // Data untuk perpindahan keuskupan
      keuskupan: "Keuskupan Bandung",
      alamatBaru: "Jl. Merdeka No. 789, Bandung",
      parokiBaru: "Paroki Santo Stefanus Bandung",
      lingkunganBaru: "Lingkungan Santo Petrus",
      tanggalPindahKeuskupan: "2024-04-10"
    },
    9: {
      id: 9,
      nama: "Agatha Veronica Sari",
      nik: "3471011103870009",
      nomorKK: "9012345678901237",
      jenisKelamin: "Perempuan",
      tempatLahir: "Balikpapan",
      tanggalLahir: "1987-03-11",
      alamat: "Jl. Ahmad Yani No. 321, Balikpapan",
      paroki: "Paroki Baciro",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S1 Hukum",
      pekerjaan: "Notaris",
      nomorTelepon: "08999000111",
      statusDalamKeluarga: "Istri",
      namaAyah: "Veronius Sari",
      namaIbu: "Agatha Sari",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B109001",
      noBukuBaptis: "BB109001",
      tanggalBaptis: "1987-04-11",
      namaParokiAsalBaptis: "Paroki St. Agatha Balikpapan",
      isKomuni: true,
      tanggalKomuni: "1997-04-11",
      namaParokiAsalKomuni: "Paroki St. Agatha Balikpapan",
      isKrisma: true,
      tanggalKrisma: "2002-04-11",
      namaParokiAsalKrisma: "Paroki St. Agatha Balikpapan",
      isPernikahan: true,
      tanggalPernikahan: "2010-09-18",
      nomorAktaPernikahanGereja: "AP109001",
      namaParokiAsalPernikahan: "Paroki St. Agatha Balikpapan",
      // Data migrasi
      jenisKepindahan: "Perpindahan Agama",
      agamaBaru: "Hindu",
      tanggalPindahAgama: "2024-04-05"
    },
    10: {
      id: 10,
      nama: "Albertus Thomas Kurnia",
      nik: "3471010707930010",
      nomorKK: "0123456789012348",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Manado",
      tanggalLahir: "1993-07-07",
      alamat: "Jl. Sam Ratulangi No. 654, Manado",
      paroki: "Paroki Pangkalan",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "D3 Multimedia",
      pekerjaan: "Fotografer",
      nomorTelepon: "08000111222",
      statusDalamKeluarga: "Anak",
      namaAyah: "Thomas Kurnia",
      namaIbu: "Alberta Kurnia",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B110001",
      noBukuBaptis: "BB110001",
      tanggalBaptis: "1993-08-07",
      namaParokiAsalBaptis: "Paroki St. Albertus Manado",
      isKomuni: true,
      tanggalKomuni: "2003-08-07",
      namaParokiAsalKomuni: "Paroki St. Albertus Manado",
      isKrisma: true,
      tanggalKrisma: "2008-08-07",
      namaParokiAsalKrisma: "Paroki St. Albertus Manado",
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: "",
      // Data migrasi
      jenisKepindahan: "Perpindahan KK",
      nomorKKBaru: "1234567890123459",
      statusDalamKeluargaBaru: "Anak"
    }
  };

  // Load data berdasarkan ID
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
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

  // Loading state
  if (loading) {
    return (
      <div className="lihat-data-migrasi-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data migrasi...</p>
      </div>
    );
  }

  // Error state
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

  // Debug log untuk melihat data
  console.log('UserData:', userData);
  console.log('Jenis Kepindahan:', userData.jenisKepindahan);

  return (
    <div className="lihat-data-migrasi">
      <div className="lihat-data-migrasi-header">
        <h1>Lihat Data Migrasi Umat</h1>
      </div>

      <div className="lihat-data-migrasi-content">
        {/* Data Umat Sudah Dimigrasi (Read Only) */}
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

        {/* Lihat Data Migrasi Umat - SESUAI DESAIN FIGMA */}
        <div className="lihat-data-migrasi-card">
          <h2>Lihat Data Migrasi Umat</h2>
          
          {/* Status Badge */}
          <div className="lihat-data-migrasi-status-badge">
            <div className="lihat-data-migrasi-status-icon"></div>
            <span>Status: Sudah Migrasi</span>
          </div>

          <div className="lihat-data-migrasi-migration-section">
            <h3>Informasi Migrasi</h3>
            
            {/* Jenis Perpindahan - Selalu ditampilkan pertama */}
            <div className="lihat-data-migrasi-form-group">
              <label className="lihat-data-migrasi-label">
                Jenis Perpindahan <span className="required">*</span>
              </label>
              <select
                value={userData.jenisKepindahan}
                className="lihat-data-migrasi-select-fullwidth"
                disabled
              >
                <option value={userData.jenisKepindahan}>{userData.jenisKepindahan}</option>
              </select>
            </div>

            {/* CONDITIONAL RENDERING BERDASARKAN JENIS KEPINDAHAN */}
            
            {/* 1. PERPINDAHAN AGAMA - Layout Vertikal Sesuai Figma */}
            {userData.jenisKepindahan === "Perpindahan Agama" && (
              <>
                <div className="lihat-data-migrasi-form-group">
                  <label className="lihat-data-migrasi-label">
                    Agama Baru Yang Dianut <span className="required">*</span>
                  </label>
                  <select
                    value={userData.agamaBaru || ""}
                    className="lihat-data-migrasi-select-fullwidth"
                    disabled
                  >
                    <option value={userData.agamaBaru || ""}>
                      {userData.agamaBaru || "Tidak ada data"}
                    </option>
                  </select>
                </div>

                <div className="lihat-data-migrasi-form-group">
                  <label className="lihat-data-migrasi-label">
                    Tanggal Pindah Agama <span className="required">*</span>
                  </label>
                  <div className="lihat-data-migrasi-date-wrapper">
                    <input
                      type="date"
                      value={userData.tanggalPindahAgama || ""}
                      className="lihat-data-migrasi-date-input"
                      readOnly
                    />
                  </div>
                </div>
              </>
            )}

            {/* 2. PERPINDAHAN KK - Layout Horizontal Sesuai Figma */}
            {userData.jenisKepindahan === "Perpindahan KK" && (
              <div className="lihat-data-migrasi-form-group-horizontal">
                <div className="lihat-data-migrasi-form-group">
                  <label className="lihat-data-migrasi-label">
                    Nomor KK (Kartu Keluarga) Yang Baru <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={userData.nomorKKBaru || ''}
                    className="lihat-data-migrasi-input-fullwidth"
                    readOnly
                  />
                </div>
                
                <div className="lihat-data-migrasi-form-group">
                  <label className="lihat-data-migrasi-label">
                    Status Dalam Keluarga <span className="required">*</span>
                  </label>
                  <select
                    value={userData.statusDalamKeluargaBaru || ""}
                    className="lihat-data-migrasi-select-fullwidth"
                    disabled
                  >
                    <option value={userData.statusDalamKeluargaBaru || ""}>
                      {userData.statusDalamKeluargaBaru || "Tidak ada data"}
                    </option>
                  </select>
                </div>
              </div>
            )}

            {/* 3. PERPINDAHAN KEUSKUPAN - Layout Vertikal Sesuai Figma */}
            {userData.jenisKepindahan === "Perpindahan Keuskupan" && (
              <>
                <div className="lihat-data-migrasi-form-group-horizontal">
                  <div className="lihat-data-migrasi-form-group">
                    <label className="lihat-data-migrasi-label">
                      Keuskupan <span className="required">*</span>
                    </label>
                    <select
                      value={userData.keuskupan || ""}
                      className="lihat-data-migrasi-select-fullwidth"
                      disabled
                    >
                      <option value={userData.keuskupan || ""}>
                        {userData.keuskupan || "Tidak ada data"}
                      </option>
                    </select>
                  </div>
                  
                  <div className="lihat-data-migrasi-form-group">
                    <label className="lihat-data-migrasi-label">
                      Alamat <span className="required">*</span>
                    </label>
                    <textarea
                      value={userData.alamatBaru || ""}
                      className="lihat-data-migrasi-textarea-fullwidth"
                      readOnly
                      rows="3"
                    />
                  </div>
                </div>

                <div className="lihat-data-migrasi-form-group-horizontal">
                  <div className="lihat-data-migrasi-form-group">
                    <label className="lihat-data-migrasi-label">
                      Paroki <span className="required">*</span>
                    </label>
                    <select
                      value={userData.parokiBaru || ""}
                      className="lihat-data-migrasi-select-fullwidth"
                      disabled
                    >
                      <option value={userData.parokiBaru || ""}>
                        {userData.parokiBaru || "Tidak ada data"}
                      </option>
                    </select>
                  </div>
                  
                  <div className="lihat-data-migrasi-form-group">
                    <label className="lihat-data-migrasi-label">
                      Lingkungan <span className="required">*</span>
                    </label>
                    <select
                      value={userData.lingkunganBaru || ""}
                      className="lihat-data-migrasi-select-fullwidth"
                      disabled
                    >
                      <option value={userData.lingkunganBaru || ""}>
                        {userData.lingkunganBaru || "Tidak ada data"}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="lihat-data-migrasi-form-group">
                  <label className="lihat-data-migrasi-label">
                    Tanggal Pindah Keuskupan <span className="required">*</span>
                  </label>
                  <div className="lihat-data-migrasi-date-wrapper">
                    <input
                      type="date"
                      value={userData.tanggalPindahKeuskupan || ""}
                      className="lihat-data-migrasi-date-input"
                      readOnly
                    />
                  </div>
                </div>
              </>
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