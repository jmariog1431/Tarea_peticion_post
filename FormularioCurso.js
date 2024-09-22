import React, { useState } from 'react';

const FormularioCurso = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const curso = { nombre, creditos: parseInt(creditos), descripcion };
    const response = await fetch('https://test-deploy-12.onrender.com/cursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(curso),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Creación de Cursos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <label>
          Créditos:
          <input type="number" value={creditos} onChange={(e) => setCreditos(e.target.value)} required />
        </label>
        <label>
          Descripción:
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </label>
        <button type="submit">Crear Curso</button>
      </form>
    </div>
  );
};

export default FormularioCurso;
