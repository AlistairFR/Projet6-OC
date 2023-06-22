import '../styles/Navbar.scss';
import kasalogo from '../images/kasa-logo.png';
import {Link, useLocation} from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    return (
        <nav>
            <img src={kasalogo} alt="Logo de Kasa" />
            <div>
                <Link className={
                    location.pathname === '/'
                        ? 'active NavBar-Links'
                        : 'NavBar-Links'
                    }
                    to="/"
                >
                    Accueil
                </Link>
                <Link className={
                    location.pathname === '/about'
                        ? 'active NavBar-Links'
                        : 'NavBar-Links'
                    }
                    to="/about"
                >
                    A Propos
                </Link>
            </div>
        </nav>
    )
}

export default NavBar