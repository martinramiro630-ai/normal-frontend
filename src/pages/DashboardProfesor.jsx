import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, Row, Col, Card, Form, Button, Spinner } from "react-bootstrap";

export default function DashboardProfesor({ usuario }) {
  const [datosProfesor, setDatosProfesor] = useState({ materias: ["Matemática 4to B", "Física 5to A"], alumnos: {} });
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("Matemática 4to B");
  const [cargando, setCargando] = useState(true);

  // READ: Carga inicial de alumnos desde la API
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com/users";
    const obtenerAlumnos = async () => {
      try {
        const response = await axios.get(API_URL);
        const alumnosFormateados = response.data.map((user) => ({
          id: user.id,
          nombre: user.name,
          asistencia: "90%",
          notas: { trim1: "", trim2: "", trim3: "" }
        }));
        setDatosProfesor({
          materias: ["Matemática 4to B", "Física 5to A"],
          alumnos: {
            "Matemática 4to B": alumnosFormateados.slice(0, 4),
            "Física 5to A": alumnosFormateados.slice(4, 8)
          }
        });
        setCargando(false);
      } catch (error) {
        setCargando(false);
      }
    };
    obtenerAlumnos();
  }, []);

  // CREATE: Agregar alumno a la materia
  const matricularAlumno = async () => {
    const { value: nombreAlumno } = await Swal.fire({
      title: "Matricular Alumno",
      text: `Ingresa el nombre del alumno para ${materiaSeleccionada}`,
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Matricular",
      confirmButtonColor: "#0d6efd"
    });

    if (nombreAlumno) {
      const nuevoAlumno = {
        id: Date.now(),
        nombre: nombreAlumno,
        asistencia: "100%",
        notas: { trim1: "", trim2: "", trim3: "" }
      };
      
      setDatosProfesor(prev => ({
        ...prev,
        alumnos: {
          ...prev.alumnos,
          [materiaSeleccionada]: [...(prev.alumnos[materiaSeleccionada] || []), nuevoAlumno]
        }
      }));
      Swal.fire({ icon: "success", title: "Matriculado", timer: 1500, showConfirmButton: false });
    }
  };

  // UPDATE: Actualizar notas del alumno
  const manejarGuardado = (idAlumno, materia) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `Calificaciones guardadas exitosamente`,
      showConfirmButton: false,
      timer: 2000
    });
  };

  // DELETE: Dar de baja a un alumno
  const eliminarAlumno = (idAlumno, nombre) => {
    Swal.fire({
      title: `¿Dar de baja a ${nombre}?`,
      text: `Se eliminará de la materia ${materiaSeleccionada}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Dar de baja"
    }).then((result) => {
      if (result.isConfirmed) {
        setDatosProfesor(prev => ({
          ...prev,
          alumnos: {
            ...prev.alumnos,
            [materiaSeleccionada]: prev.alumnos[materiaSeleccionada].filter(a => a.id !== idAlumno)
          }
        }));
        Swal.fire({ icon: "success", title: "Baja procesada", timer: 1500, showConfirmButton: false });
      }
    });
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3 fw-bold text-primary mb-0">Panel Docente</h2>
      </div>

      {cargando ? (
        <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
      ) : (
        <Row className="g-4">
          <Col lg={12}>
            <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
              <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                <Form.Group className="w-50">
                  <Form.Label className="fw-bold text-dark"><i className="fa-solid fa-book-open me-2 text-primary"></i>Materia Asignada</Form.Label>
                  <Form.Select size="lg" value={materiaSeleccionada} onChange={(e) => setMateriaSeleccionada(e.target.value)}>
                    {datosProfesor.materias.map((materia, index) => <option key={index} value={materia}>{materia}</option>)}
                  </Form.Select>
                </Form.Group>
                
                <Button variant="success" size="lg" className="fw-bold mt-3 rounded-pill" onClick={matricularAlumno}>
                  <i className="fa-solid fa-user-plus me-2"></i> Agregar Alumno
                </Button>
              </div>
            </Card>
          </Col>

          <Col lg={12}>
            <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Nombre del Alumno</th>
                      <th className="text-center">Asistencia</th>
                      <th className="text-center" style={{width: "12%"}}>1° Trim</th>
                      <th className="text-center" style={{width: "12%"}}>2° Trim</th>
                      <th className="text-center" style={{width: "12%"}}>3° Trim</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosProfesor.alumnos[materiaSeleccionada]?.map((alumno) => (
                      <tr key={alumno.id}>
                        <td className="fw-semibold text-dark">{alumno.nombre}</td>
                        <td className="text-center">
                           <Form.Select size="sm" className="d-inline-block w-auto">
                             <option value="presente">Presente</option>
                             <option value="ausente">Ausente</option>
                           </Form.Select>
                        </td>
                        <td className="text-center"><Form.Control type="number" size="sm" defaultValue={alumno.notas.trim1} className="text-center mx-auto"/></td>
                        <td className="text-center"><Form.Control type="number" size="sm" defaultValue={alumno.notas.trim2} className="text-center mx-auto"/></td>
                        <td className="text-center"><Form.Control type="number" size="sm" defaultValue={alumno.notas.trim3} className="text-center mx-auto"/></td>
                        <td className="text-center text-nowrap">
                          <Button 
                            variant="primary" 
                            size="sm" 
                            className="fw-bold me-2 shadow-sm" 
                            onClick={() => manejarGuardado(alumno.id, materiaSeleccionada)}
                          >
                            <i className="fa-solid fa-floppy-disk me-1"></i> Guardar
                          </Button>
                          <Button 
                            variant="danger" 
                            size="sm" 
                            className="fw-bold shadow-sm" 
                            onClick={() => eliminarAlumno(alumno.id, alumno.nombre)}
                          >
                            <i className="fa-solid fa-user-xmark me-1"></i> Baja
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}