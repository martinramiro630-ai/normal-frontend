
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Login from "./pages/Login.jsx";
import Carrousel from "./components/Carrousel.jsx";

import DashboardAlumno from "./pages/DashboardAlumno.jsx";
import DashboardProfesor from "./pages/DashboardProfesor.jsx";
import DashboardDirector from "./pages/DashboardDirector.jsx";

function App() {

    const [pagina, setPagina] = useState("inicio");

    const [usuario, setUsuario] = useState(null);


    // INICIAR SESIÓN
    const iniciarSesion = (usuarioIngresado) => {

        setUsuario(usuarioIngresado);

        if (usuarioIngresado.rol === "alumno") {
            setPagina("alumno");
        }

        else if (usuarioIngresado.rol === "profesor") {
            setPagina("profesor");
        }

        else if (usuarioIngresado.rol === "director") {
            setPagina("director");
        }
    };


    // CERRAR SESIÓN
    const cerrarSesion = () => {

        setUsuario(null);

        setPagina("inicio");
    };


    // MOSTRAR PÁGINA
    const mostrarPagina = () => {

        if (pagina === "inicio") {
            return (
                <Inicio
                    setPagina={setPagina}
                />
            );
        }


        if (pagina === "contacto") {
            return <Contacto />;
        }


        if (pagina === "login") {
            return (
                <Login
                    iniciarSesion={iniciarSesion}
                />
            );
        }


        if (
            pagina === "alumno" &&
            usuario?.rol === "alumno"
        ) {
            return (
                <DashboardAlumno
                    usuario={usuario}
                    cerrarSesion={cerrarSesion}
                />
            );
        }


        if (
            pagina === "profesor" &&
            usuario?.rol === "profesor"
        ) {
            return (
                <DashboardProfesor
                    usuario={usuario}
                    cerrarSesion={cerrarSesion}
                />
            );
        }


        if (
            pagina === "director" &&
            usuario?.rol === "director"
        ) {
            return (
                <DashboardDirector
                    usuario={usuario}
                    cerrarSesion={cerrarSesion}
                />
            );
        }


        // Si no existe la página, volvemos al inicio
        return (
            <Inicio
                setPagina={setPagina}
            />
        );
    };


    return (
        <>
            <Navbar
                setPagina={setPagina}
                usuario={usuario}
                cerrarSesion={cerrarSesion}
            />

            <main>
                {mostrarPagina()}
            </main>

            <Footer />
        </>
    );
}

export default App;
