import { Button } from "@/components/ui/button";
import React from "react";
import ServiceSection from "./Services/serviceSection";
import rounderImage from "/img/image-rounder-right.png";
import WhoAreWeSection from "./who-are-we";
import WhatWeOfferSection from "./what-we-offer";
import CTASection from "./CTA";

const HomePage = () => {
  return (
    <>
      <div className="flex relative flex-col min-h-[50vh] md:min-h-[80vh] border h-full w-full bg-green-200 overflow-hidden bg-cover bg-center bg-no-repeat">
        <img
          src="/img/bg-slide-1.webp"
          alt="bg-slide-1"
          className="absolute inset-0 w-full h-full object-cover brightness-20"
        />
        <div className="absolute inset-0 bg-blue-950/30" />

        {/* Floating Elements - Responsive */}
        <div className="absolute top-[10%] sm:top-[15%] md:top-1/5 left-[2%] sm:left-[3%] md:left-[2%] w-[8%] sm:w-[12%] md:w-[15%] aspect-square flex flex-col gap-2 sm:gap-3 md:gap-4">
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-0 w-full aspect-square rounded-full bg-primary/50 animate-bounce [animation-duration:4s]" />
            <div className="absolute -right-3 sm:-right-4 md:-right-6 top-1/4 w-3/4 aspect-square rounded-full bg-slate-950/90 animate-bounce [animation-duration:3s] z-10" />
          </div>
        </div>

        <div className="absolute bottom-[10%] sm:bottom-[15%] md:bottom-1/5 right-0 mr-[2%] sm:mr-[3%] md:mr-[2%] w-[6%] sm:w-[8%] md:w-[10%] aspect-square bg-primary/30 animate-pulse [animation-duration:5s] rounded-full flex flex-col gap-2 sm:gap-3 md:gap-4" />

        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex-1 flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative flex-col items-center justify-center w-[70%] max-w-6xl">
            {/* Responsive border elements */}
            <div className="absolute hidden md:inline-block top-0 left-0 w-0.5 h-1/3 sm:h-1/2 bg-white opacity-80" />
            <div className="absolute hidden md:inline-block top-0 left-0 w-full h-0.5 md:bg-transparent opacity-80">
              <div className="hidden relative w-full h-full md:flex">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-full first:bg-white last:bg-white"
                  ></div>
                ))}
              </div>
            </div>
            <div className="absolute hidden md:inline-block top-0 right-0 w-0.5 h-1/3 sm:h-1/2 bg-white opacity-80" />

            {/* Responsive subtitle */}
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2rem] sm:-translate-y-[3rem] md:-translate-y-[4rem] lg:-translate-y-1/2 text-white md:font-thin uppercase text-balance text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl font-bold tracking-wider">
              Digitalisation Simplifiée
            </h2>

            {/* Main heading with responsive typography and glow effect */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl relative text-balance text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-bold text-white leading-tight tracking-tight px-2 sm:px-4">
              <span className="absolute inset-0 text-indigo-900 w-full h-full scale-110 blur-2xl sm:blur-3xl animate-[pulse_4s_ease-in-out_infinite] ">
                La Digitalisation, Nous la Simplifions
              </span>
              <span className="relative z-10">
                La Digitalisation, Nous la Simplifions
              </span>
            </h1>

            {/* Responsive button with enhanced effects */}
            <Button className="mt-4 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-sm text-xs sm:text-sm md:text-base   font-medium scale-95 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 bg-primary uppercase hover:bg-primary/90">
              Découvrez Votre Potentiel Numérique
            </Button>
          </div>
        </section>
        <img
          src="/img/image-rounder-right.png"
          alt="rounder"
          className=" absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4  animate-spin [animation-duration:10s]"
          loading="lazy"
          decoding="async"
          width={200}
          height={200}
          style={{ maxWidth: "120%", height: "auto" }}
          // srcSet="/img/image-rounder-right.png 1x, /img/image-rounder-right@2x.png 2x"
        />
      </div>
      <ServiceSection />
      <WhoAreWeSection />
      <WhatWeOfferSection />
      <CTASection />
    </>
  );
};

export default HomePage;
