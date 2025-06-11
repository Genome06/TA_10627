import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditDataKeluarga.css';

const EditDataKeluarga = () => {
  const { id, memberId } = useParams(); // id untuk keluarga, memberId untuk anggota
  const navigate = useNavigate();
  
  // Tentukan apakah ini kepala keluarga atau anggota
  const isKepalaKeluarga = !memberId;
  
  // Data keluarga yang sama dengan DataKeluarga.jsx - LENGKAP untuk semua 5 keluarga
  const familyData = {
    1: {
      kepalaKeluarga: {
        id: 1,
        nama: "Adrianus William Jensen",
        nik: "3471012008800001",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "1980-06-20",
        alamat: "Jl. Babarsari No. 123, Yogyakarta",
        nomorHp: "08123456789",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Dokter",
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "1234567890123456",
        statusDalamKeluarga: "Suami",
        pendidikan: "S2 Kedokteran",
        namaAyah: "Yohanes Jensen",
        namaIbu: "Maria Jensen",
        // Sakramen data
        isBaptis: true,
        noBaptis: "B001",
        noBukuBaptis: "BB001",
        tanggalBaptis: "2000-01-01",
        namaParokiAsalBaptis: "Paroki Babarsari",
        isKomuni: true,
        tanggalKomuni: "2010-01-01",
        namaParokiAsalKomuni: "Paroki Babarsari",
        isKrisma: true,
        tanggalKrisma: "2015-01-01",
        namaParokiAsalKrisma: "Paroki Babarsari",
        isPernikahan: true,
        tanggalPernikahan: "2005-01-01",
        nomorAktaPernikahanGereja: "AP001",
        namaParokiAsalPernikahan: "Paroki Babarsari"
      },
      anggotaKeluarga: [
        {
          id: 2,
          nama: "Maria Theresia Jensen",
          nik: "3471015512850002",
          jenisKelamin: "Perempuan",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "1985-12-15",
          alamat: "Jl. Babarsari No. 123, Yogyakarta",
          nomorHp: "08123456790",
          statusPernikahan: "Sudah Menikah",
          pekerjaan: "Guru",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Istri",
          pendidikan: "S1 Pendidikan",
          namaAyah: "Antonius Maria",
          namaIbu: "Theresia Maria",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B002",
          noBukuBaptis: "BB002",
          tanggalBaptis: "2000-02-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: true,
          tanggalKomuni: "2010-02-01",
          namaParokiAsalKomuni: "Paroki Babarsari",
          isKrisma: true,
          tanggalKrisma: "2015-02-01",
          namaParokiAsalKrisma: "Paroki Babarsari",
          isPernikahan: true,
          tanggalPernikahan: "2005-01-01",
          nomorAktaPernikahanGereja: "AP001",
          namaParokiAsalPernikahan: "Paroki Babarsari"
        },
        {
          id: 3,
          nama: "Antonius William Jensen Jr",
          nik: "3471011005100003",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "2010-05-10",
          alamat: "Jl. Babarsari No. 123, Yogyakarta",
          nomorHp: "",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Pelajar",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Anak",
          pendidikan: "SD",
          namaAyah: "Adrianus William Jensen",
          namaIbu: "Maria Theresia Jensen",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B003",
          noBukuBaptis: "BB003",
          tanggalBaptis: "2010-06-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: true,
          tanggalKomuni: "2020-06-01",
          namaParokiAsalKomuni: "Paroki Babarsari",
          isKrisma: false,
          tanggalKrisma: "",
          namaParokiAsalKrisma: "",
          isPernikahan: false,
          tanggalPernikahan: "",
          nomorAktaPernikahanGereja: "",
          namaParokiAsalPernikahan: ""
        }
      ]
    },
    2: {
      kepalaKeluarga: {
        id: 4,
        nama: "Eduardo Camavinga",
        nik: "3471012308900004",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "1990-08-23",
        alamat: "Jl. Babarsari No. 456, Yogyakarta",
        nomorHp: "08234567891",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Pegawai Negeri Sipil (Pns)",
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "2345678901234567",
        statusDalamKeluarga: "Suami",
        pendidikan: "S1 Administrasi",
        namaAyah: "Gabriel Camavinga",
        namaIbu: "Rosa Camavinga",
        // Sakramen data
        isBaptis: true,
        noBaptis: "B004",
        noBukuBaptis: "BB004",
        tanggalBaptis: "2000-03-01",
        namaParokiAsalBaptis: "Paroki Babarsari",
        isKomuni: true,
        tanggalKomuni: "2010-03-01",
        namaParokiAsalKomuni: "Paroki Babarsari",
        isKrisma: true,
        tanggalKrisma: "2015-03-01",
        namaParokiAsalKrisma: "Paroki Babarsari",
        isPernikahan: true,
        tanggalPernikahan: "2020-01-01",
        nomorAktaPernikahanGereja: "AP004",
        namaParokiAsalPernikahan: "Paroki Babarsari"
      },
      anggotaKeluarga: [
        {
          id: 5,
          nama: "Felisa Thanti Adl Kurniawan",
          nik: "3471016102920005",
          jenisKelamin: "Perempuan",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "2002-06-21",
          alamat: "Jl. Babarsari No. 456, Yogyakarta",
          nomorHp: "08234567892",
          statusPernikahan: "Sudah Menikah",
          pekerjaan: "Guru",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Istri",
          pendidikan: "S1 Pendidikan",
          namaAyah: "Kurniawan Adl",
          namaIbu: "Thanti Adl",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B005",
          noBukuBaptis: "BB005",
          tanggalBaptis: "2002-07-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: true,
          tanggalKomuni: "2012-07-01",
          namaParokiAsalKomuni: "Paroki Babarsari",
          isKrisma: true,
          tanggalKrisma: "2017-07-01",
          namaParokiAsalKrisma: "Paroki Babarsari",
          isPernikahan: true,
          tanggalPernikahan: "2020-01-01",
          nomorAktaPernikahanGereja: "AP004",
          namaParokiAsalPernikahan: "Paroki Babarsari"
        },
        {
          id: 6,
          nama: "Gabriel Camavinga",
          nik: "3471011203150006",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "2015-03-12",
          alamat: "Jl. Babarsari No. 456, Yogyakarta",
          nomorHp: "",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Belum Bekerja",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Anak",
          pendidikan: "TK",
          namaAyah: "Eduardo Camavinga",
          namaIbu: "Felisa Thanti Adl Kurniawan",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B006",
          noBukuBaptis: "BB006",
          tanggalBaptis: "2015-04-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: false,
          tanggalKomuni: "",
          namaParokiAsalKomuni: "",
          isKrisma: false,
          tanggalKrisma: "",
          namaParokiAsalKrisma: "",
          isPernikahan: false,
          tanggalPernikahan: "",
          nomorAktaPernikahanGereja: "",
          namaParokiAsalPernikahan: ""
        }
      ]
    },
    3: {
      kepalaKeluarga: {
        id: 7,
        nama: "Carvajal",
        nik: "3471012306000007",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "2000-06-23",
        alamat: "Jl. Babarsari No. 789, Yogyakarta",
        nomorHp: "08345678903",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Lurah",
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "3456789012345678",
        statusDalamKeluarga: "Suami",
        pendidikan: "S1 Pemerintahan",
        namaAyah: "Raphael Carvajal",
        namaIbu: "Sofia Carvajal",
        // Sakramen data
        isBaptis: true,
        noBaptis: "B007",
        noBukuBaptis: "BB007",
        tanggalBaptis: "2000-07-01",
        namaParokiAsalBaptis: "Paroki Babarsari",
        isKomuni: true,
        tanggalKomuni: "2010-07-01",
        namaParokiAsalKomuni: "Paroki Babarsari",
        isKrisma: true,
        tanggalKrisma: "2015-07-01",
        namaParokiAsalKrisma: "Paroki Babarsari",
        isPernikahan: true,
        tanggalPernikahan: "2018-05-15",
        nomorAktaPernikahanGereja: "AP007",
        namaParokiAsalPernikahan: "Paroki Babarsari"
      },
      anggotaKeluarga: [
        {
          id: 8,
          nama: "Theresia Wijaya Carvajal",
          nik: "3471015507880008",
          jenisKelamin: "Perempuan",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "1988-07-08",
          alamat: "Jl. Babarsari No. 789, Yogyakarta",
          nomorHp: "08345678904",
          statusPernikahan: "Sudah Menikah",
          pekerjaan: "PNS",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Istri",
          pendidikan: "S1 Ekonomi",
          namaAyah: "Antonius Wijaya",
          namaIbu: "Maria Wijaya",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B008",
          noBukuBaptis: "BB008",
          tanggalBaptis: "1988-08-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: true,
          tanggalKomuni: "1998-08-01",
          namaParokiAsalKomuni: "Paroki Babarsari",
          isKrisma: true,
          tanggalKrisma: "2003-08-01",
          namaParokiAsalKrisma: "Paroki Babarsari",
          isPernikahan: true,
          tanggalPernikahan: "2018-05-15",
          nomorAktaPernikahanGereja: "AP007",
          namaParokiAsalPernikahan: "Paroki Babarsari"
        },
        {
          id: 9,
          nama: "Rafael Carvajal",
          nik: "3471011008220009",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "2022-08-10",
          alamat: "Jl. Babarsari No. 789, Yogyakarta",
          nomorHp: "",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Belum Bekerja",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Anak",
          pendidikan: "Belum Sekolah",
          namaAyah: "Carvajal",
          namaIbu: "Theresia Wijaya Carvajal",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B009",
          noBukuBaptis: "BB009",
          tanggalBaptis: "2022-09-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: false,
          tanggalKomuni: "",
          namaParokiAsalKomuni: "",
          isKrisma: false,
          tanggalKrisma: "",
          namaParokiAsalKrisma: "",
          isPernikahan: false,
          tanggalPernikahan: "",
          nomorAktaPernikahanGereja: "",
          namaParokiAsalPernikahan: ""
        }
      ]
    },
    4: {
      kepalaKeluarga: {
        id: 10,
        nama: "Richardo Kaka",
        nik: "3471012512000010",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "2000-12-25",
        alamat: "Jl. Babarsari No. 101, Yogyakarta",
        nomorHp: "08456789012",
        statusPernikahan: "Sudah Menikah",
        pekerjaan: "Camat",
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "4567890123456789",
        statusDalamKeluarga: "Suami",
        pendidikan: "S2 Pemerintahan",
        namaAyah: "Ricardo Kaka Sr",
        namaIbu: "Maria Kaka",
        // Sakramen data
        isBaptis: true,
        noBaptis: "B010",
        noBukuBaptis: "BB010",
        tanggalBaptis: "2001-01-01",
        namaParokiAsalBaptis: "Paroki Babarsari",
        isKomuni: true,
        tanggalKomuni: "2011-01-01",
        namaParokiAsalKomuni: "Paroki Babarsari",
        isKrisma: true,
        tanggalKrisma: "2016-01-01",
        namaParokiAsalKrisma: "Paroki Babarsari",
        isPernikahan: true,
        tanggalPernikahan: "2019-06-20",
        nomorAktaPernikahanGereja: "AP010",
        namaParokiAsalPernikahan: "Paroki Babarsari"
      },
      anggotaKeluarga: [
        {
          id: 11,
          nama: "Maria Santika Dewi Kaka",
          nik: "3471015503850011",
          jenisKelamin: "Perempuan",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "1985-03-15",
          alamat: "Jl. Babarsari No. 101, Yogyakarta",
          nomorHp: "08456789013",
          statusPernikahan: "Sudah Menikah",
          pekerjaan: "Wiraswasta",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Istri",
          pendidikan: "S1 Bisnis",
          namaAyah: "Santika Dewi",
          namaIbu: "Magdalena Dewi",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B011",
          noBukuBaptis: "BB011",
          tanggalBaptis: "1985-04-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: true,
          tanggalKomuni: "1995-04-01",
          namaParokiAsalKomuni: "Paroki Babarsari",
          isKrisma: true,
          tanggalKrisma: "2000-04-01",
          namaParokiAsalKrisma: "Paroki Babarsari",
          isPernikahan: true,
          tanggalPernikahan: "2019-06-20",
          nomorAktaPernikahanGereja: "AP010",
          namaParokiAsalPernikahan: "Paroki Babarsari"
        },
        {
          id: 12,
          nama: "Cristiano Kaka",
          nik: "3471011807180012",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "2018-07-18",
          alamat: "Jl. Babarsari No. 101, Yogyakarta",
          nomorHp: "",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Belum Bekerja",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Anak",
          pendidikan: "TK",
          namaAyah: "Richardo Kaka",
          namaIbu: "Maria Santika Dewi Kaka",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B012",
          noBukuBaptis: "BB012",
          tanggalBaptis: "2018-08-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: false,
          tanggalKomuni: "",
          namaParokiAsalKomuni: "",
          isKrisma: false,
          tanggalKrisma: "",
          namaParokiAsalKrisma: "",
          isPernikahan: false,
          tanggalPernikahan: "",
          nomorAktaPernikahanGereja: "",
          namaParokiAsalPernikahan: ""
        }
      ]
    },
    5: {
      kepalaKeluarga: {
        id: 13,
        nama: "Antonius Budi Setiawan",
        nik: "3471012211920013",
        jenisKelamin: "Laki-laki",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "1992-11-22",
        alamat: "Jl. Babarsari No. 202, Yogyakarta",
        nomorHp: "08567890123",
        statusPernikahan: "Belum Menikah",
        pekerjaan: "Dokter",
        paroki: "Paroki Babarsari",
        lingkungan: "Lingkungan Babarsari",
        nomorKK: "5678901234567890",
        statusDalamKeluarga: "Suami",
        pendidikan: "S2 Kedokteran",
        namaAyah: "Yohanes Setiawan",
        namaIbu: "Maria Setiawan",
        // Sakramen data
        isBaptis: true,
        noBaptis: "B013",
        noBukuBaptis: "BB013",
        tanggalBaptis: "1992-12-01",
        namaParokiAsalBaptis: "Paroki Babarsari",
        isKomuni: true,
        tanggalKomuni: "2002-12-01",
        namaParokiAsalKomuni: "Paroki Babarsari",
        isKrisma: true,
        tanggalKrisma: "2007-12-01",
        namaParokiAsalKrisma: "Paroki Babarsari",
        isPernikahan: false,
        tanggalPernikahan: "",
        nomorAktaPernikahanGereja: "",
        namaParokiAsalPernikahan: ""
      },
      anggotaKeluarga: [
        {
          id: 14,
          nama: "Yohanes Kurniawan Setiawan",
          nik: "3471011209950014",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "1995-09-12",
          alamat: "Jl. Babarsari No. 202, Yogyakarta",
          nomorHp: "08567890124",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Guru",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Adik",
          pendidikan: "S1 Pendidikan",
          namaAyah: "Yohanes Setiawan",
          namaIbu: "Maria Setiawan",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B014",
          noBukuBaptis: "BB014",
          tanggalBaptis: "1995-10-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: true,
          tanggalKomuni: "2005-10-01",
          namaParokiAsalKomuni: "Paroki Babarsari",
          isKrisma: true,
          tanggalKrisma: "2010-10-01",
          namaParokiAsalKrisma: "Paroki Babarsari",
          isPernikahan: false,
          tanggalPernikahan: "",
          nomorAktaPernikahanGereja: "",
          namaParokiAsalPernikahan: ""
        },
        {
          id: 15,
          nama: "Fransiskus Aldi Pratama Setiawan",
          nik: "3471013004970015",
          jenisKelamin: "Laki-laki",
          tempatLahir: "Yogyakarta",
          tanggalLahir: "1997-04-30",
          alamat: "Jl. Babarsari No. 202, Yogyakarta",
          nomorHp: "08567890125",
          statusPernikahan: "Belum Menikah",
          pekerjaan: "Wiraswasta",
          paroki: "Paroki Babarsari",
          lingkungan: "Lingkungan Babarsari",
          statusDalamKeluarga: "Adik",
          pendidikan: "S1 Bisnis",
          namaAyah: "Yohanes Setiawan",
          namaIbu: "Maria Setiawan",
          // Sakramen data
          isBaptis: true,
          noBaptis: "B015",
          noBukuBaptis: "BB015",
          tanggalBaptis: "1997-05-01",
          namaParokiAsalBaptis: "Paroki Babarsari",
          isKomuni: true,
          tanggalKomuni: "2007-05-01",
          namaParokiAsalKomuni: "Paroki Babarsari",
          isKrisma: true,
          tanggalKrisma: "2012-05-01",
          namaParokiAsalKrisma: "Paroki Babarsari",
          isPernikahan: false,
          tanggalPernikahan: "",
          nomorAktaPernikahanGereja: "",
          namaParokiAsalPernikahan: ""
        }
      ]
    }
  };
  
  // Form state
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nomorKK: '',
    alamat: '',
    paroki: '',
    lingkungan: '',
    isBaptis: false,
    noBaptis: '',
    noBukuBaptis: '',
    tanggalBaptis: '',
    namaParokiAsalBaptis: '',
    isKomuni: false,
    tanggalKomuni: '',
    namaParokiAsalKomuni: '',
    isKrisma: false,
    tanggalKrisma: '',
    namaParokiAsalKrisma: '',
    isPernikahan: false,
    tanggalPernikahan: '',
    nomorAktaPernikahanGereja: '',
    namaParokiAsalPernikahan: '',
    nik: '',
    jenisKelamin: '',
    tempatLahir: '',
    tanggalLahir: '',
    pendidikan: '',
    pekerjaan: '',
    nomorTelepon: '',
    statusDalamKeluarga: '',
    namaAyah: '',
    namaIbu: '',
    passwordBaru: '',
    konfirmasiPasswordBaru: ''
  });

  // Loading state
  const [loading, setLoading] = useState(true);

  // State untuk password reset (hanya untuk kepala keluarga)
  const [isResetPassword, setIsResetPassword] = useState(false);

  // Error state
  const [errors, setErrors] = useState({});

  // Dropdown options
  const dropdownOptions = {
    statusDalamKeluarga: ['Suami', 'Istri', 'Anak', 'Adik', 'Lain-Lain'],
    pekerjaan: ['Dokter', 'Pegawai Negeri Sipil (Pns)', 'Wiraswasta', 'Pegawai Swasta', 'Guru', 'Pelajar', 'Belum Bekerja', 'Lurah', 'Camat', 'PNS'],
    jenisKelamin: ['Laki-laki', 'Perempuan'],
    lingkungan: ['Lingkungan Babarsari', 'Lingkungan Baciro', 'Lingkungan Pangkalan'],
    paroki: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan']
  };

  // Load existing data
  useEffect(() => {
    loadExistingData();
  }, [id, memberId]);

  const loadExistingData = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const family = familyData[id];
      
      // Jika family tidak ditemukan
      if (!family) {
        toast.error(`Data keluarga dengan ID ${id} tidak ditemukan`);
        navigate('/pendataan/admin/data-umat');
        return;
      }

      let memberData = null;

      if (isKepalaKeluarga) {
        // Jika edit kepala keluarga
        memberData = family.kepalaKeluarga;
      } else {
        // Jika edit anggota keluarga, cari berdasarkan memberId
        memberData = family.anggotaKeluarga?.find(member => member.id === parseInt(memberId));
        
        if (!memberData) {
          toast.error(`Data anggota dengan ID ${memberId} tidak ditemukan`);
          navigate(`/pendataan/admin/data-keluarga/${id}`);
          return;
        }
      }

      // Map data ke form state
      const existingData = {
        namaLengkap: memberData.nama || '',
        nomorKK: memberData.nomorKK || '', // Hanya ada untuk kepala keluarga
        alamat: memberData.alamat || '',
        paroki: memberData.paroki || '',
        lingkungan: memberData.lingkungan || '',
        isBaptis: memberData.isBaptis || false,
        noBaptis: memberData.noBaptis || '',
        noBukuBaptis: memberData.noBukuBaptis || '',
        tanggalBaptis: memberData.tanggalBaptis || '',
        namaParokiAsalBaptis: memberData.namaParokiAsalBaptis || '',
        isKomuni: memberData.isKomuni || false,
        tanggalKomuni: memberData.tanggalKomuni || '',
        namaParokiAsalKomuni: memberData.namaParokiAsalKomuni || '',
        isKrisma: memberData.isKrisma || false,
        tanggalKrisma: memberData.tanggalKrisma || '',
        namaParokiAsalKrisma: memberData.namaParokiAsalKrisma || '',
        isPernikahan: memberData.isPernikahan || false,
        tanggalPernikahan: memberData.tanggalPernikahan || '',
        nomorAktaPernikahanGereja: memberData.nomorAktaPernikahanGereja || '',
        namaParokiAsalPernikahan: memberData.namaParokiAsalPernikahan || '',
        nik: memberData.nik || '',
        jenisKelamin: memberData.jenisKelamin || '',
        tempatLahir: memberData.tempatLahir || '',
        tanggalLahir: memberData.tanggalLahir || '',
        pendidikan: memberData.pendidikan || '',
        pekerjaan: memberData.pekerjaan || '',
        nomorTelepon: memberData.nomorHp || '',
        statusDalamKeluarga: memberData.statusDalamKeluarga || '',
        namaAyah: memberData.namaAyah || '',
        namaIbu: memberData.namaIbu || ''
      };

      setFormData(existingData);
      setLoading(false);
    }, 500);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
      
      // Reset dependent fields when unchecking
      if (!checked) {
        if (name === 'isBaptis') {
          setFormData(prev => ({
            ...prev,
            noBaptis: '',
            noBukuBaptis: '',
            tanggalBaptis: '',
            namaParokiAsalBaptis: '',
            isKomuni: false,
            tanggalKomuni: '',
            namaParokiAsalKomuni: '',
            isKrisma: false,
            tanggalKrisma: '',
            namaParokiAsalKrisma: '',
            isPernikahan: false,
            tanggalPernikahan: '',
            nomorAktaPernikahanGereja: '',
            namaParokiAsalPernikahan: ''
          }));
        } else if (name === 'isKomuni') {
          setFormData(prev => ({
            ...prev,
            tanggalKomuni: '',
            namaParokiAsalKomuni: '',
            isKrisma: false,
            tanggalKrisma: '',
            namaParokiAsalKrisma: '',
            isPernikahan: false,
            tanggalPernikahan: '',
            nomorAktaPernikahanGereja: '',
            namaParokiAsalPernikahan: ''
          }));
        } else if (name === 'isKrisma') {
          setFormData(prev => ({
            ...prev,
            tanggalKrisma: '',
            namaParokiAsalKrisma: '',
            isPernikahan: false,
            tanggalPernikahan: '',
            nomorAktaPernikahanGereja: '',
            namaParokiAsalPernikahan: ''
          }));
        }
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle password reset checkbox
  const handlePasswordResetChange = (e) => {
    setIsResetPassword(e.target.checked);
    if (!e.target.checked) {
      setFormData(prev => ({
        ...prev,
        passwordBaru: '',
        konfirmasiPasswordBaru: ''
      }));
      setErrors(prev => ({
        ...prev,
        passwordBaru: '',
        konfirmasiPasswordBaru: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      'namaLengkap', 'alamat', 'paroki', 'lingkungan', 'nik', 
      'jenisKelamin', 'tempatLahir', 'tanggalLahir', 'statusDalamKeluarga'
    ];

    if (isKepalaKeluarga) {
      requiredFields.push('nomorKK');
    }

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'Field ini wajib diisi';
      }
    });

    // Password validation for kepala keluarga
    if (isKepalaKeluarga && isResetPassword) {
      if (!formData.passwordBaru || formData.passwordBaru.length < 6) {
        newErrors.passwordBaru = 'Password minimal 6 karakter';
      }
      if (formData.passwordBaru !== formData.konfirmasiPasswordBaru) {
        newErrors.konfirmasiPasswordBaru = 'Konfirmasi password tidak sesuai';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    // Simulasi API call
    console.log('Data yang akan diedit:', formData);
    console.log('Family ID:', id);
    console.log('Member ID:', memberId);
    console.log('Is Kepala Keluarga:', isKepalaKeluarga);
    
    // Success notification
    const successMessage = isKepalaKeluarga 
      ? 'Berhasil Edit Data Kepala Keluarga'
      : 'Berhasil Edit Data Anggota Keluarga';
    
    toast.success(successMessage);
    
    // Navigate back to data keluarga
    setTimeout(() => {
      navigate(`/pendataan/admin/data-keluarga/${id}`);
    }, 1500);
  };

  // Handle batal
  const handleBatal = () => {
    navigate(`/pendataan/admin/data-keluarga/${id}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="edit-data-keluarga">
        <div className="data-keluarga-loading">
          <div className="loading-spinner"></div>
          <p>Memuat data untuk diedit...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-data-keluarga">
      <div className="edit-data-keluarga-header">
        <h1>
          {isKepalaKeluarga ? 'Edit Data Kepala Keluarga' : 'Edit Data Anggota Keluarga'}
        </h1>
      </div>

      <form className="edit-data-keluarga-form" onSubmit={handleSubmit}>
        {/* Data Pribadi */}
        <div className="edit-data-keluarga-card">
          <h2>Data Pribadi</h2>
          
          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Nama Lengkap <span className="required">*</span>
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.namaLengkap ? 'error' : ''}`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.namaLengkap && <span className="error-message">{errors.namaLengkap}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                NIK <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.nik ? 'error' : ''}`}
                placeholder="Masukkan NIK"
              />
              {errors.nik && <span className="error-message">{errors.nik}</span>}
            </div>
          </div>

          {isKepalaKeluarga && (
            <div className="edit-data-keluarga-row">
              <div className="edit-data-keluarga-col">
                <label className="edit-data-keluarga-label">
                  Nomor KK <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="nomorKK"
                  value={formData.nomorKK}
                  onChange={handleInputChange}
                  className={`edit-data-keluarga-input ${errors.nomorKK ? 'error' : ''}`}
                  placeholder="Masukkan nomor KK"
                />
                {errors.nomorKK && <span className="error-message">{errors.nomorKK}</span>}
              </div>
              <div className="edit-data-keluarga-col">
                {/* Empty column for spacing when KK is displayed */}
              </div>
            </div>
          )}

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.jenisKelamin ? 'error' : ''}`}
              >
                <option value="">Pilih Jenis Kelamin</option>
                {dropdownOptions.jenisKelamin.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.jenisKelamin && <span className="error-message">{errors.jenisKelamin}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Tempat Lahir <span className="required">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                value={formData.tempatLahir}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.tempatLahir ? 'error' : ''}`}
                placeholder="Masukkan tempat lahir"
              />
              {errors.tempatLahir && <span className="error-message">{errors.tempatLahir}</span>}
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className={`edit-data-keluarga-textarea ${errors.alamat ? 'error' : ''}`}
                placeholder="Masukkan alamat lengkap"
              />
              {errors.alamat && <span className="error-message">{errors.alamat}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Tanggal Lahir <span className="required">*</span>
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                className={`edit-data-keluarga-input ${errors.tanggalLahir ? 'error' : ''}`}
              />
              {errors.tanggalLahir && <span className="error-message">{errors.tanggalLahir}</span>}
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Paroki <span className="required">*</span>
              </label>
              <select
                name="paroki"
                value={formData.paroki}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.paroki ? 'error' : ''}`}
              >
                <option value="">Pilih Paroki</option>
                {dropdownOptions.paroki.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.paroki && <span className="error-message">{errors.paroki}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Pendidikan</label>
              <input
                type="text"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan pendidikan terakhir"
              />
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Lingkungan <span className="required">*</span>
              </label>
              <select
                name="lingkungan"
                value={formData.lingkungan}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.lingkungan ? 'error' : ''}`}
              >
                <option value="">Pilih Lingkungan</option>
                {dropdownOptions.lingkungan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.lingkungan && <span className="error-message">{errors.lingkungan}</span>}
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Pekerjaan</label>
              <select
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleInputChange}
                className="edit-data-keluarga-select"
              >
                <option value="">Pilih Pekerjaan</option>
                {dropdownOptions.pekerjaan.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Nomor Telepon</label>
              <input
                type="tel"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan nomor telepon"
              />
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">
                Status Dalam Keluarga <span className="required">*</span>
              </label>
              <select
                name="statusDalamKeluarga"
                value={formData.statusDalamKeluarga}
                onChange={handleInputChange}
                className={`edit-data-keluarga-select ${errors.statusDalamKeluarga ? 'error' : ''}`}
              >
                <option value="">Pilih Status</option>
                {dropdownOptions.statusDalamKeluarga.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.statusDalamKeluarga && <span className="error-message">{errors.statusDalamKeluarga}</span>}
            </div>
          </div>

          <div className="edit-data-keluarga-row">
            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Nama Ayah</label>
              <input
                type="text"
                name="namaAyah"
                value={formData.namaAyah}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan nama ayah"
              />
            </div>

            <div className="edit-data-keluarga-col">
              <label className="edit-data-keluarga-label">Nama Ibu</label>
              <input
                type="text"
                name="namaIbu"
                value={formData.namaIbu}
                onChange={handleInputChange}
                className="edit-data-keluarga-input"
                placeholder="Masukkan nama ibu"
              />
            </div>
          </div>

          {/* Data Sakramen */}
          {/* Baptis */}
          <div className="edit-data-keluarga-sacrament-section">
            <div className="edit-data-keluarga-checkbox-wrapper">
              <input
                type="checkbox"
                id="isBaptis"
                name="isBaptis"
                checked={formData.isBaptis}
                onChange={handleInputChange}
                className="edit-data-keluarga-checkbox"
              />
              <label htmlFor="isBaptis" className="edit-data-keluarga-checkbox-label">
                Apakah Sudah Menerima Sakramen Baptis ?
              </label>
            </div>
            
            {formData.isBaptis && (
              <div className="edit-data-keluarga-sacrament-details">
                <div className="edit-data-keluarga-row">
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">No. Baptis</label>
                    <input
                      type="text"
                      name="noBaptis"
                      value={formData.noBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                      placeholder="Masukkan no. baptis"
                    />
                  </div>
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">No. Buku Baptis</label>
                    <input
                      type="text"
                      name="noBukuBaptis"
                      value={formData.noBukuBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                      placeholder="Masukkan no. buku baptis"
                    />
                  </div>
                </div>
                <div className="edit-data-keluarga-row">
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">Tanggal Baptis</label>
                    <input
                      type="date"
                      name="tanggalBaptis"
                      value={formData.tanggalBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                    />
                  </div>
                  <div className="edit-data-keluarga-col">
                    <label className="edit-data-keluarga-label">Nama Paroki Asal Baptis</label>
                    <input
                      type="text"
                      name="namaParokiAsalBaptis"
                      value={formData.namaParokiAsalBaptis}
                      onChange={handleInputChange}
                      className="edit-data-keluarga-input"
                      placeholder="Masukkan nama paroki asal baptis"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Komuni */}
          {formData.isBaptis && (
            <div className="edit-data-keluarga-sacrament-section">
              <div className="edit-data-keluarga-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKomuni"
                  name="isKomuni"
                  checked={formData.isKomuni}
                  onChange={handleInputChange}
                  className="edit-data-keluarga-checkbox"
                />
                <label htmlFor="isKomuni" className="edit-data-keluarga-checkbox-label">
                  Apakah Sudah Menerima Sakramen Ekaristi / Komuni Pertama ?
                </label>
              </div>
              
              {formData.isKomuni && (
                <div className="edit-data-keluarga-sacrament-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Tanggal Komuni</label>
                      <input
                        type="date"
                        name="tanggalKomuni"
                        value={formData.tanggalKomuni}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nama Paroki Asal Komuni Pertama</label>
                      <input
                        type="text"
                        name="namaParokiAsalKomuni"
                        value={formData.namaParokiAsalKomuni}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nama paroki asal komuni"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Krisma */}
          {formData.isKomuni && (
            <div className="edit-data-keluarga-sacrament-section">
              <div className="edit-data-keluarga-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isKrisma"
                  name="isKrisma"
                  checked={formData.isKrisma}
                  onChange={handleInputChange}
                  className="edit-data-keluarga-checkbox"
                />
                <label htmlFor="isKrisma" className="edit-data-keluarga-checkbox-label">
                  Apakah Sudah Menerima Sakramen Krisma / Penguatan ?
                </label>
              </div>
              
              {formData.isKrisma && (
                <div className="edit-data-keluarga-sacrament-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Tanggal Krisma</label>
                      <input
                        type="date"
                        name="tanggalKrisma"
                        value={formData.tanggalKrisma}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nama Paroki Asal Krisma</label>
                      <input
                        type="text"
                        name="namaParokiAsalKrisma"
                        value={formData.namaParokiAsalKrisma}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nama paroki asal krisma"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pernikahan */}
          {formData.isKrisma && (
            <div className="edit-data-keluarga-sacrament-section">
              <div className="edit-data-keluarga-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isPernikahan"
                  name="isPernikahan"
                  checked={formData.isPernikahan}
                  onChange={handleInputChange}
                  className="edit-data-keluarga-checkbox"
                />
                <label htmlFor="isPernikahan" className="edit-data-keluarga-checkbox-label">
                  Apakah Sudah Menerima Sakramen Pernikahan ?
                </label>
              </div>
              
              {formData.isPernikahan && (
                <div className="edit-data-keluarga-sacrament-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Tanggal Pernikahan</label>
                      <input
                        type="date"
                        name="tanggalPernikahan"
                        value={formData.tanggalPernikahan}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nomor Akta Pernikahan Gereja</label>
                      <input
                        type="text"
                        name="nomorAktaPernikahanGereja"
                        value={formData.nomorAktaPernikahanGereja}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nomor akta pernikahan"
                      />
                    </div>
                  </div>
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">Nama Paroki Asal Pernikahan</label>
                      <input
                        type="text"
                        name="namaParokiAsalPernikahan"
                        value={formData.namaParokiAsalPernikahan}
                        onChange={handleInputChange}
                        className="edit-data-keluarga-input"
                        placeholder="Masukkan nama paroki asal pernikahan"
                      />
                    </div>
                    <div className="edit-data-keluarga-col">
                      {/* Empty column for spacing */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Password Reset Section - Hanya untuk Kepala Keluarga */}
        {isKepalaKeluarga && (
          <div className="edit-data-keluarga-card">
            <h2>Reset Password</h2>
            
            <div className="edit-data-keluarga-password-section">
              <div className="edit-data-keluarga-password-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="isResetPassword"
                  checked={isResetPassword}
                  onChange={handlePasswordResetChange}
                  className="edit-data-keluarga-password-checkbox"
                />
                <label htmlFor="isResetPassword" className="edit-data-keluarga-password-checkbox-label">
                  Apakah Anda Ingin Mereset Password Anda ?
                </label>
              </div>
              
              {isResetPassword && (
                <div className="edit-data-keluarga-password-details">
                  <div className="edit-data-keluarga-row">
                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">
                        Password Baru <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        name="passwordBaru"
                        value={formData.passwordBaru}
                        onChange={handleInputChange}
                        className={`edit-data-keluarga-input ${errors.passwordBaru ? 'error' : ''}`}
                        placeholder="Masukkan password baru"
                      />
                      {errors.passwordBaru && <span className="error-message">{errors.passwordBaru}</span>}
                    </div>

                    <div className="edit-data-keluarga-col">
                      <label className="edit-data-keluarga-label">
                        Konfirmasi Password Baru <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        name="konfirmasiPasswordBaru"
                        value={formData.konfirmasiPasswordBaru}
                        onChange={handleInputChange}
                        className={`edit-data-keluarga-input ${errors.konfirmasiPasswordBaru ? 'error' : ''}`}
                        placeholder="Konfirmasi password baru"
                      />
                      {errors.konfirmasiPasswordBaru && <span className="error-message">{errors.konfirmasiPasswordBaru}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="edit-data-keluarga-actions">
          <button
            type="button"
            onClick={handleBatal}
            className="edit-data-keluarga-btn-batal"
          >
            Batal
          </button>
          <button
            type="submit"
            className="edit-data-keluarga-btn-submit"
          >
            {isKepalaKeluarga ? 'Edit Data Kepala Keluarga' : 'Edit Data Anggota Keluarga'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDataKeluarga;