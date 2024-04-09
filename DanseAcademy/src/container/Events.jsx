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
    <section className=" bg-gray-dark relative" ref={ref}>
      <h2
        className="px-3 mb-32
            pt-16 text-center text-6xl font-bold
            text-yellow-dark">
        Eventos
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
      <div className="flex justify-center gap-10 pb-56">
        {eventos.map(event => (
          <img
            key={event.description}
            className="max-h-[25vh] transform z-10
                  cursor-pointer
                  rounded-md
                  transition-transform duration-300 ease-in-out hover:scale-105 md:max-h-[45vh]"
            src={event.img}
            alt={event.description}
            onClick={() => handleOpenModal(event)}
          />
        ))}
      </div>
      <div class="absolute bottom-0 w-full">
    <div class="h-[30vh] bg-gradient-to-b from-transparent to-yellow-dark"></div>
  </div>
    </section>
  );
});

export default Events;
