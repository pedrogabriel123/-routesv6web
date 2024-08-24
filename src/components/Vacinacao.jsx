import React from 'react';
import vacinacaoImg from '../assets/Vacinação.jpeg';

const Vacinacao = () => {
  return (
    <div className='service-container'>
      <h3>Vacinação para pets</h3>
      <img className='service-image' src={vacinacaoImg} alt="Vacinação" />
    </div>
  );
};

export default Vacinacao;
