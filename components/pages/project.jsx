"use client";

import React from "react";
import {motion} from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {projects} from "@/lib/data";

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
                    className="text-lg text-muted-foreground mb-8"
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

export const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                        <p
                            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                    </div>
                );
            })}
        </>
    );
};


