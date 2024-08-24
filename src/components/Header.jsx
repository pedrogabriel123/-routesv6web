import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#4CAF50', padding: '10px 0', textAlign: 'center' }}>
      <img src={logo} alt="Logo PetsAdoption" style={{ height: '50px' }} />
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 20px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 20px' }}>
            <Link to="/servicos" style={{ color: '#fff', textDecoration: 'none' }}>Serviços</Link>
          </li>
          <li style={{ margin: '0 20px' }}>
            <Link to="/pets" style={{ color: '#fff', textDecoration: 'none' }}>Pets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
