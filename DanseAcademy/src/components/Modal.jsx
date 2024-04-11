import React from "react";
import { IoClose } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";

const Modal = ({ onClose, evento }) => {
  const styles = {
    modal: `fixed left-0 top-0 
            z-50 flex h-full
            w-full items-center justify-center 
            bg-[rgba(0,0,0,0.7)] overflow-hidden`,
    closeButton: `absolute right-4 top-4
                cursor-pointer rounded-full
                bg-yellow-dark text-2xl text-black  
                hover:scale-110 hover:bg-yellow-darker hover:text-white`,

    bookButton:`absolute bottom-2 left-2
                m-2 flex w-10
                items-center rounded-full 
                bg-yellow-dark p-2 font-bold
                transition-all ease-in
                hover:w-44 hover:bg-yellow-darker hover:text-white`
  };

  //TODO: Make the text variable (create URL encoder)
  const text='Hola%20%C2%A1Quiero%20reservar%20un%20evento%21'

  return (
    <div className={styles.modal} onClick={() => onClose()}>
      <div className="relative mx-2 flex flex-col rounded-md p-2">
        <IoClose className={styles.closeButton} onClick={() => onClose()} />
        <img
          className="max-h-[80vh] rounded-lg"
          src={evento.img}
          alt={evento.description}
        />
        <a
          className={styles.bookButton}
          href={"https://wa.me/+573002424995?text="+text}
          onClick={() => onClose()}
          target="_blank">
          <div className="pl-[0.15rem]">
            <FaCalendarPlus className="size-5 text-xl" />
          </div>
          <span className="truncate text-clip pl-1 ">Reservar ahora</span>
        </a>
      </div>
    </div>
  );
};

export default Modal;