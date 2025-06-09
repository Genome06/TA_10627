import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './DetailTokoh.css';

const DetailTokoh = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const navigate = useNavigate();

  // Data artikel tokoh (sama dengan yang di Tokoh.jsx)
  const articlesData = [
    {
      id: 1,
      image: '/assets/Tokoh.jpeg',
      title: 'Santo Aloysius Gonzaga, Biarawan dan Pengaku Iman',
      content: `Santo Aloysius Gonzaga lahir di Castiglione delle Stiviere, Italia Utara pada tanggal 9 Maret 1568. Ia lahir sebagai putera tertua dari keluarga bangsawan yang kaya raya. Ayahnya, Ferrante Gonzaga, adalah seorang marquis yang memiliki pengaruh besar di istana.

Sejak kecil, Aloysius sudah menunjukkan tanda-tanda kesalehan yang luar biasa dan memiliki kerinduan yang mendalam untuk melayani Allah. Meskipun dibesarkan dalam kemewahan dan dipersiapkan untuk mengikuti jejak ayahnya sebagai pemimpin militer dan politik, hatinya tertuju pada hal-hal rohani.

Pada usia 12 tahun, Aloysius mengalami panggilan religius yang kuat setelah membaca biografi para santo. Ia mulai menjalankan praktik-praktik spiritual yang ketat, termasuk puasa, doa yang panjang, dan penolakan terhadap kemewahan duniawi.

Keputusan untuk meninggalkan warisan kebangsawanan dan bergabung dengan Serikat Yesus (Yesuit) pada tahun 1585 menuai tentangan keras dari keluarganya. Namun, Aloysius tetap teguh pada panggilannya dan memilih hidup dalam kemiskinan dan ketaatan.

Selama masa pendidikan di Roma, Aloysius dikenal karena kesederhanaan hidupnya, dedikasi pada studi teologi, dan pelayanan kepada orang-orang miskin dan sakit. Ia sering mengunjungi rumah sakit dan memberikan perawatan langsung kepada para pasien.

Ketika wabah pes melanda Roma pada tahun 1591, Aloysius dengan sukarela merawat para korban di rumah sakit. Meskipun berisiko tinggi, ia tidak pernah ragu untuk melayani mereka yang menderita, bahkan mencuci kaki para pasien dan memberikan makanan dengan tangannya sendiri.

Sayangnya, pada tanggal 21 Juni 1591, Santo Aloysius tertular wabah pes saat merawat para pasien. Ia meninggal pada usia 23 tahun, tetapi sebelum meninggal, ia mengalami visi mistik tentang Kristus yang menyambutnya di surga.

Santo Aloysius dikanonisasi oleh Paus Benediktus XIII pada tahun 1726 dan ditetapkan sebagai pelindung pemuda Katolik. Hidupnya menjadi teladan tentang pengorbanan diri, kemurnian, dan dedikasi total kepada Allah dan sesama yang membutuhkan.`,
      author: 'KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/tokoh2.jpeg',
      title: 'Santa Teresa dari Avila, Mistikus dan Penulis Spiritual',
      content: `Santa Teresa dari Avila (1515-1582) adalah salah satu santo terbesar dalam sejarah Gereja Katolik. Ia adalah mistikus, reformator Karmel, dan Pujangga Gereja. Teresa dikenal karena pengalaman mistiknya yang mendalam dan tulisan-tulisannya tentang doa dan kehidupan spiritual yang sangat berpengaruh.

Lahir dengan nama Teresa Sánchez de Cepeda y Ahumada di Avila, Spanyol, ia berasal dari keluarga bangsawan yang taat beragama. Sejak kecil, Teresa sudah menunjukkan minat yang besar terhadap cerita-cerita tentang para santo dan martir.

Pada usia 20 tahun, Teresa masuk Biara Karmel di Avila meskipun menghadapi tentangan dari ayahnya. Tahun-tahun awal kehidupan religiusnya ditandai dengan perjuangan spiritual yang intens, termasuk penyakit yang berkepanjangan dan kekeringan rohani.

Pada usia 40 tahun, Teresa mengalami apa yang disebutnya "pertobatan kedua" - sebuah pengalaman mistik yang mengubah hidupnya secara radikal. Ia mulai mengalami visi-visi, ekstasi spiritual, dan komunikasi langsung dengan Kristus yang menuntunnya pada pemahaman yang lebih dalam tentang kehidupan spiritual.

Pengalaman mistiknya meliputi visi tentang neraka, pertemuan dengan Kristus yang bangkit, dan fenomena spiritual lainnya seperti levitasi dan transverberation (panah emas yang menembus hatinya). Meskipun menghadapi kecurigaan dari beberapa pihak, Teresa tetap setia pada pengalaman spiritualnya.

Sebagai reformator, Teresa mendirikan biara-biara Karmel baru dengan aturan yang lebih ketat, menekankan kembali pada kehidupan kontemplasi, kemiskinan yang sesungguhnya, dan doa yang mendalam. Reformasinya menciptakan cabang baru Ordo Karmel yang dikenal sebagai Karmel Tak Berkasut.

Karya-karya tulis Teresa, termasuk "Interior Castle," "The Way of Perfection," dan otobiografinya, menjadi klasik literatur spiritual. Tulisannya memberikan panduan praktis tentang tahap-tahap doa mental dan perjalanan jiwa menuju persatuan dengan Allah.

Teresa wafat pada tanggal 4 Oktober 1582 di Alba de Tormes. Ia dikanonisasi pada tahun 1622 dan dinyatakan sebagai Pujangga Gereja pada tahun 1970, menjadi wanita pertama yang menerima gelar tersebut.`,
      author: 'KomsosKAK',
      date: '20 Des 2024',
    },
    {
      id: 3,
      image: '/assets/tokoh3.jpeg',
      title: 'Santo Fransiskus dari Assisi, Bapa Kaum Miskin',
      content: `Santo Fransiskus dari Assisi (1181-1226) adalah salah satu santo yang paling dicintai dalam sejarah Gereja. Lahir dari keluarga pedagang kaya, ia meninggalkan kehidupan mewah untuk mengikuti jejak Kristus dalam kemiskinan dan pelayanan kepada kaum papa. Ia pendiri Ordo Fransiskan.

Giovanni di Pietro di Bernardone, demikian nama aslinya, lahir di Assisi dari keluarga pedagang tekstil yang sangat kaya. Masa mudanya dihabiskan dalam kemewahan, pesta-pesta, dan ambisi untuk menjadi ksatria yang terhormat.

Titik balik hidupnya terjadi setelah pengalaman sebagai tawanan perang dan penyakit yang berkepanjangan. Dalam periode pemulihan ini, Fransiskus mulai merasakan panggilan spiritual yang kuat dan mengalami visi-visi yang mengubah pandangan hidupnya.

Momen dramatis terjadi ketika ia berdoa di hadapan salib San Damiano dan mendengar suara Kristus yang berkata: "Pergilah, perbaiki gereja-Ku yang sedang runtuh." Awalnya ia mengartikannya secara literal dengan memperbaiki gereja-gereja yang rusak, tetapi kemudian memahami panggilan yang lebih luas untuk mereformasi Gereja.

Keputusannya untuk meninggalkan kekayaan dan hidup dalam kemiskinan radikal menyebabkan konflik dengan ayahnya. Dalam sebuah adegan yang terkenal, Fransiskus melepaskan pakaiannya di hadapan uskup dan menyatakan bahwa ia hanya memiliki "Bapa di surga."

Fransiskus mengembangkan spiritualitas yang berpusat pada imitatio Christi (meniru Kristus), terutama dalam kemiskinan, kerendahan hati, dan kasih kepada semua makhluk ciptaan. Ia memilih hidup sebagai "saudara kecil" (fratres minores) dan melayani kaum miskin, sakit, dan terbuang.

Pada tahun 1209, ia mendirikan ordo religius yang kemudian dikenal sebagai Ordo Fransiskan Minor. Aturan hidupnya yang sederhana menekankan kemiskinan evangelis, ketaatan, dan kemurnian hati. Ordo ini berkembang pesat dan menyebar ke seluruh Eropa.

Fransiskus juga dikenal karena cintanya yang mendalam terhadap alam dan semua makhluk ciptaan. "Kidung Surya" yang ditulisnya merupakan salah satu karya sastra religius tertua dalam bahasa Italia dan mengekspresikan visi kosmis tentang persaudaraan universal.

Pada tahun 1224, dua tahun sebelum kematiannya, Fransiskus menerima stigmata - luka-luka Kristus di tangannya, kakinya, dan lambungnya. Ia wafat pada tanggal 3 Oktober 1226 dan dikanonisasi hanya dua tahun kemudian oleh Paus Gregorius IX.`,
      author: 'KomsosKAK',
      date: '18 Des 2024',
    },
    {
      id: 4,
      image: '/assets/tokoh4.jpg',
      title: 'Santo Thomas Aquinas, Pujangga Gereja',
      content: `Santo Thomas Aquinas (1225-1274) adalah salah satu teolog dan filsuf terbesar dalam sejarah Gereja Katolik. Dijuluki "Pujangga Angelik", ia berhasil memadukan filsafat Aristoteles dengan ajaran kristiani, menciptakan sintesis pemikiran yang sangat berpengaruh hingga kini.

Lahir di kastil Roccasecca di dekat Aquino, Italia, Thomas berasal dari keluarga bangsawan yang berpengaruh. Keluarganya berharap ia akan menjadi abbot yang kaya dan berpengaruh, tetapi Thomas memilih jalan yang berbeda.

Pendidikan awalnya dimulai di biara Monte Cassino dan dilanjutkan di Universitas Naples. Di sinilah ia pertama kali berkenalan dengan karya-karya Aristoteles dan tertarik pada Ordo Dominican yang baru didirikan.

Keputusannya untuk bergabung dengan Ordo Dominican pada tahun 1244 mengundang kemarahan besar dari keluarganya. Saudara-saudaranya bahkan menculiknya dan menahannya di kastil keluarga selama setahun untuk mencegah niatnya, tetapi Thomas tetap teguh pada pilihannya.

Setelah dibebaskan, Thomas melanjutkan studinya di Paris dan Cologne di bawah bimbingan Santo Albert Magnus, yang mengenalkannya pada karya-karya Aristoteles yang baru diterjemahkan ke dalam bahasa Latin.

Karya terbesar Thomas adalah "Summa Theologica," sebuah sintesis sistematis dari teologi Kristen yang mencoba menjawab semua pertanyaan penting tentang Allah, ciptaan, moralitas, dan keselamatan. Karya ini tetap menjadi landasan fundamental teologi Katolik.

Metode Thomas yang dikenal sebagai "scholasticism" menggunakan rasio untuk memahami dan menjelaskan kebenaran iman. Ia percaya bahwa tidak ada kontradiksi antara kebenaran yang diperoleh melalui akal dan wahyu, karena keduanya berasal dari Allah yang sama.

Kontribusi filosofisnya meliputi pembuktian rasional tentang eksistensi Allah (Lima Jalan), teori tentang hubungan jiwa dan tubuh, dan pengembangan teologi moral yang komprehensif.

Thomas wafat dalam perjalanan ke Konsili Lyon pada tahun 1274. Ia dikanonisasi pada tahun 1323 dan dinyatakan sebagai Pujangga Gereja pada tahun 1567. Paus Leo XIII menetapkan Thomisme sebagai filosofi resmi Gereja Katolik.`,
      author: 'KomsosKAK',
      date: '15 Des 2024',
    },
    {
      id: 5,
      image: '/assets/Tokoh.jpeg',
      title: 'Santa Theresia dari Kalkutta, Malaikat Kaum Miskin',
      content: `Santa Theresia dari Kalkutta (1910-1997), lahir dengan nama Agnes Gonxha Bojaxhiu, adalah seorang religius Katolik yang mengabdikan hidupnya untuk melayani kaum termiskin di India. Ia dikenal karena karyanya di antara kaum miskin, sakit, yatim piatu, dan orang-orang yang sekarat di Kalkutta.

Agnes lahir di Skopje, Macedonia (sekarang bagian dari Albania), dari keluarga pedagang Albania yang taat beragama. Sejak kecil, ia sudah tertarik pada misi dan kehidupan para santo, terutama santo-santa yang berkarya di India.

Pada usia 18 tahun, Agnes bergabung dengan Sisters of Loreto di Irlandia dengan tujuan untuk diutus ke India. Setelah menyelesaikan novisiatnya, ia dikirim ke Kalkutta pada tahun 1929 dan mengambil nama religius Teresa dari Lisieux.

Selama 17 tahun, Teresa mengajar di Sekolah Santa Maria di Entally, Kalkutta. Meskipun menikmati pekerjaannya sebagai guru, ia semakin tergerak oleh kemiskinan yang ekstrem yang dilihatnya di luar dinding sekolah.

Pada tanggal 10 September 1946, dalam perjalanan kereta api ke Darjeeling, Teresa mengalami apa yang disebutnya "panggilan dalam panggilan." Ia mendengar suara Kristus yang memintanya untuk meninggalkan biara dan bekerja di antara "yang termiskin dari yang miskin."

Setelah mendapat izin dari Vatikan, Teresa meninggalkan Sisters of Loreto pada tahun 1948 dan memulai karyanya di kumuh-kumuh Kalkutta. Ia memulai dengan sekolah terbuka untuk anak-anak miskin dan berangsur-angsur mengembangkan berbagai layanan sosial.

Pada tahun 1950, Teresa mendirikan Missionaries of Charity dengan misi khusus untuk melayani "yang termiskin dari yang miskin." Kongregasi ini berkembang pesat dan menyebar ke berbagai negara di seluruh dunia.

Karya Teresa meliputi rumah untuk orang-orang sekarat (Nirmal Hriday), panti asuhan, sekolah untuk anak-anak miskin, klinik untuk penderita kusta, dan shelter untuk tunawisma. Ia percaya bahwa setiap orang, tidak peduli seberapa miskin atau sakit, memiliki martabat yang harus dihormati.

Teresa menerima Hadiah Nobel Perdamaian pada tahun 1979 dan menggunakan uang hadiah tersebut untuk membangun lebih banyak rumah bagi orang miskin. Ia wafat pada tanggal 5 September 1997 dan dikanonisasi oleh Paus Fransiskus pada tahun 2016.`,
      author: 'KomsosKAK',
      date: '12 Des 2024',
    },
    {
      id: 6,
      image: '/assets/tokoh2.jpeg',
      title: 'Santo Yohanes Paulus II, Paus Perjalanan',
      content: `Santo Yohanes Paulus II (1920-2005), lahir Karol Józef Wojtyła, adalah Paus ke-264 yang memimpin Gereja Katolik dari tahun 1978 hingga 2005. Ia dikenal sebagai "Paus Perjalanan" karena melakukan 104 perjalanan apostolik ke luar negeri, lebih banyak dari semua paus sebelumnya.

Karol lahir di Wadowice, Polandia, dari keluarga kelas menengah yang sangat religius. Masa mudanya diwarnai oleh tragedi-tragedi pribadi: kematian ibunya saat ia berusia 8 tahun, kakaknya saat ia berusia 12 tahun, dan ayahnya saat ia berusia 20 tahun.

Selama pendudukan Nazi di Polandia, Karol bekerja di tambang batu dan pabrik kimia sambil secara diam-diam melanjutkan studi untuk menjadi imam. Ia juga terlibat dalam teater bawah tanah yang melawan propaganda Nazi.

Setelah ditahbiskan sebagai imam pada tahun 1946, Karol melanjutkan studi doktoralnya di Roma dan kemudian kembali ke Polandia. Ia menjadi profesor filsafat dan etika, menulis berbagai karya akademik, dan aktif dalam pelayanan pastoral.

Ditahbiskan sebagai uskup pada tahun 1958 dan kemudian menjadi kardinal pada tahun 1967, Karol memainkan peran penting dalam Konsili Vatikan II. Ia berkontribusi khususnya dalam dokumen tentang kebebasan beragama dan Gereja di dunia modern.

Terpilih sebagai Paus pada tahun 1978, Yohanes Paulus II menjadi Paus non-Italia pertama setelah 455 tahun dan Paus termuda dalam sejarah modern. Kepemimpinannya ditandai oleh upaya untuk menjangkau seluruh dunia dan dialog dengan berbagai budaya dan agama.

Perannya dalam runtuhnya komunisme di Eropa Timur sangat signifikan. Kunjungan apostoliknya ke Polandia pada tahun 1979 memicu gerakan Solidaritas yang akhirnya berkontribusi pada jatuhnya Tembok Berlin dan berakhirnya Perang Dingin.

Yohanes Paulus II adalah Paus yang paling banyak melakukan beatifikasi dan kanonisasi dalam sejarah, mengangkat 1,340 beato dan 483 santo. Ia juga menerbitkan 14 ensiklik yang berpengaruh tentang berbagai topik sosial dan moral.

Pada tanggal 13 Mei 1981, ia menjadi korban percobaan pembunuhan di Lapangan Santo Petrus tetapi selamat dan kemudian memaafkan penyerangnya. Ia wafat pada tanggal 2 April 2005 dan dikanonisasi pada tahun 2014.`,
      author: 'KomsosKAK',
      date: '08 Des 2024',
    },
    {
      id: 7,
      image: '/assets/tokoh3.jpeg',
      title: 'Santo Ignatius dari Loyola, Pendiri Yesuit',
      content: `Santo Ignatius dari Loyola (1491-1556) adalah pendiri Serikat Yesus (Yesuit). Lahir sebagai seorang bangsawan Basque, hidupnya berubah total setelah mengalami pertobatan spiritual. Ia mengembangkan "Latihan-latihan Rohani" yang menjadi metode spiritual berpengaruh dalam tradisi Katolik.

Íñigo López de Loyola lahir di kastil keluarganya di Loyola, Spanyol Utara. Sebagai anak bungsu dari keluarga bangsawan, ia dibesarkan dengan impian menjadi ksatria yang terhormat dan mencari kemuliaan dalam pertempuran.

Karir militernya berakhir secara dramatis pada tahun 1521 ketika kakinya hancur oleh meriam Prancis dalam pertahanan Pamplona. Selama masa pemulihan yang panjang di kastil keluarganya, Ignatius mengalami transformasi spiritual yang mendalam.

Karena tidak ada buku tentang ksatria di kastil, Ignatius membaca "Kehidupan Kristus" oleh Ludolph dari Saxony dan "Legenda Aurea" tentang kehidupan para santo. Bacaan ini memicu refleksi mendalam tentang makna hidup dan memulai proses pertobatannya.

Setelah sembuh, Ignatius melakukan ziarah ke Montserrat di mana ia menggantung pedang dan belati ksatrianya di hadapan patung Maria, simbolically mengakhiri kehidupan lamanya. Ia kemudian menghabiskan hampir setahun di gua dekat Manresa dalam doa dan penyilihan.

Di Manresa, Ignatius mengalami visi-visi mistik dan pencerahan spiritual yang membentuk dasar "Latihan-latihan Rohani"nya. Karya ini menjadi manual untuk retreat spiritual yang masih digunakan secara luas hingga kini.

Setelah ziarah ke Tanah Suci dan studi di berbagai universitas Eropa, Ignatius berkumpul dengan enam teman di Paris pada tahun 1534. Mereka mengambil kaul untuk mendedikasikan hidup mereka bagi Allah dan pelayanan kepada jiwa-jiwa.

Pada tahun 1540, Paus Paulus III secara resmi mengakui Serikat Yesus. Ordo ini mengembangkan pendekatan misionaris yang inovatif, menekankan pendidikan, misi luar negeri, dan pelayanan langsung kepada Paus.

Ignatius menjadi Superior Jenderal pertama Yesuit dan menghabiskan tahun-tahun terakhirnya di Roma, mengembangkan konstitusi ordo dan mengawasi pertumbuhannya yang pesat. Ia wafat pada tahun 1556 dan dikanonisasi pada tahun 1622.`,
      author: 'KomsosKAK',
      date: '05 Des 2024',
    },
    {
      id: 8,
      image: '/assets/tokoh4.jpg',
      title: 'Santa Monica, Teladan Ibu Kristiani',
      content: `Santa Monica (331-387) adalah teladan ibu Kristiani yang dikenal karena ketekunannya dalam berdoa untuk pertobatan putranya, Santo Agustinus. Selama bertahun-tahun, ia tidak pernah berhenti berdoa dan menangis untuk putranya yang hidup dalam dosa dan kesesatan.

Monica lahir di Tagaste, Afrika Utara (sekarang Aljazair), dari keluarga Kristen yang taat. Ia dibesarkan dalam iman Katolik dan sejak muda menunjukkan dedikasi yang kuat terhadap kehidupan spiritual dan doa.

Menikah dengan Patricius, seorang pagan yang bertemperamen keras dan sering marah, Monica menghadapi tantangan besar dalam pernikahannya. Melalui kesabaran, doa, dan teladan hidupnya, ia akhirnya berhasil membawa suaminya kepada iman Kristen menjelang kematiannya.

Tantangan terbesar Monica adalah putranya, Agustinus, yang meskipun cerdas dan berbakat, memilih jalan hidup yang jauh dari nilai-nilai Kristen. Agustinus hidup dalam dosa, bergabung dengan sekte Manikheisme, dan menolak ajaran agama ibunya.

Selama 17 tahun, Monica tidak pernah berhenti mendoakan pertobatan Agustinus. Ia sering menangis dan berpuasa, memohon kepada Allah untuk menyentuh hati putranya. Bahkan ketika Agustinus pindah ke Roma dan kemudian Milan tanpa sepengetahuannya, Monica mengikutinya.

Di Milan, Monica bertemu dengan Santo Ambrosius, uskup yang bijaksana dan berpengaruh. Melalui khotbah-khotbah Ambrosius, Agustinus mulai tertarik kembali pada iman Kristen dan akhirnya mengalami pertobatan yang dramatis.

Ketika Agustinus akhirnya dibaptis oleh Santo Ambrosius pada tahun 387, Monica merasa doanya telah dijawab. Ia menyatakan bahwa sekarang ia bisa mati dengan tenang karena telah melihat putranya kembali kepada Allah.

Monica wafat di Ostia dalam perjalanan kembali ke Afrika, hanya beberapa bulan setelah baptisan Agustinus. Kata-kata terakhirnya mengungkapkan bahwa ia sudah tidak peduli di mana ia dimakamkan karena tidak ada tempat yang jauh dari Allah.

Santa Monica dikanonisasi dan menjadi pelindung para ibu, khususnya mereka yang memiliki anak-anak yang menjauh dari iman. Hidupnya menjadi inspirasi bagi orang tua yang berjuang untuk keselamatan anak-anak mereka melalui doa yang tekun.`,
      author: 'KomsosKAK',
      date: '02 Des 2024',
    },
    {
      id: 9,
      image: '/assets/Tokoh.jpeg',
      title: 'Santo Agustinus, Pujangga Gereja dari Afrika',
      content: `Santo Agustinus (354-430) adalah salah satu Bapa Gereja yang paling berpengaruh. Lahir di Tagaste, Afrika Utara, ia mengalami perjalanan spiritual yang dramatis dari kehidupan penuh dosa menuju pertobatan yang mendalam. Tulisan-tulisannya sangat mempengaruhi teologi Kristen.

Aurelius Augustinus lahir dari ayah pagan, Patricius, dan ibu Kristen yang sangat saleh, Santa Monica. Masa mudanya ditandai oleh kecerdasan yang luar biasa tetapi juga kehidupan moral yang bermasalah.

Setelah menyelesaikan pendidikan dasar di Tagaste dan Madauros, Agustinus melanjutkan studi retorika di Carthage. Di kota yang penuh godaan ini, ia hidup dalam kemewahan dan dosa, bahkan memiliki selir yang melahirkan anaknya, Adeodatus.

Pada usia 19 tahun, setelah membaca "Hortensius" karya Cicero, Agustinus mulai tertarik pada filsafat. Namun, pencarian intelektualnya membawanya pada sekte Manikheisme, sebuah agama dualistik yang mengajarkan bahwa ada dua prinsip kekal: terang dan gelap.

Selama sembilan tahun, Agustinus menjadi penganut Manikheisme yang antusias. Ia mengajar retorika di Carthage, kemudian pindah ke Roma, dan akhirnya menjadi profesor retorika imperial di Milan.

Di Milan, Agustinus bertemu dengan Santo Ambrosius, uskup yang khotbahnya mengungkapkan kedalaman intelektual iman Kristen yang tidak pernah ia sadari sebelumnya. Perlahan-lahan, pengaruh Ambrosius mulai mengikis keyakinan Manikheisme-nya.

Krisis spiritual Agustinus mencapai puncaknya dalam sebuah taman di Milan pada tahun 386. Dalam keadaan jiwa yang bergolak, ia mendengar suara anak kecil yang berkata "Tolle lege" (ambil dan baca). Ia membuka Kitab Suci secara acak dan membaca Roma 13:13-14, yang membuatnya mengalami pertobatan mendadak.

Setelah dibaptis oleh Santo Ambrosius pada tahun 387, Agustinus kembali ke Afrika dan mendirikan komunitas monastik. Ia kemudian ditahbiskan sebagai imam pada tahun 391 dan menjadi uskup Hippo pada tahun 396.

Karya-karya teologis Agustinus sangat berpengaruh, termasuk "Confessions" (otobiografi spiritual), "City of God" (tentang hubungan antara kerajaan duniawi dan kerajaan Allah), dan berbagai treatise tentang Trinitas, rahmat, dan predestinasi.

Agustinus wafat pada tanggal 28 Agustus 430 saat Hippo dikepung oleh suku Vandal. Ia dinyatakan sebagai Pujangga Gereja dan mempengaruhi pemikiran Kristen selama berabad-abad.`,
      author: 'KomsosKAK',
      date: '28 Nov 2024',
    },
    {
      id: 10,
      image: '/assets/tokoh2.jpeg',
      title: 'Santo Petrus, Batu Karang Gereja',
      content: `Santo Petrus adalah salah satu dari dua belas rasul Yesus dan menjadi pemimpin pertama Gereja Katolik. Nama aslinya Simon, tetapi Yesus memberinya nama Petrus yang berarti "batu karang". Meskipun pernah menyangkal Yesus tiga kali, ia kemudian menjadi saksi yang berani.

Simon lahir di Betsaida, Galilea, dan bekerja sebagai nelayan bersama saudaranya Andreas di Laut Galilea. Kehidupannya berubah drastis ketika Andreas membawanya kepada Yesus, yang langsung memberikannya nama Kefas (bahasa Aram) atau Petrus (bahasa Yunani), keduanya berarti "batu."

Dalam Injil, Petrus digambarkan sebagai sosok yang impulsif, berapi-api, dan sering bertindak tanpa berpikir panjang. Ia adalah orang pertama yang mengakui Yesus sebagai "Kristus, Anak Allah yang hidup," yang membuatnya menerima pujian khusus dari Yesus.

Petrus termasuk dalam lingkaran dalam rasul bersama Yakobus dan Yohanes, menyaksikan peristiwa-peristiwa penting seperti Transfigurasi, kebangkitan putri Yairus, dan doa Yesus di Getsemani.

Momen paling memalukan dalam hidup Petrus terjadi ketika ia menyangkal Yesus tiga kali pada malam penangkapan-Nya. Meskipun sebelumnya dengan berani menyatakan akan mengikuti Yesus sampai mati, ketika menghadapi kenyataan, ia menyangkal bahkan mengenal Yesus.

Setelah kebangkitan, Yesus secara khusus memulihkan Petrus dengan bertanya tiga kali "Apakah engkau mengasihi Aku?" dan memberikan tugas pastoral "Gembalakanlah domba-domba-Ku." Ini menunjukkan pengampunan dan pemulihan yang lengkap.

Pada hari Pentakosta, Petrus tampil sebagai juru bicara para rasul, memberikan khotbah pertama yang menghasilkan pertobatan 3,000 orang. Dari seorang yang penakut menjadi pemimpin yang berani dan penuh kuasa Roh Kudus.

Petrus memimpin Gereja perdana di Yerusalem dan memainkan peran kunci dalam membuka pintu bagi bangsa-bangsa non-Yahudi melalui baptisan Kornelius. Ia juga hadir dalam Konsili Yerusalem yang memutuskan syarat-syarat penerimaan bangsa kafir.

Tradisi menyatakan bahwa Petrus akhirnya pergi ke Roma dan menjadi uskup pertama di sana, meletakkan dasar kepausan. Ia menderita martir di bawah Kaisar Nero sekitar tahun 64 M, disalibkan terbalik karena merasa tidak layak mati dengan cara yang sama seperti Tuhannya.

Santo Petrus dihormati sebagai "Pangeran Para Rasul" dan "Batu Karang Gereja." Makamnya di bawah Basilika Santo Petrus di Vatikan menjadi tempat ziarah yang penting bagi umat Katolik di seluruh dunia.`,
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 11,
      image: '/assets/tokoh3.jpeg',
      title: 'Santo Paulus, Rasul Bangsa-bangsa',
      content: `Santo Paulus, sebelumnya bernama Saulus, adalah salah satu tokoh paling penting dalam sejarah Kekristenan. Awalnya seorang penganiaya Kristen, ia mengalami pertobatan dramatis dalam perjalanan ke Damaskus. Setelah itu, ia menjadi misionaris yang gigih menyebarkan Injil.

Saulus lahir di Tarsus, Kilikia (sekarang Turki), sebagai warga negara Romawi dari keluarga Yahudi yang taat. Ia dibesarkan dalam tradisi Farisi yang ketat dan belajar di bawah bimbingan Gamaliel, salah satu rabbi paling terpelajar pada zamannya.

Sebagai seorang Farisi yang fanatik, Saulus menganggap gerakan Kristen sebagai ancaman terhadap agama dan tradisi Yahudi. Ia aktif menganiaya orang-orang Kristen, hadir saat penrajaman Stefanus, dan memperoleh surat kuasa untuk menangkap orang-orang Kristen di Damaskus.

Pertobatan Saulus terjadi secara dramatis di jalan menuju Damaskus sekitar tahun 34 M. Ia melihat cahaya terang dari surga dan mendengar suara Yesus yang bertanya, "Saulus, Saulus, mengapa engkau menganiaya Aku?" Pengalaman ini membutakannya selama tiga hari.

Setelah penglihatan dipulihkan oleh Ananias di Damaskus, Saulus dibaptis dan namanya berubah menjadi Paulus. Transformasinya begitu radikal: dari penganiaya menjadi penginjil yang paling bersemangat.

Paulus menghabiskan tiga tahun di Arabia untuk refleksi dan persiapan sebelum memulai pelayanannya. Ia kemudian melakukan tiga perjalanan misionaris besar yang membawa Injil ke Asia Kecil, Yunani, dan berbagai wilayah Kekaisaran Romawi.

Kontribusi teologis Paulus sangat besar melalui surat-suratnya yang menjadi bagian Perjanjian Baru. Ia mengembangkan doktrin tentang justifikasi melalui iman, tubuh Kristus sebagai Gereja, dan universalitas keselamatan.

Paulus menghadapi berbagai penderitaan dalam pelayanannya: dipenjara, dicambuk, dirajam, mengalami kapal karam, dan berbagai bahaya lainnya. Namun, ia tidak pernah menyerah dalam misi pemberitaan Injil.

Perannya dalam membuka Kekristenan bagi bangsa-bangsa non-Yahudi sangat crucial. Ia berjuang melawan kelompok Judaizers yang ingin memaksakan hukum Yahudi kepada orang-orang kafir yang masuk Kristen.

Paulus akhirnya ditangkap di Yerusalem dan dibawa ke Roma sebagai tawanan. Tradisi menyatakan bahwa ia dipenggal di bawah Kaisar Nero sekitar tahun 67 M. Ia dihormati sebagai "Rasul Bangsa-bangsa" dan co-patron Roma bersama Santo Petrus.`,
      author: 'KomsosKAK',
      date: '22 Nov 2024',
    },
    {
      id: 12,
      image: '/assets/tokoh4.jpg',
      title: 'Santa Maria Goretti, Martir Kemurnian',
      content: `Santa Maria Goretti (1890-1902) adalah seorang gadis Italia yang menjadi martir pada usia 11 tahun. Ia dibunuh ketika menolak godaan seksual dari tetangganya. Sebelum meninggal, ia memaafkan pembunuhnya. Maria Goretti dikanonisasi sebagai santa dan menjadi pelindung remaja.

Maria lahir di Corinaldo, dekat Ancona, Italia, dalam keluarga petani miskin. Ayahnya, Luigi Goretti, adalah seorang petani yang bekerja keras untuk menghidupi keluarga, sementara ibunya, Assunta, adalah wanita yang sangat religius.

Ketika Maria berusia 6 tahun, keluarganya pindah ke daerah rawa Pontine dekat Roma untuk mencari kehidupan yang lebih baik. Mereka berbagi rumah dengan keluarga lain, termasuk Alessandro Serenelli yang berusia 18 tahun.

Ayah Maria meninggal karena malaria pada tahun 1900, meninggalkan keluarga dalam kemiskinan yang lebih dalam. Sebagai anak tertua, Maria harus membantu ibunya mengurus adik-adiknya dan pekerjaan rumah tangga sambil ibunya bekerja di ladang.

Maria dikenal sebagai anak yang sangat religius, rajin berdoa, dan memiliki kerinduan besar untuk menerima Komuni Pertama. Meskipun belum bisa membaca, ia menghafal doa-doa dan ajaran katekismus melalui pendengaran.

Alessandro Serenelli semakin terobsesi dengan Maria dan berulang kali mencoba merayunya. Maria selalu menolak dengan tegas dan mengancam akan melaporkannya kepada ibunya. Ia juga sering mengingatkan Alessandro tentang dosa dan neraka.

Pada tanggal 5 Juli 1902, ketika Maria sedang menjahit di rumah sendirian (ibunya dan yang lain sedang bekerja), Alessandro mencoba memaksanya melakukan perbuatan tidak senonoh. Ketika Maria menolak dan berteriak, Alessandro menikamnya 14 kali dengan pisau dapur.

Maria dibawa ke rumah sakit di Nettuno tetapi luka-lukanya terlalu parah. Sebelum meninggal 24 jam kemudian, ia memaafkan Alessandro dan menyatakan harapan agar ia dapat masuk surga bersama-sama dengannya.

Alessandro ditangkap dan dijatuhi hukuman 30 tahun penjara. Selama beberapa tahun pertama, ia tetap keras hati, tetapi kemudian mengalami pertobatan setelah bermimpi melihat Maria yang memberikan bunga kepadanya.

Setelah dibebaskan pada tahun 1929, Alessandro meminta maaf kepada Assunta (ibu Maria) dan menjadi seorang Katolik yang taat. Ia bahkan hadir dalam upacara beatifikasi Maria pada tahun 1947.

Maria Goretti dikanonisasi oleh Paus Pius XII pada tahun 1950 di hadapan ibunya yang masih hidup dan Alessandro. Ia menjadi santa termuda dalam sejarah Gereja dan pelindung remaja, korban perkosaan, dan kemurnian.`,
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
      // Redirect ke halaman tokoh jika ID tidak ditemukan
      navigate('/tokoh');
    }
  }, [id, navigate]);

  // Fungsi untuk membuat URL share
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = `/tokoh/${id}`;
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
    return <div className="loading-tokoh-container">Loading...</div>;
  }

  return (
    <div className="detail-tokoh-container">
      <div className="detail-tokoh-main">
        <h1 className="detail-tokoh-title">{article.title}</h1>
        
        <div className="detail-tokoh-meta">
          <div className="detail-tokoh-date">
            {article.date} | {article.time || '10:00 WIB'}
          </div>
          <div className="detail-tokoh-social">
            <a href={getWhatsAppShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-tokoh-social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href={getFacebookShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-tokoh-social-icon facebook">
              <FaFacebook />
            </a>
            <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-tokoh-social-icon twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="detail-tokoh-content">
          <div className="detail-tokoh-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="detail-tokoh-text">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-tokoh-sidebar">
        <h3 className="related-tokoh-title">Tokoh Lainnya</h3>
        <div className="related-tokoh">
          {relatedArticles.map((related) => (
            <Link to={`/tokoh/${related.id}`} key={related.id} className="related-tokoh-item">
              <div className="related-tokoh-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-tokoh-content">
                <h4>{related.title}</h4>
                <p className="related-tokoh-meta">
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

export default DetailTokoh;