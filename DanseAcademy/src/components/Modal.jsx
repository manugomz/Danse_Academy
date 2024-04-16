import React from "react";
import { IoClose } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";
import { encode } from "url-encode-decode";

const Modal = ({ onClose, evento }) => {
  
  const styles = {
    bookButton: `absolute bottom-[2%] left-[3%]
    m-2 flex w-10
    items-center rounded-full 
    bg-yellow-dark p-2 font-bold
    transition-all ease-in
    hover:w-44 hover:bg-yellow-darker hover:text-white`,

    calendarIcon:"size-5 text-xl",

    closeButton: `absolute right-4 top-4
    cursor-pointer rounded-full
    bg-yellow-dark text-2xl text-black  
    hover:scale-110 hover:bg-yellow-darker hover:text-white`,

    modal:`relative mx-2 flex flex-col rounded-md p-2`,

    modalBg: `fixed left-0 top-0 
            z-50 flex h-full
            w-full items-center justify-center 
            bg-[rgba(0,0,0,0.7)] overflow-hidden`,

    modalImg:`max-h-[80vh] rounded-lg`,

    reserva:"truncate text-clip pl-1",

  };

  const encoded = encode(evento.description).replaceAll("+", "%20");
  const text =
    "Hola%20%C2%A1Quiero%20reservar%20un%20cupo%20en%20el%20evento: " + encoded +'%21';

  return (
    <div className={styles.modalBg} onClick={() => onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <button className={styles.closeButton} onClick={() => onClose()} aria-label="Close Modal">
          <IoClose />
        </button>
        <img
          className={styles.modalImg}
          src={evento.img}
          alt={evento.description}
        />
        <a
          className={styles.bookButton}
          href={"https://wa.me/+573002424995?text=" + text}
          onClick={() => onClose()}
          target="_blank">
          <div className="pl-[0.15rem]">
            <FaCalendarPlus className={styles.calendarIcon} />
          </div>
          <span className={styles.reserva}>Reservar ahora</span>
        </a>
      </div>
    </div>
  );
};

export default Modal;
