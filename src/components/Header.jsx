export default function Header() {
  return (
    <header className="bg-primary text-white p-3 px-4 d-flex justify-content-between align-items-center sticky-top shadow-sm">
      <h1 className="h5 mb-0 fw-semibold">
        Escuela Normal<br />
        <small className="fw-normal opacity-75" style={{ fontSize: '14px' }}>
          Portal interactivo para Alumnos y Padres[cite: 6]
        </small>
      </h1>
      
      <div className="d-flex align-items-center gap-3 fs-5">
        <span>🔔</span>
        <span className="bg-secondary rounded-circle px-2 py-1 fs-6 fw-bold">
          RA
        </span>
      </div>
    </header>
  );
}