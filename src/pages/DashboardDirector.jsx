import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, Row, Col, Card, Form, Button, Badge, Table, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";

export default function DashboardDirector() {
  // Estados para Materias (NUEVO CRUD)
  const [materiasGlobales, setMateriasGlobales] = useState([
    { id: 1, nombre: "Matemática 4to B", curso: "4to Año" },
    { id: 2, nombre: "Física 5to A", curso: "5to Año" },
    { id: 3, nombre: "Taller de Oratoria", curso: "Varios" }
  ]);

  // Estados para Profesores (CRUD existente adaptado)
  const [profesores, setProfesores] = useState([]);
  const [profesorSeleccionado, setProfesorSeleccionado] = useState("");
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("");
  const [cargando, setCargando] = useState(true);

  // READ: Consumo inicial de la API para Profesores
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com/users";
    const obtenerProfesores = async () => {
      try {
        const response = await axios.get(API_URL);
        const profesoresApi = response.data.slice(0, 4).map((user, index) => {
          const apellido = user.name.split(" ").pop();
          return {
            id: user.id,
            nombre: `Prof. ${apellido}`,
            materias: index === 0 ? ["Matemática 4to B"] : []
          };
        });
        setProfesores(profesoresApi);
        setCargando(false);
      } catch (error) {
        Swal.fire({ icon: "error", title: "Error", text: "Fallo al conectar con la API." });
        setCargando(false);
      }
    };
    obtenerProfesores();
  }, []);

  // -----------------------------------------------------
  // CRUD MATERIAS GLOBALES DE LA INSTITUCIÓN
  // -----------------------------------------------------

  // CREATE: Registrar nueva materia en la escuela
  const crearMateria = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Registrar Nueva Materia",
      html: `
        <input id="swal-input-materia" class="swal2-input" placeholder="Nombre (ej: Biología)">
        <input id="swal-input-curso" class="swal2-input" placeholder="Curso (ej: 3ro A)">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Guardar Materia",
      confirmButtonColor: "#198754",
      preConfirm: () => {
        return [
          document.getElementById("swal-input-materia").value,
          document.getElementById("swal-input-curso").value
        ];
      }
    });

    if (formValues && formValues[0] && formValues[1]) {
      const nuevaMateriaObj = {
        id: Date.now(),
        nombre: `${formValues[0]} ${formValues[1]}`, // Une Biología + 3ro A
        curso: formValues[1]
      };
      setMateriasGlobales([...materiasGlobales, nuevaMateriaObj]);
      Swal.fire({ icon: "success", title: "Registrada", text: `La materia se añadió a la currícula.`, timer: 2000 });
    }
  };

  // DELETE: Eliminar materia de la escuela
  const eliminarMateria = (id, nombre) => {
    Swal.fire({
      title: `¿Eliminar ${nombre}?`,
      text: "Esto no quitará la materia de los profesores que ya la tienen asignada.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        setMateriasGlobales(materiasGlobales.filter(mat => mat.id !== id));
        Swal.fire({ icon: "success", title: "Eliminada", timer: 1500, showConfirmButton: false });
      }
    });
  };

  // -----------------------------------------------------
  // CRUD PROFESORES (Existente)
  // -----------------------------------------------------

  const crearProfesor = async () => {
    const { value: nombreNuevo } = await Swal.fire({
      title: "Registrar Nuevo Docente",
      input: "text",
      inputPlaceholder: "Ej: Prof. Gómez",
      showCancelButton: true,
      confirmButtonText: "Crear",
      confirmButtonColor: "#198754"
    });

    if (nombreNuevo) {
      setProfesores([...profesores, { id: Date.now(), nombre: nombreNuevo, materias: [] }]);
      Swal.fire({ icon: "success", title: "Registrado", timer: 1500, showConfirmButton: false });
    }
  };

  const editarProfesor = async (id, nombreActual) => {
    const { value: nuevoNombre } = await Swal.fire({
      title: "Editar Docente",
      input: "text",
      inputValue: nombreActual,
      showCancelButton: true,
      confirmButtonText: "Actualizar",
      confirmButtonColor: "#0d6efd"
    });

    if (nuevoNombre && nuevoNombre !== nombreActual) {
      setProfesores(profesores.map(prof => prof.id === id ? { ...prof, nombre: nuevoNombre } : prof));
      Swal.fire({ icon: "success", title: "Actualizado", timer: 1500, showConfirmButton: false });
    }
  };

  const eliminarProfesor = (id, nombre) => {
    Swal.fire({
      title: `¿Despedir a ${nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        setProfesores(profesores.filter(prof => prof.id !== id));
        Swal.fire({ icon: "success", title: "Eliminado", timer: 1500, showConfirmButton: false });
      }
    });
  };

  // UPDATE: Asignar Materia a un profesor (AQUÍ CAMBIA: Usa el select de materias globales)
  const manejarAsignacion = (e) => {
    e.preventDefault();
    if (!profesorSeleccionado || !materiaSeleccionada) {
      Swal.fire({ icon: "warning", title: "Faltan datos", text: "Elige docente y materia.", confirmButtonColor: "#f39c12" });
      return;
    }

    setProfesores(profesores.map(prof => {
      if (prof.id.toString() === profesorSeleccionado && !prof.materias.includes(materiaSeleccionada)) {
        return { ...prof, materias: [...prof.materias, materiaSeleccionada] };
      }
      return prof;
    }));
    
    setMateriaSeleccionada("");
    Swal.fire({ icon: "success", title: "Materia Asignada al Docente", timer: 1500, showConfirmButton: false });
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3 fw-bold text-primary mb-0">Panel de Dirección Institucional</h2>
      </div>

      {cargando ? (
        <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
      ) : (
        <Row className="g-4 mb-4">
          
          {/* COLUMNA IZQUIERDA: GESTIÓN DE MATERIAS Y ASIGNACIONES */}
          <Col lg={4} className="d-flex flex-column gap-4">
            
            {/* CRUD Materias Globales */}
            <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h5 fw-bold text-dark mb-0">Materias Oficiales</h3>
                <Button variant="success" size="sm" className="fw-bold rounded-pill" onClick={crearMateria}>
                  <i className="fa-solid fa-plus"></i> Nueva
                </Button>
              </div>
              
              <div className="table-responsive" style={{ maxHeight: "250px", overflowY: "auto" }}>
                <Table hover size="sm" className="align-middle mb-0">
                  <tbody>
                    {materiasGlobales.map((mat) => (
                      <tr key={mat.id}>
                        <td className="fw-semibold text-secondary">{mat.nombre}</td>
                        <td className="text-end">
                          <Button variant="outline-danger" size="sm" className="border-0" onClick={() => eliminarMateria(mat.id, mat.nombre)}>
                            <i className="fa-solid fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>

            {/* Asignación de Materias al Docente */}
            <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
              <h3 className="h5 fw-bold text-dark mb-4">Asignar Cargo</h3>
              <Form onSubmit={manejarAsignacion}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-secondary">1. Seleccionar Docente</Form.Label>
                  <Form.Select value={profesorSeleccionado} onChange={(e) => setProfesorSeleccionado(e.target.value)}>
                    <option value="">-- Elegir profesor --</option>
                    {profesores.map(prof => <option key={prof.id} value={prof.id}>{prof.nombre}</option>)}
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold text-secondary">2. Seleccionar Materia</Form.Label>
                  <Form.Select value={materiaSeleccionada} onChange={(e) => setMateriaSeleccionada(e.target.value)}>
                    <option value="">-- Elegir materia oficial --</option>
                    {materiasGlobales.map(mat => <option key={mat.id} value={mat.nombre}>{mat.nombre}</option>)}
                  </Form.Select>
                </Form.Group>
                
                <Button type="submit" variant="primary" className="w-100 fw-bold rounded-pill shadow-sm">
                  <i className="fa-solid fa-link me-2"></i> Vincular Docente
                </Button>
              </Form>
            </Card>
          </Col>

          {/* COLUMNA DERECHA: CRUD PROFESORES */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h5 fw-bold text-dark mb-0">Nómina de Docentes</h3>
                <Button variant="success" className="fw-bold rounded-pill shadow-sm" onClick={crearProfesor}>
                  <i className="fa-solid fa-user-plus me-2"></i> Nuevo Docente
                </Button>
              </div>
              
              <div className="table-responsive">
                <Table hover className="align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Docente</th>
                      <th>Materias Asignadas</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profesores.map((prof) => (
                      <tr key={prof.id}>
                        <td className="fw-bold text-dark">{prof.nombre}</td>
                        <td>
                          <div className="d-flex flex-wrap gap-2">
                            {prof.materias.map((materia, idx) => (
                              <Badge bg="primary" text="white" key={idx} className="rounded-pill px-3 py-2 shadow-sm">
                                {materia}
                              </Badge>
                            ))}
                            {prof.materias.length === 0 && <span className="text-muted small fst-italic">Sin asignar</span>}
                          </div>
                        </td>
                        <td className="text-center text-nowrap">
                          <Button 
                            variant="primary" 
                            size="sm" 
                            className="me-2 fw-bold shadow-sm" 
                            onClick={() => editarProfesor(prof.id, prof.nombre)}
                          >
                            <i className="fa-solid fa-pen me-1"></i> Editar
                          </Button>
                          <Button 
                            variant="danger" 
                            size="sm" 
                            className="fw-bold shadow-sm" 
                            onClick={() => eliminarProfesor(prof.id, prof.nombre)}
                          >
                            <i className="fa-solid fa-trash me-1"></i> Eliminar
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}