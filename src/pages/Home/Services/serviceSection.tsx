import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "Logiciels de Gestion",
      icon: "system-uicons:check-circle",
      isActive: true,
    },
    {
      id: 2,
      title: "Développement Web & Mobile",
      icon: "fluent:phone-32-light",
      isActive: false,
    },
    {
      id: 3,
      title: "Intégration de Systèmes",
      icon: "material-symbols-light:bolt-outline",
      isActive: false,
    },
    {
      id: 4,
      title: "Architecture d'Entreprise",
      icon: "ph:building-light",
      isActive: false,
    },
    {
      id: 5,
      title: "Solutions Data & IA",
      icon: "heroicons:chart-bar",
      isActive: false,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative curved lines */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M400 400C300 300 200 200 100 100C50 50 0 0 0 0"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M350 400C250 300 150 200 50 100C25 50 0 0 0 0"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div> */}

      <div className="container mx-auto px-3 xs:px-4 sm:px-5 lg:px-8 flex flex-col items-center justify-center">
        {/* Section Header */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 max-w-3xl">
          <span className="uppercase text-blue-600 font-semibold tracking-wide text-xs xs:text-sm mb-2 xs:mb-3 inline-block">
            Nos Services
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Solutions Digitales Complètes
          </h2>
          <p className="text-sm xs:text-base text-gray-600 leading-relaxed px-2">
            Des solutions innovantes adaptées à vos besoins spécifiques pour
            accélérer votre transformation numérique
          </p>
        </div>
        {/* Service Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-6 xs:mb-8 sm:mb-10 w-full max-w-6xl">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                `group relative overflow-hidden w-full aspect-square rounded-xl xs:rounded-lg sm:rounded-xl shadow-lg xs:shadow-xl border border-gray-100 flex flex-col items-center justify-center hover:translate-y-[-2px] xs:hover:translate-y-[-4px] sm:hover:translate-y-[-6px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 touch-manipulation active:scale-95 hover:scale-[1.02] xs:hover:scale-105 ${
                  service.isActive
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-blue-600/30"
                    : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border-t-4 border-blue-600 hover:border-blue-700"
                }`
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 transform transition-all translate-y-full opacity-95",
                  "group-hover:translate-y-0 group-hover:duration-500 group-hover:ease-out"
                )}
              />
              <div
                className={cn(
                  "mb-2 xs:mb-3 sm:mb-4 relative z-10 p-2 xs:p-3 rounded-full transition-all duration-500",
                  "group-hover:scale-110 xs:group-hover:scale-125 group-hover:transform group-hover:rotate-[360deg] group-hover:text-white group-hover:bg-white/10 group-hover:backdrop-blur-sm"
                )}
              >
                <Icon
                  icon={service.icon}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl drop-shadow-sm"
                />
              </div>
              <h3
                className={cn(
                  "text-center relative z-10 text-xs xs:text-sm sm:text-base font-bold px-2 xs:px-3 sm:px-4 leading-tight transition-all duration-300",
                  "group-hover:text-white group-hover:scale-105 group-hover:drop-shadow-lg"
                )}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col xs:flex-row items-center gap-4 xs:gap-5 sm:gap-6 mt-4 xs:mt-6 sm:mt-8 w-full max-w-5xl">
          <div className="flex-1 text-center xs:text-left">
            <p className="text-gray-700 text-sm xs:text-base sm:text-lg font-medium leading-relaxed mb-2">
              Solutions numériques complètes conçues spécifiquement pour votre
              entreprise
            </p>
            <p className="text-gray-600 text-xs xs:text-sm font-light leading-relaxed">
              Expertise technique et accompagnement personnalisé pour votre
              transformation digitale
            </p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-xl text-xs xs:text-sm font-bold uppercase tracking-wider hover:from-blue-700 hover:to-blue-800 transition-all duration-300 whitespace-nowrap touch-manipulation active:scale-95 hover:scale-[1.02] xs:hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-600/30 w-full xs:w-auto max-w-xs xs:max-w-none border border-blue-500">
            <span className="flex items-center justify-center gap-2">
              <span>Trouver Votre Solution</span>
              <svg
                className="w-3 h-3 xs:w-4 xs:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/* Mobile-optimized decorative elements */}
      <div className="absolute top-4 xs:top-6 sm:top-8 left-4 xs:left-6 sm:left-8 w-8 xs:w-12 sm:w-16 h-8 xs:h-12 sm:h-16 bg-blue-600/10 rounded-full animate-pulse [animation-duration:3s] pointer-events-none" />
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 right-4 xs:right-6 sm:right-8 w-6 xs:w-10 sm:w-14 h-6 xs:h-10 sm:h-14 bg-blue-600/5 rounded-full animate-pulse [animation-duration:4s] pointer-events-none" />
      <img
        src="/img/image-rounder-right.png"
        alt=""
        role="presentation"
        aria-hidden="true"
        className="absolute right-0 top-1/2 transform translate-x-1/4 xs:translate-x-1/3 sm:translate-x-1/2 -translate-y-1/2 opacity-5 xs:opacity-8 sm:opacity-12 md:opacity-15 lg:opacity-20 animate-spin [animation-duration:15s] w-10 xs:w-14 sm:w-18 md:w-24 lg:w-32 xl:w-40 pointer-events-none"
        loading="lazy"
        decoding="async"
        width={200}
        height={200}
        style={{ maxHeight: "60%" }}
      />
    </section>
  );
};

export default ServiceSection;
