import { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

function Login({ iniciarSesion }) {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("alumno");
  const [error, setError] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario === "" || password === "") {
      setError("Completá todos los campos.");
      return;
    }

    const usuarioIngresado = {
      nombre: usuario,
      rol: rol
    };

    iniciarSesion(usuarioIngresado);
  };

  return (
    <section className="login-section">

      <Container>

        <div className="login-container">

          <Card className="login-card">

            <Card.Body>

              <h2 className="text-center mb-4">
                Iniciar sesión
              </h2>

              <p className="text-center text-muted mb-4">
                Accedé a la plataforma institucional
              </p>

              {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}

              <Form onSubmit={manejarLogin}>

                <Form.Group className="mb-3">

                  <Form.Label>
                    Tipo de usuario
                  </Form.Label>

                  <Form.Select
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                  >

                    <option value="alumno">
                      Alumno
                    </option>

                    <option value="profesor">
                      Profesor
                    </option>

                    <option value="director">
                      Director
                    </option>

                  </Form.Select>

                </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>
                    Usuario
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Ingresá tu usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />

                </Form.Group>

                <Form.Group className="mb-4">

                  <Form.Label>
                    Contraseña
                  </Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Ingresá tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100"
                >
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