import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({
    maxWidth: 768,
  });

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Responsive decorative image */}
      <img
        src="/img/image-rounder-right.png"
        alt="rounder"
        className={cn(
          "absolute h-full max-h-[70%] right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 opacity-20 animate-spin [animation-duration:10s]  lg:block",
          isMobile &&
            "size-[18rem] aspect-square right-0 top-1/3 transform   translate-y-0 translate-x-1/2"
        )}
        loading="lazy"
        decoding="async"
        width={200}
        height={200}
        // style={{ width: "auto", maxHeight: "70%" }}
        // srcSet="/img/image-rounder-right.png 1x, /img/image-rounder-right@2x.png 2x"
      />
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col relative items-center justify-center">
        <div className=" md:hidden mb-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 text-center sm:text-left">
          <p className="text-gray-600 text-base sm:text-lg font-light max-w-2xl">
            Solutions numériques complètes conçues spécifiquement pour votre
            entreprise.
          </p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
            Trouver Votre Solution
          </button>
        </div>
        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 w-full ">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                `group relative overflow-hidden w-full aspect-square rounded-none shadow-lg flex flex-col items-center justify-center hover:translate-y-[-10px] transition-all duration-300 hover:shadow-xl ${
                  service.isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border-t-4 border-blue-600"
                }`
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-blue-600 transform transition-all translate-y-full",
                  "group-hover:translate-y-0 group-hover:duration-300 group-hover:ease-in-out"
                )}
              />
              <div
                className={cn(
                  "mb-2 sm:mb-3 lg:mb-4",
                  "group-hover:scale-120 group-hover:transform group-hover:rotate-[360deg] group-hover:text-white group-hover:duration-300 group-hover:ease-in-out"
                )}
              >
                <Icon
                  icon={service.icon}
                  className="text-3xl sm:text-4xl lg:text-5xl"
                />
              </div>
              <h3
                className={cn(
                  "text-center relative text-sm sm:text-base lg:text-lg font-semibold px-2 sm:px-3 lg:px-5 leading-tight",
                  "group-hover:text-white"
                )}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className=" hidden md:flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 text-center sm:text-left">
          <p className="text-gray-600 text-base sm:text-lg font-light max-w-2xl">
            Solutions numériques complètes conçues spécifiquement pour votre
            entreprise.
          </p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
            Trouver Votre Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
