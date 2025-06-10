import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './DashboardAdmin.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardAdmin = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Data dummy untuk 15 bulan (dari Januari tahun sebelumnya sampai Maret tahun ini)
  const generateChartData = () => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
      'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des',
      'Jan', 'Feb', 'Mar'
    ];
    
    // Data random untuk Pria dan Wanita
    const priaData = [
      35, 42, 38, 55, 48, 65, 15, 58, 75, 45, 68, 72,
      45, 52, 38
    ];
    
    const wanitaData = [
      48, 35, 62, 45, 38, 25, 85, 42, 28, 55, 35, 45,
      65, 42, 58
    ];

    return {
      labels: months,
      datasets: [
        {
          label: 'Pria',
          data: priaData,
          borderColor: '#FF6B6B',
          backgroundColor: 'rgba(255, 107, 107, 0.1)',
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: '#FF6B6B',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: false
        },
        {
          label: 'Wanita',
          data: wanitaData,
          borderColor: '#4ECDC4',
          backgroundColor: 'rgba(78, 205, 196, 0.1)',
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: '#4ECDC4',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: false
        }
      ]
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 14,
            family: 'Inter, sans-serif'
          },
          color: '#4A5568'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} orang`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          color: '#718096',
          font: {
            size: 12,
            family: 'Inter, sans-serif'
          },
          maxRotation: 0
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: '#E2E8F0',
          drawBorder: false
        },
        border: {
          display: false
        },
        ticks: {
          color: '#718096',
          font: {
            size: 12,
            family: 'Inter, sans-serif'
          },
          stepSize: 20,
          callback: function(value) {
            return value;
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        hoverBorderWidth: 3
      }
    }
  };

  const handleYearChange = (direction) => {
    if (direction === 'prev') {
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentYear(currentYear + 1);
    }
  };

  return (
    <div className="dashboard-admin">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>Selamat Datang Di Concrega</h1>
          <p>
            Selamat datang di Concrega, sahabat Anda dalam mengelola data umat dengan mudah 
            dan nyaman. Sistem ini merupakan sebuah sistem yang digunakan oleh pihak keuskupan 
            untuk mengelola data - data umat nya.
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <div className="chart-header">
          <h2>Indeks Pertumbuhan Umat Katolik Pada Tahun {currentYear}</h2>
          <div className="year-navigation">
            <button 
              className="year-btn" 
              onClick={() => handleYearChange('prev')}
              aria-label="Tahun sebelumnya"
            >
              ←
            </button>
            <span className="current-year">{currentYear}</span>
            <button 
              className="year-btn" 
              onClick={() => handleYearChange('next')}
              aria-label="Tahun selanjutnya"
            >
              →
            </button>
          </div>
        </div>
        
        <div className="chart-container">
          <Line data={generateChartData()} options={chartOptions} />
        </div>
      </div>

      {/* Guide Section */}
      <div className="guide-section">
        <h2>Panduan Penggunaan Concrega</h2>
        <div className="guide-content">
          <p>
            Mulailah perjalanan Anda bersama Concrega! Klik tautan di bawah ini untuk mengakses 
            panduan penggunaannya.
          </p>
          <a 
            href="#" 
            className="guide-link"
            onClick={(e) => {
              e.preventDefault();
              // Handle guide link click
              console.log('Opening user guide...');
            }}
          >
            Lihat panduan penggunaan concrega disini
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;