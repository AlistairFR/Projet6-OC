import redStar from "../images/red-star.png"
import greyStar from "../images/grey-star.png"

function Infos(props) {
    const rating = props.rating;
    function Rating() {
        const stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src={redStar} alt="red star"/>)
        }
        while (stars.length < 5) {
            stars.push(<img key={`${stars.length}`} src={greyStar} alt="grey star"/>)
        }
        return stars
    }
    return (
        <div className="infosMain">
            <div className="infosMainLeft">
                <div className="infosTitle">
                    <h1 className="infosTitle">{props.title}</h1>
                    <p className="infosLocation">{props.place}</p>
                </div>
                <ul className="infosTagsList">
                    {props.tags.map((e, index) => (
                        <p className="infosTags" key={`${props.id}-${index}`}>{e}</p>
                    ))}
                </ul>
            </div>
            <div className="infosMainRight">
                <div className="infosOwner">
                    <p className="infosOwnerName">{props.owner}</p>
                    <img className="infosOwnerPicture" src={props.ownerImg} alt="" />
                </div>
                <div className="infosRating">
                    {Rating()}
                </div>
            </div>
        </div>
    )
}

export default Infos