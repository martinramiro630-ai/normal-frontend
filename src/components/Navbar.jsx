import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Navbar as BootstrapNavbar, 
  Nav, 
  Container, 
  Button, 
  Form, 
  InputGroup 
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// 1. Reestructuramos el menú: Definimos qué es un enlace y qué abre un modal
const menu = [
  { etiqueta: "Institucional", ruta: "/gaceta", tipo: "link" },
  { etiqueta: "Oferta académica", accion: "oferta", tipo: "modal" },
  { etiqueta: "Inscripciones", accion: "inscripciones", tipo: "modal" },
];

function Navbar({ usuario, cerrarSesion }) {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  // Función para manejar las búsquedas
  const buscar = (e) => {
    e.preventDefault();
    if (!busqueda.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Búsqueda vacía",
        text: "Por favor, escribe algo para buscar en el portal.",
        confirmButtonColor: "#f39c12"
      });
      return;
    }
    console.log("Buscar:", busqueda);
  };

  // 2. Función que detecta si el ítem del menú dispara un modal
  const manejarClickMenu = (item, e) => {
    e.preventDefault();

    if (item.accion === "oferta") {
      Swal.fire({
        title: "Nuestra Oferta Académica",
        html: `
          <div class="text-start mt-3">
            <p class="text-secondary">La escuela cuenta con formación bilingüe obligatoria en los siguientes idiomas:</p>
            <div class="list-group">
              <div class="list-group-item border-primary border-opacity-50 shadow-sm mb-2 rounded">
                <h5 class="text-primary fw-bold mb-1"><i class="fa-solid fa-earth-americas me-2"></i>Inglés</h5>
                <p class="mb-0 small text-muted">Niveles A1 a B2. Preparación para certificaciones internacionales (Cambridge).</p>
              </div>
              <div class="list-group-item border-info border-opacity-50 shadow-sm rounded">
                <h5 class="text-info fw-bold mb-1"><i class="fa-solid fa-monument me-2"></i>Francés</h5>
                <p class="mb-0 small text-muted">Nivel básico e intermedio enfocado en gramática y fonética.</p>
              </div>
            </div>
          </div>
        `,
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#0d6efd"
      });
    } else if (item.accion === "inscripciones") {
      Swal.fire({
        title: "Fechas de Inscripciones",
        html: `
          <div class="text-start mt-3">
            <p class="text-secondary fw-semibold">Próximos turnos de exámenes finales:</p>
            <div class="alert alert-warning shadow-sm border-0">
              <i class="fa-regular fa-calendar-days me-2"></i> <strong>Turno Diciembre:</strong> Del 01 al 10 de Diciembre.
            </div>
            <div class="alert alert-info shadow-sm border-0">
              <i class="fa-regular fa-calendar-days me-2"></i> <strong>Turno Febrero:</strong> Del 15 al 25 de Febrero.
            </div>
            <p class="small text-muted mb-0 fst-italic">
              <i class="fa-solid fa-circle-exclamation text-danger me-1"></i> 
              Aviso: Estas fechas son establecidas y modificadas directamente por la Dirección Institucional desde su panel.
            </p>
          </div>
        `,
        icon: "calendar",
        confirmButtonText: "Cerrar Panel",
        confirmButtonColor: "#198754"
      });
    }
  };

  const confirmarSalida = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Tendrás que volver a ingresar tus credenciales para acceder a tu panel.",
      icon: "question",
      showCancelButton: true,
      customClass: {
        confirmButton: "btn btn-danger ms-2 fw-bold",
        cancelButton: "btn btn-secondary fw-bold"
      },
      buttonsStyling: false,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        cerrarSesion();
        navigate("/");
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Sesión cerrada correctamente',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      }
    });
  };

  return (
    <header role="banner">
      <BootstrapNavbar
        expand="xl"
        bg="dark"
        variant="dark"
        sticky="top"
        className="w-100 py-2 shadow-sm"
        as="nav"
      >
        <Container fluid className="px-4">
          <BootstrapNavbar.Brand as={Link} to="/" className="me-4">
            <motion.span
              className="logo d-flex align-items-center gap-2 fw-bold fs-5 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <i className="fa-solid fa-school"></i>
              <span>Escuela Normal</span>
            </motion.span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle className="border-0" aria-controls="menu-principal" />

          <BootstrapNavbar.Collapse id="menu-principal">
            <Nav className="mx-auto nav-hover gap-2" role="menubar">
              {/* 3. Lógica para renderizar links o botones modales */}
              {menu.map((item) => (
                item.tipo === "link" ? (
                  <Nav.Link
                    as={Link}
                    to={item.ruta}
                    key={item.etiqueta}
                    title={`Ir a la sección de ${item.etiqueta}`}
                    role="menuitem"
                    className="fw-semibold"
                  >
                    {item.etiqueta}
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    key={item.etiqueta}
                    onClick={(e) => manejarClickMenu(item, e)}
                    title={`Ver información de ${item.etiqueta}`}
                    role="menuitem"
                    className="fw-semibold"
                    style={{ cursor: "pointer" }}
                  >
                    {item.etiqueta}
                  </Nav.Link>
                )
              ))}
            </Nav>

            <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-3 my-3 my-xl-0">
              {/* Si existe un usuario logueado, mostramos el botón de cerrar sesión */}
              {usuario && (
                <Button variant="outline-danger" size="sm" className="fw-bold" onClick={confirmarSalida}>
                  Cerrar Sesión
                </Button>
              )}
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </header>
  );
}

export default Navbar;