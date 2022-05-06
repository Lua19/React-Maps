import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./";

export const SearchResults = () => {

  const {places, isLoadingPlaces} = useContext(PlacesContext)
  const {map} = useContext(MapContext)
  const [activeId, setActiveId] = useState('')

  if (isLoadingPlaces) {
      return( 
      <LoadingPlaces/>
      );
  }
  if (places.length === 0) {
    return <></>;
  }
  const travel = (place: Feature) =>{
    setActiveId(place.id)
    const [lng, lat] = place.center
        map?.flyTo({
            zoom: 16,
            center: [lng,lat]
        })
  }

  return (
    <ul className='list-group mt-3'>

      {places.map( place => (
        <li 
        key={place.id} 
        className={`list-group-item list-group-item-action pointer ${ (activeId === place.id)? 'chosen': ''} ` }
        onClick={() => travel(place)} >

          <h6>{place.text_en}</h6>
          <p style={{fontSize: '12px'}}>
            {place.place_name}
          </p>
          <button className="btn btn-outline-warning btn-sm" >
            Go
          </button>
        </li>
      ))}
    </ul>
  )
}
