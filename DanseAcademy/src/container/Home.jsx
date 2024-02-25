import { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [evento, setEvento] = useState({});

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const handleOpenModal = (evento) =>{
    setModalOpen(true);
    setEvento(evento)
  }

  const clases = {
    Champeta: "enlace_foto",
    Salsa: "enlace_foto",
    Bachata: "enlace_foto",
    Afrofusion: "enlace_foto",
    Afrocolombiano: "enlace_foto",
    Dancehall: "enlace_foto",
    Reggaeton: "enlace_foto",
    Heels: "enlace_foto",
  };

  const eventos = [
    {
      img: "../public/images/eventos/afro_1.jpeg",
      description: "Afrocolombian fusion",
    },
    { img: "../public/images/eventos/heels_1.jpeg", description: "Heels" },
    {
      img: "../public/images/eventos/workshop_1.jpeg",
      description: "Taller técnico-comercial dance",
    },
  ];

  return (
    <main className=" bg-gradient-to-b
           from-cyan-light from-1% 
           via-cyan-dark via-20% 
           to-yellow-dark min-h-[65vh]">
      <div>
        <h3 className=" p-5 pb-0  font-bold text-[2rem] text-right">
          ¡Vení y parchate a bailar!
        </h3>
        <p className="pr-5 text-white text-right">Dansé es tu casa</p>
      </div>
      <section>
        <h2 className="font-bold text-4xl m-6 ml-10">Eventos</h2>
        {modalOpen && (
          <Modal
            evento={evento}
            onClose={()=>{setModalOpen(false)}}
            onSubmit={handleButtonClick}
            /* ADD redirect */
          />
        )}

        <div className="flex justify-around pb-6">

        {eventos.map((event) => (
                <img
                  key={event.description}
                  className="max-h-[50vh] cursor-pointer rounded-sm
                  transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={event.img}
                  alt={event.description}
                  onClick={() => handleOpenModal(event)}
                />
        ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
