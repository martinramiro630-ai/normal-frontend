# Portal Académico - Escuela Normal

Este repositorio contiene el código fuente de un portal de gestión académica para la Escuela Normal, desarrollado con **React**, **React Router**, **Bootstrap 5**, **Vite** y **Axios**. Permite a estudiantes, docentes y administradores gestionar y visualizar información académica de manera dinámica y responsiva[cite: 9, 13, 20].

## Integrantes
* Abel Carrera
* Ramiro Martin
* Lucca Lazarte
* Nicolas Gonzalez

## Descripción breve
Este proyecto consiste en el desarrollo de un sitio web de un portal académico con secciones dinámicas y diseño adaptable[cite: 9]. El objetivo fue evolucionar de un maquetado estático con HTML/CSS puro hacia una *Single Page Application* (SPA) modular utilizando React[cite: 9, 20]. La plataforma cuenta con sistemas de autenticación simulada, dashboards diferenciados por rol (Alumno, Profesor, Director) e interactividad en tiempo real para consultas de notas, horarios y asistencia[cite: 10, 20].

## Tecnologías utilizadas
* **React 18** (Vite): Construcción de componentes interactivos y manejo de estados[cite: 20].
* **React Router DOM**: Gestión de rutas, navegación programática y protección de URLs.
* **React Bootstrap & Bootstrap 5**: Sistema de grillas, tarjetas y componentes responsivos[cite: 10, 11, 20].
* **Axios**: Peticiones HTTP.
* **SweetAlert2**: Manejo de alertas modales e interacciones.
* **FontAwesome**: Iconografía[cite: 10, 12, 19].
* **GitHub**: Control de versiones y trabajo colaborativo[cite: 9, 13].

## Funcionalidades Principales
1. **Navegación Dinámica:** Uso de `react-router-dom` (`<BrowserRouter>`, `<Routes>`, `<Route>`) para el cambio de vistas sin recargar la página.
2. **Dashboards por Rol:** 
   * **Panel Alumno:** Visualización de materias activas, resumen de calificaciones y porcentaje de asistencia.
   * **Panel Profesor:** Carga de notas y registro de asistencias mediante formularios interactivos.
3. **Rutas Protegidas:** Implementación de un componente de seguridad que valida el rol del usuario antes de permitir el acceso a los dashboards.
4. **Interactividad:** Uso intensivo de los hooks `useState` y `useEffect` para el manejo de la sesión, simulaciones asíncronas y filtrado en tiempo real.

## Estrategias SEO Implementadas
Para garantizar un correcto posicionamiento e indexación del portal por parte de los motores de búsqueda, se aplicaron las siguientes estrategias técnicas[cite: 9]:

* **HTML Semántico:** Estructuración del documento utilizando etiquetas descriptivas (`<header>`, `<nav>`, `<aside>`, `<main>`, `<section>`) para indicar claramente las áreas de navegación y contenido principal[cite: 9, 12].
* **Jerarquía de Encabezados:** Uso de un único `<h1>` por documento para definir el título principal de la página, respetando la estructura lógica de los subtítulos (`<h2>`, `<h3>`) en las tarjetas[cite: 9, 12].
* **Etiquetas Meta:** Inclusión de etiquetas `description` y `keywords` para contextualizar el contenido académico, y directivas `robots` (`index, follow`) para autorizar el rastreo de los bots[cite: 9, 10, 12, 18].
* **Accesibilidad e Imágenes:** Implementación del atributo `alt` descriptivo en las imágenes (ej. "Foto de perfil del alumno") para mejorar la lectura por asistentes de voz y la indexación visual[cite: 9, 10, 12, 19].
* **Diseño Adaptable (Mobile-First):** Integración completa del sistema de grillas y Media Queries de Bootstrap (y anteriormente configuraciones propias) para asegurar el posicionamiento en buscadores que priorizan plataformas responsivas[cite: 9, 11].

## Diseño y Maquetación Histórica (TP1 y TP2)
* **Flexbox y CSS Grid:** Utilizados en etapas iniciales (y luego delegados a las utilidades de Bootstrap) para estructurar el layout de dos columnas del menú lateral y las cuadrículas de tarjetas[cite: 11, 13].
* **Variables CSS:** Uso de pseudoclases `:root` para centralizar la paleta de colores institucional[cite: 11, 13].

## Modelo Relacional de Base de Datos
El proyecto cuenta con un esquema relacional normalizado diseñado para su futura implementación en SQL, modelando[cite: 20]:
* Entidad central de **Usuarios** con control de roles (`ALUMNO`, `PADRE`, `DOCENTE`, `ADMIN`)[cite: 20].
* Relaciones Many-to-Many entre **Alumnos** y **Tutores** mediante una tabla intermedia[cite: 20].
* Entidades de gestión académica: **Materias**, **Inscripciones**, **Exámenes**, **Calificaciones** y **Asistencias**[cite: 20].