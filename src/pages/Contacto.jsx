import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button
} from 'react-bootstrap';

function Contacto() {

  return (

    <Container className="py-5">

      <h1 className="text-center mb-5">
        📞 Contacto
      </h1>

      <Row className="justify-content-center">

        <Col lg={5} className="mb-4">

          <Card className="shadow-sm h-100">

            <Card.Body>

              <Card.Title>
                Información institucional
              </Card.Title>

              <hr />

              <p>
                📍 Dirección: Av. Principal 123
              </p>

              <p>
                📞 Teléfono: (0381) 555-1234
              </p>

              <p>
                📧 Email: contacto@escuela.edu.ar
              </p>

              <p>
                🕐 Horario: 08:00 - 18:00
              </p>

            </Card.Body>

          </Card>

        </Col>


        <Col lg={6}>

          <Card className="shadow-sm">

            <Card.Body>

              <Card.Title>
                Enviar consulta
              </Card.Title>

              <Form>

                <Form.Group className="mb-3">

                  <Form.Label>
                    Nombre
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Tu nombre"
                  />

                </Form.Group>


                <Form.Group className="mb-3">

                  <Form.Label>
                    Email
                  </Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="tu@email.com"
                  />

                </Form.Group>


                <Form.Group className="mb-3">

                  <Form.Label>
                    Mensaje
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Escribí tu consulta..."
                  />

                </Form.Group>


                <Button variant="primary">
                  Enviar mensaje
                </Button>

              </Form>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>

  );
}

export default Contacto;