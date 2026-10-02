import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge
} from 'react-bootstrap';

function DashboardAlumno({ usuario }) {

  return (

    <Container className="py-5">

      <div className="mb-5">

        <h1>
          👨‍🎓 Panel del Alumno
        </h1>

        <p className="text-muted">
          Bienvenido, {usuario.nombre}
        </p>

      </div>


      <Row>

        <Col md={6} lg={3} className="mb-4">

          <Card className="dashboard-card h-100 shadow-sm">

            <Card.Body>

              <h2>📚</h2>

              <Card.Title>
                Mis materias
              </Card.Title>

              <Card.Text>
                Consultá las materias en las que estás inscripto.
              </Card.Text>

              <Button variant="primary">
                Ver materias
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="dashboard-card h-100 shadow-sm">

            <Card.Body>

              <h2>📝</h2>

              <Card.Title>
                Tareas
              </Card.Title>

              <Card.Text>
                Revisá las tareas pendientes.
              </Card.Text>

              <Badge bg="warning" className="mb-3">
                3 pendientes
              </Badge>

              <br />

              <Button variant="primary">
                Ver tareas
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="dashboard-card h-100 shadow-sm">

            <Card.Body>

              <h2>📊</h2>

              <Card.Title>
                Mis notas
              </Card.Title>

              <Card.Text>
                Consultá tus calificaciones.
              </Card.Text>

              <Button variant="success">
                Ver notas
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="dashboard-card h-100 shadow-sm">

            <Card.Body>

              <h2>📅</h2>

              <Card.Title>
                Asistencia
              </Card.Title>

              <Card.Text>
                Consultá tu historial de asistencia.
              </Card.Text>

              <Button variant="info">
                Ver asistencia
              </Button>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>

  );
}

export default DashboardAlumno;