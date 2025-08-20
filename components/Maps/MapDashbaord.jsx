import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import your custom icon
import customIconUrl from "../../media/NicePng_destroyed-building-png_2913064.png";

// Create custom icon using your PNG
let CustomIcon = L.icon({
  iconUrl: customIconUrl,
  iconSize: [32, 32], // size of the icon [width, height]
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});

function MapDashboard() {
  const position = [40.748817, -73.985428]; // lat, lng

  return (
    <div className="p-8">
      <div
        className="border border-gray-300 rounded-lg overflow-hidden"
        style={{ width: "100%", height: "500px" }}
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
          <Marker position={position} icon={CustomIcon}>
            <Popup>
              <h2 className="font-bold">Destroyed Building</h2>
              <p>Custom marker using your PNG image.</p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapDashboard;
