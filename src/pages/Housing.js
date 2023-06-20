import { useParams } from "react-router"
import LocationList from "../data/logements.json"
import Error from "../pages/Error"

function Housing() {
    const id = useParams()
    console.log(id)
    const location = LocationList.find((location) => location.id === id)
    console.log(location)
    if (!location) {
        return <Error />
    }
    return(
        <div>Page du logement ${location.title}</div>
    )
}

export default Housing