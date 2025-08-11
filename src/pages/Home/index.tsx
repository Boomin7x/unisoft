import { Button } from "@/components/ui/button";
import ContactUsSection from "./contact-us";
import CTASection from "./CTA";
import OurMissionSection from "./our-mission";
import OurTeamSection from "./our-team";
import RecentlyCompletedWorkSection from "./RecentlyCompletedWork";
import ServiceSection from "./Services/serviceSection";
import StatsSection from "./stats";
import WhatWeOfferSection from "./what-we-offer";
import WhoAreWeSection from "./who-are-we";

const HomePage = () => {
  return (
    <>
      <div
        id="hero"
        className="flex relative flex-col min-h-[60vh] md:min-h-[80vh] border h-full w-full bg-green-200 overflow-hidden bg-cover bg-center bg-no-repeat"
        aria-label="Section d'en-tête"
      >
        <img
          src="/img/bg-slide-1.webp"
          alt="Arrière-plan illustratif pour la digitalisation"
          className="absolute inset-0 w-full h-full object-cover brightness-20"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-blue-950/30" aria-hidden="true" />

        {/* Floating Elements - Responsive */}
        <div
          className="hidden sm:flex absolute top-[10%] sm:top-[15%] md:top-1/5 left-[2%] sm:left-[3%] md:left-[2%] w-[8%] sm:w-[12%] md:w-[15%] aspect-square flex-col gap-2 sm:gap-3 md:gap-4 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-0 w-full aspect-square rounded-full bg-primary/50 animate-bounce motion-reduce:animate-none [animation-duration:4s]" />
            <div className="absolute -right-3 sm:-right-4 md:-right-6 top-1/4 w-3/4 aspect-square rounded-full bg-slate-950/90 animate-bounce motion-reduce:animate-none [animation-duration:3s] z-10" />
          </div>
        </div>

        <div
          className="hidden sm:flex absolute bottom-[10%] sm:bottom-[15%] md:bottom-1/5 right-0 mr-[2%] sm:mr-[3%] md:mr-[2%] w-[6%] sm:w-[8%] md:w-[10%] aspect-square bg-primary/30 animate-pulse motion-reduce:animate-none [animation-duration:5s] rounded-full flex-col gap-2 sm:gap-3 md:gap-4 pointer-events-none select-none"
          aria-hidden="true"
        />

        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex-1 flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-0 p-3 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative flex-col items-center justify-center w-full sm:w-[85%] md:w-[70%] max-w-6xl">
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
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1.5rem] sm:-translate-y-[3rem] md:-translate-y-[4rem] lg:-translate-y-1/2 text-white md:font-thin uppercase text-balance text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl font-bold tracking-wider">
              Digitalisation Simplifiée
            </h2>

            {/* Main heading with responsive typography and glow effect */}
            <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] sm:text-[clamp(2rem,5vw,4rem)] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl relative text-balance text-center max-w-[22rem] sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-bold text-white leading-snug sm:leading-tight tracking-tight px-2 sm:px-4">
              <span
                className="absolute inset-0 text-indigo-900 w-full h-full scale-110 blur-2xl sm:blur-3xl animate-[pulse_4s_ease-in-out_infinite] motion-reduce:animate-none"
                aria-hidden="true"
              >
                La Digitalisation, Nous la Simplifions
              </span>
              <span className="relative z-10">
                La Digitalisation, Nous la Simplifions
              </span>
            </h1>

            {/* Responsive button with enhanced effects */}
            <Button
              asChild
              className="mt-4 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-sm text-sm sm:text-base font-medium sm:scale-95 hover:scale-100 sm:hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 bg-primary uppercase hover:bg-primary/90"
            >
              <a
                href="#contact"
                aria-label="Découvrir votre potentiel numérique et nous contacter"
              >
                Découvrez Votre Potentiel Numérique
              </a>
            </Button>
          </div>
        </section>
        <img
          src="/img/image-rounder-right.png"
          alt=""
          role="presentation"
          aria-hidden="true"
          className="hidden sm:block absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4  animate-spin motion-reduce:animate-none [animation-duration:10s]"
          loading="lazy"
          decoding="async"
          width={200}
          height={200}
          style={{ maxWidth: "120%", height: "auto" }}
          // srcSet="/img/image-rounder-right.png 1x, /img/image-rounder-right@2x.png 2x"
        />
      </div>
      <section
        id="expertise"
        aria-label="Notre expertise"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <ServiceSection />
      </section>
      <section
        id="about"
        aria-label="Qui sommes-nous"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <WhoAreWeSection />
      </section>
      <section
        id="offer"
        aria-label="Ce que nous offrons"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <WhatWeOfferSection />
      </section>
      <section
        id="cta"
        aria-label="Appel à l'action"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <CTASection />
      </section>
      <section
        id="work"
        aria-label="Réalisations récentes"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <RecentlyCompletedWorkSection />
      </section>
      <section
        id="stats"
        aria-label="Chiffres clés"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <StatsSection />
      </section>
      <section
        id="mission"
        aria-label="Notre mission"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <OurMissionSection />
      </section>
      <section
        id="team"
        aria-label="Notre équipe"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <OurTeamSection />
      </section>
      <section
        id="contact"
        aria-label="Nous contacter"
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <ContactUsSection />
      </section>
    </>
  );
};

export default HomePage;
