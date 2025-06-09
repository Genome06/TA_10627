// SuaraGembala.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RenunganHarian.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RenunganHarian = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const articles = [
    {
      id: 1,
      image: '/assets/RenunganHarian.jpg',
      title: 'Selasa, 24 Desember 2024 - Bersiaplah Menyambut Kelahiran Sang Juruselamat',
      content: 'Hari Biasa Pekan Adven IV — Yesaya 7:10-14; Mzm 24:1-2.3-4.5-6; Roma 1:1-7; Matius 1:18-24. Injil hari ini mengisahkan tentang kelahiran Yesus yang diberitakan oleh malaikat kepada Yosef. Dalam kebingungan dan keraguan, Yosef dipanggil untuk mempercayai rencana Allah...',
      author: 'by KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/RenunganHarian2.jpg',
      title: 'Senin, 23 Desember 2024 - Nyanyian Pujian Maria, Magnificat',
      content: 'Hari Biasa Pekan Adven IV — Maleakhi 3:1-4.23-24; Mzm 25:4-5.8-9.10+14; Lukas 1:57-66. Dalam Injil hari ini, kita mendengar nyanyian pujian Maria, Magnificat, yang mengungkapkan kegembiraan dan rasa syukur atas karya Allah dalam hidupnya...',
      author: 'by KomsosKAK',
      date: '23 Des 2024',
    },
    {
      id: 3,
      image: '/assets/RenunganHarian3.jpeg',
      title: 'Minggu, 22 Desember 2024 - Iman Maria dalam Pemberitaan Malaikat',
      content: 'Minggu Adven IV — Mikha 5:1-4; Mzm 80:2-3.15-16.18-19; Ibrani 10:5-10; Lukas 1:39-45. Injil hari ini mengisahkan kunjungan Maria kepada Elisabet setelah Pemberitaan. Elisabet, dipenuhi Roh Kudus, mengucapkan berkat kepada Maria...',
      author: 'by KomsosKAK',
      date: '22 Des 2024',
    },
  ];

  const nextArticle = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section className="renungan-harian">
      <div className="renungan-harian-articles-container">
        <button className="renungan-harian-nav-arrow left" onClick={prevArticle}>
          <FaChevronLeft />
        </button>

        <div className="renungan-harian-article-wrapper">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`renungan-harian-article-card ${index === activeIndex ? 'active' : 'hidden'}`}
            >
              <div className="renungan-harian-card-content">
                <h2 className="renungan-harian-section-title">Renungan Harian</h2>
                <h3>{article.title}</h3>
                <div className="renungan-harian-article-meta">
                  <span>{article.author}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <p>{article.content}</p>
                <Link to={`/renungan-harian/${article.id}`} className="renungan-harian-read-more">
                  Baca Selengkapnya <FaChevronRight />
                </Link>
              </div>
              
              <div className="renungan-harian-card-image">
                <img src={article.image} alt={article.title} />
              </div>
            </div>
          ))}
        </div>

        <button className="renungan-harian-nav-arrow right" onClick={nextArticle}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default RenunganHarian;