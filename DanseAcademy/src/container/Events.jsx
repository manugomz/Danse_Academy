import React, { forwardRef } from "react";
import { useState } from "react";

import Modal from "../components/Modal";
import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

const Events = forwardRef(() => {

  const {eventsRef} =useRefContext(RefContext);

  const eventos = [
    {
      img: "../images/eventos/afro_1.jpeg",
      description: "Afrocolombian fusion"
    },
    { img: "../images/eventos/heels_1.jpeg", description: "Heels" },
    {
      img: "../images/eventos/workshop_1.jpeg",
      description: "Taller técnico-comercial dance"
    }
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const [evento, setEvento] = useState({});

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const handleOpenModal = evento => {
    setModalOpen(true);
    setEvento(evento);
  };

  return (
    <section className=" relative bg-gray-dark" ref={eventsRef} id='eventos'>
      <h2
        className="mb-10 px-3 text-center text-4xl
            font-bold text-yellow-dark 
            md:mb-24 md:pt-16 md:text-6xl
            2xl:mb-32 2xl:pt-24 cursor-default ">
        Próximos eventos
      </h2>
      {modalOpen && (
        <Modal
          evento={evento}
          onClose={() => {
            setModalOpen(false);
          }}
          onSubmit={handleButtonClick}
          /* ADD redirect */
        />
      )}
      <div className="flex flex-col items-center justify-center gap-10 pb-48 md:flex-row">
        {eventos.map(event => (
          <img
            key={event.description}
            className="z-10 h-[80vh] max-w-max transform
                  cursor-pointer
                  rounded-md
                  transition-transform duration-300 ease-in-out hover:scale-105 md:max-h-[60vh]"
            src={event.img}
            alt={event.description}
            onClick={() => handleOpenModal(event)}
          />
        ))}
      </div>
      {/*Gradient*/}
      <div className="absolute bottom-0 w-full">
        <div className="h-[80vh] bg-gradient-to-b from-transparent via-transparent via-70% to-yellow-dark"></div>
      </div>
    </section>
  );
});

export default Events;
