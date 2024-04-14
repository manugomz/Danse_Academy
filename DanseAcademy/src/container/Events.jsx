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
      description: "Afrocolombian fusión"
    },
    {
      img: "../images/eventos/salsa_fusion.jpg",
      description: "Salsa fusión"
    },
  
    { img: "../images/eventos/heels_1.jpeg", description: "Heels Workshop" },
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
        />
      )}
      <div className="flex items-center justify-around px-3 pb-48
        flex-col
        sm:flex-wrap sm:flex-row
        xl:justify-center xl:gap-5
        2xl:flex-row">
        {eventos.map(event => (
          <img
          tabIndex={0}
          role='button'
          aria-label="Poster de evento"
            key={event.description}
            className="z-10 transform 
                  max-h-[50vh] mb-2
                  cursor-pointer
                  rounded-md
                  transition-transform duration-300 ease-in-out hover:scale-105
                  sm:mb-10
                  2xl:max-h-[60vh]"
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
