import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './DetailEpiscopal.css';

const DetailEpiscopal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const contentRef = useRef(null);
  
  // Konten dari detail_episcopal.txt
  const articleContent = `
    <p><strong>1. Apa yang masih terngiang kuat dari peristiwa pengumuman bahwa Monsinyur dipilih Vatikan menjadi Uskup di Keuskupan Agung Kupang?</strong><br />
    Pilihan Tuhan tak terpahami, rencananya tersembunyi rahasia kekal-Nya. Saya bertanya tentang maksud pilihan ini terhadap orang yang hina ini dalam martabat Uskup. Nyatanya saya harus menjalani pilihan ini, seraya mendengarkan rekan-rekan seimamat baik uskup maupun imam demi persatuan umat seluruhnya. Terima kasih atas persaudaraan ini.</p>
    
    <p><strong>2. Sebelum dipilih sebagai Uskup di Keuskupan Agung Kupang, apakah Bapak Uskup pernah berkunjung ke wilayah Keuskupan Agung Kupang?</strong><br />
    Sebagai Sekretaris Komisi PSE KWI dan juga Direktur Nasional KKI saya pernah berkunjung ke Keuskupan Agung Kupang; membangun animasi sesuai dengan tanggung jawab tugas untuk menjalin hubungan pelayanan dengan pihak Keuskupan. Keuskupan Agung Kupang tidak seutuhnya asing bagi saya. Saya pernah mengunjungi beberapa paroki.</p>
    
    <p><strong>3. Apa yang Monsinyur bayangkan tentang Keuskupan Agung Kupang, saat pertama kali mengetahui bahwa Bapak Uskup dipilih menjadi Uskup di wilayah ini?</strong><br />
    Saya membayangkan Keuskupan Agung Kupang sebagai “kawanan kecil umat Katolik” di tengah keberagaman umat beragama (Protestan, Islam serta umat lain). Saya pikir keadaannya tidak jauh berbeda dengan keberagaman di Minahasa, Sulawesi Utara. Bayangan ini tidak terlepas dari lingkungan hidup yang terkenal kering dan gersang pada musim kemarau.</p>
    
    <p><strong>4. Awal-awal tahun Episkopal, apa saja yang Monsinyur pikirkan dan lakukan? Apa saja problema yang dihadapi di lima tahun pertama penggembalaan Bapak Uskup di wilayah ini?</strong><br />
    Saya berpikir tentang kebersamaan pelayanan pastoral (Imam, Hidup Bakti dan umat awam) yang mampu berkarya untuk menyuburkan perbuatan baik di dalam paroki-paroki bersama masyarakat setempat. Saya mempelajari keadaan setempat, khususnya kehadiran pelbagai suku dalam gereja Katolik, seraya berupaya memperhatikan jumlah imam yang tersedia. Saya melihat persoalan pada 5 tahun pertama, sesudah saya menjadi Uskup Agung Kupang: pentingnya persaudaraan di kalangan imam, makna kehadiran para Hidup Bakti, perjuangan keluarga sejahtera umat Katolik, kerjasama di kalangan kaum awam serta hubungan umat sederhana dengan mereka yang terpelajar dan berkedudukan, termasuk hubungan antar umat beragama.</p>
    
    <p><strong>5. Jika melihat ke 25 tahun berjalan (masa lampau), apa saja yang Monsinyur anggap sebagai karya penting di Keuskupan Agung Kupang?</strong><br />
    Karya yang utama dan penting: pembangunan karya pastoral di kalangan imam, termasuk pendidikan calon imam; keterlibatan kaum awam dalam karya pastoral menurut semangat kemuridan Yesus; pendidikan generasi muda dan jalinan kerjasama dengan pemerintah dan pemimpin umat beragama.</p>
    
    <p><strong>6. Apa dan bagaimana bapak Uskup memaknai 25 tahun menjadi Uskup Keuskupan Agung Kupang?</strong><br />
    Makna utama adalah pertumbuhan hidup iman dalam semangat bersaudara di paroki-paroki: kerelaan berpartisipasi dan melakukan perutusan bersama. Kehadiran kalangan imam yang tumbuh dalam jumlah dan keperluan bina lanjut dalam pelayanan pastoral bersama dan bersekutu. kehadiran Kelompok Umat Basis (KUB) semakin bergerak dan persoalan kemanusiaan bersama organisasi Katolik. Di samping itu, saya diterima dan tumbuh sebagai Uskup dengan watak ” Fortiter in re et fortiter in modo” dalam bingkai motto “pertransiit benefaciendo”. Dengan demikian, saya sudah belajar menjadi Uskup dengan segala kelemahan dan kerapuhan dalam bantuan Tuhan yang terungkap dalam persekutuan gerejani setempat.</p>
    
    <p><strong>7. Apakah Monsinyur merasa bahwa waktu 25 tahun penggembalaan di Keuskupan Agung Kupang ini cepat berlalu?</strong><br />
    Ya, tak terasa sudah sampai 25 tahun. Waktu berjalan cepat dan bergerak terus tanpa pemberitahuan. Demikian kita manusia mengalami perjalanan waktu, tanpa memahaminya seutuhnya. Waktu itu terbatas, tetapi selalu tepat, tanpa penundaan. Terima kasih waktu hidup selama 25 tahun sebagai Uskup karena rahmat Tuhan yang terungkap dalam wilayah pelayanan setempat.</p>
    
    <p><strong>8. Impian apa yang belum terealisir atau belum tercapai?</strong><br />
    Bentuk kerjasama pastoral yang bersandar pada rencana pastoral yang matang dan terpahami dengan baik, termasuk pemberdayaan umat dalam bidang sosial politik. Prosesnya sedang terjadi, namun perlu peningkatan dengan penyertaan doa berkanjang.</p>
    
    <p><strong>9. Apa rencana Monsinyur ke depan mengingat juga bahwa Bapak Uskup sudah punya hak untuk mengajukan pengunduran diri sebagai Uskup Keuskupan Agung Kupang?</strong><br />
    Deo volente, kesehatan ada dan kesepakatan dengan Uskup baru’ karena permohonan pengunduran diri telah dilakukan sesuai dengan syarat kanonik yang berlaku. Saya akan menjalani masa emeritus dalam belas kasih Tuhan Yesus.</p>
    
    <p><strong>10. Tantangan apa yang menurut Monsinyur akan dihadapi umat Katolik Keuskupan Agung Kupang dan masyarakat NTT ke depan? Apa anjuran/ nasihat terhadap tantangan-tantangan tersebut? Apa yang harus dilakukan oleh gereja dan pemerintah, mengingat NTT adalah salah satu ‘gudang’ umat Katolik di Indonesia?</strong><br />
    Tantangan umat Katolik Keuskupan Agung Kupang, menurut hemat saya adalah:
    Kerjasama pelayanan pastoral di kalangan imam dalam jalinan komunikatif dengan umat Awam, Kerjasama pemberdayaan komunikasi sosial ekonomi umat Katolik, Pendidikan calon pemimpin umat entah tertahbis atau tidak tertahbis yang selaras dengan perkembangan jaman, Pendidikan kompetensi kaum generasi muda, khususnya perempuan, menurut tuntutan hati nurani yang berwatak murid Kristus, Pemberdayaan komisi-komisi dalam Keuskupan Agung Kupang: jalinan perutusan berkelanjutan dengan paroki-paroki
    Harapan di masa depan:
    Umat Katolik Keuskupan Agung Kupang tumbuh dan berkembang dalam lingkungan budaya kasih, dimana bermekar bentuk-bentuk kerjasama pastoral yang saling mendukung dan saling menguatkan pertumbuhan hidup iman. Lingkungan demikian akan menjadi kesempatan bagi generasi muda untuk mengembangkan nilai-nilai kehidupan yang beralih dari generasi terdahulu, sehingga kelangsungan hidup iman dapat membangun kemanfaatan yang merangkul seluruh umat.
    Lingkungan budaya kasih ini menjadi tanda ”perjalanan bersama” menuju hadirnya tanda-tanda Kerajaan Allah. Perkembangan hidup iman tidak pernah lepas dari panggilan dan perutusan untuk membangun persekutuan gerejani setempat dalam keadilan dan perdamaian dan pada gilirannya membuka kesempatan untuk pemberdayaan komunikasi sosial ekonomi yang bermartabat Kristiani dalam keseharian.
    Keuskupan Agung Kupang tetap perlu memberikan peduli utama terhadap pendidikan calon pemimpin umat, entah imam atau katekis, agar kelak pelayanan pastoral tidak mengalami kelangkaan pastoral dalam kesungguhan hati untuk membangun persekutuan kemuridan yang berakar dalam teladan Yesus Kristus
    Perkembangan hidup iman Kristiani menuju kematangan yang semakin aktif dan kreatif dalam partisipasi dan perutusan bersama untuk menjadi saksi-saksi Kristus di bawah bimbingan Roh Kudus, khususnya dalam hidup keluarga Katolik seraya memperhatikan perkembangan teknologi komunikasi.
    Hidup keluarga Katolik yang tumbuh dalam iman membangun jalinan kerjasama dengan keluarga-keluarga lain dalam upaya menjaga kerukunan hidup yang berwatak saling menghormati dan saling menghargai.
    Tantangan masyarakat NTT menurut hemat saya adalah:
    Pelayanan publik dengan kompetensi pendekatan yang mensejahterakan masyarakat, khususnya di daerah pedesaan.
    Sarana dan prasarana pembangunan penghidupan masyarakat yang memadai yang dikemas secara cakap oleh eksekutif bersama legislatif, tanpa korupsi, utamanya jalan, listrik dan air.
    Program pemberdayaan hidup masyarakat yang bersumber pada daya dukung setempat dalam bingkai perkembangan zaman, termasuk kepercayaan pada pengembang setempat.
    Pengembangan kewirausahaan dalam memanfaatkan daya dukung setempat (pertanian, peternakan, perikanan serta pendidikan) dan terbuka pada jejaring usaha nasional dan internasional.
    Pembangunan sentra-sentra industri kecil dan menengah, termasuk usaha pariwisata, yang didukung oleh balai-balai latihan kerja yang bermartabat dan bermutu.
    Harapan masa depan masyarakat NTT, khusus di wilayah pelayanan Keuskupan Agung Kupang: Masyarakat NTT masih berada dalam lingkungan sosial yang memerlukan pemberdayaan, agar masyarakat mampu bergerak untuk bangkit sejahtera. Lingkungan sosial NTT nyatanya masih mengandalkan daya dukung setempat, seperti pertanian, peternakan, perikanan dan kerajinan, menuju perubahan sosial yang membangun keadaan bermartabat, seraya memperhitungkan perbaikan sarana dan prasarana penghidupan, seperti jalan, listrik dan air yang memadai, Keberlanjutan hidup dan penghidupan yang didasarkan pada pertanian dan peternakan tradisional perlu mendapatkan sentuhan teknologis yang sesuai, agar masyarakat semakin tumbuh dan berkembang sesuai dengan perubahan zaman. Salah satu yang perlu mendapat perhatian utama adalah bentuk-bentuk pelayanan publik, agar sesungguhnya mampu menopang dan menggerakan “ stagnasi sosial” yang terjadi.
    Pelayanan publik yang tepat dan bermartabat perlu mendapatkan dukungan bersama, agar para abdi masyarakat sungguh-sungguh memberikan pengabdian yang unggul demi pertumbuhan kemampuan sosial ekonomi masyarakat. Masyarakat memerlukan pendekatan manusiawi, agar jalinan komunikasi pembangunan dapat terwujud dalam keseimbangan yang memberdayakan dan setara.
    Masyarakat dapat mengembangkan kemampuan hidup yang terbuka kepada kerjasama yang saling memberdayakan dan saling menguntungkan. Dalam keadaan demikian, perangkat pelayanan publik memiliki tanggung jawab untuk merencanakan program-program pembangunan sesuai dengan daya dukung setempat, tanpa menutup kemungkinan untuk memperluas kerjasama yang terbuka dalam dunia teknologi, seperti literasi digital.
    Masyarakat di daerah pedesaan yang masih sering mengalami “ kemiskinan” ketidak-matangan dalam teknologi perlu mendapatkan pendidikan dan bimbingan yang memadai, agar mereka mampu menemukan jalan keluar untuk mengatasi ketertinggalan yang meresahkan dan memprihatinkan.
    Kehadiran alsintan tidak dengan sendirinya mengadakan perubahan dalam penghidupan, bila kemampuan teknologis yang memadai tidak tersedia setempat, seperti tenaga ahli atau bengkel perbaikan alsintan. Demikian juga bidang-bidang pembangunan lainnya, seperti peternakan atau perikanan. Di samping itu, perlu dikembangkan sarana pemasaran yang sesuai, agar masyarakat tidak mengalami kekecewaan dalam menghasilkan produksinya.
    Kehadiran usaha pariwisata pun perlu dipelajari dengan efektif, agar masyarakat NTT tidak hanya menjadi “ pelayan-pelayan” pariwisata, sedangkan kemampuan pertumbuhan kesejahteraan tetap berada di luar jangkauan masyarakat setempat dan pada gilirannya, pariwisata hanya menjadi tontonan karena tidak bermanfaat bagi pembangunan hidup masyarakat setempat.
    Masyarakat NTT maju dan bangkit sejahtera, bilamana kerjasama pembangunan dilaksanakan dengan kejujuran yang melibatkan semua pihak. Kerjasama sinergis yang efektif akan menggerakkan partisipasi yang berwatak simbiose mutualistik menuju kerukunan sejahtera bersama. Pada dasarnya, itulah solidaritas yang tumbuh dari subsidiaritas yang tulus di tengah keberagaman sosial.</p>
  `;

  // Data dummy 22 artikel
  const articles = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    title: `Perak Episcopal Mgr Petrus Turang ${i + 1}`,
    image: `/assets/episcopal_${(i % 3) + 1}.jpg`, // Tambahkan gambar
    content: articleContent,
    author: 'by KomsosKAK',
    date: `${24 + Math.floor(i / 6)} Des 2024`
  }));

  // Urutkan berdasarkan tanggal (terbaru pertama)
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.date.split(' ').reverse().join('-')) - 
    new Date(a.date.split(' ').reverse().join('-'))
  );

  useEffect(() => {
    // Cari artikel berdasarkan ID
    const current = articles.find(a => a.id === parseInt(id));
    setArticle(current);

    // Cari artikel sebelumnya dan berikutnya
    const currentIndex = sortedArticles.findIndex(a => a.id === parseInt(id));
    
    if (currentIndex > 0) {
      setPrevArticle(sortedArticles[currentIndex - 1]);
    } else {
      setPrevArticle(null);
    }
    
    if (currentIndex < sortedArticles.length - 1) {
      setNextArticle(sortedArticles[currentIndex + 1]);
    } else {
      setNextArticle(null);
    }

    // Scroll ke atas dengan animasi
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [id]);

  // Setelah artikel baru dimuat, reset opacity ke 1 (fade in)
  useEffect(() => {
    // Cari artikel berdasarkan ID
    const current = articles.find(a => a.id === parseInt(id));
    setArticle(current);
    
    // Cari artikel sebelumnya dan berikutnya
    const currentIndex = sortedArticles.findIndex(a => a.id === parseInt(id));
    
    if (currentIndex > 0) {
      setPrevArticle(sortedArticles[currentIndex - 1]);
    } else {
      setPrevArticle(null);
    }
    
    if (currentIndex < sortedArticles.length - 1) {
      setNextArticle(sortedArticles[currentIndex + 1]);
    } else {
      setNextArticle(null);
    }

    // Setelah artikel baru dimuat, reset opacity ke 1 (fade in)
    if (contentRef.current) {
      contentRef.current.style.opacity = '1';
      contentRef.current.style.transition = 'opacity 0.3s ease';
    }

    // Scroll ke atas judul/konten
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }, [id]);

  if (!article) {
    return <div className="episcopal-loading">Memuat artikel...</div>;
  }

  // Fungsi untuk navigasi artikel dengan animasi scroll
  const navigateToArticle = (articleId) => {
    // Tambahkan efek fade out
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      contentRef.current.style.transition = 'opacity 0.3s ease';
    }

    // Setelah animasi fade out, navigasi ke artikel baru
    setTimeout(() => {
      navigate(`/perak-episcopal/detail/${articleId}`);
    }, 300);
  };

  return (
    <div className="detail-episcopal-page" ref={contentRef}>
      <main className="detail-episcopal-content">
        <div className="detail-episcopal-container">
          <h1 className="detail-episcopal-title">{article.title}</h1>

          <div className="episcopal-article-meta">
            <span>{article.author}</span>
            <span>|</span>
            <span>{article.date}</span>
          </div>
          
          {/* Tambahkan gambar di sini */}
          <div className="episcopal-featured-image">
            <img src={article.image} alt={article.title} />
          </div>
          
          <div 
            className="episcopal-article-content" 
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
          
          {/* Navigation */}
          <div className="episcopal-detail-navigation">
            <button 
              onClick={() => prevArticle && navigateToArticle(prevArticle.id)}
              disabled={!prevArticle}
              className={`episcopal-nav-button prev ${!prevArticle ? 'disabled' : ''}`}
            >
              <MdKeyboardDoubleArrowLeft className="icon" /> Older Post
            </button>
            
            <button 
              onClick={() => nextArticle && navigateToArticle(nextArticle.id)}
              disabled={!nextArticle}
              className={`episcopal-nav-button next ${!nextArticle ? 'disabled' : ''}`}
            >
              Next Post <MdKeyboardDoubleArrowRight className="icon" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailEpiscopal;