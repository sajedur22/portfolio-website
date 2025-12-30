"use client";

import { useState } from "react";

// Geocode using OpenStreetMap Nominatim (free; rate limits apply)
async function geocode(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
    )}`;
    const res = await fetch(url, {
        headers: {
            "Accept-Language": "en",
            "User-Agent": "YourAppName/1.0 (contact@example.com)", // polite UA helps
        },
    });
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
        const best = data[0];
        return {
            lat: parseFloat(best.lat),
            lng: parseFloat(best.lon),
            displayName: best.display_name,
        };
    }
    return null;
}

export default function AddressSearch({ onResult, label = "Location" }) {
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const result = await geocode(address);
            if (!result) {
                setError("Address not found. Try a more specific query (e.g., Modern Rangpur).");
            } else {
                onResult(result);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl">
            <input
                type="text"
                placeholder={`${label} (e.g., Modern Rangpur)`}
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition"
                disabled={loading}
            >
                {loading ? "Searching..." : "Search"}
            </button>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
    );
}
