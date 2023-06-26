import '../styles/Banner.scss'

function Banner( props ) {
    return (
        <div className='banner-container'>
            <img src={props.bannerimg} alt={props.alt}/>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Banner