import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MappsApp';


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
