import LocationList  from 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json';
import LocationCard from './LocationCard'

function Gallery() {
    return(
        <main className='Gallery'>
            {LocationList.map((e) => (
                <LocationCard key={e.id} id={e.id}  />
            ))}
        </main>
    )
}

export default Gallery