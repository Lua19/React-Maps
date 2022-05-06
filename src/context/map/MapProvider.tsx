import { Map, Marker, Popup } from "mapbox-gl";
import { useContext, useEffect, useReducer } from "react";
import { PlacesContext } from "../places/PlacesContext";
import { MapContext } from "./MapContext";
import { mapReducer } from "./MapReducer";

export interface MapState {
    isMapReady: boolean;
    map?: Map;
    markers: Marker[];
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: []
}

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({children}: Props) => {

    const [state,dispatch] = useReducer(mapReducer,INITIAL_STATE);
    const {places} = useContext(PlacesContext);

    useEffect(() => {
        state.markers.forEach(marker => marker.remove());
        const newMarkers: Marker[] = [];
        
        for (const place of places) {
            const [lng, lat] = place.center;
            const popup = new Popup().setHTML(`<h6>${place.text_en}</h46><p>${place.place_name_en}</p>`)
            const newMarker = new Marker({color:'#ffd300'}).setPopup(popup).setLngLat([lng,lat]).addTo(state.map!)

            newMarkers.push(newMarker);
        }

        dispatch({type: 'setMarkers', payload: newMarkers})
    }, [places])
    

    const setMap = (map: Map) => {

        const myLocationPopup = new Popup().setHTML(`<h4>Here i am</h4><p>Somewhere in the world</p>`)

        new Marker({
            color: '#8800c7'
        })
        .setLngLat(map.getCenter())
        .setPopup(myLocationPopup)
        .addTo(map);


        dispatch({type: 'setMap', payload: map})
    }

    return (
        <MapContext.Provider value={{
            ...state,

            setMap
        }}>
            {children}
        </MapContext.Provider>
    )
}