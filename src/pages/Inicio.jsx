import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Carrousel from "../components/Carrousel"; 
import { motion } from "framer-motion";

// IMPORTACIONES LOCALES
import imgNoticia1 from "../assets/noticia1.png";
import imgNoticia2 from "../assets/noticia2.png";
import imgNoticia3 from "../assets/noticia3.png";
import imgAcceso1 from "../assets/acceso-alumnos.png";
import imgAcceso2 from "../assets/acceso-profesores.png";
import imgAcceso3 from "../assets/acceso-direccion.png";
import imgHero from "../assets/fachada-escuela.png"; 
import imgInfo from "../assets/alumnos-campus.png";

const noticias = [
    { titulo: "Inicio del ciclo lectivo", descripcion: "Damos la bienvenida a todos los alumnos y docentes a un nuevo ciclo lectivo.", imagen: imgNoticia1 },
    { titulo: "Actividades educativas", descripcion: "Durante este mes se realizarán diferentes actividades y proyectos institucionales.", imagen: imgNoticia2 },
    { titulo: "Nueva propuesta tecnológica", descripcion: "El establecimiento continúa incorporando nuevas herramientas para mejorar la experiencia educativa.", imagen: imgNoticia3 }
];

const accesos = [
    { titulo: "Alumnos", descripcion: "Ingresá para consultar materias, notas, horarios y actividades.", imagen: imgAcceso1 },
    { titulo: "Profesores", descripcion: "Accedé a cursos, actividades y herramientas para docentes.", imagen: imgAcceso2 },
    { titulo: "Dirección", descripcion: "Acceso administrativo para la gestión institucional.", imagen: imgAcceso3 }
];

function Inicio() {
    const navigate = useNavigate();

    return (
        <>
            <section className="bg-primary bg-opacity-75 text-white pt-5 pb-5 overflow-hidden">
                <Container fluid className="px-4 px-lg-5">
                    <Row className="align-items-center py-5">
                        <Col lg={7} className="text-center text-lg-start">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <Badge bg="light" text="primary" className="mb-3 shadow-sm px-3 py-2 rounded-pill fs-6 fw-bold">
                                    INSTITUCIÓN EDUCATIVA
                                </Badge>
                                <h1 className="display-4 fw-bold mb-3 text-white shadow-sm" style={{textShadow: "1px 1px 2px rgba(0,0,0,0.2)"}}>
                                    Bienvenidos a nuestra comunidad educativa
                                </h1>
                                <p className="lead mb-4 text-white">
                                    Un espacio pensado para acompañar a nuestros alumnos, profesores y familias durante todo el proceso educativo.
                                </p>
                                <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start flex-wrap">
                                    <Button variant="light" size="lg" className="fw-bold text-primary shadow-sm px-4" href="#noticias">
                                        Ver novedades
                                    </Button>
                                    <Button variant="outline-light" size="lg" className="fw-semibold px-4 border-2" onClick={() => navigate("/login")}>
                                        Ingresar
                                    </Button>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={5} className="mt-5 mt-lg-0">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                <img
                                    src={imgHero}
                                    alt="Establecimiento educativo"
                                    className="img-fluid rounded-4 shadow-lg border border-white border-opacity-50"
                                />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="noticias" className="py-5 news-section bg-white">
                <Container fluid className="px-4 px-lg-5 py-5">
                    <div className="text-center mb-5">
                        <Badge bg="info" className="section-badge mb-2 px-3 py-2 rounded-pill fw-semibold text-white shadow-sm">
                            ACTUALIDAD
                        </Badge>
                        <h2 className="fw-bold text-dark">
                            Noticias del establecimiento
                        </h2>
                        <p className="text-muted lead">
                            Conocé las últimas novedades de nuestra institución.
                        </p>
                    </div>
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                    >
                         <Carrousel diapositivas={noticias} />
                    </motion.div>
                </Container>
            </section>

            <section className="py-5 access-section bg-light border-top border-bottom">
                <Container fluid className="px-4 px-lg-5 py-5">
                    <div className="text-center mb-5">
                        <Badge bg="warning" text="dark" className="section-badge mb-2 px-3 py-2 rounded-pill fw-semibold shadow-sm">
                            PLATAFORMA
                        </Badge>
                        <h2 className="fw-bold text-dark">
                            Accesos institucionales
                        </h2>
                        <p className="text-muted lead">
                            Seleccioná el espacio al que querés ingresar.
                        </p>
                    </div>

                    <motion.div 
                        className="row g-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {accesos.map((acceso, index) => (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <Card className="access-card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center transition-hover">
                                    <Card.Img variant="top" src={acceso.imagen} alt={acceso.titulo} style={{ height: '200px', objectFit: 'cover' }} />
                                    <Card.Body className="p-4 d-flex flex-column align-items-center">
                                        <Card.Title className="fw-bold text-primary mb-3 fs-4">
                                            {acceso.titulo}
                                        </Card.Title>
                                        <Card.Text className="text-muted flex-grow-1 mb-4">
                                            {acceso.descripcion}
                                        </Card.Text>
                                        <Button variant="outline-primary" className="w-100 fw-bold rounded-pill" onClick={() => navigate("/login")}>
                                            Ingresar
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </motion.div>
                </Container>
            </section>

            <section className="py-5 info-section bg-white">
                <Container fluid className="px-4 px-lg-5 py-5">
                    <Row className="align-items-center g-5">
                        <Col md={6}>
                            <motion.img 
                                src={imgInfo} 
                                alt="Estudiantes en el campus" 
                                className="img-fluid info-image rounded-4 shadow-sm"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            />
                        </Col>
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Badge bg="success" className="section-badge mb-3 px-3 py-2 rounded-pill fw-semibold shadow-sm">
                                    NUESTRA INSTITUCIÓN
                                </Badge>
                                <h2 className="fw-bold text-dark display-6 mb-3">
                                    Educación, acompañamiento y comunidad
                                </h2>
                                <p className="text-muted lead mb-4">
                                    Nuestro establecimiento busca brindar un espacio educativo moderno, inclusivo y preparado para acompañar a cada estudiante en su desarrollo académico y personal.
                                </p>
                                <Button variant="success" size="lg" className="fw-bold px-4 rounded-pill shadow-sm" onClick={() => navigate("/login")}>
                                    Conocer nuestros accesos
                                </Button>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Inicio;