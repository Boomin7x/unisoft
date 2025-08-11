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
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          <div className="w-full lg:max-w-5xl lg:w-auto mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-1 flex flex-col items-start">
              <div className="flex items-center justify-center mb-3">
                <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Réalisations Récentes
                </span>
                <div className="w-6 sm:w-8 h-0.5 bg-blue-400" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Solutions numériques sur mesure{" "}
                <span className="text-primary">pour divers secteurs</span>
              </span>
            </div>
            <div className="flex-1 leading-6 sm:leading-7 lg:leading-8 font-light text-sm sm:text-base lg:text-lg">
              Univsoft accompagne la transformation digitale de ses clients à
              travers des solutions innovantes et adaptées : gestion
              d'entreprise, éducation, commerce, assurance. Nos projets récents
              illustrent notre capacité à simplifier la digitalisation et à
              générer de la valeur concrète.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mt-8 sm:mt-10 lg:mt-12">
          {newCardData?.map((items) => (
            <div className="aspect-[9/11] group flex p-4 sm:p-5 lg:p-6 items-end border relative overflow-hidden">
              <img
                alt="#"
                src={items?.image}
                className="absolute inset-0 object-cover size-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#000B1C]/20 to-[#000B1C]" />
              <div
                className={cn(
                  "absolute inset-0 bg-primary p-3 sm:p-4 flex justify-end -translate-y-full transition-all duration-300",
                  "group-hover:translate-y-0"
                )}
              >
                <Link
                  to="#"
                  className={cn(
                    "size-10 sm:size-12 items-center justify-center flex border rounded-full -translate-y-full transition-all delay-300 duration-300",
                    "group-hover:translate-y-0"
                  )}
                >
                  <Icon
                    icon="solar:arrow-right-line-duotone"
                    className="text-white text-xl sm:text-2xl"
                  />
                </Link>
              </div>
              <span className="relative text-white text-sm sm:text-base lg:text-heading-md leading-tight">
                {items?.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyCompletedWorkSection;
