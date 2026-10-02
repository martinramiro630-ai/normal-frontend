import { useState } from 'react';
import Login from './components/Login';
//import Sidebar from './components/Sidebar';
//import Header from './components/Header';

// Importa aquí tus páginas
//import Inicio from './components/Inicio';
//import Notas from './components/Notas';
// import Perfil from './components/Perfil';
// import Materias from './components/Materias';

export default function App() {

  const [estaLogueado, setEstaLogueado] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  if (!estaLogueado) {
    return <Login onLogin={() => setEstaLogueado(true)} />;
  }

  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
        onLogout={() => setEstaLogueado(false)} 
      />
      
      <main className="flex-grow-1 d-flex flex-column w-100">
        <Header />
        
        <div className="p-3 p-md-4 flex-grow-1">
          {seccionActiva === 'inicio' && <Inicio />}
          {seccionActiva === 'notas' && <Notas />}
        </div>
      </main>
    </div>
  );
}