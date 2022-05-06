import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {

    const {...PlacesProvider} = useContext(PlacesContext)

    const debounceRef = useRef<NodeJS.Timeout>()

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) 
            clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() =>{
            PlacesProvider.searchPlacesByTerm(event.target.value)
        }, 350)
        
    }



  return (
    <div className='search-container'>
        <input type="text" className="form-control shadow-none" placeholder="Search for a place ..." onChange={ onQueryChange} />
        <SearchResults/>
    </div>
  )
}
