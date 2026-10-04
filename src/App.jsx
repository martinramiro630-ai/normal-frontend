import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importación de las páginas principales
import Inicio from './pages/Inicio';
//import Materias from './pages/Materias';
//import Notas from './pages/Notas';
// import Asistencias from './pages/Asistencias';

export default function App() {
  const [estaLogueado, setEstaLogueado] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  if (!estaLogueado) {
    return <Login onLogin={() => setEstaLogueado(true)} />;
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />
      <Navbar 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
        onLogout={() => setEstaLogueado(false)} 
      />
      
      <main className="flex-grow-1 p-3 p-md-4 container">
        {seccionActiva === 'inicio' && <Inicio setSeccionActiva={setSeccionActiva} />}
        {seccionActiva === 'materias' && <Materias />}
        {seccionActiva === 'notas' && <Notas />}
        {/* {seccionActiva === 'asistencias' && <Asistencias />} */}
      </main>

      <Footer />
    </div>
  );
}