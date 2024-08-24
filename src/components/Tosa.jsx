import React from 'react';
import tosaImg from '../assets/Tosa.jpeg';

const Tosa = () => {
  return (
    <div className='service-container'>
      <h3>Serviço de Tosa para cães e gatos</h3>
      <img className='service-image' src={tosaImg} alt="Tosa" />
    </div>
  );
};

export default Tosa;