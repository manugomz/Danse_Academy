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
    title: "Nosotros",
    linkRute: "/Nosotros",
  },
  {
    title: "Horarios",
    linkRute: "/Horarios",
  },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

const handleMenu = () => {
    setIsOpen((prev) => !prev);
};


  return (
    <header className="bg-gray-800 font-roboto">
        <div className="flex items-center justify-between h-16 mx-auto px-4 sm:px-6 lg:px:8">
          <Link href="/" className="text-white">
            Dansé Academy Studio
          </Link>
          {/*Navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.linkRute}
                  className="text-gray-300 hover:bg-slate-500 hover:text-white px-3 py-2 rounded-md font-bold"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          {/*Hamburguer button */}
          <button
            type="button"
            onClick={handleMenu}
            className="flex md:hidden items-center justify-center p-2 text-gray-300"
          >
            <span className="sr-only">Open Main Menu</span>
            {isOpen ? <RiCloseLine /> : <LuMenu />}
          </button>
          
        </div>
      {/* Mobile Menu */}
      {isOpen ?(
        
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden ">
            {navlinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.linkRute}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                  block px-3 py-2 rounded-md text-base font-medium"
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
