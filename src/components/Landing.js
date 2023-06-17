import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Navbar';
import Footer from './Footer';
import Main from './Main';

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