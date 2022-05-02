import { Map } from "mapbox-gl";
import { createContext } from "react";

interface MapContexProps {
    isMapReady: boolean;
    map? : Map
}


export const MapContex = createContext({} as MapContexProps )