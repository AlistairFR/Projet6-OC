import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import bannerimg from '../images/bannerimg.jpg'

import '../styles/Main.scss'

function Main() {
    return (
        <main className="main">
            <Banner title= 'Chez vous, partout et ailleurs' bannerimg = {bannerimg} />
            <Gallery />
        </main>
    )
}

export default Main