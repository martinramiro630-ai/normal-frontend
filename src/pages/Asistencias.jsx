export default function Asistencias() {
  return (
    <section className="card border-0 border-start border-warning border-4 shadow-sm rounded-4 p-4 h-100 bg-white">
      <h2 className="h5 fw-bold mb-3 text-warning">
        <i className="fa-solid fa-calendar-check me-2"></i> Asistencias
      </h2>
      <p className="text-secondary small mb-4">
        Registro de faltas, tardanzas y estado de regularidad (Solo lectura).
      </p>

      <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded border mb-4">
        <span className="fw-semibold text-secondary small">Asistencia Anual:</span>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-success px-2 py-1 fs-6">92%</span>
          <span className="small fw-bold text-success">
            <i className="fa-solid fa-circle-check me-1"></i>Excelente
          </span>
        </div>
      </div>

      <div className="mt-auto">
        <div className="d-flex justify-content-between mb-1">
          <span className="small fw-bold text-secondary">Progreso de Regularidad</span>
          <span className="small text-muted">92%</span>
        </div>
        <div className="progress" style={{ height: '20px' }}>
          <div 
            className="progress-bar bg-warning progress-bar-striped progress-bar-animated" 
            role="progressbar" 
            style={{ width: '92%' }}
          ></div>
        </div>
      </div>
    </section>
  );
}