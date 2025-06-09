import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './DetailBeritaHarian.css';

const DetailBeritaHarian = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const navigate = useNavigate();

  // Data artikel berita harian (sama dengan yang di BeritaHarian.jsx)
  const articlesData = [
    {
      id: 1,
      image: '/assets/Berita_1.jpg',
      title: 'Salut, Ibu ini menemukan kekuatannya setelah baca Kitab Suci',
      content: `Siolais, 30/9/2024 — Bulan Kitab Suci Nasional (BKSN) 2024 segera berakhir. Tetapi kemeriahan dan antusias umat belum berakhir. Beberapa paroki di Keuskupan Atambua masih terus mengadakan kegiatan terkait Kitab Suci.

Salah satunya adalah Paroki St. Yohanes Pembaptis Siolais yang mengadakan sharing tentang pengalaman membaca Kitab Suci. Dalam kesempatan tersebut, seorang ibu bernama Maria Fatima membagikan pengalamannya yang menginspirasi.

"Saya dulunya orang yang sangat pemalu dan tidak percaya diri," ungkap Maria. "Tapi setelah rajin membaca Kitab Suci, khususnya Mazmur dan Injil, saya menemukan kekuatan baru. Sekarang saya berani berbicara di depan umum dan bahkan memimpin kelompok doa di lingkungan kami."

Pastor Paroki, Rm. Dominikus Meak, SVD, sangat mengapresiasi kesaksian tersebut. "Inilah bukti nyata bagaimana Sabda Allah dapat mengubah hidup seseorang. Kitab Suci bukan hanya buku biasa, melainkan Sabda yang hidup dan berkuasa," kata Rm. Dominikus.

Kegiatan sharing ini diikuti oleh sekitar 50 umat dari berbagai lingkungan. Mereka juga diajak untuk membuat komitmen pribadi untuk terus membaca dan merenungkan Kitab Suci meskipun BKSN telah berakhir.`,
      author: 'KomsosKAK',
      date: '24 Des 2024',
      time: '08:30 WIB'
    },
    {
      id: 2,
      image: '/assets/Berita_2.jpeg',
      title: 'Umat KUB Bunda Segala Bangsa Belajar Kitab Suci',
      content: `Kupang, 27/9/2024 — Meski hanya dihadiri oleh 8 peserta, KUB Bunda Segala Bangsa Paroki Penfui tetap melaksanakan kegiatan belajar kitab suci khususnya Injil (20/9). Kegiatan ini merupakan bagian dari rangkaian peringatan Bulan Kitab Suci Nasional 2024.

Para peserta yang hadir sangat antusias mengikuti pembahasan tentang Injil Markus. Mereka berdiskusi tentang makna dan aplikasi ayat-ayat dalam kehidupan sehari-hari.

"Kami belajar banyak tentang bagaimana Yesus melayani orang-orang yang membutuhkan," kata Maria, salah satu peserta. "Hal ini mengajarkan kami untuk lebih peka terhadap kebutuhan sesama di sekitar kami."

Kegiatan ini dipimpin oleh Bapak Yohanes, ketua KUB Bunda Segala Bangsa. "Meskipun jumlah peserta sedikit, kami tetap bersemangat karena yang penting adalah kualitas, bukan kuantitas," ujarnya.

Paroki Penfui berencana untuk menjadikan kegiatan belajar Kitab Suci ini sebagai program rutin, tidak hanya selama BKSN. Harapannya, semakin banyak umat yang tertarik untuk mendalami Kitab Suci.`,
      author: 'KomsosKAK',
      date: '20 Des 2024',
      time: '10:15 WIB'
    },
    {
      id: 3,
      image: '/assets/Berita_3.jpg',
      title: 'Akhirnya, Umat Kapela Nifununa Berkatekese di penghujung BKSN 2024',
      content: `Di akhir pekan ketiga, dalam perjalanan menuju Kuasi Paroki Siolais, saya berkesempatan mampir di satu kapela yang masih dalam wilayah kuasi Siolais, kapela St. Yohanes Pemandi Nifununa. Di kapela yang terletak di puncak bukit ini, umat sedang mengadakan katekese sebagai penutup Bulan Kitab Suci Nasional 2024.

Meskipun lokasinya terpencil, semangat umat untuk mempelajari Firman Allah sangat tinggi. Sekitar 40 orang hadir, dari anak-anak hingga lansia. Mereka duduk dengan tekun mendengarkan penjelasan katekis tentang bagian-bagian Kitab Suci.

"Kami sangat bersyukur bisa mengikuti katekese ini," ungkap Bapak Martinus, ketua umat setempat. "Lokasi kami terpencil dan akses transportasi sulit, tetapi kami tetap bersemangat untuk belajar Kitab Suci."

Katekese dipimpin oleh Bapak Paulus, seorang katekis dari Paroki Siolais. Ia mengajarkan tentang bagaimana membaca dan memahami Injil dengan benar. "Penting bagi umat untuk tidak hanya membaca, tetapi juga memahami dan menerapkan Sabda Allah dalam hidup sehari-hari," katanya.

Kegiatan ini diakhiri dengan doa bersama dan komitmen untuk terus membaca Kitab Suci meskipun BKSN telah berakhir.`,
      author: 'KomsosKAK',
      date: '18 Des 2024',
      time: '14:00 WIB'
    },
    {
      id: 4,
      image: '/assets/carousel_1.jpg',
      title: 'Perayaan Natal 2024 di Katedral Santo Yosef Kupang',
      content: `Kupang, 25/12/2024 — Katedral Santo Yosef Kupang dipenuhi umat yang merayakan Natal 2024. Uskup Kupang, Mgr. Petrus Turang, memimpin Misa Natal tengah malam dengan tema "Kristus Terang Dunia".

Dalam homilinya, beliau mengajak umat untuk menjadi pembawa terang Kristus di tengah kegelapan zaman. "Natal bukan hanya perayaan lahiriah, tetapi momentum spiritual untuk membawa terang Kristus ke dalam dunia yang gelap," ujar Mgr. Petrus.

Perayaan ini dihadiri ribuan umat dari berbagai paroki se-Keuskupan Kupang. Gereja dihias dengan ornamen Natal yang indah, termasuk pohon Natal setinggi 5 meter dan gua Natal yang megah.

Koor gabungan dari beberapa paroki menyanyikan lagu-lagu Natal dengan merdu, menambah khidmat suasana perayaan. Setelah Misa, umat saling mengucapkan selamat Natal dan berbagi sukacita.

"Perayaan Natal tahun ini sangat bermakna bagi kami," kata Maria, salah satu umat. "Homili Bapak Uskup mengingatkan kami tentang tanggung jawab untuk menjadi terang bagi sesama."`,
      author: 'KomsosKAK',
      date: '25 Des 2024',
      time: '09:45 WIB'
    },
    {
      id: 5,
      image: '/assets/carousel_2.jpg',
      title: 'Tahbisan Diakon Baru di Seminari Menengah Todabelu',
      content: `Maumere, 15/12/2024 — Seminari Menengah Santo Paulus Todabelu mengadakan upacara tahbisan diakon untuk 15 alumnus. Upacara yang dipimpin oleh Uskup Maumere, Mgr. Ewaldus Martinus Sedu, ini menjadi momen bersejarah bagi calon-calon imam muda.

Para diakon baru akan melanjutkan studi di seminari tinggi untuk persiapan tahbisan imam. Dalam homilinya, Mgr. Ewaldus menekankan pentingnya pelayanan dalam hidup diakon.

"Menjadi diakon berarti menjadi pelayan. Yesus sendiri datang bukan untuk dilayani, melainkan untuk melayani. Inilah teladan yang harus kalian ikuti," ujar Mgr. Ewaldus.

Upacara tahbisan dihadiri oleh keluarga dan sahabat para diakon baru, serta ratusan umat dari berbagai paroki. Suasana haru dan sukacita memenuhi kapel seminari yang megah.

"Ini adalah anugerah besar dari Tuhan. Saya berjanji akan melayani umat dengan sepenuh hati," kata Diakon Yohanes, salah satu diakon baru, dengan mata berkaca-kaca.`,
      author: 'KomsosKAK',
      date: '15 Des 2024',
      time: '11:20 WIB'
    },
    {
      id: 6,
      image: '/assets/carousel_3.jpg',
      title: 'Program Bantuan Sosial Gereja untuk Korban Bencana Alam',
      content: `Atambua, 10/12/2024 — Keuskupan Atambua meluncurkan program bantuan sosial untuk korban bencana alam yang melanda wilayah Timor. Program ini meliputi bantuan pangan, pakaian, dan tempat tinggal sementara.

Uskup Atambua, Mgr. Dominikus Saku, menyatakan bahwa Gereja memiliki tanggung jawab moral untuk membantu sesama yang sedang dalam kesulitan. "Bantuan ini merupakan wujud nyata kasih Kristus kepada saudara-saudari kita yang menderita," ujar Mgr. Dominikus.

Program bantuan ini akan menjangkau lebih dari 500 keluarga yang terdampak bencana. Tim relawan dari berbagai paroki telah dikerahkan untuk mendistribusikan bantuan secara merata.

"Kami sangat berterima kasih atas bantuan dari Keuskupan," kata Bapak Martinus, salah satu korban bencana. "Bantuan ini sangat berarti bagi kami yang kehilangan rumah dan harta benda."

Keuskupan Atambua juga berencana memberikan pendampingan psikologis dan spiritual kepada korban bencana untuk membantu mereka pulih dari trauma.`,
      author: 'KomsosKAK',
      date: '10 Des 2024',
      time: '13:30 WIB'
    },
    {
      id: 7,
      image: '/assets/Berita_1.jpg',
      title: 'Konferensi Keluarga Katolik Se-Provinsi NTT',
      content: `Kupang, 05/12/2024 — Hotel Kristal Kupang menjadi venue Konferensi Keluarga Katolik Se-Provinsi NTT dengan tema "Keluarga, Gereja Domestik yang Beriman". Acara ini dihadiri 200 delegasi dari seluruh keuskupan di NTT.

Konferensi membahas tantangan keluarga modern dan cara menghadapinya dengan nilai-nilai kristiani. Berbagai workshop dan seminar diselenggarakan untuk memperkuat peran keluarga dalam masyarakat.

"Keluarga adalah sel dasar masyarakat dan Gereja domestik. Memperkuat keluarga berarti memperkuat Gereja dan masyarakat," kata Mgr. Petrus Turang dalam sambutan pembukaannya.

Selama tiga hari, para peserta mengikuti berbagai sesi yang dipimpin oleh pakar keluarga dan tokoh Gereja. Topik yang dibahas meliputi pendidikan anak, komunikasi dalam keluarga, dan spiritualitas keluarga.

"Konferensi ini sangat bermanfaat bagi kami. Kami mendapat banyak wawasan baru tentang bagaimana membangun keluarga Katolik yang kuat," ungkap Ibu Maria, salah satu peserta dari Keuskupan Ende.`,
      author: 'KomsosKAK',
      date: '05 Des 2024',
      time: '16:45 WIB'
    },
    {
      id: 8,
      image: '/assets/Berita_2.jpeg',
      title: 'Misi Kesehatan Gratis di Pedalaman Flores',
      content: `Ende, 01/12/2024 — Tim medis Katolik mengadakan misi kesehatan gratis di daerah pedalaman Flores. Kegiatan ini melayani lebih dari 500 pasien dari berbagai desa terpencil.

Pelayanan meliputi pemeriksaan umum, pengobatan, dan edukasi kesehatan. Dr. Maria Goreti, ketua tim, menyatakan bahwa misi ini merupakan wujud pelayanan Gereja di bidang kesehatan, mengikuti jejak Kristus yang menyembuhkan orang sakit.

"Sebagai dokter Katolik, kami tidak hanya fokus pada aspek fisik, tetapi juga spiritual. Kami percaya bahwa kesehatan holistik mencakup tubuh, pikiran, dan jiwa," ujar Dr. Maria.

Tim medis terdiri dari 20 profesional kesehatan, termasuk dokter, perawat, dan apoteker yang sukarela meluangkan waktu mereka. Mereka membawa obat-obatan dan peralatan medis yang cukup lengkap.

"Kami sangat berterima kasih kepada tim medis ini. Di desa kami sulit mendapat layanan kesehatan karena jaraknya jauh dari puskesmas," kata Bapak Yohanes, kepala desa setempat.`,
      author: 'KomsosKAK',
      date: '01 Des 2024',
      time: '09:15 WIB'
    },
    {
      id: 9,
      image: '/assets/Berita_3.jpg',
      title: 'Pelatihan Katekis se-Keuskupan Larantuka',
      content: `Larantuka, 28/11/2024 — Sebanyak 150 katekis dari seluruh wilayah Keuskupan Larantuka mengikuti pelatihan intensif selama tiga hari. Pelatihan ini bertujuan meningkatkan kemampuan para katekis dalam menyampaikan ajaran iman.

Materi yang diberikan meliputi metodologi katekese modern, psikologi anak, dan penggunaan teknologi dalam katekese. Uskup Larantuka, Mgr. Fransiskus Kopong Kung, memberikan arahan khusus tentang pentingnya peran katekis.

"Katekis adalah ujung tombak evangelisasi di paroki. Tanpa katekis yang handal, pendidikan iman umat akan terhambat," ujar Mgr. Fransiskus dalam sambutannya.

Para peserta menunjukkan antusiasme yang tinggi selama pelatihan. Mereka aktif bertanya dan berbagi pengalaman dalam sesi diskusi. Praktek mengajar juga dilakukan untuk mengevaluasi kemampuan para katekis.

"Pelatihan ini sangat bermanfaat bagi saya. Saya mendapat banyak metode baru yang dapat saya terapkan dalam mengajar katekese di paroki kami," kata Ibu Theresia, salah satu peserta.`,
      author: 'KomsosKAK',
      date: '28 Nov 2024',
      time: '14:30 WIB'
    },
    {
      id: 10,
      image: '/assets/carousel_1.jpg',
      title: 'Peresmian Gereja Baru di Desa Terpencil Sumba',
      content: `Waingapu, 25/11/2024 — Desa Praijing, Sumba Timur, meresmikan gereja baru setelah 10 tahun pembangunan. Gereja St. Tarsisius ini dapat menampung 300 umat dan menjadi pusat kehidupan rohani masyarakat setempat.

Uskup Waingapu, Mgr. Siprianus Hormat, memimpin upacara pemberkatan dan menekankan pentingnya gereja sebagai rumah bersama umat beriman. "Gereja bukan hanya bangunan fisik, tetapi simbol kehadiran Allah di tengah umat-Nya," kata Mgr. Siprianus.

Pembangunan gereja ini didukung penuh oleh masyarakat lokal. Banyak dari mereka menyumbangkan tenaga, bahan bangunan, dan dana sesuai kemampuan. Beberapa donatur dari luar daerah juga memberikan bantuan.

"Kami sangat bahagia akhirnya memiliki gereja yang layak. Sebelumnya, kami beribadah di bawah pohon atau di rumah-rumah kecil," ungkap Bapak Petrus, ketua panitia pembangunan.

Peresmian gereja dirayakan dengan Misa meriah yang dihadiri ratusan umat dari berbagai desa sekitar. Setelah Misa, diadakan syukuran sederhana dengan hidangan khas Sumba.`,
      author: 'KomsosKAK',
      date: '25 Nov 2024',
      time: '10:00 WIB'
    },
    {
      id: 11,
      image: '/assets/carousel_2.jpg',
      title: 'Festival Musik Rohani Anak Muda Katolik',
      content: `Maumere, 22/11/2024 — Anak muda Katolik se-NTT berkumpul dalam Festival Musik Rohani dengan tema "Nyanyikan Pujian untuk Tuhan". Lebih dari 50 grup musik dari berbagai paroki tampil memukau.

Festival ini tidak hanya ajang kompetisi tetapi juga sarana evangelisasi melalui musik. Para peserta menunjukkan kreativitas dalam mengaransemen lagu-lagu rohani dengan gaya kontemporer yang menarik anak muda.

"Musik adalah bahasa universal yang dapat menyentuh hati orang. Melalui festival ini, kami berharap semakin banyak anak muda yang tertarik menghayati iman melalui musik," kata Rm. Yohanes, ketua panitia.

Grup Psalmos dari Paroki Katedral Ende menjadi juara pertama dengan lagu original berjudul "Kusambut Cinta-Mu". Mereka mendapat hadiah berupa alat musik dan kesempatan rekaman profesional.

"Kami tidak menyangka bisa menjadi juara. Ini adalah berkat dari Tuhan," ungkap Agustinus, vokalis Psalmos, dengan penuh syukur.`,
      author: 'KomsosKAK',
      date: '22 Nov 2024',
      time: '19:30 WIB'
    },
    {
      id: 12,
      image: '/assets/carousel_3.jpg',
      title: 'Program Beasiswa Pendidikan untuk Anak Kurang Mampu',
      content: `Ruteng, 20/11/2024 — Yayasan Pendidikan Katolik Manggarai meluncurkan program beasiswa untuk 100 anak kurang mampu tingkat SD hingga SMA. Program ini merupakan komitmen Gereja dalam bidang pendidikan.

Mgr. Siprianus Hormat menyatakan bahwa pendidikan adalah hak setiap anak dan Gereja berperan memastikan tidak ada anak yang putus sekolah karena masalah ekonomi. "Beasiswa ini akan diberikan selama satu tahun penuh dan dapat diperpanjang jika siswa menunjukkan prestasi baik," jelasnya.

Kriteria penerima beasiswa meliputi prestasi akademik, latar belakang ekonomi keluarga, dan keterlibatan dalam kegiatan Gereja. Beasiswa mencakup biaya sekolah, seragam, dan buku pelajaran.

"Kami sangat bersyukur atas beasiswa ini. Tanpa bantuan ini, anak saya mungkin terpaksa berhenti sekolah," kata Ibu Maria, salah satu orang tua penerima beasiswa.

Yayasan juga berencana memberikan pendampingan akademik dan spiritual kepada para penerima beasiswa untuk memastikan perkembangan mereka optimal.`,
      author: 'KomsosKAK',
      date: '20 Nov 2024',
      time: '12:15 WIB'
    },
  ];

  useEffect(() => {
    // Mencari artikel berdasarkan ID
    const articleId = parseInt(id);
    const selectedArticle = articlesData.find(a => a.id === articleId);
    
    if (selectedArticle) {
      setArticle(selectedArticle);
      
      // Mencari 3 artikel terkait secara random (tidak termasuk artikel yang sedang ditampilkan)
      const otherArticles = articlesData.filter(a => a.id !== articleId);
      const shuffled = [...otherArticles].sort(() => 0.5 - Math.random());
      setRelatedArticles(shuffled.slice(0, 3));
    } else {
      // Redirect ke halaman berita harian jika ID tidak ditemukan
      navigate('/berita-harian');
    }
  }, [id, navigate]);

  // Fungsi untuk membuat URL share
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = `/berita-harian/${id}`;
    return `${baseUrl}${path}`;
  };

  const getWhatsAppShareUrl = () => {
    const text = `${article?.title} ${getShareUrl()}`;
    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  };

  const getFacebookShareUrl = () => {
    return `https://www.facebook.com/share_channel/`;
  };

  const getTwitterShareUrl = () => {
    const text = article?.title;
    const url = getShareUrl();
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);
    return `https://x.com/intent/post?text=${encodedText}&url=${encodedUrl}`;
  };

  if (!article) {
    return <div className="loading-berita-container">Loading...</div>;
  }

  return (
    <div className="detail-berita-container">
      <div className="detail-berita-main">
        <h1 className="detail-berita-title">{article.title}</h1>
        
        <div className="detail-berita-meta">
          <div className="detail-berita-date">
            {article.date} | {article.time || '10:00 WIB'}
          </div>
          <div className="detail-berita-social">
            <a href={getWhatsAppShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-berita-social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href={getFacebookShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-berita-social-icon facebook">
              <FaFacebook />
            </a>
            <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-berita-social-icon twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="detail-berita-content">
          <div className="detail-berita-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="detail-berita-text">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-berita-sidebar">
        <h3 className="related-berita-title">Berita Lainnya</h3>
        <div className="related-berita">
          {relatedArticles.map((related) => (
            <Link to={`/berita-harian/${related.id}`} key={related.id} className="related-berita-item">
              <div className="related-berita-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-berita-content">
                <h4>{related.title}</h4>
                <p className="related-berita-meta">
                  <span className="author">by {related.author}</span> | {related.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailBeritaHarian;