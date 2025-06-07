import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './WilayahKabupatenKupang.css';

const WilayahKabupatenKupang = () => {
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
    { id: 1, name: "Paroki St. Simon Petrus Tarus", image: "/assets/Katedral.jpg" },
    { id: 2, name: "Paroki St. Petrus Pariti - Sulamu", image: "/assets/Assumpta.jpg" },
    { id: 3, name: "Paroki St. Yohanes Pemandi Buraen", image: "/assets/Naikoten.jpg" },
    { id: 4, name: "Paroki Sta. Maria Fatima Taklale", image: "/assets/penfui.webp" },
    { id: 5, name: "Paroki Sta. Helena - Lili Camplonga", image: "/assets/sikumana.webp" },
    { id: 6, name: "Paroki St. Stefanus Noehaen", image: "/assets/asisi.jpg" },
    { id: 7, name: "Paroki Sta. Maria Bunda Orang Miskin Bunda Noelmina", image: "/assets/oelata.jpg" },
    { id: 8, name: "Paroki St. Stefanus Naikliu", image: "/assets/tofa.webp" },
    { id: 9, name: "Paroki St. Petrus Rasul TDM", image: "/assets/tdm.jpg" },
    { id: 10, name: "Paroki Sta. Maria Mater Dei Oepoli", image: "/assets/Katedral.jpg" },
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
    <div className="wilayah-kabupaten-kupang" ref={contentRef}>
      <div className="kabupaten-kupang-container">
        <div className="kabupaten-header-section">
          <h1>Wilayah Kabupaten Kupang</h1>
        </div>

        <div className={`kabupaten-paroki-grid slide-${slideDirection}`}>
          {visibleParoki.map(paroki => (
            <Link to={`/paroki-kabupaten-kupang/${paroki.id}`} key={paroki.id} className="kabupaten-paroki-card">
              <div className="kabupaten-paroki-image">
                <img src={paroki.image} alt={paroki.name} />
              </div>
              <h3 className="kabupaten-paroki-name">{paroki.name}</h3>
            </Link>
          ))}
        </div>

        <div className="kabupaten-pagination">
          <button 
            onClick={prevSlide} 
            disabled={currentPage === 1}
            className={`kabupaten-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
          >
            <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
          </button>

          <div className="kabupaten-page-info">
            Halaman {currentPage} dari {totalPages}
          </div>
          
          <button 
            onClick={nextSlide} 
            disabled={currentPage === totalPages}
            className={`kabupaten-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
          >
            Next Post <MdKeyboardDoubleArrowRight className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WilayahKabupatenKupang;