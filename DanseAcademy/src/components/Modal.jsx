import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ onClose,evento }) => {
  return (
    <div
      className="fixed left-0 top-0 
                    w-full h-full z-10
                    flex items-center justify-center 
                    bg-[rgba(0,0,0,0.5)]"
        onClick={() => onClose()}
    >
      <div className="relative bg-white p-2 flex flex-col rounded-md">
        <IoClose
          className="absolute text-white top-4 right-4 cursor-pointer text-2xl"
          onClick={() => onClose()}
        />
        <img
          className="h-[85vh]"
          src={evento.img}
          alt={evento.description}
        />
        <button
          className="bg-yellow-dark font-bold rounded-md w-1/3 self-center py-2 m-2"
          onClick={() => onClose()}
        >
          Reservar ahora
        </button>
      </div>
    </div>
  );
};

export default Modal;
