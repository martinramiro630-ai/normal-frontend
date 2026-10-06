import { useState } from 'react';
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';
import {
  Facebook,
  Youtube,
  Instagram,
  Search,
} from 'react-bootstrap-icons';

// Array limpio sin Publicaciones, Plataformas ni Contacto
const menu = [
  { etiqueta: 'Institucional', pagina: 'inicio' },
  { etiqueta: 'Oferta académica', pagina: 'oferta' },
  { etiqueta: 'Inscripciones', pagina: 'inscripciones' },
];

function Navbar({ setPagina, usuario, cerrarSesion }) {
  const [busqueda, setBusqueda] = useState('');

  const buscar = (e) => {
    e.preventDefault();
    console.log('Buscar:', busqueda);
  };

  return (
    // Etiqueta semántica principal para mejorar la estructura SEO del DOM
    <header role="banner">
      <BootstrapNavbar
        expand="xl"
        variant="dark"
        sticky="top"
        className="barra w-100 py-0 shadow-sm"
        as="nav"
        aria-label="Navegación principal de la institución"
      >
        <Container fluid className="px-4">

          <BootstrapNavbar.Brand
            onClick={() => setPagina('inicio')}
            style={{ cursor: 'pointer' }}
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

          <BootstrapNavbar.Toggle aria-controls="menu-principal" aria-label="Abrir menú de navegación" />

          <BootstrapNavbar.Collapse id="menu-principal">

            {/* Opciones centradas y simplificadas */}
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

            <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-3 my-3 my-xl-0">

              {/* Buscador con rol semántico */}
              <Form onSubmit={buscar} role="search">
                <InputGroup className="buscador">
                  <Form.Control
                    type="search"
                    placeholder="Buscar información..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    aria-label="Caja de búsqueda del portal"
                  />
                  <Button type="submit" aria-label="Ejecutar búsqueda" variant="primary">
                    <Search aria-hidden="true" />
                  </Button>
                </InputGroup>
              </Form>

              {!usuario ? (
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => setPagina('login')}
                  aria-label="Iniciar sesión en el sistema"
                >
                  Iniciar sesión
                </Button>
              ) : (
                <div className="d-flex align-items-center gap-3 text-white">
                  <span aria-label={`Usuario conectado: ${usuario.nombre}`}>
                    {usuario.nombre} ({usuario.rol})
                  </span>
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={() => setPagina(usuario.rol)}
                    aria-label="Ir a mi panel de usuario"
                  >
                    Mi panel
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={cerrarSesion}
                    aria-label="Cerrar la sesión actual"
                  >
                    Cerrar sesión
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