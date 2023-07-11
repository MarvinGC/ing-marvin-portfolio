import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Portfolio />
        <Contacto />
        <Footer />
    </div>
  );
}

export default App;
