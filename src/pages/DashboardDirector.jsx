import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';

function DashboardDirector({ usuario }) {

  return (

    <Container className="py-5">

      <h1>
        👨‍💼 Panel del Director
      </h1>

      <p className="text-muted mb-5">
        Bienvenido, {usuario.nombre}
      </p>


      <Row>

        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>👨‍🎓</h2>

              <Card.Title>
                Alumnos
              </Card.Title>

              <Card.Text>
                Consultá y administrá los alumnos.
              </Card.Text>

              <Button variant="primary">
                Administrar
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>👨‍🏫</h2>

              <Card.Title>
                Profesores
              </Card.Title>

              <Card.Text>
                Administrá los profesores de la institución.
              </Card.Text>

              <Button variant="success">
                Administrar
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>📊</h2>

              <Card.Title>
                Estadísticas
              </Card.Title>

              <Card.Text>
                Consultá estadísticas académicas.
              </Card.Text>

              <Button variant="warning">
                Ver estadísticas
              </Button>

            </Card.Body>

          </Card>

        </Col>


        <Col md={6} lg={3} className="mb-4">

          <Card className="h-100 shadow-sm">

            <Card.Body>

              <h2>⚙️</h2>

              <Card.Title>
                Administración
              </Card.Title>

              <Card.Text>
                Configurá diferentes aspectos de la institución.
              </Card.Text>

              <Button variant="dark">
                Administrar
              </Button>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>

  );
}

export default DashboardDirector;