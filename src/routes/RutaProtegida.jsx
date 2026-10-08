import { Navigate } from "react-router-dom";

export default function RutaProtegida({ usuario, rolRequerido, children }) {
  // Si no hay usuario en el estado global, lo mandamos al login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario intentó entrar a un panel que no es el suyo (ej: un alumno entrando a /dashboard/profesor)
  if (rolRequerido && usuario.rol !== rolRequerido) {
    return <Navigate to={`/dashboard/${usuario.rol}`} replace />;
  }

  // Si todo está correcto, renderizamos el componente hijo (el Dashboard)
  return children;
}