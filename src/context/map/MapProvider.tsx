import { Map } from "mapbox-gl";
import { useReducer } from "react";
import { MapContex } from "./MapContext";
import { mapReducer } from "./MapReducer";

export interface MapState {
    isMapReady: boolean;
    map?: Map
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
}

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({children}: Props) => {

    const [state,dispatch] = useReducer(mapReducer,INITIAL_STATE);


    return (
        <MapContex.Provider value={{
            ...state
        }}>
            {children}
        </MapContex.Provider>
    )
}