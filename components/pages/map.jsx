"use client";

import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

// Fix default marker icons for Next.js
const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

// Helper: validate coordinates
function isValidCoord(v) {
    return v && Number.isFinite(v.lat) && Number.isFinite(v.lng);
}

// Component that manages routing control
function RouteControl({ house, visitor }) {
    const map = useMap();
    const routingRef = useRef(null);

    useEffect(() => {
        // Cleanup previous routing control
        if (routingRef.current) {
            map.removeControl(routingRef.current);
            routingRef.current = null;
        }

        if (isValidCoord(house) && isValidCoord(visitor)) {
            const control = L.Routing.control({
                waypoints: [
                    L.latLng(visitor.lat, visitor.lng),
                    L.latLng(house.lat, house.lng),
                ],
                routeWhileDragging: false,
                showAlternatives: false,
                addWaypoints: false,
                fitSelectedRoutes: true,
                lineOptions: {
                    styles: [{ color: "#2563eb", weight: 5, opacity: 0.8 }], // blue line
                },
            }).addTo(map);

            routingRef.current = control;
        }

        return () => {
            if (routingRef.current) {
                map.removeControl(routingRef.current);
                routingRef.current = null;
            }
        };
    }, [house, visitor, map]);

    return null;
}

export default function LeafletMap({ house, visitor }) {
    const center = useMemo(() => {
        if (isValidCoord(house)) return [house.lat, house.lng];
        return [25.75, 89.25]; // fallback: Rangpur area
    }, [house]);

    const hasHouse = isValidCoord(house);
    const hasVisitor = isValidCoord(visitor);

    return (
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-lg shadow-md overflow-hidden">
            <MapContainer center={center} zoom={15} className="w-full h-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {hasHouse && (
                    <Marker position={[house.lat, house.lng]}>
                        <Popup>{house.title || "House location"}</Popup>
                    </Marker>
                )}

                {hasVisitor && (
                    <Marker position={[visitor.lat, visitor.lng]}>
                        <Popup>{visitor.title || "Visitor location"}</Popup>
                    </Marker>
                )}

                <RouteControl house={house} visitor={visitor} />
            </MapContainer>
        </div>
    );}
