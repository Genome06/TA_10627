import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const sliderRef = useRef(null);
  
  const images = [
    { id: 1, src: "/assets/carousel_1.jpg", loading:"lazy", alt: "Kegiatan Paroki 1" },
    { id: 2, src: "/assets/carousel_2.jpg", loading:"lazy", alt: "Kegiatan Paroki 2" },
    { id: 3, src: "/assets/carousel_3.jpg", loading:"lazy", alt: "Kegiatan Paroki 3" }
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 50) {
        // Swipe left
        nextSlide();
      } else if (distance < -50) {
        // Swipe right
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  
  return (
    <div className="carousel-container">
      <div
        className="carousel"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button 
          className={`nav-button prev ${isHovered ? 'visible' : ''}`}
          onClick={prevSlide}
        >
          ❮
        </button>
        
        <div className="slider">
          <div className="slides-wrapper">
            {images.map((img, index) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
        
        <button 
          className={`nav-button next ${isHovered ? 'visible' : ''}`}
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
      
      <div className="dots">
        {images.map((_, idx) => (
          <span 
            key={idx} 
            className={idx === currentIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;