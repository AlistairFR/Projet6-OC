function Card(props) {
    return(
        <div className="card">
            <img className="card-img" src={props.cover} alt={`Cover de ${props.title}`} />
            <span className="card-title"> {props.title} </span>
        </div>
    )
}

export default Card