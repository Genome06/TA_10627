import React from "react";
import { useParams } from "react-router-dom";
import "./DetailTts.css";

// Data paroki lengkap untuk wilayah Timor Tengah Selatan
const parokiData = [
  {
    id: 1,
    name: "Paroki Sta. Maria Mater Dolorosa Soe",
    image: "/assets/Katedral.jpg",
    description: [
      "Paroki Santa Maria Mater Dolorosa Soe merupakan paroki tertua di Kabupaten Timor Tengah Selatan yang didirikan pada tahun 1960 oleh misionaris SVD. Nama paroki ini mengambil gelar Bunda Maria Berdukacita yang menggambarkan penderitaan Maria menyaksikan sengsara Yesus. Sebagai paroki induk di wilayah TTS, paroki ini menjadi pusat perkembangan iman Katolik di daerah pegunungan Timor.",
      "Bangunan gereja Santa Maria Mater Dolorosa memiliki arsitektur yang memadukan gaya Eropa dengan unsur budaya Timor, terlihat dari ornamen ukiran khas Timor yang menghiasi altar dan mimbar. Paroki ini melayani sekitar 8.000 umat yang tersebar di kota Soe dan desa-desa sekitarnya. Program pastoral unggulan paroki ini meliputi pembinaan keluarga Katolik dan pengembangan pendidikan iman bagi generasi muda."
    ]
  },
  {
    id: 2,
    name: "Paroki Aryos Niki Niki",
    image: "/assets/Assumpta.jpg",
    description: [
      "Paroki Aryos Niki Niki berlokasi di wilayah Niki Niki yang merupakan bekas kerajaan tradisional di Timor. Nama 'Aryos' merupakan singkatan dari 'Adat dan Religiositas Yang Oleh Semangat', menunjukkan integrasi harmonis antara budaya lokal dan iman Katolik. Paroki ini didirikan pada tahun 1968 dan telah berkembang menjadi pusat spiritual yang penting bagi masyarakat Niki Niki.",
      "Gereja paroki ini memiliki desain yang unik dengan arsitektur bergaya lokal, termasuk atap menyerupai rumah adat Timor. Paroki Aryos dikenal dengan upacara liturgi yang menggabungkan ritual Katolik dan tradisi setempat. Program pastoral paroki ini menekankan dialog antarbudaya dan pelestarian kearifan lokal dalam konteks iman Kristiani, termasuk penggunaan nyanyian dan tarian tradisional dalam liturgi."
    ]
  },
  {
    id: 3,
    name: "Paroki Sta. Maria Imacculata Kapan",
    image: "/assets/Naikoten.jpg",
    description: [
      "Paroki Santa Maria Imacculata Kapan terletak di dataran tinggi Kapan dengan ketinggian sekitar 1.200 meter di atas permukaan laut. Didirikan pada tahun 1972, paroki ini mengambil nama dari dogma Maria Dikandung Tanpa Noda. Berkat iklimnya yang sejuk, wilayah Kapan dikenal sebagai produsen sayuran dan buah-buahan terbaik di NTT, yang juga memengaruhi kehidupan pastoral paroki.",
      "Paroki Santa Maria Imacculata Kapan memiliki komunitas yang aktif dalam kegiatan pertanian berbasis lingkungan. Gereja paroki memiliki taman doa yang indah dengan berbagai tanaman hias dan bunga, mencerminkan kecintaan umat pada alam. Program pastoral paroki ini memiliki perhatian khusus pada pemberdayaan petani dan konservasi lingkungan sebagai bentuk tanggung jawab terhadap ciptaan Tuhan."
    ]
  },
  {
    id: 4,
    name: "Paroki St. Vinsensius Benlutu",
    image: "/assets/penfui.webp",
    description: [
      "Paroki Santo Vinsensius Benlutu didirikan pada tahun 1978 dan melayani umat Katolik di wilayah Benlutu dan sekitarnya. Paroki ini mengambil nama Santo Vinsensius yang terkenal dengan karya karitatifnya, mencerminkan semangat pelayanan yang menjadi ciri khas komunitas ini. Wilayah Benlutu dikenal dengan tradisi tenun ikat dan paroki ini berperan dalam melestarikan warisan budaya tersebut.",
      "Gereja Santo Vinsensius memiliki arsitektur sederhana namun indah dengan jendela kaca patri yang menggambarkan kisah-kisah Injil dalam konteks budaya Timor. Paroki ini memiliki sekitar 6.000 umat yang tersebar di berbagai desa. Program unggulan paroki meliputi pelayanan kesehatan melalui klinik paroki dan pemberdayaan ekonomi masyarakat melalui koperasi simpan pinjam yang dikelola oleh paroki."
    ]
  },
  {
    id: 5,
    name: "Paroki Panite",
    image: "/assets/sikumana.webp",
    description: [
      "Paroki Panite merupakan salah satu paroki yang relatif baru di Kabupaten Timor Tengah Selatan, didirikan pada tahun 1985. Terletak di lembah yang subur, Panite dikenal sebagai daerah penghasil jagung dan kacang-kacangan. Paroki ini memiliki peran penting dalam pengembangan pertanian dan pendidikan di wilayah tersebut melalui sekolah-sekolah Katolik yang didirikan di bawah naungan paroki.",
      "Bangunan gereja paroki Panite memiliki desain yang sederhana namun fungsional, mencerminkan semangat kesederhanaan masyarakat setempat. Paroki ini melayani sekitar 4.500 umat yang mayoritas bermata pencaharian sebagai petani. Program pastoral paroki berfokus pada pembinaan iman dalam konteks kehidupan agraris dan penguatan kelompok basis gerejawi di tingkat desa dan dusun."
    ]
  },
  {
    id: 6,
    name: "Paroki St. Paulus Oinlasi",
    image: "/assets/asisi.jpg",
    description: [
      "Paroki Santo Paulus Oinlasi didirikan pada tahun 1982 dan dinamai menurut Rasul Paulus, sang pewarta agung Injil. Wilayah Oinlasi terkenal dengan tradisi peternakan dan paroki ini telah berperan dalam mengintegrasikan nilai-nilai Injil dengan kehidupan masyarakat peternak. Terletak di daerah yang berbukit-bukit, paroki ini memiliki pemandangan alam yang indah.",
      "Gereja Santo Paulus Oinlasi memiliki arsitektur yang mengadopsi bentuk rumah adat Timor dengan sentuhan modern. Patung-patung ukiran kayu karya seniman lokal menghiasi interior gereja, menggambarkan kisah Injil dalam konteks budaya Timor. Paroki ini dikenal dengan kelompok-kelompok kategorial yang aktif, terutama kelompok katekese dan kaum muda yang bersemangat dalam mewartakan iman."
    ]
  },
  {
    id: 7,
    name: "Paroki Noetoko",
    image: "/assets/oelata.jpg",
    description: [
      "Paroki Noetoko adalah paroki yang melayani masyarakat Katolik di wilayah Noetoko dan sekitarnya sejak didirikan pada tahun 1990. Wilayah ini dikenal dengan tradisi musik dan paroki ini telah mengembangkan paduan suara dan kelompok musik liturgi yang terkenal di seluruh keuskupan. Nama Noetoko berasal dari kata lokal yang berarti 'sumber air', menggambarkan peran paroki sebagai sumber spiritual bagi masyarakat setempat.",
      "Bangunan gereja paroki Noetoko memiliki akustik yang sangat baik, dirancang khusus untuk mendukung tradisi musik yang kuat dalam komunitas ini. Paroki ini melayani sekitar 5.000 umat dan memiliki 12 stasi yang tersebar di daerah pedesaan. Program pastoral unggulan meliputi pengembangan seni budaya Kristiani dan pemberdayaan kaum muda melalui berbagai kegiatan seni dan olahraga."
    ]
  },
  {
    id: 8,
    name: "Paroki Oe Ekam",
    image: "/assets/tofa.webp",
    description: [
      "Paroki Oe Ekam didirikan pada tahun 1993 untuk melayani masyarakat Katolik di wilayah yang sebagian besar merupakan lahan pertanian dan perkebunan. Nama Oe Ekam diambil dari bahasa Timor yang berarti 'air yang tenang', menggambarkan spiritualitas dan kedamaian yang menjadi cita-cita komunitas paroki ini. Wilayah ini juga dikenal dengan tradisi pengobatan herbal yang masih dilestarikan oleh masyarakat.",
      "Gereja paroki Oe Ekam dibangun dengan konsep ramah lingkungan, menggunakan bahan-bahan lokal dan dirancang untuk memaksimalkan ventilasi alami. Paroki ini melayani sekitar 3.800 umat yang tersebar di berbagai desa terpencil. Program pastoral paroki berfokus pada pelestarian lingkungan dan pemberdayaan masyarakat melalui pertanian berkelanjutan, serta layanan kesehatan tradisional yang diintegrasikan dengan nilai-nilai Kristiani."
    ]
  },
  {
    id: 9,
    name: "Paroki Sta. Columba Putain",
    image: "/assets/tdm.jpg",
    description: [
      "Paroki Santa Columba Putain didirikan pada tahun 1988 dan dinamai menurut Santa Columba, seorang misionaris Irlandia yang terkenal dengan semangat misinya. Wilayah Putain memiliki tradisi kerajinan anyaman yang unik dan paroki ini berperan dalam melestarikan serta mengembangkan kerajinan tersebut sebagai sumber penghidupan masyarakat. Paroki ini terletak di daerah dengan kontur tanah berbukit dan dikelilingi hutan.",
      "Gereja Santa Columba memiliki desain yang terinspirasi dari tradisi Celtic, menghormati asal usul santo pelindungnya, namun tetap mengadopsi elemen-elemen budaya Timor. Paroki ini melayani sekitar 4.200 umat dan dikenal dengan programnya yang fokus pada pendidikan dan pemberdayaan perempuan melalui kelompok-kelompok kerajinan yang didukung oleh paroki."
    ]
  },
  {
    id: 10,
    name: "Paroki Sta. Maria Dari Gunung Karmel Tumu",
    image: "/assets/Katedral.jpg",
    description: [
      "Paroki Santa Maria Dari Gunung Karmel Tumu didirikan pada tahun 1996 dan merupakan salah satu paroki termuda di wilayah TTS. Nama paroki mengacu pada penampakan Bunda Maria di Gunung Karmel, menekankan spiritualitas Karmelit yang berfokus pada kontemplasi dan doa. Wilayah Tumu memiliki pemandangan alam yang indah dengan bukit-bukit hijau yang menjadi inspirasi devosi kepada Bunda Maria dari Gunung Karmel.",
      "Gereja paroki ini memiliki desain modern dengan altar yang menghadap ke jendela besar yang memperlihatkan pemandangan alam sekitar, menciptakan pengalaman liturgi yang kontemplatif. Paroki Santa Maria Dari Gunung Karmel melayani sekitar 3.500 umat dan memiliki kelompok doa Karmelit yang aktif. Program pastoral paroki berfokus pada spiritualitas kontemplatif dan keterlibatan sosial, termasuk program literasi untuk masyarakat pedesaan."
    ]
  }
];

