import { Fragment, React, useState } from "react";

import { IoHome } from "react-icons/io5";
import { FaPersonFalling, FaCalendar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";

import FloatButton from "./FloatButton";
import useRefContext from "../hooks/useRefContext";

const Header = () => {
  const scrollToElement = reference => {
    if (reference.current)
      reference.current.scrollIntoView({ behavior: "smooth" });
  };

  const { landingRef, eventsRef, classesRef, scheduleRef } = useRefContext();

  const styles = {
    bar: `flex w-auto items-center justify-between
            sm:px-6 
            lg:flex-col lg:px-4 lg:h-[95vh]`,

    headerButton: `font-2xl w-8 flex transition-all ease-in
                    font-bold text-yellow-light text-center
                    hover:text-white focus:text-white`,

    header: `z-50 bg-gray-dark
            py-3 transition-all lg:fixed lg:h-full
            lg:w-24
            lg:hover:w-40 [&>div>nav>button]:hover:w-28`,

    logoDiv: `h-12 pl-5 md:p-0 lg:h-20 flex items-center`,

    navDesktop: `hidden flex-col items-center pt-8 
                lg:flex gap-10
                2xl:gap-16 `,

    navTextDesktop: `truncate text-clip pl-2`
  };

  const navlinks = ["Home", "Eventos", "Clases", "Horarios"];
  const refs = [landingRef, eventsRef, classesRef, scheduleRef];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleClick = ref => {
    setIsOpen(prev => !prev);
    scrollToElement(ref);
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.logoDiv}>
          <img
            src="../images/Text_Logo.png"
            alt="DANSÉ"
            className="h-10 text-yellow-light sm:h-14 lg:h-auto"
          />
        </div>
        {/*Navlinks */}
        <nav className={styles.navDesktop}>
          <button
            key="home"
            className={styles.headerButton}
            onClick={() => scrollToElement(landingRef)}>
            <div className="pl-2">
              <IoHome className="inline text-2xl" aria-label="home" />
            </div>
            <span className={styles.navTextDesktop}>Home</span>
          </button>

          <button
            key="events"
            className={styles.headerButton}
            onClick={() => scrollToElement(eventsRef)}>
            {" "}
            {/*EVENTOS */}
            <div className="pl-2">
              <FaCalendar className="inline text-2xl" aria-label="calendar" />
            </div>
            <span className={styles.navTextDesktop}>Eventos</span>
          </button>

          <button
            key="classes"
            className={styles.headerButton}
            onClick={() => scrollToElement(classesRef)}>
            {/*CLASES */}
            <div className="pl-2">
              <FaPersonFalling
                className="inline rotate-45 text-2xl"
                aria-label="dance"
              />
            </div>
            <span className={styles.navTextDesktop}>Clases</span>
          </button>

          <button
            key="schedule"
            className={styles.headerButton}
            onClick={() => scrollToElement(scheduleRef)}>
            {/*HORARIOS */}

            <div className="pl-2">
              <MdAccessTimeFilled
                className="inline text-2xl"
                aria-label="clock"
              />
            </div>
            <span className={styles.navTextDesktop}>Horarios</span>
          </button>
        </nav>
        <FloatButton text="Hola%20%C2%A1Quiero%20reservar%20una%20clase%21" />
        {/*Hamburguer button */}
        <button
          type="button"
          onClick={handleMenu}
          aria-label='hamburguer menu'
          className="font-2xl flex items-center justify-center pr-5 text-yellow-light lg:hidden">
          <span className="sr-only">Open Main Menu</span>
          {isOpen ? (
            <RiCloseLine className="text-2xl" />
          ) : (
            <LuMenu className="text-2xl" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen ? (
        <nav className="font-2xl flex flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3 md:hidden ">
          {navlinks.map((link, i) => (
            <button
              key={i}
              onClick={() => handleClick(refs[i])}
              className="font-2xl font-md block rounded-md
                  px-3 py-2 text-center text-base
                  text-yellow-light focus:text-white">
              {link}
            </button>
          ))}
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
