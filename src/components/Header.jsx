import React from "react";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <header className="bg-primary text-white py-3 px-4 d-flex justify-content-between align-items-center sticky-top shadow-sm" style={{ zIndex: 1030 }}>
      <div>
        <h1 className="h5 mb-0 fw-semibold">Escuela Normal</h1>
        <small className="text-white-50 d-none d-sm-block">Portal interactivo para Alumnos y Padres</small>
      </div>
      
      <div className="d-flex align-items-center gap-3 fs-5">
        <span role="img" aria-label="Notificaciones" style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-bell"></i>
        </span>
        <span 
          className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm"
          style={{ width: '40px', height: '40px', fontSize: '0.9rem' }}
          title="Usuario Conectado: Ramiro Alumno"
        >
          RA
        </span>
      </div>
    </header>
  );
}