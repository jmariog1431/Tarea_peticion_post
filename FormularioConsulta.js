import React, { useState } from 'react';

const FormularioConsulta = () => {
  const [carnet, setCarnet] = useState('');
  const [estudiante, setEstudiante] = useState(null);

  const handleChange = (e) => {
    setCarnet(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://test-deploy-12.onrender.com/estudiantes/${carnet}`);
    const data = await response.json();
    setEstudiante(data);
  };

  return (
    <div>
      <h1>Consulta de alumnos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Carnet:
          <input type="text" value={carnet} onChange={handleChange} required />
        </label>
        <button type="submit">Buscar</button>
      </form>
      {estudiante && (
        <div>
          <h2>Datos del Estudiante</h2>
          <p><strong>Nombre:</strong> {estudiante.Estudiante}</p>
          <p><strong>Email:</strong> {estudiante.Email}</p>
          <p><strong>Sección:</strong> {estudiante.Seccion}</p>
        </div>
      )}
    </div>
  );
};

export default FormularioConsulta;
