import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './Tokoh.css';

const Tokoh = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // 3x3 grid
  const contentRef = useRef(null);
  
  // Data artikel tokoh
  const articles = [
    {
      id: 1,
      image: '/assets/Tokoh.jpeg',
      title: 'Santo Aloysius Gonzaga, Biarawan dan Pengaku Iman',
      content: 'Santo Aloysius Gonzaga lahir di Castiglione delle Stiviere, Italia Utara pada tanggal 9 Maret 1568. Ia lahir sebagai putera tertua dari keluarga bangsawan yang kaya raya. Sejak kecil, Aloysius sudah menunjukkan tanda-tanda kesalehan yang luar biasa dan memiliki kerinduan yang mendalam untuk melayani Allah...',
      author: 'KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/tokoh2.jpeg',
      title: 'Santa Teresa dari Avila, Mistikus dan Penulis Spiritual',
      content: 'Santa Teresa dari Avila (1515-1582) adalah salah satu santo terbesar dalam sejarah Gereja Katolik. Ia adalah mistikus, reformator Karmel, dan Pujangga Gereja. Teresa dikenal karena pengalaman mistiknya yang mendalam dan tulisan-tulisannya tentang doa dan kehidupan spiritual yang sangat berpengaruh...',
      author: 'KomsosKAK',
      date: '20 Des 2024',
    },
    {
      id: 3,
      image: '/assets/tokoh3.jpeg',
      title: 'Santo Fransiskus dari Assisi, Bapa Kaum Miskin',
      content: 'Santo Fransiskus dari Assisi (1181-1226) adalah salah satu santo yang paling dicintai dalam sejarah Gereja. Lahir dari keluarga pedagang kaya, ia meninggalkan kehidupan mewah untuk mengikuti jejak Kristus dalam kemiskinan dan pelayanan kepada kaum papa. Ia pendiri Ordo Fransiskan...',
      author: 'KomsosKAK',
      date: '18 Des 2024',
    },
    {
      id: 4,
      image: '/assets/tokoh4.jpg',
      title: 'Santo Thomas Aquinas, Pujangga Gereja',
      content: 'Santo Thomas Aquinas (1225-1274) adalah salah satu teolog dan filsuf terbesar dalam sejarah Gereja Katolik. Dijuluki "Pujangga Angelik", ia berhasil memadukan filsafat Aristoteles dengan ajaran kristiani, menciptakan sintesis pemikiran yang sangat berpengaruh hingga kini...',
      author: 'KomsosKAK',
      date: '15 Des 2024',
    },
    {
      id: 5,
      image: '/assets/Tokoh.jpeg',
      title: 'Santa Theresia dari Kalkutta, Malaikat Kaum Miskin',
      content: 'Santa Theresia dari Kalkutta (1910-1997), lahir dengan nama Agnes Gonxha Bojaxhiu, adalah seorang religius Katolik yang mengabdikan hidupnya untuk melayani kaum termiskin di India. Ia dikenal karena karyanya di antara kaum miskin, sakit, yatim piatu, dan orang-orang yang sekarat di Kalkutta...',
      author: 'KomsosKAK',
      date: '12 Des 2024',
    },
    {
      id: 6,
      image: '/assets/tokoh2.jpeg',
      title: 'Santo Yohanes Paulus II, Paus Perjalanan',
      content: 'Santo Yohanes Paulus II (1920-2005), lahir Karol Józef Wojtyła, adalah Paus ke-264 yang memimpin Gereja Katolik dari tahun 1978 hingga 2005. Ia dikenal sebagai "Paus Perjalanan" karena melakukan 104 perjalanan apostolik ke luar negeri, lebih banyak dari semua paus sebelumnya...',
      author: 'KomsosKAK',
      date: '08 Des 2024',
    },
    {
      id: 7,
      image: '/assets/tokoh3.jpeg',
      title: 'Santo Ignatius dari Loyola, Pendiri Yesuit',
      content: 'Santo Ignatius dari Loyola (1491-1556) adalah pendiri Serikat Yesus (Yesuit). Lahir sebagai seorang bangsawan Basque, hidupnya berubah total setelah mengalami pertobatan spiritual. Ia mengembangkan "Latihan-latihan Rohani" yang menjadi metode spiritual berpengaruh dalam tradisi Katolik...',
      author: 'KomsosKAK',
      date: '05 Des 2024',
    },
    {
      id: 8,
      image: '/assets/tokoh4.jpg',
      title: 'Santa Monica, Teladan Ibu Kristiani',
      content: 'Santa Monica (331-387) adalah teladan ibu Kristiani yang dikenal karena ketekunannya dalam berdoa untuk pertobatan putranya, Santo Agustinus. Selama bertahun-tahun, ia tidak pernah berhenti berdoa dan menangis untuk putranya yang hidup dalam dosa...',
      author: 'KomsosKAK',
      date: '02 Des 2024',
    },
    {
      id: 9,
      image: '/assets/Tokoh.jpeg',
      title: 'Santo Agustinus, Pujangga Gereja dari Afrika',
      content: 'Santo Agustinus (354-430) adalah salah satu Bapa Gereja yang paling berpengaruh. Lahir di Tagaste, Afrika Utara, ia mengalami perjalanan spiritual yang dramatis dari kehidupan penuh dosa menuju pertobatan yang mendalam. Tulisan-tulisannya sangat mempengaruhi teologi Kristen...',
      author: 'KomsosKAK',
      date: '28 Nov 2024',
    },
    {
      id: 10,
      image: '/assets/tokoh2.jpeg',
      title: 'Santo Petrus, Batu Karang Gereja',
      content: 'Santo Petrus adalah salah satu dari dua belas rasul Yesus dan menjadi pemimpin pertama Gereja Katolik. Nama aslinya Simon, tetapi Yesus memberinya nama Petrus yang berarti "batu karang". Meskipun pernah menyangkal Yesus tiga kali, ia kemudian menjadi saksi yang berani...',
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 11,
      image: '/assets/tokoh3.jpeg',
      title: 'Santo Paulus, Rasul Bangsa-bangsa',
      content: 'Santo Paulus, sebelumnya bernama Saulus, adalah salah satu tokoh paling penting dalam sejarah Kekristenan. Awalnya seorang penganiaya Kristen, ia mengalami pertobatan dramatis dalam perjalanan ke Damaskus. Setelah itu, ia menjadi misionaris yang gigih menyebarkan Injil...',
      author: 'KomsosKAK',
      date: '22 Nov 2024',
    },
    {
      id: 12,
      image: '/assets/tokoh4.jpg',
      title: 'Santa Maria Goretti, Martir Kemurnian',
      content: 'Santa Maria Goretti (1890-1902) adalah seorang gadis Italia yang menjadi martir pada usia 11 tahun. Ia dibunuh ketika menolak godaan seksual dari tetangganya. Sebelum meninggal, ia memaafkan pembunuhnya. Maria Goretti dikanonisasi sebagai santa dan menjadi pelindung remaja...',
      author: 'KomsosKAK',
      date: '18 Nov 2024',
    },
  ];

  // Logic untuk pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const prevPage = () => {
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
    <div className="tokoh-page" ref={contentRef}>
      <div className="tokoh-page-header">
        <h1>Tokoh</h1>
      </div>
      
      <div className="tokoh-page-articles-grid">
        {currentArticles.map((article) => (
          <div className="tokoh-page-article-item" key={article.id}>
            <div className="tokoh-page-article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="tokoh-page-article-content">
              <h3 className="tokoh-page-article-title">{article.title}</h3>
              <div className="tokoh-page-article-meta">
                <span className="tokoh-page-article-author">by {article.author}</span> 
                <span>|</span> 
                <span className="tokoh-page-article-date">{article.date}</span>
              </div>
              <p className="tokoh-page-article-excerpt">{article.content}</p>
              <Link to={`/tokoh/${article.id}`} className="tokoh-page-read-more">
                Baca Selengkapnya <FaChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="tokoh-page-pagination-container">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`tokoh-page-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
        </button>
        
        <div className="tokoh-page-info">
          Halaman {currentPage} dari {totalPages}
        </div>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`tokoh-page-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next Post <MdKeyboardDoubleArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Tokoh;