import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS

// Make sure to include the leaflet icon images in the right folder
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icons path for Leaflet
let DefaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;


const companyLocation = [19.112095862539928, 72.861061]; // Replace with your company's coordinates

const ContactMap = () => {
        // const [popupOpen, setPopupOpen] = useState(false);
        return (
                <MapContainer
                        center={companyLocation}
                        zoom={13}
                        style={{ width: "100%", height: "400px",borderRadius:'10px' }}
                >
                        {/* Use OpenStreetMap tiles */}
                        {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      /> */}
                        <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {/* Marker for company location */}
                        <Marker position={companyLocation} className='animate-bounce'>
                                <Popup>
                                        <div className="flex">
                                                <div className="text-white p-2 bg-[#0060b5] text-2xl font-semibold rounded-md">B<sup>3</sup></div>
                                                <div className="text-black font-semibold flex flex-col justify-center items-center ms-3">
                                                        BitByBit Solutions 
                                                        <a
              href="https://maps.app.goo.gl/yMFaTJCbKn92QeDPA"
              target="_blank" // Open in a new window/tab
              rel="noopener noreferrer" // Security measure
              className="text-black underline"
            >
              Visit Google Map
            </a>
                                                </div>
                                        </div>
                                </Popup>
                        </Marker>
                </MapContainer>
        );
};

export default ContactMap;
