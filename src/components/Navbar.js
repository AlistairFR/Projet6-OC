import '../styles/Navbar.scss'
import kasalogo from '../images/kasa-logo.png'
//import Link from '../../node_modules/react-router'

function NavBar() {
    return (
        <nav>
            <img src={kasalogo} alt="Logo de Kasa" />
            <ul>
                {/*<Link>Accueil</Link>
                <Link>A Propos</Link>*/}
            </ul>
        </nav>
    )
}

export default NavBar