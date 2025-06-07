import React from "react";
import { useParams } from "react-router-dom";
import "./DetailKepulauan.css";

// Data paroki lengkap untuk wilayah Kepulauan
const parokiData = [
  {
    id: 1,
    name: "Paroki Yesus Gembala Baik Kalabahi",
    image: "/assets/Katedral.jpg",
    description: [
      "Paroki Yesus Gembala Baik Kalabahi berlokasi di Pulau Alor dan merupakan paroki tertua di kawasan tersebut. Didirikan pada tahun 1950 oleh misionaris SVD, paroki ini melayani umat Katolik di kota Kalabahi dan sekitarnya. Nama paroki mengambil citra Kristus sebagai Gembala yang Baik yang menjadi simbol pelayanan pastoral di tengah masyarakat kepulauan.",
      "Bangunan gereja paroki ini memiliki arsitektur yang memadukan gaya modern dengan unsur budaya Alor, terlihat dari ornamen dan ukiran khas yang menghiasi altar dan eksterior bangunan. Paroki Yesus Gembala Baik melayani sekitar 7.000 umat dengan beragam latar belakang etnis. Program pastoral unggulan paroki ini termasuk pemberdayaan masyarakat pesisir, pelayanan kesehatan, dan dialog antarbudaya yang menjembatani berbagai tradisi lokal di Alor."
    ]
  },
  {
    id: 2,
    name: "Paroki St. Yakobus Bukapiting",
    image: "/assets/Assumpta.jpg",
    description: [
      "Paroki Santo Yakobus Bukapiting terletak di kawasan pedalaman Pulau Alor dan didirikan pada tahun 1968. Mengambil nama Rasul Yakobus, paroki ini melayani umat Katolik yang sebagian besar berasal dari suku-suku pedalaman Alor. Geografis paroki ini berbukit-bukit dengan pemandangan alam yang indah, meskipun akses transportasi relatif menantang terutama di musim hujan.",
      "Gereja Santo Yakobus dibangun dengan arsitektur yang sederhana namun kokoh, mencerminkan semangat ketahanan dan keuletan masyarakat setempat. Paroki ini memiliki sekitar 4.500 umat yang tersebar di berbagai desa dan dikenal dengan tradisi musik liturgi yang kaya, menggabungkan alat musik tradisional Alor dalam perayaan Ekaristi. Program pastoral paroki berfokus pada pendidikan, pelestarian budaya lokal, dan pengembangan pertanian berkelanjutan di daerah pegunungan."
    ]
  },
  {
    id: 3,
    name: "Paroki Sabu",
    image: "/assets/Naikoten.jpg",
    description: [
      "Paroki Sabu melayani umat Katolik di Pulau Sabu dan pulau-pulau kecil di sekitarnya. Didirikan pada tahun 1972, paroki ini adalah hasil dari karya misionaris yang tekun mengembangkan iman di tengah masyarakat yang didominasi oleh kepercayaan tradisional Jingi Tiu. Pulau Sabu dikenal dengan kondisi geografis yang kering dan tantangan air bersih, yang juga menjadi perhatian khusus dalam pelayanan pastoral paroki.",
      "Bangunan gereja paroki Sabu memiliki desain yang beradaptasi dengan iklim lokal, dengan ventilasi alami dan atap tinggi untuk mengatasi udara panas. Paroki ini melayani sekitar 3.800 umat yang tersebar di berbagai desa. Program utama paroki meliputi pengadaan air bersih, pengembangan pendidikan melalui sekolah Katolik, dan inkulturasi iman dengan budaya Sabu yang kaya akan ritual dan tradisi tenun ikat yang terkenal."
    ]
  },
  {
    id: 4,
    name: "Paroki Kolongbuku - Moru",
    image: "/assets/penfui.webp",
    description: [
      "Paroki Kolongbuku - Moru berlokasi di wilayah pesisir barat Pulau Flores dan didirikan pada tahun 1976. Paroki ini melayani masyarakat nelayan dan petani di kawasan yang terkenal dengan keanekaragaman hayati lautnya. Nama Kolongbuku - Moru berasal dari dua desa utama yang menjadi pusat aktivitas pastoral di wilayah tersebut.",
      "Gereja paroki Kolongbuku - Moru dibangun menghadap ke laut, mencerminkan hubungan erat antara iman dan kehidupan maritim masyarakat setempat. Dengan sekitar 5.200 umat, paroki ini memiliki program pastoral yang berfokus pada pelestarian lingkungan laut, pemberdayaan nelayan, dan pengembangan ekonomi berbasis hasil laut. Paroki ini juga dikenal dengan tradisi prosesi perahu saat merayakan pesta santo pelindung, yang menggabungkan unsur liturgi Katolik dengan kearifan lokal masyarakat pesisir."
    ]
  },
  {
    id: 5,
    name: "Paroki Pantar",
    image: "/assets/sikumana.webp",
    description: [
      "Paroki Pantar melayani umat Katolik di Pulau Pantar, sebuah pulau vulkanik yang terletak di timur Pulau Alor. Didirikan pada tahun 1980, paroki ini berkembang di tengah masyarakat multi-etnis dan multi-agama. Wilayah Pantar terkenal dengan keindahan alamnya yang meliputi gunung berapi aktif, pantai-pantai eksotis, dan terumbu karang yang indah.",
      "Gereja paroki Pantar memiliki desain arsitektur yang menggabungkan elemen tradisional Pantar dengan nilai-nilai Katolik universal. Paroki ini melayani sekitar 4.000 umat yang tersebar di berbagai komunitas basis. Program pastoral unggulan meliputi dialog antariman, pelestarian lingkungan vulkanik yang unik, dan pemberdayaan perempuan melalui kelompok-kelompok kerajinan tangan. Paroki ini juga aktif dalam mengembangkan liturgi inkulturasi yang mengadopsi kekayaan budaya dan bahasa lokal Pantar."
    ]
  },
  {
    id: 6,
    name: "Paroki St. Petrus Pantai Baru",
    image: "/assets/asisi.jpg",
    description: [
      "Paroki Santo Petrus Pantai Baru terletak di sebuah pulau kecil di gugusan Kepulauan Rote-Ndao. Didirikan pada tahun 1985, paroki ini dinamai menurut Santo Petrus yang dikenal sebagai nelayan, sesuai dengan karakteristik masyarakat setempat yang hidup dari hasil laut. Nama 'Pantai Baru' mengacu pada lokasi gereja yang dibangun di kawasan reklamasi pantai yang relatif baru dikembangkan.",
      "Bangunan gereja paroki Santo Petrus Pantai Baru memiliki desain unik menyerupai perahu, melambangkan perahu Petrus dan juga kehidupan masyarakat nelayan. Paroki ini melayani sekitar 3.500 umat dan memiliki tantangan khusus dalam transportasi antar pulau untuk pelayanan pastoral. Program paroki berfokus pada pemberdayaan ekonomi kelautan berkelanjutan, pelestarian budaya maritim, dan pengembangan pendidikan di daerah terpencil melalui asrama dan sekolah Katolik."
    ]
  },
  {
    id: 7,
    name: "Paroki Kristoforus Baa",
    image: "/assets/oelata.jpg",
    description: [
      "Paroki Kristoforus Baa berlokasi di Pulau Rote, tepatnya di kota Baa yang merupakan ibukota Kabupaten Rote Ndao. Didirikan pada tahun 1988, paroki ini mengambil nama Santo Kristoforus, pelindung para pelancong, yang relevan dengan masyarakat Rote yang dikenal sebagai pelaut ulung. Pulau Rote merupakan pulau paling selatan di Indonesia dan terkenal dengan alat musik sasando dan topi khas ti'i langga.",
      "Gereja Paroki Kristoforus Baa memadukan arsitektur modern dengan elemen-elemen budaya Rote, seperti atap yang menyerupai topi ti'i langga. Paroki ini melayani sekitar 4.800 umat dengan tantangan geografis berupa jarak antar stasi yang cukup jauh. Program pastoral unggulan paroki meliputi pelestarian musik sasando dalam liturgi, pengembangan pariwisata rohani, dan pembinaan keluarga Katolik di tengah arus modernisasi yang mulai mempengaruhi kehidupan tradisional masyarakat Rote."
    ]
  }
];

