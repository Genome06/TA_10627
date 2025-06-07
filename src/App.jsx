// App.jsx
import { Outlet } from 'react-router-dom';
import NavbarRegular from './components/Navbar_regular/NavbarRegular';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app-wrapper">
      <NavbarRegular /> {/* Navbar akan muncul di semua halaman */}
      <div className="content">
        <Outlet /> {/* Konten halaman akan dirender di sini */}
      </div>
      <Footer /> {/* Footer akan muncul di semua halaman */}
    </div>
  );
};

export default App;