import { PlacesContext } from "./PlacesContext";

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
    return(
        <PlacesContext.Provider value={{
            isLoading: true,
            userLocation: undefined
        }}>
            {children}
        </PlacesContext.Provider>
    )
}