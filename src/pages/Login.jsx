import { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // <-- Importamos para poder cambiar de página

// 1. Recibimos 'setUsuario' tal como lo manda AppRoutes
function Login({ setUsuario }) {
  const [usuario, setUsuarioInput] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("alumno");
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); // <-- Hook para redirigir

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario === "" || password === "") {
      setError("Completá todos los campos.");
      return;
    }

    // Validación simulada para el TP
    if (usuario === "ramiro" && password === "grupo4") {
      const usuarioIngresado = {
        nombre: usuario,
        rol: rol
      };

      // 2. Usamos setUsuario para guardar los datos en AppRoutes
      setUsuario(usuarioIngresado);
      
      // 3. Lo mandamos al dashboard correspondiente según el rol que eligió
      navigate(`/dashboard/${rol}`);
    } else {
      setError("Credenciales incorrectas. Intentá con ramiro / grupo4");
    }
  };

  return (
    <section className="login-section d-flex align-items-center min-vh-100 bg-light">
      <Container>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <Card className="shadow-sm border-0 rounded-4 p-3">
              <Card.Body>
                <div className="text-center mb-3">
                  <div className="fs-1 mb-2">🏛️</div>
                  <h2 className="text-center mb-1 fw-bold text-primary h4">
                    Iniciar sesión
                  </h2>
                  <p className="text-center text-muted small">
                    Accedé a la plataforma institucional
                  </p>
                </div>

                {error && (
                  <Alert variant="danger" className="py-2 small text-center fw-semibold">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={manejarLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-secondary">Tipo de usuario</Form.Label>
                    <Form.Select 
                      value={rol} 
                      onChange={(e) => setRol(e.target.value)}
                      className="focus-ring focus-ring-primary"
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
                      className="focus-ring focus-ring-primary"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-semibold text-secondary">Contraseña</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Ingresá tu contraseña" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      className="focus-ring focus-ring-primary"
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100 fw-bold rounded-pill shadow-sm">
                    Ingresar al Portal
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;