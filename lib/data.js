import {Briefcase, Code, GraduationCap} from "lucide-react";
import React from "react";
import {DummyContent} from "@/components/pages/project";
import wcart from "@/public/images/whatsappcart/cartw.png"
import wcart2 from "@/public/images/whatsappcart/cart2.png"
import wcart1 from "@/public/images/whatsappcart/cart1.png"

export const frontendTech = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "GSAP",
    "Framer Motion",
];

export const backendTech = [
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "Supabase",
    "PostgreSQL",
    "FastAPI (Python microservice)",

];

export const toolsAndDevops = ["GitHub", "Vercel", "Linux", "Vitest", "Jest",  "Postman", "Prisma Studio"];

export const programmingLanguages = ["JavaScript","TypeScript", "C++", "Python", "SQL", "Prisma Query Language"];


export const historyData = [
    {
        icon: GraduationCap,
        title: "BSc (Hons) in Electrical and Electronic Engineering",
        institution: "Begum Rokeya University, Rangpur",
        date: "2022 - 2026",
        description:
            "Pursuing graduation with a strong academic foundation while building expertise in software engineering and full-stack web development.",
    },
    {
        icon: Code,
        title: "Competitive Programming",
        company: "Online Judges (Codeforces, CodeChef, etc.)",
        date: "2024-present",
        description:
            "Practiced problem-solving and algorithms through competitive programming. Built strong foundations in data structures, algorithms, and analytical thinking.",
    },
    {
        icon: Briefcase,
        title: "Instructor (DSA & Competitive Programming)",
        company: "RoboHunters BRUR",
        date: "2023 - Present",
        description:
            "Taught Data Structures, Algorithms, and Competitive Programming to students. Helped learners strengthen their problem-solving skills and prepare for contests.",
    },
    {
        icon: Code,
        title: "Machine Learning & Web Scraping",
        company: "Personal Projects & Self Learning",
        date: "2024-present",
        description:
            "Explored machine learning fundamentals and applied them in small projects. Gained experience in Python-based web scraping and automation.",
    },
    {
        icon: Code,
        title: "Full-Stack Web Development Journey",
        company: "Personal Projects & Self Learning",
        date: "2023- Present",
        description:
            "Built multiple full-stack projects using the PERN stack, Next.js, Prisma, and Supabase. Explored authentication, role-based permissions, rental listing platforms, medical OCR apps, and social media clones. Learned to design scalable APIs, integrate databases, and manage frontend-backend workflows.",
    },
    {
        icon: Briefcase,
        title: "Full Stack Developer",
        company: "Freelance & Open Source Contributions",
        date: "2024 - Present",
        description:
            "Currently working as a freelance full-stack developer, contributing to open source projects, and continuously enhancing my skills in web development.",
    },
];


export const projects = [
    {
        title: "WhatsApp Cart System",
        des: "A modern E-Commerce Cart Application built with Next.js 13+ and Tailwind CSS. This project demonstrates product listing, cart management, and seamless order placement via WhatsApp.",
        src: wcart,
        src1:wcart2,
        src2:wcart1,
        stack: ["Next.js", "React Hooks", "Tailwind CSS", "Lucide React"],
        github: "https://github.com/sajedur22/whatsapp-cart",
        live: "https://whatsapp-cart.vercel.app/",
        problem: "Small businesses and shop owners often struggle to manage online orders efficiently, especially when customers prefer simple communication channels like WhatsApp instead of full checkout systems.",
        solution: "A lightweight e-commerce solution that allows users to browse products, manage their cart, and directly place orders through WhatsApp without complex integrations.",
        whatIBuilt: "Product search, add-to-cart, quantity updates, cart modal, dynamic totals, and WhatsApp order integration. Designed with responsive UI using Next.js, Tailwind CSS, and Lucide React icons.",
        outcome: "Enabled small businesses to receive structured customer orders directly via WhatsApp, reducing setup complexity and providing a frictionless shopping experience for end users."
    }

    ,
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        des:"adaFD",
        src: wcart,
        content: <DummyContent />,
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        des:"jhgkjgj",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },

    {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        des:"jhjh",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "iOS",
        title: "Photography just got better.",
        des:"ghjhgfhj",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        des:"DVzgv",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
];