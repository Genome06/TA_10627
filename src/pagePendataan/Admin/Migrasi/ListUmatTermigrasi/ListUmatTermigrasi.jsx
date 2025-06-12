import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListUmatTermigrasi.css';

const ListUmatTermigrasi = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');
  // Changed filters to support arrays for multiple selection
  const [filters, setFilters] = useState({
    jenisKepindahan: [],
    paroki: []
  });
  const [tempFilters, setTempFilters] = useState({
    jenisKepindahan: [],
    paroki: []
  });
  const [openFilter, setOpenFilter] = useState(null);

  // Data umat termigrasi (10 data BERBEDA dari DataUmat) dengan jenis kepindahan
  const [dataUmatTermigrasi] = useState([
    {
      id: 1,
      nama: "Maria Magdalena Santos",
      nomorBaptis: "B101001",
      tanggalLahir: "15-08-1975",
      alamat: "Jakarta Pusat",
      nomorHp: "08111222333",
      status: "Sudah Menikah",
      pekerjaan: "Direktur",
      paroki: "Paroki Babarsari",
      jenisKepindahan: "Perpindahan Keuskupan",
      aksi: "view"
    },
    {
      id: 2,
      nama: "Yohanes Baptista Sari",
      nomorBaptis: "B102001",
      tanggalLahir: "22-11-1982",
      alamat: "Surabaya",
      nomorHp: "08222333444",
      status: "Sudah Menikah",
      pekerjaan: "Manager",
      paroki: "Paroki Babarsari",
      jenisKepindahan: "Perpindahan KK",
      aksi: "view"
    },
    {
      id: 3,
      nama: "Theresia Angela Putri",
      nomorBaptis: "B103001",
      tanggalLahir: "03-04-1990",
      alamat: "Bandung",
      nomorHp: "08333444555",
      status: "Belum Menikah",
      pekerjaan: "Konsultan",
      paroki: "Paroki Pangkalan",
      jenisKepindahan: "Perpindahan Agama",
      aksi: "view"
    },
    {
      id: 4,
      nama: "Fransiskus Xavier Budi",
      nomorBaptis: "B104001",
      tanggalLahir: "17-09-1988",
      alamat: "Medan",
      nomorHp: "08444555666",
      status: "Sudah Menikah",
      pekerjaan: "Insinyur",
      paroki: "Paroki Baciro",
      jenisKepindahan: "Perpindahan KK",
      aksi: "view"
    },
    {
      id: 5,
      nama: "Katarina Elisabeth Dewi",
      nomorBaptis: "B105001",
      tanggalLahir: "08-12-1995",
      alamat: "Semarang",
      nomorHp: "08555666777",
      status: "Belum Menikah",
      pekerjaan: "Software Engineer",
      paroki: "Paroki Pangkalan",
      jenisKepindahan: "Perpindahan Keuskupan",
      aksi: "view"
    },
    {
      id: 6,
      nama: "Antonius Paulus Wijaya",
      nomorBaptis: "B106001",
      tanggalLahir: "25-01-1978",
      alamat: "Makassar",
      nomorHp: "08666777888",
      status: "Sudah Menikah",
      pekerjaan: "Pilot",
      paroki: "Paroki Babarsari",
      jenisKepindahan: "Perpindahan Agama",
      aksi: "view"
    },
    {
      id: 7,
      nama: "Monica Kristina Lestari",
      nomorBaptis: "B107001",
      tanggalLahir: "14-06-1985",
      alamat: "Denpasar",
      nomorHp: "08777888999",
      status: "Sudah Menikah",
      pekerjaan: "Farmasi",
      paroki: "Paroki Baciro",
      jenisKepindahan: "Perpindahan KK",
      aksi: "view"
    },
    {
      id: 8,
      nama: "Stefanus Martinus Adi",
      nomorBaptis: "B108001",
      tanggalLahir: "29-10-1992",
      alamat: "Palembang",
      nomorHp: "08888999000",
      status: "Belum Menikah",
      pekerjaan: "Arsitek",
      paroki: "Paroki Pangkalan",
      jenisKepindahan: "Perpindahan Keuskupan",
      aksi: "view"
    },
    {
      id: 9,
      nama: "Agatha Veronica Sari",
      nomorBaptis: "B109001",
      tanggalLahir: "11-03-1987",
      alamat: "Balikpapan",
      nomorHp: "08999000111",
      status: "Sudah Menikah",
      pekerjaan: "Notaris",
      paroki: "Paroki Baciro",
      jenisKepindahan: "Perpindahan Agama",
      aksi: "view"
    },
    {
      id: 10,
      nama: "Albertus Thomas Kurnia",
      nomorBaptis: "B110001",
      tanggalLahir: "07-07-1993",
      alamat: "Manado",
      nomorHp: "08000111222",
      status: "Belum Menikah",
      pekerjaan: "Fotografer",
      paroki: "Paroki Pangkalan",
      jenisKepindahan: "Perpindahan KK",
      aksi: "view"
    }
  ]);

  // Filter options sesuai dengan desain Figma
  const filterOptions = {
    jenisKepindahan: ["Perpindahan KK", "Perpindahan Keuskupan", "Perpindahan Agama"],
    paroki: ["Paroki Pangkalan", "Paroki Babarsari", "Paroki Baciro"]
  };

  // Updated filter and search logic for multiple selection
  const filteredData = dataUmatTermigrasi.filter(item => {
    const matchesSearch = searchTerm === '' || 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesFilters = Object.entries(filters).every(([key, valueArray]) => {
      if (valueArray.length === 0) return true;
      
      if (key === 'jenisKepindahan') {
        return valueArray.includes(item.jenisKepindahan);
      }
      if (key === 'paroki') return valueArray.includes(item.paroki);
      
      return true;
    });

    return matchesSearch && matchesFilters;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Updated filter change handler for multiple selection
  const handleTempFilterChange = (filterType, value) => {
    setTempFilters(prev => {
      const currentArray = prev[filterType] || [];
      const isSelected = currentArray.includes(value);
      
      return {
        ...prev,
        [filterType]: isSelected 
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const handleApplyFilter = () => {
    setFilters(tempFilters);
    setSearchTerm(tempSearchTerm);
    setCurrentPage(1);
    setOpenFilter(null);
  };

  const handleSearchClick = () => {
    setSearchTerm(tempSearchTerm);
    setCurrentPage(1);
  };

  const handleFilterToggle = (filterType) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const handleTempSearchChange = (e) => {
    setTempSearchTerm(e.target.value);
  };

  const handleViewDetails = (id) => {
    // Navigate to LihatDataMigrasi page
    navigate(`/pendataan/admin/list-umat-termigrasi/lihat-data-migrasi/${id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Get display text for filter buttons
  const getFilterDisplayText = (filterType) => {
    const selectedItems = tempFilters[filterType] || [];
    if (selectedItems.length === 0) {
      return filterType === 'jenisKepindahan' ? 'Jenis Kepindahan' : 'Paroki';
    } else if (selectedItems.length === 1) {
      return selectedItems[0];
    } else {
      return `${selectedItems.length} dipilih`;
    }
  };

  // Close filters when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.list-umat-termigrasi-filter-dropdown')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="list-umat-termigrasi">
      <div className="list-umat-termigrasi-header">
        <h1>Data Umat Yang Sudah Migrasi</h1>
      </div>

      {/* Search and Filter Card */}
      <div className="list-umat-termigrasi-search-filter-card">
        <div className="list-umat-termigrasi-search-section">
          <div className="list-umat-termigrasi-search-input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={tempSearchTerm}
              onChange={handleTempSearchChange}
              className="list-umat-termigrasi-search-input"
            />
            <button className="list-umat-termigrasi-search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>

        <div className="list-umat-termigrasi-filters-section">
          {/* Jenis Kepindahan Filter */}
          <div className={`list-umat-termigrasi-filter-dropdown ${openFilter === 'jenisKepindahan' ? 'active' : ''}`}>
            <button 
              className="list-umat-termigrasi-filter-btn"
              onClick={() => handleFilterToggle('jenisKepindahan')}
            >
              <span className="filter-text">{getFilterDisplayText('jenisKepindahan')}</span>
              <span className="list-umat-termigrasi-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'jenisKepindahan' && (
              <div className="list-umat-termigrasi-filter-options">
                {filterOptions.jenisKepindahan.map(option => (
                  <label key={option} className="list-umat-termigrasi-filter-option">
                    <input
                      type="checkbox"
                      checked={(tempFilters.jenisKepindahan || []).includes(option)}
                      onChange={() => handleTempFilterChange('jenisKepindahan', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Paroki Filter */}
          <div className={`list-umat-termigrasi-filter-dropdown ${openFilter === 'paroki' ? 'active' : ''}`}>
            <button 
              className="list-umat-termigrasi-filter-btn"
              onClick={() => handleFilterToggle('paroki')}
            >
              <span className="filter-text">{getFilterDisplayText('paroki')}</span>
              <span className="list-umat-termigrasi-dropdown-arrow">▼</span>
            </button>
            {openFilter === 'paroki' && (
              <div className="list-umat-termigrasi-filter-options">
                {filterOptions.paroki.map(option => (
                  <label key={option} className="list-umat-termigrasi-filter-option">
                    <input
                      type="checkbox"
                      checked={(tempFilters.paroki || []).includes(option)}
                      onChange={() => handleTempFilterChange('paroki', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Apply Filter Button - Moved to bottom right */}
        <button className="list-umat-termigrasi-apply-filter-btn" onClick={handleApplyFilter}>
          Apply Filter
        </button>
      </div>

      {/* Table Card */}
      <div className="list-umat-termigrasi-table-card">
        {/* Table Section */}
        <div className="list-umat-termigrasi-table-container">
          <table className="list-umat-termigrasi-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Nomor Baptis</th>
                <th>Tanggal Lahir</th>
                <th>Alamat</th>
                <th>Nomor Hp</th>
                <th>Status</th>
                <th>Pekerjaan</th>
                <th>Paroki</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.nomorBaptis}</td>
                  <td>{item.tanggalLahir}</td>
                  <td>{item.alamat}</td>
                  <td>{item.nomorHp}</td>
                  <td>{item.status}</td>
                  <td>{item.pekerjaan}</td>
                  <td>{item.paroki}</td>
                  <td>
                    <button 
                      className="list-umat-termigrasi-action-btn list-umat-termigrasi-view-btn"
                      onClick={() => handleViewDetails(item.id)}
                      title="Lihat detail umat termigrasi"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                          fill="#F6AD55"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="list-umat-termigrasi-pagination-container">
          <div className="list-umat-termigrasi-pagination-info">
            Data Per Halaman - {itemsPerPage}
          </div>
          <div className="list-umat-termigrasi-pagination-controls">
            <button 
              className="list-umat-termigrasi-pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="list-umat-termigrasi-pagination-text">
              {indexOfFirstItem + 1} dari {filteredData.length}
            </span>
            <button 
              className="list-umat-termigrasi-pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Legend Section */}
        <div className="list-umat-termigrasi-legend-section">
          <h3>Keterangan:</h3>
          <div className="list-umat-termigrasi-legend-items">
            <div className="list-umat-termigrasi-legend-item">
              <div className="list-umat-termigrasi-legend-color-box umat-migrasi"></div>
              <span>Umat Yang Sudah Meninggal</span>
            </div>
            <div className="list-umat-termigrasi-legend-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="list-umat-termigrasi-legend-icon"
              >
                <path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                  fill="#F6AD55"
                />
              </svg>
              <span>Klik untuk melihat detail data umat termigrasi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUmatTermigrasi;