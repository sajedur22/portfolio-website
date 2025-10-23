"use client";

import React, { useState, useEffect } from "react";
import { HousePlug } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("home");

    const links = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "career", label: "Career" },
        { id: "projects", label: "Projects" },
        { id: "services", label: "Services" },
        { id: "contact", label: "Contact" },
    ];

    const SCROLL_OFFSET = 160; // Adjust for navbar height

    const handleScrollClick = (e, targetId) => {
        if (pathname !== "/") return;

        e.preventDefault();
        if (targetId === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetPosition = targetElement.offsetTop;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + SCROLL_OFFSET;
            let current = "home";

            for (const link of links) {
                const section = document.getElementById(link.id);
                if (section) {
                    if (
                        section.offsetTop <= scrollPosition &&
                        section.offsetTop + section.offsetHeight > scrollPosition
                    ) {
                        current = section.id;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname, links]);

    const getLinkClasses = (linkId) =>
        `cursor-pointer transition-colors ${
            (pathname === "/projects" && linkId === "projects") ||
            (pathname === "/" && activeSection === linkId)
                ? "text-yellow-300"
                : "text-muted-foreground"
        } hover:text-yellow-300`;

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 bg-background shadow-md backdrop-blur-sm transition-colors duration-300 dark:bg-background/80">

            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center h-14 max-w-7xl mx-auto px-6">
                <div className="text-primary-foreground cursor-pointer"><Link href={`#${links.id}`}><HousePlug /></Link></div>
                <nav className="flex justify-between text-lg font-medium gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                            className={getLinkClasses(link.id)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between items-center h-12 max-w-7xl mx-auto px-6">
                <div className="text-primary-foreground cursor-pointer"><Link href={'/'}><HousePlug/></Link></div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <button aria-label="Open navigation menu" className="p-2 rounded-md" suppressHydrationWarning>
                            <Menu className="h-6 w-6 text-white"/>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuSeparator/>
                        {links.map((link) => (
                            <DropdownMenuItem key={link.id} asChild>
                                <Link
                                    href={`#${link.id}`}
                                    onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                                    className={getLinkClasses(link.id)}
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
