import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
