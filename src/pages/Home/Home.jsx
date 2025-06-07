// Home.jsx
import React from 'react';
import Carousel from '../../components/Carousel/carousel'; // Perhatikan kapitalisasi
import './Home.css';
import SuaraGembala from '../../components/SuaraGembala/SuaraGembala';
import KonsultasiIman from '../../components/KonsultasiIman/KonsultasiIman'; // Perhatikan kapitalisasi
import SerbaSerbi from '../../components/SerbaSerbi/SerbaSerbi'; // Perhatikan kapitalisasi
import Tokoh from '../../components/Tokoh/Tokoh'; // Perhatikan kapitalisasi
import RenunganHarian from '../../components/RenunganHarian/RenunganHarian';
import BeritaHarian from '../../components/BeritaHarian/BeritaHarian';

const Home = () => {
  return (
    <main className="home-container">
      <Carousel />
      <SuaraGembala />
      <KonsultasiIman />
      <SerbaSerbi />
      <Tokoh />
      <RenunganHarian />  {/* Perhatikan kapitalisasi */}
      <BeritaHarian />
      {/* Konten lain bisa ditambahkan di sini */}
    </main>
  );
};

export default Home;