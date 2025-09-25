"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
    // smooth scroll function
    const handleScrollClick = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const links = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "career", label: "Career" },
        { id: "services", label: "Services" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-600 shadow-md">
            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center p-6 h-14 text-white">
                <div className="text-2xl cursor-pointer">🔎</div>
                <nav className="flex justify-between text-lg font-medium gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                            className="hover:text-yellow-300 cursor-pointer transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between items-center px-6 h-12 text-white">
                <div className="text-2xl cursor-pointer">🔎</div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {links.map((link) => (
                            <DropdownMenuItem key={link.id} asChild>
                                <Link
                                    href={`#${link.id}`}
                                    onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                                >
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
