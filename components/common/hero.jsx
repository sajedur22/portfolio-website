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
        <section id={'home'} className=" h-[35rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden top-0 right-0 pt-4">
            <Spotlight />

            <div className={'flex flex-col md:flex-row justify-center items-center lg:px-[15%] md:gap-8 content-center px-16 gap-0'}>
                <Image
                    src={profile}
                     alt={'profile'}
                    className={'rounded-full flex-shrink-0 w-[15.5rem] h-[15.5rem]'}
                    width={512}
                    height={512}
                    priority={true}
                />
                
                <div className={'flex flex-col justify-center'}>
                    <div className={'flex flex-row order-last md:order-first pt-5 md:pt-0 justify-center md:justify-start gap-4'}>
                        <Link
                            href="https://github.com/l3o9-reborn"
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
                            href="https://www.linkedin.com/in/munna-hasan-leon-26b33b19a"
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
                            href="mailto:getleon09@gmail.com"
                            target="_blank"
                            className="social-link"
                            aria-label="Send me an email"
                        >
                            <Mail width={24} height={24} />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="social-link"
                            aria-label="Download My Resume"
                        >
                            <FileDown width={24} height={24} />
                        </Link>
                    </div>

                        <h1 className={'text-5xl md:text-6xl font-serif text-center md:text-start text-primary pt-4 md:pt-7 gap-2'}>
                            Sajedur Rahman <span className={'block lg:inline ter-primary'}>Shakil</span>
                        </h1>
                        <p className={'font-serif text-muted-foreground text-xl text-center md:text-start pt-4 md:pt-8 pl-5 md:pl-2'}>
                            I build scalable, production-ready web apps.
                            Experienced in delivering SaaS,
                            MVPs, and full-stack platforms with modern tech stacks.
                            Open to remote roles & freelance projects.
                        </p>

                </div>
            </div>


        </section>
    );
}
