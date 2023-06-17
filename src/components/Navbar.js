import '../styles/Navbar.scss'
import kasalogo from '../images/kasa-logo.png'
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <img src={kasalogo} alt="Logo de Kasa" />
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </div>
        </nav>
    )
}

export default NavBar