import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;