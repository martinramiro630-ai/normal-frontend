import { Container } from 'react-bootstrap';

function Footer() {

  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container className="text-center">
        <p className="mb-1">
          Plataforma educativa institucional
        </p>
        <small>
          © 2026 Escuela Normal - Todos los derechos reservados
        </small>
      </Container>
    </footer>
  );
}

export default Footer;