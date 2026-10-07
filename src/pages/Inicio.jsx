import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Badge
} from "react-bootstrap";
import Carrousel from "../components/Carrousel"; 

// 1. IMPORTACIONES LOCALES
import imgNoticia1 from "../assets/noticia1.png";
import imgNoticia2 from "../assets/noticia2.png";
import imgNoticia3 from "../assets/noticia3.png";

import imgAcceso1 from "../assets/acceso-alumnos.png";
import imgAcceso2 from "../assets/acceso-profesores.png";
import imgAcceso3 from "../assets/acceso-direccion.png";

import imgHero from "../assets/fachada-escuela.png"; 
import imgInfo from "../assets/alumnos-campus.png";

// 2. ARREGLOS DE DATOS
const noticias = [
    {
        titulo: "Inicio del ciclo lectivo",
        descripcion: "Damos la bienvenida a todos los alumnos y docentes a un nuevo ciclo lectivo.",
        imagen: imgNoticia1 
    },
    {
        titulo: "Actividades educativas",
        descripcion: "Durante este mes se realizarán diferentes actividades y proyectos institucionales.",
        imagen: imgNoticia2
    },
    {
        titulo: "Nueva propuesta tecnológica",
        descripcion: "El establecimiento continúa incorporando nuevas herramientas para mejorar la experiencia educativa.",
        imagen: imgNoticia3
    }
];

const accesos = [
    {
        titulo: "Alumnos",
        descripcion: "Ingresá para consultar materias, notas, horarios y actividades.",
        imagen: imgAcceso1
    },
    {
        titulo: "Profesores",
        descripcion: "Accedé a cursos, actividades y herramientas para docentes.",
        imagen: imgAcceso2
    },
    {
        titulo: "Dirección",
        descripcion: "Acceso administrativo para la gestión institucional.",
        imagen: imgAcceso3
    }
];

// 3. COMPONENTE PRINCIPAL
function Inicio({ setPagina }) {
    return (
        <>
            {/* HERO */}
            <section className="hero-section">
                <Container>
                    <Row className="align-items-center py-5">
                        <Col lg={7} className="text-center text-lg-start">
                            <Badge bg="light" className="hero-badge mb-3 text-dark shadow-sm">
                                INSTITUCIÓN EDUCATIVA
                            </Badge>
                            <h1 className="display-4 fw-bold">
                                Bienvenidos a nuestra comunidad educativa
                            </h1>
                            {/* Cambiado de text-secondary a text-dark */}
                            <p className="lead mt-4 text-dark">
                                Un espacio pensado para acompañar a nuestros
                                alumnos, profesores y familias durante todo el
                                proceso educativo.
                            </p>
                            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start flex-wrap">
                                <Button variant="primary" size="lg" href="#noticias">
                                    Ver novedades
                                </Button>
                                <Button variant="outline-primary" size="lg" onClick={() => setPagina("login")}>
                                    Ingresar
                                </Button>
                            </div>
                        </Col>
                        <Col lg={5} className="mt-5 mt-lg-0">
                            <img
                                src={imgHero}
                                alt="Establecimiento educativo"
                                className="img-fluid hero-image rounded-4 shadow"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* NOTICIAS */}
            <section id="noticias" className="py-5 news-section bg-white">
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <Badge bg="primary" className="section-badge mb-2">
                            ACTUALIDAD
                        </Badge>
                        <h2 className="fw-bold">
                            Noticias del establecimiento
                        </h2>
                        {/* Cambiado de text-secondary a text-dark */}
                        <p className="text-dark">
                            Conocé las últimas novedades de nuestra institución.
                        </p>
                    </div>

                    <Carrousel diapositivas={noticias} />

                </Container>
            </section>

            {/* ACCESOS */}
            <section className="py-5 access-section bg-light">
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <Badge bg="primary" className="section-badge mb-2">
                            PLATAFORMA
                        </Badge>
                        <h2 className="fw-bold">
                            Accesos institucionales
                        </h2>
                        {/* Cambiado de text-secondary a text-dark */}
                        <p className="text-dark">
                            Seleccioná el espacio al que querés ingresar.
                        </p>
                    </div>

                    <Row className="g-4">
                        {accesos.map((acceso, index) => (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <Card className="access-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                    <Card.Img
                                        variant="top"
                                        src={acceso.imagen}
                                        alt={acceso.titulo}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <Card.Title className="fw-bold">
                                            {acceso.titulo}
                                        </Card.Title>
                                        {/* Cambiado de text-secondary a text-dark */}
                                        <Card.Text className="text-dark flex-grow-1">
                                            {acceso.descripcion}
                                        </Card.Text>
                                        <Button variant="primary" className="w-100 mt-2 fw-semibold" onClick={() => setPagina("login")}>
                                            Ingresar
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* INFORMACIÓN */}
            <section className="py-5 info-section bg-white">
                <Container className="py-5">
                    <Row className="align-items-center g-5">
                        <Col md={6}>
                            <img
                                src={imgInfo}
                                alt="Estudiantes en el campus"
                                className="img-fluid info-image rounded-4 shadow"
                            />
                        </Col>
                        <Col md={6}>
                            <Badge bg="primary" className="section-badge mb-2">
                                NUESTRA INSTITUCIÓN
                            </Badge>
                            <h2 className="fw-bold">
                                Educación, acompañamiento y comunidad
                            </h2>
                            {/* Cambiado de text-secondary a text-dark */}
                            <p className="text-dark lead mt-3 mb-4">
                                Nuestro establecimiento busca brindar un espacio
                                educativo moderno, inclusivo y preparado para
                                acompañar a cada estudiante.
                            </p>
                            <Button variant="primary" size="lg" onClick={() => setPagina("login")}>
                                Conocer nuestros accesos
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Inicio;