const DetailKepulauan = () => {
  // Menggunakan useParams untuk mendapatkan id paroki dari URL
  const { id } = useParams();
  
  // Mencari paroki berdasarkan id
  const paroki = parokiData.find(p => p.id === parseInt(id)) || parokiData[0];
  
  return (
    <div className="kepulauan-detail-paroki-page">
      <main className="kepulauan-detail-paroki-content">
        <div className="kepulauan-detail-paroki-container">
          <h1 className="kepulauan-detail-paroki-title">{paroki.name}</h1>

          <div className="kepulauan-detail-paroki-card">
            <div className="kepulauan-detail-info-section">
              <div className="kepulauan-detail-info-text">
                {paroki.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="kepulauan-detail-info-image">
                <img src={paroki.image} alt={paroki.name} />
              </div>
            </div>

            <div className="kepulauan-detail-mass-section">
              <h2 className="kepulauan-detail-mass-title">Jadwal Misa Harian dan Mingguan</h2>
              <div className="kepulauan-detail-mass-grid">
                <div className="kepulauan-detail-mass-card">
                  <div className="kepulauan-detail-mass-card-title">Misa Harian</div>
                  <div className="kepulauan-detail-mass-table">
                    <div className="kepulauan-detail-mass-row">
                      <span>Senin - Jumat</span>
                      <span>06.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span>Sabtu</span>
                      <span>06.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="kepulauan-detail-mass-card">
                  <div className="kepulauan-detail-mass-card-title">Misa Mingguan</div>
                  <div className="kepulauan-detail-mass-table">
                    <div className="kepulauan-detail-mass-row">
                      <span>Sabtu</span>
                      <span>16.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span>Minggu</span>
                      <span>06.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>08.30</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>11.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>16.30</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>19.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="kepulauan-detail-mass-card">
                  <div className="kepulauan-detail-mass-card-title">Jumat Pertama</div>
                  <div className="kepulauan-detail-mass-table">
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>06.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>12.00</span>
                      <span className="kepulauan-offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="kepulauan-detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="kepulauan-offline-online">
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

export default DetailKepulauan;