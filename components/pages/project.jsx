"use client";

import React from "react";
import {motion} from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {projects} from "@/lib/data";
import Image from "next/image";

export function Project() {
    const cards = projects.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <section id={'projects'} className="w-full max-w-7xl mx-auto py-5 pt-5">
            <div className={'text-center max-w-3xl mx-auto pt-10'}>
                <motion.h2
                    className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-3 text-secondary"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    Projects
                </motion.h2>
                <motion.p
                    className="text-lg text-accent/70 mb-8"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                >Here are some of the projects I've worked on. Each project showcases different technologies and
                    skills.
                </motion.p>
            </div>

                <Carousel items={cards}/>

        </section>
)
;
}
export const DummyContent = ({ projects = [] }) => {
    return (
        <>
            {projects.map((item, i) => (
                <React.Fragment key={i}>
                    {/* Project Details Card */}
                    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-8">
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Project Details
              </span>{" "}
                            {item.des}
                        </p>
                        <div className={"p-2"}>
                            <Image
                                src={item.src1}
                                alt="Project Details"
                                height="500"
                                width="500"
                                className=" h-full w-full mx-auto object-contain"
                            />
                            <Image
                                src={item.src2}
                                alt="Project Details"
                                height="500"
                                width="500"
                                className=" h-full w-full mx-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Case Study Card */}
                    <div className="bg-[#E8F0FE] dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-8">
                        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-800 dark:text-neutral-100">
                Case Study
              </span>
                        </p>
                        <div>
                            <h1 className={"text-white font-bold"}>{item.title}-</h1>
                            <ol>
                                <li><span className={"text-white font-bold"}>Problem:</span>{item.problem}</li>
                                <li><span className={"text-white font-bold"}>Solution:</span>{item.solution}
                                </li>
                                <li><span className={"text-white font-bold"}>WhatIBuilt:</span>{item.whatIBuilt}
                                </li>
                                <li><span className={"text-white font-bold"}>Outcome::</span>{item.outcome}
                                </li>
                            </ol>
                        </div>

                    </div>
                </React.Fragment>
            ))}
        </>
    );
};






