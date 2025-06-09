// SuaraGembala.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Tambahkan import Link
import './KonsultasiIman.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const KonsultasiIman = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const articles = [
    {
      id: 1, // Tambahkan id
      image: '/assets/paus.jpeg',
      title: 'PAUS',
      content: 'Kepala Gereja Katolik di dunia dipanggil dengan sebutan Paus (dari bahasa Yunani pappas, atau bahasa Italia papa, panggilan akrab seorang anak kecil terhadap ayahnya) karena otoritasnya yang superior dan karena dilaksanakan dengan cara yang paternal ....',
      author: 'by KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2, // Tambahkan id
      image: '/assets/kardinal.jpg',
      title: 'KARDINAL',
      content: 'Kardinal adalah pejabat Gereja tertinggi setelah Paus. Mereka merupakan dewan pemilih dan penasihat utama Bapa Suci. Kata "kardinal" berasal dari bahasa Latin "cardo" yang berarti "engsel", menyiratkan peran penting mereka dalam menggerakkan Gereja...',
      author: 'KomsosKAK',
      date: '07 Des 2024',
    },
  ];

  const nextArticle = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section className="konsultasi-iman">
      <div className="konsultasi-iman-articles-container">
        <button className="konsultasi-iman-nav-arrow left" onClick={prevArticle}>
          <FaChevronLeft />
        </button>

        <div className="konsultasi-iman-article-wrapper">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`konsultasi-iman-article-card ${index === activeIndex ? 'active' : 'hidden'}`}
            >
              <div className="konsultasi-iman-card-content">
                <h2 className="konsultasi-iman-section-title">Konsultasi Iman</h2>
                <h3>{article.title}</h3>
                <div className="konsultasi-iman-article-meta">
                  <span>{article.author}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <p>{article.content}</p>
                {/* Update tombol untuk menggunakan Link */}
                <Link to={`/konsultasi-iman/${article.id}`} className="konsultasi-iman-read-more">
                  Baca Selengkapnya <FaChevronRight />
                </Link>
              </div>
              
              <div className="konsultasi-iman-card-image">
                <img src={article.image} alt={article.title} />
              </div>
            </div>
          ))}
        </div>

        <button className="konsultasi-iman-nav-arrow right" onClick={nextArticle}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default KonsultasiIman;