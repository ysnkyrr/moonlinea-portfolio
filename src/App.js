
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Projects />
      <About />
      
    </div>
  );
}
export default App;

