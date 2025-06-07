import React from "react";
import { useParams } from "react-router-dom";
import "./DetailKabupaten.css";

// Data paroki lengkap untuk Kabupaten Kupang
const parokiData = [
  {
    id: 1,
    name: "Paroki St. Simon Petrus Tarus",
    image: "/assets/Katedral.jpg",
    description: [
      "Paroki Santo Simon Petrus Tarus merupakan salah satu paroki tertua di Kabupaten Kupang. Didirikan pada tahun 1965, paroki ini melayani umat Katolik di wilayah Tarus dan sekitarnya. Nama paroki diambil dari Rasul Simon Petrus yang dipilih Yesus sebagai batu karang untuk mendirikan Gereja.",
      "Dengan bangunan gereja yang memiliki arsitektur yang memadukan gaya modern dan lokal Timor, Paroki St. Simon Petrus Tarus menjadi pusat kegiatan pastoral yang penting di kawasan tersebut. Paroki ini melayani sekitar 5.000 umat dan memiliki beberapa stasi yang tersebar di desa-desa sekitar wilayah Tarus."
    ]
  },
  {
    id: 2,
    name: "Paroki St. Petrus Pariti - Sulamu",
    image: "/assets/Assumpta.jpg",
    description: [
      "Paroki Santo Petrus Pariti - Sulamu terletak di wilayah pesisir Kabupaten Kupang. Paroki yang didirikan tahun 1975 ini melayani komunitas Katolik yang sebagian besar berprofesi sebagai nelayan dan petani garam. Gereja di paroki ini memiliki pemandangan indah menghadap ke laut Timor.",
      "Karya pastoral paroki St. Petrus Pariti - Sulamu banyak berkaitan dengan pelestarian lingkungan pesisir dan pemberdayaan ekonomi masyarakat nelayan. Paroki ini juga dikenal dengan tradisi perayaan Pesta Santo Pelindung yang unik, menggabungkan unsur liturgi Katolik dengan kearifan lokal masyarakat pesisir."
    ]
  },
  {
    id: 3,
    name: "Paroki St. Yohanes Pemandi Buraen",
    image: "/assets/Naikoten.jpg",
    description: [
      "Paroki Santo Yohanes Pemandi Buraen berlokasi di dataran tinggi Kabupaten Kupang. Didirikan pada tahun 1980, paroki ini mengambil nama Santo Yohanes Pemandi yang merupakan nabi yang membaptis Yesus di Sungai Yordan.",
      "Dengan lingkungan alam yang asri dan sejuk, Paroki St. Yohanes Pemandi Buraen memiliki komunitas yang erat dan aktif dalam kegiatan gerejawi. Paroki ini dikenal dengan program-program katekese yang kuat dan kelompok-kelompok kategorial yang berkembang dengan baik. Setiap tahun, paroki ini mengadakan ziarah ke mata air suci di kawasan Buraen yang diyakini memiliki makna spiritual bagi umat setempat."
    ]
  },
  {
    id: 4,
    name: "Paroki Sta. Maria Fatima Taklale",
    image: "/assets/penfui.webp",
    description: [
      "Paroki Santa Maria Fatima Taklale didirikan pada tahun 1983 untuk melayani umat Katolik di wilayah Taklale dan sekitarnya. Paroki ini mengambil nama dari penampakan Bunda Maria di Fatima, Portugal yang sangat dihormati oleh umat Katolik di seluruh dunia.",
      "Bangunan gereja paroki ini memiliki patung Bunda Maria Fatima yang menjadi pusat devosi bagi umat. Paroki St. Maria Fatima Taklale dikenal dengan kegiatan doa rosario yang rutin dan aktif melaksanakan novena kepada Bunda Maria setiap bulan Mei dan Oktober. Komunitas paroki ini juga dikenal dengan solidaritas sosial yang tinggi, terutama dalam membantu keluarga kurang mampu di wilayahnya."
    ]
  },
  {
    id: 5,
    name: "Paroki Sta. Helena - Lili Camplonga",
    image: "/assets/sikumana.webp",
    description: [
      "Paroki Santa Helena - Lili Camplonga merupakan paroki yang berdiri pada tahun 1987 di wilayah Lili Camplonga, Kabupaten Kupang. Paroki ini mengambil nama Santa Helena, ibu dari Kaisar Konstantinus yang menemukan salib sejati tempat Yesus disalibkan.",
      "Paroki ini memiliki komunitas yang unik dengan percampuran budaya lokal yang kaya. Arsitektur gereja Santa Helena menampilkan elemen-elemen budaya Timor yang dipadukan dengan simbol-simbol kekristenan. Program pastoral paroki ini berfokus pada penguatan nilai-nilai keluarga Kristiani dan pelestarian budaya lokal dalam konteks iman Katolik."
    ]
  },
  {
    id: 6,
    name: "Paroki St. Stefanus Noehaen",
    image: "/assets/asisi.jpg",
    description: [
      "Paroki Santo Stefanus Noehaen didirikan pada awal 1990-an dan melayani umat Katolik di wilayah Noehaen dan sekitarnya. Paroki ini mengambil nama Santo Stefanus, martir pertama dalam Gereja Katolik yang hidupnya dikenang karena keberaniannya mewartakan iman.",
      "Komunitas paroki St. Stefanus Noehaen terkenal dengan semangat misioner yang kuat. Program-program pastoral paroki ini meliputi pendampingan kaum muda, pembinaan keluarga, dan kegiatan amal untuk membantu anggota masyarakat yang membutuhkan. Paroki ini juga memiliki kelompok liturgi yang aktif dalam mengembangkan nyanyian liturgi dengan sentuhan budaya lokal."
    ]
  },
  {
    id: 7,
    name: "Paroki Sta. Maria Bunda Orang Miskin Bunda Noelmina",
    image: "/assets/oelata.jpg",
    description: [
      "Paroki Santa Maria Bunda Orang Miskin Bunda Noelmina didirikan sekitar tahun 1995 di kawasan Noelmina. Nama paroki ini mengandung makna khusus yang menggambarkan peran Bunda Maria sebagai pelindung dan penghibur bagi mereka yang kekurangan dan menderita.",
      "Paroki ini memiliki fokus pastoral pada kepedulian kepada masyarakat miskin dan terpinggirkan. Berbagai program karitatif dan pemberdayaan ekonomi menjadi ciri khas dari paroki ini. Gereja St. Maria Bunda Orang Miskin memiliki desain sederhana namun indah, mencerminkan semangat kesederhanaan dan solidaritas yang menjadi nilai utama komunitas ini."
    ]
  },
  {
    id: 8,
    name: "Paroki St. Stefanus Naikliu",
    image: "/assets/tofa.webp",
    description: [
      "Paroki Santo Stefanus Naikliu berlokasi di wilayah pesisir utara Kabupaten Kupang. Didirikan pada tahun 1998, paroki ini melayani komunitas Katolik yang mayoritas hidup dari hasil laut dan pertanian. Seperti Paroki St. Stefanus Noehaen, paroki ini juga mengambil nama dari Santo Stefanus, martir pertama dalam sejarah Gereja.",
      "Meski memiliki nama santo pelindung yang sama dengan Paroki St. Stefanus Noehaen, paroki ini memiliki karakteristik yang berbeda karena konteks masyarakatnya yang hidup di pesisir. Program pastoral di Paroki St. Stefanus Naikliu banyak berkaitan dengan pelestarian lingkungan laut dan pemberdayaan nelayan. Gereja paroki ini dibangun dengan arsitektur yang mencerminkan budaya maritim masyarakat setempat."
    ]
  },
  {
    id: 9,
    name: "Paroki St. Petrus Rasul TDM",
    image: "/assets/tdm.jpg",
    description: [
      "Paroki Santo Petrus Rasul TDM adalah paroki yang melayani umat Katolik di kawasan TDM (Taman Dharma Mulyawan) Kabupaten Kupang. Paroki yang didirikan pada awal tahun 2000-an ini mengambil inspirasi dari kepemimpinan Santo Petrus sebagai rasul utama yang dipilih Yesus.",
      "Sebagai paroki yang relatif baru, Santo Petrus Rasul TDM terus berkembang pesat dengan berbagai kegiatan pastoral yang inovatif. Komunitas paroki ini dikenal aktif dalam dialog antariman dan kegiatan sosial yang melibatkan masyarakat lintas agama. Bangunan gereja paroki ini menampilkan desain kontemporer yang tetap menghormati elemen-elemen budaya lokal Timor."
    ]
  },
  {
    id: 10,
    name: "Paroki Sta. Maria Mater Dei Oepoli",
    image: "/assets/Katedral.jpg",
    description: [
      "Paroki Santa Maria Mater Dei Oepoli didirikan pada tahun 2005 dan merupakan salah satu paroki termuda di Kabupaten Kupang. Nama paroki ini mengacu pada gelar Bunda Maria sebagai Bunda Allah (Mater Dei), yang memiliki makna teologis mendalam dalam tradisi Katolik.",
      "Sebagai paroki yang relatif baru, Santa Maria Mater Dei Oepoli memiliki semangat pembaharuan yang kuat dalam karya pastoralnya. Program-program paroki banyak berfokus pada formasi iman kaum muda dan pendampingan keluarga muda. Gereja paroki ini memiliki desain modern yang mencerminkan semangat Gereja yang terus berkembang dan beradaptasi dengan zaman tanpa kehilangan akar tradisinya."
    ]
  }
];

