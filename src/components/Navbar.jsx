import { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons"; // Quité los iconos sociales que no estabas usando aquí

const menu = [
  { etiqueta: "Institucional", pagina: "inicio" },
  { etiqueta: "Oferta académica", pagina: "oferta" },
  { etiqueta: "Inscripciones", pagina: "inscripciones" },
];

function Navbar({ setPagina, usuario, cerrarSesion }) {
  const [busqueda, setBusqueda] = useState("");

  const buscar = (e) => {
    e.preventDefault();
    console.log("Buscar:", busqueda);
  };

  return (
    <header role="banner">
      <BootstrapNavbar
        expand="xl" // Volvimos a xl para mantener el diseño horizontal
        variant="dark"
        sticky="top"
        className="barra w-100 py-0 shadow-sm"
        as="nav"
        aria-label="Navegación principal de la institución"
      >
        <Container fluid className="px-4">
          <BootstrapNavbar.Brand
            onClick={() => setPagina("inicio")}
            style={{ cursor: "pointer" }}
            className="me-4 py-2"
            title="Volver al inicio de la Escuela Normal"
          >
            <span className="logo">
              <span className="logo-fichas" aria-hidden="true">
                <span className="logo-ficha">N</span>
              </span>
              <span className="logo-texto">
                <span className="logo-escuela">Escuela</span>
                <span className="logo-normal">Normal</span>
              </span>
            </span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle
            aria-controls="menu-principal"
            aria-label="Abrir menú de navegación"
          />

          <BootstrapNavbar.Collapse id="menu-principal">
            <Nav className="mx-auto nav-hover" role="menubar">
              {menu.map((item) => (
                <Nav.Link
                  key={item.etiqueta}
                  onClick={() => setPagina(item.pagina)}
                  title={`Ir a la sección de ${item.etiqueta}`}
                  role="menuitem"
                >
                  {item.etiqueta}
                </Nav.Link>
              ))}
            </Nav>

            {/* Redujimos de gap-3 a gap-2 para ahorrar espacio horizontal vital */}
            <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-2 my-3 my-xl-0">
              <Form onSubmit={buscar} role="search">
                <InputGroup className="buscador">
                  <Form.Control
                    type="search"
                    placeholder="Buscar información..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    aria-label="Caja de búsqueda del portal"
                  />
                  <Button
                    type="submit"
                    aria-label="Ejecutar búsqueda"
                    variant="primary"
                  >
                    <Search aria-hidden="true" />
                  </Button>
                </InputGroup>
              </Form>

              {!usuario ? (
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => setPagina("login")}
                  aria-label="Iniciar sesión en el sistema"
                  className="text-nowrap ms-xl-2"
                >
                  Iniciar sesión
                </Button>
              ) : (
                <div className="d-flex align-items-center gap-2 text-white ms-xl-2">
                  <span
                    aria-label={`Usuario conectado: ${usuario.nombre}`}
                    className="text-nowrap fw-semibold me-1"
                  >
                    {usuario.nombre} ({usuario.rol})
                  </span>

                  {/* El text-nowrap en los botones evita que se partan si la pantalla es chica */}
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="text-nowrap"
                    // Esto transforma "alumno" en "DashboardAlumno", o "profesor" en "DashboardProfesor"
                    onClick={() =>
                      setPagina(
                        `Dashboard${usuario.rol.charAt(0).toUpperCase() + usuario.rol.slice(1)}`,
                      )
                    }
                    aria-label="Ir a mi panel de usuario"
                  >
                    Mi panel
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="text-nowrap"
                    onClick={cerrarSesion}
                    aria-label="Cerrar la sesión actual"
                  >
                    Salir
                  </Button>
                </div>
              )}
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </header>
  );
}

export default Navbar;
