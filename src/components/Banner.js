import '../styles/Banner.scss'
import bannerimg from '../images/bannerimg.jpg'

function Banner() {
    return (
        <div className='banner-container'>
            <img src={bannerimg} alt=''/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner