import React, { forwardRef } from "react";

import { EmbedVideo } from "../components/EmbedVideo";
import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

const Classes = forwardRef((props, ref) => {

  const {classesRef} =useRefContext(RefContext);

  return (
    <section className="relative flex flex-col justify-center bg-yellow-dark cursor-default" ref={classesRef} id="clases">
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
