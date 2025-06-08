// SuaraGembala.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SuaraGembala.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SuaraGembala = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const articles = [
    {
      id: 1,
      image: '/assets/carousel_3.jpg',
      title: '"MARILAH KITA PERGI KE BETLEHEM..." (Luk 2:15)',
      content: 'Saudara-saudari yang terkasih, "Marilah kita pergi ke Betlehem untuk melihat apa yang terjadi di sana, seperti yang diberitahukan Tuhan kepada kita"...',
      author: 'KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/carousel_4.jpeg',
      title: '"HIDUP DALAM RAHMAT TUHAN" (2 Kor 12:9)',
      content: 'Saudara-saudari yang terkasih, dalam dunia yang penuh tantangan ini, rahmat Tuhan selalu cukup bagi kita. "Cukuplah kasih karunia-Ku bagimu, sebab justru dalam kelemahanlah kuasa-Ku menjadi sempurna"...',
      author: 'KomsosKAK',
      date: '17 Des 2024',
    },
    // Bisa ditambahkan artikel lain jika diperlukan
  ];

  const nextArticle = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section className="suara-gembala">
      <div className="articles-container">
        <button className="nav-arrow left" onClick={prevArticle}>
          <FaChevronLeft />
        </button>

        <div className="article-wrapper">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`article-card ${index === activeIndex ? 'active' : 'hidden'}`}
            >
              <div className="card-content">
                <h2 className="section-title">Suara Gembala</h2>
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span>by {article.author}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <p>{article.content}</p>
                <Link to={`/suara-gembala/${article.id}`} className="read-more">
                  Baca Selengkapnya <FaChevronRight />
                </Link>
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

export default SuaraGembala;