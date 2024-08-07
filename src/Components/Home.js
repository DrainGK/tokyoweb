import React, { useEffect, useState } from "react";
import Wave from "react-wavify";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InView } from "react-intersection-observer";
import BookButton from './BookButton';
import MeCard from "./MeCard";
import Footer from "./Footer";

import transition from "../transition";
import WorkScroll from "./WorkScroll";

import { useTranslation } from "react-i18next";


const staggeredVar = {
  initial: {
    y: "15vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.9,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.0,
    },
  },
};

const textVariants = {
  initial: {
    y: "5vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function Home() {
  const projectsContainer = useRef(null);
  const contactContainer = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // Scroll progress for the projects section
  const { scrollYProgress: projectsScrollYProgress } = useScroll({
    target: projectsContainer,
    offset: ["end start", "start end"],
  });

  // Scroll progress for the contact section
  const { scrollYProgress: contactScrollYProgress } = useScroll({
    target: contactContainer,
    offset: ["end start", "start end"],
  });

  // Parallax effects for each section
  const projectsParallax = useTransform(
    projectsScrollYProgress,
    [0, 1],
    isMobile ? [-200, 100] : [-250, 300]
  );
  const contactParallax = useTransform(
    contactScrollYProgress,
    [0, 1],
    isMobile ? [-50, 50] : [-50, 100]
  );

  return (
    <main id="home" className="h-screen ">
      {/* <Navbar /> */}
      <section className="h-[70%] md:h-[80%] w-full relative">
        <div className='h-full w-full bg-[url("./topography.svg")] bg-cover  opacity-5 absolute z-[0]' />
        <motion.div
          className="md:w-[60%] w-[88%] md:h-[65%] h-[40%] flex flex-col justify-end mx-auto z-1 relative"
          variants={containerVars}
          initial="initial"
          animate="open"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={staggeredVar}
              className="z-11 md:text-7xl text-3xl my-[1rem] text-[#FFA41B]"
            >
              Bespoke Web Design
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              variants={staggeredVar}
              className="z-11 text-white md:text-4xl text-2xl font-[Oswald] font-light"
            >
              to{" "}
              <span className="font-[Huntsman] md:text-4xl text-[#FFA41B]">
                {" "}
                Elevate
              </span>{" "}
              Your compagny。
            </motion.h2>
          </div>
        </motion.div>

        <div className="md:hidden w-[88%] mx-auto mt-6">
          <BookButton className="md:hidden" />
        </div>

        <Wave
          fill="#404C51"
          className="h-[25vh] absolute bottom-0 z-0"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.2,
            points: 4,
          }}
        />
      </section>
      <section className="h-1/2 md:h-[75%] bg-[#404C51] flex flex-col justify-center overflow-hidden">
        <div className="w-[88%] md:w-[60%] text-lg md:text-xl lg:text-4xl md:leading-loose lg:leading-loose font-[Oswald] font-light mx-auto">
          <InView triggerOnce={false} threshold={0.5}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView ? "open" : "initial"}
              >
                <motion.p variants={textVariants} className="text-white">
                  Welcome to the home of hassle-free web magic. We're in the
                  business of making your online
                </motion.p>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={false} threshold={0.5}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView ? "open" : "initial"}
              >
                <motion.p variants={textVariants} className="text-white">
                  presence as easy as pie and as impactful as a morning coffee.
                  Our team is dedicated to
                </motion.p>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={false} threshold={0.5}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView ? "open" : "initial"}
              >
                <motion.p variants={textVariants} className="text-white">
                  designing sleek, user-friendly websites that do the heavy
                  lifting for you. Partner with us and
                </motion.p>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={false} threshold={0.5}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView ? "open" : "initial"}
              >
                <motion.p variants={textVariants} className="text-white">
                  watch your digital dreams take flight—no tech talk needed,
                  just results.
                </motion.p>
              </motion.div>
            )}
          </InView>
        </div>
      </section>
      <section
        id="services"
        className="h-fit bg-slate-100 relative z-1 pb-[150px]"
      >
        <div className='h-full w-full bg-[url("./topography.svg")] bg-cover  opacity-5 absolute z-[0]' />
        <p className="w-[80%] md:w-[60%] mx-auto flex justify-end text-black text-6xl md:text-[100px] lg:text-[200px] py-[100px]">
          SERVICES
        </p>

        <p>
          {t("hello")}
        </p>
        <p>
          {t("zob")}
        </p>
        <div className="w-[60%]  mx-auto md:flex justify-between text-black relative ">
          <div className="flex flex-col text-4xl gap-y-8 my-12 md:my-0">
            <BookButton />
            What's our offers?
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center md:items-end font-[Oswald]">
            <div className="w-full flex flex-col gap-y-4 border-y">
              <h3 className="text-2xl mt-4">Web Design</h3>
              <p className="text-md text-[#7D7C7C] mb-4">
                Transform your online space with our bespoke Web Design
                services. At Guillaume Dev, we don't just build websites; we
                craft digital experiences tailored to embody your brand's
                identity and ethos. Our design philosophy intertwines simplicity
                with elegance, creating intuitive and captivating interfaces
                that hold visitors' attention and guide them with ease.{" "}
              </p>
            </div>
            <div className="w-full flex flex-col gap-y-4">
              <h3 className="text-2xl mt-4">Development</h3>
              <p className="text-md text-[#7D7C7C] mb-4">
                Your website's backbone is as crucial as its facade. Our
                Development services are all about creating a seamless, robust,
                and adaptive foundation for your digital presence. Our
                developers are wizards in the digital realm, equipped with the
                latest technologies to construct a website that's not just a
                treat to the eyes but also a powerhouse under the hood.
              </p>
            </div>
            <div className="w-full flex flex-col gap-y-4 border-y">
              <h3 className="text-2xl mt-4">SEO</h3>
              <p className="text-md text-[#7D7C7C] mb-4">
                Being seen is the first step towards success in the digital
                world. Our SEO services are designed to put you in the
                spotlight. We delve deep into keyword research, on-page
                optimization, and quality link building to ensure that your
                website doesn't just reach the top of the search results but
                also commands the attention it deserves.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={projectsContainer} id="projects" className=" bg-white">
        <div className="overflow-hidden h-fit">
          <motion.p
            style={{ y: projectsParallax }}
            className="w-[60%] mx-auto text-black text-[300px] ml-[10%] hidden md:block"
          >
            WORK
          </motion.p>
          <motion.p
            style={{ y: projectsParallax }}
            className="w-[60%] mx-auto text-black text-[100px] ml-[10%] block md:hidden"
          >
            WORK
          </motion.p>
        </div>
        <WorkScroll />
      </section>

      <section
        ref={contactContainer}
        id="contact"
        className="md:h-full bg-white relative z-0 overflow-hidden"
      >
        <div className='h-full md:h-[100vh] w-full bg-[url("./clouds.svg")]  opacity-5 absolute z-[0]' />
        <div className="overflow-hidden">
          <motion.p
            style={{ y: contactParallax }}
            className="w-[60%] mx-auto flex justify-end text-black text-5xl md:text-[100px] pt-12"
          >
            Let's talk
          </motion.p>
        </div>
        <div className="h-[100vh] md:h-full w-[90%] md:w-[80%] xl:w-[60%] block md:flex justify-between mx-auto my-12">
          <MeCard />
          <div className="h-[67%] w-[90%] md:w-1/2 z-10 text-black flex flex-col items-end gap-y-10 my-12 md:my-0">
            <p className="w-[90%] text-4xl">Want to start a project?</p>
            <p className="w-[90%] font-[Oswald] font-light text-xl md:text-2xl">
              Hit 'Become a Client' and let's embark on a creative journey
              together. At Guillaume Dev, your vision meets innovation. Get a
              website that's not only beautiful but also boosts your business.
              Let's make digital waves.
            </p>
            <BookButton />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default transition(Home);
