import { useState } from 'react';

export default function Notas() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [promedio, setPromedio] = useState(null);

  const calcularPromedio = () => {
    const v1 = parseFloat(n1);
    const v2 = parseFloat(n2);
    const v3 = parseFloat(n3);

    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
      setPromedio({ error: true, msg: 'Ingresá las 3 notas correctamente.' });
      return;
    }

    const calc = ((v1 + v2 + v3) / 3).toFixed(2);
    setPromedio({
      error: false,
      aprobado: calc >= 6,
      valor: calc,
    });
  };

  return (
    <section className="card border-0 border-start border-success border-4 shadow-sm rounded-4 p-4 bg-white">
      <h2 className="h5 fw-bold mb-3 text-success">
        <i className="fa-solid fa-graduation-cap me-2"></i> Notas y Libreta
      </h2>

      <div className="table-responsive mb-4">
        <table className="table table-bordered table-striped text-center align-middle small mb-0">
          <thead className="table-success">
            <tr>
              <th className="text-start">Materia</th>
              <th>1° Trim</th>
              <th>2° Trim</th>
              <th>3° Trim</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold text-start text-secondary">Matemáticas</td>
              <td>8</td>
              <td>7</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="fw-bold text-start text-secondary">Literatura</td>
              <td>9</td>
              <td>9</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-light p-3 rounded-3 border">
        <h6 className="fw-bold mb-3">Simulador de Promedio Final</h6>
        <div className="d-flex gap-2 mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Trim 1"
            value={n1}
            onChange={(e) => setN1(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Trim 2"
            value={n2}
            onChange={(e) => setN2(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Trim 3"
            value={n3}
            onChange={(e) => setN3(e.target.value)}
          />
        </div>
        <button onClick={calcularPromedio} className="btn btn-success w-100 fw-semibold">
          Calcular Promedio
        </button>

        {promedio && (
          <p className={`mt-3 mb-0 fs-6 text-center fw-bold ${
            promedio.error ? 'text-warning' : promedio.aprobado ? 'text-success' : 'text-danger'
          }`}>
            {promedio.error ? promedio.msg : `${promedio.aprobado ? 'Aprobado' : 'Desaprobado'}: Promedio ${promedio.valor}`}
          </p>
        )}
      </div>
    </section>
  );
}