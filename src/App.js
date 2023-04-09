import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


function App() {

  useEffect(() => {
    document.title = "Portfolio Website";
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
