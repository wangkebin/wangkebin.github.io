import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/experience" element={<Experience />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
