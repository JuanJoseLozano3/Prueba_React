import React from 'react';
import './assets/css/App.css';
import './assets/css/pie.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route} from 'react-dom';
import AdministracionSST from './Paginas/AdministracionSST'
import Trabajadores from './Paginas/Trabajadores'
import Operario from './Paginas/Operario'
import Ausentes from './Paginas/Ausentes'
import Accidentados from './Paginas/Accidentados'
import Enfermos from './Paginas/Enfermos'
import Vacunados from './Paginas/Vacunados'
import Sedes from './Paginas/Sedes'
import Ausentismo from './Paginas/Ausentismo'
import Accidentalidad from './Paginas/Accidentalidad'
import Vacunacion from './Paginas/Vacunacion'
import Administrar from './Paginas/Administrar'
import Persona from './Paginas/Persona'
import Salida from './Paginas/Salir'
import Notification from './Paginas/Notification'
import Options from './Paginas/Options'

//Importar componentes
import BarraEncabezado from "./components/BarraEncabezado" 

function App() {
  return (
    <div className="App">
      <Router>
        <BarraEncabezado />
        <Switch>
          <Route path='/' exact component={AdministracionSST} />
          <Route path='/operario' component={Operario} />
          <Route path='/ausentes' component={Ausentes} />
          <Route path='/accidentados' component={Accidentados} />
          <Route path='/enfermos' component={Enfermos} />
          <Route path='/vacunados' component={Vacunados} />
          <Route path='/sedes' component={Sedes} />
          <Route path='/trabajadores' component={Trabajadores} />
          <Route path='/ausentismo' component={Ausentismo} />
          <Route path='/accidentalidad' component={Accidentalidad} />
          <Route path='/vacunacion' component={Vacunacion} />
          <Route path='/administrar' component={Administrar} />
          <Route path='/salir' component={Salida} />
          <Route path='/notification' component={Notification} />
          <Route path='/options' component={Options} />
          <Route path= '/persona' component={Persona} />
        </Switch>
      </Router>
      <div className="pie">
      Desarrollado por Soluciones en epidemiologia y salud ocupacional PC
      </div>
    </div>
  );
}

export default App;
