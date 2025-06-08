import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './KegiatanKeuskupan.css';

const KegiatanKeuskupan = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const contentRef = useRef(null);

  // Data kegiatan keuskupan
  const kegiatanData = [
    {
      id: 1,
      title: "Perayaan Natal Keuskupan Agung Kupang",
      date: new Date("2024-12-24"),
      formattedDate: "24 Des 2024",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, dalam rangka menyambut kelahiran Juru Selamat, Keuskupan Agung Kupang akan mengadakan perayaan Natal bersama pada 24 Desember 2024. Perayaan akan dimulai dengan Misa Malam Natal yang dipimpin oleh Bapak Uskup dan dilanjutkan dengan acara ramah tamah bersama seluruh umat...",
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 2,
      title: "Kunjungan Pastoral ke Paroki St. Gregorius Agung Oelata",
      date: new Date("2024-11-15"),
      formattedDate: "15 Nov 2024",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, Bapak Uskup Agung akan melaksanakan kunjungan pastoral ke Paroki St. Gregorius Agung Oelata pada tanggal 15 November 2024. Kunjungan ini merupakan bagian dari program pastoral tahunan untuk mendengarkan dan melihat perkembangan iman umat di paroki-paroki dalam wilayah keuskupan...",
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 3,
      title: "Pentahbisan Imam Baru Keuskupan Agung Kupang",
      date: new Date("2024-10-28"),
      formattedDate: "28 Okt 2024",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, dengan penuh sukacita kami mengumumkan pentahbisan 5 imam baru untuk Keuskupan Agung Kupang yang akan dilaksanakan pada 28 Oktober 2024. Para calon imam ini telah menyelesaikan formasi mereka di Seminari Tinggi Santo Mikhael dan siap mengabdikan diri untuk pelayanan pastoral di keuskupan...",
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 4,
      title: "Pertemuan Tahunan Dewan Pastoral Paroki se-Keuskupan Agung Kupang",
      date: new Date("2024-10-10"),
      formattedDate: "10 Okt 2024",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, Pertemuan Tahunan Dewan Pastoral Paroki se-Keuskupan Agung Kupang akan diselenggarakan pada tanggal 10 Oktober 2024 di Aula Santo Yosef. Pertemuan ini akan membahas rencana pastoral tahunan, evaluasi program yang telah berjalan, serta strategi pengembangan pelayanan di tingkat paroki...",
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 5,
      title: "Pemberkatan Gedung Pastoral Baru",
      date: new Date("2024-09-25"),
      formattedDate: "25 Sep 2024",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, dengan penuh syukur kepada Tuhan, Keuskupan Agung Kupang akan melaksanakan pemberkatan Gedung Pastoral Baru pada 25 September 2024. Gedung yang telah dibangun selama 2 tahun ini akan menjadi pusat kegiatan pastoral dan administrasi keuskupan yang dapat menunjang pelayanan kepada umat...",
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 6,
      title: "Perayaan Pesta Santo Pelindung Katedral",
      date: new Date("2024-08-15"),
      formattedDate: "15 Agt 2024",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, Perayaan Pesta Santo Pelindung Katedral Santa Maria Assumpta akan diselenggarakan pada tanggal 15 Agustus 2024. Perayaan dimulai dengan novena selama 9 hari sebelumnya dan puncaknya adalah Misa Agung yang dipimpin oleh Bapak Uskup. Tahun ini perayaan mengambil tema 'Maria, Bunda Kerahiman'...",
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 7,
      title: "Rekoleksi OMK Keuskupan Agung Kupang",
      date: new Date("2024-07-30"),
      formattedDate: "30 Jul 2024",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, Komisi Kepemudaan Keuskupan Agung Kupang akan menyelenggarakan Rekoleksi OMK (Orang Muda Katolik) pada tanggal 30 Juli 2024 di Pusat Retret Fatumetan. Kegiatan ini bertujuan untuk memperdalam iman dan mempererat persaudaraan di antara kaum muda Katolik dari berbagai paroki di keuskupan...",
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 8,
      title: "Misa Syukur Tahbisan Uskup Baru Keuskupan Atambua",
      date: new Date("2025-07-15"),
      formattedDate: "15 Jul 2025",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, Keuskupan Agung Kupang akan menyelenggarakan Misa Syukur atas tahbisan Uskup baru Keuskupan Atambua, Mgr. Antonius Subianto Bunjamin OSC. Misa akan dipimpin oleh Bapak Uskup Agung dan dihadiri para uskup dari berbagai keuskupan di Indonesia Timur. Acara ini akan menjadi momen penting bagi persatuan Gereja Katolik di wilayah Nusa Tenggara Timur...",
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 9,
      title: "Pekan Pastoral: Revitalisasi Pangilan Umat Katolik",
      date: new Date("2025-07-05"),
      formattedDate: "05 Jul 2025",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, Komisi Pastoral Keuskupan Agung Kupang akan mengadakan 'Pekan Pastoral' dengan tema 'Revitalisasi Panggilan Umat Katolik di Era Digital'. Kegiatan yang akan berlangsung selama satu minggu ini akan diisi dengan seminar, lokakarya, dan diskusi panel yang melibatkan para rohaniwan, tokoh awam, dan pakar komunikasi. Kegiatan ini bertujuan untuk merumuskan strategi pastoral yang relevan dengan tantangan zaman...",
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 10,
      title: "Ziarah Rohani ke Gua Maria Bukit Fatima",
      date: new Date("2025-06-25"),
      formattedDate: "25 Jun 2025",
      author: "by KomsosKAK",
      content: "Saudara-saudari yang terkasih, dalam rangka memperingati Bulan Maria, Keuskupan Agung Kupang akan menyelenggarakan ziarah rohani ke Gua Maria Bukit Fatima. Ziarah ini terbuka bagi seluruh umat paroki di wilayah Keuskupan Agung Kupang. Acara akan dimulai dengan prosesi rosario, dilanjutkan dengan Misa Kudus, dan diakhiri dengan doa novena kepada Bunda Maria. Kegiatan ini diharapkan dapat memperkuat devosi kita kepada Bunda Maria...",
      image: "/assets/carousel_4.jpeg"
    }
  ];

  useEffect(() => {
    // Urutkan kegiatan dari terbaru ke terlama
    const sortedKegiatan = [...kegiatanData].sort((a, b) => new Date(b.date) - new Date(a.date));
    setEvents(sortedKegiatan);
    
    // Reset juga currentPage saat filter berubah
    if (selectedDate === null) {
      setFilteredEvents(sortedKegiatan);
      setCurrentPage(1);
    }
  }, [selectedDate]);

  // Filter kegiatan berdasarkan tanggal
  const handleDateChange = (date) => {
    setSelectedDate(date);
    
    if (date) {
      // Format tanggal yang dipilih untuk perbandingan
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      
      const filtered = kegiatanData.filter(event => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() === month &&
          eventDate.getDate() === day
        );
      });
      
      setFilteredEvents(filtered.length ? filtered : []);
      setCurrentPage(1); // Reset ke halaman 1 saat filter berubah
    } else {
      // Jika filter dihapus, tampilkan semua kegiatan terurut
      const sortedKegiatan = [...kegiatanData].sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredEvents(sortedKegiatan);
      setCurrentPage(1);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll ke atas saat ganti halaman
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Custom input untuk date picker
  const CustomDatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-datepicker-input" onClick={onClick} ref={ref}>
      <span>{selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: id }) : 'Tanggal'}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="dropdown-icon" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </div>
  ));

  return (
    <div className="kegiatan-keuskupan" ref={contentRef}>
      <div className="kegiatan-container">
        <h1 className="kegiatan-title">List Kegiatan Keuskupan Kupang</h1>
        
        <div className="filter-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            customInput={<CustomDatePickerInput />}
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={10}
            placeholderText="Pilih tanggal"
            className="date-picker"
            popperPlacement="bottom-start"
            popperModifiers={{
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: 'viewport'
              }
            }}
          />
        </div>
        
        <div className="kegiatan-list">
          {currentItems.length > 0 ? (
            currentItems.map(kegiatan => (
              <div key={kegiatan.id} className="kegiatan-card">
                <div className="kegiatan-content">
                  <h2 className="kegiatan-card-title">{kegiatan.title}</h2>
                  
                  <div className="kegiatan-meta">
                    <span>{kegiatan.author}</span>
                    <span className="date-separator">|</span>
                    <span>{kegiatan.formattedDate}</span>
                  </div>
                  
                  <p className="kegiatan-description">{kegiatan.content}</p>
                  
                  <Link to={`/informasi/kegiatan-keuskupan/detail/${kegiatan.id}`} className="kegiatan-readmore">
                    Baca selengkapnya <FaChevronRight />
                  </Link>
                </div>
                
                <div className="kegiatan-image">
                  <img src={kegiatan.image} alt={kegiatan.title} />
                </div>
              </div>
            ))
          ) : (
            <div className="no-kegiatan">
              <p>Tidak ada kegiatan pada tanggal yang dipilih.</p>
              <button 
                className="reset-filter"
                onClick={() => handleDateChange(null)}
              >
                Tampilkan semua kegiatan
              </button>
            </div>
          )}
        </div>

        {/* Tombol Navigasi */}
        {filteredEvents.length > itemsPerPage && (
          <div className="kegiatan-pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`kegiatan-nav-button ${currentPage === 1 ? 'disabled' : ''}`}
            >
              <MdKeyboardDoubleArrowLeft className="icon" /> <span className="prev-button-text">Older Post</span>
            </button>
            <div className="kegiatan-page-info">
              Halaman {currentPage} dari {totalPages}
            </div>
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`kegiatan-nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
            >
              <span className="next-button-text">Next Post</span> <MdKeyboardDoubleArrowRight className="icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KegiatanKeuskupan;