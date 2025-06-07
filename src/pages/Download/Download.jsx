import React, { useState, useRef } from 'react';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft, MdFileDownload } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import './Download.css';

const Download = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const contentRef = useRef(null);
  
  // Data untuk bahan download
  const downloadItems = [
    {
      id: 1,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "24 Apr 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 2,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "27 Apr 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 3,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "28 Apr 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 4,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "24 Mei 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 5,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "27 Mei 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 6,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "28 Mei 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 7,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "24 Jun 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 8,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "27 Jun 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 9,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "28 Jun 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 10,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "24 Jul 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 11,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "27 Jul 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    },
    {
      id: 12,
      image: "/assets/bksn_cover.jpg",
      title: "Bulan Kitab Suci Nasional (BKSN) 2023",
      excerpt: "Bulan Kitab Suci adalah gerakan tahunan yang juga gerakan bersama untuk menjadikan umat agar lebih mencintai Kitab Suci.",
      author: "by KomsosKAK",
      date: "28 Jul 2024",
      downloadUrl: "https://drive.google.com/file/d/1i5tBeG7bpkzPiQCB-lXWLWfE8AiztzSs/view"
    }
  ];

  // Urutkan berdasarkan tanggal
  const sortedItems = [...downloadItems].sort((a, b) => {
    const dateA = new Date(a.date.split(' ').reverse()[0], getMonthIndex(a.date.split(' ')[1]), a.date.split(' ')[0]);
    const dateB = new Date(b.date.split(' ').reverse()[0], getMonthIndex(b.date.split(' ')[1]), b.date.split(' ')[0]);
    return dateB - dateA;
  });

  // Helper function untuk mengkonversi nama bulan ke indeks
  function getMonthIndex(month) {
    const months = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'Mei': 4, 'Jun': 5, 
                    'Jul': 6, 'Ags': 7, 'Sep': 8, 'Okt': 9, 'Nov': 10, 'Des': 11 };
    return months[month] || 0;
  }

  // Hitung indeks item
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  // Total halaman
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const nextSlide = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const prevSlide = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleDownload = (url, e) => {
    e.preventDefault();
    // Buka URL Google Drive di tab baru
    window.open(url, '_blank');
  };

  return (
    <div className="download-page" ref={contentRef}>
      <main className="download-content">
        <div className="download-container">
          <h1 className="download-title">Download Area</h1>
          
          <div className="download-grid">
            {currentItems.map(item => (
              <div key={item.id} className="download-card">
                <div className="download-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="download-card-content">
                  <h3>{item.title}</h3>
                  <div className="download-item-meta">
                    <span>{item.author}</span>
                    <span>|</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="download-excerpt">{item.excerpt}</p>
                  <a 
                    href={item.downloadUrl} 
                    className="download-button"
                    onClick={(e) => handleDownload(item.downloadUrl, e)}
                  >
                    <div className="download-icon">
                      <FiDownload />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="download-pagination">
            <button 
              onClick={prevSlide} 
              disabled={currentPage === 1}
              className={`download-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
            >
              <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
            </button>
            <div className="download-page-info">
              Halaman {currentPage} dari {totalPages}
            </div>
            <button 
              onClick={nextSlide} 
              disabled={currentPage === totalPages}
              className={`download-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
            >
              Next Post <MdKeyboardDoubleArrowRight className="icon" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Download;