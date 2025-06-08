import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './SuaraGembala.css';

const SuaraGembala = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // 3x3 grid
  const contentRef = useRef(null);
  
  // Data artikel yang sudah diperbarui dengan judul berbeda
  const articles = [
    {
      id: 1,
      image: '/assets/carousel_3.jpg',
      title: '"MARILAH KITA PERGI KE BETLEHEM..." (Luk 2:15)',
      content: 'Saudara-saudari yang terkasih, "Marilah kita pergi ke Betlehem untuk melihat apa yang terjadi di sana, seperti yang diberitahukan Tuhan kepada kita"...',
      author: 'KomsosKAK',
      date: '14 Des 2024',
    },
    {
      id: 2,
      image: '/assets/carousel_4.jpeg',
      title: '"KASIH ADALAH PENGIKAT YANG MEMPERSATUKAN" (Kol 3:14)',
      content: 'Saudara-saudari yang terkasih, dalam dunia yang terpecah-belah ini, kasih menjadi kekuatan yang menyatukan kita sebagai satu keluarga dalam Kristus...',
      author: 'KomsosKAK',
      date: '07 Des 2024',
    },
    {
      id: 3,
      image: '/assets/carousel_3.jpg',
      title: '"HIDUP DALAM RAHMAT TUHAN" (2 Kor 12:9)',
      content: 'Rahmat Tuhan selalu cukup bagi kita, seperti yang dikatakan kepada Paulus, "Cukuplah kasih karunia-Ku bagimu, sebab justru dalam kelemahanlah kuasa-Ku menjadi sempurna"...',
      author: 'KomsosKAK',
      date: '01 Des 2024',
    },
    {
      id: 4,
      image: '/assets/carousel_4.jpeg',
      title: '"IMAN DAN PERBUATAN" (Yak 2:17)',
      content: 'Iman tanpa perbuatan adalah iman yang mati. Bagaimana kita dapat menunjukkan iman kita dalam tindakan nyata sehari-hari? Mari kita renungkan bersama...',
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 5,
      image: '/assets/carousel_3.jpg',
      title: '"MEMBANGUN KELUARGA YANG DIBERKATI" (Mzm 128:1-6)',
      content: 'Keluarga adalah anugerah terindah dari Tuhan. Bagaimana kita dapat membangun keluarga yang diberkati dan menjadi saksi Kristus dalam kehidupan keluarga...',
      author: 'KomsosKAK',
      date: '18 Nov 2024',
    },
    {
      id: 6,
      image: '/assets/carousel_4.jpeg',
      title: '"MENJADI PELAKU FIRMAN" (Yak 1:22)',
      content: 'Jadilah pelaku firman dan bukan hanya pendengar saja, sebab jika kamu hanya mendengar tetapi tidak melakukannya, kamu menipu dirimu sendiri...',
      author: 'KomsosKAK',
      date: '10 Nov 2024',
    },
    {
      id: 7,
      image: '/assets/carousel_3.jpg',
      title: '"HIDUP DALAM DAMAI SEJAHTERA" (Fil 4:7)',
      content: 'Dan damai sejahtera Allah, yang melampaui segala akal, akan memelihara hati dan pikiranmu dalam Kristus Yesus. Bagaimana kita bisa hidup dalam damai sejahtera di tengah dunia yang penuh pergolakan?',
      author: 'KomsosKAK',
      date: '03 Nov 2024',
    },
    {
      id: 8,
      image: '/assets/carousel_4.jpeg',
      title: '"MENJADI GARAM DAN TERANG DUNIA" (Mat 5:13-16)',
      content: 'Kita dipanggil untuk menjadi garam dan terang dunia. Apa artinya menjadi garam yang memberi rasa dan terang yang menerangi kegelapan di sekitar kita?',
      author: 'KomsosKAK',
      date: '27 Okt 2024',
    },
    {
      id: 9,
      image: '/assets/carousel_3.jpg',
      title: '"SUKACITA DALAM MENGHADAPI PENCOBAAN" (Yak 1:2-4)',
      content: 'Saudara-saudariku, anggaplah sebagai suatu kebahagiaan apabila kamu jatuh ke dalam berbagai-bagai pencobaan, sebab ujian terhadap imanmu menghasilkan ketekunan...',
      author: 'KomsosKAK',
      date: '20 Okt 2024',
    },
    {
      id: 10,
      image: '/assets/carousel_4.jpeg',
      title: '"BERDIRILAH TEGUH DALAM IMAN" (1 Kor 16:13)',
      content: 'Berjaga-jagalah! Berdirilah dengan teguh dalam iman! Bersikaplah sebagai laki-laki! Tetap kuat! Bagaimana kita tetap teguh di tengah godaan dunia?',
      author: 'KomsosKAK',
      date: '13 Okt 2024',
    },
    {
      id: 11,
      image: '/assets/carousel_3.jpg',
      title: '"KASIH YANG MELAMPAUI PENGETAHUAN" (Ef 3:19)',
      content: 'Dan dapat mengenal kasih itu, yang melampaui segala pengetahuan, agar kamu dipenuhi di dalam seluruh kepenuhan Allah. Mari kita menyelami kasih Tuhan yang tak terbatas...',
      author: 'KomsosKAK',
      date: '06 Okt 2024',
    },
    {
      id: 12,
      image: '/assets/carousel_4.jpeg',
      title: '"KERAJAAN ALLAH ADA DI DALAM DIRIMU" (Luk 17:21)',
      content: 'Kerajaan Allah tidak datang dengan tanda-tanda lahiriah, juga orang tidak dapat mengatakan: Lihat, ia ada di sini atau ia ada di sana! Sebab sesungguhnya Kerajaan Allah ada di antara kamu...',
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
    <div className="suara-gembala-page" ref={contentRef}>
      <div className="gembala-page-header">
        <h1>Suara Gembala</h1>
      </div>
      
      <div className="gembala-articles-grid">
        {currentArticles.map((article) => (
          <div className="gembala-article-item" key={article.id}>
            <div className="gembala-article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="gembala-article-content">
              <h3 className="gembala-article-title">{article.title}</h3>
              <div className="gembala-article-meta">
                <span className="gembala-article-author">by {article.author}</span> 
                <span>|</span> 
                <span className="gembala-article-date">{article.date}</span>
              </div>
              <p className="gembala-article-excerpt">{article.content}</p>
              <Link to={`/suara-gembala/${article.id}`} className="gembala-read-more">
                Baca Selengkapnya <FaChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination model baru seperti di Download.jsx */}
      <div className="gembala-pagination-container">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`gembala-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
        </button>
        
        <div className="gembala-page-info">
          Halaman {currentPage} dari {totalPages}
        </div>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`gembala-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next Post <MdKeyboardDoubleArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default SuaraGembala;