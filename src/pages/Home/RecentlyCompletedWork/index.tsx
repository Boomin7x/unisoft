import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
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
    <section className="relative  py-28 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center ">
          <div className="w-4xl mx-auto  flex items-center gap-6">
            <div className="flex-1 flex flex-col items-start">
              <div className="flex items-center justify-center mb-3">
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                  Réalisations Récentes
                </span>
                <div className="w-8 h-0.5 bg-blue-400" />
              </div>
              <span className="text-display-md">
                Solutions numériques sur mesure pour divers secteurs
              </span>
            </div>
            <div className="flex-1 leading-8 font-light">
              Univsoft accompagne la transformation digitale de ses clients à
              travers des solutions innovantes et adaptées : gestion
              d'entreprise, éducation, commerce, assurance. Nos projets récents
              illustrent notre capacité à simplifier la digitalisation et à
              générer de la valeur concrète.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 mt-12">
          {newCardData?.map((items) => (
            <div className="aspect-[9/11] group flex p-6 items-end border relative overflow-hidden ">
              <img
                alt="#"
                src={items?.image}
                className="absolute inset-0 object-cover size-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#000B1C]/20  to-[#000B1C] " />
              <div
                className={cn(
                  "absolute inset-0 bg-primary p-4 flex justify-end -translate-y-full transition-all duration-300 ",
                  "group-hover:translate-y-0"
                )}
              >
                <Link
                  to="#"
                  className={cn(
                    "size-12 items-center justify-center flex border rounded-full -translate-y-full transition-all delay-300 duration-300",
                    "group-hover:translate-y-0"
                  )}
                >
                  <Icon
                    icon="solar:arrow-right-line-duotone"
                    className="text-white text-2xl"
                  />
                </Link>
              </div>
              <span className="relative text-white text-heading-md">
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
