import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import './DetailKegiatan.css';

const DetailKegiatan = () => {
  const { id } = useParams();
  const [kegiatan, setKegiatan] = useState(null);
  const [relatedKegiatan, setRelatedKegiatan] = useState([]);
  const navigate = useNavigate();

  // Data kegiatan keuskupan (sama dengan yang di KegiatanKeuskupan.jsx)
  const kegiatanData = [
    {
      id: 1,
      title: "Perayaan Natal Keuskupan Agung Kupang",
      date: new Date("2024-12-24"),
      formattedDate: "24 Des 2024",
      time: "19:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, dalam rangka menyambut kelahiran Juru Selamat, Keuskupan Agung Kupang akan mengadakan perayaan Natal bersama pada 24 Desember 2024. 

Perayaan akan dimulai dengan Misa Malam Natal yang dipimpin oleh Bapak Uskup dan dilanjutkan dengan acara ramah tamah bersama seluruh umat.

Tema perayaan Natal tahun ini adalah "Dalam Kristus, Kita Bersaudara". Tema ini mengajak kita untuk merefleksikan makna kelahiran Kristus yang mempersatukan kita semua dalam kasih persaudaraan yang sejati. 

Melalui perayaan ini, kita diingatkan bahwa di dalam Kristus, tidak ada perbedaan yang memisahkan kita, karena kita semua adalah saudara dan saudari yang dipanggil untuk hidup dalam damai dan kasih persaudaraan.

Acara akan dilaksanakan di Katedral Santa Maria Assumpta, dan akan dimulai pada pukul 19.00 WITA. Seluruh umat dari berbagai paroki diundang untuk hadir dan bersama-sama merayakan sukacita Natal.`,
      image: "/assets/carousel_3.jpg"
    },
    // Salin semua data kegiatan dari KegiatanKeuskupan.jsx
    {
      id: 2,
      title: "Kunjungan Pastoral ke Paroki St. Gregorius Agung Oelata",
      date: new Date("2024-11-15"),
      formattedDate: "15 Nov 2024",
      time: "09:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, Bapak Uskup Agung akan melaksanakan kunjungan pastoral ke Paroki St. Gregorius Agung Oelata pada tanggal 15 November 2024. 

Kunjungan ini merupakan bagian dari program pastoral tahunan untuk mendengarkan dan melihat perkembangan iman umat di paroki-paroki dalam wilayah keuskupan.

Selama kunjungan, Bapak Uskup akan bertemu dengan dewan pastoral paroki, kelompok kategorial, dan umat dari berbagai stasi. Kunjungan juga mencakup perayaan Ekaristi bersama seluruh umat paroki dan pemberian Sakramen Krisma kepada 120 calon penerima.

Melalui kunjungan pastoral ini, Bapak Uskup berharap dapat mendengarkan secara langsung kerinduan dan harapan umat, serta memberikan arahan dan dorongan semangat untuk pengembangan hidup menggereja yang lebih aktif dan bermakna.

Kunjungan akan berlangsung selama dua hari, yaitu tanggal 15-16 November 2024. Seluruh umat Paroki St. Gregorius Agung Oelata diharapkan untuk berpartisipasi dalam kegiatan-kegiatan yang telah dijadwalkan.`,
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 3,
      title: "Pentahbisan Imam Baru Keuskupan Agung Kupang",
      date: new Date("2024-10-28"),
      formattedDate: "28 Okt 2024",
      time: "10:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, dengan penuh sukacita kami mengumumkan pentahbisan 5 imam baru untuk Keuskupan Agung Kupang yang akan dilaksanakan pada 28 Oktober 2024. 

Para calon imam ini telah menyelesaikan formasi mereka di Seminari Tinggi Santo Mikhael dan siap mengabdikan diri untuk pelayanan pastoral di keuskupan.

Adapun nama-nama calon imam yang akan ditahbiskan adalah:
1. Diakon Yohanes Baptista Sola
2. Diakon Petrus Golok
3. Diakon Fransiskus Xaverius Laka
4. Diakon Dominikus Nahak
5. Diakon Antonius Penga

Upacara pentahbisan akan dipimpin oleh Bapak Uskup Agung dan akan dihadiri oleh para imam, biarawan/biarawati, serta umat dari berbagai paroki. Acara akan dilaksanakan di Katedral Santa Maria Assumpta, mulai pukul 09.00 WITA.

Mari kita doakan para calon imam ini agar mereka menjadi gembala yang baik bagi kawanan yang dipercayakan kepada mereka, dan semoga pelayanan mereka membawa banyak buah bagi perkembangan iman umat di Keuskupan Agung Kupang.`,
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 4,
      title: "Pertemuan Tahunan Dewan Pastoral Paroki se-Keuskupan Agung Kupang",
      date: new Date("2024-10-10"),
      formattedDate: "10 Okt 2024",
      time: "08:30 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, Pertemuan Tahunan Dewan Pastoral Paroki se-Keuskupan Agung Kupang akan diselenggarakan pada tanggal 10 Oktober 2024 di Aula Santo Yosef. 

Pertemuan ini akan membahas rencana pastoral tahunan, evaluasi program yang telah berjalan, serta strategi pengembangan pelayanan di tingkat paroki.

Tema pertemuan tahun ini adalah "Membangun Gereja yang Sinodal dan Misioner". Tema ini sejalan dengan ajakan Bapa Suci Fransiskus untuk mengembangkan Gereja yang berjalan bersama dan keluar untuk menjangkau mereka yang berada di pinggiran.

Pertemuan akan dihadiri oleh perwakilan dewan pastoral dari 30 paroki di wilayah Keuskupan Agung Kupang. Setiap paroki diharapkan mengirimkan 3 orang perwakilan, yang terdiri dari ketua dewan pastoral, sekretaris, dan satu anggota yang mewakili kaum muda.

Acara akan dimulai pada pukul 08.30 WITA dan diperkirakan selesai pada pukul 16.00 WITA. Para peserta diminta untuk mendaftarkan diri melalui sekretariat paroki masing-masing paling lambat tanggal 5 Oktober 2024.`,
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 5,
      title: "Pemberkatan Gedung Pastoral Baru",
      date: new Date("2024-09-25"),
      formattedDate: "25 Sep 2024",
      time: "14:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, dengan penuh syukur kepada Tuhan, Keuskupan Agung Kupang akan melaksanakan pemberkatan Gedung Pastoral Baru pada 25 September 2024. 

Gedung yang telah dibangun selama 2 tahun ini akan menjadi pusat kegiatan pastoral dan administrasi keuskupan yang dapat menunjang pelayanan kepada umat.

Gedung Pastoral Baru ini terdiri dari 4 lantai dengan berbagai fasilitas modern, seperti aula pertemuan yang dapat menampung 500 orang, ruang-ruang kerja untuk 12 komisi keuskupan, perpustakaan, kapel, dan pusat dokumentasi. Pembangunan gedung ini merupakan wujud komitmen keuskupan untuk meningkatkan kualitas pelayanan kepada umat.

Upacara pemberkatan akan dipimpin oleh Bapak Uskup Agung dan dihadiri oleh para imam, biarawan/biarawati, perwakilan umat, serta pejabat pemerintah setempat. Acara akan dimulai pada pukul 14.00 WITA dengan perayaan Ekaristi, dilanjutkan dengan upacara pemberkatan dan ramah tamah.

Seluruh umat diundang untuk hadir dan bersyukur atas berkat yang Tuhan berikan melalui fasilitas baru ini. Semoga Gedung Pastoral Baru ini dapat menjadi sarana yang efektif untuk membangun persekutuan, melaksanakan pelayanan, dan mewartakan kabar gembira kepada semua orang.`,
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 6,
      title: "Perayaan Pesta Santo Pelindung Katedral",
      date: new Date("2024-08-15"),
      formattedDate: "15 Agt 2024",
      time: "18:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, Perayaan Pesta Santo Pelindung Katedral Santa Maria Assumpta akan diselenggarakan pada tanggal 15 Agustus 2024. 

Perayaan dimulai dengan novena selama 9 hari sebelumnya dan puncaknya adalah Misa Agung yang dipimpin oleh Bapak Uskup. Tahun ini perayaan mengambil tema 'Maria, Bunda Kerahiman'.

Novena akan dimulai pada tanggal 6 Agustus dan akan dilaksanakan setiap hari pukul 18.00 WITA di Katedral. Setiap hari novena akan dipimpin oleh kelompok kategorial yang berbeda, dengan refleksi dan intensi doa yang khusus.

Pada tanggal 15 Agustus, perayaan puncak akan dimulai dengan prosesi patung Bunda Maria, dilanjutkan dengan Misa Agung yang dipimpin oleh Bapak Uskup pada pukul 18.00 WITA. Setelah Misa, akan diadakan acara ramah tamah dan pentas seni di halaman Katedral.

Sebagai bagian dari perayaan, akan diadakan juga berbagai kegiatan sosial, seperti bakti sosial di panti asuhan, kunjungan ke rumah sakit, dan pembagian sembako kepada keluarga kurang mampu di sekitar wilayah Katedral.

Seluruh umat diundang untuk berpartisipasi dalam perayaan ini, dan bersama-sama menghormati Bunda Maria, teladan iman dan kesetiaan kepada Allah.`,
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 7,
      title: "Rekoleksi OMK Keuskupan Agung Kupang",
      date: new Date("2024-07-30"),
      formattedDate: "30 Jul 2024",
      time: "08:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, Komisi Kepemudaan Keuskupan Agung Kupang akan menyelenggarakan Rekoleksi OMK (Orang Muda Katolik) pada tanggal 30 Juli 2024 di Pusat Retret Fatumetan. 

Kegiatan ini bertujuan untuk memperdalam iman dan mempererat persaudaraan di antara kaum muda Katolik dari berbagai paroki di keuskupan.

Tema rekoleksi tahun ini adalah "Muda, Berani, Beriman". Melalui tema ini, para OMK diajak untuk menyadari identitas mereka sebagai orang muda Katolik yang dipanggil untuk menjadi saksi Kristus di tengah dunia yang penuh tantangan.

Rekoleksi akan dipimpin oleh Romo Yohanes Servatius, Pr., koordinator Komisi Kepemudaan Keuskupan, dan beberapa pendamping OMK lainnya. Kegiatan akan berlangsung selama 3 hari, mulai tanggal 30 Juli hingga 1 Agustus 2024.

Acara akan diisi dengan berbagai kegiatan seperti renungan pribadi, sharing kelompok, dinamika kelompok, adorasi, dan perayaan Ekaristi. Pada hari terakhir, akan diadakan Festival OMK yang menampilkan berbagai talenta dan kreativitas kaum muda.

Pendaftaran rekoleksi dibuka mulai tanggal 1-20 Juli 2024. Kuota peserta dibatasi untuk 200 orang, dengan pembagian 5-7 orang untuk setiap paroki. Para OMK yang berminat dapat mendaftarkan diri melalui koordinator OMK paroki masing-masing.`,
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 8,
      title: "Misa Syukur Tahbisan Uskup Baru Keuskupan Atambua",
      date: new Date("2025-07-15"),
      formattedDate: "15 Jul 2025",
      time: "10:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, Keuskupan Agung Kupang akan menyelenggarakan Misa Syukur atas tahbisan Uskup baru Keuskupan Atambua, Mgr. Antonius Subianto Bunjamin OSC. 

Misa akan dipimpin oleh Bapak Uskup Agung dan dihadiri para uskup dari berbagai keuskupan di Indonesia Timur. Acara ini akan menjadi momen penting bagi persatuan Gereja Katolik di wilayah Nusa Tenggara Timur.

Mgr. Antonius Subianto Bunjamin OSC telah ditahbiskan sebagai Uskup Atambua pada tanggal 29 Juni 2025 di Vatikan oleh Bapa Suci. Beliau menggantikan Mgr. Dominikus Saku yang telah memasuki masa emeritus. Sebagai wujud persaudaraan antar keuskupan di Nusa Tenggara Timur, Keuskupan Agung Kupang mengadakan Misa Syukur atas tahbisan tersebut.

Misa Syukur akan dilaksanakan pada tanggal 15 Juli 2025, pukul 10.00 WITA di Katedral Santa Maria Assumpta. Selain para uskup dan imam, hadir pula tokoh-tokoh masyarakat dan pemerintahan serta umat dari berbagai paroki.

Dalam Misa Syukur ini, Bapak Uskup Agung juga mengajak seluruh umat untuk mendoakan pelayanan pastoral Mgr. Antonius di Keuskupan Atambua, agar di bawah kepemimpinannya, Gereja Katolik di sana semakin berkembang dan memberikan kesaksian iman yang hidup.

Setelah Misa Syukur, akan diadakan ramah tamah di aula Katedral. Seluruh umat diundang untuk hadir dan turut bersukacita atas berkat dan karunia Tuhan bagi Keuskupan Atambua.`,
      image: "/assets/carousel_4.jpeg"
    },
    {
      id: 9,
      title: "Pekan Pastoral: Revitalisasi Pangilan Umat Katolik",
      date: new Date("2025-07-05"),
      formattedDate: "05 Jul 2025",
      time: "09:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, Komisi Pastoral Keuskupan Agung Kupang akan mengadakan 'Pekan Pastoral' dengan tema 'Revitalisasi Panggilan Umat Katolik di Era Digital'. 

Kegiatan yang akan berlangsung selama satu minggu ini akan diisi dengan seminar, lokakarya, dan diskusi panel yang melibatkan para rohaniwan, tokoh awam, dan pakar komunikasi. Kegiatan ini bertujuan untuk merumuskan strategi pastoral yang relevan dengan tantangan zaman.

Pekan Pastoral akan dilaksanakan pada tanggal 5-12 Juli 2025 di Aula Santo Yosef. Setiap hari akan diisi dengan sesi-sesi yang membahas berbagai aspek panggilan umat Katolik di era digital, seperti:

1. Spiritualitas di Era Digital
2. Media Sosial sebagai Sarana Pewartaan
3. Tantangan Iman Kaum Muda di Dunia Maya
4. Keluarga Katolik Menghadapi Teknologi Digital
5. Paroki Virtual dan Komunitas Riil: Mencari Keseimbangan
6. Etika Bermedia di Kalangan Umat Katolik

Para pembicara akan didatangkan dari berbagai latar belakang, termasuk teolog, sosiolog, psikolog, dan pakar media digital. Diharapkan dari Pekan Pastoral ini akan lahir panduan pastoral yang dapat diimplementasikan di tingkat paroki dan komunitas basis.

Para pastor paroki, dewan pastoral paroki, dan perwakilan kelompok kategorial diharapkan untuk menghadiri kegiatan ini. Pendaftaran dapat dilakukan melalui sekretariat paroki masing-masing atau langsung ke Sekretariat Keuskupan paling lambat tanggal 25 Juni 2025.`,
      image: "/assets/carousel_3.jpg"
    },
    {
      id: 10,
      title: "Ziarah Rohani ke Gua Maria Bukit Fatima",
      date: new Date("2025-06-25"),
      formattedDate: "25 Jun 2025",
      time: "07:00 WIB",
      author: "by KomsosKAK",
      content: `Saudara-saudari yang terkasih, dalam rangka memperingati Bulan Maria, Keuskupan Agung Kupang akan menyelenggarakan ziarah rohani ke Gua Maria Bukit Fatima. 

Ziarah ini terbuka bagi seluruh umat paroki di wilayah Keuskupan Agung Kupang. Acara akan dimulai dengan prosesi rosario, dilanjutkan dengan Misa Kudus, dan diakhiri dengan doa novena kepada Bunda Maria. Kegiatan ini diharapkan dapat memperkuat devosi kita kepada Bunda Maria.

Gua Maria Bukit Fatima terletak sekitar 15 km dari pusat kota Kupang, dan merupakan tempat ziarah yang sangat berarti bagi umat Katolik di wilayah ini. Tempat ini diresmikan pada tahun 2010 dan sejak saat itu telah menjadi pusat devosi Marian yang penting di Nusa Tenggara Timur.

Ziarah rohani akan dilaksanakan pada tanggal 25 Juni 2025. Prosesi rosario akan dimulai pada pukul 07.00 WITA, dilanjutkan dengan Misa Kudus pada pukul 09.00 WITA yang dipimpin oleh Bapak Uskup Agung. Setelah Misa, akan diadakan doa novena dan dilanjutkan dengan makan siang bersama.

Untuk memudahkan transportasi, Keuskupan telah menyediakan bus dari beberapa titik kumpul di kota Kupang. Para peziarah yang ingin menggunakan transportasi ini diminta untuk mendaftar di paroki masing-masing paling lambat tanggal 15 Juni 2025.

Seluruh umat diajak untuk mempersiapkan diri secara rohani dalam menyambut ziarah ini dengan doa dan niat yang tulus. Semoga melalui ziarah ini, iman dan devosi kita kepada Bunda Maria semakin diperkuat dan diperdalam.`,
      image: "/assets/carousel_4.jpeg"
    }
  ];

  useEffect(() => {
    // Mencari kegiatan berdasarkan ID
    const kegiatanId = parseInt(id);
    const selectedKegiatan = kegiatanData.find(k => k.id === kegiatanId);
    
    if (selectedKegiatan) {
      setKegiatan(selectedKegiatan);
      
      // Mencari 3 kegiatan terkait secara random (tidak termasuk kegiatan yang sedang ditampilkan)
      const otherKegiatan = kegiatanData.filter(k => k.id !== kegiatanId);
      const shuffled = [...otherKegiatan].sort(() => 0.5 - Math.random());
      setRelatedKegiatan(shuffled.slice(0, 3));
    } else {
      // Redirect ke halaman kegiatan jika ID tidak ditemukan
      navigate('/informasi/kegiatan-keuskupan');
    }
  }, [id, navigate]);

  // Fungsi untuk membuat URL share
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = `/informasi/kegiatan-keuskupan/detail/${id}`;
    return `${baseUrl}${path}`;
  };

  const getWhatsAppShareUrl = () => {
    const text = `${kegiatan?.title} ${getShareUrl()}`;
    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  };

  const getFacebookShareUrl = () => {
    return `https://www.facebook.com/share_channel/`;
  };

  const getTwitterShareUrl = () => {
    const text = kegiatan?.title;
    const url = getShareUrl();
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);
    return `https://x.com/intent/post?text=${encodedText}&url=${encodedUrl}`;
  };

  // Format tanggal
  const formatDate = (date) => {
    if (!date) return '';
    try {
      // Jika date sudah dalam format Date object
      if (date instanceof Date) {
        return format(date, 'd MMMM yyyy', { locale: id });
      }
      // Jika date dalam format string
      const d = new Date(date);
      if (isNaN(d.getTime())) {
        return '';
      }
      return format(d, 'd MMMM yyyy', { locale: id });
    } catch (error) {
      console.error("Error formatting date:", error);
      return kegiatan?.formattedDate || ''; // Fallback ke formattedDate jika ada
    }
  };

  if (!kegiatan) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="detail-kegiatan-container">
      <div className="detail-kegiatan-main">
        <h1 className="detail-kegiatan-title">{kegiatan.title}</h1>
        
        <div className="detail-meta">
          <div className="detail-date">
            {kegiatan.formattedDate || formatDate(kegiatan.date)} | {kegiatan.time}
          </div>
          <div className="detail-social">
            <a href={getWhatsAppShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href={getFacebookShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-social-icon facebook">
              <FaFacebook />
            </a>
            <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-social-icon twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>
        
        <div className="detail-content">
          <div className="detail-image">
            <img src={kegiatan.image} alt={kegiatan.title} />
          </div>
          <div className="detail-text">
            {kegiatan.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      
      <div className="detail-sidebar">
        <h3 className="related-title">Kegiatan Lain</h3>
        <div className="related-kegiatan">
          {relatedKegiatan.map((related) => (
            <Link to={`/informasi/kegiatan-keuskupan/detail/${related.id}`} key={related.id} className="related-item">
              <div className="related-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-content">
                <h4>{related.title}</h4>
                <p className="related-meta">
                  {related.author} | {related.formattedDate}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailKegiatan;