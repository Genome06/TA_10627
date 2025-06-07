import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './WilayahKotaKupang.css';

const WilayahKotaKupang = () => {
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
    { id: 1, name: "Paroki Kristus Raja Katedral", image: "/assets/Katedral.jpg" },
    { id: 2, name: "Paroki Sta. Maria Assumpta Kotabaru", image: "/assets/Assumpta.jpg" },
    { id: 3, name: "Paroki St. Yoseph Naikoten", image: "/assets/Naikoten.jpg" },
    { id: 4, name: "Paroki St. Yoseph Pekerja Penfui", image: "/assets/penfui.webp" },
    { id: 5, name: "Paroki Sta. Familia Sikumana", image: "/assets/sikumana.webp" },
    { id: 6, name: "Paroki St. Fransiskus Dari Asisi Kolhua", image: "/assets/asisi.jpg" },
    { id: 7, name: "Paroki St. Gregorius Agung Oelata", image: "/assets/oelata.jpg" },
    { id: 8, name: "Paroki St. Matias Rasul Tofa", image: "/assets/tofa.webp" },
    { id: 9, name: "Paroki St. Petrus Rasul TDM", image: "/assets/tdm.jpg" },
    { id: 10, name: "Paroki St. Paulus Noelbaki", image: "/assets/Katedral.jpg" },
    { id: 11, name: "Paroki St. Mikael Oesao", image: "/assets/asisi.jpg" },
    { id: 12, name: "Paroki Sta. Theresia Bonsu", image: "/assets/penfui.webp" },
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
    <div className="wilayah-kota-kupang" ref={contentRef}>
      <div className="kota-kupang-container">
        <div className="kota-header-section">
          <h1>Wilayah Kota Kupang</h1>
        </div>

        <div className={`kota-paroki-grid slide-${slideDirection}`}>
          {visibleParoki.map(paroki => (
            <Link to={`/kota-kupang/paroki-kota-kupang/${paroki.id}`} key={paroki.id} className="kota-paroki-card">
              <div className="kota-paroki-image">
                <img src={paroki.image} alt={paroki.name} />
              </div>
              <h3 className="kota-paroki-name">{paroki.name}</h3>
            </Link>
          ))}
        </div>

        <div className="kota-pagination">
          <button 
            onClick={prevSlide} 
            disabled={currentPage === 1}
            className={`kota-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
          >
            <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
          </button>

          <div className="kota-page-info">
            Halaman {currentPage} dari {totalPages}
          </div>
          
          <button 
            onClick={nextSlide} 
            disabled={currentPage === totalPages}
            className={`kota-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
          >
            Next Post <MdKeyboardDoubleArrowRight className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WilayahKotaKupang;