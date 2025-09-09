import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      {/* Home button on the left */}
      <button
        className="home-button"
        onClick={() => navigate("/")}
      >
        Home
      </button>

      {/* Centered nav links */}
      <div className="nav-links">
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}

export default App;
