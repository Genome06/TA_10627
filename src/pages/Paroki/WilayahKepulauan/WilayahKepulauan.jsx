import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './WilayahKepulauan.css';

const WilayahKepulauan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [slideDirection, setSlideDirection] = useState('right');
  const [cardsPerSlide, setCardsPerSlide] = useState(9);
  const contentRef = useRef(null); // Tambahkan ref
  
  // Update cards per slide based on screen size
  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setCardsPerSlide(3);
    } else if (width < 992) {
      setCardsPerSlide(6);
    } else {
      setCardsPerSlide(9);
    }
  };

  useEffect(() => {
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  // Data paroki untuk wilayah Kota Kupang
  const parokiList = [
    { id: 1, name: "Paroki Yesus Gembala Baik Kalabahi", image: "/assets/Katedral.jpg" },
    { id: 2, name: "Paroki St. Yakobus Bukapiting", image: "/assets/Assumpta.jpg" },
    { id: 3, name: "Paroki Sabu", image: "/assets/Naikoten.jpg" },
    { id: 4, name: "Paroki Kolongbuku - Moru", image: "/assets/penfui.webp" },
    { id: 5, name: "Paroki Pantar", image: "/assets/sikumana.webp" },
    { id: 6, name: "Paroki St. Petrus Pantai Baru", image: "/assets/asisi.jpg" },
    { id: 7, name: "Paroki Kristoforus Baa", image: "/assets/oelata.jpg" }
    // { id: 11, name: "Paroki St. Mikael Oesao", image: "/assets/asisi.jpg" },
    // { id: 12, name: "Paroki Sta. Theresia Bonsu", image: "/assets/penfui.webp" },
  ];

  // Logic for pagination
  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentPage(prev => 
      (prev * cardsPerSlide >= parokiList.length) ? 1 : prev + 1
    );
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentPage(prev => 
      (prev === 1) ? Math.ceil(parokiList.length / cardsPerSlide) : prev - 1
    );
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Calculate visible paroki
  const startIndex = (currentPage - 1) * cardsPerSlide;
  const visibleParoki = parokiList.slice(startIndex, startIndex + cardsPerSlide);
  const totalPages = Math.ceil(parokiList.length / cardsPerSlide);

  return (
    <div className="wilayah-kepulauan" ref={contentRef}>
      <div className="kepulauan-container">
        <div className="kepulauan-header-section">
          <h1>Wilayah Kepulauan</h1>
        </div>

        <div className={`kepulauan-paroki-grid slide-${slideDirection}`}>
          {visibleParoki.map(paroki => (
            <Link to={`/paroki-kepulauan/${paroki.id}`} key={paroki.id} className="kepulauan-paroki-card">
              <div className="kepulauan-paroki-image">
                <img src={paroki.image} alt={paroki.name} />
              </div>
              <h3 className="kepulauan-paroki-name">{paroki.name}</h3>
            </Link>
          ))}
        </div>

        <div className="kepulauan-pagination">
          <button 
            onClick={prevSlide} 
            disabled={currentPage === 1}
            className={`kepulauan-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
          >
            <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
          </button>

          <div className="kepulauan-page-info">
            Halaman {currentPage} dari {totalPages}
          </div>
          
          <button 
            onClick={nextSlide} 
            disabled={currentPage === totalPages}
            className={`kepulauan-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
          >
            Next Post <MdKeyboardDoubleArrowRight className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WilayahKepulauan;