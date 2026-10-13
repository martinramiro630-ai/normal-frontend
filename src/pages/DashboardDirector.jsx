import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col, Card, Form, Button, Badge, Table } from "react-bootstrap";
import { motion } from "framer-motion";
import fachadaImg from '../assets/fachada-escuela.png';

export default function DashboardDirector({ usuario }) {
  // 1. Estados para Profesores
  const [profesores, setProfesores] = useState([
    { id: 1, nombre: "Prof. Martínez", materias: ["Matemática 4to B", "Matemática 5to A"] },
    { id: 2, nombre: "Prof. Ruiz", materias: ["Física 5to A"] },
    { id: 3, nombre: "Prof. Gómez", materias: ["Taller de Oratoria"] },
    { id: 4, nombre: "Prof. Smith", materias: [] }
  ]);
  const [profesorSeleccionado, setProfesorSeleccionado] = useState("");
  const [nuevaMateria, setNuevaMateria] = useState("");

  // 2. Estados para el Carrusel de Imágenes (Conectado a Assets locales)
  const [carrusel, setCarrusel] = useState([
    { id: 1, url: fachadaImg, titulo: "Fachada de la Escuela" }, // <-- Imagen local cargada
    { id: 2, url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500", titulo: "Nuevos Laboratorios" }
  ]);
  const [nuevaImagen, setNuevaImagen] = useState({ url: "", titulo: "" });

  // Manejador de Asignación de Materias
  const manejarAsignacion = (e) => {
    e.preventDefault();
    if (!profesorSeleccionado || !nuevaMateria.trim()) {
      Swal.fire({ icon: "warning", title: "Datos incompletos", text: "Selecciona un profesor y escribe la materia.", confirmButtonColor: "#f39c12" });
      return;
    }

    const profesoresActualizados = profesores.map(prof => {
      if (prof.id.toString() === profesorSeleccionado) {
        return { ...prof, materias: [...prof.materias, nuevaMateria] };
      }
      return prof;
    });

    setProfesores(profesoresActualizados);
    const nombreProfe = profesores.find(p => p.id.toString() === profesorSeleccionado).nombre;
    Swal.fire({ icon: "success", title: "Materia Asignada", text: `Se asignó "${nuevaMateria}" a ${nombreProfe}.`, confirmButtonColor: "#198754" });
    setNuevaMateria("");
  };

  // Manejador del Carrusel
  const manejarCarrusel = (e) => {
    e.preventDefault();
    if (!nuevaImagen.url.trim() || !nuevaImagen.titulo.trim()) {
      Swal.fire({ icon: "warning", title: "Campos vacíos", text: "Por favor, ingresa la URL de la imagen y un título descriptivo.", confirmButtonColor: "#f39c12" });
      return;
    }

    const imagenAgregada = {
      id: Date.now(),
      url: nuevaImagen.url,
      titulo: nuevaImagen.titulo
    };

    setCarrusel([imagenAgregada, ...carrusel]);
    
    Swal.fire({
      icon: "success",
      title: "Carrusel Actualizado",
      text: "La nueva imagen ya está visible en la página de inicio.",
      confirmButtonColor: "#198754"
    });

    setNuevaImagen({ url: "", titulo: "" });
  };

  const eliminarImagen = (id) => {
    setCarrusel(carrusel.filter(img => img.id !== id));
    Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Imagen removida', showConfirmButton: false, timer: 2000 });
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h3 fw-bold text-primary mb-0">Panel de Dirección</h2>
          <p className="text-muted mb-0">Gestión Académica y Contenido del Portal</p>
        </div>
      </div>

      <Row className="g-4 mb-4">
        {/* SECCIÓN ACADÉMICA: Asignación */}
        <Col lg={4}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 border-start border-primary border-4 shadow-sm rounded-4 p-4 h-100 bg-white">
              <h3 className="h5 fw-bold text-dark mb-4">
                <i className="fa-solid fa-chalkboard-user me-2 text-primary"></i> Asignar Materia
              </h3>
              <Form onSubmit={manejarAsignacion}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-secondary">Seleccionar Docente</Form.Label>
                  <Form.Select value={profesorSeleccionado} onChange={(e) => setProfesorSeleccionado(e.target.value)} className="focus-ring focus-ring-primary bg-light">
                    <option value="">-- Elegir profesor --</option>
                    {profesores.map(prof => <option key={prof.id} value={prof.id}>{prof.nombre}</option>)}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-semibold text-secondary">Materia y Curso</Form.Label>
                  <Form.Control type="text" placeholder="Ej: Biología 3ro A" value={nuevaMateria} onChange={(e) => setNuevaMateria(e.target.value)} className="focus-ring focus-ring-primary bg-light" />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100 fw-bold rounded-pill shadow-sm">Asignar al Profesor</Button>
              </Form>
            </Card>
          </motion.div>
        </Col>

        {/* SECCIÓN ACADÉMICA: Plantel */}
        <Col lg={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h5 fw-bold text-dark mb-0">Plantel Docente Activo</h3>
                <Badge bg="success" className="fs-6 px-3">{profesores.length} Profesores</Badge>
              </div>
              <div className="table-responsive">
                <Table hover className="align-middle mb-0">
                  <thead className="table-light">
                    <tr><th className="text-secondary">Docente</th><th className="text-secondary">Materias Asignadas</th></tr>
                  </thead>
                  <tbody>
                    {profesores.map((prof) => (
                      <tr key={prof.id}>
                        <td className="fw-bold text-dark">{prof.nombre}</td>
                        <td>
                          {prof.materias.length > 0 ? (
                            <div className="d-flex flex-wrap gap-2">
                              {/* <-- AQUI ESTA LA CORRECCIÓN DE CONTRASTE --> */}
                              {prof.materias.map((materia, idx) => (
                                <Badge 
                                  bg="light" 
                                  text="primary" 
                                  key={idx} 
                                  className="rounded-pill border border-primary px-3 py-2 shadow-sm"
                                >
                                  {materia}
                                </Badge>
                              ))}
                            </div>
                          ) : <span className="text-muted small fst-italic">Sin materias asignadas</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* SECCIÓN DE DISEÑO WEB (CARRUSEL) */}
      <Row className="g-4">
        <Col lg={4}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
             <Card className="border-0 border-start border-warning border-4 shadow-sm rounded-4 p-4 h-100 bg-white">
              <h3 className="h5 fw-bold text-dark mb-4">
                <i className="fa-regular fa-images me-2 text-warning"></i> Actualizar Carrusel
              </h3>
              <Form onSubmit={manejarCarrusel}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-secondary">URL de la Imagen</Form.Label>
                  <Form.Control type="url" placeholder="https://ejemplo.com/foto.jpg" value={nuevaImagen.url} onChange={(e) => setNuevaImagen({...nuevaImagen, url: e.target.value})} className="focus-ring focus-ring-warning bg-light" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-semibold text-secondary">Título de la Diapositiva</Form.Label>
                  <Form.Control type="text" placeholder="Ej: Acto del 25 de Mayo" value={nuevaImagen.titulo} onChange={(e) => setNuevaImagen({...nuevaImagen, titulo: e.target.value})} className="focus-ring focus-ring-warning bg-light" />
                </Form.Group>
                <Button type="submit" variant="warning" className="w-100 fw-bold rounded-pill shadow-sm text-dark">Subir Imagen</Button>
              </Form>
             </Card>
          </motion.div>
        </Col>

        <Col lg={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
             <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <h3 className="h5 fw-bold text-dark mb-4">Imágenes Activas en Inicio</h3>
                <div className="d-flex gap-3 flex-wrap">
                  {carrusel.map((img) => (
                    <div key={img.id} className="position-relative shadow-sm rounded overflow-hidden" style={{ width: "200px", height: "120px" }}>
                      <img src={img.url} alt={img.titulo} className="w-100 h-100 object-fit-cover" />
                      <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-1 small text-truncate text-center">
                        {img.titulo}
                      </div>
                      <Button variant="danger" size="sm" className="position-absolute top-0 end-0 m-1 px-2 py-0 rounded-circle" onClick={() => eliminarImagen(img.id)}>
                        <i className="fa-solid fa-xmark"></i>
                      </Button>
                    </div>
                  ))}
                </div>
             </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}