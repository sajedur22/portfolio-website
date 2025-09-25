import React from "react";

export function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`px-4 py-2 rounded-xl bg-purple-600 text-white shadow hover:bg-purple-700 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
