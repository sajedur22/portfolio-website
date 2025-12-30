"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import AddressSearch from "@/components/pages/AddressSearch";

// Client-only dynamic import to avoid "window is not defined"
const LeafletMap = dynamic(() => import("@/components/pages/map"), { ssr: false });

export default function MapPage() {
    // Example saved house coordinates (your DB values should populate these)
    const [house, setHouse] = useState({
        lat: 25.746, // Rangpur Lalbag example
        lng: 89.250,
        title: "House for rent: Lalbag, Rangpur",
    });

    const [visitor, setVisitor] = useState(null); // { lat, lng, title }

    return (
        <section className="container mx-auto px-4 py-6 space-y-6">
            <h1 className="text-2xl font-semibold">Rental location and distance</h1>

            <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                    Enter your location (e.g., Modern Rangpur) to see distance and a route to the house.
                </p>

                <AddressSearch
                    label="Your location"
                    onResult={({ lat, lng, displayName }) =>
                        setVisitor({ lat, lng, title: displayName || "Your location" })
                    }
                />
            </div>

            <LeafletMap house={house} visitor={visitor} />
        </section>
    );
}
