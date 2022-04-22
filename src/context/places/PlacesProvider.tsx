import { useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

export interface PlacesState{
    isLoading : boolean;
    userLocation?: [number,number]
}
const INITIAL_STATE : PlacesState = {
    isLoading: true,
    userLocation: undefined
}

interface props {
    children : JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children} : props) => {

    const [state,dispatch] =  useReducer(placesReducer, INITIAL_STATE);

    return(
        <PlacesContext.Provider value={{
            ...state,
        }}>
            {children}
        </PlacesContext.Provider>
    )
}