import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Leaflet.css'
const Leaflet = () => {
    return (
        <div className='map-continer'>
          <MapContainer
            center={[22.298067351440114, 91.97470847924231]}
            zoom={14}
            scrollWheelZoom={true}
          >
            <TileLayer
            //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[22.298067351440114, 91.97470847924231]}>
              <Popup>
                Royl-Convention Hall
              </Popup>
            </Marker>
          </MapContainer>
        </div>
    );
};

export default Leaflet;