import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';

function DashboardProfesor({ usuario }) {

  return (

    <Container className="py-5">

      <h1>
        👨‍🏫 Panel del Profesor
      </h1>

      <p className="text-muted mb-5">
        Bienvenido, {usuario.nombre}
      </p>


      <Row>

        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>📚</h2>

              <Card.Title>
                Mis cursos
              </Card.Title>

              <Card.Text>
                Administrá tus cursos y materias.
              </Card.Text>

              <Button variant="primary">
                Mis cursos
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>➕</h2>

              <Card.Title>
                Crear tarea
              </Card.Title>

              <Card.Text>
                Publicá nuevas tareas para tus alumnos.
              </Card.Text>

              <Button variant="success">
                Crear tarea
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>📊</h2>

              <Card.Title>
                Calificaciones
              </Card.Title>

              <Card.Text>
                Cargá y modificá las notas.
              </Card.Text>

              <Button variant="warning">
                Calificaciones
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>📅</h2>

              <Card.Title>
                Asistencia
              </Card.Title>

              <Card.Text>
                Registrá la asistencia de los alumnos.
              </Card.Text>

              <Button variant="info">
                Tomar asistencia
              </Button>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>

  );
}

export default DashboardProfesor;