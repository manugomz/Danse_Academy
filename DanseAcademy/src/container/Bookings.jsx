import React, {useState, forwardRef } from "react";

import { IoAlertCircleOutline } from "react-icons/io5";

const Bookings = forwardRef((props, ref) => {

  const [formData, setFormData] = useState({
    name: "",
    clase: "",
    phone: "",
    message: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

    return (
      <section className="bg-yellow-dark pt-10 pb-24" ref={ref}>
        <form className="mx-auto max-w-md rounded-lg bg-gray-dark p-6 text-yellow-dark" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl font-semibold">
          ¡Reserva tu clase ahora!
        </h2>
          <fieldset className="mb-4">
            <label
              className="mb-2 block text-sm font-bold"
              htmlFor="name">
              Nombre
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onInvalid={F => F.target.setCustomValidity('⚠️ Por favor ingresa tu nombre')}
              placeholder="Tu nombre aquí"
              required
            />
          </fieldset>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold"
              htmlFor="name">
              Clase
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              type="text"
              id="clase"
              name="clase"
              value={formData.clase}
              onChange={handleChange}
              placeholder="¿A qué clase quieres asistir?"
              onInvalid={F => F.target.setCustomValidity('⚠️ ¿A qué clase quieres asistir?')}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold"
              htmlFor="phone">
              Celular
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Tu número celular"
              onInvalid={F => F.target.setCustomValidity('⚠️ Por favor ingresa tu número celular')}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold"
              htmlFor="message">
              ¿Algo más?
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Si tienes algún comentario, déjalo aquí"
              rows="4"
              required></textarea>
          </div>
          
          <button
            className="rounded-xl
            bg-yellow-dark z-10
              px-4 py-2
              text-zinc-800
              drop-shadow-lg
              transition-all ease-in text-xl focus:ring-yellow-light focus:ring-2
              hover:scale-110 hover:bg-yellow-darker hover:text-slate-100"
            type="submit">
            Enviar
          </button>
        </form>
      </section>
    );
  }
);

export default Bookings;
