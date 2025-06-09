import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './KonsultasiIman.css';

const KonsultasiIman = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // 3x3 grid
  const contentRef = useRef(null);
  
  // Data artikel konsultasi iman
  const articles = [
    {
      id: 1,
      image: '/assets/paus.jpeg',
      title: 'PAUS',
      content: 'Kepala Gereja Katolik di dunia dipanggil dengan sebutan Paus (dari bahasa Yunani pappas, atau bahasa Italia papa, panggilan akrab seorang anak kecil terhadap ayahnya) karena otoritasnya yang superior dan karena dilaksanakan dengan cara yang paternal. Petrus adalah Paus pertama, dan sejak itu telah ada sebuah suksesi yang tak terputus dari para paus...',
      author: 'KomsosKAK',
      date: '14 Des 2024',
    },
    {
      id: 2,
      image: '/assets/kardinal.jpg',
      title: 'KARDINAL',
      content: 'Kardinal adalah pejabat Gereja tertinggi setelah Paus. Mereka merupakan dewan pemilih dan penasihat utama Bapa Suci. Kata "kardinal" berasal dari bahasa Latin "cardo" yang berarti "engsel", menyiratkan peran penting mereka dalam menggerakkan Gereja. Para kardinal adalah anggota dari Dewan Suci dan bertugas membantu Paus dalam mengelola Gereja Universal...',
      author: 'KomsosKAK',
      date: '07 Des 2024',
    },
    {
      id: 3,
      image: '/assets/uskup.jpg',
      title: 'USKUP',
      content: 'Uskup adalah pemimpin Gereja yang memiliki kepenuhan imamat, penerus para rasul, dan pastor dari sebuah keuskupan. Melalui tahbisan, seorang uskup menerima tiga tugas utama: mengajar (munus docendi), menguduskan (munus sanctificandi), dan memimpin (munus regendi). Uskup bertanggung jawab atas karya pastoral di wilayah keuskupannya...',
      author: 'KomsosKAK',
      date: '01 Des 2024',
    },
    {
      id: 4,
      image: '/assets/sakramen_baptis.jpg',
      title: 'SAKRAMEN BAPTIS',
      content: 'Sakramen Baptis adalah sakramen pertama dan pintu masuk ke dalam Gereja Katolik. Melalui Baptis, seseorang dibebaskan dari dosa asal, menjadi anak Allah, anggota Gereja, dan berbagian dalam misi Kristus. Sakramen ini diberikan dengan menuangkan air atau mencelupkan orang dalam air sambil mengucapkan: "Aku membaptis engkau dalam nama Bapa dan Putra dan Roh Kudus"...',
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 5,
      image: '/assets/sakramen_baptis.jpg',
      title: 'SAKRAMEN EKARISTI',
      content: 'Sakramen Ekaristi adalah "sumber dan puncak seluruh hidup kristiani" (Lumen Gentium 11). Dalam sakramen ini, Kristus sungguh-sungguh hadir dalam rupa roti dan anggur yang telah dikonsekrasi. Ekaristi adalah peringatan akan kurban Kristus di kayu salib dan juga perjamuan di mana kita menyatu dengan Kristus dan satu sama lain sebagai Gereja...',
      author: 'KomsosKAK',
      date: '18 Nov 2024',
    },
    {
      id: 6,
      image: '/assets/paus.jpeg',
      title: 'SAKRAMEN PENGAKUAN DOSA',
      content: 'Sakramen Pengakuan Dosa atau Rekonsiliasi adalah sakramen penyembuhan di mana umat beriman mengaku dosa-dosa mereka, menyatakan penyesalan, menerima absolusi, dan melakukan silih atas dosa. Kristus memberikan kuasa kepada para rasul dan penerusnya untuk mengampuni dosa: "Terimalah Roh Kudus. Jikalau kamu mengampuni dosa seseorang, dosanya diampuni..."',
      author: 'KomsosKAK',
      date: '10 Nov 2024',
    },
    {
      id: 7,
      image: '/assets/kardinal.jpg',
      title: 'DOA ROSARIO',
      content: 'Doa Rosario adalah doa meditasi yang berpusat pada peristiwa-peristiwa penting dalam kehidupan Yesus dan Maria. Rosario terdiri dari empat rangkaian misteri: Gembira, Terang, Sedih, dan Mulia. Dalam doa ini, kita mengucapkan doa Salam Maria, Bapa Kami, dan Kemuliaan sambil merenungkan misteri-misteri iman. Rosario adalah "ringkasan seluruh Injil"...',
      author: 'KomsosKAK',
      date: '03 Nov 2024',
    },
    {
      id: 8,
      image: '/assets/uskup.jpg',
      title: 'ADORASI EKARISTI',
      content: 'Adorasi Ekaristi adalah praktik devosional di mana umat beriman memuja dan menyembah Kristus yang sungguh hadir dalam Sakramen Mahakudus. Adorasi bisa dilakukan dalam bentuk adorasi sementara atau adorasi kekal (perpetual adoration). Praktik ini mendorong kita untuk masuk dalam keheningan, doa, dan persatuan yang lebih dalam dengan Kristus...',
      author: 'KomsosKAK',
      date: '27 Okt 2024',
    },
    {
      id: 9,
      image: '/assets/sakramen_baptis.jpg',
      title: 'NOVENA',
      content: 'Novena adalah doa khusus yang dilakukan selama sembilan hari berturut-turut dengan intensi tertentu. Praktik ini berakar pada sembilan hari para rasul berdoa bersama Maria setelah Kenaikan Yesus dan sebelum turunnya Roh Kudus pada Pentakosta. Novena mengungkapkan ketekunan dalam doa dan kepercayaan pada campur tangan ilahi...',
      author: 'KomsosKAK',
      date: '20 Okt 2024',
    },
    {
      id: 10,
      image: '/assets/kardinal.jpg',
      title: 'MASA ADVEN',
      content: 'Masa Adven adalah periode empat minggu sebelum Natal yang menandai awal tahun liturgi Gereja. Ini adalah waktu persiapan spiritual di mana umat beriman menantikan kedatangan Kristus: memperingati kedatangan-Nya pertama dalam inkarnasi dan menantikan kedatangan-Nya yang kedua pada akhir zaman. Tema-tema utama Adven adalah harapan, persiapan, sukacita, dan damai...',
      author: 'KomsosKAK',
      date: '13 Okt 2024',
    },
    {
      id: 11,
      image: '/assets/uskup.jpg',
      title: 'MASA PRAPASKAH',
      content: 'Masa Prapaskah atau Puasa adalah periode 40 hari (tidak termasuk hari Minggu) sebelum Paskah. Ini adalah waktu pertobatan, refleksi, dan persiapan untuk merayakan kebangkitan Kristus. Praktik-praktik Prapaskah meliputi puasa, doa, dan amal. Masa ini dimulai pada Rabu Abu dan berakhir sebelum Misa Perjamuan Terakhir pada Kamis Putih...',
      author: 'KomsosKAK',
      date: '06 Okt 2024',
    },
    {
      id: 12,
      image: '/assets/paus.jpeg',
      title: 'TRINITAS',
      content: 'Trinitas adalah ajaran sentral iman Kristen bahwa Allah adalah satu dalam tiga Pribadi: Bapa, Putra, dan Roh Kudus. Ketiga Pribadi ini adalah satu Allah yang sama, memiliki satu hakikat atau substansi ilahi yang sama. Misteri Trinitas tidak sepenuhnya dapat dipahami oleh akal manusia, tetapi diwahyukan kepada kita dalam Kitab Suci dan tradisi Gereja...',
      author: 'KomsosKAK',
      date: '29 Sep 2024',
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
    <div className="konsultasi-iman-page" ref={contentRef}>
      <div className="konsultasi-page-header">
        <h1>Konsultasi Iman</h1>
      </div>
      
      <div className="konsultasi-articles-grid">
        {currentArticles.map((article) => (
          <div className="konsultasi-article-item" key={article.id}>
            <div className="konsultasi-article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="konsultasi-article-content">
              <h3 className="konsultasi-article-title">{article.title}</h3>
              <div className="konsultasi-article-meta">
                <span className="konsultasi-article-author">by {article.author}</span> 
                <span>|</span> 
                <span className="konsultasi-article-date">{article.date}</span>
              </div>
              <p className="konsultasi-article-excerpt">{article.content}</p>
              <Link to={`/konsultasi-iman/${article.id}`} className="konsultasi-read-more">
                Baca Selengkapnya <FaChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="konsultasi-pagination-container">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`konsultasi-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
        </button>
        
        <div className="konsultasi-page-info">
          Halaman {currentPage} dari {totalPages}
        </div>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`konsultasi-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next Post <MdKeyboardDoubleArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default KonsultasiIman;