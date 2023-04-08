import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import {useEffect} from 'react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

//! LINK: https://www.youtube.com/watch?v=x7mwVn2z3Sk

function App() {

  useEffect(() => {
    document.title = "Portfolio Website";
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/portfolio-website" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
