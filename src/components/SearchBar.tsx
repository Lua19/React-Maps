import { ChangeEvent, useRef } from "react"

export const SearchBar = () => {

    const debounceRef = useRef<NodeJS.Timeout>()

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) 
            clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() =>{
            //Buscar cosas
            console.log("Debounce", event.target.value);
             
        }, 500)
        
    }



  return (
    <div className='search-container'>
        <input type="text" className="form-control" placeholder="Search for a place ..." onChange={ onQueryChange} />
    </div>
  )
}
