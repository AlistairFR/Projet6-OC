import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import Housing from './pages/Housing';
import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/housing/:id" element={<Housing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
