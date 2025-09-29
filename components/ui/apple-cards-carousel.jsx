"use client";



import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
  IconInfoCircle,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {DummyContent} from "@/components/pages/project";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}>
          <div
            className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "mx-auto max-w-7xl"
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}>
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
      <>
        <AnimatePresence>
          {open && (
              <div className="fixed h-screen inset-0 z-50 overflow-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 h-screen bg-black/80 backdrop-blur-lg"/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    ref={containerRef}
                    layoutId={layout ? `card-${card.title}` : undefined}
                    className="relative z-[50] mx-auto my-5  max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900 h-[80vh]">
                  <button
                      className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                      onClick={handleClose}>
                    <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900"/>
                  </button>
                  <motion.p
                      layoutId={layout ? `category-${card.title}` : undefined}
                      className="text-base font-medium text-black dark:text-white">
                    {card.category}
                  </motion.p>
                  <motion.p
                      layoutId={layout ? `title-${card.title}` : undefined}
                      className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                    {card.title}
                  </motion.p>
                  <div className="py-10 text-muted-foreground">{card.des}</div>
                  <div>
                    <div className="py-10 text-muted-foreground">
                      <div className="py-10 text-muted-foreground">
                        <DummyContent projects={[card]}/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
        <motion.button
            layoutId={`card-${card.title}`}
            onClick={handleOpen}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 flex h-[26rem] w-64 flex-col overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl md:w-80"
        >
          {/* Top Half - Image */}
          <div className="relative h-1/2 w-full overflow-hidden">
            <BlurImage
                src={card.src}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"/>

            {/* Top-right action buttons (over image) */}
            <div className="absolute top-3 right-3 z-40 flex items-center gap-2">
              {/* View details */}
              <button
                  onClick={(e) => { e.stopPropagation(); handleOpen(); }}
                  title="View details"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-gray-200 dark:bg-neutral-800 dark:ring-neutral-700 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-white/100 dark:hover:bg-neutral-700"
              >
                <IconInfoCircle className="h-5 w-5 text-gray-700 dark:text-gray-200"/>
              </button>

              {/* GitHub */}
              {card.github && (
                  <a
                      onClick={(e) => e.stopPropagation()}
                      href={card.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-gray-200 dark:bg-neutral-800 dark:ring-neutral-700 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-white/100 dark:hover:bg-neutral-700"
                  >
                    <IconBrandGithub className="h-5 w-5 text-gray-700 dark:text-gray-200"/>
                  </a>
              )}

              {/* Live link */}
              {card.live && (
                  <a
                      onClick={(e) => e.stopPropagation()}
                      href={card.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live site"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-gray-200 dark:bg-neutral-800 dark:ring-neutral-700 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-white/100 dark:hover:bg-neutral-700"
                  >
                    <IconExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-200"/>
                  </a>
              )}
            </div>
          </div>

          {/* Bottom Half - Content */}
          <div className="flex h-1/2 flex-col justify-between p-4 text-left">
            <div>
              <motion.p
                  layoutId={`title-${card.title}`}
                  className="font-sans text-lg font-semibold text-gray-900 dark:text-white md:text-xl"
              >
                {card.title}
              </motion.p>
              <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                {card.des}
              </p>
            </div>

            {/* Tech Stack Buttons */}
            <div className="mt-3 flex flex-wrap gap-2">
              {card.stack?.map((tech, i) => (
                  <span
                      key={i}
                      className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
                  >
          {tech}
        </span>
              ))}
            </div>
          </div>
        </motion.button>


      </>
);
};

export const BlurImage = ({
  height,
      width,
      src,
      className,
      alt,
...
  rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
      <img
          className={cn(
              "h-full w-full transition duration-300",
              isLoading ? "blur-sm" : "blur-0",
              className
          )}
          onLoad={() => setLoading(false)}
          src={typeof src === "string" ? src : src?.src}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"

          alt={alt ? alt : "Background of a beautiful view"}
          {...rest} />
  );
};
