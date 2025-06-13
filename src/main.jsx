// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Import layout pendataan
import PendataanLayout from './pagePendataan/Layout/PendataanLayout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

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
import DashboardAdmin from './pagePendataan/Admin/DashboardAdmin/DashboardAdmin';
import AdminDataUmat from './pagePendataan/Admin/DataUmat/DataUmat';
import TambahDataUmat from './pagePendataan/Admin/DataUmat/TambahDataUmat/TambahDataUmat';
import AdminDataKeluarga from './pagePendataan/Admin/DataKeluarga/DataKeluarga';
import TambahDataKeluarga from './pagePendataan/Admin/DataKeluarga/TambahDataKeluarga/TambahDataKeluarga';
import EditDataKeluarga from './pagePendataan/Admin/DataKeluarga/EditDataKeluarga/EditDataKeluarga';
import PindahDomisiliKeuskupan from './pagePendataan/Admin/DataKeluarga/PindahDomisiliKeuskupan/PindahDomisiliKeuskupan';
import AdminListUmatTermigrasi from './pagePendataan/Admin/Migrasi/ListUmatTermigrasi/ListUmatTermigrasi';
import LihatDataMigrasi from './pagePendataan/Admin/Migrasi/ListUmatTermigrasi/LihatDataMigrasi/LihatDataMigrasi';
import MigrasiUmat from './pagePendataan/Admin/Migrasi/MigrasiUmat/MigrasiUmat';
import InputMigrasiUmat from './pagePendataan/Admin/Migrasi/MigrasiUmat/InputMigrasiUmat/InputMigrasiUmat';
import TempatZiarah from './pagePendataan/Admin/Paroki/TempatZiarah/Tempatziarah';
import TambahTempatZiarah from './pagePendataan/Admin/Paroki/TempatZiarah/TambahTempatZiarah/TambahTempatZiarah';
import Komunitas from './pagePendataan/Admin/Paroki/Komunitas/Komunitas';
import TambahKomunitas from './pagePendataan/Admin/Paroki/Komunitas/TambahKomunitas/TambahKomunitas';
import DetailKomunitas from './pagePendataan/Admin/Paroki/Komunitas/DetailKomunitas/DetailKomunitas';
import EditKomunitas from './pagePendataan/Admin/Paroki/Komunitas/EditKomunitas/EditKomunitas';
import TambahAnggotaKomunitas from './pagePendataan/Admin/Paroki/Komunitas/DetailKomunitas/TambahAnggotaKomunitas/TambahAnggotaKomunitas';
import EditAnggotaKomunitas from './pagePendataan/Admin/Paroki/Komunitas/DetailKomunitas/EditAnggotaKomunitas/EditAnggotaKomunitas';
import EditTempatZiarah from './pagePendataan/Admin/Paroki/TempatZiarah/EditTempatZiarah/EditTempatZiarah';
import Statistik from './pagePendataan/Admin/Statistik/Statistik';
import DashboardKepalaKeluarga from './pagePendataan/User/DashboardKepalaKeluarga/DashboardKepalaKeluarga';
import DataKeluarga from './pagePendataan/User/DataKeluarga/DataKeluarga';
import TambahDataAnggotaKeluarga from './pagePendataan/User/DataKeluarga/TambahDataAnggotaKeluarga/TambahDataAnggotaKeluarga';
import EditDataAnggotaKeluarga from './pagePendataan/User/DataKeluarga/EditDataAnggotaKeluarga/EditDataAnggotaKeluarga';

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
      
      {/* ===== ROUTES WEBSITE PENDATAAN UMAT ===== */}
      
      {/* Autentikasi (tanpa sidebar) */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes dengan sidebar */}
      <Route path="/pendataan" element={
        <ProtectedRoute>
          <PendataanLayout />
        </ProtectedRoute>
      }>
        {/* ===== ROUTES ADMIN ===== */}
        <Route path="admin/dashboard" element={
          <ProtectedRoute requiredRole="admin">
            <DashboardAdmin />
          </ProtectedRoute>
        } />
        <Route path="admin/data-umat" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDataUmat />
          </ProtectedRoute>
        } />
        <Route path="admin/data-umat/tambah" element={
          <ProtectedRoute requiredRole="admin">
            <TambahDataUmat />
          </ProtectedRoute>
        } />
        <Route path="admin/data-keluarga/:id" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDataKeluarga />
          </ProtectedRoute>
        } />
        <Route path="admin/data-keluarga/:id/tambah" element={
          <ProtectedRoute requiredRole="admin">
            <TambahDataKeluarga />
          </ProtectedRoute>
        } />
        <Route path="admin/data-keluarga/:id/edit" element={
          <ProtectedRoute requiredRole="admin">
            <EditDataKeluarga />
          </ProtectedRoute>
        } />
        <Route path="admin/data-keluarga/:id/edit/:memberId" element={
          <ProtectedRoute requiredRole="admin">
            <EditDataKeluarga />
          </ProtectedRoute>
        } />
        <Route path="admin/data-keluarga/:id/pindah-domisili" element={
          <ProtectedRoute requiredRole="admin">
            <PindahDomisiliKeuskupan />
          </ProtectedRoute>
        } />
        <Route path="admin/migrasi-umat" element={
          <ProtectedRoute requiredRole="admin">
            <MigrasiUmat />
          </ProtectedRoute>
        } />
        <Route path="admin/migrasi-umat/input/:id" element={
          <ProtectedRoute requiredRole="admin">
            <InputMigrasiUmat />
          </ProtectedRoute>
        } />
        <Route path="admin/list-umat-termigrasi" element={
          <ProtectedRoute requiredRole="admin">
            <AdminListUmatTermigrasi />
          </ProtectedRoute>
        } />
        <Route path="admin/list-umat-termigrasi/lihat-data-migrasi/:id" element={
          <ProtectedRoute requiredRole="admin">
            <LihatDataMigrasi />
          </ProtectedRoute>
        } />
        {/* Temporary dashboard components */}
        <Route path="admin/statistik" element={
          <ProtectedRoute requiredRole="admin">
            <Statistik />
          </ProtectedRoute>
        } />
        
        {/* ===== ROUTES KOMUNITAS ===== */}
        <Route path="admin/komunitas-omk" element={
          <ProtectedRoute requiredRole="admin">
            <Komunitas />
          </ProtectedRoute>
        } />
        <Route path="admin/komunitas-omk/tambah" element={
          <ProtectedRoute requiredRole="admin">
            <TambahKomunitas />
          </ProtectedRoute>
        } />
        <Route path="admin/komunitas-omk/detail/:id" element={
          <ProtectedRoute requiredRole="admin">
            <DetailKomunitas />
          </ProtectedRoute>
        } />
        <Route path="admin/komunitas-omk/detail/:id/tambah-anggota" element={
          <ProtectedRoute requiredRole="admin">
            <TambahAnggotaKomunitas />
          </ProtectedRoute>
        } />
        <Route path="admin/komunitas-omk/edit/:id" element={
          <ProtectedRoute requiredRole="admin">
            <EditKomunitas />
          </ProtectedRoute>
        } />
        <Route path="admin/komunitas-omk/detail/:id/edit-anggota/:anggotaId" element={
          <ProtectedRoute requiredRole="admin">
            <EditAnggotaKomunitas />
          </ProtectedRoute>
        } />
        {/* ===== ROUTES TEMPAT ZIARAH ===== */}
        <Route path="admin/tempat-ziarah" element={
          <ProtectedRoute requiredRole="admin">
            <TempatZiarah />
          </ProtectedRoute>
        } />
        <Route path="admin/tempat-ziarah/tambah" element={
          <ProtectedRoute requiredRole="admin">
            <TambahTempatZiarah />
          </ProtectedRoute>
        } />
        <Route path="admin/tempat-ziarah/edit/:id" element={
          <ProtectedRoute requiredRole="admin">
            <EditTempatZiarah />
          </ProtectedRoute>
        } />

        {/* ===== ROUTES KEPALA KELUARGA ===== */}
        <Route path="kepalaKeluarga/dashboard" element={
          <ProtectedRoute requiredRole="user">
            <DashboardKepalaKeluarga />
          </ProtectedRoute>
        } />
        <Route path="kepalaKeluarga/data-keluarga" element={
          <ProtectedRoute requiredRole="user">
            <DataKeluarga />
          </ProtectedRoute>
        } />
        <Route path="kepalaKeluarga/data-keluarga/tambah" element={
          <ProtectedRoute requiredRole="user">
            <TambahDataAnggotaKeluarga />
          </ProtectedRoute>
        } />
        <Route path="kepalaKeluarga/data-keluarga/edit" element={
          <ProtectedRoute requiredRole="user">
            <EditDataAnggotaKeluarga />
          </ProtectedRoute>
        } />
        <Route path="kepalaKeluarga/data-keluarga/edit/:memberId" element={
          <ProtectedRoute requiredRole="user">
            <EditDataAnggotaKeluarga />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  </BrowserRouter>
);