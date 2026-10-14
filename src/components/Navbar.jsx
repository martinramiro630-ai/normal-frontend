import { Link, useNavigate } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const menu = [
  { etiqueta: "Institucional", tipo: "link_externo", url: "https://www.lagaceta.com.ar/nota/1149505/sociedad/profundizan-mejoras-edilicias-equipan-laboratorios-escuela-normal.html" },
  { etiqueta: "Oferta académica", tipo: "modal_oferta" },
  { etiqueta: "Inscripciones", tipo: "modal_inscripciones" },
];

function Navbar({ usuario, cerrarSesion }) {
  const navigate = useNavigate();

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

  const mostrarOfertaAcademica = () => {
    Swal.fire({
      title: 'Oferta Académica: Idiomas',
      html: `
        <div class="text-start mt-3">
          <p class="text-muted">La Escuela Normal ofrece formación bilingüe de excelencia en las siguientes áreas:</p>
          <div class="d-flex align-items-center gap-3 mb-3 p-3 border rounded bg-light">
            <span class="fs-1">🇬🇧</span>
            <div>
              <h5 class="mb-0 fw-bold text-primary">Inglés</h5>
              <small class="text-muted">Nivel Avanzado - Materia Obligatoria</small>
            </div>
          </div>
          <div class="d-flex align-items-center gap-3 p-3 border rounded bg-light">
            <span class="fs-1">🇫🇷</span>
            <div>
              <h5 class="mb-0 fw-bold text-info">Francés</h5>
              <small class="text-muted">Nivel Intermedio - Taller Optativo</small>
            </div>
          </div>
        </div>
      `,
      confirmButtonText: 'Excelente',
      buttonsStyling: false,
      customClass: { confirmButton: "btn btn-primary fw-bold" }
    });
  };

  const mostrarInscripciones = () => {
    Swal.fire({
      title: 'Fechas de Inscripción',
      html: `
        <div class="text-start mt-3">
          <div class="alert alert-warning small mb-3">
            <i class="fa-solid fa-lock"></i> <strong>Aviso:</strong> Estas fechas son dinámicas y son actualizadas directamente por el panel de <strong>Dirección</strong>.
          </div>
          <ul class="list-group list-group-flush border rounded">
            <li class="list-group-item d-flex justify-content-between align-items-center bg-light">
              <strong>Primer Llamado</strong>
              <span class="badge bg-success rounded-pill px-3 py-2">15 Nov - 20 Nov</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-light">
              <strong>Segundo Llamado</strong>
              <span class="badge bg-success rounded-pill px-3 py-2">05 Dic - 10 Dic</span>
            </li>
          </ul>
        </div>
      `,
      icon: 'calendar',
      confirmButtonText: 'Entendido',
      buttonsStyling: false,
      customClass: { confirmButton: "btn btn-success fw-bold" }
    });
  };

  const manejarClickMenu = (e, item) => {
    e.preventDefault();
    if (item.tipo === "link_externo") {
      window.open(item.url, "_blank");
    } else if (item.tipo === "modal_oferta") {
      mostrarOfertaAcademica();
    } else if (item.tipo === "modal_inscripciones") {
      mostrarInscripciones();
    } else {
      navigate(item.ruta);
    }
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

          <BootstrapNavbar.Toggle className="border-0" />

          <BootstrapNavbar.Collapse>
            <Nav className="mx-auto nav-hover gap-2">
              {menu.map((item) => (
                <Nav.Link 
                  href={item.url || "#"} 
                  key={item.etiqueta} 
                  className="fw-semibold"
                  onClick={(e) => manejarClickMenu(e, item)}
                >
                  {item.etiqueta}
                </Nav.Link>
              ))}
            </Nav>

            <motion.div 
              className="d-flex flex-column flex-xl-row align-items-xl-center gap-3 my-3 my-xl-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {!usuario ? (
                <Button variant="light" size="sm" onClick={() => navigate("/login")} className="text-nowrap fw-bold px-3 py-2">
                  Iniciar sesión
                </Button>
              ) : (
                <div className="d-flex align-items-center gap-2 text-white">
                  <span className="text-nowrap fw-semibold me-2">
                    {usuario.nombre} ({usuario.rol})
                  </span>
                  <Button variant="light" size="sm" className="text-nowrap text-dark fw-bold" onClick={() => navigate(`/dashboard/${usuario.rol}`)}>
                    Mi panel
                  </Button>
                  
                  <Button variant="danger" size="sm" className="text-nowrap fw-bold" onClick={confirmarSalida}>
                    Salir
                  </Button>
                </div>
              )}
            </motion.div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </header>
  );
}

export default Navbar;