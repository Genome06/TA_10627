import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './RenunganHarian.css';

const RenunganHarian = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // 3x3 grid
  const contentRef = useRef(null);
  
  // Data artikel renungan harian
  const articles = [
    {
      id: 1,
      image: '/assets/RenunganHarian.jpg',
      title: 'Selasa, 24 Desember 2024 - Bersiaplah Menyambut Kelahiran Sang Juruselamat',
      content: 'Hari Biasa Pekan Adven IV — Yesaya 7:10-14; Mzm 24:1-2.3-4.5-6; Roma 1:1-7; Matius 1:18-24. Injil hari ini mengisahkan tentang kelahiran Yesus yang diberitakan oleh malaikat kepada Yosef. Dalam kebingungan dan keraguan, Yosef dipanggil untuk mempercayai rencana Allah yang melampaui pemahaman manusia. Maria, yang mengandung oleh kuasa Roh Kudus, menjadi tanda kasih Allah yang tak terbatas...',
      author: 'KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/RenunganHarian2.jpg',
      title: 'Senin, 23 Desember 2024 - Nyanyian Pujian Maria, Magnificat',
      content: 'Hari Biasa Pekan Adven IV — Maleakhi 3:1-4.23-24; Mzm 25:4-5.8-9.10+14; Lukas 1:57-66. Dalam Injil hari ini, kita mendengar nyanyian pujian Maria, Magnificat, yang mengungkapkan kegembiraan dan rasa syukur atas karya Allah dalam hidupnya. Maria memuji Allah yang merendahkan yang tinggi dan meninggikan yang rendah. Magnificat mengajarkan kita untuk selalu bersyukur dan percaya pada kebaikan Allah...',
      author: 'KomsosKAK',
      date: '23 Des 2024',
    },
    {
      id: 3,
      image: '/assets/RenunganHarian3.jpeg',
      title: 'Minggu, 22 Desember 2024 - Iman Maria dalam Pemberitaan Malaikat',
      content: 'Minggu Adven IV — Mikha 5:1-4; Mzm 80:2-3.15-16.18-19; Ibrani 10:5-10; Lukas 1:39-45. Injil hari ini mengisahkan kunjungan Maria kepada Elisabet setelah Pemberitaan. Elisabet, dipenuhi Roh Kudus, mengucapkan berkat kepada Maria: "Terpujilah engkau karena engkau telah percaya!" Iman Maria menjadi teladan bagi kita semua untuk mempercayai janji-janji Allah meski tidak selalu kita pahami...',
      author: 'KomsosKAK',
      date: '22 Des 2024',
    },
    {
      id: 4,
      image: '/assets/RenunganHarian4.jpg',
      title: 'Sabtu, 21 Desember 2024 - Kelahiran Yohanes Pembaptis',
      content: 'Hari Biasa Pekan Adven IV — Kidung Agung 2:8-14; Mzm 33:2-3.11-12.20-21; Lukas 1:39-45. Injil hari ini menceritakan kelahiran Yohanes Pembaptis yang dinubuatkan malaikat Gabriel. Zakharia yang awalnya meragukan janji Allah akhirnya dibungkam sampai janjinya digenapi. Kelahiran Yohanes mengingatkan kita bahwa Allah selalu menepati janji-Nya, meski dalam cara yang tidak kita duga...',
      author: 'KomsosKAK',
      date: '21 Des 2024',
    },
    {
      id: 5,
      image: '/assets/RenunganHarian.jpg',
      title: 'Jumat, 20 Desember 2024 - Pemberitaan Malaikat kepada Maria',
      content: 'Hari Biasa Pekan Adven IV — Yesaya 7:10-14; Mzm 24:1-2.3-4.5-6; Lukas 1:26-38. Injil hari ini mengisahkan Pemberitaan malaikat Gabriel kepada Maria. Dalam peristiwa ini, Maria menunjukkan iman yang luar biasa dengan menjawab: "Jadilah padaku menurut perkataanmu." Respon Maria ini mengajarkan kita untuk menyerahkan diri sepenuhnya pada kehendak Allah, bahkan ketika kita tidak memahami rencana-Nya...',
      author: 'KomsosKAK',
      date: '20 Des 2024',
    },
    {
      id: 6,
      image: '/assets/RenunganHarian2.jpg',
      title: 'Kamis, 19 Desember 2024 - Malaikat Gabriel dan Zakharia',
      content: 'Hari Biasa Pekan Adven IV — Hakim-hakim 13:2-7.24-25; Mzm 71:3-4.5-6.16-17; Lukas 1:5-25. Injil hari ini menceritakan penampakan malaikat Gabriel kepada Zakharia yang memberitakan kelahiran Yohanes Pembaptis. Keraguan Zakharia terhadap janji Allah mengakibatkan dia dibungkam sampai janji itu digenapi. Kisah ini mengajarkan kita tentang pentingnya iman dan kepercayaan pada kuasa Allah...',
      author: 'KomsosKAK',
      date: '19 Des 2024',
    },
    {
      id: 7,
      image: '/assets/RenunganHarian3.jpeg',
      title: 'Rabu, 18 Desember 2024 - Silsilah Yesus Kristus',
      content: 'Hari Biasa Pekan Adven IV — Yeremia 23:5-8; Mzm 72:1-2.12-13.18-19; Matius 1:1-17. Injil hari ini menghadirkan silsilah Yesus Kristus yang menunjukkan bahwa Dia adalah Mesias yang dinanti-nantikan. Dalam daftar nama-nama ini, kita melihat bagaimana Allah bekerja melalui sejarah manusia, menggunakan orang-orang biasa untuk mewujudkan rencana keselamatan-Nya...',
      author: 'KomsosKAK',
      date: '18 Des 2024',
    },
    {
      id: 8,
      image: '/assets/RenunganHarian4.jpg',
      title: 'Selasa, 17 Desember 2024 - Nubuatan tentang Mesias',
      content: 'Hari Biasa Pekan Adven IV — Kejadian 49:2.8-10; Mzm 72:1-2.3-4.7-8.17; Matius 1:1-17. Bacaan hari ini menghadirkan nubuatan Yakub tentang Yehuda dan keturunannya yang akan menjadi pemimpin. Nubuatan ini dipenuhi dalam diri Yesus Kristus, keturunan Daud dari suku Yehuda. Hal ini menunjukkan bahwa rencana Allah telah disiapkan sejak lama dan digenapi dengan sempurna...',
      author: 'KomsosKAK',
      date: '17 Des 2024',
    },
    {
      id: 9,
      image: '/assets/RenunganHarian.jpg',
      title: 'Senin, 16 Desember 2024 - Bersiap Menyambut Kedatangan Tuhan',
      content: 'Hari Biasa Pekan Adven IV — Bilangan 24:2-7.15-17; Mzm 25:4-5.8-9.10+14; Matius 21:23-27. Injil hari ini mengisahkan pertanyaan para pemimpin agama tentang otoritas Yesus. Yesus menjawab dengan bijaksana, menunjukkan bahwa otoritas sejati datang dari Allah. Dalam masa Adven ini, kita diajak untuk mengakui otoritas Kristus atas hidup kita dan bersiap menyambut kedatangan-Nya...',
      author: 'KomsosKAK',
      date: '16 Des 2024',
    },
    {
      id: 10,
      image: '/assets/RenunganHarian2.jpg',
      title: 'Minggu, 15 Desember 2024 - Sukacita dalam Tuhan',
      content: 'Minggu Adven III (Gaudete) — Zefanya 3:14-18; Yes 12:2-3.4.5-6; Filipi 4:4-7; Lukas 3:10-18. Minggu Gaudete mengundang kita untuk bersukacita karena Tuhan sudah dekat. Yohanes Pembaptis mengajarkan cara hidup yang benar: berbagi dengan sesama, berlaku adil, dan puas dengan apa yang kita miliki. Sukacita sejati datang dari hidup sesuai kehendak Allah dan mengasihi sesama...',
      author: 'KomsosKAK',
      date: '15 Des 2024',
    },
    {
      id: 11,
      image: '/assets/RenunganHarian3.jpeg',
      title: 'Sabtu, 14 Desember 2024 - Pengharapan yang Tidak Mengecewakan',
      content: 'Hari Biasa Pekan Adven III — Sirakh 48:1-4.9-11; Mzm 80:2-3.15-16.18-19; Matius 17:9.10-13. Injil hari ini berbicara tentang Elia yang akan datang, yang Yesus katakan telah datang dalam diri Yohanes Pembaptis. Ini mengingatkan kita bahwa Allah menepati janji-Nya, meski tidak selalu dalam cara yang kita harapkan. Pengharapan kita dalam Tuhan tidak akan pernah mengecewakan...',
      author: 'KomsosKAK',
      date: '14 Des 2024',
    },
    {
      id: 12,
      image: '/assets/RenunganHarian4.jpg',
      title: 'Jumat, 13 Desember 2024 - Belas Kasih yang Menyelamatkan',
      content: 'Hari Biasa Pekan Adven III — Yesaya 48:17-19; Mzm 1:1-2.3.4+6; Matius 11:16-19. Yesus mengkritik generasi yang tidak pernah puas: menolak Yohanes karena terlalu keras, menolak Yesus karena terlalu lemah lembut. Hikmat dibuktikan oleh perbuatannya. Kita diajak untuk membuka hati pada cara Allah bekerja, yang seringkali berbeda dari ekspektasi kita...',
      author: 'KomsosKAK',
      date: '13 Des 2024',
    }
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
    <div className="renungan-harian-page" ref={contentRef}>
      <div className="renungan-page-header">
        <h1>Renungan Harian</h1>
      </div>
      
      <div className="renungan-articles-grid">
        {currentArticles.map((article) => (
          <div className="renungan-article-item" key={article.id}>
            <div className="renungan-article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="renungan-article-content">
              <h3 className="renungan-article-title">{article.title}</h3>
              <div className="renungan-article-meta">
                <span className="renungan-article-author">by {article.author}</span> 
                <span>|</span> 
                <span className="renungan-article-date">{article.date}</span>
              </div>
              <p className="renungan-article-excerpt">{article.content}</p>
              <Link to={`/renungan-harian/${article.id}`} className="renungan-read-more">
                Baca Selengkapnya <FaChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="renungan-pagination-container">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`renungan-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
        </button>
        
        <div className="renungan-page-info">
          Halaman {currentPage} dari {totalPages}
        </div>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`renungan-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next Post <MdKeyboardDoubleArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default RenunganHarian;