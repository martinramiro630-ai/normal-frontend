import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, InputGroup } from "react-bootstrap";
import { PersonFill, LockFill, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// 1. Recibimos estrictamente 'setUsuario' como prop
function Login({ setUsuario }) {
    const [credenciales, setCredenciales] = useState({ usuario: "", contrasena: "" });
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        const { usuario, contrasena } = credenciales;

        if (!usuario.trim() || !contrasena.trim()) {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Por favor, ingresa tu usuario y contraseña.",
                confirmButtonColor: "#f39c12",
                customClass: { confirmButton: "btn btn-warning fw-bold text-dark" },
                buttonsStyling: false
            });
            return;
        }

        if (usuario.toLowerCase() === "ramiro" && contrasena === "grupo4") {
            // 2. Usamos 'setUsuario' en lugar de 'iniciarSesion'
            setUsuario({ nombre: "Ramiro", rol: "alumno" });
            
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: '¡Bienvenido de nuevo, Ramiro!',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });

            navigate("/dashboard/alumno");
            
        } else {
            Swal.fire({
                icon: "error",
                title: "Acceso denegado",
                text: "Usuario o contraseña incorrectos. Intentá con 'ramiro' y 'grupo4'.",
                customClass: { confirmButton: "btn btn-danger fw-bold" },
                buttonsStyling: false
            });
        }
    };

    return (
        <section className="bg-light min-vh-100 d-flex align-items-center py-5">
            <Container>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5">
                        
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                                
                                <div className="bg-primary bg-gradient p-4 text-center text-white">
                                    <div className="display-4 mb-2">
                                        <i className="fa-solid fa-school"></i>
                                    </div>
                                    <h2 className="fw-bold mb-0">Escuela Normal</h2>
                                    <p className="mb-0 text-white-50 small">Portal de Gestión Académica</p>
                                </div>

                                <Card.Body className="p-4 p-md-5">
                                    <h3 className="text-center h5 fw-bold text-dark mb-4">Iniciar Sesión</h3>
                                    
                                    <Form onSubmit={handleSubmit} noValidate>
                                        
                                        <Form.Group className="mb-4" controlId="formUsuario">
                                            <Form.Label className="fw-semibold text-secondary small">Usuario</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text className="bg-light border-end-0 text-primary">
                                                    <PersonFill />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    name="usuario"
                                                    placeholder="Ingresá tu usuario"
                                                    className="border-start-0 bg-light focus-ring focus-ring-primary"
                                                    value={credenciales.usuario}
                                                    onChange={handleChange}
                                                    autoComplete="username"
                                                />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formContrasena">
                                            <Form.Label className="fw-semibold text-secondary small">Contraseña</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text className="bg-light border-end-0 text-primary">
                                                    <LockFill />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type={mostrarPassword ? "text" : "password"}
                                                    name="contrasena"
                                                    placeholder="Ingresá tu contraseña"
                                                    className="border-start-0 border-end-0 bg-light focus-ring focus-ring-primary"
                                                    value={credenciales.contrasena}
                                                    onChange={handleChange}
                                                    autoComplete="current-password"
                                                />
                                                <Button 
                                                    variant="light" 
                                                    className="border border-start-0 text-secondary"
                                                    onClick={() => setMostrarPassword(!mostrarPassword)}
                                                    aria-label="Mostrar u ocultar contraseña"
                                                >
                                                    {mostrarPassword ? <EyeSlashFill /> : <EyeFill />}
                                                </Button>
                                            </InputGroup>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100 fw-bold py-2 shadow-sm rounded-pill">
                                            Ingresar al Portal
                                        </Button>

                                    </Form>
                                </Card.Body>
                                
                                <Card.Footer className="bg-white border-0 text-center pb-4">
                                    <Button variant="link" className="text-decoration-none text-muted small fw-semibold" onClick={() => navigate("/")}>
                                        <i className="fa-solid fa-arrow-left me-1"></i> Volver al inicio
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Login;