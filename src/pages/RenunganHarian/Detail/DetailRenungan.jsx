import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './DetailRenungan.css';

const DetailRenungan = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const navigate = useNavigate();

  // Data artikel renungan harian (sama dengan yang di RenunganHarian.jsx)
  const articlesData = [
    {
      id: 1,
      image: '/assets/RenunganHarian.jpg',
      title: 'Selasa, 24 Desember 2024 - Bersiaplah Menyambut Kelahiran Sang Juruselamat',
      content: `Hari Biasa Pekan Adven IV — Yesaya 7:10-14; Mzm 24:1-2.3-4.5-6; Roma 1:1-7; Matius 1:18-24

Injil hari ini mengisahkan tentang kelahiran Yesus yang diberitakan oleh malaikat kepada Yosef. Dalam kebingungan dan keraguan, Yosef dipanggil untuk mempercayai rencana Allah yang melampaui pemahaman manusia. Maria, yang mengandung oleh kuasa Roh Kudus, menjadi tanda kasih Allah yang tak terbatas kepada umat manusia.

Peristiwa inkarnasi adalah puncak dari rencana keselamatan Allah. Melalui Maria, Allah menjadi manusia untuk menyelamatkan kita dari dosa dan kematian. Kelahiran Yesus bukanlah kebetulan, melainkan pemenuhan janji Allah yang telah diberitakan oleh para nabi sejak dahulu kala.

Yosef, sebagai ayah angkat Yesus, menunjukkan ketaatan yang luar biasa pada kehendak Allah. Meskipun awalnya bingung dan bermaksud menceraikan Maria secara diam-diam, ia akhirnya menerima penjelasan malaikat dan mengambil Maria sebagai istrinya. Keputusan Yosef ini menunjukkan iman yang teguh dan kepercayaan penuh pada rencana Allah.

Dalam persiapan menyambut Natal, kita diajak untuk meneladan iman Yosef dan Maria. Seperti mereka, kita dipanggil untuk membuka hati bagi karya Allah dalam hidup kita, meskipun tidak selalu kita pahami. Kelahiran Kristus mengundang kita untuk lahir baru secara rohani dan hidup dalam kasih.

Bacaan hari ini juga mengingatkan kita tentang nama "Imanuel" yang berarti "Allah menyertai kita." Dalam semua pergumulan dan tantangan hidup, kita tidak pernah sendirian. Allah hadir dan menyertai kita melalui Kristus yang telah menjadi manusia seperti kita.

Mari kita sambut kelahiran Sang Juruselamat dengan hati yang terbuka dan penuh syukur. Biarlah Natal tahun ini menjadi momen untuk memperbaharui iman kita dan menyerahkan hidup sepenuhnya kepada Allah yang mengasihi kita dengan kasih yang kekal.`,
      author: 'KomsosKAK',
      date: '24 Des 2024',
    },
    {
      id: 2,
      image: '/assets/RenunganHarian2.jpg',
      title: 'Senin, 23 Desember 2024 - Nyanyian Pujian Maria, Magnificat',
      content: `Hari Biasa Pekan Adven IV — Maleakhi 3:1-4.23-24; Mzm 25:4-5.8-9.10+14; Lukas 1:57-66

Dalam Injil hari ini, kita mendengar nyanyian pujian Maria, Magnificat, yang mengungkapkan kegembiraan dan rasa syukur atas karya Allah dalam hidupnya. Maria memuji Allah yang merendahkan yang tinggi dan meninggikan yang rendah. Magnificat mengajarkan kita untuk selalu bersyukur dan percaya pada kebaikan Allah.

Magnificat adalah doa syukur yang paling indah dalam tradisi Kristen. Melalui nyanyian ini, Maria mengungkapkan pengalaman spiritualnya yang mendalam setelah mengandung Yesus. Ia menyadari bahwa dirinya, seorang gadis sederhana dari Nazaret, telah dipilih Allah untuk menjadi Bunda Sang Juruselamat.

Dalam Magnificat, Maria memuji Allah yang "memandang kerendahan hamba-Nya." Ini menunjukkan bahwa Allah tidak memilih berdasarkan status sosial atau kekayaan, tetapi berdasarkan kerendahan hati dan kesediaan untuk melayani. Maria menjadi teladan bagi kita tentang bagaimana merespons panggilan Allah dengan kerendahan hati.

Nyanyian Maria juga mengungkapkan kepeduliannya terhadap keadilan sosial. Ia memuji Allah yang "menurunkan penguasa dari takhtanya dan meninggikan orang-orang yang rendah hati." Magnificat mengingatkan kita bahwa Allah berpihak pada orang miskin dan tertindas.

Dalam konteks Adven, Magnificat mengajarkan kita untuk mempersiapkan hati menyambut Kristus dengan kerendahan hati seperti Maria. Kita dipanggil untuk mengosongkan diri dari kesombongan dan membuka hati bagi karya Allah dalam hidup kita.

Maria juga mengingat janji Allah kepada Abraham dan keturunannya. Ini menunjukkan bahwa kelahiran Yesus adalah pemenuhan janji Allah yang telah diberikan sejak zaman dahulu. Allah setia pada janji-Nya dan tidak pernah melupakan umat-Nya.

Mari kita belajar dari Maria untuk selalu bersyukur atas berkat Allah dalam hidup kita. Biarlah hati kita dipenuhi dengan rasa syukur dan pujian kepada Allah yang telah mengasihi kita dengan kasih yang kekal.`,
      author: 'KomsosKAK',
      date: '23 Des 2024',
    },
    {
      id: 3,
      image: '/assets/RenunganHarian3.jpeg',
      title: 'Minggu, 22 Desember 2024 - Iman Maria dalam Pemberitaan Malaikat',
      content: `Minggu Adven IV — Mikha 5:1-4; Mzm 80:2-3.15-16.18-19; Ibrani 10:5-10; Lukas 1:39-45

Injil hari ini mengisahkan kunjungan Maria kepada Elisabet setelah Pemberitaan. Elisabet, dipenuhi Roh Kudus, mengucapkan berkat kepada Maria: "Terpujilah engkau karena engkau telah percaya!" Iman Maria menjadi teladan bagi kita semua untuk mempercayai janji-janji Allah meski tidak selalu kita pahami.

Pertemuan antara Maria dan Elisabet adalah momen yang sangat indah dalam sejarah keselamatan. Kedua wanita ini, yang sedang mengandung anak-anak yang akan berperan penting dalam rencana Allah, saling menguatkan iman mereka. Elisabet mengakui kebesaran Maria dan anak yang dikandungnya, sementara Maria merespons dengan nyanyian Magnificat.

Ketika Maria memasuki rumah Elisabet, Yohanes yang masih dalam kandungan "melompat kegirangan." Ini menunjukkan bahwa bahkan sejak dalam kandungan, Yohanes sudah mengenali kehadiran Sang Mesias. Peristiwa ini membuktikan bahwa Yesus adalah Tuhan sejak saat konsepsi-Nya.

Elisabet memuji Maria karena imannya: "Berbahagialah ia yang percaya, sebab apa yang dikatakan Tuhan kepadanya akan terlaksana." Iman Maria yang teguh menjadi kunci bagi terlaksananya rencana keselamatan Allah. Tanpa iman Maria, inkarnasi tidak akan terjadi.

Kunjungan Maria kepada Elisabet juga menunjukkan sikap peduli dan melayani. Meskipun sedang mengandung Sang Juruselamat, Maria tidak menjadi sombong atau merasa dirinya istimewa. Sebaliknya, ia pergi melayani sepupunya yang sudah tua dan sedang hamil.

Dalam masa Adven ini, kita diajak untuk meneladan iman Maria. Seperti Maria, kita dipanggil untuk percaya pada janji-janji Allah, meskipun kita tidak selalu memahami cara kerja-Nya. Iman adalah kepercayaan pada Allah yang melampaui pemahaman akal manusia.

Mari kita berdoa agar Allah memberikan kita iman yang teguh seperti Maria. Biarlah kita selalu siap mengucapkan "ya" pada kehendak Allah dan melayani sesama dengan kerendahan hati seperti yang telah ditunjukkan oleh Bunda Maria.`,
      author: 'KomsosKAK',
      date: '22 Des 2024',
    },
    {
      id: 4,
      image: '/assets/RenunganHarian4.jpg',
      title: 'Sabtu, 21 Desember 2024 - Kelahiran Yohanes Pembaptis',
      content: `Hari Biasa Pekan Adven IV — Kidung Agung 2:8-14; Mzm 33:2-3.11-12.20-21; Lukas 1:39-45

Injil hari ini menceritakan kelahiran Yohanes Pembaptis yang dinubuatkan malaikat Gabriel. Zakharia yang awalnya meragukan janji Allah akhirnya dibungkam sampai janjinya digenapi. Kelahiran Yohanes mengingatkan kita bahwa Allah selalu menepati janji-Nya, meski dalam cara yang tidak kita duga.

Zakharia adalah imam yang saleh dan Elisabet adalah perempuan yang benar di hadapan Allah. Namun, mereka tidak memiliki anak karena Elisabet mandul dan keduanya sudah lanjut usia. Dalam budaya pada zaman itu, tidak memiliki anak dianggap sebagai kutukan atau tanda ketidakberkahan Allah.

Ketika malaikat Gabriel menampakkan diri kepada Zakharia di Bait Suci dan memberitakan bahwa Elisabet akan mengandung, Zakharia meragukan janji tersebut. Keraguan Zakharia dapat dipahami secara manusiawi, mengingat usia mereka yang sudah lanjut. Namun, bagi Allah tidak ada yang mustahil.

Sebagai konsekuensi keraguannya, Zakharia dibungkam sampai kelahiran Yohanes. Masa kebisuan ini menjadi waktu refleksi dan penantian bagi Zakharia. Ketika Yohanes lahir dan ia diminta memberi nama, Zakharia menulis "Yohanes" sesuai perintah malaikat, dan seketika itu mulutnya terbuka kembali.

Kelahiran Yohanes membawa sukacita besar bagi keluarga dan tetangga mereka. Nama "Yohanes" yang berarti "Allah berkarunia" menggambarkan sifat pemberian Allah yang melampaui harapan manusia. Allah memberikan berkat pada waktu yang tepat menurut rencana-Nya.

Kisah kelahiran Yohanes mengajarkan kita tentang waktu Allah (kairos) yang berbeda dengan waktu manusia (chronos). Allah tidak terikat pada keterbatasan manusia dan dapat melakukan mujizat kapan saja Dia menghendaki. Yang penting adalah kita tetap beriman dan menantikan dengan sabar.

Yohanes kelak akan menjadi pembuka jalan bagi Yesus, menyiapkan hati umat untuk menyambut Sang Mesias. Demikian juga, dalam hidup kita, Allah seringkali mempersiapkan kita melalui berbagai pengalaman sebelum memberikan berkat yang lebih besar.

Mari kita belajar dari kisah Zakharia dan Elisabet untuk tetap beriman pada janji Allah, meskipun janji itu tampak mustahil secara manusiawi. Allah setia dan pasti menepati semua janji-Nya pada waktu yang tepat.`,
      author: 'KomsosKAK',
      date: '21 Des 2024',
    },
    {
      id: 5,
      image: '/assets/RenunganHarian.jpg',
      title: 'Jumat, 20 Desember 2024 - Pemberitaan Malaikat kepada Maria',
      content: `Hari Biasa Pekan Adven IV — Yesaya 7:10-14; Mzm 24:1-2.3-4.5-6; Lukas 1:26-38

Injil hari ini mengisahkan Pemberitaan malaikat Gabriel kepada Maria. Dalam peristiwa ini, Maria menunjukkan iman yang luar biasa dengan menjawab: "Jadilah padaku menurut perkataanmu." Respon Maria ini mengajarkan kita untuk menyerahkan diri sepenuhnya pada kehendak Allah, bahkan ketika kita tidak memahami rencana-Nya.

Pemberitaan adalah momen yang paling penting dalam sejarah keselamatan manusia. Allah memilih seorang gadis muda bernama Maria dari kota kecil Nazaret untuk menjadi Bunda Sang Juruselamat. Pilihan Allah ini menunjukkan bahwa Dia tidak memandang status sosial atau kekayaan, tetapi kerendahan hati dan kesiapan hati untuk melayani.

Ketika malaikat Gabriel menyapa Maria dengan "Salam Maria, penuh rahmat, Tuhan menyertai engkau," Maria merasa takut dan heran. Reaksi ini sangat manusiawi karena penampakan malaikat adalah pengalaman yang luar biasa. Namun, malaikat segera menenangkannya dan menyampaikan kabar gembira bahwa ia akan mengandung Yesus, Putra Allah.

Maria menanyakan bagaimana hal itu bisa terjadi karena ia belum bersuami. Pertanyaan Maria ini bukanlah ungkapan keraguan seperti Zakharia, tetapi permintaan penjelasan. Malaikat menjelaskan bahwa kehamilannya akan terjadi melalui kuasa Roh Kudus, dan anak yang dikandungnya akan disebut Anak Allah.

Sebagai tanda, malaikat memberitahu Maria bahwa sepupunya Elisabet, yang sudah tua dan dianggap mandul, sedang mengandung anak laki-laki. Ini membuktikan bahwa "bagi Allah tidak ada yang mustahil." Maria kemudian mengunjungi Elisabet untuk menyaksikan sendiri mujizat ini.

Respon akhir Maria, "Jadilah padaku menurut perkataanmu," adalah ungkapan iman yang sempurna. Maria menyerahkan seluruh hidupnya untuk melaksanakan kehendak Allah, meskipun ia tidak sepenuhnya memahami konsekuensinya. Inilah teladan iman yang harus kita ikuti.

Dalam hidup kita, seringkali Allah memanggil kita untuk hal-hal yang tidak kita pahami sepenuhnya. Seperti Maria, kita dipanggil untuk mengucapkan "ya" pada kehendak Allah dengan penuh kepercayaan. Iman sejati adalah penyerahan diri yang total kepada Allah.

Mari kita berdoa kepada Bunda Maria agar kita diberikan iman yang teguh untuk selalu mengucapkan "ya" pada kehendak Allah dalam hidup kita. Biarlah kita meneladan kerendahan hati dan ketaatan Maria dalam melayani rencana keselamatan Allah.`,
      author: 'KomsosKAK',
      date: '20 Des 2024',
    },
    {
      id: 6,
      image: '/assets/RenunganHarian2.jpg',
      title: 'Kamis, 19 Desember 2024 - Malaikat Gabriel dan Zakharia',
      content: `Hari Biasa Pekan Adven IV — Hakim-hakim 13:2-7.24-25; Mzm 71:3-4.5-6.16-17; Lukas 1:5-25

Injil hari ini menceritakan penampakan malaikat Gabriel kepada Zakharia yang memberitakan kelahiran Yohanes Pembaptis. Keraguan Zakharia terhadap janji Allah mengakibatkan dia dibungkam sampai janji itu digenapi. Kisah ini mengajarkan kita tentang pentingnya iman dan kepercayaan pada kuasa Allah.

Zakharia adalah imam dari rumpun Abia yang melayani di Bait Suci Yerusalem. Bersama istrinya Elisabet, mereka hidup benar di hadapan Allah dan mentaati semua perintah dan ketetapan Tuhan. Namun, mereka tidak memiliki anak karena Elisabet mandul dan keduanya sudah lanjut usia.

Pada suatu hari, ketika giliran Zakharia untuk melayani di Bait Suci, ia terpilih untuk membakar ukupan di ruang kudus. Ini adalah tugas yang sangat terhormat dan mungkin hanya dialami sekali seumur hidup seorang imam. Saat itulah malaikat Gabriel menampakkan diri kepadanya.

Malaikat memberitakan bahwa doa Zakharia telah didengar dan Elisabet akan melahirkan seorang anak laki-laki yang harus diberi nama Yohanes. Anak ini akan menjadi pembuka jalan bagi Mesias dan akan dipenuhi Roh Kudus sejak dalam kandungan ibunya.

Namun, Zakharia meragukan janji malaikat karena ia dan istrinya sudah tua. Keraguan ini berbeda dengan pertanyaan Maria yang mencari penjelasan. Zakharia meminta tanda sebagai bukti, seolah-olah penampakan malaikat Gabriel belum cukup sebagai tanda.

Karena keraguannya, Zakharia dibungkam sampai kelahiran anaknya. Kebisuan ini bukan hanya hukuman, tetapi juga waktu untuk refleksi dan pembelajaran. Selama sembilan bulan, Zakharia tidak bisa berbicara dan harus merenung tentang kuasa Allah.

Kisah Zakharia mengajarkan kita bahwa keraguan dapat menghalangi kita untuk menerima berkat Allah sepenuhnya. Meskipun kita telah lama melayani Allah, kita masih bisa jatuh dalam keraguan ketika Allah bekerja dengan cara yang melampaui pemahaman kita.

Pengalaman Zakharia juga mengingatkan kita bahwa Allah mendengar doa kita, meskipun Dia menjawabnya pada waktu yang tidak kita duga. Doa Zakharia untuk memiliki anak akhirnya dijawab ketika ia sudah tidak mengharapkannya lagi.

Mari kita belajar dari Zakharia untuk tidak membatasi kuasa Allah dengan pemikiran manusiawi kita. Biarlah kita selalu beriman bahwa Allah dapat melakukan segala sesuatu melampaui apa yang kita minta atau pikirkan.`,
      author: 'KomsosKAK',
      date: '19 Des 2024',
    },
    {
      id: 7,
      image: '/assets/RenunganHarian3.jpeg',
      title: 'Rabu, 18 Desember 2024 - Silsilah Yesus Kristus',
      content: `Hari Biasa Pekan Adven IV — Yeremia 23:5-8; Mzm 72:1-2.12-13.18-19; Matius 1:1-17

Injil hari ini menghadirkan silsilah Yesus Kristus yang menunjukkan bahwa Dia adalah Mesias yang dinanti-nantikan. Dalam daftar nama-nama ini, kita melihat bagaimana Allah bekerja melalui sejarah manusia, menggunakan orang-orang biasa untuk mewujudkan rencana keselamatan-Nya.

Silsilah Yesus dimulai dari Abraham, bapa bangsa Israel, dan berakhir pada Yosef, suami Maria. Meskipun Yosef bukan ayah kandung Yesus, ia tetap dicantumkan dalam silsilah karena secara hukum Yesus adalah anaknya. Hal ini menunjukkan bahwa Yesus secara legal adalah keturunan Daud.

Dalam silsilah ini, kita menemukan berbagai tokoh dengan latar belakang yang beragam. Ada raja-raja yang saleh seperti Daud dan Hizkia, tetapi juga ada yang jahat seperti Manasye. Ada yang terkenal seperti Abraham dan Daud, tetapi juga ada yang kurang dikenal seperti Aminadab dan Nahason.

Yang menarik adalah kehadiran beberapa perempuan dalam silsilah: Tamar, Rahab, Rut, dan "isteri Uria" (Batsyeba). Hal ini tidak biasa dalam budaya Yahudi yang patriarkal. Kehadiran mereka menunjukkan bahwa Allah bekerja melalui semua orang, termasuk mereka yang dianggap marginal oleh masyarakat.

Tamar adalah seorang janda yang memperjuangkan haknya dengan cara yang kontroversial. Rahab adalah seorang pelacur dari Yerikho yang melindungi mata-mata Israel. Rut adalah seorang perempuan Moab yang setia kepada mertuanya. Batsyeba terlibat dalam skandal dengan Raja Daud. Semua ini menunjukkan bahwa Allah dapat menggunakan siapa saja dalam rencana-Nya.

Silsilah ini dibagi menjadi tiga periode: dari Abraham sampai Daud (14 generasi), dari Daud sampai pembuangan ke Babel (14 generasi), dan dari pembuangan sampai Kristus (14 generasi). Pembagian ini menunjukkan bahwa kelahiran Yesus adalah puncak dari sejarah keselamatan.

Melalui silsilah ini, kita melihat bahwa Yesus benar-benar manusia dengan sejarah keluarga yang nyata. Ia bukan tokoh mitis, tetapi pribadi historis yang berakar dalam sejarah bangsa Israel. Sekaligus, silsilah ini membuktikan bahwa Yesus adalah Mesias yang dijanjikan, keturunan Abraham dan Daud.

Bagi kita, silsilah Yesus mengajarkan bahwa Allah dapat menggunakan siapa saja dalam rencana-Nya, termasuk kita dengan segala kelebihan dan kekurangan kita. Tidak ada yang terlalu rendah atau terlalu berdosa untuk dipakai Allah jika kita membuka hati bagi-Nya.

Mari kita bersyukur bahwa Yesus telah menjadi bagian dari sejarah manusia. Melalui inkarnasi-Nya, Ia memahami pergumulan kita dan dapat menjadi Juruselamat yang sempurna bagi semua orang dari segala bangsa dan latar belakang.`,
      author: 'KomsosKAK',
      date: '18 Des 2024',
    },
    {
      id: 8,
      image: '/assets/RenunganHarian4.jpg',
      title: 'Selasa, 17 Desember 2024 - Nubuatan tentang Mesias',
      content: `Hari Biasa Pekan Adven IV — Kejadian 49:2.8-10; Mzm 72:1-2.3-4.7-8.17; Matius 1:1-17

Bacaan hari ini menghadirkan nubuatan Yakub tentang Yehuda dan keturunannya yang akan menjadi pemimpin. Nubuatan ini dipenuhi dalam diri Yesus Kristus, keturunan Daud dari suku Yehuda. Hal ini menunjukkan bahwa rencana Allah telah disiapkan sejak lama dan digenapi dengan sempurna.

Yakub, dalam berkat terakhirnya kepada anak-anaknya, memberikan nubuatan khusus tentang Yehuda: "Tongkat kerajaan tidak akan beranjak dari Yehuda, dan lambang pemerintahan tidak akan hilang dari antara kakinya, sampai ia datang yang berhak atasnya, maka kepadanya akan takluk bangsa-bangsa."

Nubuatan ini sangat penting dalam sejarah keselamatan karena menunjukkan bahwa Mesias akan berasal dari suku Yehuda. Selama berabad-abad, bangsa Israel menantikan pemenuhan nubuatan ini. Raja Daud, yang berasal dari suku Yehuda, adalah awal dari pemenuhan nubuatan tersebut.

Dalam Mazmur hari ini, kita membaca tentang sosok raja yang adil yang akan memerintah dengan kebenaran dan membela orang miskin. Mazmur ini menggambarkan karakteristik Mesias yang akan datang: Ia akan memerintah dengan adil, membela yang lemah, dan mendatangkan damai sejahtera.

Silsilah Yesus dalam Injil Matius membuktikan bahwa Yesus adalah pemenuhan nubuatan Yakub. Sebagai keturunan Daud dari suku Yehuda, Yesus memiliki hak legal untuk menjadi raja Israel. Namun, kerajaan-Nya bukan kerajaan duniawi, melainkan Kerajaan Allah yang kekal.

Yesus memang menjadi raja, tetapi bukan dengan cara yang diharapkan orang pada zaman-Nya. Ia menjadi raja melalui pelayanan, pengorbanan, dan kasih. Mahkota-Nya adalah mahkota duri, dan takhta-Nya adalah salib. Kemenangan-Nya diraih melalui kematian dan kebangkitan.

Nubuatan tentang "bangsa-bangsa akan takluk kepada-Nya" digenapi bukan melalui penaklukan militer, tetapi melalui pemberitaan Injil. Kerajaan Kristus meluas ke seluruh dunia melalui iman dan kasih, bukan melalui kekerasan dan pemaksaan.

Bagi kita sebagai umat beriman, penggenapan nubuatan ini menguatkan iman kita bahwa Allah setia pada janji-Nya. Apa yang dijanjikan-Nya ribuan tahun lalu digenapi dengan sempurna dalam diri Yesus Kristus. Ini memberi kita kepastian bahwa janji-janji Allah untuk masa depan juga pasti akan digenapi.

Dalam masa Adven ini, kita diajak untuk mengakui Yesus sebagai Raja dan Tuan atas hidup kita. Seperti bangsa-bangsa yang takluk kepada-Nya, kita pun dipanggil untuk menyerahkan hidup kita sepenuhnya kepada-Nya dan hidup dalam ketaatan pada kehendak-Nya.

Mari kita bersyukur kepada Allah yang setia menepati janji-Nya. Biarlah kita hidup dengan keyakinan bahwa Allah yang telah menggenapi nubuatan tentang kedatangan Mesias juga akan menggenapi semua janji-Nya untuk kehidupan kekal bersama-Nya.`,
      author: 'KomsosKAK',
      date: '17 Des 2024',
    },
    {
      id: 9,
      image: '/assets/RenunganHarian.jpg',
      title: 'Senin, 16 Desember 2024 - Bersiap Menyambut Kedatangan Tuhan',
      content: `Hari Biasa Pekan Adven IV — Bilangan 24:2-7.15-17; Mzm 25:4-5.8-9.10+14; Matius 21:23-27

Injil hari ini mengisahkan pertanyaan para pemimpin agama tentang otoritas Yesus. Yesus menjawab dengan bijaksana, menunjukkan bahwa otoritas sejati datang dari Allah. Dalam masa Adven ini, kita diajak untuk mengakui otoritas Kristus atas hidup kita dan bersiap menyambut kedatangan-Nya.

Para imam kepala dan tua-tua bangsa menanyakan kepada Yesus: "Dengan kuasa manakah Engkau melakukan semuanya ini? Dan siapakah yang memberikan kuasa itu kepada-Mu?" Pertanyaan ini muncul setelah Yesus membersihkan Bait Suci dari para pedagang dan penukar uang.

Yesus tidak langsung menjawab pertanyaan mereka, tetapi balik bertanya: "Baptisan Yohanes itu dari manakah asalnya? Dari sorga atau dari manusia?" Pertanyaan Yesus ini sangat cerdas karena membuat para pemimpin agama berada dalam dilema.

Jika mereka menjawab "dari sorga," maka Yesus akan bertanya mengapa mereka tidak percaya kepada Yohanes. Jika mereka menjawab "dari manusia," mereka takut pada rakyat yang menganggap Yohanes sebagai nabi. Akhirnya mereka menjawab: "Kami tidak tahu."

Respons para pemimpin agama ini menunjukkan ketidakjujuran mereka. Mereka sebenarnya tahu jawabannya, tetapi takut mengakui kebenaran karena implikasi politisnya. Mereka lebih memilih mempertahankan posisi dan prestise daripada mencari kebenaran.

Yesus kemudian menolak menjawab pertanyaan mereka karena mereka tidak jujur dalam bertanya. Otoritas Yesus tidak perlu dibuktikan kepada mereka yang menutup hati pada kebenaran. Karya-karya-Nya sudah cukup menjadi kesaksian tentang otoritas-Nya yang berasal dari Allah.

Kisah ini mengajarkan kita bahwa otoritas sejati tidak berasal dari manusia, tetapi dari Allah. Yesus memiliki otoritas karena Ia adalah Putra Allah. Otoritas-Nya bukan karena pengangkatan manusia, tetapi karena sifat ilahi-Nya yang kekal.

Dalam masa Adven, kita diajak untuk merefleksikan: apakah kita mengakui otoritas Yesus atas hidup kita? Seringkali kita seperti para pemimpin agama yang ingin mengontrol dan mempertanyakan otoritas Yesus alih-alih tunduk pada kehendak-Nya.

Mengakui otoritas Yesus berarti menerima bahwa Dia adalah Tuhan atas segala aspek hidup kita: keputusan-keputusan kita, prioritas-prioritas kita, dan cara kita menjalani hidup. Ini bukan hanya pengakuan intelektual, tetapi penyerahan hidup yang total.

Mari kita bersiap menyambut kedatangan Kristus dengan mengakui otoritas-Nya atas hidup kita. Biarlah kita tidak seperti para pemimpin agama yang keras kepala, tetapi seperti Maria yang berkata: "Jadilah padaku menurut perkataan-Mu." Dengan demikian, hati kita akan siap untuk menyambut kelahiran Sang Raja di Natal nanti.`,
      author: 'KomsosKAK',
      date: '16 Des 2024',
    },
    {
      id: 10,
      image: '/assets/RenunganHarian2.jpg',
      title: 'Minggu, 15 Desember 2024 - Sukacita dalam Tuhan',
      content: `Minggu Adven III (Gaudete) — Zefanya 3:14-18; Yes 12:2-3.4.5-6; Filipi 4:4-7; Lukas 3:10-18

Minggu Gaudete mengundang kita untuk bersukacita karena Tuhan sudah dekat. Yohanes Pembaptis mengajarkan cara hidup yang benar: berbagi dengan sesama, berlaku adil, dan puas dengan apa yang kita miliki. Sukacita sejati datang dari hidup sesuai kehendak Allah dan mengasihi sesama.

Kata "Gaudete" berarti "bersukacitalah" dalam bahasa Latin. Minggu ini adalah hari sukacita di tengah masa Adven yang umumnya bernuansa suram dan tobat. Sukacita ini bukan karena penderitaan sudah berakhir, tetapi karena kita tahu bahwa keselamatan sudah dekat.

Dalam bacaan pertama, nabi Zefanya mengundang putri Sion untuk bersukacita: "Bersorak-sorailah, hai putri Sion! Bersorak-sorai, hai Israel! Bersukacita dan bergembiralah dengan segenap hati, hai putri Yerusalem!" Sukacita ini karena Tuhan hadir di tengah umat-Nya sebagai pahlawan yang menyelamatkan.

Yohanes Pembaptis, dalam Injil hari ini, memberikan nasihat praktis tentang cara hidup yang berkenan kepada Allah. Kepada orang banyak, ia berkata: "Barangsiapa mempunyai dua helai baju, hendaklah ia membagi dengan yang tidak punya, dan barangsiapa mempunyai makanan, hendaklah ia berbuat demikian juga."

Kepada pemungut cukai, Yohanes berkata: "Jangan menagih lebih dari yang ditentukan bagimu." Kepada prajurit, ia berkata: "Jangan merampas dan jangan memeras siapa pun dan cukupkanlah dirimu dengan gajimu." Nasihat-nasihat ini sangat praktis dan dapat diterapkan dalam kehidupan sehari-hari.

Ajaran Yohanes menunjukkan bahwa persiapan menyambut Mesias bukan hanya soal doa dan ritual, tetapi juga tindakan nyata dalam kehidupan sosial. Kita harus hidup adil, berbagi dengan sesama, dan tidak serakah. Inilah buah-buah pertobatan yang sejati.

Santo Paulus dalam surat kepada jemaat Filipi juga mengundang kita untuk bersukacita: "Bersukacitalah senantiasa dalam Tuhan! Sekali lagi kukatakan: Bersukacitalah!" Sukacita Kristen bukan bergantung pada keadaan eksternal, tetapi pada hubungan kita dengan Tuhan.

Sukacita dalam Tuhan berbeda dengan kegembiraan duniawi. Sukacita duniawi bergantung pada hal-hal luar seperti kekayaan, kesuksesan, atau pengakuan. Sukacita dalam Tuhan berasal dari kesadaran bahwa kita dikasihi Allah dan memiliki tempat dalam Kerajaan-Nya.

Dalam masa Adven ini, kita diajak untuk mencari sukacita sejati bukan dari hal-hal materi atau pencapaian duniawi, tetapi dari hubungan yang semakin dalam dengan Allah. Sukacita ini akan terpancar dalam cara kita memperlakukan sesama dan menjalani hidup sehari-hari.

Mari kita bersukacita karena Tuhan sudah dekat. Biarlah sukacita ini mendorong kita untuk hidup dalam kasih, berbagi dengan sesama, dan mempersiapkan hati untuk menyambut kelahiran Sang Juruselamat dengan penuh syukur dan harapan.`,
      author: 'KomsosKAK',
      date: '15 Des 2024',
    },
    {
      id: 11,
      image: '/assets/RenunganHarian3.jpeg',
      title: 'Sabtu, 14 Desember 2024 - Pengharapan yang Tidak Mengecewakan',
      content: `Hari Biasa Pekan Adven III — Sirakh 48:1-4.9-11; Mzm 80:2-3.15-16.18-19; Matius 17:9.10-13

Injil hari ini berbicara tentang Elia yang akan datang, yang Yesus katakan telah datang dalam diri Yohanes Pembaptis. Ini mengingatkan kita bahwa Allah menepati janji-Nya, meski tidak selalu dalam cara yang kita harapkan. Pengharapan kita dalam Tuhan tidak akan pernah mengecewakan.

Setelah peristiwa Transfigurasi, para murid bertanya kepada Yesus tentang ajaran ahli-ahli Taurat bahwa Elia harus datang lebih dahulu sebelum Mesias. Yesus menjawab bahwa Elia memang sudah datang, tetapi mereka tidak mengenalnya, bahkan memperlakukannya dengan sewenang-wenang.

Para murid kemudian memahami bahwa Yesus berbicara tentang Yohanes Pembaptis. Yohanes datang dalam "roh dan kuasa Elia" untuk mempersiapkan jalan bagi Tuhan. Seperti Elia, Yohanes adalah nabi yang berani menegur dosa dan memanggil bangsa untuk bertobat.

Kisah ini menunjukkan bahwa penggenapan nubuatan tidak selalu terjadi secara literal seperti yang kita bayangkan. Allah menggenapi janji-Nya dengan cara yang melampaui ekspektasi manusia. Elia tidak datang secara fisik, tetapi rohnya hadir dalam diri Yohanes Pembaptis.

Dalam bacaan pertama, kita membaca tentang Elia yang diangkat ke surga dengan kereta api. Nabi Elia adalah sosok yang sangat dihormati dalam tradisi Yahudi karena keberaniannya melawan Raja Ahab dan Nabi-nabi Baal. Ia menjadi simbol nabi sejati yang tidak berkompromi dengan kejahatan.

Yohanes Pembaptis, seperti Elia, hidup sederhana di padang gurun dan memberitakan pertobatan dengan berani. Ia tidak takut menegur Raja Herodes karena pernikahannya yang tidak sah. Seperti Elia, Yohanes akhirnya mati karena keberaniannya mempertahankan kebenaran.

Pengharapan bangsa Israel akan kedatangan Elia dipenuhi Allah dengan cara yang tidak terduga. Ini mengajarkan kita bahwa Allah setia pada janji-Nya, meskipun cara penggenapannya mungkin berbeda dari harapan kita. Yang penting adalah kita tetap berharap dan percaya pada kebaikan Allah.

Dalam hidup kita, seringkali kita kecewa karena doa kita tidak dijawab sesuai keinginan kita. Namun, kisah tentang Elia dan Yohanes mengajarkan bahwa Allah selalu menjawab doa kita, tetapi dengan cara dan waktu yang terbaik menurut kebijaksanaan-Nya.

Pengharapan Kristen bukan berdasarkan pada kemampuan kita untuk meramalkan cara kerja Allah, tetapi pada karakter Allah yang setia dan penuh kasih. Allah tahu apa yang terbaik bagi kita dan akan memberikannya pada waktu yang tepat.

Dalam masa Adven ini, mari kita memperbaharui pengharapan kita kepada Allah. Biarlah kita tidak kecewa jika berkat Allah datang dalam bentuk yang berbeda dari harapan kita. Yang terpenting adalah kita tetap percaya bahwa Allah mengasihi kita dan menginginkan yang terbaik bagi hidup kita.`,
      author: 'KomsosKAK',
      date: '14 Des 2024',
    },
    {
      id: 12,
      image: '/assets/RenunganHarian4.jpg',
      title: 'Jumat, 13 Desember 2024 - Belas Kasih yang Menyelamatkan',
      content: `Hari Biasa Pekan Adven III — Yesaya 48:17-19; Mzm 1:1-2.3.4+6; Matius 11:16-19

Yesus mengkritik generasi yang tidak pernah puas: menolak Yohanes karena terlalu keras, menolak Yesus karena terlalu lemah lembut. Hikmat dibuktikan oleh perbuatannya. Kita diajak untuk membuka hati pada cara Allah bekerja, yang seringkali berbeda dari ekspektasi kita.

Yesus menggunakan perumpamaan anak-anak yang bermain di pasar untuk menggambarkan sikap generasi-Nya. Mereka seperti anak-anak yang tidak mau ikut bermain, baik ketika diajak bermain pesta maupun pemakaman. Tidak ada yang bisa memuaskan mereka.

"Yohanes datang, ia tidak makan dan tidak minum, dan mereka berkata: Ia kerasukan setan. Anak Manusia datang, Ia makan dan minum, dan mereka berkata: Lihatlah, Ia seorang pelahap dan peminum, sahabat pemungut cukai dan orang berdosa."

Kritik Yesus ini menunjukkan bahwa seringkali kita menolak kebenaran bukan karena alasan yang objektif, tetapi karena kebenaran itu tidak sesuai dengan prasangka atau ekspektasi kita. Yohanes ditolak karena dianggap terlalu keras dan asketis. Yesus ditolak karena dianggap terlalu permisif dan bergaul dengan orang berdosa.

Namun, baik Yohanes maupun Yesus adalah utusan Allah dengan misi yang berbeda. Yohanes datang untuk mempersiapkan jalan dengan pertobatan yang radikal. Yesus datang untuk menunjukkan belas kasih Allah kepada orang-orang berdosa. Keduanya melengkapi dalam rencana keselamatan Allah.

Yesus mengakhiri dengan pernyataan: "Tetapi hikmat dibenarkan oleh perbuatannya." Artinya, kebenaran pelayanan Yohanes dan Yesus terbukti dari buah-buahnya. Yohanes menghasilkan pertobatan dalam hati banyak orang. Yesus membawa pengampunan dan pemulihan bagi yang terpinggirkan.

Dalam bacaan pertama, nabi Yesaya menyampaikan firman Tuhan: "Beginilah firman Tuhanmu, Penebus dan Yang Kudus, Allah Israel: Akulah Tuhan, Allahmu, yang mengajar engkau tentang apa yang berguna bagimu, yang menuntun engkau di jalan yang harus kaujalani."

Allah adalah guru yang sabar yang mengajar kita tentang jalan yang benar. Namun, seringkali kita seperti anak-anak nakal yang tidak mau mendengarkan nasihat orang tua. Kita berpikir kita tahu yang terbaik bagi diri kita sendiri, padahal Allah yang menciptakan kita tentu lebih tahu apa yang kita butuhkan.

Mazmur hari ini mengingatkan kita tentang berkat bagi orang yang tidak mengikuti nasihat orang fasik, tetapi yang kesukaannya ialah Taurat Tuhan. Orang seperti ini akan seperti pohon yang ditanam di tepi aliran air, yang menghasilkan buahnya pada musimnya.

Dalam masa Adven ini, mari kita periksa sikap hati kita. Apakah kita terbuka pada cara Allah bekerja dalam hidup kita, atau kita seperti generasi yang dikritik Yesus, selalu menolak karena tidak sesuai harapan kita? Biarlah kita membuka hati untuk menerima belas kasih Allah yang datang dalam berbagai cara, bahkan melalui orang-orang yang tidak kita duga.`,
      author: 'KomsosKAK',
      date: '13 Des 2024',
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
      // Redirect ke halaman renungan harian jika ID tidak ditemukan
      navigate('/renungan-harian');
    }
  }, [id, navigate]);

  // Fungsi untuk membuat URL share
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = `/renungan-harian/${id}`;
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
    return <div className="loading-renungan-container">Loading...</div>;
  }

  return (
    <div className="detail-renungan-container">
      <div className="detail-renungan-main">
        <h1 className="detail-renungan-title">{article.title}</h1>
        
        <div className="detail-renungan-meta">
          <div className="detail-renungan-date">
            {article.date} | {article.time || '06:00 WIB'}
          </div>
          <div className="detail-renungan-social">
            <a href={getWhatsAppShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-renungan-social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href={getFacebookShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-renungan-social-icon facebook">
              <FaFacebook />
            </a>
            <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-renungan-social-icon twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="detail-renungan-content">
          <div className="detail-renungan-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="detail-renungan-text">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-renungan-sidebar">
        <h3 className="related-renungan-title">Renungan Lainnya</h3>
        <div className="related-renungan">
          {relatedArticles.map((related) => (
            <Link to={`/renungan-harian/${related.id}`} key={related.id} className="related-renungan-item">
              <div className="related-renungan-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-renungan-content">
                <h4>{related.title}</h4>
                <p className="related-renungan-meta">
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

export default DetailRenungan;