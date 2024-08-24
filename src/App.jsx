import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import Services from './components/Services';
import Tosa from './components/Tosa';
import Banho from './components/Banho';
import Vacinacao from './components/Vacinacao';
import PetsTable from './components/PetsTable';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Carrossel />} />
        <Route path="/servicos" element={<Services />}>
          <Route path="tosa" element={<Tosa />} />
          <Route path="banho" element={<Banho />} />
          <Route path="vacinacao" element={<Vacinacao />} />
        </Route>
        <Route path="/pets" element={<PetsTable />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
