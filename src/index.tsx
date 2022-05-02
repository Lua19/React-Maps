import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MappsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbmx1YTEwMCIsImEiOiJjbDJmYjJla3cwNGFjM2NvY294eDcwa3JxIn0.aJ_XC7SB-0YVsaaW-vWuHA';


if (!navigator.geolocation) {
  alert("Your browser doesnt have acces to Geo-Location")
  throw new Error('Your browser doesnt have acces to Geo-Location')
}



ReactDOM.render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>,
  document.getElementById("root")
)
