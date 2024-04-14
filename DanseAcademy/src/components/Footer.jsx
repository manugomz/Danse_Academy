import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  const styles = {
    column: "flex flex-wrap justify-center gap-1 md:inline md:text-left",
    icons: "text-gray-dark text-3xl lg:text-4xl hover:text-white",
    menuText: "text-xl lg:text-2xl"
  };

  return (
    <footer className="bg-yellow-dark pb-3 pt-10 lg:ml-24">
      <div
        className="w-full cursor-default 
      items-center justify-around 
      p-2 text-center 
      text-gray-dark md:flex">
        <div>
          <div className="mx-[10%] rounded-md bg-gray-dark py-2 md:px-0">
            <img
              src="../images/Round_Logo.png"
              className=" mx-auto h-32 md:h-20"
              alt="Dansé Academy Studio"
            />
          </div>
          <p className="my-2 text-xl lg:text-2xl md:text-gray-dark">Estudio de danza</p>
        </div>
        <div className={styles.column}>
          <p className={styles.menuText}>Carrera 78 #47-22</p>
          <p className={styles.menuText}>Medellín, Colombia</p>
        </div>
        <div className={styles.column}>
          <p className={styles.menuText}>Contacto</p>
          <p className={styles.menuText}>(+57) 300 242 4995</p>
        </div>
      </div>
      <div className="flex justify-center gap-3 pb-10 pt-2 md:pt-0">
        <Link
          aria-label="Link to whatsapp chat"
          className="rounded-md p-1 hover:scale-125"
          to="https://bit.ly/DanseAcademyStudio"
          target="_blank">
          <FaWhatsapp className={styles.icons} aria-label="Whatsapp logo" />
        </Link>
        <Link
          aria-label="Link to dansé's instagram"
          className="rounded-md p-1 hover:scale-125"
          to="https://www.instagram.com/danseacademystudio_/"
          target="_blank">
          <FaInstagram className={styles.icons} aria-label="instagram logo"/>
        </Link>
        <Link
          aria-label="Link to send dansé an email"
          className="rounded-md p-1 hover:scale-125"
          to="mailto:${alors.on.danse.adaemystudio@gmail.com}?subject=${encodeURIComponent(¡Hola Dansé!)}">
          <FiMail className={styles.icons} aria-label="mail icon"/>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
