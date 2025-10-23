"use client"
import React from 'react';
import {motion} from "framer-motion";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction,
} from "@/components/ui/card";
import {backendTech, frontendTech, programmingLanguages, toolsAndDevops} from "@/lib/data";

const Aboutme = () => {
    const techCategories = [
        { title: "Frontend", data: frontendTech || [] },
        { title: "Backend", data: backendTech || [] },
        { title: "Tools & DevOps", data: toolsAndDevops || [] },
        { title: "Languages", data: programmingLanguages || [] }
    ];
    return (
        <section id={'about'} className={'bg-secondary-foreground w-full py-27'}>
            <div>
                <div className={'text-center max-w-3xl mx-auto'}>
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-3 text-secondary"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="text-lg text-accent/70 mb-8"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        Hi, I'm Shakil - a passionate Full Stack Developer with a knack for
                        creating dynamic, user-friendly applications. Here's a look at the
                        technologies I work with.
                    </motion.p>
                </div>
                <div className={'mx-auto mt-12 px-5 max-w-xs md:max-w-7xl'}>
                    <div className={'grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4'}>
                        {
                            techCategories.map((category,i)=> {
                               return (
                                   <motion.div
                                       key={i}
                                       className=" mb-8 justify-center"
                                       initial={{opacity: 0, y: 20}}
                                       whileInView={{opacity: 1, y: 0}}
                                       transition={{duration: 0.6, delay: 0.1}}
                                   >
                                       <Card className="max-w-md border dark:bg-sidebar-foreground/30 text-secondary">
                                           <CardHeader>
                                               <div>
                                                   <CardTitle className={'text-3xl  '}>{category.title}</CardTitle>
                                               </div>
                                           </CardHeader>

                                           <CardFooter>
                                               <CardAction className={''}>
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                       {category.data.map((tech,i) => (
                                                             <span  key={i} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-neutral-800 dark:text-gray-200" >
                                                                {tech}
                                                                </span> ))}
                                                              </div>
                                                   

                                               </CardAction>
                                           </CardFooter>
                                       </Card>
                                   </motion.div>
                               )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;