const DetailKabupaten = () => {
  // Menggunakan useParams untuk mendapatkan id paroki dari URL
  const { id } = useParams();
  
  // Mencari paroki berdasarkan id
  const paroki = parokiData.find(p => p.id === parseInt(id)) || parokiData[0];
  
  return (
    <div className="kabupaten-detail-paroki-page">
      <main className="kabupaten-detail-paroki-content">
        <div className="kabupaten-detail-paroki-container">
          <h1 className="kabupaten-detail-paroki-title">{paroki.name}</h1>
          
          <div className="kabupaten-detail-paroki-card">
            <div className="kabupaten-detail-info-section">
              <div className="kabupaten-detail-info-text">
                {paroki.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="kabupaten-detail-info-image">
                <img src={paroki.image} alt={paroki.name} />
              </div>
            </div>

            <div className="kabupaten-detail-mass-section">
              <h2 className="kabupaten-detail-mass-title">Jadwal Misa Harian dan Mingguan</h2>
              <div className="kabupaten-detail-mass-grid">
                <div className="kabupaten-detail-mass-card">
                  <div className="kabupaten-detail-mass-card-title">Misa Harian</div>
                  <div className="kabupaten-detail-mass-table">
                    <div className="kabupaten-detail-mass-row">
                      <span>Senin - Jumat</span>
                      <span>06.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span>Sabtu</span>
                      <span>06.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="kabupaten-detail-mass-card">
                  <div className="kabupaten-detail-mass-card-title">Misa Mingguan</div>
                  <div className="kabupaten-detail-mass-table">
                    <div className="kabupaten-detail-mass-row">
                      <span>Sabtu</span>
                      <span>16.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span>Minggu</span>
                      <span>06.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>08.30</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>11.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>16.30</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>19.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="kabupaten-detail-mass-card">
                  <div className="kabupaten-detail-mass-card-title">Jumat Pertama</div>
                  <div className="kabupaten-detail-mass-table">
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>06.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>12.00</span>
                      <span className="kabupaten-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kabupaten-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="kabupaten-offline-online">
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

export default DetailKabupaten;