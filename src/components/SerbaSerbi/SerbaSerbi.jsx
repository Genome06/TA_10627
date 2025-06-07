// SuaraGembala.jsx
import React, { useState } from 'react';
import './SerbaSerbi.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SerbaSerbi = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const articles = [
    {
      image: '/assets/carousel_2.jpg',
      title: 'Penjelasan Logo Uskup Agung Kupang, Mgr Hironimus Pakaenoni',
      content: 'PASCE OVES MEAS – GEMBALAKANLAH DOMBA-DOMBAKU (Yoh 21:17). Ada 11 unsur dalam Logo Uskup Agung Kupang, Mgr. Hironimus Pakaenoni. Topik ....',
      author: 'by KomsosKAK',
      date: '24 Des 2024',
    },
    {
      image: '/assets/carousel_2.jpg',
      title: 'Penjelasan Logo Uskup Agung Kupang, Mgr Hironimus Pakaenoni',
      content: 'PASCE OVES MEAS – GEMBALAKANLAH DOMBA-DOMBAKU (Yoh 21:17). Ada 11 unsur dalam Logo Uskup Agung Kupang, Mgr. Hironimus Pakaenoni. Topik ....',
      author: 'by KomsosKAK',
      date: '24 Des 2024',
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
    <section className="serba-serbi">
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
                <h2 className="section-title">Serba Serbi</h2>
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

export default SerbaSerbi;