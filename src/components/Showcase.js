import { useState } from "react";
import nextArrow from "../images/nextArrow.png"
import previousArrow from "../images/previousArrow.png"
import '../styles/Showcase.scss'

function Showcase(props) {
    const [current, setCurrent] = useState(0)
    const length = props.data.length

    function nextImage() {
        setCurrent(current === length - 1 ? 0 : current +1)
    }

    function previousImage() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (length <= 0) {
        return null;
    }

    return (
        <section className="showcase-container">
            <img className="previousArrow" src={previousArrow} alt="Flèche précédente" onClick={previousImage}/>
            <img className="nextArrow" src={nextArrow} alt="Flèche suivante" onClick={nextImage}/>
            <span className="showcase-count">
                {current + 1}/{props.data.length}
            </span>
            {props.data.map((image, index) => {
                return(
                    <div
                        className={
                            index === current
                                ? 'showcaseImage_active'
                                : 'showcaseImage_inactive'
                        }
                        key={index}
                    >
                        {index === current && (
                            <img className="showcaseImage" src={image} alt=""/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Showcase