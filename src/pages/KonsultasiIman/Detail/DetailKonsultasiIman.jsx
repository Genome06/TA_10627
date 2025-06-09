import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './DetailKonsultasiIman.css';

const DetailKonsultasiIman = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const navigate = useNavigate();

  // Data artikel konsultasi iman (sama dengan yang di KonsultasiIman.jsx)
  const articlesData = [
    {
      id: 1,
      image: '/assets/paus.jpeg',
      title: 'PAUS',
      content: `Kepala Gereja Katolik di dunia dipanggil dengan sebutan Paus (dari bahasa Yunani pappas, atau bahasa Italia papa, panggilan akrab seorang anak kecil terhadap ayahnya) karena otoritasnya yang superior dan karena dilaksanakan dengan cara yang paternal.

Petrus adalah Paus pertama, dan sejak itu telah ada sebuah suksesi yang tak terputus dari para paus. Paus adalah penerus Santo Petrus sebagai Uskup Roma dan kepala Gereja Katolik sedunia. Sebagai Vikaris Kristus di bumi, Paus memiliki otoritas tertinggi dalam hal doktrin dan moral.

Paus dipilih oleh Dewan Kardinal dalam sebuah konklave yang diadakan di Kapel Sistina. Proses pemilihan ini melibatkan doa, refleksi, dan voting hingga salah satu kandidat memperoleh mayoritas dua pertiga suara. Setelah terpilih, Paus menerima kekuasaan penuh atas Gereja Universal.

Tugas utama Paus meliputi:
1. Mengajar dan mempertahankan iman Katolik
2. Memimpin Gereja Universal dalam persatuan
3. Mengangkat uskup-uskup di seluruh dunia
4. Menerbitkan ensiklik dan dokumen magisterial
5. Memimpin liturgi-liturgi penting Gereja

Paus juga memiliki peran diplomatik yang penting, membangun hubungan dengan negara-negara dan organisasi internasional untuk mempromosikan perdamaian, keadilan, dan dialog antaragama.

Gelar-gelar resmi Paus antara lain: Uskup Roma, Vikaris Kristus, Penerus Pangeran Para Rasul, Imam Agung Tertinggi Gereja Universal, Patriark Barat, Primas Italia, Uskup Agung dan Metropolitan Provinsi Roma, Penguasa Negara Kota Vatikan, dan Hamba Para Hamba Allah.

Dalam menjalankan tugasnya, Paus dibantu oleh Kuria Roma, yang terdiri dari berbagai dikasteri, dewan, dan komisi yang menangani berbagai aspek kehidupan Gereja Universal.`,
      author: 'KomsosKAK',
      date: '14 Des 2024',
    },
    {
      id: 2,
      image: '/assets/kardinal.jpg',
      title: 'KARDINAL',
      content: `Kardinal adalah pejabat Gereja tertinggi setelah Paus. Mereka merupakan dewan pemilih dan penasihat utama Bapa Suci. Kata "kardinal" berasal dari bahasa Latin "cardo" yang berarti "engsel", menyiratkan peran penting mereka dalam menggerakkan Gereja.

Para kardinal adalah anggota dari Dewan Suci dan bertugas membantu Paus dalam mengelola Gereja Universal. Mereka dipilih langsung oleh Paus dan menerima topi merah (zucchetto) dan cincin kardinal sebagai tanda jabatan mereka.

Terdapat tiga ordo kardinal:
1. Kardinal Uskup - terdiri dari enam Kardinal Suburbikari di sekitar Roma
2. Kardinal Imam - biasanya uskup agung dari keuskupan-keuskupan besar
3. Kardinal Diakon - biasanya pejabat-pejabat Kuria Roma

Tugas-tugas utama Kardinal meliputi:
- Membantu Paus dalam pemerintahan Gereja Universal
- Memilih Paus baru dalam konklave
- Memberikan nasihat pada Paus dalam konsistori
- Memimpin dikasteri-dikasteri di Kuria Roma
- Menjadi duta Paus dalam misi-misi khusus

Warna merah dalam pakaian kardinal melambangkan kesediaan mereka untuk menumpahkan darah demi Gereja, bahkan sampai mati martir. Gelar "Eminence" diberikan kepada para kardinal sebagai tanda kehormatan dan penghargaan atas posisi mereka dalam hierarki Gereja.

Kardinal yang berusia di bawah 80 tahun berhak memilih dalam konklave pemilihan Paus. Jumlah kardinal pemilih dibatasi maksimal 120 orang sesuai dengan ketentuan yang ditetapkan oleh Paus Paulus VI.

Seorang kardinal dapat berasal dari kalangan uskup, imam, atau bahkan awam (meskipun yang terakhir ini sangat jarang terjadi dalam praktik modern). Mereka mewakili universalitas Gereja Katolik dengan berasal dari berbagai benua dan budaya di seluruh dunia.`,
      author: 'KomsosKAK',
      date: '07 Des 2024',
    },
    {
      id: 3,
      image: '/assets/uskup.jpg',
      title: 'USKUP',
      content: `Uskup adalah pemimpin Gereja yang memiliki kepenuhan imamat, penerus para rasul, dan pastor dari sebuah keuskupan. Melalui tahbisan, seorang uskup menerima tiga tugas utama: mengajar (munus docendi), menguduskan (munus sanctificandi), dan memimpin (munus regendi).

Uskup bertanggung jawab atas karya pastoral di wilayah keuskupannya. Mereka memiliki otoritas penuh dalam mengatur kehidupan Gereja di tingkat lokal, termasuk mengangkat pastor paroki, memberikan sakramen Krisma, dan memimpin liturgi-liturgi penting.

Tugas-tugas pokok Uskup:
1. Mengajar iman Katolik dengan otoritas
2. Menguduskan melalui sakramen-sakramen
3. Memimpin umat dalam keuskupan
4. Menjaga kesatuan dengan Paus dan uskup-uskup lain
5. Mempromosikan evangelisasi dan katekese

Seorang uskup ditahbiskan oleh minimal tiga uskup lain, dengan salah satunya sebagai konsekrator utama. Tahbisan uskup memberikan karakter yang tidak dapat dihapus dan menghadirkan kepenuhan sakramen imamat.

Dalam Konsili Vatikan II, peran uskup sebagai anggota kolegium uskup ditekankan. Bersama dengan Paus sebagai kepala, para uskup memiliki tanggung jawab atas Gereja Universal, bukan hanya keuskupan masing-masing.

Uskup mengenakan cincin episcopal sebagai tanda pernikahan spiritual dengan Gereja yang dipimpinnya. Mereka juga menggunakan mitra dan tongkat gembala sebagai simbol otoritas pastoral mereka.

Berbagai jenis uskup termasuk:
- Uskup Diosesan: memimpin keuskupan secara langsung
- Uskup Agung: memimpin keuskupan agung (archdiocese)
- Uskup Suffragan: uskup di bawah keuskupan agung
- Uskup Auxiliary: membantu uskup diosesan
- Uskup Emeritus: uskup yang telah pensiun

Uskup harus berusia minimal 35 tahun, telah ditahbiskan imam minimal 5 tahun, dan memiliki gelar doktor atau lisensi dalam Kitab Suci, teologi, atau hukum kanonik.`,
      author: 'KomsosKAK',
      date: '01 Des 2024',
    },
    {
      id: 4,
      image: '/assets/sakramen_baptis.jpg',
      title: 'SAKRAMEN BAPTIS',
      content: `Sakramen Baptis adalah sakramen pertama dan pintu masuk ke dalam Gereja Katolik. Melalui Baptis, seseorang dibebaskan dari dosa asal, menjadi anak Allah, anggota Gereja, dan berbagian dalam misi Kristus.

Sakramen ini diberikan dengan menuangkan air atau mencelupkan orang dalam air sambil mengucapkan: "Aku membaptis engkau dalam nama Bapa dan Putra dan Roh Kudus."

Efek-efek Sakramen Baptis:
1. Penghapusan dosa asal dan semua dosa pribadi
2. Kelahiran kembali sebagai anak Allah
3. Penyatuan dengan kematian dan kebangkitan Kristus
4. Penerimaan rahmat pengudusan
5. Keanggotaan dalam Gereja
6. Pemberian karakter baptismal yang tidak terhapus

Baptis anak-anak telah dipraktikkan sejak zaman apostolik. Gereja mengajarkan bahwa anak-anak membutuhkan Baptis untuk pembebasan dari dosa asal dan untuk memperoleh kehidupan ilahi.

Untuk Baptis anak, diperlukan:
- Persetujuan minimal satu orang tua
- Jaminan bahwa anak akan dididik dalam iman Katolik
- Satu atau dua orang tua baptis yang memenuhi syarat

Untuk Baptis orang dewasa, diperlukan:
- Iman dan niat yang benar
- Penyesalan atas dosa-dosa
- Persiapan katekumenat yang memadai
- Pengakuan iman Katolik

Air yang digunakan harus air alami dan biasanya diberkati secara khusus. Minyak suci (krisma) juga digunakan untuk pengurapan setelah pembaptisan.

Baptis hanya dapat diterima sekali karena memberikan karakter spiritual yang tidak terhapus. Gereja Katolik mengakui validitas Baptis yang dilakukan oleh denominasi Kristen lain jika dilakukan dengan formula dan intensi yang benar.

Wali baptis (godfather/godmother) berperan penting dalam mendampingi pertumbuhan iman orang yang dibaptis. Mereka harus merupakan Katolik yang telah menerima sakramen Krisma dan menjalani hidup sesuai dengan iman.`,
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 5,
      image: '/assets/sakramen_baptis.jpg',
      title: 'SAKRAMEN EKARISTI',
      content: `Sakramen Ekaristi adalah "sumber dan puncak seluruh hidup kristiani" (Lumen Gentium 11). Dalam sakramen ini, Kristus sungguh-sungguh hadir dalam rupa roti dan anggur yang telah dikonsekrasi.

Ekaristi adalah peringatan akan kurban Kristus di kayu salib dan juga perjamuan di mana kita menyatu dengan Kristus dan satu sama lain sebagai Gereja. Kata "Ekaristi" berasal dari bahasa Yunani "eucharistia" yang berarti "ucapan syukur".

Bagian-bagian utama Misa Kudus:
1. Ritus Pembuka - salam, tobat, Kemuliaan, doa pembuka
2. Liturgi Sabda - bacaan, homili, syahadat, doa umat
3. Liturgi Ekaristi - persiapan persembahan, doa syukur agung, komuni
4. Ritus Penutup - berkat dan pengutusan

Konsekrasi adalah momen sentral ketika roti dan anggur menjadi Tubuh dan Darah Kristus yang sesungguhnya melalui kuasa Roh Kudus dan kata-kata konsekrasi yang diucapkan imam.

Ajaran transsubstansiasi mengajarkan bahwa substansi roti dan anggur berubah sepenuhnya menjadi substansi Tubuh dan Darah Kristus, meskipun penampakan luar (aksiden) tetap seperti roti dan anggur.

Untuk menerima Komuni Kudus, diperlukan:
- Berada dalam keadaan rahmat (bebas dari dosa berat)
- Puasa minimal satu jam sebelumnya
- Sikap hormat dan reverensi
- Iman akan kehadiran nyata Kristus

Ekaristi juga dapat disimpan dalam Tabernakel untuk komuni bagi orang sakit dan untuk adorasi. Adorasi Sakramen Mahakudus adalah praktik devosional yang penting dalam tradisi Katolik.

Misa adalah tindakan liturgis tertinggi Gereja dan sumber kekuatan spiritual bagi kehidupan Kristiani. Melalui partisipasi dalam Ekaristi, umat beriman dipersatukan dengan kurban Kristus dan satu sama lain dalam tubuh mistik Kristus.

Efek-efek spiritual dari Ekaristi meliputi:
- Persatuan dengan Kristus
- Penguatan rahmat pengudusan
- Pengampunan dosa-dosa ringan
- Perlindungan dari dosa berat
- Persatuan dengan Gereja
- Komitmen kepada orang miskin`,
      author: 'KomsosKAK',
      date: '18 Nov 2024',
    },
    {
      id: 6,
      image: '/assets/paus.jpeg',
      title: 'SAKRAMEN PENGAKUAN DOSA',
      content: `Sakramen Pengakuan Dosa atau Rekonsiliasi adalah sakramen penyembuhan di mana umat beriman mengaku dosa-dosa mereka, menyatakan penyesalan, menerima absolusi, dan melakukan silih atas dosa.

Kristus memberikan kuasa kepada para rasul dan penerusnya untuk mengampuni dosa: "Terimalah Roh Kudus. Jikalau kamu mengampuni dosa seseorang, dosanya diampuni; jikalau kamu tidak mengampuninya, dosanya tidak diampuni" (Yoh 20:22-23).

Unsur-unsur pokok Sakramen Rekonsiliasi:
1. Pemeriksaan batin dan penyesalan
2. Pengakuan dosa kepada imam
3. Pemberian silih atau penebusan dosa
4. Absolusi dari imam

Jenis-jenis dosa:
- Dosa berat: melanggar hukum Allah secara serius, dilakukan dengan pengetahuan penuh dan persetujuan bebas
- Dosa ringan: pelanggaran yang kurang serius atau dilakukan tanpa pengetahuan/persetujuan penuh

Syarat untuk pengakuan dosa yang valid:
- Pemeriksaan batin yang teliti
- Penyesalan yang tulus (kontrisi)
- Niat untuk tidak berbuat dosa lagi
- Pengakuan yang lengkap dan jujur
- Kesediaan melakukan silih

Rahasia pengakuan (seal of confession) adalah prinsip mutlak bahwa imam tidak boleh membuka isi pengakuan dalam keadaan apa pun. Pelanggaran terhadap rahasia ini dikenai ekskomunikasi.

Manfaat spiritual dari Sakramen Rekonsiliasi:
- Rekonsiliasi dengan Allah dan Gereja
- Remisi hukuman kekal karena dosa berat
- Pengurangan sebagian hukuman sementara
- Kedamaian dan ketenangan suara hati
- Kekuatan rohani untuk melawan godaan
- Pertumbuhan dalam kehidupan rohani

Gereja menganjurkan untuk menerima sakramen ini secara teratur, bahkan untuk dosa-dosa ringan, sebagai alat pertumbuhan spiritual dan persatuan yang lebih erat dengan Allah.

Imam yang mendengar pengakuan bertindak in persona Christi (dalam diri Kristus) dan memberikan absolusi atas nama Kristus dan Gereja.`,
      author: 'KomsosKAK',
      date: '10 Nov 2024',
    },
    {
      id: 7,
      image: '/assets/kardinal.jpg',
      title: 'DOA ROSARIO',
      content: `Doa Rosario adalah doa meditasi yang berpusat pada peristiwa-peristiwa penting dalam kehidupan Yesus dan Maria. Rosario terdiri dari empat rangkaian misteri: Gembira, Terang, Sedih, dan Mulia.

Dalam doa ini, kita mengucapkan doa Salam Maria, Bapa Kami, dan Kemuliaan sambil merenungkan misteri-misteri iman. Rosario adalah "ringkasan seluruh Injil" menurut Paus Yohanes Paulus II.

Empat Rangkaian Misteri Rosario:

Misteri Gembira (Senin dan Sabtu):
1. Maria menerima kabar dari Malaikat Gabriel
2. Maria mengunjungi Elisabeth
3. Kelahiran Yesus di Betlehem
4. Penyerahan Yesus di Bait Suci
5. Yesus ditemukan di Bait Suci

Misteri Terang (Kamis):
1. Pembaptisan Yesus di Sungai Yordan
2. Pesta kawin di Kana
3. Pewartaan Kerajaan Allah
4. Transfigurasi Yesus
5. Penetapan Ekaristi

Misteri Sedih (Selasa dan Jumat):
1. Yesus berdoa dengan berdarah di Taman Getsemani
2. Yesus disiksa
3. Yesus dimahkotai duri
4. Yesus memanggul salib-Nya
5. Yesus wafat di salib

Misteri Mulia (Rabu dan Minggu):
1. Kebangkitan Yesus
2. Kenaikan Yesus ke surga
3. Turunnya Roh Kudus
4. Diangkatnya Maria ke surga
5. Pentajian Maria sebagai Ratu surga dan bumi

Cara mendoakan Rosario:
- Awali dengan Tanda Salib dan Syahadat Para Rasul
- Doakan Bapa Kami, 3 Salam Maria, Kemuliaan
- Umumkan misteri pertama, doakan Bapa Kami
- Doakan 10 Salam Maria sambil merenungkan misteri
- Tutup dengan Kemuliaan dan Doa Fatima
- Ulangi untuk 4 misteri lainnya
- Akhiri dengan Salam Ratu dan doa penutup

Rosario membantu kita masuk dalam kontemplasi bersama Maria tentang kehidupan Kristus. Melalui pengulangan doa-doa, kita mencapai keheningan batin yang memungkinkan meditasi yang mendalam.`,
      author: 'KomsosKAK',
      date: '03 Nov 2024',
    },
    {
      id: 8,
      image: '/assets/uskup.jpg',
      title: 'ADORASI EKARISTI',
      content: `Adorasi Ekaristi adalah praktik devosional di mana umat beriman memuja dan menyembah Kristus yang sungguh hadir dalam Sakramen Mahakudus. Adorasi bisa dilakukan dalam bentuk adorasi sementara atau adorasi kekal (perpetual adoration).

Praktik ini mendorong kita untuk masuk dalam keheningan, doa, dan persatuan yang lebih dalam dengan Kristus. Dalam adorasi, Hostia suci dipajang dalam monstrens untuk dapat dilihat dan disembah oleh umat beriman.

Dasar teologis Adorasi Ekaristi:
- Kehadiran nyata Kristus dalam Ekaristi
- Panggilan untuk menyembah Kristus
- Tradisi apostolik penyembahan
- Ajaran Magisterium Gereja

Jenis-jenis Adorasi Ekaristi:
1. Adorasi Pribadi - dilakukan secara individual
2. Adorasi Komunal - dilakukan bersama komunitas
3. Adorasi 40 Jam - adorasi berkelanjutan selama 40 jam
4. Adorasi Perpetual - adorasi tanpa henti 24 jam sehari

Persiapan untuk Adorasi:
- Datang dengan hati yang khusyuk
- Melakukan tanda salib dan genufleksi
- Berdoa dalam keheningan
- Membawa buku doa atau Kitab Suci
- Menghindari gangguan dan kebisingan

Manfaat spiritual Adorasi Ekaristi:
- Persatuan yang lebih dalam dengan Kristus
- Pertumbuhan dalam kehidupan doa
- Kedamaian batin dan ketenangan jiwa
- Penguatan untuk menghadapi tantangan hidup
- Pemahaman yang lebih mendalam tentang misteri Ekaristi

Praktik-praktik dalam Adorasi:
- Doa spontan dari hati
- Meditasi pada Kitab Suci
- Doa Rosario
- Doa untuk intensi khusus
- Keheningan contemplatif

Santo-santa besar seperti Santo Yohanes Paulus II, Santa Teresa dari Kalkuta, dan Santo Padre Pio adalah contoh devotees besar Adorasi Ekaristi. Mereka menghabiskan berjam-jam dalam adorasi dan menemukan kekuatan spiritual yang luar biasa.

Gereja menganjurkan praktik adorasi sebagai cara untuk memperdalam iman dan kasih kepada Kristus yang hadir dalam Ekaristi. Banyak paroki menyelenggarakan jam-jam adorasi reguler untuk memfasilitasi devosi ini.`,
      author: 'KomsosKAK',
      date: '27 Okt 2024',
    },
    {
      id: 9,
      image: '/assets/sakramen_baptis.jpg',
      title: 'NOVENA',
      content: `Novena adalah doa khusus yang dilakukan selama sembilan hari berturut-turut dengan intensi tertentu. Praktik ini berakar pada sembilan hari para rasul berdoa bersama Maria setelah Kenaikan Yesus dan sebelum turunnya Roh Kudus pada Pentakosta.

Novena mengungkapkan ketekunan dalam doa dan kepercayaan pada campur tangan ilahi. Angka sembilan memiliki makna simbolis dalam tradisi Kristen sebagai angka kesempurnaan dan kelengkapan.

Jenis-jenis Novena yang populer:
1. Novena kepada Roh Kudus
2. Novena kepada Santa Maria
3. Novena kepada Santo Yosef
4. Novena kepada Hati Kudus Yesus
5. Novena kepada berbagai santo dan santa

Struktur umum Novena:
- Tanda Salib dan doa pembuka
- Doa khusus sesuai intensi novena
- Bacaan Kitab Suci atau refleksi
- Doa permohonan atau syafaat
- Doa penutup dan berkat

Prinsip-prinsip dalam berdoa Novena:
- Ketekunan dan konsistensi selama 9 hari
- Iman dan kepercayaan kepada Allah
- Niat yang tulus dan sesuai kehendak Allah
- Sikap pasrah dan penerimaan
- Bersiap menerima jawaban dalam berbagai bentuk

Novena yang paling terkenal adalah Novena Roh Kudus yang didoakan antara Kenaikan dan Pentakosta. Para rasul dan Maria berkumpul dalam Ruang Atas, berdoa dengan tekun sambil menantikan kedatangan Penghibur yang dijanjikan Yesus.

Efektivitas Novena tidak terletak pada jumlah hari atau kata-kata yang diucapkan, tetapi pada disposisi hati yang terbuka, iman yang teguh, dan penyerahan diri pada kehendak Allah. Novena adalah sekolah kesabaran dan kepercayaan.

Novena dapat didoakan secara pribadi atau dalam kelompok. Banyak paroki mengadakan novena komunal sebelum pesta-pesta besar atau dalam situasi khusus yang membutuhkan doa bersama.

Meskipun kita berdoa dengan penuh harapan untuk permintaan kita, kita harus selalu ingat bahwa Allah tahu apa yang terbaik bagi kita. Terkadang jawaban-Nya berbeda dari yang kita harapkan, tetapi selalu diberikan dengan kasih dan kebijaksanaan-Nya.

Novena mengajarkan kita nilai ketekunan dalam doa, sebagaimana Yesus sendiri mengajarkan dalam perumpamaan tentang hakim yang tidak adil dan janda yang gigih.`,
      author: 'KomsosKAK',
      date: '20 Okt 2024',
    },
    {
      id: 10,
      image: '/assets/kardinal.jpg',
      title: 'MASA ADVEN',
      content: `Masa Adven adalah periode empat minggu sebelum Natal yang menandai awal tahun liturgi Gereja. Ini adalah waktu persiapan spiritual di mana umat beriman menantikan kedatangan Kristus: memperingati kedatangan-Nya pertama dalam inkarnasi dan menantikan kedatangan-Nya yang kedua pada akhir zaman.

Tema-tema utama Adven adalah harapan, persiapan, sukacita, dan damai. Kata "Adven" berasal dari bahasa Latin "adventus" yang berarti "kedatangan".

Empat Minggu Adven dengan tema-temanya:
Minggu I - Harapan: Menantikan kedatangan Mesias
Minggu II - Persiapan: Menyiapkan jalan bagi Tuhan  
Minggu III - Sukacita: Bersukacita karena Tuhan sudah dekat
Minggu IV - Kasih: Merenungkan kasih Allah dalam inkarnasi

Simbol-simbol Adven:
- Mahkota Adven dengan 4 lilin (3 ungu, 1 merah muda)
- Warna liturgi ungu (tanda pertobatan) dan merah muda (sukacita)
- Kalender Adven untuk anak-anak
- Pohon Jesse menggambarkan silsilah Kristus

Tradisi-tradisi Adven:
- Penyalaan lilin Adven setiap minggu
- Doa dan refleksi harian
- Amal dan pelayanan kepada sesama
- Persiapan hati melalui pertobatan
- Puasa dan pantangan sebagai persiapan

Bacaan-bacaan Kitab Suci Adven fokus pada:
- Nubuat-nubuat Mesianis dari Perjanjian Lama
- Pelayanan Yohanes Pembaptis
- Kabar gembira kepada Maria
- Persiapan komunitas Kristiani awal

Praktik-praktik spiritual selama Adven:
- Pemeriksaan batin dan pertobatan
- Doa yang lebih intensif
- Membaca dan merenungkan Kitab Suci
- Mengikuti Misa dan liturgi Adven
- Melakukan amal dan perbuatan kasih

Adven mengundang kita untuk keluar dari rutinitas dan kebisingan dunia untuk masuk dalam keheningan dan penantian yang penuh harapan. Ini adalah waktu untuk merefleksikan makna sesungguhnya dari kedatangan Kristus ke dunia.

Dalam tradisi Katolik, Adven adalah masa yang sangat dihargai untuk pertumbuhan spiritual dan persiapan batin menuju perayaan Natal. Gereja mengundang kita untuk tidak terjebak dalam komersialisasi Natal, tetapi fokus pada dimensi spiritual dari misteri inkarnasi.

Adven berakhir dengan Misa Tengah Malam pada Malam Natal, di mana kita merayakan kelahiran Kristus dengan penuh sukacita dan syukur atas kasih Allah yang begitu besar kepada umat manusia.`,
      author: 'KomsosKAK',
      date: '13 Okt 2024',
    },
    {
      id: 11,
      image: '/assets/uskup.jpg',
      title: 'MASA PRAPASKAH',
      content: `Masa Prapaskah atau Puasa adalah periode 40 hari (tidak termasuk hari Minggu) sebelum Paskah. Ini adalah waktu pertobatan, refleksi, dan persiapan untuk merayakan kebangkitan Kristus.

Praktik-praktik Prapaskah meliputi puasa, doa, dan amal. Masa ini dimulai pada Rabu Abu dan berakhir sebelum Misa Perjamuan Terakhir pada Kamis Putih.

Angka 40 memiliki makna simbolis dalam Kitab Suci:
- 40 hari hujan saat banjir Nuh
- 40 tahun Israel mengembara di padang gurun
- 40 hari Musa di Gunung Sinai
- 40 hari Elia berjalan ke Gunung Horeb
- 40 hari Yesus berpuasa di padang gurun

Tiga pilar utama Prapaskah:
1. Doa (oratio) - Memperdalam relasi dengan Allah
2. Puasa (ieiunium) - Disiplin diri dan solidaritas
3. Amal (eleemosyna) - Pelayanan kepada sesama

Praktik puasa dalam Prapaskah:
- Rabu Abu dan Jumat Agung: puasa dan pantangan
- Setiap hari Jumat: pantangan daging
- Pantangan dari hal-hal yang berlebihan
- Puasa media sosial atau hiburan tertentu

Tujuan spiritual Prapaskah:
- Pertobatan dan pemurnian hati
- Persiapan untuk pembaruan janji baptis
- Solidaritas dengan orang miskin dan menderita
- Memperdalam pemahaman tentang kurban Kristus
- Pertumbuhan dalam disiplin spiritual

Minggu-minggu khusus dalam Prapaskah:
- Minggu I: Pencobaan Yesus di padang gurun
- Minggu II: Transfigurasi Yesus
- Minggu III: Perempuan Samaria di sumur
- Minggu IV: Penyembuhan orang buta sejak lahir
- Minggu V: Kebangkitan Lazarus
- Minggu Palma: Masuk Yesus ke Yerusalem

Pekan Suci (minggu terakhir Prapaskah):
- Minggu Palma: Masuk triumfal Yesus
- Kamis Putih: Perjamuan Terakhir
- Jumat Agung: Sengsara dan Wafat Yesus
- Sabtu Suci: Yesus dalam kubur

Simbol-simbol Prapaskah:
- Abu sebagai tanda pertobatan dan kefanaan
- Warna ungu untuk pertobatan
- Salib yang ditutupi untuk fokus pada kurban
- Tidak menyanyikan "Haleluya" dalam liturgi

Prapaskah adalah undangan untuk meninggalkan dosa dan kembali kepada Allah dengan segenap hati. Ini adalah waktu rahmat khusus di mana Gereja mengundang semua orang beriman untuk pembaruan spiritual yang mendalam.`,
      author: 'KomsosKAK',
      date: '06 Okt 2024',
    },
    {
      id: 12,
      image: '/assets/paus.jpeg',
      title: 'TRINITAS',
      content: `Trinitas adalah ajaran sentral iman Kristen bahwa Allah adalah satu dalam tiga Pribadi: Bapa, Putra, dan Roh Kudus. Ketiga Pribadi ini adalah satu Allah yang sama, memiliki satu hakikat atau substansi ilahi yang sama.

Misteri Trinitas tidak sepenuhnya dapat dipahami oleh akal manusia, tetapi diwahyukan kepada kita dalam Kitab Suci dan tradisi Gereja. Ini adalah misteri iman yang melampaui kemampuan rasio manusia namun dapat diterima melalui iman.

Pribadi-pribadi dalam Trinitas:

Bapa:
- Sumber dan asal dari keilahian
- Pencipta langit dan bumi
- Yang mengutus Putra untuk keselamatan
- Yang memberikan Roh Kudus

Putra (Yesus Kristus):
- Sabda Allah yang menjadi manusia
- Satu substansi dengan Bapa
- Penyelamat umat manusia
- Yang bangkit dari kematian

Roh Kudus:
- Pemberi kehidupan dan pengudus
- Yang menyatukan Bapa dan Putra
- Yang bekerja dalam Gereja dan jiwa manusia
- Sumber inspirasi dan kekuatan spiritual

Dasar Kitab Suci untuk ajaran Trinitas:
- Pembaptisan Yesus (Matius 3:16-17)
- Amanat Agung (Matius 28:19)
- Berkat apostolik (2 Korintus 13:13)
- Inkarnasi Yesus (Yohanes 1:1-14)

Analogi-analogi untuk memahami Trinitas:
- Matahari: bola, cahaya, dan panas
- Air: es, cairan, dan uap
- Telur: kulit, putih, dan kuning
- Manusia: tubuh, jiwa, dan roh

Meskipun analogi membantu, tidak ada yang sempurna menggambarkan misteri Trinitas karena Allah melampaui segala ciptaan.

Konsili-konsili yang merumuskan ajaran Trinitas:
- Konsili Nicea I (325): keilahian Kristus
- Konsili Konstantinopel I (381): keilahian Roh Kudus
- Konsili Efesus (431): kesatuan pribadi Kristus
- Konsili Khalsedon (451): dua kodrat Kristus

Syahadat Nicea-Konstantinopel merangkum iman Trinitas:
"Aku percaya akan satu Allah, Bapa Yang Mahakuasa... dan akan satu Tuhan Yesus Kristus, Putra Allah yang tunggal... Aku percaya akan Roh Kudus, Tuhan yang menghidupkan..."

Implikasi praktis iman Trinitas:
- Doa "dalam nama Bapa dan Putra dan Roh Kudus"
- Hidup dalam persekutuan seperti Trinitas
- Menghormati setiap Pribadi ilahi
- Memahami karya keselamatan sebagai karya Trinitas`,
      author: 'KomsosKAK',
      date: '29 Sep 2024',
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
      // Redirect ke halaman konsultasi iman jika ID tidak ditemukan
      navigate('/konsultasi-iman');
    }
  }, [id, navigate]);

  // Fungsi untuk membuat URL share
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = `/konsultasi-iman/${id}`;
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
    return <div className="loading-konsultasi-container">Loading...</div>;
  }

  return (
    <div className="detail-konsultasi-container">
      <div className="detail-konsultasi-main">
        <h1 className="detail-konsultasi-title">{article.title}</h1>
        
        <div className="detail-konsultasi-meta">
          <div className="detail-konsultasi-date">
            {article.date} | {article.time || '10:00 WIB'}
          </div>
          <div className="detail-konsultasi-social">
            <a href={getWhatsAppShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-konsultasi-social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href={getFacebookShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-konsultasi-social-icon facebook">
              <FaFacebook />
            </a>
            <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-konsultasi-social-icon twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="detail-konsultasi-content">
          <div className="detail-konsultasi-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="detail-konsultasi-text">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-konsultasi-sidebar">
        <h3 className="related-konsultasi-title">Konsultasi Iman Lainnya</h3>
        <div className="related-konsultasi">
          {relatedArticles.map((related) => (
            <Link to={`/konsultasi-iman/${related.id}`} key={related.id} className="related-konsultasi-item">
              <div className="related-konsultasi-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-konsultasi-content">
                <h4>{related.title}</h4>
                <p className="related-konsultasi-meta">
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

export default DetailKonsultasiIman;