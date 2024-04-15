import React, { forwardRef } from "react";

import { EmbedVideo } from "../components/EmbedVideo";

import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

const Classes = forwardRef((props, ref) => {

  const styles={
    classesSection:`relative flex flex-col justify-center 
            bg-yellow-dark px-5 
            cursor-default
            sm:px-0`,

    Title:`text-center text-4xl text-gray-dark font-bold 
          pt-16 pb-16 mx-2
          md:text-6xl`
  };

  const {classesRef} =useRefContext(RefContext);

  return (
    <section className={styles.classesSection}  id="clases">
      <h2
      ref={classesRef}
        className={styles.Title}>
        Clases
      </h2>
      <EmbedVideo />

    </section>
  );
});

export default Classes;
