// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Import komponen website utama KAK
import Home from '@pages/Home/Home';
import Sejarah from '@pages/Sejarah/sejarah';
import ArahDasarKAK from '@pages/ArahDasarKAK/ArahDasarKAK';
import PerakEpiscopal from '@pages/PerakEpiscopal/PerakEpiscopal';
import DetailEpiscopal from '@pages/PerakEpiscopal/Detail/DetailEpiscopal';
import Komisi from '@pages/Komisi/Komisi';
import WilayahKotaKupang from '@pages/Paroki/WilayahKotaKupang/WilayahKotaKupang';
import DetailKupang from '@pages/Paroki/WilayahKotaKupang/Detail/DetailKupang';
import WilayahKabupatenKupang from '@pages/Paroki/WilayahKabupatenKupang/WilayahKabupatenKupang';
import DetailKabupaten from '@pages/Paroki/WilayahKabupatenKupang/Detail/DetailKabupaten';
import WilayahTts from '@pages/Paroki/WilayahTts/WilayahTts';
import DetailTts from '@pages/Paroki/WilayahTts/Detail/DetailTts';
import WilayahKepulauan from '@pages/Paroki/WilayahKepulauan/WilayahKepulauan';
import DetailKepulauan from '@pages/Paroki/WilayahKepulauan/Detail/DetailKepulauan';
import Download from '@pages/Download/Download';
import Kontak from '@pages/Kontak/Kontak';
import Galeri from '@pages/Galeri/Galeri';
import KegiatanKeuskupan from '@pages/KegiatanKeuskupan/KegiatanKeuskupan';
import DetailKegiatan from '@/pages/KegiatanKeuskupan/Detail/DetailKegiatan';
import SuaraGembala from '@pages/SuaraGembala/SuaraGembala';
import DetailSuaraGembala from '@pages/SuaraGembala/Detail/DetailSuaraGembala';
import KonsultasiIman from '@pages/KonsultasiIman/KonsultasiIman';
import DetailKonsultasiIman from '@pages/KonsultasiIman/Detail/DetailKonsultasiIman';
import SerbaSerbi from '@pages/Serba-Serbi/SerbaSerbi';
import DetailSerba from '@pages/Serba-Serbi/Detail/DetailSerba';
import Tokoh from '@pages/Tokoh/Tokoh'; 
import DetailTokoh from '@pages/Tokoh/Detail/DetailTokoh';
import RenunganHarian from '@pages/RenunganHarian/RenunganHarian';
import DetailRenungan from '@pages/RenunganHarian/Detail/DetailRenungan';
import BeritaHarian from '@pages/BeritaHarian/BeritaHarian';
import DetailBeritaHarian from '@pages/BeritaHarian/Detail/DetailBeritaHarian';

// Import komponen website pendataan umat
import Login from './pagePendataan/Login/Login';

// Import komponen admin (uncomment ketika sudah dibuat)
// import AdminDashboard from './pagePendataan/Admin/Dashboard/AdminDashboard';
// import AdminDataUmat from './pagePendataan/Admin/DataUmat/AdminDataUmat';
// import AdminTambahUmat from './pagePendataan/Admin/DataUmat/AdminTambahUmat';
// import AdminEditUmat from './pagePendataan/Admin/DataUmat/AdminEditUmat';
// import AdminDetailUmat from './pagePendataan/Admin/DataUmat/AdminDetailUmat';
// import AdminLaporan from './pagePendataan/Admin/Laporan/AdminLaporan';
// import AdminStatistik from './pagePendataan/Admin/Statistik/AdminStatistik';
// import AdminPengaturan from './pagePendataan/Admin/Pengaturan/AdminPengaturan';
// import AdminManageUsers from './pagePendataan/Admin/ManageUsers/AdminManageUsers';

