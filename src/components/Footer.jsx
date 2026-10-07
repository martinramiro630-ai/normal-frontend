export default function Footer() {
  return (
    <footer className="mt-auto bg-dark text-white p-4 text-center">
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4 mb-4 small">
        <a href="mailto:contacto@escuelanormal.edu.ar" className="text-decoration-none text-white-50">
          <i className="fa-solid fa-envelope text-primary me-1"></i>
          <strong>Email:</strong> contacto@escuelanormal.edu.ar
        </a>
        <span className="d-none d-sm-inline text-white-50"> | </span>
        <a href="tel:+543814509999" className="text-decoration-none text-white-50">
          <i className="fa-solid fa-phone text-primary me-1"></i>
          <strong>Administración:</strong> (0381) 450-9999
        </a>
      </div>

      <ul className="d-flex justify-content-center align-items-center gap-4 mb-4 list-unstyled fs-4">
        <li>
          <a href="https://wa.me/5493810000000" target="_blank" rel="noopener noreferrer" className="text-white-50 hover-primary">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white-50 hover-primary">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white-50 hover-primary">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>

      <p className="mb-0 small text-white-50">
        &copy; 2026 Escuela Normal. Plataforma desarrollada por el Grupo 8 (Nicolas, Lucca, Abel, Ramiro).
      </p>
    </footer>
  );
}
