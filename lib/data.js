import {Briefcase, Code, GraduationCap} from "lucide-react";
import React from "react";
import {DummyContent} from "@/components/pages/project";
import wcart from "@/public/images/whatsappcart/cartw.png"
import wcart2 from "@/public/images/whatsappcart/cart2.png"
import wcart1 from "@/public/images/whatsappcart/cart1.png"
import ecom from "@/public/images/ecommerc/ecomarc.png"
import ecom1 from "@/public/images/ecommerc/ecomrs1.png"
import ecom2 from "@/public/images/ecommerc/ecomrs2.png"
import todo from "../public/images/todo.png"

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
        company: "Online Judges (Codeforces,LeetCode, etc.)",
        date: "2024-present",
        description:
            "Practiced problem-solving and algorithms through competitive programming. Built strong foundations in data structures, algorithms, and analytical thinking.",
    },
    {
        icon: Briefcase,
        title: "Executive Member",
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
        title: "MERN E-Commerce Platform",
        des: "A secure and modern E-Commerce application built with the MERN stack, Next.js 13+, and Tailwind CSS. Features full authentication, product listing, cart management, WhatsApp ordering, and payment integration.",
        src: ecom,
        src1: ecom1,
        src2: ecom2,
        stack: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "React.js",
            "Bootstrap",
            "JWT",
            "Cookies",
            "Nodemailer",
            "SSLCommerz"
        ],
        github: "https://github.com/sajedur22/-mernEcommerce",
        live: "https://ecommerce-uq07.onrender.com/",
        problem: "Small businesses often struggle to manage online orders securely and efficiently. Many customers prefer simple channels like WhatsApp instead of complex checkout systems, making adoption harder for shop owners.",
        solution: "A lightweight yet secure e-commerce solution with OTP-based login, cookie/session authentication, product browsing, cart management, and seamless order placement through WhatsApp. Integrated payment gateway (SSLCommerz) for complete transaction flow.",
        whatIBuilt: "Implemented OTP login, secure cookie/session handling, user profile management, product search, add-to-cart, quantity updates, cart modal, dynamic totals, WhatsApp order integration, and payment processing. Designed a responsive UI with Next.js, Tailwind CSS, and Lucide React icons.",
        outcome: "Delivered a full-stack MERN e-commerce platform that enables small businesses to receive structured orders via WhatsApp or online payments. Reduced setup complexity, ensured secure authentication, and provided a frictionless shopping experience for end users."
    }
    ,
    {
    title: "Todo App",
    des: "A beautiful and minimal ToDo list manager built with React, Redux Toolkit, Bootstrap, and SweetAlert2. Users can add, edit, toggle, and remove tasks with a clean and responsive UI.",
    src: todo,
    src1: todo,
    src2: todo,
    stack: ["React.js", "Redux Toolkit", "Bootstrap 5", "SweetAlert2"],
    github: "https://github.com/sajedur22/ToDoApp",
    live: "https://todo-ejeg.onrender.com/",
    problem: "People often struggle to keep track of daily tasks in a simple and organized way. Many apps are bloated with unnecessary features or lack a clean interface.",
    solution: "A lightweight, minimal ToDo manager that provides only the essential features: add, update, filter, and delete tasks, with elegant dialogs and responsive design.",
    whatIBuilt: "Task management (CRUD), task filters (All/Completed/Incomplete), confirmation prompts with SweetAlert2, mobile responsive UI, and state management with Redux Toolkit.",
    outcome: "Helped users manage their personal and work tasks effectively with a distraction-free interface. Improved productivity by keeping task tracking simple and accessible on all devices."
}

    ,

];


export const services = [
    {
        id: 1,
        name: "Portfolio Website",
        price: "$0–$600 (1–2 weeks)",
        features: [
            "Personal or freelancer portfolio",
            "Showcase projects & skills",
            "Responsive design",
            "Contact form integration",
            "SEO ready",
        ],
    },
    {
        id: 2,
        name: "E-Commerce Platform",
        price: "$1,200–$3,000 (3–4 weeks)",
        features: [
            "Product listing & search",
            "Cart management & checkout",
            "Payment integration (Stripe/SSLCOMMERZ/bKash)",
            "User authentication",
            "Admin dashboard for managing products/orders",
            "Responsive frontend with React/Next.js",
        ],
    },
    {
        id: 3,
        name: "WhatsApp Cart System",
        price: "$500–$1,000 (2–3 weeks)",
        features: [
            "Order placement via WhatsApp",
            "Product listing & cart management",
            "Customer notifications",
            "Admin panel for tracking orders",
            "Responsive UI for mobile & desktop",
        ],
    },
    {
        id: 4,
        name: "Real-time Chat App for Doctors",
        price: "$1500–$2000 (4–6 weeks)",
        features: [
            "Real-time chat using WebSocket / Socket.IO",
            "Secure patient-doctor communication",
            "Authentication & role-based access",
            "Frontend with React/Next.js",
            "Backend with Node.js & MongoDB",
            "Notifications & chat history",
        ],
    },
    {
        id: 5,
        name: "Custom Full-Stack Projects",
        price: "Depends on requirements",
        features: [
            "MERN stack development",
            "Custom frontend & backend features",
            "Real-time functionality (chat, notifications, etc.)",
            "Third-party API integration",
            "Scalable & production-ready deployment",
        ],
    },
];

