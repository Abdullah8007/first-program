import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills /> 
    </div>
  );
}

export default App;
