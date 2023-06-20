function Infos(props) {
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
                    
                </div>
            </div>
        </div>
    )
}

export default Infos