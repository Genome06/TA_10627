// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from '@pages/Home/Home'; // Menggunakan alias @pages
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
import RenunganHarian from '@pages/RenunganHarian/RenunganHarian'; // Import Renungan Harian
import DetailRenungan from '@pages/RenunganHarian/Detail/DetailRenungan'; // Import Detail Renungan

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> {/* Parent route dengan navbar */}
        <Route index element={<Home />} /> {/* Halaman utama */}
        <Route path="/sejarah" element={<Sejarah />} /> {/* Halaman Sejarah */}
        <Route path="/arah-dasar-kak" element={<ArahDasarKAK />} /> {/* Halaman Arah Dasar KAK */}
        <Route path="/perak-episcopal" element={<PerakEpiscopal />} /> {/* Halaman Perak Episcopal */}
        <Route path="/perak-episcopal/detail/:id" element={<DetailEpiscopal />} /> {/* Halaman Detail Episcopal */}
        <Route path="/komisi/:namaKomisi" element={<Komisi />} /> {/* Halaman Komisi */}
        <Route path="/kota-kupang" element={<WilayahKotaKupang />} /> {/* Halaman Wilayah Kota Kupang */}
        <Route path="/kota-kupang/paroki-kota-kupang/:id" element={<DetailKupang />} /> {/* Halaman Detail Paroki */}
        <Route path="/kabupaten-kupang" element={<WilayahKabupatenKupang />} /> {/* Halaman Wilayah Kabupaten Kupang */}
        <Route path="/kabupaten-kupang/paroki-kabupaten-kupang/:id" element={<DetailKabupaten />} /> {/* Halaman Detail Paroki Kabupaten */}
        <Route path="/tts" element={<WilayahTts />} /> {/* Halaman Wilayah TTS */}
        <Route path="/tts/paroki-tts/:id" element={<DetailTts />} /> {/* Halaman Detail Paroki TTS */}
        <Route path="/kepulauan" element={<WilayahKepulauan />} /> {/* Halaman Wilayah Kepulauan */}
        <Route path="/kepulauan/paroki-kepulauan/:id" element={<DetailKepulauan />} /> {/* Halaman Detail Paroki Kepulauan */}
        <Route path="/informasi/download" element={<Download />} /> {/* Halaman Download */}
        <Route path="/informasi/kontak" element={<Kontak />} /> {/* Halaman Kontak */}
        <Route path="/informasi/galeri" element={<Galeri />} /> {/* Halaman Galeri */}
        <Route path="/informasi/kegiatan-keuskupan" element={<KegiatanKeuskupan />} /> {/* Halaman Kegiatan Keuskupan */}
        <Route path="/informasi/kegiatan-keuskupan/detail/:id" element={<DetailKegiatan />} /> {/* Halaman Detail Kegiatan */}
        <Route path="/suara-gembala" element={<SuaraGembala />} /> {/* Halaman Suara Gembala */}
        <Route path="/suara-gembala/:id" element={<DetailSuaraGembala />} /> {/* Halaman Detail Suara Gembala */}
        <Route path="/konsultasi-iman" element={<KonsultasiIman />} /> {/* Halaman Konsultasi Iman */}
        <Route path="/konsultasi-iman/:id" element={<DetailKonsultasiIman />} /> {/* Halaman Detail Konsultasi Iman */}
        <Route path="/serba-serbi" element={<SerbaSerbi />} /> {/* Halaman Serba Serbi */}
        <Route path="/serba-serbi/:id" element={<DetailSerba />} /> {/* Halaman Detail Serba Serbi */}
        <Route path="/tokoh" element={<Tokoh />} /> {/* Halaman Tokoh */}
        <Route path="/tokoh/:id" element={<DetailTokoh />} /> {/* Halaman Detail Tokoh */}
        <Route path="/renungan-harian" element={<RenunganHarian />} /> {/* Halaman Renungan Harian */}
        <Route path="/renungan-harian/:id" element={<DetailRenungan />} /> {/* Halaman Detail Renungan */}
      </Route>
    </Routes>
  </BrowserRouter>
);