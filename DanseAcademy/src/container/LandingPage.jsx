import React from "react";

const LandingPage = () => {
  return (
    <div
      className="relative flex h-[20vh] min-h-screen flex-col
                bg-opacity-45 bg-[url('../images/dance_group.png')] bg-cover 
                p-10 md:bg-fixed">
      <div
        className="absolute inset-0 flex flex-col items-center justify-center
                      gap-10 bg-black bg-opacity-50 text-center text-slate-100">
        <h3 className="text-[5rem] font-bold z-10 font-Permanent-Marker ">¡Vení y parchate a bailar!</h3>
        <p className="max-w-[70vw] text-3xl z-10">
          Dansé es un espacio donde la danza llega para todos, lleno de
          diversidad, amor por nuestras raices y donde la mejor manera de danzar
          es compartiendo con amigos.
        </p>

        <button
          className=" rounded-2xl
            bg-yellow-dark px-6 py-4 z-10
              text-2xl text-zinc-800
              drop-shadow-lg
              transition-all ease-in
              hover:scale-110 hover:bg-yellow-darker hover:text-slate-100">
          Reserva ahora
        </button>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-dark"></div>
    </div>
  );
};

export default LandingPage;
