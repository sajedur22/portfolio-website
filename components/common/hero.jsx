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
            className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative pt-0"
        >
            <Spotlight/>

            <div className="flex flex-col md:flex-row justify-center items-center lg:px-[15%] md:gap-10 px-5 gap-6">
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
                    <p className="font-serif text-muted-foreground text-sm md:text-xl pt-4 md:pt-8 md:pl-2 max-w-xl leading-relaxed">
                        I build scalable, production-ready web apps. Experienced in delivering
                        SaaS, MVPs, and full-stack platforms with modern tech stacks. Open to
                        remote roles & freelance projects.
                    </p>

                    {/* Social Links */}
                    <div className="flex flex-row text-white-800 justify-center md:justify-start gap-4 mt-6">
                        <Link href="https://github.com/sajedur22" target="_blank" aria-label="Visit my GitHub profile">
                            <Image src={GithubIcon} alt="GitHub" width={24} height={24}
                                   className="invert-0 dark:invert transition-all duration-300
                                   "/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sajedur-rahman-shakil-856893236" target="_blank"
                              aria-label="Visit my LinkedIn profile">
                            <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24}
                                   className="invert-0 dark:invert transition-all duration-300"/>
                        </Link>
                        <Link href="mailto:sajedur645@gmail.com" aria-label="Send me an email">
                            <Mail width={24} height={24} className="invert-0 dark:invert transition-all duration-300"/>
                        </Link>
                        <Link href="/sajedur22cv.pdf" target="_blank" download aria-label="Download My Resume">
                            <FileDown width={24} height={24}
                                      className="invert-0 dark:invert transition-all duration-300"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}
