import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './DetailSerba.css';

const DetailSerba = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const navigate = useNavigate();

  // Data artikel serba serbi (sama dengan yang di SerbaSerbi.jsx)
  const articlesData = [
  {
    id: 1,
    image: '/assets/carousel_2.jpg',
    title: 'Penjelasan Logo Uskup Agung Kupang, Mgr Hironimus Pakaenoni',
    content: `PASCE OVES MEAS – GEMBALAKANLAH DOMBA-DOMBAKU (Yoh 21:17)

Ada 11 unsur dalam Logo Uskup Agung Kupang, Mgr. Hironimus Pakaenoni:

1. Topi berwarna Hijau: Misteri keselamatan Allah yang selalu hadir menyejuki umat manusia. Lambang martabat Tahbisan dan kuas, yang difutuskan untuk melaksanakan karya penggembalaan bagi para Rasul, yang siap diutus untuk melaksanakan karya kegembalaannya.

2. Tali Yair dan Jumbai bersulur: Kesatuan dan persekutuan antar yang diduduki keselamatan bagi para Rasul, sekaligus keseriapan dan kesediaan seorang Uskup untuk karya pastoral.

3. Salib: Lambang misteri keselamatan dan pusat pewartaan Gereja adalah Kristus Sang Yesus yang wafat dan bangkit. Tubuh Kristus dan kenisah Roh Kudus, yang membawa berriman iman kedalam penyatuan umat, membentuk Tubuh yang memperoleh hasil sekaligus kesediaan seorang Uskup untuk karya kegembalaannya.

4. Jubah Merah: Kunus tabah yang tertaksama di dalam Gereja, Tubuh Kristus dan Genisah Roh Kudus, yang memberikan beriman iman kedalam kesatuan ummat.

5. Mitra: Lambang tugas seorang Uskup sebagai pemimpin, pelajar, pembela kebenaran dan kekuatan untuk menerapkannya akan "Ite" Kristus yang harus dipanggulnya sebagai panggilan hidupnya.

6. Gembala Yang Baik: Yesus Sang Gembala Agung, contoh dan teladan setiap Gembala bagi kesemuanya. Lambang keluarga yang berada disekitar keluarganya yang tak terpotuskan dari para Rasul, sekaligus kesiapan dan kesediaan seorang umum untuk mengembangkan Gereja.

7. Lambang gereja tiga orang di Gembala: 
8. Gembala Yang Baik: Yesus Sang Gembala Agung, contoh dan teladan setiap Gembala
9. Warna coklat, hijau dan rak-rak tanah: Wilayah pastoral Keuskupan Agung Kupang yang telah dan wilayah persawahan, wilayah sebagai subet dan tanahan. Warna yang baik aliran bersama umat Allah menjadi tanah yang subur agar berumbuh dalam iman sebagai gembala, sekaligus meningkatkannya akan "kuk" Kristus yang harus dipangguinya sebagai panggilan hidupnya.

10. Warna asokat, hijau dan nak nak ini: Kekhasan tanah ini yang menunjukkan Uskup Agung Kupang Wilayah yang berikan di sabahnya will mengunaan sebagai teladan setiap pangilan hidupnya.

11. Pita beruliskan motto: "PASCE OVES MEAS". GEMBALAKANLAH DOMBA-DOMBAKU (Yoh 21:17)

Logo dibuat berdasarkan gagasan utama dari Mgr. Rony.

Logo ini dirancang oleh Rd. Theo Silab dan penyempurnaan teknis-grafisnya dikerjakan oleh Wens Putra Wua.`,
    logoImage: '/assets/logo_2.png', // Gambar logo khusus
    author: 'KomsosKAK',
    date: '24 Des 2024',
  },
  {
    id: 2,
    image: '/assets/serba1.jpg',
    title: 'Sejarah Katedral Kristus Raja Kupang',
    content: `Katedral Kristus Raja Kupang merupakan gereja induk Keuskupan Agung Kupang yang menjadi pusat kehidupan spiritual umat Katolik di NTT. Bangunan bersejarah ini telah menjadi saksi berbagai peristiwa penting dalam perjalanan Gereja Katolik di wilayah timur Indonesia.

Katedral ini dibangun pada tahun 1960-an sebagai pengganti gereja lama yang sudah tidak memadai. Pembangunan dipimpin langsung oleh Mgr. Adrianus Djajasepoetra, Uskup pertama Kupang. Desain bangunan menggabungkan arsitektur Eropa dengan sentuhan lokal yang mencerminkan inkulturasi budaya.

Arsitektur katedral memiliki gaya neo-gothic dengan adaptasi iklim tropis. Menara kembar yang menjulang tinggi menjadi simbol doa yang naik ke surga. Jendela-jendela kaca patri menceritakan kisah-kisah Kitab Suci, sementara altar utama yang megah dilengkapi dengan tabernakel yang artistik.

Sebagai gereja katedral, bangunan ini berfungsi sebagai pusat perayaan liturgi utama keuskupan, tempat tahbisan imam dan diakon, serta lokasi perayaan-perayaan besar seperti Natal, Paskah, dan Pentakosta.

Bagi umat Katolik NTT, katedral ini bukan hanya bangunan fisik tetapi juga rumah rohani yang menyatukan semua umat dan menjadi simbol persatuan dalam keberagaman suku dan budaya di NTT.`,
    author: 'KomsosKAK',
    date: '20 Des 2024',
  },
  {
    id: 3,
    image: '/assets/serba2.jpeg',
    title: 'Tradisi Natal di Nusa Tenggara Timur',
    content: `Perayaan Natal di NTT memiliki ciri khas tersendiri yang memadukan tradisi lokal dengan liturgi Katolik. Tradisi-tradisi ini telah berkembang selama puluhan tahun dan menjadi bagian integral dari kehidupan beragama masyarakat NTT.

Kolende merupakan tradisi bernyanyi dari rumah ke rumah untuk mengumumkan kelahiran Kristus. Kelompok kolende biasanya terdiri dari anak-anak dan remaja yang berkeliling kampung sambil membawa lilin dan menyanyikan lagu-lagu Natal dalam bahasa daerah, diiringi alat musik tradisional.

Drama Natal menjadi tradisi yang sangat dinantikan di setiap komunitas, paroki, dan sekolah. Pementasan menggunakan setting dan kostum yang disesuaikan dengan budaya setempat, dengan dialog dalam bahasa daerah dan penyisipan unsur-unsur budaya lokal yang tidak bertentangan dengan iman.

Dekorasi Natal menggunakan bahan-bahan lokal seperti pohon Natal dari bambu dan daun kelapa, ornamen dari kerajinan tangan masyarakat setempat, serta kandang Natal dengan figur-figur bergaya lokal.

Tradisi Natal NTT menekankan nilai-nilai kebersamaan dan gotong royong, berbagi dengan sesama yang membutuhkan, pelestarian budaya dalam bingkai iman, dan penghargaan terhadap kearifan lokal yang menciptakan persatuan dalam keberagaman.`,
    author: 'KomsosKAK',
    date: '18 Des 2024',
  },
  {
    id: 4,
    image: '/assets/serba3.jpg',
    title: 'Peranan Gereja dalam Pendidikan di NTT',
    content: `Gereja Katolik telah memainkan peran penting dalam dunia pendidikan di Nusa Tenggara Timur sejak masa penjajahan. Banyak sekolah dan universitas yang didirikan oleh kongregasi religius telah melahirkan generasi-generasi terdidik yang berkontribusi bagi pembangunan daerah.

Pendidikan Katolik di NTT tidak hanya mengajarkan ilmu pengetahuan tetapi juga nilai-nilai moral dan spiritual. Lembaga-lembaga pendidikan Katolik dikenal dengan kualitas pendidikan yang baik dan pembentukan karakter yang kuat.

Sekolah-sekolah Katolik di NTT tersebar dari tingkat dasar hingga perguruan tinggi. Mereka melayani tidak hanya umat Katolik tetapi juga masyarakat umum tanpa membedakan agama, suku, atau status sosial ekonomi.

Pendekatan pendidikan holistik yang diterapkan mencakup pengembangan intelektual, spiritual, emosional, dan sosial siswa. Nilai-nilai seperti kasih, keadilan, kejujuran, dan pelayanan kepada sesama menjadi bagian integral dari kurikulum.

Kontribusi pendidikan Katolik terhadap pembangunan NTT sangat signifikan, menghasilkan para pemimpin, profesional, dan aktivis sosial yang berkomitmen pada kemajuan daerah dan kesejahteraan masyarakat.`,
    author: 'KomsosKAK',
    date: '15 Des 2024',
  },
  {
    id: 5,
    image: '/assets/serba1.jpg',
    title: 'Festival Budaya Kristiani NTT',
    content: `Festival Budaya Kristiani NTT merupakan ajang penting untuk menampilkan kekayaan budaya lokal yang telah berakulturasi dengan nilai-nilai Kristiani. Event ini mempertontonkan berbagai tarian tradisional, musik daerah, dan seni pertunjukan yang mengangkat tema-tema rohani.

Festival ini menjadi wadah untuk melestarikan warisan budaya sambil memperkuat identitas Kristiani masyarakat NTT. Setiap tahun, berbagai komunitas dari seluruh penjuru NTT berkumpul untuk menampilkan kreativitas seni yang menggabungkan tradisi lokal dengan pesan-pesan kristiani.

Pertunjukan yang ditampilkan meliputi tarian adat yang diadaptasi dengan cerita-cerita Alkitab, musik tradisional dengan lirik rohani, drama budaya yang mengangkat nilai-nilai kristiani, dan pameran kerajinan tangan dengan motif-motif religius.

Festival ini tidak hanya menjadi sarana hiburan tetapi juga media evangelisasi dan pendidikan budaya. Melalui seni dan budaya, pesan-pesan iman disampaikan dengan cara yang menarik dan mudah diterima oleh masyarakat.

Kegiatan ini menunjukkan bahwa iman Katolik dapat hidup berdampingan harmonis dengan budaya lokal, menciptakan sintesa yang indah antara nilai-nilai universal kristiani dengan kearifan lokal masyarakat NTT.`,
    author: 'KomsosKAK',
    date: '12 Des 2024',
  },
  {
    id: 6,
    image: '/assets/serba2.jpeg',
    title: 'Pelayanan Sosial Gereja di Masa Pandemi',
    content: `Selama masa pandemi COVID-19, Gereja Katolik di NTT menunjukkan kepedulian nyata melalui berbagai program pelayanan sosial. Mulai dari pembagian sembako, layanan kesehatan gratis, hingga pendampingan psikologis bagi masyarakat yang terdampak.

Pelayanan ini mencerminkan ajaran Kristus tentang kasih kepada sesama, terutama kepada mereka yang paling membutuhkan. Gereja tidak hanya fokus pada pelayanan spiritual tetapi juga merespons kebutuhan konkret masyarakat di tengah krisis.

Program-program yang dilaksanakan meliputi pembagian bantuan makanan dan kebutuhan pokok, penyediaan masker dan hand sanitizer, layanan konsultasi kesehatan gratis, pendampingan keluarga yang kehilangan mata pencaharian, dan dukungan psikologis bagi yang mengalami trauma.

Relawan dari berbagai paroki dan komunitas basis gerejawi terlibat aktif dalam program-program ini. Mereka bekerja sama dengan pemerintah dan organisasi masyarakat sipil untuk memastikan bantuan tepat sasaran.

Pelayanan sosial Gereja selama pandemi membuktikan bahwa iman harus diwujudkan dalam tindakan nyata. Gereja tidak berdiam diri dalam gedung tetapi turun langsung melayani masyarakat yang membutuhkan bantuan.`,
    author: 'KomsosKAK',
    date: '08 Des 2024',
  },
  {
    id: 7,
    image: '/assets/serba3.jpg',
    title: 'Makna Simbolik Tenun dalam Liturgi',
    content: `Tenun tradisional NTT memiliki tempat khusus dalam liturgi Gereja Katolik setempat. Berbagai motif dan warna dalam tenun tidak hanya memiliki nilai estetis tetapi juga mengandung makna spiritual yang mendalam.

Penggunaan tenun dalam perayaan liturgi menunjukkan bagaimana budaya lokal dapat memperkaya ekspresi iman dalam konteks lokal tanpa mengurangi universalitas pesan Injil. Tenun menjadi media inkulturasi yang menghubungkan tradisi leluhur dengan iman kristiani.

Motif-motif dalam tenun NTT sering kali memiliki makna simbolis yang dapat diinterpretasikan dalam konteks kristiani. Misalnya, motif pohon kehidupan yang melambangkan Kristus sebagai sumber kehidupan, atau motif matahari yang melambangkan terang Kristus.

Dalam perayaan liturgi, tenun digunakan sebagai vestment imam, dekorasi altar, dan perlengkapan liturgis lainnya. Penggunaan ini memberikan nuansa lokal yang khas pada perayaan ekaristi dan sakramen-sakramen lainnya.

Tradisi ini menunjukkan kreativitas umat Katolik NTT dalam mengekspresikan iman mereka melalui seni dan budaya lokal, menciptakan liturgi yang otentik dan bermakna bagi masyarakat setempat.`,
    author: 'KomsosKAK',
    date: '05 Des 2024',
  },
  {
    id: 8,
    image: '/assets/serba1.jpg',
    title: 'Kongregasi Religius di NTT',
    content: `Berbagai kongregasi religius pria dan wanita telah berkarya di NTT selama puluhan tahun. Mereka tidak hanya melayani dalam bidang pastoral tetapi juga pendidikan, kesehatan, dan pemberdayaan masyarakat.

Kehadiran para religius ini telah memberikan warna tersendiri bagi kehidupan menggereja di NTT dan menjadi teladan hidup bakti yang total kepada Allah dan sesama. Mereka hidup dalam kesederhanaan sambil melayani dengan penuh dedikasi.

Kongregasi-kongregasi seperti SVD, SSpS, MSC, dan banyak lagi telah mendirikan sekolah, rumah sakit, panti asuhan, dan berbagai karya sosial lainnya. Mereka juga aktif dalam pelayanan pastoral di paroki-paroki dan stasi-stasi.

Para religius tidak hanya bekerja di perkotaan tetapi juga rela berkarya di daerah-daerah terpencil yang sulit dijangkau. Mereka hidup bersama masyarakat, belajar budaya lokal, dan menjadi bagian dari kehidupan sehari-hari umat.

Karya mereka dalam bidang pendidikan telah menghasilkan banyak pemimpin dan profesional yang berkontribusi bagi pembangunan NTT. Dalam bidang kesehatan, mereka melayani masyarakat tanpa memandang agama, suku, atau status sosial ekonomi.`,
    author: 'KomsosKAK',
    date: '02 Des 2024',
  },
  {
    id: 9,
    image: '/assets/serba2.jpeg',
    title: 'Musik Liturgi Khas NTT',
    content: `Musik liturgi di NTT memiliki karakteristik unik yang memadukan irama tradisional dengan lagu-lagu Gereja universal. Penggunaan alat musik tradisional seperti sasando, gong, dan tifa dalam ibadat menciptakan suasana peribadatan yang khas.

Musik ini memperkaya khazanah musik liturgi Katolik Indonesia dan menjadi salah satu cara evangelisasi melalui seni dan budaya. Lagu-lagu liturgi dalam bahasa daerah membantu umat memahami dan menghayati pesan-pesan iman dengan lebih mendalam.

Komposer-komposer lokal telah menciptakan banyak lagu liturgi yang menggabungkan melodi tradisional dengan lirik-lirik rohani. Karya-karya ini tidak hanya digunakan dalam liturgi tetapi juga dalam berbagai acara keagamaan dan budaya.

Paduan suara gereja di NTT dikenal dengan kemampuan mereka memadukan teknik vokal barat dengan gaya bernyanyi tradisional. Mereka sering tampil dalam festival musik liturgi tingkat nasional dan internasional.

Musik liturgi NTT menunjukkan bahwa ibadah dapat diperkaya dengan unsur-unsur budaya lokal tanpa mengurangi kesucian dan makna liturgi. Ini merupakan contoh nyata inkulturasi yang berhasil dalam kehidupan menggereja.`,
    author: 'KomsosKAK',
    date: '28 Nov 2024',
  },
  {
    id: 10,
    image: '/assets/serba3.jpg',
    title: 'Program Katekese Berbasis Budaya Lokal',
    content: `Program katekese di NTT dikembangkan dengan pendekatan inkulturasi, mengintegrasikan nilai-nilai budaya lokal dengan ajaran iman Katolik. Metode pengajaran menggunakan cerita rakyat, permainan tradisional, dan ritual adat yang diadaptasi dengan pesan Injil.

Pendekatan ini terbukti efektif dalam menanamkan nilai-nilai iman kepada generasi muda dengan cara yang mudah dipahami dan diterima. Katekese tidak lagi menjadi kegiatan yang kaku dan membosankan tetapi menjadi proses pembelajaran yang menyenangkan dan bermakna.

Para katekis dilatih untuk memahami budaya lokal dan menemukan titik-titik temu antara tradisi leluhur dengan ajaran kristiani. Mereka menggunakan dongeng, lagu daerah, dan permainan tradisional sebagai media penyampaian pesan iman.

Program ini juga melibatkan orang tua dan tokoh adat dalam proses katekese. Mereka diminta berbagi cerita dan pengalaman hidup yang dapat dijadikan pembelajaran moral dan spiritual bagi anak-anak.

Hasil dari program katekese berbasis budaya lokal ini adalah generasi muda yang tidak hanya mengenal ajaran iman tetapi juga mencintai dan melestarikan budaya leluhur mereka. Mereka menjadi jembatan antara tradisi dan modernitas.`,
    author: 'KomsosKAK',
    date: '25 Nov 2024',
  },
  {
    id: 11,
    image: '/assets/serba1.jpg',
    title: 'Peran Awam dalam Pelayanan Gereja',
    content: `Umat awam di NTT memiliki peran aktif yang sangat penting dalam kehidupan menggereja. Mereka terlibat dalam berbagai pelayanan mulai dari katekis, guru sekolah minggu, hingga tim pastoral paroki.

Keterlibatan awam ini menunjukkan kesadaran akan panggilan baptismal untuk turut serta dalam misi evangelisasi dan pembangunan Kerajaan Allah di bumi NTT. Mereka tidak hanya menjadi objek pelayanan tetapi juga subjek yang aktif melayani.

Berbagai bidang pelayanan yang ditangani umat awam meliputi katekese, liturgi, musik gereja, karya sosial, pendampingan keluarga, dan evangelisasi. Mereka bekerja sama dengan para pastor dan religius dalam menjalankan misi Gereja.

Komunitas Basis Gerejawi (KBG) menjadi wadah utama untuk mengembangkan potensi dan talenta umat awam. Melalui KBG, mereka belajar memimpin, mengorganisir kegiatan, dan melayani sesama dengan lebih baik.

Partisipasi aktif umat awam dalam kehidupan Gereja menunjukkan kedewasaan iman dan tanggung jawab mereka sebagai anggota Tubuh Kristus. Mereka membuktikan bahwa Gereja bukan hanya milik klerus tetapi milik seluruh umat beriman.`,
    author: 'KomsosKAK',
    date: '22 Nov 2024',
  },
  {
    id: 12,
    image: '/assets/serba2.jpeg',
    title: 'Situs Ziarah Katolik di NTT',
    content: `NTT memiliki berbagai situs ziarah yang menjadi tempat doa dan refleksi spiritual bagi umat Katolik. Mulai dari Gua Maria di berbagai daerah, makam para misionaris, hingga tempat-tempat bersejarah perkembangan Gereja Katolik.

Situs-situs ini menjadi sarana penguatan iman dan tempat mencari inspirasi spiritual bagi para peziarah yang datang dari berbagai daerah. Setiap situs memiliki cerita dan makna spiritual tersendiri yang memperkaya pengalaman ziarah.

Gua Maria Lourdes di Larantuka merupakan salah satu situs ziarah paling terkenal di NTT. Tempat ini menjadi tujuan ziarah utama, terutama pada bulan Mei dan Oktober. Banyak umat yang mengalami pengalaman spiritual mendalam di tempat ini.

Makam para misionaris perintis juga menjadi tempat ziarah yang penting. Umat datang untuk mengenang jasa-jasa mereka dan memohon doa perantaraan dalam kehidupan sehari-hari.

Tradisi ziarah di NTT tidak hanya menjadi kegiatan religius tetapi juga sarana untuk memperkuat persaudaraan antar umat. Para peziarah sering melakukan perjalanan secara berkelompok, saling mendukung dalam doa dan refleksi spiritual.`,
    author: 'KomsosKAK',
    date: '18 Nov 2024',
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
      // Redirect ke halaman serba serbi jika ID tidak ditemukan
      navigate('/serba-serbi');
    }
  }, [id, navigate]);

  // Fungsi untuk membuat URL share
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = `/serba-serbi/${id}`;
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
    return <div className="loading-serba-container">Loading...</div>;
  }

  return (
    <div className="detail-serba-container">
      <div className="detail-serba-main">
        <h1 className="detail-serba-title">{article.title}</h1>
        
        <div className="detail-serba-meta">
          <div className="detail-serba-date">
            {article.date} | {article.time || '10:00 WIB'}
          </div>
          <div className="detail-serba-social">
            <a href={getWhatsAppShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-serba-social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href={getFacebookShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-serba-social-icon facebook">
              <FaFacebook />
            </a>
            <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-serba-social-icon twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="detail-serba-content">
          <div className="detail-serba-image">
            <img src={article.image} alt={article.title} />
          </div>
          
          {/* Khusus untuk artikel logo, tampilkan gambar logo */}
          {article.logoImage && (
            <div className="detail-serba-logo-section">
              <div className="detail-serba-logo-image">
                <img src={article.logoImage} alt="Logo Uskup Agung Kupang" />
              </div>
            </div>
          )}
          
          <div className="detail-serba-text">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-serba-sidebar">
        <h3 className="related-serba-title">Serba Serbi Lainnya</h3>
        <div className="related-serba">
          {relatedArticles.map((related) => (
            <Link to={`/serba-serbi/${related.id}`} key={related.id} className="related-serba-item">
              <div className="related-serba-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-serba-content">
                <h4>{related.title}</h4>
                <p className="related-serba-meta">
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

export default DetailSerba;