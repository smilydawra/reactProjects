import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

const DEFAULT_LATITUDE = 43.83;
const DEFUALT_LONGITUDE = -79.41;

const MapView = ({ lat, lng }) => {
    const [toggle, setToggle] = useState(false);
    const latitude = lat ? lat : DEFAULT_LATITUDE;
    const longitude = lng ? lng : DEFUALT_LONGITUDE;

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <button class="btn btn-primary" onClick={handleClick}>Map View</button>
            {toggle ?
                <div>
                    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[latitude, longitude]}
                            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                        </Marker>
                    </MapContainer>
                </div> : null}
        </>
    )
}

export default MapView
