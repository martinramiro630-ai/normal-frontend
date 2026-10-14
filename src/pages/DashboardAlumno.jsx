import { useState, useEffect } from 'react';

export default function DashboardAlumno({ usuario }) {
  const [datosAlumno, setDatosAlumno] = useState(null);

  useEffect(() => {
    // Simulación de carga desde el modelo relacional (Materias, Calificaciones, Asistencias)
    const cargarDatos = () => {
      setDatosAlumno({
        promedioGeneral: 8.7,
        asistenciaGlobal: 92,
        materiasActivas: 3,
        materias: [
          { id: 1, nombre: 'Matemáticas', profesor: 'Prof. Martínez', progreso: 75, asistencia: '85%' },
          { id: 2, nombre: 'Literatura', profesor: 'Prof. García', progreso: 45, asistencia: '95%' },
          { id: 3, nombre: 'Física', profesor: 'Prof. Ruiz', progreso: 60, asistencia: '100%' }
        ],
        notas: [
          { id: 1, materia: 'Matemáticas', trim1: 8, trim2: 7, trim3: '-', final: '-' },
          { id: 2, materia: 'Literatura', trim1: 9, trim2: 9, trim3: '-', final: '-' },
          { id: 3, materia: 'Física', trim1: 7, trim2: 8, trim3: '-', final: '-' }
        ]
      });
    };
    cargarDatos();
  }, []);

  if (!datosAlumno) return <div className="p-4 text-center">Cargando panel del alumno...</div>;

  return (
    <div className="container-fluid p-4">
      <h2 className="h3 fw-bold text-primary mb-4">Resumen Académico</h2>
      
      {/* TARJETAS DE ESTADÍSTICAS GLOBALES */}
      <section className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-4">
          <div className="card shadow-sm p-3 h-100 border-0">
            <h3 className="text-muted text-uppercase fw-bold mb-2" style={{ fontSize: '12px' }}>
              <i className="fa-solid fa-book me-1"></i> Materias Activas
            </h3>
            <div className="fs-1 fw-bold lh-1 mb-1 text-primary">{datosAlumno.materiasActivas}</div>
            <span className="text-success fw-medium" style={{ fontSize: '12px' }}>En curso</span>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="card shadow-sm p-3 h-100 border-0">
            <h3 className="text-muted text-uppercase fw-bold mb-2" style={{ fontSize: '12px' }}>
              <i className="fa-solid fa-check-double me-1"></i> Promedio General
            </h3>
            <div className="fs-1 fw-bold lh-1 mb-1 text-primary">{datosAlumno.promedioGeneral}</div>
            <span className="text-success fw-medium" style={{ fontSize: '12px' }}>+0.3 este mes</span>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="card shadow-sm p-3 h-100 border-0">
            <h3 className="text-muted text-uppercase fw-bold mb-2" style={{ fontSize: '12px' }}>
              <i className="fa-solid fa-calendar-check me-1"></i> Asistencia Global
            </h3>
            <div className="fs-1 fw-bold lh-1 mb-1 text-primary">{datosAlumno.asistenciaGlobal}%</div>
            <span className="text-success fw-medium" style={{ fontSize: '12px' }}>Excelente</span>
          </div>
        </div>
      </section>

      <div className="row g-4">
        {/* MATERIAS Y ASISTENCIA POR MATERIA */}
        <section className="col-lg-5">
          <div className="card border-0 border-start border-primary border-4 shadow-sm p-4 h-100 bg-white">
            <h3 className="h5 fw-bold mb-3 text-primary">
              <i className="fa-solid fa-book-open me-2"></i> Cursado y Asistencia
            </h3>
           <div className="d-flex flex-column gap-3">
              {datosAlumno.materias.map(materia => (
                <div key={materia.id} className="border rounded-3 p-3 bg-light">
                  <h4 className="h6 fw-bold mb-1 text-dark">{materia.nombre}</h4>
                  <p className="text-muted small mb-2">{materia.profesor}</p>
                  
                  <div className="d-flex justify-content-between small mb-1 fw-semibold text-secondary">
                    <span>Programa completado</span>
                    <span>{materia.progreso}%</span>
                  </div>
                  <div className="progress mb-3" style={{ height: '6px' }}>
                    <div className="progress-bar bg-primary" style={{ width: `${materia.progreso}%` }}></div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center bg-white p-2 rounded border">
                    <span className="small text-muted fw-semibold">Asistencia en materia:</span>
                    <span className="badge bg-success px-2 py-1">{materia.asistencia}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOTAS Y LIBRETA */}
        <section className="col-lg-7">
          <div className="card border-0 border-start border-success border-4 shadow-sm p-4 h-100 bg-white">
            <h3 className="h5 fw-bold mb-3 text-success">
              <i className="fa-solid fa-graduation-cap me-2"></i> Notas y Libreta
            </h3>
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center align-middle small mb-0">
                <thead className="table-success">
                  <tr>
                    <th className="text-start">Materia</th>
                    <th>1° Trim</th>
                    <th>2° Trim</th>
                    <th>3° Trim</th>
                    <th>Final</th>
                  </tr>
                </thead>
                <tbody>
                  {datosAlumno.notas.map(nota => (
                    <tr key={nota.id}>
                      <td className="fw-bold text-start text-secondary">{nota.materia}</td>
                      <td>{nota.trim1}</td>
                      <td>{nota.trim2}</td>
                      <td>{nota.trim3}</td>
                      <td>{nota.final}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}