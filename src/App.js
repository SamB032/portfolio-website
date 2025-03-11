import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import GalleryPage from './pages/GalleryPage';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
