import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const RecentlyCompletedWorkSection = () => {
  const newCardData = [
    {
      title: "Shine - Institut de Beauté & Spa",
      image: "/img/bg-slide-1.webp",
    },
    {
      title: "Kampux - Établissements Scolaires",
      image: "/img/bg-slide-1.webp",
    },
    {
      title: "Market - Ventes & Stocks",
      image: "/img/bg-slide-1.webp",
    },
    {
      title: "Kourtis - Intermédiaires d'Assurance",
      image: "/img/bg-slide-1.webp",
    },
  ];
  return (
    <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            <div className="flex-1 flex flex-col items-start text-center lg:text-left">
              <div className="flex items-center mb-3 xs:mb-4 sm:mb-5">
                <span className="text-blue-400 text-xs xs:text-sm font-semibold uppercase tracking-wider">
                  Réalisations Récentes
                </span>
                <div className="w-6 xs:w-8 h-0.5 bg-blue-400 ml-2 xs:ml-3" />
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-display-md font-bold leading-tight">
                Solutions numériques sur mesure pour divers secteurs
              </h2>
            </div>
            <div className="flex-1 text-sm xs:text-base leading-6 xs:leading-7 sm:leading-8 font-light text-gray-600 text-center lg:text-left">
              Univsoft accompagne la transformation digitale de ses clients à
              travers des solutions innovantes et adaptées : gestion
              d'entreprise, éducation, commerce, assurance. Nos projets récents
              illustrent notre capacité à simplifier la digitalisation et à
              générer de la valeur concrète.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 xl:gap-10 mt-8 xs:mt-10 sm:mt-12">
          {newCardData?.map((items, index) => (
            <div key={index} className="aspect-[9/11] group flex p-4 xs:p-5 sm:p-6 items-end border border-gray-200 hover:border-blue-400 relative overflow-hidden rounded-sm transition-all duration-300 touch-manipulation">
              <img
                alt={items?.title || "Project image"}
                src={items?.image}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#000B1C]/20 to-[#000B1C]/80" />
              <div
                className={cn(
                  "absolute inset-0 bg-primary p-3 xs:p-4 flex justify-end -translate-y-full transition-all duration-300",
                  "group-hover:translate-y-0"
                )}
              >
                <Link
                  to="#"
                  className={cn(
                    "w-10 h-10 xs:w-12 xs:h-12 items-center justify-center flex border border-white/50 rounded-full -translate-y-full transition-all delay-300 duration-300 hover:bg-white/10 active:scale-95 touch-manipulation",
                    "group-hover:translate-y-0"
                  )}
                >
                  <Icon
                    icon="solar:arrow-right-line-duotone"
                    className="text-white text-lg xs:text-xl sm:text-2xl"
                  />
                </Link>
              </div>
              <h3 className="relative text-white text-base xs:text-lg sm:text-xl md:text-heading-md font-semibold leading-tight">
                {items?.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyCompletedWorkSection;
