import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert, InputGroup } from "react-bootstrap";

function Login({ setUsuario }) {
  // 1. Declaración de Estados
  const [usuario, setUsuarioInput] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("alumno");
  const [error, setError] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  // Instanciamos el hook de navegación de React Router
  const navigate = useNavigate();

  // 2. Función manejadora del formulario
  const manejarLogin = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Validación básica de campos vacíos
    if (usuario.trim() === "" || password.trim() === "") {
      setError("Por favor, completá todos los campos.");
      return;
    }

    // Simulación de validación exitosa (aquí iría tu conexión a la base de datos)
    const usuarioIngresado = {
      nombre: usuario,
      rol: rol,
    };

    // Actualizamos el estado global en App.jsx
    setUsuario(usuarioIngresado);
    
    // Redirección dinámica según el rol del usuario
    navigate(`/dashboard/${usuarioIngresado.rol}`);
  };

  return (
    <section className="min-vh-100 d-flex align-items-center bg-light py-5">
      <Container>
        <div className="d-flex justify-content-center">
          <Card className="border-0 shadow-sm rounded-4 w-100" style={{ maxWidth: "450px" }}>
            <Card.Body className="p-4 p-md-5">
              
              <div className="text-center mb-4">
                <div className="fs-1 mb-2">🏛️</div>
                <h1 className="h4 fw-bold text-primary mb-1">Escuela Normal</h1>
                <p className="text-secondary small">Portal académico para Alumnos y Profesores</p>
              </div>

              {/* Renderizado condicional del error. Si no hay error, esto no existe en el DOM */}
              {error && (
                <Alert variant="danger" className="py-2 small text-center">
                  <i className="fa-solid fa-triangle-exclamation me-2"></i>
                  {error}
                </Alert>
              )}

              <Form onSubmit={manejarLogin} noValidate>
                
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-secondary">Tipo de usuario</Form.Label>
                  <Form.Select
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                    className="bg-light"
                  >
                    <option value="alumno">Alumno</option>
                    <option value="profesor">Profesor</option>
                    <option value="director">Director</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-secondary">Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresá tu usuario"
                    value={usuario}
                    onChange={(e) => setUsuarioInput(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="small fw-semibold text-secondary">Contraseña</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={mostrarPassword ? "text" : "password"}
                      placeholder="Ingresá tu contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => setMostrarPassword(!mostrarPassword)}
                      aria-label="Mostrar u ocultar contraseña"
                    >
                      <i className={`fa-solid ${mostrarPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100 fw-semibold mb-3">
                  Iniciar sesión
                </Button>

              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Login;