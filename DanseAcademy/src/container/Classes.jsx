import React, { forwardRef } from "react";

import { EmbedVideo } from "../components/EmbedVideo";
import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

const Classes = forwardRef((props, ref) => {

  const {classesRef} =useRefContext(RefContext);

  return (
    <section className="relative flex flex-col justify-center bg-yellow-dark cursor-default px-5 sm:px-0"  id="clases">
      <h2
      ref={classesRef}
        className=" 
            text-center text-4xl md:text-6xl font-bold pt-16 
            text-gray-dark pb-16 mx-2">
        Clases
      </h2>
      <EmbedVideo />

    </section>
  );
});

export default Classes;
