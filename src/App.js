import './App.css';
import Cabeza from './Componentes/Componente_1/Cabeza';
import Portada from './Componentes/Componente_2/Portada';
import Produc from './Componentes/Componente_3/Produc';
import Total from './Componentes/Componente_4/Total';
import Contacto from './Componentes/Componente_5/Contacto';
import Footer from './Componentes/Componente_6/Footer';

function App() {
  return (
    <div className="App">
      <header className="headerPrincipal">
        <Cabeza />
      </header>
      <main>
        <Portada />
        <Produc />
        <Total />
        <Contacto />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
