import { Carousel } from 'react-bootstrap';
import hero from '../assets/hero.png';

// Cambiá "imagen" por tus propias fotos (guardalas en src/assets)
const diapositivas = [
  {
    imagen: hero,
    titulo: 'Conocé tu escuela en casa, la plataforma educativa',
  },
  {
    imagen: hero,
    titulo: 'Inscripciones abiertas para el próximo ciclo lectivo',
  },
  {
    imagen: hero,
    titulo: 'Un espacio para alumnos, profesores y directivos',
  },
];

function Carrusel() {
  return (
    <Carousel fade interval={5000} className="carrusel">
      {diapositivas.map((d, i) => (
        <Carousel.Item key={i}>
          <div
            className="carrusel-img"
            style={{ backgroundImage: `url(${d.imagen})` }}
          />
          <Carousel.Caption>
            <h1>{d.titulo}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
