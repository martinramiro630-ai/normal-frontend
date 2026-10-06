import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Login from "./pages/Login.jsx";

import DashboardAlumno from "./pages/DashboardAlumno.jsx";
import DashboardProfesor from "./pages/DashboardProfesor.jsx";
import DashboardDirector from "./pages/DashboardDirector.jsx";

function App() {
    // Solo necesitamos guardar la sesión activa, el enrutador se encarga de la navegación
    const [usuario, setUsuario] = useState(null);

    const cerrarSesion = () => {
        setUsuario(null);
        // Nota: La redirección a "/" al cerrar sesión ahora la hace tu Navbar con useNavigate()
    };

    return (
        <BrowserRouter>
            {/* El Navbar y Footer quedan fuera de las Rutas para que se vean en todas las páginas */}
            <Navbar usuario={usuario} cerrarSesion={cerrarSesion} />

            <main className="flex-grow-1">
                <Routes>
                    {/* Rutas Públicas */}
                    <Route path="/" element={<Inicio />} />
                    <Route path="/contacto" element={<Contacto />} />
                    
                    {/* Le pasamos la función setUsuario al Login para que guarde los datos al ingresar */}
                    <Route path="/login" element={<Login setUsuario={setUsuario} />} />

                    {/* Rutas Protegidas: Si el rol es correcto muestra el panel, sino lo devuelve al Login */}
                    <Route 
                        path="/dashboard/alumno" 
                        element={
                            usuario?.rol === "alumno" 
                                ? <DashboardAlumno usuario={usuario} /> 
                                : <Navigate to="/login" />
                        } 
                    />
                    <Route 
                        path="/dashboard/profesor" 
                        element={
                            usuario?.rol === "profesor" 
                                ? <DashboardProfesor usuario={usuario} /> 
                                : <Navigate to="/login" />
                        } 
                    />
                    <Route 
                        path="/dashboard/director" 
                        element={
                            usuario?.rol === "director" 
                                ? <DashboardDirector usuario={usuario} /> 
                                : <Navigate to="/login" />
                        } 
                    />

                    {/* Ruta comodín (404): Si alguien escribe una URL que no existe, vuelve a Inicio */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;