// Import komponen kepala keluarga (uncomment ketika sudah dibuat)
// import KepalaKeluargaDashboard from './pagePendataan/KepalaKeluarga/Dashboard/KepalaKeluargaDashboard';
// import KepalaKeluargaDataKeluarga from './pagePendataan/KepalaKeluarga/DataKeluarga/KepalaKeluargaDataKeluarga';
// import KepalaKeluargaTambahAnggota from './pagePendataan/KepalaKeluarga/DataKeluarga/KepalaKeluargaTambahAnggota';
// import KepalaKeluargaEditAnggota from './pagePendataan/KepalaKeluarga/DataKeluarga/KepalaKeluargaEditAnggota';
// import KepalaKeluargaDetailAnggota from './pagePendataan/KepalaKeluarga/DataKeluarga/KepalaKeluargaDetailAnggota';
// import KepalaKeluargaProfil from './pagePendataan/KepalaKeluarga/Profil/KepalaKeluargaProfil';
// import KepalaKeluargaEditProfil from './pagePendataan/KepalaKeluarga/Profil/KepalaKeluargaEditProfil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* ===== ROUTES WEBSITE UTAMA KAK (dengan navbar dan footer) ===== */}
      <Route path="/" element={<App />}>
        {/* Home */}
        <Route index element={<Home />} />
        
        {/* Profil KAK */}
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/arah-dasar-kak" element={<ArahDasarKAK />} />
        <Route path="/perak-episcopal" element={<PerakEpiscopal />} />
        <Route path="/perak-episcopal/detail/:id" element={<DetailEpiscopal />} />
        
        {/* Komisi */}
        <Route path="/komisi/:namaKomisi" element={<Komisi />} />
        
        {/* Paroki */}
        <Route path="/kota-kupang" element={<WilayahKotaKupang />} />
        <Route path="/kota-kupang/paroki-kota-kupang/:id" element={<DetailKupang />} />
        <Route path="/kabupaten-kupang" element={<WilayahKabupatenKupang />} />
        <Route path="/kabupaten-kupang/paroki-kabupaten-kupang/:id" element={<DetailKabupaten />} />
        <Route path="/tts" element={<WilayahTts />} />
        <Route path="/tts/paroki-tts/:id" element={<DetailTts />} />
        <Route path="/kepulauan" element={<WilayahKepulauan />} />
        <Route path="/kepulauan/paroki-kepulauan/:id" element={<DetailKepulauan />} />
        
        {/* Informasi */}
        <Route path="/informasi/download" element={<Download />} />
        <Route path="/informasi/kontak" element={<Kontak />} />
        <Route path="/informasi/galeri" element={<Galeri />} />
        <Route path="/informasi/kegiatan-keuskupan" element={<KegiatanKeuskupan />} />
        <Route path="/informasi/kegiatan-keuskupan/detail/:id" element={<DetailKegiatan />} />
        
        {/* Rubrik */}
        <Route path="/suara-gembala" element={<SuaraGembala />} />
        <Route path="/suara-gembala/:id" element={<DetailSuaraGembala />} />
        <Route path="/konsultasi-iman" element={<KonsultasiIman />} />
        <Route path="/konsultasi-iman/:id" element={<DetailKonsultasiIman />} />
        <Route path="/serba-serbi" element={<SerbaSerbi />} />
        <Route path="/serba-serbi/:id" element={<DetailSerba />} />
        <Route path="/tokoh" element={<Tokoh />} />
        <Route path="/tokoh/:id" element={<DetailTokoh />} />
        <Route path="/renungan-harian" element={<RenunganHarian />} />
        <Route path="/renungan-harian/:id" element={<DetailRenungan />} />
        <Route path="/berita-harian" element={<BeritaHarian />} />
        <Route path="/berita-harian/:id" element={<DetailBeritaHarian />} />
      </Route>
      
      {/* ===== ROUTES WEBSITE PENDATAAN UMAT (tanpa navbar dan footer KAK) ===== */}
      
      {/* Autentikasi */}
      <Route path="/login" element={<Login />} />
      
      {/* ===== ROUTES ADMIN PENDATAAN UMAT ===== */}
      {/* Dashboard Admin */}
      {/* <Route path="/pendataan/admin/dashboard" element={<AdminDashboard />} /> */}
      
      {/* Manajemen Data Umat (Admin) */}
      {/* <Route path="/pendataan/admin/data-umat" element={<AdminDataUmat />} /> */}
      {/* <Route path="/pendataan/admin/data-umat/tambah" element={<AdminTambahUmat />} /> */}
      {/* <Route path="/pendataan/admin/data-umat/:id" element={<AdminDetailUmat />} /> */}
      {/* <Route path="/pendataan/admin/data-umat/:id/edit" element={<AdminEditUmat />} /> */}
      
      {/* Laporan dan Statistik (Admin) */}
      {/* <Route path="/pendataan/admin/laporan" element={<AdminLaporan />} /> */}
      {/* <Route path="/pendataan/admin/statistik" element={<AdminStatistik />} /> */}
      
      {/* Manajemen User (Admin) */}
      {/* <Route path="/pendataan/admin/manage-users" element={<AdminManageUsers />} /> */}
      {/* <Route path="/pendataan/admin/manage-users/tambah" element={<AdminTambahUser />} /> */}
      {/* <Route path="/pendataan/admin/manage-users/:id/edit" element={<AdminEditUser />} /> */}
      
      {/* Pengaturan Sistem (Admin) */}
      {/* <Route path="/pendataan/admin/pengaturan" element={<AdminPengaturan />} /> */}
      {/* <Route path="/pendataan/admin/profil" element={<AdminProfil />} /> */}
      
      {/* ===== ROUTES KEPALA KELUARGA PENDATAAN UMAT ===== */}
      {/* Dashboard Kepala Keluarga */}
      {/* <Route path="/pendataan/kepalaKeluarga/dashboard" element={<KepalaKeluargaDashboard />} /> */}
      
      {/* Manajemen Data Keluarga (Kepala Keluarga) */}
      {/* <Route path="/pendataan/kepalaKeluarga/data-keluarga" element={<KepalaKeluargaDataKeluarga />} /> */}
      {/* <Route path="/pendataan/kepalaKeluarga/data-keluarga/tambah-anggota" element={<KepalaKeluargaTambahAnggota />} /> */}
      {/* <Route path="/pendataan/kepalaKeluarga/data-keluarga/:id" element={<KepalaKeluargaDetailAnggota />} /> */}
      {/* <Route path="/pendataan/kepalaKeluarga/data-keluarga/:id/edit" element={<KepalaKeluargaEditAnggota />} /> */}
      
      {/* Profil Kepala Keluarga */}
      {/* <Route path="/pendataan/kepalaKeluarga/profil" element={<KepalaKeluargaProfil />} /> */}
      {/* <Route path="/pendataan/kepalaKeluarga/profil/edit" element={<KepalaKeluargaEditProfil />} /> */}
      
      {/* Route Not Found / 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
);