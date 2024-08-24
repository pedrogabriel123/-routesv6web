import React from 'react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
      <div className="footer-logo">
        <img src={logo} alt="Logo PetsAdoption" style={{ height: '50px' }} />
      </div>
      <div className="social-media" style={{ marginTop: '10px' }}>
        <p>Siga-nos nas redes sociais:</p>
        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Facebook</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Instagram</a> 
        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Twitter</a>
      </div>
      <div className="address" style={{ marginTop: '10px' }}>
        <p>Endereço: Rua dos Animais, 123, Cidade, Estado</p>
      </div>
    </footer>
  );
};

export default Footer;
