import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import Inicio from "../pages/Inicio.jsx";
import Login from "../pages/Login.jsx";

import DashboardAlumno from "../pages/DashboardAlumno.jsx";
import DashboardProfesor from "../pages/DashboardProfesor.jsx";
import DashboardDirector from "../pages/DashboardDirector.jsx";
import RutaProtegida from "./RutaProtegida.jsx";

export default function AppRoutes() {
  const [usuario, setUsuario] = useState(null);

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <BrowserRouter>
      {/* Navbar visible en todas las rutas */}
      <Navbar usuario={usuario} cerrarSesion={cerrarSesion} />

      <main className="flex-grow-1">
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login setUsuario={setUsuario} />} />

          {/* Rutas Protegidas mediante el componente Wrapper */}
          <Route
            path="/dashboard/alumno"
            element={
              <RutaProtegida usuario={usuario} rolRequerido="alumno">
                <DashboardAlumno usuario={usuario} />
              </RutaProtegida>
            }
          />
          
          <Route
            path="/dashboard/profesor"
            element={
              <RutaProtegida usuario={usuario} rolRequerido="profesor">
                <DashboardProfesor usuario={usuario} />
              </RutaProtegida>
            }
          />
          
          <Route
            path="/dashboard/director"
            element={
              <RutaProtegida usuario={usuario} rolRequerido="director">
                <DashboardDirector usuario={usuario} />
              </RutaProtegida>
            }
          />

          {/* Fallback: Si escriben cualquier otra cosa en la URL, van al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}