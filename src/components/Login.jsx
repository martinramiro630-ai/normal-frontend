import { useState } from 'react';

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarPass, setMostrarPass] = useState(false);
  const [error, setError] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    
    if (usuario.trim() === '' || contrasena.trim() === '') {
      setError('Por favor, completá todos los campos para ingresar.');
      return;
    }

    if (usuario === 'ramiro' && contrasena === 'grupo4') {
      setError('');
      onLogin(); 
    } else {
      setError("Usuario o contraseña incorrectos. Intentá con 'ramiro' y 'grupo4'.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 p-3 bg-light">
      <div className="card border-0 shadow-sm rounded-3 p-4 p-md-5 bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <div className="fs-1 mb-2">🏛️</div>
          <h1 className="h4 fw-bold mb-1 text-primary">Escuela Normal</h1>
          <p className="text-secondary small mb-0">Portal académico para alumnos y padres</p>
        </div>

        <form onSubmit={manejarSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Usuario</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingresá tu usuario"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Contraseña</label>
            <div className="input-group">
              <input
                type={mostrarPass ? "text" : "password"}
                className="form-control"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                placeholder="Ingresá tu contraseña"
              />
              
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setMostrarPass(!mostrarPass)}
              >
                <i className={`fa-solid ${mostrarPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          {error && <div className="alert alert-danger py-2 small">{error}</div>}

          <button type="submit" className="btn btn-primary w-100 fw-semibold mt-3">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}