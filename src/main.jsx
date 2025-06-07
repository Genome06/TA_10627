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
        <Route path="/paroki-kota-kupang/:id" element={<DetailKupang />} /> {/* Halaman Detail Paroki */}
        <Route path="/kabupaten-kupang" element={<WilayahKabupatenKupang />} /> {/* Halaman Wilayah Kabupaten Kupang */}
        <Route path="/paroki-kabupaten-kupang/:id" element={<DetailKabupaten />} /> {/* Halaman Detail Paroki Kabupaten */}
        <Route path="/tts" element={<WilayahTts />} /> {/* Halaman Wilayah TTS */}
        <Route path="/paroki-tts/:id" element={<DetailTts />} /> {/* Halaman Detail Paroki TTS */}
        <Route path="/kepulauan" element={<WilayahKepulauan />} /> {/* Halaman Wilayah Kepulauan */}
        <Route path="/paroki-kepulauan/:id" element={<DetailKepulauan />} /> {/* Halaman Detail Paroki Kepulauan */}
      </Route>
    </Routes>
  </BrowserRouter>
);