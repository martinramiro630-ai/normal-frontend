import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login({ setUsuario }) {
  const [usuario, setUsuarioInput] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("alumno");
  
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, ingresá tu usuario y contraseña.",
        confirmButtonColor: "#f39c12"
      });
      return;
    }

    // Validación simulada para los distintos roles del TP
    let loginExitoso = false;
    let nombreUsuario = "";

    if (rol === "alumno" && usuario === "ramiro" && password === "grupo4") {
      loginExitoso = true;
      nombreUsuario = "Ramiro";
    } else if (rol === "profesor" && usuario === "profe" && password === "profe") {
      loginExitoso = true;
      nombreUsuario = "Profesor Martínez";
    } else if (rol === "director" && usuario === "admin" && password === "profe") {
      loginExitoso = true;
      nombreUsuario = "Dirección";
    }

    if (loginExitoso) {
      const usuarioIngresado = {
        nombre: nombreUsuario,
        rol: rol
      };

      setUsuario(usuarioIngresado);
      
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: `¡Bienvenido al panel de ${rol}!`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      // Redirección dinámica según el rol seleccionado
      navigate(`/dashboard/${rol}`);
    } else {
       Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: `El usuario o la contraseña para el rol "${rol}" no coinciden.`,
        confirmButtonColor: "#d33"
      });
    }
  };

  return (
    <section className="login-section d-flex align-items-center min-vh-100 bg-light">
      <Container>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <Card className="shadow-sm border-0 rounded-4 p-3 bg-white">
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

                <Form onSubmit={manejarLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-secondary">Tipo de usuario</Form.Label>
                    <Form.Select 
                      value={rol} 
                      onChange={(e) => setRol(e.target.value)}
                      className="focus-ring focus-ring-primary bg-light"
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
                      className="focus-ring focus-ring-primary bg-light"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-semibold text-secondary">Contraseña</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Ingresá tu contraseña" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      className="focus-ring focus-ring-primary bg-light"
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100 fw-bold rounded-pill shadow-sm">
                    Ingresar al Portal
                  </Button>
                </Form>
                
                <div className="mt-4 text-center small text-muted border-top pt-3">
                    <p className="mb-1 fw-bold text-dark">Credenciales de prueba para el TP:</p>
                    <ul className="list-unstyled mb-0">
                        <li>Alumno: <b>ramiro</b> / grupo4</li>
                        <li>Profesor: <b>profe</b> / grupo4</li>
                        <li>Director: <b>admin</b> / grupo4</li>
                    </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;