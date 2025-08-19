import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in Leaflet + Webpack
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapDashboard() {
  const position = [40.748817, -73.985428]; // lat, lng

  return (
    <div
      className="relative w-full border border-gray-300 rounded-lg overflow-hidden"
      style={{ height: "500px" }} // 👈 guarantees the map is visible
    >
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <h2 className="font-bold">React Leaflet Map</h2>
            <p>A free Admin for Tailwind CSS, React, and Leaflet.</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapDashboard;
