import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BeritaHarian.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BeritaHarian = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  
  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setCardsPerSlide(1);
    } else if (width < 992) {
      setCardsPerSlide(2);
    } else {
      setCardsPerSlide(3);
    }
   };

   useEffect(() => {
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
   }, []);

  // Data berita (konsisten dengan page BeritaHarian)
  const berita = [
    {
      id: 1,
      image: '/assets/Berita_1.jpg',
      title: 'Salut, Ibu ini menemukan kekuatannya setelah baca Kitab Suci',
      content: 'Siolais, 30/9/2024 — Bulan Kitab Suci Nasional (BKSN) 2024 segera berakhir. Tetapi kemeriahan dan antusias umat belum berakhir. Beberapa paroki...',
      author: 'by KomsosKAK',
      date: '24 Des 2024'
    },
    {
      id: 2,
      image: '/assets/Berita_2.jpeg',
      title: 'Umat KUB Bunda Segala Bangsa Belajar Kitab Suci',
      content: 'Kupang, 27/9/2024 — Meski hanya dihadiri oleh 8 peserta, KUB Bunda Segala Bangsa Paroki Penfui tetap melaksanakan kegiatan belajar kitab suci khususnya Injil (20/9)...',
      author: 'by KomsosKAK',
      date: '20 Des 2024'
    },
    {
      id: 3,
      image: '/assets/Berita_3.jpg',
      title: 'Akhirnya, Umat Kapela Nifununa Berkatekese di penghujung BKSN 2024',
      content: 'Di akhir pekan ketiga, dalam perjalanan menuju Kuasi Paroki Siolais, saya berkesempatan mampir di satu kapela yang masih dalam wilayah kuasi Siolais...',
      author: 'by KomsosKAK',
      date: '18 Des 2024'
    },
    {
      id: 4,
      image: '/assets/carousel_1.jpg',
      title: 'Perayaan Natal 2024 di Katedral Santo Yosef Kupang',
      content: 'Kupang, 25/12/2024 — Katedral Santo Yosef Kupang dipenuhi umat yang merayakan Natal 2024. Uskup Kupang, Mgr. Petrus Turang, memimpin Misa Natal tengah malam...',
      author: 'by KomsosKAK',
      date: '25 Des 2024'
    },
    {
      id: 5,
      image: '/assets/carousel_2.jpg',
      title: 'Tahbisan Diakon Baru di Seminari Menengah Todabelu',
      content: 'Maumere, 15/12/2024 — Seminari Menengah Santo Paulus Todabelu mengadakan upacara tahbisan diakon untuk 15 alumnus...',
      author: 'by KomsosKAK',
      date: '15 Des 2024'
    },
    {
      id: 6,
      image: '/assets/carousel_3.jpg',
      title: 'Program Bantuan Sosial Gereja untuk Korban Bencana Alam',
      content: 'Atambua, 10/12/2024 — Keuskupan Atambua meluncurkan program bantuan sosial untuk korban bencana alam yang melanda wilayah Timor...',
      author: 'by KomsosKAK',
      date: '10 Des 2024'
    },
  ];

  const nextSlide = () => {
    setSlideDirection('right');
    setStartIndex(prev => 
      (prev + cardsPerSlide >= berita.length) ? 0 : prev + cardsPerSlide
    );
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setStartIndex(prev => 
      (prev - cardsPerSlide < 0) ? 
        berita.length - (berita.length % cardsPerSlide || cardsPerSlide) : 
        prev - cardsPerSlide
    );
  };

  const visibleCards = berita.slice(startIndex, startIndex + cardsPerSlide);

  return (
    <section className="berita-harian">
      <h2 className="section-title-berita-harian">Berita Harian</h2>
      
      <div className="berita-container">
        <button className="nav-arrow-berita left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className={`cards-wrapper-berita slide-${slideDirection}`}>
          {visibleCards.map((item) => (
            <div key={item.id} className="berita-card">
              <div className="card-image-berita">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content-berita">
                <h3>{item.title}</h3>
                <div className="item-meta-berita">
                  <span>{item.author}</span>
                  <span>|</span>
                  <span>{item.date}</span>
                </div>
                <p className="content">{item.content}</p>
                <Link to={`/berita-harian/${item.id}`} className="read-more-berita">
                  Baca Selengkapnya <FaChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow-berita right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default BeritaHarian;