const DetailTts = () => {
  // Menggunakan useParams untuk mendapatkan id paroki dari URL
  const { id } = useParams();
  
  // Mencari paroki berdasarkan id
  const paroki = parokiData.find(p => p.id === parseInt(id)) || parokiData[0];
  
  return (
    <div className="tts-detail-paroki-page">
      <main className="tts-detail-paroki-content">
        <div className="tts-detail-paroki-container">
          <h1 className="tts-detail-paroki-title">{paroki.name}</h1>

          <div className="tts-detail-paroki-card">
            <div className="tts-detail-info-section">
              <div className="tts-detail-info-text">
                {paroki.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="tts-detail-info-image">
                <img src={paroki.image} alt={paroki.name} />
              </div>
            </div>

            <div className="tts-detail-mass-section">
              <h2 className="tts-detail-mass-title">Jadwal Misa Harian dan Mingguan</h2>
              <div className="tts-detail-mass-grid">
                <div className="tts-detail-mass-card">
                  <div className="tts-detail-mass-card-title">Misa Harian</div>
                  <div className="tts-detail-mass-table">
                    <div className="tts-detail-mass-row">
                      <span>Senin - Jumat</span>
                      <span>06.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span>Sabtu</span>
                      <span>06.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tts-detail-mass-card">
                  <div className="tts-detail-mass-card-title">Misa Mingguan</div>
                  <div className="tts-detail-mass-table">
                    <div className="tts-detail-mass-row">
                      <span>Sabtu</span>
                      <span>16.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span>Minggu</span>
                      <span>06.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>08.30</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>11.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>16.30</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>19.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tts-detail-mass-card">
                  <div className="tts-detail-mass-card-title">Jumat Pertama</div>
                  <div className="tts-detail-mass-table">
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>06.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>12.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="tts-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="tts-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailTts;