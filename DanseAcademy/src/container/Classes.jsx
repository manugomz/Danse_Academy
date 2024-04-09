import React from "react";
import { EmbedVideo } from "../components/EmbedVideo";

const Classes = () => {
  const classes = {
    Champeta: "enlace_foto",
    Salsa: "enlace_foto",
    Bachata: "enlace_foto",
    Afrofusion: "enlace_foto",
    Afrocolombiano: "enlace_foto",
    Dancehall: "enlace_foto",
    Reggaeton: "enlace_foto",
    Heels: "enlace_foto"
  };

  return (
    <section className="relative flex flex-col justify-center bg-yellow-dark">
      <h2
        className=" 
            text-center text-6xl font-bold
            text-gray-dark">
        Clases
      </h2>
      <EmbedVideo />
      <div className="absolute bottom-0 w-full">
        <div className="h-[80vh] bg-gradient-to-b from-transparent via-transparent via-70% to-gray-dark"></div>
      </div>
    </section>
  );
};

export default Classes;