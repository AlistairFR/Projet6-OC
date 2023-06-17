function Card(props) {
    return(
        <div className="card">
            <div className="card-img-container"><img className="card-img" src={props.cover} alt={`Cover de ${props.title}`} /></div>
            <span className="card-title"> {props.title} </span>
        </div>
    )
}

export default Card