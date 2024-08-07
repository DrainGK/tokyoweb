import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import BookButton from './BookButton';
import LanguageSelector from "./LanguageSelector";

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBeyondThreshold, setIsBeyondThreshold] = useState(false);
  const { scrollY } = useViewportScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateNavState = () => {
      const currentScrollY = scrollY.get();
      const scrollingUp = currentScrollY < lastScrollY;
      const beyondThreshold = currentScrollY > 100;

      // Determine if navbar should be shown
      if (scrollingUp) {
        setShowNav(true);
      } else if (!scrollingUp && currentScrollY > lastScrollY) {
        setShowNav(false);
      }

      // Update whether the scroll is beyond the initial 250px threshold
      setIsBeyondThreshold(beyondThreshold);

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.onChange(updateNavState);

    return () => unsubscribe();
  }, [lastScrollY, scrollY]);

  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 ease-in-out 
      ${showNav ? "translate-y-0" : "-translate-y-full"} 
      ${isBeyondThreshold ? "bg-[#364044]" : "bg-transparent"} z-10`}>
      <div className="w-[100vw] md:w-[78vw] p-6 flex items-center justify-between mx-auto">
        <div className="text-2xl hover:text-[#FFA41B] cursor-pointer text-white">
          <a href="/">Tokyo Web <p className="text-xs font-[Oswald] font-light">by Guillaume</p></a>
        </div>
        <NavLeft setIsOpen={setIsOpen} />
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default NavBar;

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <div className='block lg:hidden'>
        <LanguageSelector />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden white text-4xl text-white"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <NavLink text="home" />
      <NavLink text="services" />
      <NavLink text="projects" />
      <NavLink text="contact" />
      <NavLink text="blog" href="https://blog.tokyowebbyguillaume.com" />
      <div className='hidden md:block'>
        <BookButton />
      </div>
      <div className='hidden md:block'>
        <LanguageSelector />
      </div>
    </div>
  );
};

const NavLink = ({ text, href }) => {
  const linkHref = href || `#${text}`;
  return (
    <a
      href={linkHref}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium text-white"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-sm">{text}</span>
        <span className="flex items-center h-[30px] text-[#FFA41B]">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 bg-[#404C51]"
    >
      <div className='w-full flex justify-end visible md:hidden' onClick={() => setIsOpen(false)}>
        <BookButton  />
      </div>
      <MenuLink text="home" setIsOpen={setIsOpen} />
      <MenuLink text="services" setIsOpen={setIsOpen} />
      <MenuLink text="projects" setIsOpen={setIsOpen} />
      <MenuLink text="contact" setIsOpen={setIsOpen} />
      <MenuLink text="blog" href="https://blog.tokyowebbyguillaume.com" setIsOpen={setIsOpen} />
    </motion.div>
  );
};

const MenuLink = ({ text, href, setIsOpen }) => {
  const linkHref = href || `#${text}`;
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={linkHref}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2 text-white"
      onClick={() => setIsOpen(false)}
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-[#FFA41B] opacity-50" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] ">{text}</span>
        <span className="flex items-center h-[30px] text-[#FFA41B]">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
