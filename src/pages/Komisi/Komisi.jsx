import React from 'react';
import { useParams } from 'react-router-dom';
import './Komisi.css';

// Data semua komisi
const komisiData = {
  liturgi: {
    title: 'Komisi Liturgi',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Liturgi</strong><br />
          Komisi Liturgi Keuskupan Agung Kupang adalah salah satu komisi yang bertugas membantu Uskup dalam mengatur, mengembangkan, dan membina kehidupan liturgi di seluruh paroki dan komunitas di wilayah Keuskupan Agung Kupang. Komisi ini berperan penting dalam memastikan bahwa perayaan liturgi, baik Ekaristi maupun sakramen-sakramen lainnya, berjalan sesuai dengan pedoman Gereja Katolik dan dapat membantu umat semakin menghayati iman melalui liturgi yang hidup dan bermakna.
        </p>
        <p>
          <strong>Visi</strong><br />
          Terwujudnya perayaan liturgi yang hidup, bermakna, dan membangun iman umat Katolik di Keuskupan Agung Kupang.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Meningkatkan pemahaman dan partisipasi umat dalam perayaan liturgi.</li>
            <li>Menyelenggarakan pelatihan dan pembinaan bagi petugas liturgi (lektor, pemazmur, organis, misdinar, dan lain-lain).</li>
            <li>Menyusun dan menyebarluaskan pedoman liturgi sesuai arahan Gereja Katolik.</li>
            <li>Mendampingi paroki dan komunitas dalam pengembangan musik liturgi dan tata perayaan liturgi.</li>
            <li>Mendorong inkulturasi liturgi yang sesuai dengan budaya lokal tanpa mengurangi makna sakral liturgi.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja Komisi Liturgi</strong><br />
          <ul>
            <li>Pembinaan rutin bagi petugas liturgi di tingkat paroki dan dekanat.</li>
            <li>Penyusunan buku panduan liturgi dan musik liturgi.</li>
            <li>Penyelenggaraan pelatihan dan workshop liturgi.</li>
            <li>Pendampingan perayaan liturgi khusus seperti Pekan Suci, Natal, dan Hari Raya Gereja lainnya.</li>
            <li>Pengembangan tim musik liturgi dan paduan suara di paroki-paroki.</li>
          </ul>
        </p>
        <p>
          <strong>Harapan</strong><br />
          Melalui Komisi Liturgi, diharapkan seluruh umat Katolik di Keuskupan Agung Kupang dapat semakin aktif, sadar, dan penuh sukacita dalam mengikuti perayaan liturgi, sehingga liturgi benar-benar menjadi sumber dan puncak kehidupan iman umat.
        </p>
      </>
    )
  },
  'kitab-suci': {
    title: 'Komisi Kitab Suci',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Kitab Suci</strong><br />
          Komisi Kitab Suci bertugas memperdalam pemahaman dan kecintaan umat terhadap Kitab Suci melalui berbagai program pembinaan, pendalaman, dan animasi Kitab Suci di lingkungan Keuskupan Agung Kupang.
        </p>
        <p>
          <strong>Visi</strong><br />
          Umat Katolik Keuskupan Agung Kupang semakin mencintai, memahami, dan menghayati Sabda Allah dalam kehidupan sehari-hari.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Mengadakan pendalaman Kitab Suci secara rutin di paroki dan lingkungan.</li>
            <li>Menyusun bahan-bahan animasi Kitab Suci untuk umat.</li>
            <li>Mengadakan lomba dan kegiatan kreatif seputar Kitab Suci.</li>
            <li>Membina kelompok-kelompok pendalaman Kitab Suci.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Bulan Kitab Suci Nasional (BKSN).</li>
            <li>Pembinaan fasilitator Kitab Suci.</li>
            <li>Penerbitan bahan renungan dan panduan Kitab Suci.</li>
          </ul>
        </p>
      </>
    )
  },
  pendidikan: {
    title: 'Komisi Pendidikan',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Pendidikan</strong><br />
          Komisi Pendidikan berperan dalam pengembangan pendidikan Katolik di Keuskupan Agung Kupang, baik formal maupun non-formal, serta membina tenaga pendidik dan peserta didik agar berkarakter Kristiani.
        </p>
        <p>
          <strong>Visi</strong><br />
          Terwujudnya pendidikan Katolik yang unggul, berkarakter, dan berlandaskan iman Kristiani.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Meningkatkan mutu pendidikan di sekolah-sekolah Katolik.</li>
            <li>Menyelenggarakan pelatihan untuk guru dan tenaga kependidikan.</li>
            <li>Mengembangkan pendidikan karakter dan iman di lingkungan sekolah.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Pembinaan rutin guru-guru Katolik.</li>
            <li>Penyusunan modul pendidikan karakter.</li>
            <li>Pelatihan kepemimpinan siswa Katolik.</li>
          </ul>
        </p>
      </>
    )
  },
  kateketik: {
    title: 'Komisi Kateketik',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Kateketik</strong><br />
          Komisi Kateketik bertugas membina dan mengembangkan pelayanan katekese di Keuskupan Agung Kupang, baik untuk anak-anak, remaja, maupun dewasa.
        </p>
        <p>
          <strong>Visi</strong><br />
          Umat Katolik semakin memahami dan menghayati ajaran iman Katolik.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Menyusun dan menyebarluaskan bahan katekese.</li>
            <li>Mengadakan pelatihan untuk para katekis.</li>
            <li>Mendampingi proses katekumenat di paroki-paroki.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Pembinaan katekis paroki dan lingkungan.</li>
            <li>Penyusunan modul katekese anak dan dewasa.</li>
            <li>Pendampingan katekumen dan calon baptis.</li>
          </ul>
        </p>
      </>
    )
  },
  pse: {
    title: 'Komisi PSE (Pengembangan Sosial Ekonomi)',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi PSE</strong><br />
          Komisi PSE bertugas mengembangkan karya sosial dan ekonomi umat, serta menumbuhkan semangat solidaritas dan kepedulian sosial di Keuskupan Agung Kupang.
        </p>
        <p>
          <strong>Visi</strong><br />
          Terwujudnya kesejahteraan dan keadilan sosial bagi seluruh umat.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Mengembangkan program pemberdayaan ekonomi umat.</li>
            <li>Mengadakan pelatihan keterampilan dan kewirausahaan.</li>
            <li>Menyalurkan bantuan sosial kepada yang membutuhkan.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Pembentukan kelompok usaha umat.</li>
            <li>Pembinaan koperasi dan usaha mikro.</li>
            <li>Program bantuan sosial dan kemanusiaan.</li>
          </ul>
        </p>
      </>
    )
  },
  hak: {
    title: 'Komisi HAK (Hubungan Antar Agama dan Kemasyarakatan)',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi HAK</strong><br />
          Komisi HAK bertugas membangun dialog, kerjasama, dan relasi harmonis dengan umat beragama lain serta masyarakat luas.
        </p>
        <p>
          <strong>Visi</strong><br />
          Terwujudnya kerukunan dan persaudaraan sejati antarumat beragama.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Mengadakan dialog lintas agama dan budaya.</li>
            <li>Mendorong keterlibatan umat dalam kegiatan sosial kemasyarakatan.</li>
            <li>Membangun jejaring kerjasama dengan organisasi keagamaan lain.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Dialog dan kunjungan antarumat beragama.</li>
            <li>Pembinaan kader dialog lintas agama.</li>
            <li>Kegiatan sosial bersama masyarakat lintas agama.</li>
          </ul>
        </p>
      </>
    )
  },
  kepemudaan: {
    title: 'Komisi Kepemudaan',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Kepemudaan</strong><br />
          Komisi Kepemudaan membina dan memberdayakan kaum muda Katolik agar menjadi pribadi yang beriman, kreatif, dan berperan aktif dalam Gereja dan masyarakat.
        </p>
        <p>
          <strong>Visi</strong><br />
          Kaum muda Katolik yang tangguh, beriman, dan berdaya saing.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Mengadakan pembinaan iman dan karakter bagi OMK.</li>
            <li>Menyelenggarakan kegiatan kreatif, rekreatif, dan sosial.</li>
            <li>Mendorong keterlibatan OMK dalam pelayanan Gereja.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Retret dan rekoleksi OMK.</li>
            <li>Pelatihan kepemimpinan dan keterampilan.</li>
            <li>Festival seni dan olahraga OMK.</li>
          </ul>
        </p>
      </>
    )
  },
  keluarga: {
    title: 'Komisi Keluarga',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Keluarga</strong><br />
          Komisi Keluarga membina keluarga Katolik agar menjadi Gereja rumah tangga yang kokoh dalam iman, kasih, dan pelayanan.
        </p>
        <p>
          <strong>Visi</strong><br />
          Terwujudnya keluarga Katolik yang harmonis, beriman, dan misioner.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Mengadakan pembinaan dan pendampingan keluarga.</li>
            <li>Menyusun bahan pastoral keluarga.</li>
            <li>Mendampingi keluarga dalam menghadapi tantangan zaman.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Pembinaan calon pengantin dan keluarga muda.</li>
            <li>Seminar dan rekoleksi keluarga.</li>
            <li>Pendampingan keluarga bermasalah.</li>
          </ul>
        </p>
      </>
    )
  },
  komsos: {
    title: 'Komisi Komsos (Komunikasi Sosial)',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Komsos</strong><br />
          Komisi Komsos bertugas mengembangkan komunikasi sosial di lingkungan Gereja, serta memanfaatkan media untuk pewartaan dan pelayanan.
        </p>
        <p>
          <strong>Visi</strong><br />
          Terwujudnya komunikasi yang efektif dan inspiratif di lingkungan Gereja.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Mengembangkan media komunikasi Gereja (website, media sosial, buletin, dll).</li>
            <li>Menyelenggarakan pelatihan jurnalistik dan media.</li>
            <li>Mendorong partisipasi umat dalam pewartaan digital.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Penerbitan buletin dan konten digital Gereja.</li>
            <li>Pelatihan media dan komunikasi untuk umat.</li>
            <li>Pengelolaan website dan media sosial Keuskupan.</li>
          </ul>
        </p>
      </>
    )
  },
  kpmp: {
    title: 'Komisi KPMP (Kerasulan Perempuan dan Masyarakat Pekerja)',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi KPMP</strong><br />
          Komisi KPMP membina dan memberdayakan perempuan serta masyarakat pekerja agar semakin berdaya dan berperan aktif dalam Gereja dan masyarakat.
        </p>
        <p>
          <strong>Visi</strong><br />
          Perempuan dan pekerja Katolik yang mandiri, beriman, dan berdaya saing.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Mengadakan pelatihan keterampilan dan pemberdayaan ekonomi.</li>
            <li>Mendampingi kelompok perempuan dan pekerja Katolik.</li>
            <li>Mendorong keterlibatan perempuan dalam pelayanan Gereja.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Pelatihan keterampilan dan kewirausahaan.</li>
            <li>Pembentukan kelompok bina perempuan dan pekerja.</li>
            <li>Pendampingan advokasi hak-hak pekerja.</li>
          </ul>
        </p>
      </>
    )
  },
  seminari: {
    title: 'Komisi Seminari',
    image: '/assets/komisi.jpg',
    content: (
      <>
        <p>
          <strong>Tentang Komisi Seminari</strong><br />
          Komisi Seminari bertugas membina calon imam di seminari agar tumbuh menjadi pribadi yang matang dalam iman, pengetahuan, dan pelayanan.
        </p>
        <p>
          <strong>Visi</strong><br />
          Terwujudnya calon imam yang tangguh, beriman, dan siap melayani.
        </p>
        <p>
          <strong>Misi</strong><br />
          <ul>
            <li>Menyelenggarakan pembinaan rohani, intelektual, dan pastoral bagi seminaris.</li>
            <li>Mendampingi proses panggilan dan formasi calon imam.</li>
            <li>Mengembangkan program pengembangan diri dan kepemimpinan seminaris.</li>
          </ul>
        </p>
        <p>
          <strong>Program Kerja</strong><br />
          <ul>
            <li>Pembinaan rutin seminaris.</li>
            <li>Retret dan rekoleksi calon imam.</li>
            <li>Pendampingan alumni seminari.</li>
          </ul>
        </p>
      </>
    )
  }
};

const Komisi = () => {
  const { namaKomisi } = useParams();
  const data = komisiData[namaKomisi];

  if (!data) {
    return (
      <div className="komisi-page">
        <main className="komisi-content">
          <div className="komisi-container">
            <h1 className="komisi-title">Komisi Tidak Ditemukan</h1>
            <p>Maaf, komisi yang Anda cari tidak tersedia.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="komisi-page">
      <main className="komisi-content">
        <div className="komisi-container">
          <h1 className="komisi-title">{data.title}</h1>
          <div className="komisi-text">
            <div className="komisi-image">
              <img src={data.image} alt={data.title} />
            </div>
            {data.content}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Komisi;