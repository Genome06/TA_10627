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
      </Route>
    </Routes>
  </BrowserRouter>
);