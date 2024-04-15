import React, { forwardRef } from "react";
import { useState } from "react";

import Modal from "../components/Modal";

import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

const Events = forwardRef(() => {
  const styles = {

    poster:`z-10 cursor-pointer
            max-h-[50vh] rounded-md mb-5
            t transform ransition-transform duration-300 ease-in-out hover:scale-105
            sm:mb-10
            2xl:max-h-[60vh]`,

    postersContainer:`flex flex-col items-center justify-around 
                      px-5 pb-24
                      sm:flex-row sm:flex-wrap 
                      md:pb-48
                      xl:justify-center xl:gap-5
                      2xl:flex-row`,

    section:`bg-gray-dark`,


    title: `mb-10 px-3 cursor-default
            text-center text-4xl font-bold text-yellow-dark
            md:mb-24 md:pt-16 md:text-6xl
            2xl:mb-32 2xl:pt-24`,
  };

  const eventos = [
    {
      img: "../images/eventos/afro_1.jpeg",
      description: "Afrocolombian fusión"
    },
    { img: "../images/eventos/heels_1.jpeg", description: "Heels Workshop" },
    {
      img: "../images/eventos/workshop_1.jpeg",
      description: "Taller técnico-comercial dance"
    }
  ];

  const { eventsRef } = useRefContext(RefContext);

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
    <section className={styles.section} ref={eventsRef} id="eventos">
      <h2
        className={styles.title}>
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
      <div
        className={styles.postersContainer}>
        {eventos.map(event => (
          <img
            tabIndex={0}
            role="button"
            aria-label="Poster de evento"
            key={event.description}
            className={styles.poster}
            src={event.img}
            alt={event.description}
            onClick={() => handleOpenModal(event)}
          />
        ))}
      </div>
      {/*Gradient*/}
      {/* <div className="absolute bottom-0 w-full">
        <div className="h-[80vh] bg-gradient-to-b from-transparent via-transparent via-70% to-yellow-dark"></div>
      </div> */}
    </section>
  );
});

export default Events;
