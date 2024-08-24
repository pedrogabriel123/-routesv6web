import React from 'react';
import banhoImg from '../assets/Banho.jpeg';

const Banho = () => {
  return (
    <div className='service-container'>
      <h3>Serviço de Banho para pets</h3>
      <img className='service-image' src={banhoImg} alt="Banho" />
    </div>
  );
};

export default Banho;
