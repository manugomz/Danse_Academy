import React from "react";
import { IoClose } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";

const Modal = ({ onClose, evento }) => {
  return (
    <div
      className="fixed left-0 top-0 
                    z-40 flex h-full
                    w-full items-center justify-center 
                    bg-[rgba(0,0,0,0.7)]"
      onClick={() => onClose()}>
      <div className="relative mx-2 flex flex-col rounded-md p-2">
        <IoClose
          className="absolute right-4 top-4
                    cursor-pointer rounded-full
                    bg-yellow-dark text-2xl text-black  
                    hover:scale-110 hover:bg-yellow-darker hover:text-white"
          onClick={() => onClose()}
        />
        <img
          className="max-h-[80vh] rounded-lg"
          src={evento.img}
          alt={evento.description}
        />
        <button
          className="absolute bottom-2 left-2
                    m-2 flex w-10
                    items-center rounded-full 
                    bg-yellow-dark p-2 font-bold
                    transition-all ease-in
                    hover:w-[52%] hover:bg-yellow-darker hover:text-white"
          onClick={() => onClose()}>
          <div className="pl-[0.1rem]">
            <FaCalendarPlus className="size-5 text-xl" />
          </div>
          <span className="truncate text-clip pl-1 ">Reservar ahora</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
