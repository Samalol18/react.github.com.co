import './App.css';
import Cabeza from './Componentes/Componente_1/Cabeza';
import Portada from './Componentes/Componente_2/Portada';

function App() {
  return (
    <div className="App">
      <header className="headerPrincipal">
        <Cabeza />
      </header>
      <main>
        <Portada />
      </main>
    </div>
  );
}

export default App;
