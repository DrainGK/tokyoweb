import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function WorkScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    
    const x = useTransform(scrollYProgress, [0, 2], ["1%", "-175%"]);
  
    return (
      <section ref={targetRef} className="ml-[10%] relative h-[300vh] bg-white mx-auto">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
}

const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className=" h-[50vh] w-[50vh] overflow-hidden text-black cursor-pointer transition-transform ease-in-out hover:-translate-y-2 hover:bg-slate-50 shadow"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[60%] "
        ></div>
        <div className="flex flex-col px-4 gap-y-4 mt-4 font-[Oswald]">
          <div className="flex gap-x-4">
            {card.category.map((cat, index) => (
                <span key={index} className="border w-[75px] py-1 px-2 text-[#FFA41B] border-[#FFA41B] text-center">
                  {cat}
                </span>
              ))}
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-3xl ">
              {card.title} 
            </h3>

            {card.link?<a href={card.link} target="_blank"><FiArrowUpRight className="text-4xl text-[#FFA41B] border border-[#FFA41B] p-2 hover:bg-[#FFA41B] hover:text-white" /></a> : "" }
          </div>
          <p className="text-[#7D7C7C]">{card.desc}</p>
        </div>
      </div>
    );
};

export default WorkScroll;

const cards = [
    {
      url: "/project_1.webp",
      category: ["Web dev", "SEO", "Design"],
      title: "Art & design d'interieur",
      desc: "Developed a responsive website showcasing interior design projects, featuring interactive galleries and SEO optimization.",
      link: "https://artetdesigndinterieur.fr/",
      id: 1,
    },
    {
      url: "/project_2.webp",
      category: ["Design", "UI/UX"],
      title: "Travel App",
      desc: "Created a mobile-friendly travel app with a focus on UX/UI design.",
      id: 2,
    },
    {
      url: "/project_3.webp",
      category: ["Web dev", "Design"],
      title: "Artha | Transit Manager",
      desc: "Designed a product presentation website with detailed information, visuals for a transit management tool.",
      id: 3,
    },
    {
      url: "/project_4.webp",
      category: ["Design", "UI/UX"],
      desc: "Designed the website and user experience for a restaurant, focusing on intuitive navigation and visually appealing layouts.",
      link: "https://the-resto-lopez.netlify.app/",
      title: "THE RESTO",
      id: 4,
    },
    {
      url: "/project_5.webp",
      category: ["Game","Design", "App", "Desktop"],
      desc: "Developed a Pokémon-style game with a monster builder system, shop, quests, and challengers with a focus on web design and animation.",
      link: "https://mythic-masters.tokyowebbyguillaume.com/",
      title: "Mythic Masters",
      id: 5,
    },
];
