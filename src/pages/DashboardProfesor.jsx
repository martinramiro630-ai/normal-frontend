import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col, Card, Form, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

export default function DashboardProfesor({ usuario }) {
  // 1. Datos Simulados: El perfil del profesor y sus alumnos por materia
  // En la vida real, esto vendría de tu base de datos o API.
  const [datosProfesor, setDatosProfesor] = useState({
    materias: ["Matemática 4to B", "Física 5to A"],
    alumnos: {
      "Matemática 4to B": [
        { id: 1, nombre: "Ramiro Martin", asistencia: "92%", notas: { trim1: 8, trim2: 7, trim3: "-" } },
        { id: 2, nombre: "Lucca Lazarte", asistencia: "85%", notas: { trim1: 6, trim2: 8, trim3: "-" } },
        { id: 3, nombre: "Abel Carrera", asistencia: "100%", notas: { trim1: 10, trim2: 9, trim3: "-" } },
      ],
      "Física 5to A": [
        { id: 4, nombre: "Ana Gómez", asistencia: "70%", notas: { trim1: 5, trim2: 6, trim3: "-" } },
        { id: 5, nombre: "Carlos Pérez", asistencia: "95%", notas: { trim1: 9, trim2: 9, trim3: "-" } },
      ]
    }
  });

  // 2. Estados para controlar qué materia se está viendo
  // Por defecto, seleccionamos la primera materia del profesor
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(datosProfesor.materias[0] || "");

  // Función para simular que se guardan los cambios de un alumno
  const manejarGuardado = (nombreAlumno) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `Datos guardados para ${nombreAlumno}`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h3 fw-bold text-primary mb-0">Panel Docente</h2>
          <p className="text-muted mb-0">Bienvenido, {usuario.nombre || "Profesor"}</p>
        </div>
      </div>

      <Row className="g-4">
        {/* Selector de Materias (Lógica clave) */}
        <Col lg={12}>
          <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
            <Form.Group>
              <Form.Label className="fw-bold text-dark fs-5">
                <i className="fa-solid fa-book-open me-2 text-primary"></i>
                Seleccionar Materia Asignada
              </Form.Label>
              <Form.Select 
                size="lg"
                value={materiaSeleccionada}
                onChange={(e) => setMateriaSeleccionada(e.target.value)}
                className="focus-ring focus-ring-primary bg-light shadow-sm"
              >
                {/* Iteramos sobre las materias asignadas a este profesor */}
                {datosProfesor.materias.map((materia, index) => (
                  <option key={index} value={materia}>
                    {materia}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Card>
        </Col>

        {/* Tabla de Alumnos basada en la materia seleccionada */}
        <Col lg={12}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 border-start border-primary border-4 shadow-sm rounded-4 p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h5 fw-bold text-dark mb-0">
                  Alumnos inscritos en: <span className="text-primary">{materiaSeleccionada}</span>
                </h3>
                <Badge bg="info" className="fs-6">
                  {datosProfesor.alumnos[materiaSeleccionada]?.length || 0} Alumnos
                </Badge>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Nombre del Alumno</th>
                      <th className="text-center">Asistencia Gral.</th>
                      <th className="text-center">Asistencia Hoy</th>
                      <th className="text-center">1° Trim</th>
                      <th className="text-center">2° Trim</th>
                      <th className="text-center">3° Trim</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Renderizamos solo los alumnos de la materia seleccionada */}
                    {datosProfesor.alumnos[materiaSeleccionada]?.map((alumno) => (
                      <tr key={alumno.id}>
                        <td className="fw-bold text-secondary">#{alumno.id}</td>
                        <td className="fw-semibold text-dark">{alumno.nombre}</td>
                        <td className="text-center">
                          <Badge bg={parseInt(alumno.asistencia) > 80 ? "success" : "warning"}>
                            {alumno.asistencia}
                          </Badge>
                        </td>
                        <td className="text-center">
                           <Form.Select size="sm" className="d-inline-block w-auto focus-ring focus-ring-primary">
                             <option value="presente">Presente</option>
                             <option value="ausente">Ausente</option>
                             <option value="tardanza">Tardanza</option>
                           </Form.Select>
                        </td>
                        <td className="text-center">
                          <Form.Control type="number" size="sm" defaultValue={alumno.notas.trim1} min="1" max="10" className="text-center w-75 mx-auto"/>
                        </td>
                        <td className="text-center">
                           <Form.Control type="number" size="sm" defaultValue={alumno.notas.trim2} min="1" max="10" className="text-center w-75 mx-auto"/>
                        </td>
                        <td className="text-center">
                           <Form.Control type="text" size="sm" defaultValue={alumno.notas.trim3} className="text-center w-75 mx-auto" placeholder="-"/>
                        </td>
                        <td className="text-center">
                          <Button 
                            variant="primary" 
                            size="sm" 
                            className="fw-bold"
                            onClick={() => manejarGuardado(alumno.nombre)}
                          >
                            <i className="fa-solid fa-floppy-disk"></i> Guardar
                          </Button>
                        </td>
                      </tr>
                    ))}
                    
                    {/* Mensaje por si una materia no tiene alumnos */}
                    {(!datosProfesor.alumnos[materiaSeleccionada] || datosProfesor.alumnos[materiaSeleccionada].length === 0) && (
                        <tr>
                            <td colSpan="8" className="text-center py-4 text-muted">
                                No hay alumnos inscritos en esta materia todavía.
                            </td>
                        </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}