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

// Temporary dashboard components (create these)
const AdminDataUmat = () => <div>Data Umat</div>;
const AdminMigrasiUmat = () => <div>Migrasi Umat</div>;
const AdminListUmatTermigrasi = () => <div>List Umat Termigrasi</div>;
const AdminStatistik = () => <div>Statistik</div>;
const AdminKomunitasOMK = () => <div>Komunitas / OMK</div>;
const AdminTempatZiarah = () => <div>Tempat Ziarah</div>;

const KepalaKeluargaDashboard = () => <div>Kepala Keluarga Dashboard</div>;

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
        <Route path="admin/migrasi-umat" element={
          <ProtectedRoute requiredRole="admin">
            <AdminMigrasiUmat />
          </ProtectedRoute>
        } />
        <Route path="admin/list-umat-termigrasi" element={
          <ProtectedRoute requiredRole="admin">
            <AdminListUmatTermigrasi />
          </ProtectedRoute>
        } />
        <Route path="admin/statistik" element={
          <ProtectedRoute requiredRole="admin">
            <AdminStatistik />
          </ProtectedRoute>
        } />
        <Route path="admin/komunitas-omk" element={
          <ProtectedRoute requiredRole="admin">
            <AdminKomunitasOMK />
          </ProtectedRoute>
        } />
        <Route path="admin/tempat-ziarah" element={
          <ProtectedRoute requiredRole="admin">
            <AdminTempatZiarah />
          </ProtectedRoute>
        } />
        
        {/* ===== ROUTES KEPALA KELUARGA ===== */}
        <Route path="kepalaKeluarga/dashboard" element={
          <ProtectedRoute requiredRole="user">
            <KepalaKeluargaDashboard />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  </BrowserRouter>
);