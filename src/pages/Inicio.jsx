
import React from "react";
import {
    Container,
    Row,
    Col,
    Carousel,
    Card,
    Button,
    Badge
} from "react-bootstrap";

const noticias = [
    {
        titulo: "Inicio del ciclo lectivo",
        descripcion:
            "Damos la bienvenida a todos los alumnos y docentes a un nuevo ciclo lectivo.",
        imagen:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
    },
    {
        titulo: "Actividades educativas",
        descripcion:
            "Durante este mes se realizarán diferentes actividades y proyectos institucionales.",
        imagen:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80"
    },
    {
        titulo: "Nueva propuesta tecnológica",
        descripcion:
            "El establecimiento continúa incorporando nuevas herramientas para mejorar la experiencia educativa.",
        imagen:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
    }
];

const accesos = [
    {
        titulo: "Alumnos",
        descripcion:
            "Ingresá para consultar materias, notas, horarios y actividades.",
        imagen:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
        titulo: "Profesores",
        descripcion:
            "Accedé a cursos, actividades y herramientas para docentes.",
        imagen:
            "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
    },
    {
        titulo: "Dirección",
        descripcion:
            "Acceso administrativo para la gestión institucional.",
        imagen:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
    }
];

function Inicio({ setPagina }) {

    return (
        <>

            {/* HERO */}
            <section className="hero-section">

                <Container>

                    <Row className="align-items-center py-5">

                        <Col
                            lg={7}
                            className="text-center text-lg-start"
                        >

                            <Badge
                                bg="light"
                                className="hero-badge mb-3"
                            >
                                INSTITUCIÓN EDUCATIVA
                            </Badge>

                            <h1 className="display-4 fw-bold">
                                Bienvenidos a nuestra comunidad educativa
                            </h1>

                            <p className="lead mt-4">
                                Un espacio pensado para acompañar a nuestros
                                alumnos, profesores y familias durante todo el
                                proceso educativo.
                            </p>

                            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start flex-wrap">

                                <Button
                                    variant="light"
                                    size="lg"
                                    href="#noticias"
                                >
                                    Ver novedades
                                </Button>

                                <Button
                                    variant="outline-light"
                                    size="lg"
                                    onClick={() => setPagina("login")}
                                >
                                    Ingresar
                                </Button>

                            </div>

                        </Col>


                        <Col
                            lg={5}
                            className="mt-5 mt-lg-0"
                        >

                            <img
                                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=80"
                                alt="Establecimiento educativo"
                                className="img-fluid hero-image"
                            />

                        </Col>

                    </Row>

                </Container>

            </section>


            {/* NOTICIAS */}
            <section
                id="noticias"
                className="py-5 news-section"
            >

                <Container className="py-5">

                    <div className="text-center mb-5">

                        <Badge bg="primary" className="section-badge">
                            ACTUALIDAD
                        </Badge>

                        <h2 className="fw-bold mt-2">
                            Noticias del establecimiento
                        </h2>

                        <p className="text-secondary">
                            Conocé las últimas novedades de nuestra institución.
                        </p>

                    </div>


                    <Carousel
                        interval={5000}
                        pause="hover"
                        className="news-carousel"
                    >

                        {noticias.map((noticia, index) => (

                            <Carousel.Item key={index}>

                                <img
                                    src={noticia.imagen}
                                    alt={noticia.titulo}
                                    className="d-block w-100 carousel-image"
                                />

                                <Carousel.Caption>

                                    <h3 className="fw-bold">
                                        {noticia.titulo}
                                    </h3>

                                    <p>
                                        {noticia.descripcion}
                                    </p>

                                    <Button
                                        variant="light"
                                        onClick={() =>
                                            alert(
                                                `Noticia seleccionada: ${noticia.titulo}`
                                            )
                                        }
                                    >
                                        Leer noticia
                                    </Button>

                                </Carousel.Caption>

                            </Carousel.Item>

                        ))}

                    </Carousel>

                </Container>

            </section>


            {/* ACCESOS */}
            <section className="py-5 access-section">

                <Container className="py-5">

                    <div className="text-center mb-5">

                        <Badge bg="primary" className="section-badge">
                            PLATAFORMA
                        </Badge>

                        <h2 className="fw-bold mt-2">
                            Accesos institucionales
                        </h2>

                        <p className="text-secondary">
                            Seleccioná el espacio al que querés ingresar.
                        </p>

                    </div>


                    <Row className="g-4">

                        {accesos.map((acceso, index) => (

                            <Col
                                key={index}
                                xs={12}
                                md={6}
                                lg={4}
                            >

                                <Card className="access-card h-100 border-0">

                                    <Card.Img
                                        variant="top"
                                        src={acceso.imagen}
                                        alt={acceso.titulo}
                                        className="access-image"
                                    />

                                    <Card.Body className="p-4">

                                        <Card.Title className="fw-bold">
                                            {acceso.titulo}
                                        </Card.Title>

                                        <Card.Text className="text-secondary">
                                            {acceso.descripcion}
                                        </Card.Text>

                                        <Button
                                            variant="primary"
                                            onClick={() => setPagina("login")}
                                        >
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
            <section className="py-5 info-section">

                <Container className="py-5">

                    <Row className="align-items-center g-5">

                        <Col md={6}>

                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                                alt="Estudiantes"
                                className="img-fluid info-image"
                            />

                        </Col>


                        <Col md={6}>

                            <Badge bg="primary" className="section-badge">
                                NUESTRA INSTITUCIÓN
                            </Badge>

                            <h2 className="fw-bold mt-3">
                                Educación, acompañamiento y comunidad
                            </h2>

                            <p className="text-secondary lead mt-3">
                                Nuestro establecimiento busca brindar un espacio
                                educativo moderno, inclusivo y preparado para
                                acompañar a cada estudiante.
                            </p>

                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => setPagina("login")}
                            >
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
