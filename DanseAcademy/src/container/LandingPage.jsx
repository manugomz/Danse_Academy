import React, { forwardRef } from "react";

import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

const LandingPage = forwardRef(() => {
  const styles = {

    button: `bg-yellow-dark z-10
            rounded-2xl px-5 py-2 text-lg
            text-zinc-800
            drop-shadow-lg
            transition-all ease-in
            md:px-6 md:py-4 md:text-2xl
            hover:scale-110 hover:bg-yellow-darker hover:text-slate-100`,

    gradient: `absolute inset-0 
              bg-gradient-to-b from-transparent to-gray-dark`,

    header: `max-w-[80vw] z-10 cursor-default
            text-5xl font-bold font-Permanent-Marker
            md:text-7xl`,

    landing: `relative flex flex-col
              bg-[url('../images/DanseGrupal3.jpg')] bg-contain 
              min-h-screen p-10
              md:bg-cover`,

    text: `max-w-[80vw] z-10  
          text-xl cursor-default
          lg:text-3xl md:max-w-[70vw]`,

    textContainer: `absolute inset-0 
                    flex flex-col items-center justify-center
                    text-center text-slate-100
                    gap-10 bg-black bg-opacity-50`,
  };

  const { landingRef } = useRefContext(RefContext);



  return (
    <section className={styles.landing} ref={landingRef} id="home">
      <div
        className={styles.textContainer}>
        <h3 className={styles.header}>
          ¡Vení y parchate a bailar!
        </h3>
        <p className={styles.text}>
          Dansé es un espacio donde la danza llega para todos, lleno de
          diversidad, amor por nuestras raices y donde la mejor manera de danzar
          es compartiendo con amigos.
        </p>

        <a
          href="https://wa.me/+573002424995?text=Hola%20%C2%A1Quiero%20reservar%20una%20clase%21"
          target="_blank"
          className={styles.button}>
          <button>Reserva ahora</button>
        </a>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
});

export default LandingPage;
