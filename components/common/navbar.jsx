"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Menu} from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("home");

    const links = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "career", label: "Career" },
        { id: "services", label: "Services" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const handleScrollClick = (e, targetId) => {
        if (pathname !== "/") return;

        e.preventDefault();
        if (targetId === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY;

            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (pathname === "/") {
            const handleScroll = () => {
                const sections = links
                    .map((link) => document.getElementById(link.id))
                    .filter((el) => el !== null);
                const scrollPosition = window.scrollY + 160;

                let currentSection = "home";
                for (const section of sections) {
                    if (
                        section.offsetTop <= scrollPosition &&
                        section.offsetTop + section.offsetHeight > scrollPosition
                    ) {
                        currentSection = section.id;
                        break;
                    }
                }
                setActiveSection(currentSection);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [pathname, links]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background shadow-md duration-300 backdrop-blur-sm shadow-sm transition-colors dark:bg-background/80">
            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center p-6 h-14">
                <div className="text-2xl cursor-pointer">🔎</div>
                <nav className="flex justify-between text-lg font-medium gap-6">
                    {links.map((link) => {
                        const isActive =
                            (pathname === "/projects" && link.id === "projects") ||
                            (pathname === "/" && activeSection === link.id);

                        return (
                            <Link
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                                className={`cursor-pointer transition-colors ${
                                    isActive ? "text-yellow-300" : "text-muted-foreground"
                                } hover:text-yellow-300`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between items-center px-6 h-12">
                <div className="text-2xl cursor-pointer">🔎</div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button   aria-label="Open navigation  menu" className={'p-2 rounded-md '}><Menu className="h-6 w-6 text-white " /></button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">

                        <DropdownMenuSeparator />
                        {links.map((link) => (
                            <DropdownMenuItem key={link.id} asChild>
                                <Link
                                    href={`#${link.id}`}
                                    onClick={(e) => handleScrollClick(e, `#${link.id}`)}
                                    className={`cursor-pointer ${
                                        activeSection === link.id ? "text-yellow-300" : ""
                                    }`}
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
