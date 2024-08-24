import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <h2>Serviços Disponíveis</h2>
      <nav>
        <ul>
          <li><Link to="tosa">Tosa</Link></li>
          <li><Link to="banho">Banho</Link></li>
          <li><Link to="vacinacao">Vacinação</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;
