import React, { useState } from 'react';
import Menu from './components/Menu.js';
import Rodape from './components/Rodape.js';
import Home from './components/Home';
import ModaMasculina from './components/ModaMasculina';
import ModaFeminina from './components/ModaFeminina';
import ModaInfantil from './components/ModaInfantil';
import Sobre from './components/Sobre';

function App() {
  const [menu, setMenu] = useState('home');
  function mostraPagina(){
    switch (menu) {
      case 'home':
        return <Home menu={menu}/>;
      case 'masculino':
        return <ModaMasculina menu={menu}/>;
      case 'feminino':
        return <ModaFeminina menu={menu}/>;
      case 'infantil':
        return <ModaInfantil menu={menu}/>;
        case 'sobre':
          return <Sobre menu={menu}/>;
      default:
        return <Home menu={menu}/>;
    }

  }

  return (
    <div>
      <Menu menu={menu} setMenu={setMenu}/>
      {mostraPagina()}
      <Rodape/>
    </div>
  );
}

export default App;
