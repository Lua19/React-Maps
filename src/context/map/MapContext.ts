import { Map } from "mapbox-gl";
import { createContext } from "react";

interface MapContexProps {
    isMapReady: boolean;
    map? : Map

    setMap: (map: Map) => void;
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>
}


export const MapContext = createContext({} as MapContexProps )