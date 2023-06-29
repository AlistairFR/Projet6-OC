import { useParams } from "react-router"
import LocationList from "../data/logements.json"
import Error from "../pages/Error"
import Showcase from "../components/Showcase"
import Infos from "../components/Infos"
import Collapse from "../components/Collapse"
import '../styles/Housing.scss'

function Housing() {
    const { id } = useParams()
    const location = LocationList.find((location) => location.id === id)
    if (!location) {
        return <Error />
    }
    return(
        <div className="housingMain">
            <Showcase data={location.pictures} />
            <Infos
                id={location.id}
                title={location.title}
                place={location.location}
                tags={location.tags}
                rating={location.rating}
                owner={location.host.name}
                ownerImg={location.host.picture}
            />
            <div className="housing-collapse-container">
                <Collapse
                    label="Description"
                    class="housing-collapse-container-description"
                    text={<p>{location.description}</p>}
                />
                <Collapse
                    label="Équipements"
                    class="location-collapse-container-equipments"
                    text={
                        <ul>
                            {location.equipments.map((equipments, index) => (
                                <li key={index}>{equipments}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    )
}

export default Housing