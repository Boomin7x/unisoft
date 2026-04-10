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
    <div className="min-h-screen">
      {/* Hero Section - Mobile First Design */}
      <header
        id="hero"
        className="flex relative flex-col min-h-[100dvh] xs:min-h-[100dvh] sm:min-h-[95vh] md:min-h-[90vh] lg:min-h-[90vh] xl:min-h-[85vh] h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat safe-top"
        role="banner"
        aria-label="Section d'en-tête - Digitalisation Simplifiée"
      >
        {/* Background with mobile-optimized overlay */}
        <div className="absolute inset-0">
          <img
            src="/img/bg-slide-1.webp"
            alt="Arrière-plan illustratif pour la digitalisation"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.15] xs:brightness-[0.18] sm:brightness-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-950/25 to-blue-950/40 xs:bg-gradient-to-b xs:from-blue-950/35 xs:via-blue-950/20 xs:to-blue-950/35 sm:bg-blue-950/30" aria-hidden="true" />
          {/* Mobile-specific radial gradient for better text contrast */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-950/10 to-blue-950/30 xs:hidden" aria-hidden="true" />
        </div>

        {/* Mobile-Optimized Floating Elements */}
        <div
          className="absolute top-[6%] xs:top-[8%] sm:top-[12%] md:top-[15%] lg:top-1/5 left-[3%] xs:left-[4%] sm:left-[5%] md:left-[4%] w-[8%] xs:w-[10%] sm:w-[12%] md:w-[14%] lg:w-[15%] aspect-square pointer-events-none select-none opacity-40 xs:opacity-50 sm:opacity-70 md:opacity-90 lg:opacity-100"
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-0 w-full aspect-square rounded-full bg-gradient-to-br from-primary/40 to-primary/20 xs:from-primary/50 xs:to-primary/30 sm:from-primary/60 sm:to-primary/40 animate-bounce motion-reduce:animate-none [animation-duration:4s] shadow-lg xs:shadow-xl" />
            <div className="absolute -right-1 xs:-right-2 sm:-right-3 md:-right-4 lg:-right-6 top-1/4 w-3/5 xs:w-2/3 sm:w-3/4 aspect-square rounded-full bg-gradient-to-br from-slate-900/50 to-slate-950/80 xs:from-slate-900/60 xs:to-slate-950/90 animate-bounce motion-reduce:animate-none [animation-duration:3s] z-10 shadow-md xs:shadow-lg" />
          </div>
        </div>

        {/* Bottom floating element with mobile-first approach */}
        <div
          className="absolute bottom-[6%] xs:bottom-[8%] sm:bottom-[12%] md:bottom-[15%] lg:bottom-1/5 right-[3%] xs:right-[4%] sm:right-[5%] md:right-[4%] w-[6%] xs:w-[8%] sm:w-[10%] md:w-[12%] lg:w-[14%] aspect-square bg-gradient-to-br from-primary/20 to-primary/10 xs:from-primary/30 xs:to-primary/15 sm:from-primary/40 sm:to-primary/25 animate-pulse motion-reduce:animate-none [animation-duration:5s] rounded-full pointer-events-none select-none opacity-40 xs:opacity-50 sm:opacity-70 md:opacity-90 lg:opacity-100 shadow-md xs:shadow-lg"
          aria-hidden="true"
        />

        {/* Mobile-specific subtle accent elements */}
        <div
          className="absolute top-1/3 right-[8%] w-[3%] xs:w-[4%] h-[3%] xs:h-[4%] bg-primary/20 xs:bg-primary/30 rounded-full animate-pulse motion-reduce:animate-none [animation-duration:6s] pointer-events-none select-none opacity-30 xs:opacity-40 sm:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/3 left-[8%] w-[2%] xs:w-[3%] h-[2%] xs:h-[3%] bg-white/20 xs:bg-white/30 rounded-full animate-pulse motion-reduce:animate-none [animation-duration:7s] pointer-events-none select-none opacity-25 xs:opacity-35 sm:hidden"
          aria-hidden="true"
        />

        <section className="relative py-8 xs:py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex-1 flex items-center justify-center container mx-auto px-5 xs:px-6 sm:px-8 lg:px-10">
          <div className="flex gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-0 p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative flex-col items-center justify-center w-full sm:w-[95%] md:w-[90%] lg:w-[75%] max-w-6xl">
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

            {/* Mobile-First Responsive Subtitle */}
            <h2 className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1rem] xs:-translate-y-[1.2rem] sm:-translate-y-[1.8rem] md:-translate-y-[3.5rem] lg:-translate-y-[4.5rem] xl:-translate-y-1/2 text-white/95 xs:text-white font-medium xs:font-semibold md:font-medium lg:font-normal uppercase text-balance text-center max-w-[260px] xs:max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-wider px-3 xs:px-2 leading-tight">
              Digitalisation Simplifiée
            </h2>

            {/* Mobile-Optimized Main Heading with Enhanced Typography */}
            <h1 className="text-[clamp(1.5rem,8.5vw,2.4rem)] xs:text-[clamp(1.8rem,8vw,3rem)] sm:text-[clamp(2.2rem,6.5vw,3.4rem)] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl relative text-balance text-center max-w-[300px] xs:max-w-[360px] sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl font-bold text-white leading-[1.1] xs:leading-[1.15] sm:leading-tight tracking-[-0.02em] xs:tracking-[-0.01em] sm:tracking-tight px-4 xs:px-3 sm:px-4 mb-1 xs:mb-2">
              <span
                className="absolute inset-0 text-blue-600/80 w-full h-full scale-[1.02] xs:scale-105 sm:scale-110 blur-sm xs:blur-lg sm:blur-xl md:blur-2xl lg:blur-3xl animate-[pulse_4.5s_ease-in-out_infinite] motion-reduce:animate-none opacity-60 xs:opacity-70 sm:opacity-80"
                aria-hidden="true"
              >
                La Digitalisation, Nous la Simplifions
              </span>
              <span className="relative z-10 drop-shadow-lg xs:drop-shadow-xl">
                La Digitalisation, Nous la Simplifions
              </span>
            </h1>

            {/* Mobile-Specific Subtitle/Description */}
            <p className="text-sm xs:text-base sm:hidden text-white/90 text-center max-w-[280px] xs:max-w-[320px] leading-relaxed font-light px-4 mb-2">
              Solutions innovantes pour accélérer votre transformation numérique
            </p>

            {/* Mobile-Optimized CTA Button with Enhanced Touch Experience */}
            <Button
              asChild
              className="mt-7 xs:mt-6 sm:mt-8 md:mt-9 lg:mt-10 xl:mt-12 w-full max-w-[300px] xs:max-w-[340px] sm:w-auto sm:max-w-none px-7 xs:px-6 sm:px-8 md:px-10 py-[18px] xs:py-5 sm:py-5 md:py-6 rounded-xl xs:rounded-lg sm:rounded-md text-sm xs:text-base sm:text-base font-semibold xs:font-medium sm:font-medium active:scale-[0.97] xs:active:scale-95 sm:scale-95 hover:scale-[1.02] xs:hover:scale-[1.01] sm:hover:scale-105 transition-all duration-300 ease-out shadow-2xl xs:shadow-xl sm:shadow-lg hover:shadow-2xl hover:shadow-primary/30 xs:hover:shadow-primary/25 bg-primary uppercase hover:bg-primary/95 active:bg-primary/85 touch-manipulation backdrop-blur-sm border border-primary/20 text-white font-medium tracking-wide"
            >
              <a
                href="#expertise"
                aria-label="Découvrir nos services d'expertise numérique - Aller à la section expertise"
                className="flex items-center justify-center gap-2 xs:gap-3"
              >
                <span>Découvrez Nos Services</span>
                <svg
                  className="w-4 h-4 xs:w-5 xs:h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>

            {/* Mobile-Specific Scroll Indicator */}
            <div className="absolute bottom-8 xs:bottom-10 sm:hidden left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce motion-reduce:animate-none">
              <span className="text-white/80 text-xs font-medium tracking-wider uppercase">Découvrir</span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse mt-2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile-Optimized Decorative Element */}
        <img
          src="/img/image-rounder-right.png"
          alt=""
          role="presentation"
          aria-hidden="true"
          className="absolute bottom-2 xs:bottom-4 sm:bottom-0 left-0 transform -translate-x-1/2 xs:-translate-x-1/3 sm:-translate-x-1/4 translate-y-1/3 xs:translate-y-1/4 animate-spin motion-reduce:animate-none [animation-duration:12s] w-12 xs:w-16 sm:w-20 md:w-28 lg:w-36 opacity-20 xs:opacity-30 sm:opacity-40 md:opacity-60 lg:opacity-100 pointer-events-none"
          loading="lazy"
          decoding="async"
          width={200}
          height={200}
          style={{ maxHeight: "80%" }}
        />
      </header>
      <main className="flex flex-col" role="main">
        <section
          id="expertise"
          aria-label="Notre expertise"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <ServiceSection />
        </section>
        <section
          id="about"
          aria-label="Qui sommes-nous"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <WhoAreWeSection />
        </section>
        <section
          id="offer"
          aria-label="Ce que nous offrons"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <WhatWeOfferSection />
        </section>
        <section
          id="cta"
          aria-label="Appel à l'action"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <CTASection />
        </section>
        <section
          id="work"
          aria-label="Réalisations récentes"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <RecentlyCompletedWorkSection />
        </section>
        <section
          id="stats"
          aria-label="Chiffres clés"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <StatsSection />
        </section>
        <section
          id="mission"
          aria-label="Notre mission"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <OurMissionSection />
        </section>
        <section
          id="team"
          aria-label="Notre équipe"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <OurTeamSection />
        </section>
        <section
          id="contact"
          aria-label="Nous contacter"
          className="scroll-mt-12 xs:scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 xl:scroll-mt-32"
        >
          <ContactUsSection />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
