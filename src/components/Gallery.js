import LocationList  from '../data/logements.json';
import LocationCard from './LocationCard';

import '../styles/Gallery.scss';

function Gallery() {
    return(
        <div className='gallery'>
            {LocationList.map((e) => (
                <LocationCard key={e.id} id={e.id} cover={e.cover} title={e.title} />
            ))}
        </div>
    )
}

export default Gallery