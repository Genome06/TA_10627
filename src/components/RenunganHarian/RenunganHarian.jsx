// SuaraGembala.jsx
import React, { useState } from 'react';
import './RenunganHarian.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RenunganHarian = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const articles = [
    {
      image: '/assets/RenunganHarian.jpg',
      title: 'Selasa, 24 September 2024',
      content: 'Hari Biasa Pekan XXV — Amsal 21:1-6.10-13; Mzm 119:1.27.30.34.35.44; Lukas 8:19-21  Inji hari ini, berkisah tentang kunjungan ibu dan saudara-saudara ....',
      author: 'by KomsosKAK',
      date: '24 Sep 2024',
    },
    {
        image: '/assets/RenunganHarian.jpg',
        title: 'Selasa, 24 September 2024',
        content: 'Hari Biasa Pekan XXV — Amsal 21:1-6.10-13; Mzm 119:1.27.30.34.35.44; Lukas 8:19-21  Inji hari ini, berkisah tentang kunjungan ibu dan saudara-saudara ....',
        author: 'by KomsosKAK',
        date: '24 Sep 2024',
      },
    // Tambahkan data lain
  ];

  const nextArticle = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section className="renungan-harian">
      <div className="articles-container">
        <button className="nav-arrow left" onClick={prevArticle}>
          <FaChevronLeft />
        </button>

        <div className="article-wrapper">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`article-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="card-content">
                <h2 className="section-title">Renungan Harian</h2>
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span>{article.author}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <p>{article.content}</p>
                <button className="read-more">
                  Baca Selengkapnya <FaChevronRight />
                </button>
              </div>
              
              <div className="card-image">
                <img src={article.image} alt={article.title} />
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={nextArticle}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default RenunganHarian;