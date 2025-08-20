// App.jsx
import { Outlet } from 'react-router-dom';
import NavbarRegular from './components/Navbar_regular/NavbarRegular';
import Footer from './components/Footer/Footer';
import { SearchProvider } from './context/SearchContext';

const App = () => {
  return (
    <SearchProvider>
      <div className="app-wrapper">
        <NavbarRegular /> {/* Navbar akan muncul di semua halaman */}
        <div className="content">
          <Outlet /> {/* Konten halaman akan dirender di sini */}
        </div>
        <Footer /> {/* Footer akan muncul di semua halaman */}
      </div>
    </SearchProvider>
  );
};

export default App;