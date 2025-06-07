import React, { useState, useRef } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './PerakEpiscopal.css';

const PerakEpiscopal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;
  const contentRef = useRef(null); // Tambahkan ref

  // Data dummy 22 artikel
  const articles = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    image: `/assets/episcopal_${(i % 3) + 1}.jpg`,
    title: `Artikel Perak Episcopal ${i + 1}`,
    excerpt: `Ini adalah cuplikan artikel Perak Episcopal yang ke-${i + 1}. Artikel ini membahas tentang perjalanan episkopal Mgr. Petrus Turang...`,
    author: 'by KomsosKAK',
    date: `${24 + Math.floor(i / 6)} Des 2024`
  }));

  // Urutkan berdasarkan tanggal
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.date.split(' ').reverse().join('-')) - 
    new Date(a.date.split(' ').reverse().join('-'))
  );

  // Hitung indeks artikel
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Total halaman
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);

  const nextSlide = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const prevSlide = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="perak-episcopal-page" ref={contentRef}>
      <main className="perak-episcopal-content">
        <div className="perak-episcopal-container">
          <h1 className="perak-episcopal-title">Perak Episcopal Mgr Petrus Turang</h1>
          
          <div className="perak-articles-grid">
            {currentArticles.map(article => (
              <div key={article.id} className="perak-article-card">
                <div className="perak-card-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="perak-card-content">
                  <h3>{article.title}</h3>
                  <div className="perak-article-meta">
                    <span>{article.author}</span>
                    <span>|</span>
                    <span>{article.date}</span>
                  </div>
                  <p className="perak-excerpt">{article.excerpt}</p>
                  <Link to={`/perak-episcopal/detail/${article.id}`} className="perak-read-more">
                    Baca Selengkapnya <FaChevronRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Baru dengan Desain yang Diinginkan */}
          <div className="perak-pagination">
            <button 
              onClick={prevSlide} 
              disabled={currentPage === 1}
              className={`perak-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
            >
              <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
            </button>
            <div className="perak-page-info">
              Halaman {currentPage} dari {totalPages}
            </div>
            <button 
              onClick={nextSlide} 
              disabled={currentPage === totalPages}
              className={`perak-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
            >
              Next Post <MdKeyboardDoubleArrowRight className="icon" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerakEpiscopal;