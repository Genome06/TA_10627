import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './BeritaHarian.css';

const BeritaHarian = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // 3x3 grid
  const contentRef = useRef(null);
  
  // Data artikel berita harian
  const articles = [
    {
      id: 1,
      image: '/assets/Berita_1.jpg',
      title: 'Salut, Ibu ini menemukan kekuatannya setelah baca Kitab Suci',
      content: 'Siolais, 30/9/2024 — Bulan Kitab Suci Nasional (BKSN) 2024 segera berakhir. Tetapi kemeriahan dan antusias umat belum berakhir. Beberapa paroki di Keuskupan Atambua masih terus mengadakan kegiatan terkait Kitab Suci. Salah satunya adalah Paroki St. Yohanes Pembaptis Siolais yang mengadakan sharing tentang pengalaman membaca Kitab Suci. Dalam kesempatan tersebut, seorang ibu bernama Maria Fatima membagikan pengalamannya yang menginspirasi...',
      author: 'KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/Berita_2.jpeg',
      title: 'Umat KUB Bunda Segala Bangsa Belajar Kitab Suci',
      content: 'Kupang, 27/9/2024 — Meski hanya dihadiri oleh 8 peserta, KUB Bunda Segala Bangsa Paroki Penfui tetap melaksanakan kegiatan belajar kitab suci khususnya Injil (20/9). Kegiatan ini merupakan bagian dari rangkaian peringatan Bulan Kitab Suci Nasional 2024. Para peserta yang hadir sangat antusias mengikuti pembahasan tentang Injil Markus. Mereka berdiskusi tentang makna dan aplikasi ayat-ayat dalam kehidupan sehari-hari...',
      author: 'KomsosKAK',
      date: '20 Des 2024',
    },
    {
      id: 3,
      image: '/assets/Berita_3.jpg',
      title: 'Akhirnya, Umat Kapela Nifununa Berkatekese di penghujung BKSN 2024',
      content: 'Di akhir pekan ketiga, dalam perjalanan menuju Kuasi Paroki Siolais, saya berkesempatan mampir di satu kapela yang masih dalam wilayah kuasi Siolais, kapela St. Yohanes Pemandi Nifununa. Di kapela yang terletak di puncak bukit ini, umat sedang mengadakan katekese sebagai penutup Bulan Kitab Suci Nasional 2024. Meskipun lokasinya terpencil, semangat umat untuk mempelajari Firman Allah sangat tinggi...',
      author: 'KomsosKAK',
      date: '18 Des 2024',
    },
    {
      id: 4,
      image: '/assets/carousel_1.jpg',
      title: 'Perayaan Natal 2024 di Katedral Santo Yosef Kupang',
      content: 'Kupang, 25/12/2024 — Katedral Santo Yosef Kupang dipenuhi umat yang merayakan Natal 2024. Uskup Kupang, Mgr. Petrus Turang, memimpin Misa Natal tengah malam dengan tema "Kristus Terang Dunia". Dalam homilinya, beliau mengajak umat untuk menjadi pembawa terang Kristus di tengah kegelapan zaman. Perayaan ini dihadiri ribuan umat dari berbagai paroki se-Keuskupan Kupang...',
      author: 'KomsosKAK',
      date: '25 Des 2024',
    },
    {
      id: 5,
      image: '/assets/carousel_2.jpg',
      title: 'Tahbisan Diakon Baru di Seminari Menengah Todabelu',
      content: 'Maumere, 15/12/2024 — Seminari Menengah Santo Paulus Todabelu mengadakan upacara tahbisan diakon untuk 15 alumnus. Upacara yang dipimpin oleh Uskup Maumere, Mgr. Ewaldus Martinus Sedu, ini menjadi momen bersejarah bagi calon-calon imam muda. Para diakon baru akan melanjutkan studi di seminari tinggi untuk persiapan tahbisan imam. Keluarga dan sahabat turut hadir memberikan dukungan dalam perayaan ini...',
      author: 'KomsosKAK',
      date: '15 Des 2024',
    },
    {
      id: 6,
      image: '/assets/carousel_3.jpg',
      title: 'Program Bantuan Sosial Gereja untuk Korban Bencana Alam',
      content: 'Atambua, 10/12/2024 — Keuskupan Atambua meluncurkan program bantuan sosial untuk korban bencana alam yang melanda wilayah Timor. Program ini meliputi bantuan pangan, pakaian, dan tempat tinggal sementara. Uskup Atambua, Mgr. Dominikus Saku, menyatakan bahwa Gereja memiliki tanggung jawab moral untuk membantu sesama yang sedang dalam kesulitan. Bantuan ini merupakan wujud nyata kasih Kristus...',
      author: 'KomsosKAK',
      date: '10 Des 2024',
    },
    {
      id: 7,
      image: '/assets/Berita_1.jpg',
      title: 'Konferensi Keluarga Katolik Se-Provinsi NTT',
      content: 'Kupang, 05/12/2024 — Hotel Kristal Kupang menjadi venue Konferensi Keluarga Katolik Se-Provinsi NTT dengan tema "Keluarga, Gereja Domestik yang Beriman". Acara ini dihadiri 200 delegasi dari seluruh keuskupan di NTT. Konferensi membahas tantangan keluarga modern dan cara menghadapinya dengan nilai-nilai kristiani. Berbagai workshop dan seminar diselenggarakan untuk memperkuat peran keluarga dalam masyarakat...',
      author: 'KomsosKAK',
      date: '05 Des 2024',
    },
    {
      id: 8,
      image: '/assets/Berita_2.jpeg',
      title: 'Misi Kesehatan Gratis di Pedalaman Flores',
      content: 'Ende, 01/12/2024 — Tim medis Katolik mengadakan misi kesehatan gratis di daerah pedalaman Flores. Kegiatan ini melayani lebih dari 500 pasien dari berbagai desa terpencil. Pelayanan meliputi pemeriksaan umum, pengobatan, dan edukasi kesehatan. Dr. Maria Goreti, ketua tim, menyatakan bahwa misi ini merupakan wujud pelayanan Gereja di bidang kesehatan, mengikuti jejak Kristus yang menyembuhkan orang sakit...',
      author: 'KomsosKAK',
      date: '01 Des 2024',
    },
    {
      id: 9,
      image: '/assets/Berita_3.jpg',
      title: 'Pelatihan Katekis se-Keuskupan Larantuka',
      content: 'Larantuka, 28/11/2024 — Sebanyak 150 katekis dari seluruh wilayah Keuskupan Larantuka mengikuti pelatihan intensif selama tiga hari. Pelatihan ini bertujuan meningkatkan kemampuan para katekis dalam menyampaikan ajaran iman. Materi yang diberikan meliputi metodologi katekese modern, psikologi anak, dan penggunaan teknologi dalam katekese. Uskup Larantuka, Mgr. Fransiskus Kopong Kung, memberikan arahan khusus tentang pentingnya peran katekis...',
      author: 'KomsosKAK',
      date: '28 Nov 2024',
    },
    {
      id: 10,
      image: '/assets/carousel_1.jpg',
      title: 'Peresmian Gereja Baru di Desa Terpencil Sumba',
      content: 'Waingapu, 25/11/2024 — Desa Praijing, Sumba Timur, meresmikan gereja baru setelah 10 tahun pembangunan. Gereja St. Tarsisius ini dapat menampung 300 umat dan menjadi pusat kehidupan rohani masyarakat setempat. Uskup Waingapu, Mgr. Siprianus Hormat, memimpin upacara pemberkatan dan menekankan pentingnya gereja sebagai rumah bersama umat beriman. Pembangunan gereja ini didukung penuh oleh masyarakat lokal...',
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 11,
      image: '/assets/carousel_2.jpg',
      title: 'Festival Musik Rohani Anak Muda Katolik',
      content: 'Maumere, 22/11/2024 — Anak muda Katolik se-NTT berkumpul dalam Festival Musik Rohani dengan tema "Nyanyikan Pujian untuk Tuhan". Lebih dari 50 grup musik dari berbagai paroki tampil memukau. Festival ini tidak hanya ajang kompetisi tetapi juga sarana evangelisasi melalui musik. Para peserta menunjukkan kreativitas dalam mengaransemen lagu-lagu rohani dengan gaya kontemporer yang menarik anak muda...',
      author: 'KomsosKAK',
      date: '22 Nov 2024',
    },
    {
      id: 12,
      image: '/assets/carousel_3.jpg',
      title: 'Program Beasiswa Pendidikan untuk Anak Kurang Mampu',
      content: 'Ruteng, 20/11/2024 — Yayasan Pendidikan Katolik Manggarai meluncurkan program beasiswa untuk 100 anak kurang mampu tingkat SD hingga SMA. Program ini merupakan komitmen Gereja dalam bidang pendidikan. Mgr. Siprianus Hormat menyatakan bahwa pendidikan adalah hak setiap anak dan Gereja berperan memastikan tidak ada anak yang putus sekolah karena masalah ekonomi. Beasiswa ini akan diberikan selama satu tahun penuh...',
      author: 'KomsosKAK',
      date: '20 Nov 2024',
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
    <div className="berita-harian-page" ref={contentRef}>
      <div className="berita-page-header">
        <h1>Berita Harian</h1>
      </div>
      
      <div className="berita-page-articles-grid">
        {currentArticles.map((article) => (
          <div className="berita-page-article-item" key={article.id}>
            <div className="berita-page-article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="berita-page-article-content">
              <h3 className="berita-page-article-title">{article.title}</h3>
              <div className="berita-page-article-meta">
                <span className="berita-page-article-author">by {article.author}</span> 
                <span>|</span> 
                <span className="berita-page-article-date">{article.date}</span>
              </div>
              <p className="berita-page-article-excerpt">{article.content}</p>
              <Link to={`/berita-harian/${article.id}`} className="berita-page-read-more">
                Baca Selengkapnya <FaChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="berita-page-pagination-container">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`berita-page-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
        </button>
        
        <div className="berita-page-info">
          Halaman {currentPage} dari {totalPages}
        </div>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`berita-page-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next Post <MdKeyboardDoubleArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default BeritaHarian;