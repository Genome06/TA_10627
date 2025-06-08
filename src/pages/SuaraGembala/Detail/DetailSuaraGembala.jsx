import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './DetailSuaraGembala.css';

const DetailSuaraGembala = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const navigate = useNavigate();

  // Data artikel (sama dengan yang di SuaraGembala.jsx)
  const articlesData = [
    {
      id: 1,
      image: '/assets/carousel_3.jpg',
      title: '"MARILAH KITA PERGI KE BETLEHEM..." (Luk 2:15)',
      content: `Saudara-saudari yang terkasih, 

"Marilah kita pergi ke Betlehem untuk melihat apa yang terjadi di sana, seperti yang diberitahukan Tuhan kepada kita."

Kata-kata para gembala ini mengajak kita untuk melakukan suatu perjalanan iman. Perjalanan menuju Betlehem, kota kecil yang menjadi tempat kelahiran Juruselamat kita. Namun perjalanan ini bukanlah sekadar perjalanan fisik, melainkan perjalanan rohani yang mengajak kita untuk kembali menemukan makna sejati dari perayaan Natal.

Betlehem berarti "rumah roti". Yesus, sang Roti Hidup, memilih untuk lahir di tempat yang sederhana ini. Dalam kesederhanaan palungan, Allah Yang Mahakuasa datang ke dunia sebagai bayi yang lemah dan tak berdaya. Ini menunjukkan kepada kita bahwa Allah memilih jalan kerendahan hati untuk menyelamatkan umat manusia.

Ketika para gembala mendapat kabar tentang kelahiran Sang Juruselamat, mereka segera berangkat untuk melihat-Nya. Mereka tidak menunda-nunda, tidak mempertanyakan, tetapi dengan iman yang sederhana, mereka pergi. Sikap para gembala ini mengajarkan kepada kita tentang ketaatan dan kesegeraan dalam menanggapi panggilan Allah.

Di masa Adven dan Natal ini, kita juga diajak untuk "pergi ke Betlehem" - untuk hadir di hadapan Kristus dengan hati yang terbuka, siap menerima rahmat dan kasih-Nya. Mari kita tinggalkan sejenak kesibukan dan keramaian dunia, untuk merenungkan misteri besar ini: Allah menjadi manusia demi keselamatan kita.

Semoga perayaan Natal tahun ini membawa kita semakin dekat kepada Kristus, membukakan mata kita untuk melihat kehadiran-Nya dalam sesama, terutama mereka yang miskin dan menderita. Dan seperti para gembala yang "kembali sambil memuliakan dan memuji Allah karena segala sesuatu yang mereka dengar dan lihat", semoga kita juga menjadi pewarta sukacita Natal kepada semua orang.

Selamat Natal dan Tahun Baru yang penuh berkat!`,
      author: 'KomsosKAK',
      date: '14 Des 2024',
    },
    {
      id: 2,
      image: '/assets/carousel_4.jpeg',
      title: '"KASIH ADALAH PENGIKAT YANG MEMPERSATUKAN" (Kol 3:14)',
      content: `Saudara-saudari yang terkasih, 

"Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan."

Dalam dunia yang sering terpecah-belah oleh berbagai perbedaan, kita diingatkan oleh Rasul Paulus tentang keutamaan kasih. Kasih bukanlah sekadar perasaan atau emosi, tetapi merupakan sikap hidup dan tindakan nyata yang menjadi dasar dari seluruh kehidupan kita sebagai pengikut Kristus.

Sebagai pengikat yang mempersatukan, kasih mampu menjembatani jurang pemisah, menyembuhkan luka-luka masa lalu, dan membangun jembatan perdamaian. Dalam keluarga, komunitas gereja, dan masyarakat luas, kasih memberikan kita kemampuan untuk melihat melampaui perbedaan dan merangkul sesama sebagai saudara dan saudari dalam Kristus.

Kasih juga menyempurnakan segala kebajikan lain. Tanpa kasih, keadilan bisa menjadi keras, kebenaran bisa menjadi tajam melukai, dan iman bisa menjadi kaku. Namun ketika diresapi dengan kasih, semua kebajikan itu mencapai kesempurnaannya dan membawa kebaikan bagi banyak orang.

Dalam kehidupan sehari-hari, bagaimana kita mewujudkan kasih ini? Mungkin melalui sikap sabar terhadap kelemahan orang lain, memberi tanpa mengharapkan balasan, atau bersedia memaafkan ketika dilukai. Kasih ini juga terungkap dalam kepedulian terhadap mereka yang miskin dan tersingkir, dalam keberanian membela kebenaran dan keadilan, dan dalam kesetiaan pada komitmen yang telah kita buat.

Mari kita memohon rahmat dari Allah agar kasih menjadi landasan dari semua yang kita pikirkan, katakan, dan lakukan. Dengan demikian, kita akan menjadi saksi Kristus yang sejati di tengah dunia, menjadi pembawa damai dan persatuan sebagaimana yang Ia kehendaki.

Tuhan memberkati kita semua.`,
      author: 'KomsosKAK',
      date: '07 Des 2024',
    },
    {
      id: 3,
      image: '/assets/carousel_3.jpg',
      title: '"HIDUP DALAM RAHMAT TUHAN" (2 Kor 12:9)',
      content: `Saudara-saudari yang terkasih,

"Cukuplah kasih karunia-Ku bagimu, sebab justru dalam kelemahanlah kuasa-Ku menjadi sempurna."

Kata-kata Tuhan kepada Rasul Paulus ini mengajak kita untuk merenungkan tentang rahmat Allah yang bekerja dalam kehidupan kita. Seringkali kita merasa tidak layak, tidak mampu, atau tidak cukup baik. Kita menyadari kelemahan dan keterbatasan kita. Namun justru di dalam kondisi inilah, Allah menyatakan kuasa-Nya yang sempurna.

Rahmat Allah tidak tergantung pada kekuatan atau kemampuan kita. Sebaliknya, rahmat itu bekerja secara sempurna ketika kita mengakui kelemahan kita dan sepenuhnya berserah kepada-Nya. Ketika kita mengandalkan kekuatan sendiri, kita membatasi apa yang Allah dapat lakukan melalui kita. Tetapi ketika kita rendah hati dan mengakui ketergantungan kita pada-Nya, kita membuka diri pada pekerjaan Allah yang tak terbatas.

Paulus sendiri memiliki "duri dalam daging" - entah itu penyakit fisik, tantangan pelayanan, atau pencobaan spiritual - yang membuatnya merasakan kelemahan manusiawinya. Namun bukannya menjauhkannya dari Allah, pengalaman ini justru membawanya pada pemahaman yang lebih dalam tentang rahmat Allah yang mencukupi.

Dalam kehidupan kita pun, kita menghadapi berbagai "duri" - tantangan, kegagalan, penyakit, atau luka batin. Alih-alih membiarkan hal-hal ini menghalangi kita untuk melayani dan mengasihi, mari kita jadikan sebagai kesempatan untuk semakin bergantung pada rahmat Allah. Dengan demikian, kelemahan kita tidak lagi menjadi hambatan, tetapi justru menjadi sarana bagi Allah untuk menyatakan kuasa-Nya.

Semoga kita semua dapat mengalami kebenaran ini dalam hidup kita: bahwa rahmat Allah selalu cukup, dan bahwa kuasa-Nya menjadi sempurna justru dalam kelemahan kita.

Tuhan memberkati kita semua.`,
      author: 'KomsosKAK',
      date: '01 Des 2024',
    },
    {
      id: 4,
      image: '/assets/carousel_4.jpeg',
      title: '"IMAN DAN PERBUATAN" (Yak 2:17)',
      content: `Saudara-saudari yang terkasih,

"Demikian juga halnya dengan iman: Jika iman itu tidak disertai perbuatan, maka iman itu pada hakekatnya adalah mati."

Perikop dari Surat Yakobus ini mengajak kita untuk merenungkan hubungan antara iman dan perbuatan dalam kehidupan Kristiani. Iman yang sejati tidak hanya berupa keyakinan intelektual atau ungkapan verbal, tetapi harus diwujudkan dalam tindakan nyata yang mencerminkan kasih Kristus.

Iman tanpa perbuatan ibarat pohon yang tidak berbuah. Meskipun tampak hidup dari luar, namun tidak menghasilkan apa-apa yang berguna. Sebaliknya, iman yang hidup akan selalu menghasilkan buah berupa perbuatan kasih, keadilan, belas kasihan, dan kebenaran. Iman semacam ini bukan hanya mempengaruhi apa yang kita percayai, tetapi juga bagaimana kita hidup dan berhubungan dengan sesama.

Yakobus memberikan contoh konkret: Jika kita melihat saudara seiman yang kekurangan makanan dan pakaian, lalu kita hanya mengucapkan kata-kata baik tanpa memberikan apa yang mereka butuhkan, apa gunanya? Ucapan "Iman dan perbuatan adalah dua sisi dari koin yang sama" mengingatkan kita bahwa keduanya tidak dapat dipisahkan.

Dalam kehidupan sehari-hari, bagaimana kita mewujudkan iman dalam perbuatan? Mungkin melalui kesediaan untuk melayani di gereja atau komunitas, melalui tindakan solidaritas kepada mereka yang membutuhkan, atau melalui sikap jujur dan adil dalam pekerjaan dan hubungan dengan sesama. Setiap tindakan kasih, sekecil apa pun, adalah bukti dari iman yang hidup.

Mari kita memohon rahmat dari Tuhan agar iman kita tidak hanya berupa kata-kata, tetapi nyata dalam perbuatan kasih. Dengan demikian, kita menjadi saksi Kristus yang sejati, yang mewartakan Injil bukan hanya dengan kata-kata, tetapi terutama dengan cara hidup kita.

Tuhan memberkati kita semua.`,
      author: 'KomsosKAK',
      date: '25 Nov 2024',
    },
    {
      id: 5,
      image: '/assets/carousel_3.jpg',
      title: '"MEMBANGUN KELUARGA YANG DIBERKATI" (Mzm 128:1-6)',
      content: `Saudara-saudari yang terkasih,

"Berbahagialah setiap orang yang takut akan TUHAN, yang hidup menurut jalan yang ditunjukkan-Nya!"

Mazmur 128 melukiskan gambaran indah tentang keluarga yang diberkati oleh Tuhan. Keluarga adalah tempat pertama di mana kita belajar tentang kasih, kepercayaan, dan nilai-nilai kehidupan. Sebagai "gereja domestik", keluarga menjadi tempat di mana iman ditumbuhkan, dipupuk, dan dihidupi.

Menurut Mazmur ini, dasar dari keluarga yang diberkati adalah "takut akan TUHAN" - sikap hormat dan taat kepada Allah. Ketika anggota keluarga, terutama orang tua, hidup dalam relasi yang dekat dengan Tuhan, berkat-berkat-Nya akan mengalir dalam kehidupan keluarga. Berkat ini tidak selalu berarti kekayaan materi, tetapi terutama kedamaian, sukacita, dan kasih yang mempersatukan.

Di era digital yang penuh tantangan ini, bagaimana kita membangun keluarga yang diberkati? Beberapa hal yang dapat kita lakukan:

1. Menempatkan Tuhan sebagai pusat keluarga, dengan rutin berdoa dan membaca Kitab Suci bersama.
2. Meluangkan waktu berkualitas bersama, memprioritaskan hubungan di atas kesibukan.
3. Menciptakan komunikasi yang terbuka dan saling menghormati antara anggota keluarga.
4. Mengajarkan nilai-nilai kristiani kepada anak-anak melalui teladan hidup.
5. Saling mendukung dalam perjalanan iman masing-masing anggota keluarga.

Tantangan memang tidak mudah. Tekanan ekonomi, pengaruh media sosial, dan gaya hidup modern seringkali mengancam keutuhan keluarga. Namun dengan rahmat Tuhan dan komitmen untuk saling mengasihi dan menghormati, keluarga dapat menjadi tempat yang aman dan memberkati bagi semua anggotanya.

Mari kita berdoa bagi keluarga-keluarga kita, agar menjadi tempat di mana iman, harapan, dan kasih bertumbuh. Dan semoga dari keluarga-keluarga ini, berkat Tuhan mengalir ke tengah masyarakat yang lebih luas.

Tuhan memberkati keluarga-keluarga kita.`,
      author: 'KomsosKAK',
      date: '18 Nov 2024',
    },
    {
      id: 6,
      image: '/assets/carousel_4.jpeg',
      title: '"MENJADI PELAKU FIRMAN" (Yak 1:22)',
      content: `Saudara-saudari yang terkasih,

"Tetapi hendaklah kamu menjadi pelaku firman dan bukan hanya pendengar saja; sebab jika tidak demikian kamu menipu diri sendiri."

Pesan Yakobus ini sangat relevan bagi kita saat ini. Dalam era informasi di mana kita dibanjiri dengan begitu banyak konten spiritual - khotbah, renungan, seminar, buku rohani - ada risiko bahwa kita menjadi "konsumen spiritual" yang terus mendengarkan firman tetapi tidak mempraktikkannya dalam kehidupan sehari-hari.

Mendengarkan firman tanpa melakukannya adalah bentuk penipuan diri. Kita mungkin merasa sudah bertumbuh secara rohani karena pengetahuan kita tentang firman bertambah, padahal kehidupan kita belum berubah. Yakobus menggambarkan orang seperti ini seperti seseorang yang bercermin, melihat wajahnya, kemudian pergi dan segera lupa bagaimana rupanya.

Sebaliknya, menjadi pelaku firman berarti membiarkan firman Tuhan mengubah cara kita berpikir, berbicara, dan bertindak. Ini berarti memberi makan yang lapar, mengunjungi yang sakit, membela yang tertindas, mengampuni yang bersalah, dan hidup dalam kesucian dan kebenaran. Ketika kita melakukan firman, firman itu menjadi bagian dari identitas kita.

Dalam kehidupan bergereja, terkadang kita lebih fokus pada ritual dan aktivitas eksternal daripada transformasi batin dan perubahan perilaku. Kita mungkin rajin ke gereja, aktif dalam pelayanan, bahkan menghafal ayat-ayat Kitab Suci, tetapi gagal untuk mempraktikkan nilai-nilai Injil dalam relasi dengan keluarga, tetangga, atau rekan kerja.

Mari kita meminta rahmat dari Tuhan agar kita tidak hanya menjadi pendengar, tetapi juga pelaku firman. Semoga firman Tuhan yang kita dengar dan baca setiap hari tidak hanya memperkaya pikiran kita, tetapi juga mengubah hati dan tindakan kita, sehingga kita semakin menyerupai Kristus.

Tuhan memberkati kita semua dalam upaya kita untuk menjadi pelaku firman-Nya.`,
      author: 'KomsosKAK',
      date: '10 Nov 2024',
    },
    {
      id: 7,
      image: '/assets/carousel_3.jpg',
      title: '"HIDUP DALAM DAMAI SEJAHTERA" (Fil 4:7)',
      content: `Saudara-saudari yang terkasih,

"Dan damai sejahtera Allah, yang melampaui segala akal, akan memelihara hati dan pikiranmu dalam Kristus Yesus."

Di tengah dunia yang penuh dengan kegelisahan, ketidakpastian, dan konflik, damai sejahtera menjadi hal yang sangat berharga. Kita hidup di era di mana berita buruk menyebar dengan cepat, kekhawatiran tentang masa depan meningkat, dan banyak orang mengalami kecemasan dan stres. Dalam konteks inilah, janji Allah tentang damai sejahtera menjadi sangat penting bagi kita.

Damai sejahtera yang ditawarkan Allah bukanlah sekadar tidak adanya konflik atau masalah. Ini adalah damai sejahtera yang "melampaui segala akal" - yang tidak tergantung pada situasi eksternal, tetapi berakar pada hubungan kita dengan Allah melalui Kristus. Damai sejahtera ini hadir bahkan di tengah badai kehidupan, memberikan kekuatan dan ketenangan batin yang tidak dapat dijelaskan secara logika manusia.

Bagaimana kita dapat mengalami damai sejahtera ini? Paulus memberikan kunci dalam ayat-ayat sebelumnya: "Janganlah hendaknya kamu kuatir tentang apa pun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur" (Fil 4:6). Doa, permohonan, dan ucapan syukur membuka hati kita untuk menerima damai sejahtera Allah.

Selain itu, Paulus juga mengingatkan untuk memikirkan hal-hal yang benar, mulia, adil, suci, manis, dan yang baik beritanya (Fil 4:8). Pikiran kita sangat mempengaruhi perasaan dan kondisi spiritual kita. Dengan memusatkan pikiran pada hal-hal yang positif dan membangun, kita menciptakan ruang bagi damai sejahtera Allah.

Damai sejahtera ini tidak hanya untuk dinikmati sendiri, tetapi juga untuk dibagikan kepada sesama. Di tengah masyarakat yang terpecah-belah, kita dipanggil untuk menjadi pembawa damai, menjembatani perbedaan, dan membangun persaudaraan.

Semoga kita semua dapat mengalami dan membagikan damai sejahtera Allah yang melampaui segala akal.

Tuhan memberkati kita semua.`,
      author: 'KomsosKAK',
      date: '03 Nov 2024',
    },
    {
      id: 8,
      image: '/assets/carousel_4.jpeg',
      title: '"MENJADI GARAM DAN TERANG DUNIA" (Mat 5:13-16)',
      content: `Saudara-saudari yang terkasih,

"Kamu adalah garam dunia... Kamu adalah terang dunia."

Dengan kata-kata ini, Yesus menegaskan identitas dan panggilan kita sebagai pengikut-Nya. Kita dipanggil bukan hanya untuk menerima keselamatan, tetapi juga untuk menjadi alat keselamatan bagi dunia - menjadi garam yang memberi rasa dan terang yang menerangi kegelapan.

Sebagai garam, kita dipanggil untuk memberikan "rasa" pada dunia di sekitar kita. Garam dalam jumlah kecil dapat mengubah rasa seluruh makanan. Demikian pula, meskipun kita mungkin merasa kecil dan tidak signifikan, kehadiran kita dapat membuat perbedaan dalam keluarga, lingkungan kerja, atau komunitas. Garam juga berfungsi sebagai pengawet. Di tengah dunia yang semakin menjauh dari nilai-nilai kristiani, kita dipanggil untuk mempertahankan dan menyebarkan nilai-nilai kebenaran, keadilan, dan kasih.

Sebagai terang, kita dipanggil untuk menyinari kegelapan - kebodohan, ketidakadilan, kebencian, dan segala bentuk kejahatan. Terang tidak menimbulkan kebisingan, tetapi dengan diam-diam mengusir kegelapan hanya dengan kehadirannya. Demikian pula, kesaksian hidup kita seringkali lebih kuat daripada kata-kata kita. Yesus mengingatkan bahwa terang tidak boleh disembunyikan, melainkan harus ditempatkan di tempat yang terlihat agar menerangi semua yang ada di dalam rumah.

Namun, Yesus juga memperingatkan bahwa garam dapat kehilangan rasanya dan terang dapat diletakkan di bawah gantang. Kita perlu terus menjaga agar identitas kita sebagai garam dan terang tidak memudar karena kompromi dengan dunia atau ketakutan untuk tampil berbeda.

Dalam konteks masyarakat pluralistik saat ini, bagaimana kita menjadi garam dan terang? Bukan dengan memaksakan pandangan kita kepada orang lain, melainkan dengan menunjukkan keindahan hidup kristiani melalui integritas, kasih, dan pelayanan. Dengan demikian, orang lain akan "melihat perbuatanmu yang baik dan memuliakan Bapamu yang di sorga."

Mari kita memohon rahmat dari Tuhan agar kita dapat menjalankan panggilan kita sebagai garam dan terang di tengah dunia. Semoga melalui hidup kita, banyak orang dapat merasakan kasih Allah dan melihat cahaya kebenaran-Nya.

Tuhan memberkati kita semua.`,
      author: 'KomsosKAK',
      date: '27 Okt 2024',
    },
    {
      id: 9,
      image: '/assets/carousel_3.jpg',
      title: '"SUKACITA DALAM MENGHADAPI PENCOBAAN" (Yak 1:2-4)',
      content: `Saudara-saudari yang terkasih,

"Saudara-saudariku, anggaplah sebagai suatu kebahagiaan, apabila kamu jatuh ke dalam berbagai-bagai pencobaan, sebab kamu tahu, bahwa ujian terhadap imanmu itu menghasilkan ketekunan. Dan biarkanlah ketekunan itu memperoleh buah yang sempurna, supaya kamu menjadi sempurna dan utuh dan tak kekurangan suatu apa pun."

Menghadapi pencobaan dan kesulitan hidup dengan sukacita bukanlah hal yang mudah. Secara alamiah, kita cenderung menghindari kesulitan dan mengeluh ketika menghadapinya. Namun, Yakobus mengajak kita untuk memiliki perspektif yang berbeda: melihat pencobaan sebagai kesempatan untuk bertumbuh dalam iman.

Pencobaan yang dimaksud di sini bukan godaan untuk berbuat dosa, melainkan berbagai ujian dan kesulitan hidup - penyakit, kehilangan, kekecewaan, penolakan, atau tantangan lainnya. Yakobus mengajarkan bahwa melalui ujian-ujian ini, iman kita diuji dan diperkuat, seperti emas yang dimurnikan oleh api.

Ujian iman menghasilkan ketekunan - kemampuan untuk bertahan dan tetap setia di tengah kesulitan. Dan ketekunan ini, jika dibiarkan bekerja dengan sempurna, akan membentuk karakter kita sehingga kita menjadi "sempurna dan utuh dan tak kekurangan suatu apa pun." Ini bukan kesempurnaan tanpa cacat, tetapi kedewasaan spiritual dan kelengkapan karakter kristiani.

Bagaimana kita dapat menerapkan ajaran ini dalam kehidupan sehari-hari? Pertama, ketika menghadapi kesulitan, alih-alih bertanya "Mengapa ini terjadi padaku?", kita dapat bertanya "Apa yang dapat kupelajari dari pengalaman ini?" Kedua, kita perlu mengingat bahwa Allah tidak pernah meninggalkan kita dalam pencobaan. Ia selalu hadir, memberikan kekuatan dan hikmat yang kita butuhkan. Ketiga, kita dapat mencari dukungan dari komunitas beriman, saling menguatkan dalam perjalanan iman kita.

Mari kita memohon rahmat dari Tuhan agar kita dapat menghadapi setiap pencobaan dengan iman dan sukacita, mengetahui bahwa melalui kesulitan tersebut, kita dibentuk menjadi serupa dengan Kristus.

Tuhan memberkati kita semua dalam setiap ujian dan pencobaan yang kita hadapi.`,
      author: 'KomsosKAK',
      date: '20 Okt 2024',
    },
    {
      id: 10,
      image: '/assets/carousel_4.jpeg',
      title: '"BERDIRILAH TEGUH DALAM IMAN" (1 Kor 16:13)',
      content: `Saudara-saudari yang terkasih,

"Berjaga-jagalah! Berdirilah dengan teguh dalam iman! Bersikaplah sebagai laki-laki! Tetap kuat!"

Di tengah dunia yang penuh dengan tantangan terhadap iman, seruan Paulus ini menjadi sangat relevan. Kita hidup di era di mana relativisme moral, materialisme, dan sekularisme semakin dominan. Nilai-nilai kristiani seringkali dipertanyakan atau bahkan diserang. Dalam konteks inilah, kita dipanggil untuk "berdiri teguh dalam iman".

Berdiri teguh bukan berarti menjadi kaku atau tertutup pada dialog. Sebaliknya, ini berarti memiliki keyakinan yang didasarkan pada pemahaman yang mendalam tentang iman kita. Iman yang teguh adalah iman yang telah direnungkan, diperjuangkan, dan dihidupi dalam berbagai situasi kehidupan. Ini adalah iman yang tidak goyah ketika menghadapi tantangan atau pertanyaan kritis.

Paulus mengaitkan keteguhan iman dengan sikap berjaga-jaga. Kita perlu waspada terhadap pengaruh-pengaruh yang dapat melemahkan iman kita - entah itu ajaran sesat, godaan duniawi, atau sikap acuh tak acuh yang perlahan-lahan mengikis komitmen kita. Berjaga-jaga berarti aktif memperkuat iman melalui doa, pembacaan Kitab Suci, dan partisipasi dalam kehidupan sakramental.

"Bersikaplah sebagai laki-laki!" - dalam konteks zamannya, Paulus menggunakan ungkapan ini untuk menyerukan keberanian dan ketegasan. Kita semua - baik laki-laki maupun perempuan - dipanggil untuk memiliki keberanian dalam menyatakan iman, membela kebenaran, dan melawan ketidakadilan, bahkan ketika ini berarti harus melawan arus utama masyarakat.

"Tetap kuat!" - kekuatan yang dimaksud di sini bukan kekuatan fisik, melainkan kekuatan batin yang berasal dari hubungan pribadi dengan Kristus. Ketika kita merasa lemah, kita dapat mengandalkan kekuatan Kristus, yang bersabda kepada Paulus: "Cukuplah kasih karunia-Ku bagimu, sebab justru dalam kelemahanlah kuasa-Ku menjadi sempurna" (2 Kor 12:9).

Mari kita meminta rahmat dari Tuhan agar kita dapat berdiri teguh dalam iman, berjaga-jaga terhadap segala tantangan, berani menyatakan kebenaran, dan tetap kuat dalam menghadapi setiap pencobaan.

Tuhan memberkati kita semua.`,
      author: 'KomsosKAK',
      date: '13 Okt 2024',
    },
    {
      id: 11,
      image: '/assets/carousel_3.jpg',
      title: '"KASIH YANG MELAMPAUI PENGETAHUAN" (Ef 3:19)',
      content: `Saudara-saudari yang terkasih,

"dan dapat mengenal kasih itu, yang melampaui segala pengetahuan, agar kamu dipenuhi di dalam seluruh kepenuhan Allah."

Dalam doanya untuk jemaat di Efesus, Paulus menyinggung suatu paradoks: mengenal kasih Kristus yang "melampaui segala pengetahuan". Bagaimana kita dapat mengenal sesuatu yang melampaui pengetahuan? Ini menunjukkan bahwa kasih Kristus begitu luas dan dalam sehingga tidak dapat sepenuhnya dipahami oleh akal manusia. Kasih ini hanya dapat dialami dan dihayati melalui hubungan pribadi dengan-Nya.

Dimensi kasih Kristus sungguh menakjubkan. Paulus menggambarkannya memiliki "lebar", "panjang", "tinggi", dan "dalam" (Ef 3:18). Kasih ini mencakup seluruh kemanusiaan (lebar), sepanjang seluruh sejarah keselamatan (panjang), setinggi kemuliaan surgawi (tinggi), dan sedalam kerendahan hati Kristus yang menjelma dan wafat bagi kita (dalam). Kasih ini tidak dapat diukur atau dibatasi; kasih ini jauh melampaui kemampuan kita untuk memahaminya secara intelektual.

Namun meskipun kita tidak dapat sepenuhnya memahami kasih Kristus, kita dapat mengalaminya. Kita mengalami kasih ini ketika kita merasakan pengampunan atas dosa-dosa kita, ketika kita menemukan kekuatan dalam menghadapi kesulitan, ketika kita merasakan kehadiran Allah dalam kesendirian, atau ketika kita menerima belas kasih melalui orang lain. Pengalaman-pengalaman ini memberikan kita kilasan dari kasih Kristus yang tak terbatas.

Tujuan dari mengenal kasih Kristus ini adalah agar kita "dipenuhi di dalam seluruh kepenuhan Allah". Kasih membuka hati kita untuk menerima kepenuhan Allah - semua yang ingin Allah berikan kepada kita. Semakin kita mengenal dan mengalami kasih Kristus, semakin kita dipenuhi oleh kehadiran, kuasa, dan rahmat Allah dalam hidup kita.

Mari kita memohon rahmat untuk dapat semakin mengenal kasih Kristus yang melampaui segala pengetahuan. Semoga pengalaman akan kasih ini mengubah kita dari dalam, sehingga kita pun menjadi saluran kasih-Nya bagi sesama.

Tuhan memberkati kita semua.`,
      author: 'KomsosKAK',
      date: '06 Okt 2024',
    },
    {
      id: 12,
      image: '/assets/carousel_4.jpeg',
      title: '"KERAJAAN ALLAH ADA DI DALAM DIRIMU" (Luk 17:21)',
      content: `Saudara-saudari yang terkasih,

"Kerajaan Allah tidak datang dengan tanda-tanda lahiriah, juga orang tidak dapat mengatakan: Lihat, ia ada di sini atau ia ada di sana! Sebab sesungguhnya Kerajaan Allah ada di antara kamu."

Perkataan Yesus ini mengajak kita untuk merefleksikan pemahaman kita tentang Kerajaan Allah. Orang-orang pada zaman Yesus, terutama para pemimpin agama, seringkali membayangkan Kerajaan Allah sebagai peristiwa dramatis dan politis yang akan mengubah tatanan dunia secara lahiriah. Mereka mencari tanda-tanda spektakuler dan kekuatan duniawi.

Namun Yesus menunjukkan bahwa Kerajaan Allah tidak seperti itu. Kerajaan Allah bukanlah wilayah geografis atau kekuasaan politik. Kerajaan Allah "ada di antara kamu" (atau dalam beberapa terjemahan: "ada di dalam dirimu"). Ini berarti Kerajaan Allah hadir di mana pun Allah diakui sebagai Raja, di mana pun kehendak-Nya dilakukan, di mana pun nilai-nilai Injil - kasih, keadilan, perdamaian, dan sukacita - dihidupi.

Kerajaan Allah dimulai dalam hati manusia yang menerima Kristus sebagai Tuhan. Saat kita membuka hati bagi-Nya, membiarkan-Nya memimpin dan mengubah kita, Kerajaan-Nya mulai bertumbuh dalam diri kita. Kemudian, melalui kita, Kerajaan ini menyebar ke keluarga, komunitas, dan masyarakat luas.

Kerajaan Allah memang memiliki dimensi eskatologis - akan mencapai kepenuhannya pada akhir zaman. Namun kita tidak perlu menunggu sampai saat itu untuk mengalami realitasnya. Kerajaan Allah sudah hadir di sini dan sekarang, meskipun belum dalam kepenuhannya.

Dalam kehidupan sehari-hari, bagaimana kita mewujudkan Kerajaan Allah? Ketika kita memperjuangkan keadilan bagi yang tertindas, ketika kita mengampuni mereka yang bersalah kepada kita, ketika kita berbagi dengan yang membutuhkan, ketika kita membawa damai dalam konflik - dalam semua tindakan ini, kita menyatakan bahwa Kerajaan Allah hadir di tengah dunia.

Mari kita memohon rahmat untuk dapat melihat dan menghidupi Kerajaan Allah dalam kenyataan sehari-hari. Semoga melalui hidup kita, orang lain pun dapat mengenali kehadiran Kerajaan-Nya.

Tuhan memberkati kita semua.`,
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
      // Redirect ke halaman suara gembala jika ID tidak ditemukan
      navigate('/suara-gembala');
    }
  }, [id, navigate]);

  // Fungsi untuk membuat URL share
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = `/suara-gembala/${id}`;
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
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="detail-gembala-container">
      <div className="detail-gembala-main">
        <h1 className="detail-gembala-title">{article.title}</h1>
        
        <div className="detail-gembala-meta">
          <div className="detail-gembala-date">
            {article.date} | {article.time || '10:00 WIB'}
          </div>
          <div className="detail-gembala-social">
            <a href={getWhatsAppShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-gembala-social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href={getFacebookShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-gembala-social-icon facebook">
              <FaFacebook />
            </a>
            <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer" className="detail-gembala-social-icon twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="detail-gembala-content">
          <div className="detail-gembala-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="detail-gembala-text">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-gembala-sidebar">
        <h3 className="related-gembala-title">Suara Gembala Lainnya</h3>
        <div className="related-gembala">
          {relatedArticles.map((related) => (
            <Link to={`/suara-gembala/${related.id}`} key={related.id} className="related-gembala-item">
              <div className="related-gembala-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-gembala-content">
                <h4>{related.title}</h4>
                <p className="related-gembala-meta">
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

export default DetailSuaraGembala;