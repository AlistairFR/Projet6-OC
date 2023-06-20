import { useParams } from "react-router"
import LocationList from "../data/logements.json"
import Error from "../pages/Error"
import Showcase from "../components/Showcase"
import Infos from "../components/Infos"

function Housing() {
    const { id } = useParams()
    console.log(id)
    const location = LocationList.find((location) => location.id === id)
    console.log(location)
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
        </div>
    )
}

export default Housing