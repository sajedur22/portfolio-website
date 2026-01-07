"use client";
import React from "react";
import Image from "next/image";
import { Mail, FileDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import profile from "@/public/images/gitblr.jpg";
import GithubIcon from "@/public/images/github.svg";
import LinkedinIcon from "@/public/images/linkedin.svg";
import Link from "next/link";
import Blog from "@/components/shared/Blog";

export function Hero() {
  return (<section
    id="home"
    className="min-h-screen w-full flex flex-col items-center  antialiased  relative pt-0 gap-12"
  >
    <Spotlight />

    {/* === CARD START === */}
    <div
      className="shadow-xl  p-6 sm:p-8 md:p-10 mt-12 sm:mt-10 md:mt-32 lg:mt-40 xl:mt-44 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[780px] lg:max-w-[820px] mx-auto
    flex flex-col md:flex-row items-center md:items-start gap-8 pentagon-card "
    >
      {/* Profile Image */}
      <Image
        src={profile}
        alt="profile"
        className=" rounded-full  aspect-square  object-cover w-[10.5rem]  md:w-[14.5rem]"
        width={412}
        height={412}
        priority
      />

      {/* Text + Links */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-foreground">
          Sajedur Rahman Shakil
        </h1>

        <p className="font-serif text-popover text-sm sm:text-base md:text-lg pt-4 leading-relaxed">
          I build scalable, production-ready web apps. Experienced in SaaS, full-stack products,
          and high-performance backend systems. Open to remote roles & freelance projects.
        </p>

        {/* Social Links */}
        <div className="flex flex-row justify-center md:justify-start gap-4 mt-6">
          <Link href="https://github.com/sajedur22" target="_blank">
            <Image
              src={GithubIcon}
              alt="GitHub"
              width={24}
              height={24}
              className="bg-muted rounded"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/sajedur-rahman-shakil" target="_blank">
            <Image
              src={LinkedinIcon}
              alt="LinkedIn"
              width={24}
              height={24}
              className="bg-muted rounded"
            />
          </Link>

          <Link href="mailto:sajedur645@gmail.com">
            <Mail width={24} height={24} className="bg-muted rounded" />
          </Link>

          <Link href="/sajedur777cv.pdf" target="_blank" download>
            <FileDown width={24} height={24} className="bg-muted rounded" />
          </Link>
        </div>
      </div>
    </div>

    {/* === MOVING BUTTONS BAR === */}
    <div className="flex flex-col justify-center items-center gap-2 text-center  max-w-xl ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-foreground">My Blog</h1>

      <Blog />
    </div>
  </section>);
}
