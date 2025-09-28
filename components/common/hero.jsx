"use client";
import React from "react";
import Image from "next/image";
import { Mail, FileDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import profile from "@/public/images/gitblr.jpg"
import GithubIcon from "@/public/images/github.svg";
import LinkedinIcon from "@/public/images/linkedin.svg";
import Link from "next/link";
export function Hero() {
    return (
        <section
            id="home"
            className="h-[42rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-3"
        >
            <Spotlight/>

            <div className="flex flex-col md:flex-row justify-center items-center lg:px-[15%] md:gap-8 px-8 gap-6">
                {/* Profile Image */}
                <Image
                    src={profile}
                    alt="profile"
                    className="rounded-full flex-shrink-0 w-[10.5rem] h-[11.5rem] md:w-[14.5rem] md:h-[15.5rem]"
                    width={512}
                    height={512}
                    priority
                />

                {/* Text + Links */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    {/* Heading */}
                    <h1 className="text-2xl md:text-6xl font-serif text-primary-foreground pt-4 md:pt-7">
                        Sajedur Rahman Shakil
                    </h1>

                    {/* Paragraph */}
                    <p className="font-serif text-muted-foreground text-sm md:text-xl pt-4 md:pt-8 md:pl-2 max-w-xl">
                        I build scalable, production-ready web apps. Experienced in delivering
                        SaaS, MVPs, and full-stack platforms with modern tech stacks. Open to
                        remote roles & freelance projects.
                    </p>

                    {/* Social Links (always last on mobile) */}
                    <div className="flex flex-row justify-center md:justify-start gap-4 mt-6 order-last md:order-none">
                        <Link
                            href="https://github.com/sajedur22"
                            target="_blank"
                            className="social-link"
                            aria-label="Visit my GitHub profile"
                        >
                            <Image
                                src={GithubIcon}
                                alt="GitHub"
                                className="invert-0 dark:invert transition-all duration-300"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sajedur-rahman-shakil-856893236"
                            target="_blank"
                            className="social-link"
                            aria-label="Visit my LinkedIn profile"
                        >
                            <Image
                                src={LinkedinIcon}
                                alt="LinkedIn"
                                className="invert-0 dark:invert transition-all duration-300"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link
                            href="mailto:sajedur645@gmail.com"
                            className="social-link"
                            aria-label="Send me an email"
                        >
                            <Mail
                                className="invert-0 dark:invert transition-all duration-300"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link
                            href="/sajedur22cv.pdf"
                            target="_blank"
                            download
                            className="social-link"
                            aria-label="Download My Resume"
                        >
                            <FileDown
                                className="invert-0 dark:invert transition-all duration-300"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
