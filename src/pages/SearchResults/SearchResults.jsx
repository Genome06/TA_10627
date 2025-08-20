import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { SearchContext } from '../../context/SearchContext';
import './SearchResults.css';

// Data dropdownItems & assemble searchableItems
const dropdownItems = {
  'Profil KAK': [
    { title: 'Sejarah', path: '/sejarah' },
    { title: 'Arah Dasar KAK', path: '/arah-dasar-kak' },
    { title: 'Perak Episcopal Mgr Petrus Turang', path: '/perak-episcopal' }
  ],
  'Komisi': [
    { title: 'Komisi Liturgi', path: '/komisi/liturgi' },
    { title: 'Komisi Kitab Suci', path: '/komisi/kitab-suci' },
    { title: 'Komisi Pendidikan', path: '/komisi/pendidikan' },
    { title: 'Komisi Kateketik', path: '/komisi/kateketik' },
    { title: 'Komisi PSE', path: '/komisi/pse' },
    { title: 'Komisi HAK', path: '/komisi/hak' },
    { title: 'Komisi Kepemudaan', path: '/komisi/kepemudaan' },
    { title: 'Komisi Keluarga', path: '/komisi/keluarga' },
    { title: 'Komisi Komsos', path: '/komisi/komsos' },
    { title: 'Komisi KPMP', path: '/komisi/kpmp' },
    { title: 'Komisi Seminari', path: '/komisi/seminari' }
  ],
  'Paroki': [
    { title: 'Wilayah Kota Kupang', path: '/kota-kupang' },
    { title: 'Wilayah Kabupaten Kupang', path: '/kabupaten-kupang' },
    { title: 'Wilayah TTS', path: '/tts' },
    { title: 'Wilayah Kepulauan', path: '/kepulauan' }
  ],
  'Informasi': [
    { title: 'Download Area', path: '/informasi/download' },
    { title: 'Kontak', path: '/informasi/kontak' },
    { title: 'Galeri', path: '/informasi/galeri' },
    { title: 'Kegiatan Keuskupan', path: '/informasi/kegiatan-keuskupan' }
  ]
};
// Gambar acak dari folder public/assets
const assetImages = [
  'carousel_1.jpg','carousel_2.jpg','carousel_3.jpg','carousel_4.jpeg',
  'episcopal_1.jpg','gallery1.jpg','gallery2.jpg','gallery4.jpg','gallery5.jpg',
  'komisi.jpg','Katedral.jpg','Naikoten.jpg','oelata.jpg','penfui.webp',
  'serba1.jpg','serba2.jpeg','serba3.jpg','sikumana.webp','tdm.jpg','tofa.webp',
  'Tokoh.jpeg','uskup.jpg'
];
const searchableItems = [
  { title: 'Home', path: '/' },
  ...Object.values(dropdownItems).flat(),
  { title: 'Login', path: '/login' },
  { title: 'Berita Harian', path: '/berita-harian' },
  { title: 'Suara Gembala', path: '/suara-gembala' },
  { title: 'Tokoh', path: '/tokoh' },
  { title: 'Konsultasi Iman', path: '/konsultasi-iman' },
  { title: 'Serba-Serbi', path: '/serba-serbi' },
  { title: 'Renungan Harian', path: '/renungan-harian' }
];

const SearchResults = () => {
  const { searchQuery } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [slideDirection, setSlideDirection] = useState('right');
  const [cardsPerSlide, setCardsPerSlide] = useState(9);
  const contentRef = useRef(null);

  // Adjust cards per slide on resize
  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 768) setCardsPerSlide(3);
    else if (width < 992) setCardsPerSlide(6);
    else setCardsPerSlide(9);
  };

  useEffect(() => {
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  // Reset page when search changes
  useEffect(() => setCurrentPage(1), [searchQuery]);

  const allResults = searchQuery
    ? searchableItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Pagination functions
  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentPage(prev =>
      prev * cardsPerSlide >= allResults.length ? 1 : prev + 1
    );
    setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };
  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentPage(prev =>
      prev === 1 ? Math.ceil(allResults.length / cardsPerSlide) : prev - 1
    );
    setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  // Calculate slice
  const startIndex = (currentPage - 1) * cardsPerSlide;
  const visibleResults = allResults.slice(startIndex, startIndex + cardsPerSlide);
  const totalPages = Math.ceil(allResults.length / cardsPerSlide);

  return (
    <div className="search-results-page" ref={contentRef}>
      <div className="search-result-container">
        <div className="search-result-header-section">
          <h1>Hasil pencarian untuk "{searchQuery}"</h1>
        </div>
        {allResults.length > 0 ? (
          <>
            <div className={`search-results-grid slide-${slideDirection}`}>
              {visibleResults.map((item, idx) => {
                const imageIndex = (startIndex + idx) % assetImages.length;
                const img = `/assets/${assetImages[imageIndex]}`;
                return (
                  <Link
                    to={item.path}
                    key={`${item.title}-${startIndex + idx}`}
                    className="search-result-card"
                  >
                    <div className="search-result-image">
                      <img src={img} alt={item.title} />
                    </div>
                    <h3 className="search-result-name">{item.title}</h3>
                  </Link>
                );
              })}
            </div>
            {totalPages > 1 && (
              <div className="search-result-pagination">
                <button
                  onClick={prevSlide}
                  disabled={currentPage === 1}
                  className={`search-result-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
                >
                  <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
                </button>
                <div className="search-result-page-info">
                  Halaman {currentPage} dari {totalPages}
                </div>
                <button
                  onClick={nextSlide}
                  disabled={currentPage === totalPages}
                  className={`search-result-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
                >
                  Next Post <MdKeyboardDoubleArrowRight className="icon" />
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="no-results-text">Tidak ada hasil ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
