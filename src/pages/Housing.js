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
            <Showcase />
            <Infos />
        </div>
    )
}

export default Housing