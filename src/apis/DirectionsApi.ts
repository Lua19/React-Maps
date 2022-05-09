import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
         geometries: 'geojson',
         overview: 'simplified',
         steps: false,
          access_token: 'pk.eyJ1IjoiaXZhbmx1YTEwMCIsImEiOiJjbDJmYjJla3cwNGFjM2NvY294eDcwa3JxIn0.aJ_XC7SB-0YVsaaW-vWuHA'}
})

export default directionsApi;