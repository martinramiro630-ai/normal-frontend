import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Error404() {
  return (
    <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center py-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="display-1 fw-bold text-primary mb-2">404</div>
        <div className="fs-1 mb-3">🏫</div>
        
        <h1 className="h3 fw-bold text-dark mb-3">
          ¡Ups! Te perdiste en los pasillos
        </h1>
        
        <p className="text-secondary mb-4" style={{ maxWidth: "500px" }}>
          La página que intentas buscar no existe, fue movida o no tienes los permisos necesarios para acceder a este sector de la Escuela Normal.
        </p>

        <Link to="/">
          <Button variant="primary" size="lg" className="fw-semibold px-4 rounded-pill shadow-sm">
            <i className="fa-solid fa-house me-2"></i> Volver al Inicio
          </Button>
        </Link>
      </motion.div>
    </Container>
  );
}