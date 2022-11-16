import React from "react";
import hero from "../assets/images/hero.png";

const Homepage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-bluegreen to-black flex flex-col text-center md:flex-row p-20 md:justify-between">
      <div>
        <img className="mx-auto w-1/3 rounded md:w-full" src={hero} alt="" />
      </div>
      <div className="text-palegreen md:flex md:flex-col md:items-center md:justify-center md:px-20">
        <h1 className="text-3xl mb-10  ">AyudamePe</h1>
        <p className="mb-5">
          Necesitas ayuda?, bienvenido a ayudamePe donde puedes solicitar ayuda
          a los que tengan la calificacion y donde puedes ayudar a los que
          necesitan tu experiencia
        </p>
        <p className="mb-5">Si ya tienes una cuenta inicia sesion.</p>

        <button className="text-bluegreen bg-paleblue rounded-full px-4 py-2 mb-5">
          Sign up
        </button>

        <p className="mb-5">No tienes una cuenta? crea una ahora</p>

        <button className="text-bluegreen bg-paleblue rounded-full px-4 py-2">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Homepage;
