import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './SerbaSerbi.css';

const SerbaSerbi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // 3x3 grid
  const contentRef = useRef(null);
  
  // Data artikel serba serbi
  const articles = [
    {
      id: 1,
      image: '/assets/carousel_2.jpg',
      title: 'Penjelasan Logo Uskup Agung Kupang, Mgr Hironimus Pakaenoni',
      content: 'PASCE OVES MEAS – GEMBALAKANLAH DOMBA-DOMBAKU (Yoh 21:17). Ada 11 unsur dalam Logo Uskup Agung Kupang, Mgr. Hironimus Pakaenoni. Logo ini mengandung makna mendalam tentang tugas pastoral seorang gembala yang dipanggil untuk menggembalakan umat dengan penuh kasih dan dedikasi. Setiap unsur dalam logo memiliki simbolisme khusus yang mencerminkan visi dan misi pelayanan pastoral di Keuskupan Agung Kupang...',
      author: 'KomsosKAK',
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
    {
      id: 4,
      image: '/assets/serba3.jpg',
      title: 'Peranan Gereja dalam Pendidikan di NTT',
      content: 'Gereja Katolik telah memainkan peran penting dalam dunia pendidikan di Nusa Tenggara Timur sejak masa penjajahan. Banyak sekolah dan universitas yang didirikan oleh kongregasi religius telah melahirkan generasi-generasi terdidik yang berkontribusi bagi pembangunan daerah. Pendidikan Katolik di NTT tidak hanya mengajarkan ilmu pengetahuan tetapi juga nilai-nilai moral dan spiritual...',
      author: 'KomsosKAK',
      date: '15 Des 2024',
    },
    {
      id: 5,
      image: '/assets/serba1.jpg',
      title: 'Festival Budaya Kristiani NTT',
      content: 'Festival Budaya Kristiani NTT merupakan ajang penting untuk menampilkan kekayaan budaya lokal yang telah berakulturasi dengan nilai-nilai Kristiani. Event ini mempertontonkan berbagai tarian tradisional, musik daerah, dan seni pertunjukan yang mengangkat tema-tema rohani. Festival ini menjadi wadah untuk melestarikan warisan budaya sambil memperkuat identitas Kristiani masyarakat NTT...',
      author: 'KomsosKAK',
      date: '12 Des 2024',
    },
    {
      id: 6,
      image: '/assets/serba2.jpeg',
      title: 'Pelayanan Sosial Gereja di Masa Pandemi',
      content: 'Selama masa pandemi COVID-19, Gereja Katolik di NTT menunjukkan kepedulian nyata melalui berbagai program pelayanan sosial. Mulai dari pembagian sembako, layanan kesehatan gratis, hingga pendampingan psikologis bagi masyarakat yang terdampak. Pelayanan ini mencerminkan ajaran Kristus tentang kasih kepada sesama, terutama kepada mereka yang paling membutuhkan...',
      author: 'KomsosKAK',
      date: '08 Des 2024',
    },
    {
      id: 7,
      image: '/assets/serba3.jpg',
      title: 'Makna Simbolik Tenun dalam Liturgi',
      content: 'Tenun tradisional NTT memiliki tempat khusus dalam liturgi Gereja Katolik setempat. Berbagai motif dan warna dalam tenun tidak hanya memiliki nilai estetis tetapi juga mengandung makna spiritual yang mendalam. Penggunaan tenun dalam perayaan liturgi menunjukkan bagaimana budaya lokal dapat memperkaya ekspresi iman dalam konteks lokal tanpa mengurangi universalitas pesan Injil...',
      author: 'KomsosKAK',
      date: '05 Des 2024',
    },
    {
      id: 8,
      image: '/assets/serba1.jpg',
      title: 'Kongregasi Religius di NTT',
      content: 'Berbagai kongregasi religius pria dan wanita telah berkarya di NTT selama puluhan tahun. Mereka tidak hanya melayani dalam bidang pastoral tetapi juga pendidikan, kesehatan, dan pemberdayaan masyarakat. Kehadiran para religius ini telah memberikan warna tersendiri bagi kehidupan menggereja di NTT dan menjadi teladan hidup bakti yang total kepada Allah dan sesama...',
      author: 'KomsosKAK',
      date: '02 Des 2024',
    },
    {
      id: 9,
      image: '/assets/serba2.jpeg',
      title: 'Musik Liturgi Khas NTT',
      content: 'Musik liturgi di NTT memiliki karakteristik unik yang memadukan irama tradisional dengan lagu-lagu Gereja universal. Penggunaan alat musik tradisional seperti sasando, gong, dan tifa dalam ibadat menciptakan suasana peribadatan yang khas dan memperkaya khazanah musik liturgi Katolik Indonesia. Musik ini menjadi salah satu cara evangelisasi melalui seni dan budaya...',
      author: 'KomsosKAK',
      date: '28 Nov 2024',
    },
    {
      id: 10,
      image: '/assets/serba3.jpg',
      title: 'Program Katekese Berbasis Budaya Lokal',
      content: 'Program katekese di NTT dikembangkan dengan pendekatan inkulturasi, mengintegrasikan nilai-nilai budaya lokal dengan ajaran iman Katolik. Metode pengajaran menggunakan cerita rakyat, permainan tradisional, dan ritual adat yang diadaptasi dengan pesan Injil. Pendekatan ini terbukti efektif dalam menanamkan nilai-nilai iman kepada generasi muda dengan cara yang mudah dipahami dan diterima...',
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 11,
      image: '/assets/serba1.jpg',
      title: 'Peran Awam dalam Pelayanan Gereja',
      content: 'Umat awam di NTT memiliki peran aktif yang sangat penting dalam kehidupan menggereja. Mereka terlibat dalam berbagai pelayanan mulai dari katekis, guru sekolah minggu, hingga tim pastoral paroki. Keterlibatan awam ini menunjukkan kesadaran akan panggilan baptismal untuk turut serta dalam misi evangelisasi dan pembangunan Kerajaan Allah di bumi NTT...',
      author: 'KomsosKAK',
      date: '22 Nov 2024',
    },
    {
      id: 12,
      image: '/assets/serba2.jpeg',
      title: 'Situs Ziarah Katolik di NTT',
      content: 'NTT memiliki berbagai situs ziarah yang menjadi tempat doa dan refleksi spiritual bagi umat Katolik. Mulai dari Gua Maria di berbagai daerah, makam para misionaris, hingga tempat-tempat bersejarah perkembangan Gereja Katolik. Situs-situs ini menjadi sarana penguatan iman dan tempat mencari inspirasi spiritual bagi para peziarah yang datang dari berbagai daerah...',
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
    <div className="serba-serbi-page" ref={contentRef}>
      <div className="serbaSerbi-page-header">
        <h1>Serba Serbi</h1>
      </div>

      <div className="serbaSerbi-articles-grid">
        {currentArticles.map((article) => (
          <div className="serbaSerbi-article-item" key={article.id}>
            <div className="serbaSerbi-article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="serbaSerbi-article-content">
              <h3 className="serbaSerbi-article-title">{article.title}</h3>
              <div className="serbaSerbi-article-meta">
                <span className="serbaSerbi-article-author">by {article.author}</span> 
                <span>|</span> 
                <span className="serbaSerbi-article-date">{article.date}</span>
              </div>
              <p className="serbaSerbi-article-excerpt">{article.content}</p>
              <Link to={`/serba-serbi/${article.id}`} className="serbaSerbi-read-more">
                Baca Selengkapnya <FaChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="serbaSerbi-pagination-container">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`serbaSerbi-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
        </button>

        <div className="serbaSerbi-page-info">
          Halaman {currentPage} dari {totalPages}
        </div>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`serbaSerbi-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next Post <MdKeyboardDoubleArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default SerbaSerbi;