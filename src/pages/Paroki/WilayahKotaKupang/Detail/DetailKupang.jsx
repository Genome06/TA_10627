import React from "react";
import { useParams } from "react-router-dom";
import "./DetailKupang.css";

// Data paroki lengkap
const parokiData = [
  {
    id: 1,
    name: "Paroki Kristus Raja Katedral",
    image: "/assets/Katedral.jpg",
    description: [
      "Gereja Katedral Kupang atau yang bernama lengkap Paroki Katedral Kristus Raja Kupang adalah sebuah gereja katedral Katolik di Kupang, Nusa Tenggara Timur. Gereja Katedral Kupang didedikasikan untuk gelar Yesus, yaitu Kristus Raja. Katedral ini menjadi pusat kedudukan dan takhta bagi Uskup Agung Kupang, saat ini Mgr. Hironius Pakaenoni.",
      "Katedral ini merupakan salah satu gereja tertua di Kupang yang dibangun pada tahun 1950-an dan telah mengalami beberapa kali renovasi. Paroki ini melayani sekitar 10.000 umat di wilayah pusat kota Kupang dan memiliki berbagai kegiatan pelayanan pastoral yang aktif, termasuk kelompok doa, pelayanan liturgi, dan karya sosial untuk masyarakat sekitar."
    ]
  },
  {
    id: 2,
    name: "Paroki Sta. Maria Assumpta Kotabaru",
    image: "/assets/Assumpta.jpg",
    description: [
      "Paroki Santa Maria Assumpta Kotabaru merupakan salah satu paroki yang berada di bagian timur Kota Kupang. Didirikan pada tahun 1985, paroki ini melayani kebutuhan spiritual umat Katolik di wilayah Kotabaru dan sekitarnya.",
      "Gereja ini memiliki arsitektur yang memadukan unsur modern dengan sentuhan budaya lokal Timor. Paroki Santa Maria Assumpta Kotabaru dikenal dengan kegiatan-kegiatan pelayanan umat yang berfokus pada pemberdayaan keluarga Katolik dan pendampingan orang muda."
    ]
  },
  {
    id: 3,
    name: "Paroki St. Yoseph Naikoten",
    image: "/assets/Naikoten.jpg",
    description: [
      "Paroki Santo Yoseph Naikoten berlokasi di kawasan Naikoten, Kupang. Berdiri sejak tahun 1970, paroki ini telah menjadi pusat kehidupan iman bagi ribuan umat Katolik di wilayah Naikoten dan sekitarnya.",
      "Paroki ini memiliki ciri khas dengan berbagai kelompok kategorial yang aktif, terutama dalam bidang pendidikan iman dan kerasulan keluarga. Gereja Santo Yoseph Naikoten memiliki bangunan yang cukup luas dengan kapasitas hingga 800 orang jemaat."
    ]
  },
  {
    id: 4,
    name: "Paroki St. Yoseph Pekerja Penfui",
    image: "/assets/penfui.webp",
    description: [
      "Paroki Santo Yoseph Pekerja Penfui terletak di kawasan Penfui yang merupakan area dekat dengan Bandara El Tari Kupang. Didirikan pada awal tahun 1990-an, paroki ini melayani kebutuhan spiritual umat Katolik di wilayah Penfui dan sekitarnya.",
      "Paroki ini memiliki fokus pelayanan pada mahasiswa karena lokasinya yang dekat dengan beberapa perguruan tinggi. Program pastoral paroki ini banyak melibatkan kegiatan yang relevan untuk kaum muda dan profesional muda."
    ]
  },
  {
    id: 5,
    name: "Paroki Sta. Familia Sikumana",
    image: "/assets/sikumana.webp",
    description: [
      "Paroki Santa Familia Sikumana berada di kawasan Sikumana yang merupakan wilayah berkembang di bagian selatan Kota Kupang. Paroki yang didedikasikan untuk Keluarga Kudus ini didirikan pada tahun 1988.",
      "Gereja ini memiliki desain arsitektur yang sederhana namun elegan dengan kapasitas sekitar 700 jemaat. Paroki Santa Familia Sikumana dikenal dengan program-program pastoral yang menekankan pentingnya kehidupan keluarga Kristiani."
    ]
  },
  {
    id: 6,
    name: "Paroki St. Fransiskus Dari Asisi Kolhua",
    image: "/assets/asisi.jpg",
    description: [
      "Paroki Santo Fransiskus dari Asisi Kolhua berlokasi di wilayah Kolhua, bagian barat Kota Kupang. Didirikan sekitar tahun 1995, paroki ini terinspirasi oleh spiritualitas Santo Fransiskus yang mencintai alam dan sesama.",
      "Sebagai paroki yang relatif muda, Santo Fransiskus dari Asisi Kolhua memiliki komunitas yang dinamis dengan banyak keluarga muda. Kegiatan paroki ini sering kali termasuk program kepedulian lingkungan dan pelayanan sosial sebagai wujud spiritualitas Fransiskan."
    ]
  },
  {
    id: 7,
    name: "Paroki St. Gregorius Agung Oelata",
    image: "/assets/oelata.jpg",
    description: [
      "Paroki Santo Gregorius Agung Oelata terletak di kawasan Oelata di pinggiran Kota Kupang. Paroki yang didirikan pada awal tahun 2000-an ini mengambil santo pelindung Santo Gregorius Agung, seorang Paus dan Doktor Gereja.",
      "Meski tergolong paroki baru, Santo Gregorius Agung Oelata telah berkembang pesat dengan pertumbuhan umat yang signifikan dalam beberapa tahun terakhir. Paroki ini memiliki fokus pada pengembangan liturgi dan musik gerejawi."
    ]
  },
  {
    id: 8,
    name: "Paroki St. Matias Rasul Tofa",
    image: "/assets/tofa.webp",
    description: [
      "Paroki Santo Matias Rasul Tofa berada di kawasan Tofa, Kupang. Didirikan sekitar tahun 2005, paroki ini mengambil nama Santo Matias yang merupakan rasul pengganti Yudas Iskariot.",
      "Sebagai salah satu paroki termuda di Keuskupan Agung Kupang, Santo Matias Rasul Tofa memiliki bangunan gereja yang modern dengan arsitektur yang fungsional. Program pastoral paroki ini berfokus pada pembinaan iman dan penguatan kelompok basis gerejawi di wilayahnya."
    ]
  },
  {
    id: 9,
    name: "Paroki St. Petrus Rasul TDM",
    image: "/assets/tdm.jpg",
    description: [
      "Paroki Santo Petrus Rasul TDM (Taman Dharma Mulyawan) melayani umat Katolik di kawasan TDM Kupang. Didirikan pada tahun 1992, paroki ini mengambil nama Santo Petrus sebagai rasul utama yang dipilih Yesus untuk memimpin Gereja.",
      "Gereja Santo Petrus Rasul TDM memiliki bangunan dengan gaya arsitektur yang menggabungkan unsur tradisional dan modern. Paroki ini dikenal dengan kegiatannya yang inklusif dan melibatkan berbagai elemen masyarakat dalam kegiatan sosial dan pastoral."
    ]
  },
  {
    id: 10,
    name: "Paroki St. Paulus Noelbaki",
    image: "/assets/Katedral.jpg",
    description: [
      "Paroki Santo Paulus Noelbaki terletak di wilayah Noelbaki, sebuah daerah yang berada di pinggiran Kota Kupang. Didirikan pada tahun 1987, paroki ini dilindungi oleh Santo Paulus, rasul bangsa-bangsa.",
      "Gereja Santo Paulus Noelbaki melayani komunitas Katolik yang sebagian besar adalah petani dan nelayan. Program pastoral paroki ini banyak berkaitan dengan pemberdayaan ekonomi masyarakat dan pelestarian budaya lokal dalam konteks iman Katolik."
    ]
  },
  {
    id: 11,
    name: "Paroki St. Mikael Oesao",
    image: "/assets/asisi.jpg",
    description: [
      "Paroki Santo Mikael Oesao berada di wilayah Oesao yang merupakan perbatasan antara Kota Kupang dan Kabupaten Kupang. Didirikan pada pertengahan tahun 1990-an, paroki ini mengambil pelindung Malaikat Agung Mikael.",
      "Santo Mikael Oesao melayani komunitas Katolik yang tersebar di beberapa desa. Gereja ini memiliki desain sederhana namun kokoh, mencerminkan semangat perjuangan umat setempat. Program pastoral paroki ini menitikberatkan pada pendampingan keluarga dan katekese anak."
    ]
  },
  {
    id: 12,
    name: "Paroki Sta. Theresia Bonsu",
    image: "/assets/penfui.webp",
    description: [
      "Paroki Santa Theresia Bonsu berlokasi di kawasan Bonsu yang merupakan area berkembang di Kota Kupang. Didirikan pada tahun 2003, paroki ini mengambil nama Santa Theresia dari Lisieux atau dikenal juga sebagai Santa Theresia Kanak-kanak Yesus.",
      "Sebagai paroki yang relatif baru, Santa Theresia Bonsu memiliki semangat misioner yang kuat, terinspirasi oleh santo pelindungnya. Program pastoral paroki ini banyak berfokus pada pendampingan kaum muda dan kegiatan karitatif untuk masyarakat kurang mampu di sekitar wilayah paroki."
    ]
  }
];

