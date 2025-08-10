"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;

  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, } = data;

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      {/* Contenedor Normal */}
      <div key={id} className="p-4 border border-teal-50 rounded-xl">
        <h3 className="mb-4 text-xl">{title}</h3>

        <Image
          src={image}
          alt="Image"
          width={600}
          height={600}
          onClick={handleToggleFullScreen}
          className="cursor-pointer w-full md:w-[200px] rounded-2xl h-auto transition-all"
        />

        <div className="flex gap-5 mt-5">

        </div>
      </div>

      {/* Contenedor Pantalla Completa */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={handleToggleFullScreen}
        >
          {/* Botón X para salir */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition"
            onClick={handleToggleFullScreen}
          >
            ✕
          </button>
          <div className="p-4 bg-white/10 rounded-xl flex items-center justify-center w-[90vw] h-[90vh] max-w-[900px] max-h-[900px]">
            <h3 className="absolute top-4 left-4 text-xl text-white">{title}</h3>
            <Image
              src={image}
              alt="Fullscreen Image"
              width={1000}
              height={1000}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioBox;
