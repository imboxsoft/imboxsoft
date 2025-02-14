"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "250px",
};

const center = {
    lat: 46.5446253,
    lng: 24.561196,
};

interface GoogleMapComponentProps {
    apiKey: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ apiKey }) => {
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
