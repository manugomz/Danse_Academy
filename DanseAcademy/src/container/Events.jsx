import React, { forwardRef } from "react";
import { useState } from "react";

import Modal from "../components/Modal";

const Events = forwardRef((props, ref) => {
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
    <section className=" relative bg-gray-dark" ref={ref}>
      <h2
        className="mb-10 px-3 text-center text-4xl
            font-bold text-yellow-dark md:mb-32 md:pt-16
            md:text-6xl">
        Próximos ventos
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
      <div className="flex flex-col items-center justify-center gap-10 pb-56 md:flex-row">
        {eventos.map(event => (
          <img
            key={event.description}
            className="z-10 h-[90vw] max-w-max transform
                  cursor-pointer
                  rounded-md
                  transition-transform duration-300 ease-in-out hover:scale-105 md:max-h-[45vh]"
            src={event.img}
            alt={event.description}
            onClick={() => handleOpenModal(event)}
          />
        ))}
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="h-[80vh] bg-gradient-to-b from-transparent via-transparent via-70% to-yellow-dark"></div>
      </div>
    </section>
  );
});

export default Events;
