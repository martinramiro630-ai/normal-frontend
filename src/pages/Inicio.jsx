export default function Inicio({ setSeccionActiva }) {
  return (
    <div className="d-flex flex-column gap-4 pb-4">
      <section className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill fw-semibold">
              Portal Académico
            </span>
            <h2 className="display-6 fw-bold text-dark mb-4">
              Bienvenido a la <span className="text-primary">Escuela Normal</span>
            </h2>
            <p className="text-secondary fs-5 mb-3">
              Este portal está diseñado para brindar a nuestra comunidad educativa un acceso rápido y transparente a toda la información académica y administrativa.
            </p>
            <p className="text-secondary mb-0">
              Desde hace más de 50 años, nos comprometemos con la excelencia educativa, y hoy damos un paso más hacia la innovación digital para mantenernos conectados.
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <img 
              src="/img/fachada-escuela.jpg" 
              alt="Fachada principal de la Escuela Normal" 
              className="img-fluid rounded-4 shadow-sm"
              style={{ objectFit: 'cover', maxHeight: '300px', width: '100%' }}
            />
          </div>
        </div>
      </section>

      <div className="row g-4">
        <section className="col-12 col-md-6 col-lg-4">
          <div 
            onClick={() => setSeccionActiva('materias')}
            className="card border-0 border-start border-info border-4 shadow-sm rounded-4 p-4 h-100 bg-white"
            style={{ cursor: 'pointer' }}
          >
            <h2 className="h5 fw-bold mb-2 text-info">
              <i className="fa-solid fa-book me-2"></i> Materias
            </h2>
            <p className="text-secondary small mb-0">
              Listado de materias en curso, profesores a cargo y programas de estudio.
            </p>
          </div>
        </section>

        <section className="col-12 col-md-6 col-lg-4">
          <div 
            onClick={() => setSeccionActiva('notas')}
            className="card border-0 border-start border-success border-4 shadow-sm rounded-4 p-4 h-100 bg-white"
            style={{ cursor: 'pointer' }}
          >
            <h2 className="h5 fw-bold mb-2 text-success">
              <i className="fa-solid fa-graduation-cap me-2"></i> Notas y Libreta
            </h2>
            <p className="text-secondary small mb-0">
              Calificaciones divididas por trimestre, calculadora y promedios generales.
            </p>
          </div>
        </section>

        <section className="col-12 col-md-6 col-lg-4">
          <div 
            onClick={() => setSeccionActiva('asistencias')}
            className="card border-0 border-start border-warning border-4 shadow-sm rounded-4 p-4 h-100 bg-white"
            style={{ cursor: 'pointer' }}
          >
            <h2 className="h5 fw-bold mb-2 text-warning">
              <i className="fa-solid fa-calendar-check me-2"></i> Asistencias
            </h2>
            <p className="text-secondary small mb-0">
              Registro de faltas, tardanzas, justificaciones y estado de regularidad.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}