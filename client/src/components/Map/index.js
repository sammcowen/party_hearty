import React from 'react';
// import { render } from 'react-dom';   
import { MapContainer, TileLayer, Marker, Popup,} from 'react-leaflet';
import './style.css';

// use leaflet to generate

export const Map = () => {
    
    const position = [51.505, -0.09]
    return (
        <>
        <div className='flex-end'>
            <div className='align-right'>
                <MapContainer center={position} zoom={12}scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Place holder for address
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        </>
      );

    
}