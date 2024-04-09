import { React, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const navlinks = [
  {
    title: "Home",
    linkRute: "/",
  },
  {
    title: "Clases",
    linkRute: "/clases",
  },
  {
    title: "Horarios",
    linkRute: "/horarios",
  },
  {
    title: "Eventos",
    linkRute: "/Eventos",
  },
  {
    title: "Reservas",
    linkRute: "/reservas",
  },
  
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

const handleMenu = () => {
    setIsOpen((prev) => !prev);
};

  return (
    <header className=" bg-gray-dark py-3
                        md:fixed md:h-full w-24 z-50
                        
                        transition-all">
        <div className="flex md:flex-col items-center justify-between 
                        h-16 px-4 md:px-2 sm:px-6 lg:px:8">
          <Link href="/" >
            <img src="../images/Text_Logo.png" alt="DANSÉ"className="h-10 md:h-auto text-yellow-light"/>
          </Link>
          {/*Navlinks */}
            <nav className=" hidden md:flex flex-col gap-16 pt-10">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.linkRute}
                  className="text-yellow-light pb-3 font-bold font-2xl
                            text-center px-2 
                            hover:border-white hover:border-b-4 hover:text-white
                            focus:border-white focus:border-b-4 focus:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          {/*Hamburguer button */}
          <button
            type="button"
            onClick={handleMenu}
            className="flex md:hidden items-center justify-center p-2 text-yellow-dark font-2xl"
          >
            <span className="sr-only">Open Main Menu</span>
            {isOpen ? <RiCloseLine /> : <LuMenu />}
          </button>
          
        </div>
      {/* Mobile Menu */}
      {isOpen ?(
        
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden font-2xl">
            {navlinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.linkRute}
                  className="text-yellow-light hover:bg-gray-dark hover:text-white text-center
                  block px-3 py-2 rounded-md text-base font-medium font-2xl"
                >
                  {link.title}
                </Link>
              ))}
            </div>
      ):null}
    </header>
  );
};

export default Header;
