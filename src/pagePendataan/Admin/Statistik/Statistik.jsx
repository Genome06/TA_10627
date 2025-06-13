import React, { useState, useEffect } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import './Statistik.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Statistik = () => {
  // State untuk filter
  const [selectedParoki, setSelectedParoki] = useState([]);
  const [selectedStatistik, setSelectedStatistik] = useState('Total Umat');
  const [tempSelectedParoki, setTempSelectedParoki] = useState([]);
  const [tempSelectedStatistik, setTempSelectedStatistik] = useState('Total Umat');
  const [openFilter, setOpenFilter] = useState(null);

  // Data paroki
  const parokiOptions = ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'];
  
  // Jenis statistik yang tersedia (diperbanyak dan lebih detail)
  const statistikOptions = [
    'Total Umat',
    'Total Umat Berdasarkan Gender',
    'Total Umat Laki-Laki',
    'Total Umat Perempuan',
    'Total Umat Yang Sudah Dibaptis',
    'Total Umat Laki-Laki Yang Sudah Dibaptis',
    'Total Umat Perempuan Yang Sudah Dibaptis',
    'Total Umat Yang Sudah Menerima Ekaristi',
    'Total Umat Laki-Laki Yang Sudah Menerima Ekaristi',
    'Total Umat Perempuan Yang Sudah Menerima Ekaristi',
    'Total Umat Yang Sudah Menerima Krisma',
    'Total Umat Laki-Laki Yang Sudah Menerima Krisma',
    'Total Umat Perempuan Yang Sudah Menerima Krisma',
    'Total Umat Yang Sudah Menikah',
    'Total Umat Laki-Laki Yang Sudah Menikah',
    'Total Umat Perempuan Yang Sudah Menikah',
    'Total Umat Berdasarkan Status Pernikahan',
    'Total Umat Berdasarkan Pekerjaan',
    'Total Umat Laki-Laki Berdasarkan Pekerjaan',
    'Total Umat Perempuan Berdasarkan Pekerjaan',
    'Total Umat Berdasarkan Kelompok Umur',
    'Total Umat Laki-Laki Berdasarkan Kelompok Umur',
    'Total Umat Perempuan Berdasarkan Kelompok Umur',
    'Total Umat Berdasarkan Pendidikan',
    'Total Umat Laki-Laki Berdasarkan Pendidikan',
    'Total Umat Perempuan Berdasarkan Pendidikan',
    'Total Komunitas',
    'Total Anggota Komunitas',
    'Total Anggota Komunitas Laki-Laki',
    'Total Anggota Komunitas Perempuan',
    'Total Tempat Ziarah',
    'Total Keluarga Yang Aktif',
    'Total Migrasi Umat (Masuk/Keluar)',
    'Total Umat Yang Meninggal',
    'Total Umat Laki-Laki Yang Meninggal',
    'Total Umat Perempuan Yang Meninggal'
  ];

  // Helper function untuk mendapatkan total berdasarkan filter paroki
  function getFilteredTotal() {
    if (selectedParoki.length === 0) {
      return 1250; // Total semua paroki
    }
    
    const parokiTotals = {
      'Paroki Babarsari': 450,
      'Paroki Baciro': 380,
      'Paroki Pangkalan': 420
    };
    
    return selectedParoki.reduce((total, paroki) => {
      return total + (parokiTotals[paroki] || 0);
    }, 0);
  }

  function getFilteredKomunitasTotal() {
    if (selectedParoki.length === 0) {
      return 25;
    }
    
    const komunitasTotals = {
      'Paroki Babarsari': 8,
      'Paroki Baciro': 7,
      'Paroki Pangkalan': 10
    };
    
    return selectedParoki.reduce((total, paroki) => {
      return total + (komunitasTotals[paroki] || 0);
    }, 0);
  }

  function getFilteredTempatZiarahTotal() {
    if (selectedParoki.length === 0) {
      return 15;
    }
    
    const tempatZiarahTotals = {
      'Paroki Babarsari': 5,
      'Paroki Baciro': 4,
      'Paroki Pangkalan': 6
    };
    
    return selectedParoki.reduce((total, paroki) => {
      return total + (tempatZiarahTotals[paroki] || 0);
    }, 0);
  }

  function getFilteredMigrasiTotal() {
    if (selectedParoki.length === 0) {
      return 45;
    }
    
    const migrasiTotals = {
      'Paroki Babarsari': 15,
      'Paroki Baciro': 12,
      'Paroki Pangkalan': 18
    };
    
    return selectedParoki.reduce((total, paroki) => {
      return total + (migrasiTotals[paroki] || 0);
    }, 0);
  }

  // Fungsi getTotalKK yang terpisah dan tidak bergantung pada jenis statistik
  function getTotalKK() {
    if (selectedParoki.length === 0) {
      // Jika tidak ada filter paroki, return total KK dari semua paroki
      return Math.floor(1250 / 4); // 312 KK total
    }
    
    // Jika ada filter paroki, hitung total KK dari paroki yang dipilih
    const parokiTotals = {
      'Paroki Babarsari': 450,
      'Paroki Baciro': 380,
      'Paroki Pangkalan': 420
    };
    
    const totalUmatFromSelectedParoki = selectedParoki.reduce((total, paroki) => {
      return total + (parokiTotals[paroki] || 0);
    }, 0);
    
    return Math.floor(totalUmatFromSelectedParoki / 4);
  }

  // Chart data functions
  function getUmatChart() {
    if (selectedParoki.length === 1) {
      const parokiTotals = {
        'Paroki Babarsari': 450,
        'Paroki Baciro': 380,
        'Paroki Pangkalan': 420
      };
      
      return {
        labels: [selectedParoki[0]],
        datasets: [{
          label: 'Total Umat',
          data: [parokiTotals[selectedParoki[0]]],
          backgroundColor: ['rgba(246, 173, 85, 0.6)'],
          borderColor: ['#F6AD55'],
          borderWidth: 2
        }]
      };
    } else if (selectedParoki.length > 1) {
      const parokiTotals = {
        'Paroki Babarsari': 450,
        'Paroki Baciro': 380,
        'Paroki Pangkalan': 420
      };
      
      const colors = [
        'rgba(246, 173, 85, 0.6)',
        'rgba(147, 197, 253, 0.6)',
        'rgba(167, 243, 208, 0.6)'
      ];
      
      const borderColors = ['#F6AD55', '#3B82F6', '#10B981'];
      
      return {
        labels: selectedParoki,
        datasets: [{
          label: 'Total Umat',
          data: selectedParoki.map(paroki => parokiTotals[paroki]),
          backgroundColor: selectedParoki.map((_, index) => colors[index % colors.length]),
          borderColor: selectedParoki.map((_, index) => borderColors[index % borderColors.length]),
          borderWidth: 2
        }]
      };
    }

    return {
      labels: ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Total Umat',
        data: [450, 380, 420],
        backgroundColor: [
          'rgba(246, 173, 85, 0.6)',
          'rgba(147, 197, 253, 0.6)',
          'rgba(167, 243, 208, 0.6)'
        ],
        borderColor: ['#F6AD55', '#3B82F6', '#10B981'],
        borderWidth: 2
      }]
    };
  }

  // New chart functions for gender-specific data
  function getUmatLakiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Umat Laki-Laki',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 234, 'Paroki Baciro': 198, 'Paroki Pangkalan': 218 };
            return totals[paroki] || 0;
          }) :
          [234, 198, 218],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getUmatPerempuanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Umat Perempuan',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 216, 'Paroki Baciro': 182, 'Paroki Pangkalan': 202 };
            return totals[paroki] || 0;
          }) :
          [216, 182, 202],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getBaptisLakiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Laki-Laki Sudah Baptis',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 222, 'Paroki Baciro': 188, 'Paroki Pangkalan': 207 };
            return totals[paroki] || 0;
          }) :
          [222, 188, 207],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getBaptisPerempuanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Perempuan Sudah Baptis',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 205, 'Paroki Baciro': 173, 'Paroki Pangkalan': 192 };
            return totals[paroki] || 0;
          }) :
          [205, 173, 192],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  // Additional chart functions for other gender-specific statistics
  function getEkaristiLakiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Laki-Laki Sudah Ekaristi',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 199, 'Paroki Baciro': 168, 'Paroki Pangkalan': 185 };
            return totals[paroki] || 0;
          }) :
          [199, 168, 185],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getEkaristiPerempuanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Perempuan Sudah Ekaristi',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 184, 'Paroki Baciro': 155, 'Paroki Pangkalan': 172 };
            return totals[paroki] || 0;
          }) :
          [184, 155, 172],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getKrismaLakiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Laki-Laki Sudah Krisma',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 176, 'Paroki Baciro': 148, 'Paroki Pangkalan': 164 };
            return totals[paroki] || 0;
          }) :
          [176, 148, 164],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getKrismaPerempuanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Perempuan Sudah Krisma',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 162, 'Paroki Baciro': 137, 'Paroki Pangkalan': 151 };
            return totals[paroki] || 0;
          }) :
          [162, 137, 151],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getPernikahanLakiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Laki-Laki Sudah Menikah',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 140, 'Paroki Baciro': 118, 'Paroki Pangkalan': 131 };
            return totals[paroki] || 0;
          }) :
          [140, 118, 131],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getPernikahanPerempuanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Perempuan Sudah Menikah',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 130, 'Paroki Baciro': 110, 'Paroki Pangkalan': 121 };
            return totals[paroki] || 0;
          }) :
          [130, 110, 121],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getPekerjaanLakiChart() {
    return {
      labels: ['PNS', 'Wiraswasta', 'Guru', 'Dokter', 'Lainnya'],
      datasets: [{
        label: 'Laki-Laki',
        data: [
          Math.floor(getFilteredTotal() * 0.52 * 0.25),
          Math.floor(getFilteredTotal() * 0.52 * 0.30),
          Math.floor(getFilteredTotal() * 0.52 * 0.20),
          Math.floor(getFilteredTotal() * 0.52 * 0.15),
          Math.floor(getFilteredTotal() * 0.52 * 0.10)
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getPekerjaanPerempuanChart() {
    return {
      labels: ['PNS', 'Wiraswasta', 'Guru', 'Dokter', 'Lainnya'],
      datasets: [{
        label: 'Perempuan',
        data: [
          Math.floor(getFilteredTotal() * 0.48 * 0.25),
          Math.floor(getFilteredTotal() * 0.48 * 0.30),
          Math.floor(getFilteredTotal() * 0.48 * 0.20),
          Math.floor(getFilteredTotal() * 0.48 * 0.15),
          Math.floor(getFilteredTotal() * 0.48 * 0.10)
        ],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getKelompokUmurLakiChart() {
    return {
      labels: ['0-17 tahun', '18-30 tahun', '31-50 tahun', '51-65 tahun', '65+ tahun'],
      datasets: [{
        label: 'Laki-Laki',
        data: [
          Math.floor(getFilteredTotal() * 0.52 * 0.20),
          Math.floor(getFilteredTotal() * 0.52 * 0.25),
          Math.floor(getFilteredTotal() * 0.52 * 0.30),
          Math.floor(getFilteredTotal() * 0.52 * 0.15),
          Math.floor(getFilteredTotal() * 0.52 * 0.10)
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getKelompokUmurPerempuanChart() {
    return {
      labels: ['0-17 tahun', '18-30 tahun', '31-50 tahun', '51-65 tahun', '65+ tahun'],
      datasets: [{
        label: 'Perempuan',
        data: [
          Math.floor(getFilteredTotal() * 0.48 * 0.20),
          Math.floor(getFilteredTotal() * 0.48 * 0.25),
          Math.floor(getFilteredTotal() * 0.48 * 0.30),
          Math.floor(getFilteredTotal() * 0.48 * 0.15),
          Math.floor(getFilteredTotal() * 0.48 * 0.10)
        ],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getPendidikanChart() {
    return {
      labels: ['SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3'],
      datasets: [{
        label: 'Jumlah Umat',
        data: [
          Math.floor(getFilteredTotal() * 0.10),
          Math.floor(getFilteredTotal() * 0.15),
          Math.floor(getFilteredTotal() * 0.25),
          Math.floor(getFilteredTotal() * 0.15),
          Math.floor(getFilteredTotal() * 0.25),
          Math.floor(getFilteredTotal() * 0.08),
          Math.floor(getFilteredTotal() * 0.02)
        ],
        backgroundColor: [
          'rgba(239, 68, 68, 0.6)',
          'rgba(245, 158, 11, 0.6)',
          'rgba(34, 197, 94, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(168, 85, 247, 0.6)',
          'rgba(236, 72, 153, 0.6)',
          'rgba(156, 163, 175, 0.6)'
        ],
        borderColor: [
          '#EF4444', '#F59E0B', '#22C55E', '#3B82F6', '#A855F7', '#EC4899', '#9CA3AF'
        ],
        borderWidth: 2
      }]
    };
  }

  function getPendidikanLakiChart() {
    return {
      labels: ['SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3'],
      datasets: [{
        label: 'Laki-Laki',
        data: [
          Math.floor(getFilteredTotal() * 0.52 * 0.10),
          Math.floor(getFilteredTotal() * 0.52 * 0.15),
          Math.floor(getFilteredTotal() * 0.52 * 0.25),
          Math.floor(getFilteredTotal() * 0.52 * 0.15),
          Math.floor(getFilteredTotal() * 0.52 * 0.25),
          Math.floor(getFilteredTotal() * 0.52 * 0.08),
          Math.floor(getFilteredTotal() * 0.52 * 0.02)
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getPendidikanPerempuanChart() {
    return {
      labels: ['SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3'],
      datasets: [{
        label: 'Perempuan',
        data: [
          Math.floor(getFilteredTotal() * 0.48 * 0.10),
          Math.floor(getFilteredTotal() * 0.48 * 0.15),
          Math.floor(getFilteredTotal() * 0.48 * 0.25),
          Math.floor(getFilteredTotal() * 0.48 * 0.15),
          Math.floor(getFilteredTotal() * 0.48 * 0.25),
          Math.floor(getFilteredTotal() * 0.48 * 0.08),
          Math.floor(getFilteredTotal() * 0.48 * 0.02)
        ],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getAnggotaKomunitasChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Anggota Komunitas',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 180, 'Paroki Baciro': 152, 'Paroki Pangkalan': 168 };
            return totals[paroki] || 0;
          }) :
          [180, 152, 168],
        backgroundColor: 'rgba(168, 85, 247, 0.6)',
        borderColor: '#A855F7',
        borderWidth: 2
      }]
    };
  }

  function getAnggotaKomunitasLakiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Anggota Komunitas Laki-Laki',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 94, 'Paroki Baciro': 79, 'Paroki Pangkalan': 87 };
            return totals[paroki] || 0;
          }) :
          [94, 79, 87],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getAnggotaKomunitasPerempuanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Anggota Komunitas Perempuan',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 86, 'Paroki Baciro': 73, 'Paroki Pangkalan': 81 };
            return totals[paroki] || 0;
          }) :
          [86, 73, 81],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  function getUmatMeninggalChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Umat Yang Meninggal',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 23, 'Paroki Baciro': 19, 'Paroki Pangkalan': 21 };
            return totals[paroki] || 0;
          }) :
          [23, 19, 21],
        backgroundColor: 'rgba(156, 163, 175, 0.6)',
        borderColor: '#9CA3AF',
        borderWidth: 2
      }]
    };
  }

  function getUmatMeninggalLakiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Laki-Laki Yang Meninggal',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 12, 'Paroki Baciro': 10, 'Paroki Pangkalan': 11 };
            return totals[paroki] || 0;
          }) :
          [12, 10, 11],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getUmatMeninggalPerempuanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Perempuan Yang Meninggal',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 11, 'Paroki Baciro': 9, 'Paroki Pangkalan': 10 };
            return totals[paroki] || 0;
          }) :
          [11, 9, 10],
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: '#EC4899',
        borderWidth: 2
      }]
    };
  }

  // Keep existing chart functions (getBaptisChart, getEkaristiChart, etc.)
  function getBaptisChart() {
    return {
      labels: ['Sudah Baptis', 'Belum Baptis'],
      datasets: [{
        data: [
          Math.floor(getFilteredTotal() * 0.95),
          Math.floor(getFilteredTotal() * 0.05)
        ],
        backgroundColor: ['#F6AD55', '#E2E8F0'],
        borderColor: ['#ED8936', '#CBD5E0'],
        borderWidth: 2
      }]
    };
  }

  function getEkaristiChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Sudah Ekaristi',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 383, 'Paroki Baciro': 323, 'Paroki Pangkalan': 357 };
            return totals[paroki] || 0;
          }) :
          [383, 323, 357],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: '#3B82F6',
        borderWidth: 2
      }]
    };
  }

  function getKrismaChart() {
    return {
      labels: ['Sudah Krisma', 'Belum Krisma'],
      datasets: [{
        data: [
          Math.floor(getFilteredTotal() * 0.75),
          Math.floor(getFilteredTotal() * 0.25)
        ],
        backgroundColor: ['#10B981', '#F87171'],
        borderColor: ['#059669', '#EF4444'],
        borderWidth: 2
      }]
    };
  }

  function getPernikahanChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Sudah Menikah',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 270, 'Paroki Baciro': 228, 'Paroki Pangkalan': 252 };
            return totals[paroki] || 0;
          }) :
          [270, 228, 252],
        backgroundColor: 'rgba(139, 92, 246, 0.6)',
        borderColor: '#8B5CF6',
        borderWidth: 2
      }]
    };
  }

  function getJenisKelaminChart() {
    return {
      labels: ['Laki-laki', 'Perempuan'],
      datasets: [{
        data: [
          Math.floor(getFilteredTotal() * 0.52),
          Math.floor(getFilteredTotal() * 0.48)
        ],
        backgroundColor: ['#3B82F6', '#EC4899'],
        borderColor: ['#2563EB', '#DB2777'],
        borderWidth: 2
      }]
    };
  }

  function getPekerjaanChart() {
    return {
      labels: ['PNS', 'Wiraswasta', 'Guru', 'Dokter', 'Lainnya'],
      datasets: [{
        label: 'Jumlah Umat',
        data: [
          Math.floor(getFilteredTotal() * 0.25),
          Math.floor(getFilteredTotal() * 0.30),
          Math.floor(getFilteredTotal() * 0.20),
          Math.floor(getFilteredTotal() * 0.15),
          Math.floor(getFilteredTotal() * 0.10)
        ],
        backgroundColor: [
          'rgba(34, 197, 94, 0.6)',
          'rgba(251, 191, 36, 0.6)',
          'rgba(168, 85, 247, 0.6)',
          'rgba(239, 68, 68, 0.6)',
          'rgba(156, 163, 175, 0.6)'
        ],
        borderColor: ['#22C55E', '#F59E0B', '#A855F7', '#EF4444', '#9CA3AF'],
        borderWidth: 2
      }]
    };
  }

  function getStatusPernikahanChart() {
    return {
      labels: ['Sudah Menikah', 'Belum Menikah'],
      datasets: [{
        data: [
          Math.floor(getFilteredTotal() * 0.6),
          Math.floor(getFilteredTotal() * 0.4)
        ],
        backgroundColor: ['#8B5CF6', '#06B6D4'],
        borderColor: ['#7C3AED', '#0891B2'],
        borderWidth: 2
      }]
    };
  }

  function getKelompokUmurChart() {
    return {
      labels: ['0-17 tahun', '18-30 tahun', '31-50 tahun', '51-65 tahun', '65+ tahun'],
      datasets: [{
        label: 'Jumlah Umat',
        data: [
          Math.floor(getFilteredTotal() * 0.20),
          Math.floor(getFilteredTotal() * 0.25),
          Math.floor(getFilteredTotal() * 0.30),
          Math.floor(getFilteredTotal() * 0.15),
          Math.floor(getFilteredTotal() * 0.10)
        ],
        backgroundColor: [
          'rgba(99, 102, 241, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(245, 158, 11, 0.6)',
          'rgba(239, 68, 68, 0.6)',
          'rgba(107, 114, 128, 0.6)'
        ],
        borderColor: ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#6B7280'],
        borderWidth: 2
      }]
    };
  }

  function getKomunitasChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        label: 'Jumlah Komunitas',
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 8, 'Paroki Baciro': 7, 'Paroki Pangkalan': 10 };
            return totals[paroki] || 0;
          }) :
          [8, 7, 10],
        backgroundColor: 'rgba(168, 85, 247, 0.6)',
        borderColor: '#A855F7',
        borderWidth: 2
      }]
    };
  }

  function getTempatZiarahChart() {
    return {
      labels: selectedParoki.length > 0 ? selectedParoki : ['Paroki Babarsari', 'Paroki Baciro', 'Paroki Pangkalan'],
      datasets: [{
        data: selectedParoki.length > 0 ? 
          selectedParoki.map(paroki => {
            const totals = { 'Paroki Babarsari': 5, 'Paroki Baciro': 4, 'Paroki Pangkalan': 6 };
            return totals[paroki] || 0;
          }) :
          [5, 4, 6],
        backgroundColor: ['#F97316', '#06B6D4', '#84CC16'],
        borderColor: ['#EA580C', '#0891B2', '#65A30D'],
        borderWidth: 2
      }]
    };
  }

  function getKeluargaChart() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Keluarga Aktif',
        data: [
          Math.floor(getFilteredTotal()/4),
          Math.floor(getFilteredTotal()/4) + 5,
          Math.floor(getFilteredTotal()/4) + 8,
          Math.floor(getFilteredTotal()/4) + 12,
          Math.floor(getFilteredTotal()/4) + 15,
          Math.floor(getFilteredTotal()/4) + 18
        ],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    };
  }

  function getMigrasiChart() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Umat Masuk',
          data: selectedParoki.length > 0 ? [5, 7, 3, 8, 6, 4] : [12, 15, 8, 18, 14, 10],
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 3,
          tension: 0.4
        },
        {
          label: 'Umat Keluar',
          data: selectedParoki.length > 0 ? [3, 4, 2, 5, 3, 2] : [8, 10, 5, 12, 8, 6],
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderWidth: 3,
          tension: 0.4
        }
      ]
    };
  }

  // Mock data statistik berdasarkan paroki dan jenis statistik
  function getStatistikData() {
    const baseData = {
      'Total Umat': {
        total: getFilteredTotal(),
        chartData: getUmatChart(),
        chartType: 'bar'
      },
      'Total Umat Berdasarkan Gender': {
        total: getFilteredTotal(),
        chartData: getJenisKelaminChart(),
        chartType: 'pie'
      },
      'Total Umat Laki-Laki': {
        total: Math.floor(getFilteredTotal() * 0.52),
        chartData: getUmatLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan': {
        total: Math.floor(getFilteredTotal() * 0.48),
        chartData: getUmatPerempuanChart(),
        chartType: 'bar'
      },
      'Total Umat Yang Sudah Dibaptis': {
        total: Math.floor(getFilteredTotal() * 0.95),
        chartData: getBaptisChart(),
        chartType: 'pie'
      },
      'Total Umat Laki-Laki Yang Sudah Dibaptis': {
        total: Math.floor(getFilteredTotal() * 0.52 * 0.95),
        chartData: getBaptisLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Yang Sudah Dibaptis': {
        total: Math.floor(getFilteredTotal() * 0.48 * 0.95),
        chartData: getBaptisPerempuanChart(),
        chartType: 'bar'
      },
      'Total Umat Yang Sudah Menerima Ekaristi': {
        total: Math.floor(getFilteredTotal() * 0.85),
        chartData: getEkaristiChart(),
        chartType: 'bar'
      },
      'Total Umat Laki-Laki Yang Sudah Menerima Ekaristi': {
        total: Math.floor(getFilteredTotal() * 0.52 * 0.85),
        chartData: getEkaristiLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Yang Sudah Menerima Ekaristi': {
        total: Math.floor(getFilteredTotal() * 0.48 * 0.85),
        chartData: getEkaristiPerempuanChart(),
        chartType: 'bar'
      },
      'Total Umat Yang Sudah Menerima Krisma': {
        total: Math.floor(getFilteredTotal() * 0.75),
        chartData: getKrismaChart(),
        chartType: 'pie'
      },
      'Total Umat Laki-Laki Yang Sudah Menerima Krisma': {
        total: Math.floor(getFilteredTotal() * 0.52 * 0.75),
        chartData: getKrismaLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Yang Sudah Menerima Krisma': {
        total: Math.floor(getFilteredTotal() * 0.48 * 0.75),
        chartData: getKrismaPerempuanChart(),
        chartType: 'bar'
      },
      'Total Umat Yang Sudah Menikah': {
        total: Math.floor(getFilteredTotal() * 0.6),
        chartData: getPernikahanChart(),
        chartType: 'bar'
      },
      'Total Umat Laki-Laki Yang Sudah Menikah': {
        total: Math.floor(getFilteredTotal() * 0.52 * 0.6),
        chartData: getPernikahanLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Yang Sudah Menikah': {
        total: Math.floor(getFilteredTotal() * 0.48 * 0.6),
        chartData: getPernikahanPerempuanChart(),
        chartType: 'bar'
      },
      'Total Umat Berdasarkan Status Pernikahan': {
        total: getFilteredTotal(),
        chartData: getStatusPernikahanChart(),
        chartType: 'pie'
      },
      'Total Umat Berdasarkan Pekerjaan': {
        total: getFilteredTotal(),
        chartData: getPekerjaanChart(),
        chartType: 'bar'
      },
      'Total Umat Laki-Laki Berdasarkan Pekerjaan': {
        total: Math.floor(getFilteredTotal() * 0.52),
        chartData: getPekerjaanLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Berdasarkan Pekerjaan': {
        total: Math.floor(getFilteredTotal() * 0.48),
        chartData: getPekerjaanPerempuanChart(),
        chartType: 'bar'
      },
      'Total Umat Berdasarkan Kelompok Umur': {
        total: getFilteredTotal(),
        chartData: getKelompokUmurChart(),
        chartType: 'bar'
      },
      'Total Umat Laki-Laki Berdasarkan Kelompok Umur': {
        total: Math.floor(getFilteredTotal() * 0.52),
        chartData: getKelompokUmurLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Berdasarkan Kelompok Umur': {
        total: Math.floor(getFilteredTotal() * 0.48),
        chartData: getKelompokUmurPerempuanChart(),
        chartType: 'bar'
      },
      'Total Umat Berdasarkan Pendidikan': {
        total: getFilteredTotal(),
        chartData: getPendidikanChart(),
        chartType: 'bar'
      },
      'Total Umat Laki-Laki Berdasarkan Pendidikan': {
        total: Math.floor(getFilteredTotal() * 0.52),
        chartData: getPendidikanLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Berdasarkan Pendidikan': {
        total: Math.floor(getFilteredTotal() * 0.48),
        chartData: getPendidikanPerempuanChart(),
        chartType: 'bar'
      },
      'Total Komunitas': {
        total: getFilteredKomunitasTotal(),
        chartData: getKomunitasChart(),
        chartType: 'bar'
      },
      'Total Anggota Komunitas': {
        total: Math.floor(getFilteredTotal() * 0.4),
        chartData: getAnggotaKomunitasChart(),
        chartType: 'bar'
      },
      'Total Anggota Komunitas Laki-Laki': {
        total: Math.floor(getFilteredTotal() * 0.4 * 0.52),
        chartData: getAnggotaKomunitasLakiChart(),
        chartType: 'bar'
      },
      'Total Anggota Komunitas Perempuan': {
        total: Math.floor(getFilteredTotal() * 0.4 * 0.48),
        chartData: getAnggotaKomunitasPerempuanChart(),
        chartType: 'bar'
      },
      'Total Tempat Ziarah': {
        total: getFilteredTempatZiarahTotal(),
        chartData: getTempatZiarahChart(),
        chartType: 'pie'
      },
      'Total Keluarga Yang Aktif': {
        total: getTotalKK(), // Gunakan getTotalKK() yang konsisten
        chartData: getKeluargaChart(),
        chartType: 'line'
      },
      'Total Migrasi Umat (Masuk/Keluar)': {
        total: getFilteredMigrasiTotal(),
        chartData: getMigrasiChart(),
        chartType: 'line'
      },
      'Total Umat Yang Meninggal': {
        total: Math.floor(getFilteredTotal() * 0.05),
        chartData: getUmatMeninggalChart(),
        chartType: 'bar'
      },
      'Total Umat Laki-Laki Yang Meninggal': {
        total: Math.floor(getFilteredTotal() * 0.05 * 0.52),
        chartData: getUmatMeninggalLakiChart(),
        chartType: 'bar'
      },
      'Total Umat Perempuan Yang Meninggal': {
        total: Math.floor(getFilteredTotal() * 0.05 * 0.48),
        chartData: getUmatMeninggalPerempuanChart(),
        chartType: 'bar'
      }
    };

    return baseData[selectedStatistik] || baseData['Total Umat'];
  }

  // Chart options (keep existing)
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 8,
        displayColors: true
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#6B7280' }
      },
      y: {
        grid: { color: 'rgba(203, 213, 224, 0.3)' },
        ticks: { color: '#6B7280' }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 8
      }
    }
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#6B7280' }
      },
      y: {
        grid: { color: 'rgba(203, 213, 224, 0.3)' },
        ticks: { color: '#6B7280' }
      }
    }
  };

  // Handle filter functions (modified for checkbox behavior)
  const handleFilterToggle = (filterType) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const handleTempParokiChange = (paroki) => {
    setTempSelectedParoki(prev => {
      const isSelected = prev.includes(paroki);
      return isSelected 
        ? prev.filter(item => item !== paroki)
        : [...prev, paroki];
    });
  };

  const handleTempStatistikChange = (statistik) => {
    setTempSelectedStatistik(statistik);
    setOpenFilter(null);
  };

  const handleApplyFilter = () => {
    setSelectedParoki(tempSelectedParoki);
    setSelectedStatistik(tempSelectedStatistik);
    setOpenFilter(null);
  };

  // Get display text for filter buttons
  const getParokiDisplayText = () => {
    if (tempSelectedParoki.length === 0) {
      return 'Paroki';
    } else if (tempSelectedParoki.length === 1) {
      return tempSelectedParoki[0];
    } else {
      return `${tempSelectedParoki.length} dipilih`;
    }
  };

  // Close filters when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.statistik-filter-dropdown')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentData = getStatistikData();

  const renderChart = () => {
    const { chartData, chartType } = currentData;
    
    switch (chartType) {
      case 'pie':
        return <Pie data={chartData} options={pieOptions} />;
      case 'line':
        return <Line data={chartData} options={lineOptions} />;
      default:
        return <Bar data={chartData} options={chartOptions} />;
    }
  };

  return (
    <div className="statistik">
      <div className="statistik-header">
        <h1>Statistik Data Umat</h1>
      </div>

      {/* Filter Card */}
      <div className="statistik-filter-card">
        <div className="statistik-total-display">
          <span className="statistik-total-label">
            Total KK: <span className="statistik-total-number">{getTotalKK()}</span>
          </span>
        </div>

        <div className="statistik-filters-section">
          {/* Paroki Filter */}
          <div className={`statistik-filter-dropdown ${openFilter === 'paroki' ? 'active' : ''}`}>
            <button 
              className="statistik-filter-btn"
              onClick={() => handleFilterToggle('paroki')}
            >
              <span className="filter-text">{getParokiDisplayText()}</span>
              <span className="statistik-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'paroki' && (
              <div className="statistik-filter-options">
                {parokiOptions.map(option => (
                  <label key={option} className="statistik-filter-option">
                    <input
                      type="checkbox"
                      checked={tempSelectedParoki.includes(option)}
                      onChange={() => handleTempParokiChange(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Jenis Statistik Filter */}
          <div className={`statistik-filter-dropdown ${openFilter === 'statistik' ? 'active' : ''}`}>
            <button 
              className="statistik-filter-btn"
              onClick={() => handleFilterToggle('statistik')}
            >
              <span className="filter-text">{tempSelectedStatistik}</span>
              <span className="statistik-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'statistik' && (
              <div className="statistik-filter-options">
                {statistikOptions.map(option => (
                  <div 
                    key={option} 
                    className="statistik-filter-option"
                    onClick={() => handleTempStatistikChange(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="statistik-apply-filter-btn" onClick={handleApplyFilter}>
            Apply Statistik
          </button>
        </div>
      </div>

      {/* Chart Card */}
      <div className="statistik-chart-card">
        <div className="statistik-chart-header">
          <h2>
            {selectedStatistik}
            {selectedParoki.length > 0 && selectedParoki.length < 3 && 
              ` - ${selectedParoki.join(', ')}`
            }
          </h2>
        </div>
        <div className="statistik-chart-container">
          {renderChart()}
        </div>
      </div>
    </div>
  );
};

export default Statistik;