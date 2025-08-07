"use client";

import PyramidSkills from "@/app/components/pyramid-skills";
import TransitionPage from "@/app/components/transition-page";
import { CoverParticles } from "@/app/components/cover.particle";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />

      {/* Espacio amplio entre el header y PyramidSkills */}
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto mt-40">
        <PyramidSkills />
      </div>
    </>
  );
};

export default ServicesPage;
