import { useState } from 'react';
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
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
  ChevronRight,
} from 'react-bootstrap-icons';

// Cada opción puede tener "hijos" (menú desplegable) y estos otros "hijos" (submenú).
// Los textos de Libros y Anuarios son de ejemplo: cambialos por los tuyos.
const menu = [
  { etiqueta: 'Institucional', pagina: 'inicio' },
  {
    etiqueta: 'Publicaciones',
    hijos: [
      { etiqueta: 'Revista Scholé', pagina: 'revista' },
      {
        etiqueta: 'Libros',
        hijos: [
          { etiqueta: 'Colección general', pagina: 'libros' },
          { etiqueta: 'Novedades', pagina: 'libros-novedades' },
        ],
      },
      { etiqueta: 'Itinerarios en el tiempo', pagina: 'itinerarios' },
      {
        etiqueta: 'Anuarios',
        hijos: [
          { etiqueta: 'Anuario 2025', pagina: 'anuario-2025' },
          { etiqueta: 'Anuario 2024', pagina: 'anuario-2024' },
        ],
      },
    ],
  },
  { etiqueta: 'Nuestras plataformas', pagina: 'plataformas' },
  { etiqueta: 'Oferta académica', pagina: 'oferta' },
  { etiqueta: 'Inscripciones', pagina: 'inscripciones' },
  { etiqueta: 'Contacto', pagina: 'contacto' },
];

const redes = [
  { nombre: 'Facebook', url: 'https://www.facebook.com', Icono: Facebook },
  { nombre: 'YouTube', url: 'https://www.youtube.com', Icono: Youtube },
  { nombre: 'Instagram', url: 'https://www.instagram.com', Icono: Instagram },
];

function Navbar({ setPagina, usuario, cerrarSesion }) {
  const [busqueda, setBusqueda] = useState('');

  const buscar = (e) => {
    e.preventDefault();
    console.log('Buscar:', busqueda);
  };

  return (
    <BootstrapNavbar
      expand="xl"
      variant="dark"
      sticky="top"
      className="barra w-100 py-0"
    >
      <Container fluid className="px-4">

        <BootstrapNavbar.Brand
          onClick={() => setPagina('inicio')}
          style={{ cursor: 'pointer' }}
          className="me-4 py-2"
        >
          <span className="logo">
            <span className="logo-fichas" aria-hidden="true">
              <span className="logo-ficha">E</span>
              <span className="logo-ficha">N</span>
            </span>
            <span className="logo-texto">
              <span className="logo-escuela">Escuela</span>
              <span className="logo-normal">Normal</span>
            </span>
          </span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="menu" />

        <BootstrapNavbar.Collapse id="menu">

          {/* Opciones centradas */}
          <Nav className="mx-auto nav-hover">
            {menu.map((item, i) =>
              item.hijos ? (
                <NavDropdown
                  key={item.etiqueta}
                  title={item.etiqueta}
                  id={`menu-${i}`}
                  renderMenuOnMount
                >
                  {item.hijos.map((hijo) =>
                    hijo.hijos ? (
                      <div key={hijo.etiqueta} className="submenu">
                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                          {hijo.etiqueta}
                          <ChevronRight size={12} />
                        </div>
                        <div className="submenu-panel">
                          {hijo.hijos.map((nieto) => (
                            <NavDropdown.Item
                              key={nieto.etiqueta}
                              onClick={() => setPagina(nieto.pagina)}
                            >
                              {nieto.etiqueta}
                            </NavDropdown.Item>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavDropdown.Item
                        key={hijo.etiqueta}
                        onClick={() => setPagina(hijo.pagina)}
                      >
                        {hijo.etiqueta}
                      </NavDropdown.Item>
                    )
                  )}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={item.etiqueta}
                  onClick={() => setPagina(item.pagina)}
                >
                  {item.etiqueta}
                </Nav.Link>
              )
            )}
          </Nav>

          {/* Buscador, redes y sesión */}
          <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-3 my-3 my-xl-0">

            <Form onSubmit={buscar}>
              <InputGroup className="buscador">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <Button type="submit" aria-label="Buscar">
                  <Search />
                </Button>
              </InputGroup>
            </Form>

            <div className="d-flex gap-3">
              {redes.map(({ nombre, url, Icono }) => (
                <a
                  key={nombre}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={nombre}
                  className="text-white fs-5"
                >
                  <Icono />
                </a>
              ))}
            </div>

            {!usuario ? (

              <Button
                variant="outline-light"
                size="sm"
                onClick={() => setPagina('login')}
              >
                Iniciar sesión
              </Button>

            ) : (

              <div className="d-flex align-items-center gap-3 text-white">

                <span>
                  {usuario.nombre} ({usuario.rol})
                </span>

                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => setPagina(usuario.rol)}
                >
                  Mi panel
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </Button>

              </div>

            )}

          </div>

        </BootstrapNavbar.Collapse>

      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
