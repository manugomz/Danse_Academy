import React, { forwardRef } from "react";

import { EmbedVideo } from "../components/EmbedVideo";

const Classes = forwardRef((props, ref) => {

  return (
    <section className="relative flex flex-col justify-center bg-yellow-dark" ref={ref}>
      <h2
        className=" 
            text-center text-6xl font-bold
            text-gray-dark">
        Clases
      </h2>
      <EmbedVideo />

    </section>
  );
});

export default Classes;
