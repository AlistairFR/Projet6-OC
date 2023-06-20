import {Link} from 'react-router-dom';

function Card(props) {
    return(
        <Link to={`/housing/${props.id}`} className="card">
            <div className="card-img-container"><img className="card-img" src={props.cover} alt={`Cover de ${props.title}`} /></div>
            <span className="card-title"> {props.title} </span>
        </Link>
    )
}

export default Card