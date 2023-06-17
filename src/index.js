import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
