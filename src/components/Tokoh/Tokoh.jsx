// SuaraGembala.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tokoh.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Tokoh = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const articles = [
    {
      id: 1,
      image: '/assets/Tokoh.jpeg',
      title: 'Santo Aloysius Gonzaga, Biarawan dan Pengaku Iman',
      content: 'Santo Aloysius Gonzaga lahir di Castiglione delle Stiviere, Italia Utara pada tanggal 9 Maret 1568. Ia lahir sebagai putera tertua dari keluarga bangsawan yang kaya raya. Sejak kecil, Aloysius sudah menunjukkan tanda-tanda kesalehan yang luar biasa...',
      author: 'by KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/tokoh2.jpeg',
      title: 'Santa Teresa dari Avila, Mistikus dan Penulis Spiritual',
      content: 'Santa Teresa dari Avila (1515-1582) adalah salah satu santo terbesar dalam sejarah Gereja Katolik. Ia adalah mistikus, reformator Karmel, dan Pujangga Gereja. Teresa dikenal karena pengalaman mistiknya yang mendalam...',
      author: 'by KomsosKAK',
      date: '20 Des 2024',
    },
    {
      id: 3,
      image: '/assets/tokoh3.jpeg',
      title: 'Santo Fransiskus dari Assisi, Bapa Kaum Miskin',
      content: 'Santo Fransiskus dari Assisi (1181-1226) adalah salah satu santo yang paling dicintai dalam sejarah Gereja. Lahir dari keluarga pedagang kaya, ia meninggalkan kehidupan mewah untuk mengikuti jejak Kristus...',
      author: 'by KomsosKAK',
      date: '18 Des 2024',
    },
  ];

  const nextArticle = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section className="tokoh">
      <div className="tokoh-articles-container">
        <button className="tokoh-nav-arrow left" onClick={prevArticle}>
          <FaChevronLeft />
        </button>

        <div className="tokoh-article-wrapper">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`tokoh-article-card ${index === activeIndex ? 'active' : 'hidden'}`}
            >
              <div className="tokoh-card-content">
                <h2 className="tokoh-section-title">Tokoh</h2>
                <h3>{article.title}</h3>
                <div className="tokoh-article-meta">
                  <span>{article.author}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <p>{article.content}</p>
                <Link to={`/tokoh/${article.id}`} className="tokoh-read-more">
                  Baca Selengkapnya <FaChevronRight />
                </Link>
              </div>
              
              <div className="tokoh-card-image">
                <img src={article.image} alt={article.title} />
              </div>
            </div>
          ))}
        </div>

        <button className="tokoh-nav-arrow right" onClick={nextArticle}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Tokoh;