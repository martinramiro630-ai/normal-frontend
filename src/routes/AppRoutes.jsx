import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Inicio from "../pages/Inicio.jsx";
import Login from "../pages/Login.jsx";
import Error404 from "../pages/Error404.jsx";

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
      <Navbar usuario={usuario} cerrarSesion={cerrarSesion} />

      <main className="flex-grow-1">
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login setUsuario={setUsuario} />} />

          {/* Ruta Protegida: Alumno */}
          <Route
            path="/dashboard/alumno"
            element={
              <RutaProtegida usuario={usuario} rolRequerido="alumno">
                <DashboardAlumno usuario={usuario} />
              </RutaProtegida>
            }
          />
          
          {/* Ruta Protegida: Profesor */}
          <Route
            path="/dashboard/profesor"
            element={
              <RutaProtegida usuario={usuario} rolRequerido="profesor">
                <DashboardProfesor usuario={usuario} />
              </RutaProtegida>
            }
          />
          
          {/* Ruta Protegida: Director */}
          <Route
            path="/dashboard/director"
            element={
              <RutaProtegida usuario={usuario} rolRequerido="director">
                <DashboardDirector usuario={usuario} />
              </RutaProtegida>
            }
          />

          {/* Fallback 404: Renderiza tu página de error personalizada si la URL no existe */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}