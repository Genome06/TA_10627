import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import './Galeri.css';

const Galeri = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const contentRef = useRef(null);
  
  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(3);
      } else if (width < 992) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(9);
      }
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Data galeri (contoh)
  const galleryItems = [
    {
      id: 1,
      image: "/assets/gallery1.jpg", 
      title: "Penyambutan Uskup di Paroki"
    },
    {
      id: 2,
      image: "/assets/gallery2.jpg", 
      title: "Pertemuan dengan Masyarakat Adat"
    },
    {
      id: 3,
      image: "/assets/episcopal_2.jpg", 
      title: "Kunjungan Pastoral"
    },
    {
      id: 4,
      image: "/assets/gallery4.jpg", 
      title: "Penandatanganan MOU"
    },
    {
      id: 5,
      image: "/assets/gallery5.jpg", 
      title: "Perayaan Ekaristi di Gereja Baru"
    },
    {
      id: 6,
      image: "/assets/oelata.jpg", 
      title: "Upacara Penahbisan"
    },
    {
      id: 7,
      image: "/assets/gallery1.jpg", 
      title: "Misa Minggu di Katedral"
    },
    {
      id: 8,
      image: "/assets/gallery2.jpg", 
      title: "Kunjungan ke Sekolah Katolik"
    },
    {
      id: 9,
      image: "/assets/episcopal_2.jpg", 
      title: "Pemberkatan Rumah Baru"
    },
    {
      id: 10,
      image: "/assets/gallery4.jpg", 
      title: "Pelantikan Pengurus Baru"
    },
    {
      id: 11,
      image: "/assets/gallery5.jpg", 
      title: "Pertemuan OMK"
    },
    {
      id: 12,
      image: "/assets/oelata.jpg", 
      title: "Pemberkatan Gereja"
    },
    {
      id: 13,
      image: "/assets/gallery1.jpg", 
      title: "Kunjungan ke Panti Asuhan"
    },
    {
      id: 14,
      image: "/assets/gallery2.jpg", 
      title: "Rapat Dewan Paroki"
    },
    {
      id: 15,
      image: "/assets/episcopal_2.jpg", 
      title: "Perayaan Paskah"
    }
  ];

  // Navigasi halaman
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Hitung item yang ditampilkan dan total halaman
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = galleryItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  return (
    <div className="galeri-page" ref={contentRef}>
      <div className="galeri-container">
        <h1 className="galeri-title">Galeri</h1>
        
        <div className="galeri-grid">
          {currentItems.map((item) => (
            <div key={item.id} className="galeri-item">
              <div className="galeri-image-container">
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="galeri-image-link">
                  <img src={item.image} alt={item.title} className="galeri-image" />
                  <div className="galeri-overlay">
                    <FaExternalLinkAlt className="galeri-fullscreen-icon" />
                    <span>Lihat Ukuran Penuh</span>
                  </div>
                </a>
              </div>
              <h3 className="galeri-image-title">{item.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="galeri-pagination">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className={`galeri-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
          >
            <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
          </button>
          
          <div className="galeri-page-info">
            Halaman {currentPage} dari {totalPages}
          </div>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className={`galeri-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
          >
            Next Post <MdKeyboardDoubleArrowRight className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galeri;