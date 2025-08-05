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
    <section className="relative bg-gray-50 py-28 overflow-hidden">
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

      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* Service Cards */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                `group relative overflow-hidden w-48 h-48 rounded-none shadow-lg flex flex-col items-center justify-center hover:translate-y-[-10px] transition-all duration-300 hover:shadow-xl ${
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
                  "mb-4",
                  "group-hover:scale-120 group-hover:transform group-hover:rotate-[360deg] group-hover:text-white group-hover:duration-300 group-hover:ease-in-out"
                )}
              >
                <Icon icon={service.icon} className="text-5xl" />
              </div>
              <h3
                className={cn(
                  "text-center relative  text-lg font-semibold px-5",
                  "group-hover:text-white"
                )}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center gap-3 mt-8">
          <p className="text-gray-600  text-lg font-light">
            Solutions numériques complètes conçues spécifiquement pour votre
            entreprise.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xs  font-semibold uppercase tracking-wide hover:bg-blue-700 transition-colors duration-300">
            Trouver Votre Solution
          </button>
        </div>
      </div>
      <img
        src="/img/image-rounder-right.png"
        alt="rounder"
        className=" absolute h-full right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 opacity-20   animate-spin [animation-duration:10s]"
        loading="lazy"
        decoding="async"
        width={200}
        height={200}
        style={{ width: "auto", maxHeight: "70%" }}
        // srcSet="/img/image-rounder-right.png 1x, /img/image-rounder-right@2x.png 2x"
      />
    </section>
  );
};

export default ServiceSection;
