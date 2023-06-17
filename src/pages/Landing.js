import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Landing() {
    root.render(
        <React.StrictMode>
            <NavBar />
            <Main />
            <Footer />
        </React.StrictMode>
    );
}

export default Landing;