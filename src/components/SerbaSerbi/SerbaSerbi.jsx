// SuaraGembala.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SerbaSerbi.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SerbaSerbi = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Data artikel serba serbi untuk tampilan di home (pilih yang terbaru)
  const articles = [
    {
      id: 1,
      image: '/assets/carousel_2.jpg',
      title: 'Penjelasan Logo Uskup Agung Kupang, Mgr Hironimus Pakaenoni',
      content: 'PASCE OVES MEAS – GEMBALAKANLAH DOMBA-DOMBAKU (Yoh 21:17). Logo Uskup Agung Kupang, Mgr. Hironimus Pakaenoni terdiri dari 11 unsur yang memiliki makna mendalam. Setiap elemen dalam logo mengandung simbolisme yang mencerminkan panggilan pastoral seorang gembala...',
      author: 'by KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/serba1.jpg',
      title: 'Sejarah Katedral Kristus Raja Kupang',
      content: 'Katedral Kristus Raja Kupang memiliki sejarah panjang yang dimulai sejak awal misi evangelisasi di Nusa Tenggara Timur. Bangunan megah ini menjadi saksi bisu perkembangan iman Katolik di wilayah timur Indonesia. Arsitektur katedral menggabungkan unsur tradisional lokal dengan gaya Eropa, menciptakan harmoni yang indah antara budaya setempat dan warisan Katolik universal...',
      author: 'KomsosKAK',
      date: '20 Des 2024',
    },
    {
      id: 3,
      image: '/assets/serba2.jpeg',
      title: 'Tradisi Natal di Nusa Tenggara Timur',
      content: 'Perayaan Natal di NTT memiliki keunikan tersendiri yang memadukan tradisi Katolik dengan kearifan lokal. Masyarakat NTT merayakan kelahiran Kristus dengan berbagai tradisi seperti pementasan drama Natal, nyanyian kolende, dan berbagai ritual adat yang telah diadaptasi dengan nilai-nilai Kristiani. Tradisi ini menunjukkan bagaimana iman Katolik dapat berakulturasi dengan budaya setempat...',
      author: 'KomsosKAK',
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
    <section className="serba-serbi">
      <div className="serba-serbi-articles-container">
        <button className="serba-serbi-nav-arrow left" onClick={prevArticle}>
          <FaChevronLeft />
        </button>

        <div className="serba-serbi-article-wrapper">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`serba-serbi-article-card ${index === activeIndex ? 'active' : 'hidden'}`}
            >
              <div className="serba-serbi-card-content">
                <h2 className="serba-serbi-section-title">Serba Serbi</h2>
                <h3>{article.title}</h3>
                <div className="serba-serbi-article-meta">
                  <span>{article.author}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <p>{article.content}</p>
                {/* Link ke detail page berdasarkan ID artikel */}
                <Link to={`/serba-serbi/${article.id}`} className="serba-serbi-read-more">
                  Baca Selengkapnya <FaChevronRight />
                </Link>
              </div>
              
              <div className="serba-serbi-card-image">
                <img src={article.image} alt={article.title} />
              </div>
            </div>
          ))}
        </div>

        <button className="serba-serbi-nav-arrow right" onClick={nextArticle}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SerbaSerbi;