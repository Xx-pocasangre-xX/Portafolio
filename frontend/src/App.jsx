import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Importar páginas principales del portafolio
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#FFFFFF',
            color: '#374151',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          },
        }}
      />
      
      <Routes>
        {/* Ruta principal - Portafolio */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rutas de detalles de proyectos */}
        <Route path="/proyecto/mopt" element={<ProjectDetailsPage projectId="mopt" />} />
        <Route path="/proyecto/homeclick" element={<ProjectDetailsPage projectId="homeclick" />} />
        <Route path="/proyecto/isssSalud" element={<ProjectDetailsPage projectId="isssSalud" />} />
        <Route path="/proyecto/hospitalBloom" element={<ProjectDetailsPage projectId="hospitalBloom" />} />
        
        {/* Ruta de fallback */}
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;