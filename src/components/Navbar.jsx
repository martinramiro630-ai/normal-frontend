export default function Navbar({ seccionActiva, setSeccionActiva, onLogout }) {
  const items = [
    { id: 'inicio', label: 'Inicio', icon: 'fa-house' },
    { id: 'perfil', label: 'Mi Perfil', icon: 'fa-user' },
    { id: 'materias', label: 'Materias', icon: 'fa-book' },
    { id: 'notas', label: 'Notas y Libreta', icon: 'fa-graduation-cap' },
    { id: 'asistencias', label: 'Asistencias', icon: 'fa-calendar-check' },
    { id: 'horarios', label: 'Horarios', icon: 'fa-clock' },
  ];

  return (
    <nav className="bg-dark text-white p-2 shadow-sm sticky-top" style={{ top: '72px', zIndex: 1020 }}>
      <div className="container d-flex flex-nowrap overflow-x-auto gap-2 pb-1 pb-md-0" style={{ scrollbarWidth: 'none' }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSeccionActiva(item.id)}
            className={`btn btn-sm d-flex align-items-center flex-shrink-0 px-3 py-2 ${
              seccionActiva === item.id ? 'btn-primary fw-bold' : 'btn-dark text-white-50 border-0'
            }`}
          >
            <i className={`fa-solid ${item.icon} me-2`}></i>
            {item.label}
          </button>
        ))}
        
        {/* Botón de Cerrar Sesión empujado hacia la derecha */}
        <button 
          onClick={onLogout}
          className="btn btn-sm btn-outline-danger d-flex align-items-center flex-shrink-0 px-3 py-2 ms-auto"
        >
          <i className="fa-solid fa-right-from-bracket me-2"></i>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
