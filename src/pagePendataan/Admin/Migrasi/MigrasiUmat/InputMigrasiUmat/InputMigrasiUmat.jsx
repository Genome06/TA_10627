import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './InputMigrasiUmat.css';

const InputMigrasiUmat = () => {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  
  // State for user data (read-only)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for migration form data
  const [migrasiData, setMigrasiData] = useState({
    jenisKepindahan: '',
    nomorKKBaru: '',
    statusDalamKeluargaBaru: '',
    agamaBaru: '',
    tanggalPindahAgama: '',
    keuskupan: '',
    alamatBaru: '',
    parokiBaru: '',
    lingkunganBaru: '',
    tanggalPindahKeuskupan: ''
  });

  // Options for dropdown menus
  const statusKeluargaOptions = ["Kepala Keluarga", "Istri", "Anak", "Saudara", "Orang Tua"];
  const agamaOptions = ["Islam", "Protestan", "Hindu", "Buddha", "Konghucu"];
  const keuskupanOptions = ["Keuskupan Agung Jakarta", "Keuskupan Bandung", "Keuskupan Bogor", "Keuskupan Surabaya", "Keuskupan Semarang"];
  const parokiOptions = {
    "Keuskupan Agung Jakarta": ["Paroki Katedral Jakarta", "Paroki Santo Yakobus"],
    "Keuskupan Bandung": ["Paroki Santo Petrus Bandung", "Paroki Santo Paulus Bandung"],
    "Keuskupan Bogor": ["Paroki Santo Fransiskus Bogor", "Paroki Santa Maria Bogor"],
    "Keuskupan Surabaya": ["Paroki Santo Fransiskus Surabaya", "Paroki Santa Maria Surabaya"],
    "Keuskupan Semarang": ["Paroki Hati Kudus Semarang", "Paroki Santo Paulus Semarang"]
  };
  const lingkunganOptions = {
    "Paroki Katedral Jakarta": ["Lingkungan Santo Petrus", "Lingkungan Santo Paulus"],
    "Paroki Santo Yakobus": ["Lingkungan Santo Andreas", "Lingkungan Santo Yohanes"],
    "Paroki Santo Petrus Bandung": ["Lingkungan Santo Matius", "Lingkungan Santo Lukas"],
    "Paroki Santo Paulus Bandung": ["Lingkungan Santo Filipus", "Lingkungan Santo Bartolomeus"],
    "Paroki Santo Fransiskus Bogor": ["Lingkungan Santo Tomas", "Lingkungan Santo Yakobus"],
    "Paroki Santa Maria Bogor": ["Lingkungan Santo Simon", "Lingkungan Santo Yudas"],
    "Paroki Santo Fransiskus Surabaya": ["Lingkungan Santo Matius", "Lingkungan Santo Markus"],
    "Paroki Santa Maria Surabaya": ["Lingkungan Santa Monika", "Lingkungan Santa Theresia"],
    "Paroki Hati Kudus Semarang": ["Lingkungan Santo Yosef", "Lingkungan Santa Anna"],
    "Paroki Santo Paulus Semarang": ["Lingkungan Santo Petrus", "Lingkungan Santo Stefanus"]
  };

  // Data umat lengkap sesuai dengan yang ada di MigrasiUmat (15 data)
  const dataUmatList = [
    {
      id: 1,
      nama: "Adrianus William Jensen",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1980-06-20",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Dokter",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471015508800001",
      nomorKK: "3471015508800001001",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Jakarta",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "S1 Teknik",
      nomorTelepon: "081234567890",
      statusDalamKeluarga: "Kepala Keluarga",
      namaAyah: "Yohannes Jensen",
      namaIbu: "Maria Jensen",
      // Sakramen data
      isBaptis: true,
      noBaptis: "BPT20061980001",
      noBukuBaptis: "BB1980001",
      tanggalBaptis: "1980-07-15",
      namaParokiAsalBaptis: "Paroki Katedral Jakarta",
      isKomuni: true,
      tanggalKomuni: "1988-05-20",
      namaParokiAsalKomuni: "Paroki Katedral Jakarta",
      isKrisma: true,
      tanggalKrisma: "1995-06-18",
      namaParokiAsalKrisma: "Paroki Katedral Jakarta",
      isPernikahan: true,
      tanggalPernikahan: "2005-10-25",
      nomorAktaPernikahanGereja: "APG2005001",
      namaParokiAsalPernikahan: "Paroki Babarsari"
    },
    {
      id: 2,
      nama: "Felisa Thanti Adl Kurniawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "2002-06-21",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Guru",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471015508020001",
      nomorKK: "3471015508020001001",
      jenisKelamin: "Perempuan",
      tempatLahir: "Bandung",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "S1 Pendidikan",
      nomorTelepon: "081345678901",
      statusDalamKeluarga: "Istri",
      namaAyah: "Andreas Kurniawan",
      namaIbu: "Lucia Kurniawan",
      // Sakramen data
      isBaptis: true,
      noBaptis: "BPT21062002001",
      noBukuBaptis: "BB2002001",
      tanggalBaptis: "2002-07-30",
      namaParokiAsalBaptis: "Paroki Santo Petrus Bandung",
      isKomuni: true,
      tanggalKomuni: "2010-08-15",
      namaParokiAsalKomuni: "Paroki Santo Petrus Bandung",
      isKrisma: true,
      tanggalKrisma: "2016-09-25",
      namaParokiAsalKrisma: "Paroki Santo Petrus Bandung",
      isPernikahan: true,
      tanggalPernikahan: "2022-05-10",
      nomorAktaPernikahanGereja: "APG2022001",
      namaParokiAsalPernikahan: "Paroki Babarsari"
    },
    {
      id: 3,
      nama: "Eduardo Camavinga",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1990-08-23",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Pns",
      paroki: "xxxxx",
      statusKehidupan: "Sudah Meninggal",
      // Data tambahan untuk form detail
      nik: "3471015508900001",
      nomorKK: "3471015508900001001",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Surabaya",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "S2 Administrasi Publik",
      nomorTelepon: "081456789012",
      statusDalamKeluarga: "Kepala Keluarga",
      namaAyah: "Roberto Camavinga",
      namaIbu: "Isabella Camavinga",
      // Sakramen data
      isBaptis: true,
      noBaptis: "BPT23081990001",
      noBukuBaptis: "BB1990001",
      tanggalBaptis: "1990-09-30",
      namaParokiAsalBaptis: "Paroki Santo Fransiskus Surabaya",
      isKomuni: true,
      tanggalKomuni: "1998-07-12",
      namaParokiAsalKomuni: "Paroki Santo Fransiskus Surabaya",
      isKrisma: true,
      tanggalKrisma: "2005-06-05",
      namaParokiAsalKrisma: "Paroki Santo Fransiskus Surabaya",
      isPernikahan: true,
      tanggalPernikahan: "2015-11-20",
      nomorAktaPernikahanGereja: "APG2015001",
      namaParokiAsalPernikahan: "Paroki Babarsari"
    },
    {
      id: 4,
      nama: "Carvajal",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "2000-06-23",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Lurah",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471015508750001",
      nomorKK: "1234567890123456",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Jakarta",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "S2 Manajemen",
      nomorTelepon: "08111222333",
      statusDalamKeluarga: "Kepala Keluarga",
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
      namaParokiAsalPernikahan: "Paroki Katedral Jakarta"
    },
    {
      id: 5,
      nama: "Richardo Kaka",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "2000-12-25",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Camat",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471012211820002",
      nomorKK: "2345678901234567",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Surabaya",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S1 Teknik",
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
      namaParokiAsalPernikahan: "Paroki Hati Kudus Surabaya"
    },
    {
      id: 6,
      nama: "Adrianus William Jensen",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "2001-12-28",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Pengacara",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471010304900003",
      nomorKK: "3456789012345678",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Bandung",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "S1 Hukum",
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
      namaParokiAsalPernikahan: ""
    },
    {
      id: 7,
      nama: "Edward Thomas Adl Kurniawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "2002-02-28",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Dokter",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471011709880004",
      nomorKK: "4567890123456789",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Medan",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S1 Teknik Sipil",
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
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: ""
    },
    {
      id: 8,
      nama: "Eduardo Camavinga",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "2003-06-21",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Aktor",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471010812950005",
      nomorKK: "5678901234567890",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Semarang",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "S1 Informatika",
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
      namaParokiAsalPernikahan: ""
    },
    {
      id: 9,
      nama: "Carvajal",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1991-01-12",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Pemain Bola",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471012501780006",
      nomorKK: "6789012345678902",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Makassar",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "D3 Penerbangan",
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
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: ""
    },
    {
      id: 10,
      nama: "Richardo Kaka",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "2009-02-11",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Belum Bekerja",
      paroki: "xxxxx",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471011406850007",
      nomorKK: "7890123456789013",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Denpasar",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S1 Farmasi",
      nomorTelepon: "08777888999",
      statusDalamKeluarga: "Anak",
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
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: ""
    },
    {
      id: 11,
      nama: "Maria Santika Dewi",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1985-03-15",
      alamat: "Pangkalan",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Wiraswasta",
      paroki: "Paroki Pangkalan",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471012910920008",
      nomorKK: "8901234567890125",
      jenisKelamin: "Perempuan",
      tempatLahir: "Palembang",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "S1 Arsitektur",
      nomorTelepon: "08888999000",
      statusDalamKeluarga: "Istri",
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
      isPernikahan: true,
      tanggalPernikahan: "2015-05-15",
      nomorAktaPernikahanGereja: "AP108001",
      namaParokiAsalPernikahan: "Paroki St. Stefanus Palembang"
    },
    {
      id: 12,
      nama: "Antonius Budi Setiawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1992-11-22",
      alamat: "Baciro",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Dokter",
      paroki: "Paroki Baciro",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471011103870009",
      nomorKK: "9012345678901237",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Balikpapan",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S1 Hukum",
      nomorTelepon: "08999000111",
      statusDalamKeluarga: "Anak",
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
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: ""
    },
    {
      id: 13,
      nama: "Theresia Wijaya",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1988-07-08",
      alamat: "Babarsari",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "PNS",
      paroki: "Paroki Babarsari",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471010707930010",
      nomorKK: "0123456789012348",
      jenisKelamin: "Perempuan",
      tempatLahir: "Manado",
      lingkungan: "Lingkungan Babarsari",
      pendidikan: "D3 Multimedia",
      nomorTelepon: "08000111222",
      statusDalamKeluarga: "Istri",
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
      isPernikahan: true,
      tanggalPernikahan: "2012-09-20",
      nomorAktaPernikahanGereja: "AP110001",
      namaParokiAsalPernikahan: "Paroki St. Albertus Manado"
    },
    {
      id: 14,
      nama: "Fransiskus Aldi Pratama",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1995-04-30",
      alamat: "Pangkalan",
      nomorHp: "08xxxxxxxxx",
      status: "Belum Menikah",
      pekerjaan: "Wiraswasta",
      paroki: "Paroki Pangkalan",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471010505960011",
      nomorKK: "0123456789012349",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Yogyakarta",
      lingkungan: "Lingkungan Pangkalan",
      pendidikan: "S1 Akuntansi",
      nomorTelepon: "08111222333",
      statusDalamKeluarga: "Anak",
      namaAyah: "Laurensius Pratama",
      namaIbu: "Maria Pratama",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B111001",
      noBukuBaptis: "BB111001",
      tanggalBaptis: "1996-06-05",
      namaParokiAsalBaptis: "Paroki St. Laurensius Yogyakarta",
      isKomuni: true,
      tanggalKomuni: "2006-06-05",
      namaParokiAsalKomuni: "Paroki St. Laurensius Yogyakarta",
      isKrisma: true,
      tanggalKrisma: "2011-06-05",
      namaParokiAsalKrisma: "Paroki St. Laurensius Yogyakarta",
      isPernikahan: false,
      tanggalPernikahan: "",
      nomorAktaPernikahanGereja: "",
      namaParokiAsalPernikahan: ""
    },
    {
      id: 15,
      nama: "Yohanes Kurniawan",
      nomorBaptis: "xxxxxxxxx",
      tanggalLahir: "1990-09-12",
      alamat: "Baciro",
      nomorHp: "08xxxxxxxxx",
      status: "Sudah Menikah",
      pekerjaan: "Guru",
      paroki: "Paroki Baciro",
      statusKehidupan: "Belum Meninggal",
      // Data tambahan untuk form detail
      nik: "3471010911910012",
      nomorKK: "0123456789012350",
      jenisKelamin: "Laki-laki",
      tempatLahir: "Malang",
      lingkungan: "Lingkungan Baciro",
      pendidikan: "S2 Teknologi Informasi",
      nomorTelepon: "08222333444",
      statusDalamKeluarga: "Kepala Keluarga",
      namaAyah: "Andreas Wulandari",
      namaIbu: "Cecilia Wulandari",
      // Sakramen data
      isBaptis: true,
      noBaptis: "B112001",
      noBukuBaptis: "BB112001",
      tanggalBaptis: "1991-12-09",
      namaParokiAsalBaptis: "Paroki St. Cecilia Malang",
      isKomuni: true,
      tanggalKomuni: "2001-12-09",
      namaParokiAsalKomuni: "Paroki St. Cecilia Malang",
      isKrisma: true,
      tanggalKrisma: "2006-12-09",
      namaParokiAsalKrisma: "Paroki St. Cecilia Malang",
      isPernikahan: true,
      tanggalPernikahan: "2015-05-15",
      nomorAktaPernikahanGereja: "AP112001",
      namaParokiAsalPernikahan: "Paroki St. Cecilia Malang"
    }
  ];

  // Tambahkan error state
  const [errors, setErrors] = useState({});

  // Load user data based on ID
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      try {
        // Convert ID dari parameter URL ke integer
        const parsedId = parseInt(id);
        
        // Cari data umat berdasarkan ID
        const foundUser = dataUmatList.find(user => user.id === parsedId);
        
        if (foundUser) {
          setUserData(foundUser);
          setError(null);
        } else {
          // Show error toast and redirect without showing error UI
          toast.error(`Data umat dengan ID ${id} tidak ditemukan`);
          navigate('/pendataan/admin/migrasi-umat');
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        // Show error toast and redirect
        toast.error("Gagal memuat data umat");
        navigate('/pendataan/admin/migrasi-umat');
      } finally {
        setLoading(false);
      }
    }, 500);
  }, [id, navigate]);

  // Handle form input changes
  const handleMigrasiInputChange = (e) => {
    const { name, value } = e.target;
    setMigrasiData(prev => ({
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

    // Reset dependent fields when changing main selection
    if (name === 'jenisKepindahan') {
      const resetData = { ...migrasiData, jenisKepindahan: value };
      
      // Clear fields not related to the selected migration type
      if (value === 'Perpindahan KK') {
        resetData.agamaBaru = '';
        resetData.tanggalPindahAgama = '';
        resetData.keuskupan = '';
        resetData.alamatBaru = '';
        resetData.parokiBaru = '';
        resetData.lingkunganBaru = '';
        resetData.tanggalPindahKeuskupan = '';
      } else if (value === 'Perpindahan Agama') {
        resetData.nomorKKBaru = '';
        resetData.statusDalamKeluargaBaru = '';
        resetData.keuskupan = '';
        resetData.alamatBaru = '';
        resetData.parokiBaru = '';
        resetData.lingkunganBaru = '';
        resetData.tanggalPindahKeuskupan = '';
      } else if (value === 'Perpindahan Keuskupan') {
        resetData.agamaBaru = '';
        resetData.tanggalPindahAgama = '';
      }
      
      setMigrasiData(resetData);
    }

    // Reset dependent fields for keuskupan change
    if (name === 'keuskupan') {
      setMigrasiData(prev => ({
        ...prev,
        parokiBaru: '',
        lingkunganBaru: ''
      }));
    }

    // Reset dependent fields for paroki change
    if (name === 'parokiBaru') {
      setMigrasiData(prev => ({
        ...prev,
        lingkunganBaru: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Validasi jenis perpindahan
    if (!migrasiData.jenisKepindahan) {
      newErrors.jenisKepindahan = 'Jenis Perpindahan harus dipilih';
    }

    // Validasi untuk Perpindahan KK
    if (migrasiData.jenisKepindahan === 'Perpindahan KK') {
      if (!migrasiData.nomorKKBaru) {
        newErrors.nomorKKBaru = 'Nomor KK Baru harus diisi';
      }
      if (!migrasiData.statusDalamKeluargaBaru) {
        newErrors.statusDalamKeluargaBaru = 'Status Dalam Keluarga Baru harus dipilih';
      }
    }

    // Validasi untuk Perpindahan Agama
    if (migrasiData.jenisKepindahan === 'Perpindahan Agama') {
      if (!migrasiData.agamaBaru) {
        newErrors.agamaBaru = 'Agama Baru harus dipilih';
      }
      if (!migrasiData.tanggalPindahAgama) {
        newErrors.tanggalPindahAgama = 'Tanggal Pindah Agama harus diisi';
      }
    }

    // Validasi untuk Perpindahan Keuskupan
    if (migrasiData.jenisKepindahan === 'Perpindahan Keuskupan') {
      if (!migrasiData.keuskupan) {
        newErrors.keuskupan = 'Keuskupan harus dipilih';
      }
      if (!migrasiData.alamatBaru) {
        newErrors.alamatBaru = 'Alamat Baru harus diisi';
      }
      if (!migrasiData.parokiBaru) {
        newErrors.parokiBaru = 'Paroki Baru harus dipilih';
      }
      if (!migrasiData.lingkunganBaru) {
        newErrors.lingkunganBaru = 'Lingkungan Baru harus dipilih';
      }
      if (!migrasiData.tanggalPindahKeuskupan) {
        newErrors.tanggalPindahKeuskupan = 'Tanggal Pindah Keuskupan harus diisi';
      }
      if (!migrasiData.nomorKKBaru) {
        newErrors.nomorKKBaru = 'Nomor KK Baru harus diisi';
      }
      if (!migrasiData.statusDalamKeluargaBaru) {
        newErrors.statusDalamKeluargaBaru = 'Status Dalam Keluarga Baru harus dipilih';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit data to API (simulation)
      console.log("Submitting migration data:", migrasiData);
      
      // Show success toast
      toast.success("Berhasil Melakukan Migrasi Umat", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      
      // Navigate back to MigrasiUmat page
      navigate('/pendataan/admin/migrasi-umat');
    } else {
      toast.error('Mohon periksa kembali form Anda', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      // Fokus ke elemen pertama dengan error
      const firstErrorKey = Object.keys(errors)[0];
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0];
      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    navigate('/pendataan/admin/migrasi-umat');
  };

  // Loading state
  if (loading) {
    return (
      <div className="input-migrasi-umat-loading">
        <div className="loading-spinner"></div>
        <p>Memuat data umat...</p>
      </div>
    );
  }

  // Error state - Desain sama seperti di LihatDataMigrasi
  if (error) {
    return (
      <div className="input-migrasi-umat-error">
        <h2>Error: {error}</h2>
        <button onClick={handleCancel} className="input-migrasi-umat-back-btn">
          Kembali ke Migrasi Umat
        </button>
      </div>
    );
  }

  // JSX untuk tampilan halaman - Form dengan data umat yang sesuai
  return (
    <div className="input-migrasi-umat">
      <div className="input-migrasi-umat-header">
        <h1>Input Data Migrasi Umat</h1>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Konten form tetap sama, userData akan berisi data yang sesuai dengan ID */}
        <div className="input-migrasi-umat-content">
          {/* Data Umat Ingin Dimigrasi (Read Only) */}
          <div className="input-migrasi-umat-card">
            <h2>Data Umat Ingin Dimigrasi (Read Only)</h2>
            
            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Nama Umat <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.nama || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
              
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  NIK <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.nik || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
            </div>

            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Nomor KK (Kartu Keluarga) <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.nomorKK || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
              
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Jenis Kelamin <span className="required">*</span>
                </label>
                <select
                  value={userData?.jenisKelamin || ''}
                  className="input-migrasi-umat-select"
                  disabled
                >
                  <option value={userData?.jenisKelamin || ''}>{userData?.jenisKelamin || ''}</option>
                </select>
              </div>
            </div>

            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Alamat <span className="required">*</span>
                </label>
                <textarea
                  value={userData?.alamat || ''}
                  className="input-migrasi-umat-textarea"
                  readOnly
                  rows="3"
                />
              </div>
              
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Tempat Lahir <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.tempatLahir || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
            </div>

            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Paroki <span className="required">*</span>
                </label>
                <select
                  value={userData?.paroki || ''}
                  className="input-migrasi-umat-select"
                  disabled
                >
                  <option value={userData?.paroki || ''}>{userData?.paroki || ''}</option>
                </select>
              </div>
              
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Tanggal Lahir <span className="required">*</span>
                </label>
                <input
                  type="date"
                  value={userData?.tanggalLahir || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
            </div>

            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Lingkungan <span className="required">*</span>
                </label>
                <select
                  value={userData?.lingkungan || ''}
                  className="input-migrasi-umat-select"
                  disabled
                >
                  <option value={userData?.lingkungan || ''}>{userData?.lingkungan || ''}</option>
                </select>
              </div>
              
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Pendidikan <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.pendidikan || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
            </div>

            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Pekerjaan <span className="required">*</span>
                </label>
                <select
                  value={userData?.pekerjaan || ''}
                  className="input-migrasi-umat-select"
                  disabled
                >
                  <option value={userData?.pekerjaan || ''}>{userData?.pekerjaan || ''}</option>
                </select>
              </div>
              
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Nomor Telepon / Handphone <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.nomorTelepon || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
            </div>

            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Status Dalam Keluarga <span className="required">*</span>
                </label>
                <select
                  value={userData?.statusDalamKeluarga || ''}
                  className="input-migrasi-umat-select"
                  disabled
                >
                  <option value={userData?.statusDalamKeluarga || ''}>{userData?.statusDalamKeluarga || ''}</option>
                </select>
              </div>
              
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Nama Ayah <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.namaAyah || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
            </div>

            <div className="input-migrasi-umat-row">
              <div className="input-migrasi-umat-col">
                <label className="input-migrasi-umat-label">
                  Nama Ibu <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={userData?.namaIbu || ''}
                  className="input-migrasi-umat-input"
                  readOnly
                />
              </div>
              <div className="input-migrasi-umat-col">
                {/* Empty column for spacing */}
              </div>
            </div>

            {/* Baptis Section */}
            <div className="input-migrasi-umat-sacrament-section">
              <div className="input-migrasi-umat-checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={userData?.isBaptis || false}
                  className="input-migrasi-umat-checkbox"
                  disabled
                />
                <label className="input-migrasi-umat-checkbox-label">
                  Apakah Sudah Menerima Sakramen Baptis ?
                </label>
              </div>

              {userData?.isBaptis && (
                <div className="input-migrasi-umat-sacrament-details">
                  <div className="input-migrasi-umat-row">
                    <div className="input-migrasi-umat-col">
                      <label className="input-migrasi-umat-label">
                        No Baptis <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={userData?.noBaptis || ''}
                        className="input-migrasi-umat-input"
                        readOnly
                      />
                    </div>
                    
                    <div className="input-migrasi-umat-col">
                      <label className="input-migrasi-umat-label">
                        No Buku Baptis <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={userData?.noBukuBaptis || ''}
                        className="input-migrasi-umat-input"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="input-migrasi-umat-row">
                    <div className="input-migrasi-umat-col">
                      <label className="input-migrasi-umat-label">
                        Tanggal Baptis <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        value={userData?.tanggalBaptis || ''}
                        className="input-migrasi-umat-input"
                        readOnly
                      />
                    </div>
                    
                    <div className="input-migrasi-umat-col">
                      <label className="input-migrasi-umat-label">
                        Nama Paroki Asal Baptis <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={userData?.namaParokiAsalBaptis || ''}
                        className="input-migrasi-umat-input"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Komuni Section */}
            {userData?.isBaptis && (
              <div className="input-migrasi-umat-sacrament-section">
                <div className="input-migrasi-umat-checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={userData?.isKomuni || false}
                    className="input-migrasi-umat-checkbox"
                    disabled
                  />
                  <label className="input-migrasi-umat-checkbox-label">
                    Apakah Sudah Menerima Sakramen Ekaristi / Komuni Pertama ?
                  </label>
                </div>

                {userData?.isKomuni && (
                  <div className="input-migrasi-umat-sacrament-details">
                    <div className="input-migrasi-umat-row">
                      <div className="input-migrasi-umat-col">
                        <label className="input-migrasi-umat-label">
                          Tanggal Komuni <span className="required">*</span>
                        </label>
                        <input
                          type="date"
                          value={userData?.tanggalKomuni || ''}
                          className="input-migrasi-umat-input"
                          readOnly
                        />
                      </div>
                      
                      <div className="input-migrasi-umat-col">
                        <label className="input-migrasi-umat-label">
                          Nama Paroki Asal Komuni Pertama <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          value={userData?.namaParokiAsalKomuni || ''}
                          className="input-migrasi-umat-input"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Krisma Section */}
            {userData?.isKomuni && (
              <div className="input-migrasi-umat-sacrament-section">
                <div className="input-migrasi-umat-checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={userData?.isKrisma || false}
                    className="input-migrasi-umat-checkbox"
                    disabled
                  />
                  <label className="input-migrasi-umat-checkbox-label">
                    Apakah Sudah Menerima Sakramen Krisma / Penguatan ?
                  </label>
                </div>

                {userData?.isKrisma && (
                  <div className="input-migrasi-umat-sacrament-details">
                    <div className="input-migrasi-umat-row">
                      <div className="input-migrasi-umat-col">
                        <label className="input-migrasi-umat-label">
                          Tanggal Krisma <span className="required">*</span>
                        </label>
                        <input
                          type="date"
                          value={userData?.tanggalKrisma || ''}
                          className="input-migrasi-umat-input"
                          readOnly
                        />
                      </div>
                      
                      <div className="input-migrasi-umat-col">
                        <label className="input-migrasi-umat-label">
                          Nama Paroki Asal Krisma <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          value={userData?.namaParokiAsalKrisma || ''}
                          className="input-migrasi-umat-input"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Pernikahan Section */}
            {userData?.isKrisma && (
              <div className="input-migrasi-umat-sacrament-section">
                <div className="input-migrasi-umat-checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={userData?.isPernikahan || false}
                    className="input-migrasi-umat-checkbox"
                    disabled
                  />
                  <label className="input-migrasi-umat-checkbox-label">
                    Apakah Sudah Menerima Sakramen Pernikahan ?
                  </label>
                </div>

                {userData?.isPernikahan && (
                  <div className="input-migrasi-umat-sacrament-details">
                    <div className="input-migrasi-umat-row">
                      <div className="input-migrasi-umat-col">
                        <label className="input-migrasi-umat-label">
                          Tanggal Pernikahan <span className="required">*</span>
                        </label>
                        <input
                          type="date"
                          value={userData?.tanggalPernikahan || ''}
                          className="input-migrasi-umat-input"
                          readOnly
                        />
                      </div>
                      
                      <div className="input-migrasi-umat-col">
                        <label className="input-migrasi-umat-label">
                          Nomor Akta Pernikahan Gereja <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          value={userData?.nomorAktaPernikahanGereja || ''}
                          className="input-migrasi-umat-input"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="input-migrasi-umat-row">
                      <div className="input-migrasi-umat-col">
                        <label className="input-migrasi-umat-label">
                          Nama Paroki Asal Pernikahan <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          value={userData?.namaParokiAsalPernikahan || ''}
                          className="input-migrasi-umat-input"
                          readOnly
                        />
                      </div>
                      <div className="input-migrasi-umat-col">
                        {/* Empty column for spacing */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Data Migrasi Umat */}
          <div className="input-migrasi-umat-card">
            <h2>Input Data Migrasi Umat</h2>
            
            <div className="input-migrasi-umat-form-group">
              <label className="input-migrasi-umat-label">
                Jenis Perpindahan <span className="required">*</span>
              </label>
              <select
                name="jenisKepindahan"
                value={migrasiData.jenisKepindahan}
                onChange={handleMigrasiInputChange}
                className={`input-migrasi-umat-select-fullwidth ${errors.jenisKepindahan ? 'error' : ''}`}
                required
              >
                <option value="">Pilih Jenis Perpindahan</option>
                <option value="Perpindahan KK">Perpindahan KK</option>
                <option value="Perpindahan Agama">Perpindahan Agama</option>
                <option value="Perpindahan Keuskupan">Perpindahan Keuskupan</option>
              </select>
              {errors.jenisKepindahan && <span className="error-message">{errors.jenisKepindahan}</span>}
            </div>

            {/* CONDITIONAL RENDERING BASED ON MIGRATION TYPE */}
            
            {/* 1. PERPINDAHAN KK - Horizontal Layout */}
            {migrasiData.jenisKepindahan === "Perpindahan KK" && (
              <div className="input-migrasi-umat-form-group-horizontal">
                <div className="input-migrasi-umat-form-group">
                  <label className="input-migrasi-umat-label">
                    Nomor KK (Kartu Keluarga) Yang Baru <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="nomorKKBaru"
                    value={migrasiData.nomorKKBaru}
                    onChange={handleMigrasiInputChange}
                    className={`input-migrasi-umat-input-fullwidth ${errors.nomorKKBaru ? 'error' : ''}`}
                    placeholder="Masukkan nomor KK baru"
                    required={migrasiData.jenisKepindahan === "Perpindahan KK"}
                  />
                  {errors.nomorKKBaru && <span className="error-message">{errors.nomorKKBaru}</span>}
                </div>
                
                <div className="input-migrasi-umat-form-group">
                  <label className="input-migrasi-umat-label">
                    Status Dalam Keluarga <span className="required">*</span>
                  </label>
                  <select
                    name="statusDalamKeluargaBaru"
                    value={migrasiData.statusDalamKeluargaBaru}
                    onChange={handleMigrasiInputChange}
                    className={`input-migrasi-umat-select-fullwidth ${errors.statusDalamKeluargaBaru ? 'error' : ''}`}
                    required={migrasiData.jenisKepindahan === "Perpindahan KK"}
                  >
                    <option value="">Pilih Status Dalam Keluarga</option>
                    {statusKeluargaOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.statusDalamKeluargaBaru && <span className="error-message">{errors.statusDalamKeluargaBaru}</span>}
                </div>
              </div>
            )}

            {/* 2. PERPINDAHAN AGAMA */}
            {migrasiData.jenisKepindahan === "Perpindahan Agama" && (
              <>
                <div className="input-migrasi-umat-form-group">
                  <label className="input-migrasi-umat-label">
                    Agama Baru Yang Dianut <span className="required">*</span>
                  </label>
                  <select
                    name="agamaBaru"
                    value={migrasiData.agamaBaru}
                    onChange={handleMigrasiInputChange}
                    className={`input-migrasi-umat-select-fullwidth ${errors.agamaBaru ? 'error' : ''}`}
                    required={migrasiData.jenisKepindahan === "Perpindahan Agama"}
                  >
                    <option value="">Pilih Agama Baru</option>
                    {agamaOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.agamaBaru && <span className="error-message">{errors.agamaBaru}</span>}
                </div>

                <div className="input-migrasi-umat-form-group">
                  <label className="input-migrasi-umat-label">
                    Tanggal Pindah Agama <span className="required">*</span>
                  </label>
                  <div className="input-migrasi-umat-date-wrapper">
                    <input
                      type="date"
                      name="tanggalPindahAgama"
                      value={migrasiData.tanggalPindahAgama}
                      onChange={handleMigrasiInputChange}
                      className={`input-migrasi-umat-date-input ${errors.tanggalPindahAgama ? 'error' : ''}`}
                      required={migrasiData.jenisKepindahan === "Perpindahan Agama"}
                    />
                    {errors.tanggalPindahAgama && <span className="error-message">{errors.tanggalPindahAgama}</span>}
                  </div>
                </div>
              </>
            )}

            {/* 3. PERPINDAHAN KEUSKUPAN */}
            {migrasiData.jenisKepindahan === "Perpindahan Keuskupan" && (
              <>
                <div className="input-migrasi-umat-form-group-horizontal">
                  <div className="input-migrasi-umat-form-group">
                    <label className="input-migrasi-umat-label">
                      Keuskupan <span className="required">*</span>
                    </label>
                    <select
                      name="keuskupan"
                      value={migrasiData.keuskupan}
                      onChange={handleMigrasiInputChange}
                      className={`input-migrasi-umat-select-fullwidth ${errors.keuskupan ? 'error' : ''}`}
                      required={migrasiData.jenisKepindahan === "Perpindahan Keuskupan"}
                    >
                      <option value="">Pilih Keuskupan</option>
                      {keuskupanOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.keuskupan && <span className="error-message">{errors.keuskupan}</span>}
                  </div>
                  
                  <div className="input-migrasi-umat-form-group">
                    <label className="input-migrasi-umat-label">
                      Alamat <span className="required">*</span>
                    </label>
                    <textarea
                      name="alamatBaru"
                      value={migrasiData.alamatBaru}
                      onChange={handleMigrasiInputChange}
                      className={`input-migrasi-umat-textarea-fullwidth ${errors.alamatBaru ? 'error' : ''}`}
                      placeholder="Masukkan alamat baru"
                      required={migrasiData.jenisKepindahan === "Perpindahan Keuskupan"}
                      rows="3"
                    />
                    {errors.alamatBaru && <span className="error-message">{errors.alamatBaru}</span>}
                  </div>
                </div>

                <div className="input-migrasi-umat-form-group-horizontal">
                  <div className="input-migrasi-umat-form-group">
                    <label className="input-migrasi-umat-label">
                      Paroki <span className="required">*</span>
                    </label>
                    <select
                      name="parokiBaru"
                      value={migrasiData.parokiBaru}
                      onChange={handleMigrasiInputChange}
                      className={`input-migrasi-umat-select-fullwidth ${errors.parokiBaru ? 'error' : ''}`}
                      required={migrasiData.jenisKepindahan === "Perpindahan Keuskupan"}
                      disabled={!migrasiData.keuskupan}
                    >
                      <option value="">Pilih Paroki</option>
                      {migrasiData.keuskupan && parokiOptions[migrasiData.keuskupan]?.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.parokiBaru && <span className="error-message">{errors.parokiBaru}</span>}
                  </div>
                  
                  <div className="input-migrasi-umat-form-group">
                    <label className="input-migrasi-umat-label">
                      Lingkungan <span className="required">*</span>
                    </label>
                    <select
                      name="lingkunganBaru"
                      value={migrasiData.lingkunganBaru}
                      onChange={handleMigrasiInputChange}
                      className={`input-migrasi-umat-select-fullwidth ${errors.lingkunganBaru ? 'error' : ''}`}
                      required={migrasiData.jenisKepindahan === "Perpindahan Keuskupan"}
                      disabled={!migrasiData.parokiBaru}
                    >
                      <option value="">Pilih Lingkungan</option>
                      {migrasiData.parokiBaru && lingkunganOptions[migrasiData.parokiBaru]?.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.lingkunganBaru && <span className="error-message">{errors.lingkunganBaru}</span>}
                  </div>
                </div>

                <div className="input-migrasi-umat-form-group">
                  <label className="input-migrasi-umat-label">
                    Tanggal Pindah Keuskupan <span className="required">*</span>
                  </label>
                  <div className="input-migrasi-umat-date-wrapper">
                    <input
                      type="date"
                      name="tanggalPindahKeuskupan"
                      value={migrasiData.tanggalPindahKeuskupan}
                      onChange={handleMigrasiInputChange}
                      className={`input-migrasi-umat-date-input ${errors.tanggalPindahKeuskupan ? 'error' : ''}`}
                      required={migrasiData.jenisKepindahan === "Perpindahan Keuskupan"}
                    />
                    {errors.tanggalPindahKeuskupan && <span className="error-message">{errors.tanggalPindahKeuskupan}</span>}
                  </div>
                </div>

                <div className="input-migrasi-umat-form-group">
                  <label className="input-migrasi-umat-label">
                    Nomor KK (Kartu Keluarga) Yang Baru <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="nomorKKBaru"
                    value={migrasiData.nomorKKBaru}
                    onChange={handleMigrasiInputChange}
                    className={`input-migrasi-umat-input-fullwidth ${errors.nomorKKBaru ? 'error' : ''}`}
                    placeholder="Masukkan nomor KK baru"
                    required={migrasiData.jenisKepindahan === "Perpindahan Keuskupan"}
                  />
                  {errors.nomorKKBaru && <span className="error-message">{errors.nomorKKBaru}</span>}
                </div>

                <div className="input-migrasi-umat-form-group">
                  <label className="input-migrasi-umat-label">
                    Status Dalam Keluarga <span className="required">*</span>
                  </label>
                  <select
                    name="statusDalamKeluargaBaru"
                    value={migrasiData.statusDalamKeluargaBaru}
                    onChange={handleMigrasiInputChange}
                    className={`input-migrasi-umat-select-fullwidth ${errors.statusDalamKeluargaBaru ? 'error' : ''}`}
                    required={migrasiData.jenisKepindahan === "Perpindahan Keuskupan"}
                  >
                    <option value="">Pilih Status Dalam Keluarga</option>
                    {statusKeluargaOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.statusDalamKeluargaBaru && <span className="error-message">{errors.statusDalamKeluargaBaru}</span>}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="input-migrasi-umat-actions">
          <button
            type="button"
            onClick={handleCancel}
            className="input-migrasi-umat-btn-batal"
          >
            Batal
          </button>
          <button
            type="submit"
            className="input-migrasi-umat-btn-simpan"
          >
            Migrasi Data Umat
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputMigrasiUmat;