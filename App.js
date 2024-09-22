import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormularioConsulta from './FormularioConsulta';
import FormularioCurso from './FormularioCurso';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/consulta-alumnos" component={FormularioConsulta} />
          <Route path="/creacion-cursos" component={FormularioCurso} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
