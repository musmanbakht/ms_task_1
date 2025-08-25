import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { fetchDepartments } from "../../API/index"; // axios function
import customIconBlack from "../../media/building_black.png";
import customIconGreen from "../../media/building_green.png";
import customIconBlue from "../../media/building_blue.png";
import buildingSvg from "../../media/building_black.svg";
// Custom icon
// import customIconUrl from "../../media/building_black.png";

// let CustomIcon = L.icon({
//   iconUrl: customIconUrl,
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });


function getCustomIcon(publicationCount) {
  let iconUrl = customIconBlack;
  if (publicationCount < 15) {
    iconUrl = customIconBlack;
  } else if (publicationCount > 20) {
    iconUrl = customIconGreen;
  } else {
    iconUrl = customIconBlue;
  }

  return L.icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}


// Recenter map with animation
function RecenterMap({ lat, long }) {
  const map = useMap();
  useEffect(() => {
    if (lat && long) {
      map.flyTo([lat, long], 18, { animate: true, duration: 1.5 });
    }
  }, [lat, long, map]);
  return null;
}

function MapDashboard() {
  const [departments, setDepartments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const response = await fetchDepartments();
        setDepartments(response.allDepartments || []);
      } catch (err) {
        console.error("Failed to fetch departments:", err);
      } finally {
        setLoading(false);
      }
    };
    loadDepartments();
  }, []);
  console.log("DEPARTMENTS", departments);
  return (
    <div className="p-4">
      <div
        className="relative border border-gray-300 rounded-lg overflow-hidden"
        style={{ width: "100%", height: "500px" }}
      >
        {/* Show shadowed placeholder when loading */}
        {loading ? (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 shadow-inner">
            <p className="text-lg font-semibold text-gray-600">
              Loading departments...
            </p>
          </div>
        ) : (
          <MapContainer
            center={[-26.1922, 28.0285]}
            zoom={16}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {departments.map((dept) => (
              <Marker
                key={dept.id}
                position={[dept.lat, dept.long]}
                icon={getCustomIcon(dept.publicationCount)}
                eventHandlers={{
                  click: () => {
                    setSelected({ lat: dept.lat, long: dept.long });
                  },
                }}
              >
                <Popup>
                  <h2 className="font-bold">{dept.name}</h2>
                  <p>Publications: {dept.publicationCount}</p>
                  <p>Faculty Name: {dept.faculty.name}</p>
                </Popup>
              </Marker>
            ))}

            {selected && (
              <RecenterMap lat={selected.lat} long={selected.long} />
            )}
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default MapDashboard;
