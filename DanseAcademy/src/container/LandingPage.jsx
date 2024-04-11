import React, { forwardRef} from "react";

const LandingPage = forwardRef((props, ref) => {


  const styles={
    landing:`relative flex min-h-screen flex-col
    bg-[url('../images/DanseGrupal3.jpg')]
    p-10 bg-contain md:bg-cover`,

    textContainer:`absolute inset-0 flex flex-col items-center justify-center
    gap-10 bg-black bg-opacity-50 text-center text-slate-100`,

    header:`text-5xl max-w-[80vw] md:text-7xl font-bold z-10 font-Permanent-Marker`,

    text:`md:max-w-[70vw] max-w-[80vw] text-xl md:text-2xl z-10`,

    button:`rounded-2xl
    bg-yellow-dark z-10
      px-4 py-2 text-lg
      text-zinc-800
      drop-shadow-lg
      transition-all ease-in
      md:px-6 md:py-4 md:text-2xl
      hover:scale-110 hover:bg-yellow-darker hover:text-slate-100`,
      
    gradient:`absolute inset-0 bg-gradient-to-b from-transparent to-gray-dark`
  }


  return (
    <section
      className={styles.landing} ref={ref}>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center
                      gap-10 bg-black bg-opacity-50 text-center text-slate-100">
        <h3 className="text-5xl max-w-[80vw] md:text-7xl font-bold z-10 font-Permanent-Marker">¡Vení y parchate a bailar!</h3>
        <p className="md:max-w-[70vw] max-w-[80vw] text-xl md:text-3xl z-10">
          Dansé es un espacio donde la danza llega para todos, lleno de
          diversidad, amor por nuestras raices y donde la mejor manera de danzar
          es compartiendo con amigos.
        </p>

        <a
          href="https://wa.me/+573002424995?text=Hola%20quiero%20reservar%20una%20clase"
          target="_blank"
          className=" rounded-2xl
            bg-yellow-dark z-10
              px-4 py-2 text-lg
              text-zinc-800
              drop-shadow-lg
              transition-all ease-in
              md:px-6 md:py-4 md:text-2xl
              hover:scale-110 hover:bg-yellow-darker hover:text-slate-100"
              >
          Reserva ahora
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-dark"></div>
    </section>
  );
});

export default LandingPage;
