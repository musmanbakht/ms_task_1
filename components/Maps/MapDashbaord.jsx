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
  // Array of buildings
  const buildings = [
    {
      name: "WITS Mining Institute",
      position: [-26.191595151165995, 28.027011480860786],
      publications: Math.floor(Math.random() * 100), // random between 0–99
      lat: -26.191595151165995,
      long: 28.027011480860786
    },
    {
      name: "WITS School of Chemical and Metallurgical Engineering",
      position: [-26.19294562633408, 28.029523893373515],
      publications: 18,
      lat: -26.19294562633408,
      long: 28.029523893373515
    }, {
      lat: -26.189929298326433,
      long: 28.02929325631473,
      name: "University of the Witwatersrand School of Architecture & Planning",
      publications: 25
    },
    {
      lat: -26.1902413353888,
      long: 28.028847583877866,
      name: "Wits School of Construction Economics and Management",
      publications: Math.floor(Math.random() * 100), // random between 0–99

    },
    {
      lat: -26.191763730244592,
      long: 28.02941236747876,
      name: "School of Mechanical, Industrial and Aeronautical Engineering, WITS",
      publications: Math.floor(Math.random() * 100), // random between 0–99
    },
    {
      lat: -26.191594270214825,
      long:  28.027200499993242,
      name: "School of Electrical and Information Engineering (EIE)",
      publications: Math.floor(Math.random() * 100), // random between 0–99
    },
    {
      lat: -26.192142521254677,
      long:  28.029511587901123,
      name: "WITS School of Civil and Environmental Engineering",
      publications: Math.floor(Math.random() * 100), // random between 0–99
    }
  ];

  return (
    <div className="p-8">
      <div
        className="border border-gray-300 rounded-lg overflow-hidden"
        style={{ width: "100%", height: "500px" }}
      >
        <MapContainer
          center={[-26.1922, 28.0285]} // midpoint of the buildings
          zoom={17}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Loop through buildings to create markers */}
          {buildings.map((building, index) => (
            <Marker key={index} position={[building.lat, building.long]} icon={CustomIcon}>
              <Popup>
                <h2 className="font-bold">{building.name}</h2>
                <p>Publications: {building.publications}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapDashboard;
