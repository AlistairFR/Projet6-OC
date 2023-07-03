import '../styles/Footer.scss'
import footerimg from '../images/footerLogo.png'

function Footer() {
    return (
        <footer>
            <img src={footerimg} alt=''/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer