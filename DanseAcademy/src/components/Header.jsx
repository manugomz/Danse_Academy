import { React, useState } from "react";
import { Link } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { FaPersonFalling, FaCalendarPlus, FaCalendar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";

const Header = () => {
  const styles = {
    headerButton: `font-2xl w-8 flex transition-all ease-in
    font-bold text-yellow-light text-center
    hover:text-white focus:text-white`
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header
      className=" z-50 bg-gray-dark
                  py-3 transition-all md:fixed md:h-full
                  md:w-24
                  md:hover:w-40 [&>div>nav>button]:hover:w-28">
      <div
        className="flex w-auto items-center justify-between 
                  sm:px-6 md:flex-col md:px-2 lg:px-4">
        <div className="h-20">
          <img
            src="../images/Text_Logo.png"
            alt="DANSÉ"
            className=" text-yellow-light"
          />
        </div>
        {/*Navlinks */}
        <nav className=" hidden flex-col items-center gap-16 pt-10 md:flex">
          <button key="home" className={styles.headerButton}>
            <div className="pl-2">
              <IoHome className="inline text-2xl" />
            </div>
            <span className="truncate text-clip pl-2">Home</span>
          </button>

          <button key="events" className={styles.headerButton}>
            <div className="pl-2">
              <FaCalendar className="inline text-2xl" />
            </div>
            <span className="truncate text-clip pl-2">Eventos</span>
          </button>

          <button key="classes" className={styles.headerButton}>
            <div className="pl-2">
              <FaPersonFalling className="inline rotate-45 text-2xl" />
            </div>
            <span className="truncate text-clip pl-2 ">Clases</span>
          </button>

          <button key="schedule" className={styles.headerButton}>
            <div className="pl-2">
              <MdAccessTimeFilled className="inline text-2xl" />
            </div>
            <span className="truncate text-clip pl-2 ">Horarios</span>
          </button>

          <button
            key="booking"
            className={styles.headerButton}
            onClick={() => {}}>
            <div className="pl-2">
              <FaCalendarPlus className="inline text-2xl" />
            </div>
            <span className="truncate text-clip pl-2 ">Reserva</span>
          </button>
        </nav>
        {/*Hamburguer button */}
        <button
          type="button"
          onClick={handleMenu}
          className="font-2xl flex items-center justify-center p-2 text-yellow-dark md:hidden">
          <span className="sr-only">Open Main Menu</span>
          {isOpen ? <RiCloseLine /> : <LuMenu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen ? (
        <div className="font-2xl space-y-1 px-2 pb-3 pt-2 sm:px-3 md:hidden">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              to={link.linkRute}
              className="font-2xl block rounded-md px-3
                  py-2 text-center text-base font-medium text-yellow-light hover:bg-gray-dark hover:text-white">
              {link.title}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
