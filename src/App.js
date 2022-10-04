
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Projects />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Footer />
    </div>
  );
}
export default App;

