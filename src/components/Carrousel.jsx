import { Carousel } from 'react-bootstrap';

import img1 from '../assets/noticia1.png';
import img2 from '../assets/noticia2.png'; 
import img3 from '../assets/noticia3.png'; 

const diapositivas = [
  {
    imagen: img1,
    titulo: 'Conocé tu escuela en casa, la plataforma educativa',
    alt: 'Plataforma educativa de la Escuela Normal', 
  },
  {
    imagen: img2,
    titulo: 'Inscripciones abiertas para el próximo ciclo lectivo',
    alt: 'Cartel de inscripciones abiertas',
  },
  {
    imagen: img3,
    titulo: 'Un espacio para alumnos, profesores y directivos',
    alt: 'Alumnos y profesores compartiendo en la escuela',
  },
];

function Carrusel() {
  return (
    <Carousel fade interval={5000} className="carrusel shadow-sm rounded-4 overflow-hidden mb-4">
      {diapositivas.map((d, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100 carrusel-img"
            src={d.imagen}
            alt={d.alt}
            style={{ objectFit: 'cover', height: '400px' }} 
          />
          
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3 mb-4">
            <h2 className="h3 fw-bold text-white mb-0">{d.titulo}</h2>
          </Carousel.Caption>
          
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;