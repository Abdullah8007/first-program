import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
