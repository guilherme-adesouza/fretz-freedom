import L from 'leaflet';
import React, { useEffect, useState } from 'react';

const accessToken = "pk.eyJ1IjoiZ3VpbGhlcm1lYWRlc291emEiLCJhIjoiY2tjMTRuOGs5MDBweDJ1b2R0bGl6MW0wdiJ9.HJq0ygVYNK_HyId1SP9Vzg";

const PlotMap = ({
                    style = {height: "700px", border: '1px solid #ccc'},
                    points = [], 
                    ...props
                }) => {
    const [map, setMap] = useState(null);

    const initMap = () => {
        if (map != null) return;
        const _map = L.map('map-component').setView(points[0] || [-29.4682, -51.9643], 13);
        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
            attribution: '',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: accessToken
        }).addTo(_map);
        setMap(_map);
    }

    useEffect(() => {
        initMap();
    }, []);

    useEffect(() => {
        if (map == null) return;
        for (let point of points) {
            L.marker(point).addTo(map);
        }
    }, [points]);

    return (
        <div id="map-component" style={style}></div>
    )
}

export default PlotMap;