const DetailKupang = () => {
  // Menggunakan useParams untuk mendapatkan id paroki dari URL
  const { id } = useParams();
  
  // Mencari paroki berdasarkan id
  const paroki = parokiData.find(p => p.id === parseInt(id)) || parokiData[0];
  
  return (
    <div className="detail-paroki-page">
      <main className="detail-paroki-content">
        <div className="detail-paroki-container">
          <h1 className="detail-paroki-title">{paroki.name}</h1>
          
          <div className="detail-paroki-card">
            <div className="detail-info-section">
              <div className="detail-info-text">
                {paroki.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="detail-info-image">
                <img src={paroki.image} alt={paroki.name} />
              </div>
            </div>

            <div className="detail-mass-section">
              <h2 className="detail-mass-title">Jadwal Misa Harian dan Mingguan</h2>
              <div className="detail-mass-grid">
                <div className="detail-mass-card">
                  <div className="detail-mass-card-title">Misa Harian</div>
                  <div className="detail-mass-table">
                    <div className="detail-mass-row">
                      <span>Senin - Jumat</span>
                      <span>06.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span>Sabtu</span>
                      <span>06.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="detail-mass-card">
                  <div className="detail-mass-card-title">Misa Mingguan</div>
                  <div className="detail-mass-table">
                    <div className="detail-mass-row">
                      <span>Sabtu</span>
                      <span>16.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span>Minggu</span>
                      <span>06.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>08.30</span>
                      <span className="offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>11.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>16.30</span>
                      <span className="offline-online">
                        <span>Offline</span>
                        <span>& Online</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>19.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="detail-mass-card">
                  <div className="detail-mass-card-title">Jumat Pertama</div>
                  <div className="detail-mass-table">
                    <div className="detail-mass-row">
                      <span></span>
                      <span>06.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>12.00</span>
                      <span className="offline-online">
                        <span>Offline</span>
                      </span>
                    </div>
                    <div className="detail-mass-row">
                      <span></span>
                      <span>18.00</span>
                      <span className="offline-online">
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

export default DetailKupang;