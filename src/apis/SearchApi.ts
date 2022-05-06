import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{limit:5, language: 'en', access_token: 'pk.eyJ1IjoiaXZhbmx1YTEwMCIsImEiOiJjbDJmYjJla3cwNGFjM2NvY294eDcwa3JxIn0.aJ_XC7SB-0YVsaaW-vWuHA'}
})

export default searchApi;