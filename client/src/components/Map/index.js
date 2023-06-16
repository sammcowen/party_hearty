import React from 'react';
// import { render } from 'react-dom';   
import * as L from 'leaflet';
import { MapContainer, TileLayer, useMap,} from 'react-leaflet';
import * as ELG from "esri-leaflet-geocoder";

import "leaflet/dist/leaflet.css";
import './style.css';

// use leaflet to generate

export const Map = (props) => {
    
    let position = [21,12];
    let esK = "AAPK30ab24e6cd6e422586f752e010781975jb8dNRZ7rM-aaznL8mxQtODcsqHZ_pHGStTOmvJ6SFv34vhSSw0X_K3ryze_kMOW"
    const { location } = props;


    function Geocoder() {
      const map = useMap();
      console.log(location +  1)
      ELG.geocode({apikey: esK })
        .text(location)
        .run((err, results, response) => {
          console.log(results)

          console.log(results.results[0].latlng);
          const { lat, lng } = results.results[0].latlng;
          map.setView([lat, lng], 12);

          L.marker([lat,lng]).addTo(map)
            // .bindPopup({location})
            // .openPopup();
        });
  
      return null
    };
  
    
    
    return (
      <MapContainer
        className="map leaflet-container"
        center={position}
        zoom={6}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Geocoder address = {location} />
        {/* <Marker position={position}>
                        <Popup>
                            Place holder for address
                        </Popup>
                    </Marker> */}
      </MapContainer>
    );

}


  