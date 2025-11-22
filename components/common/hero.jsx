"use client";
import React from "react";
import Image from "next/image";
import { Mail, FileDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import profile from "@/public/images/gitblr.jpg";
import GithubIcon from "@/public/images/github.svg";
import LinkedinIcon from "@/public/images/linkedin.svg";
import Link from "next/link";

const data = [{ title: "Blog>>" }];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center  bg-black/[0.96]  antialiased bg-grid-white/[0.02] relative pt-0 "
    >
      <Spotlight />

      {/* ==== CARD START ==== */}
      <div
        className="bg-white/10 backdrop-blur-md shadow-xl 
                p-8 md:p-10 mt-8 md:mt-40 w-fit flex flex-col md:flex-row items-center gap-6
               pentagon-card   z-50"
      >
        {/* Profile Image */}
        <Image
          src={profile}
          alt="profile"
          className="rounded-full w-[10.5rem] h-[11.5rem] md:w-[14.5rem] md:h-[15.5rem]"
          width={512}
          height={512}
          priority
        />

        {/* Text + Links */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-2xl md:text-4xl font-serif text-primary-foreground">
            Sajedur Rahman Shakil
          </h1>

          <p className="font-serif text-muted-foreground text-sm md:text-xl pt-4 leading-relaxed">
            I build scalable, production-ready web apps. Experienced in
            delivering SaaS, MVPs, and full-stack platforms with modern tech
            stacks. Open to remote roles & freelance projects.
          </p>

          {/* Social Links */}
          <div className="flex flex-row justify-center md:justify-start gap-4 mt-6">
            <Link href="https://github.com/sajedur22" target="_blank">
              <Image
                src={GithubIcon}
                alt="GitHub"
                width={24}
                height={24}
                className="dark:invert"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/sajedur-rahman-shakil-856893236"
              target="_blank"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                width={24}
                height={24}
                className="dark:invert"
              />
            </Link>

            <Link href="mailto:sajedur645@gmail.com">
              <Mail width={24} height={24} className="dark:invert" />
            </Link>

            <Link href="/sajedur777cv.pdf" target="_blank" download>
              <FileDown width={24} height={24} className="dark:invert" />
            </Link>
          </div>
        </div>
      </div>
      {/* ==== CARD END ==== */}

      {/* ==== BUTTONS UNDER CARD ==== */}
      <div className="mt-10 md:mt-20 p-2 flex flex-wrap gap-2">
        {data.map((item, index) => (
          <button
            key={index}
            className="rounded-full border border-amber-200 bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
          >
            {item.title}
          </button>
        ))}
      </div>
    </section>
  );
}
