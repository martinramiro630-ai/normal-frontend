import { Container } from 'react-bootstrap';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container className="text-center">
        
        {/* Bloque de contacto usando Flexbox de Bootstrap */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-4">
          <a href="mailto:contacto@escuelanormal.edu.ar" className="text-decoration-none text-white-50">
            <EnvelopeFill className="text-primary me-2" size={18} />
            <strong>Email:</strong> contacto@escuelanormal.edu.ar
          </a>
          
          {/* Separador visible solo en pantallas medianas o grandes */}
          <span className="text-white-50 d-none d-sm-inline">|</span>
          
          <a href="tel:+543814509999" className="text-decoration-none text-white-50">
            <TelephoneFill className="text-primary me-2" size={18} />
            <strong>Administración:</strong> (0381) 450-9999
          </a>
        </div>

        <p className="mb-1">
          Plataforma educativa institucional
        </p>
        <small className="text-white-50">
          © 2026 Escuela Normal - Todos los derechos reservados
        </small>
        
      </Container>
    </footer>
  );
}

export default Footer;