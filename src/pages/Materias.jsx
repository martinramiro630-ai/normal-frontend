export default function Materias() {
  const listaMaterias = [
    { id: 1, nombre: 'Matemáticas', profesor: 'Prof. Martínez', carga: '6hs', progreso: 75, color: 'primary' },
    { id: 2, nombre: 'Física', profesor: 'Prof. Ruiz', carga: '4hs', progreso: 45, color: 'success' },
    { id: 3, nombre: 'Historia', profesor: 'Prof. López', carga: '3hs', progreso: 90, color: 'warning' },
    { id: 4, nombre: 'Lengua y Literatura', profesor: 'Prof. García', carga: '4hs', progreso: 45, color: 'info' }
  ];

  return (
    <section className="card border-0 border-start border-primary border-4 shadow-sm rounded-4 p-4 h-100 bg-white">
      <h2 className="h5 fw-bold text-primary mb-4">
        <i className="fa-solid fa-book me-2"></i> Materias en curso
      </h2>
      
      <div className="d-flex flex-column gap-3">
        {listaMaterias.map((materia) => (
          <div key={materia.id} className="border rounded-3 p-3 bg-light">
            <h3 className="h6 fw-bold mb-1 text-dark">{materia.nombre}</h3>
            <p className="small text-muted mb-2">{materia.profesor} | Carga horaria: {materia.carga}</p>
            
            <div className="d-flex justify-content-between small mb-1 fw-semibold text-secondary">
              <span>Programa completado</span>
              <span>{materia.progreso}%</span>
            </div>
            <div className="progress mb-3" style={{ height: '6px' }}>
              <div 
                className={`progress-bar bg-${materia.color}`} 
                style={{ width: `${materia.progreso}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}