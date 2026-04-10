import { Icon } from "@iconify/react";

const WhoAreWeSection = () => {
  const values = [
    {
      id: 1,
      title: "Excellence",
      description:
        "Nos domaines d'intervention sont définis par une recherche perpétuelle de l'excellence et un engagement déterminé à créer des services et des solutions à valeur ajoutée élevée.",
      icon: "material-symbols:star-outline",
    },
    {
      id: 2,
      title: "Éthique",
      description:
        "Des standards éthiques rigoureux guident chaque interaction, garantissant transparence, honnêteté et responsabilité à chaque étape de la collaboration.",
      icon: "material-symbols:balance-outline",
    },
    {
      id: 3,
      title: "Engagement",
      description:
        "Nous honorons pleinement nos engagements envers nos clients en alliant écoute attentive et compréhension approfondie de leurs besoins.",
      icon: "material-symbols:handshake-outline",
    },
    {
      id: 4,
      title: "Travail en Équipe",
      description:
        "Chez Univsoft, nous privilégions une culture de collaboration où le travail en équipe est central.",
      icon: "material-symbols:group-outline",
    },
  ];

  return (
    <section className="relative bg-white py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Section - Visuals */}
          <div className="relative w-full h-64 xs:h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] order-2 lg:order-1">
            {/* Main Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              <div className="w-full aspect-[4/5] xs:aspect-[9/11] sm:aspect-[3/4] md:aspect-[9/11] bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm relative overflow-hidden">
                {/* Placeholder for main image - you can replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 bg-blue-600 rounded-full mx-auto mb-2 xs:mb-3 sm:mb-4 flex items-center justify-center">
                      <Icon
                        icon="material-symbols:person"
                        className="text-white text-xl xs:text-2xl sm:text-3xl"
                      />
                    </div>
                    <p className="text-gray-600 font-medium text-sm xs:text-base">
                      Image Principale
                    </p>
                  </div>
                </div>
                <img
                  alt="bg"
                  src="/img/bg-slide-1.webp"
                  className="absolute inset-0 h-full object-cover"
                />
              </div>
            </div>

            {/* Smaller Image */}
            <div className="absolute top-2 xs:top-4 sm:top-8 right-2 xs:right-4 sm:right-8 z-0 hidden xs:block">
              <div className="w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 h-24 xs:h-30 sm:h-36 md:h-42 lg:h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-sm relative overflow-hidden">
                {/* Placeholder for smaller image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 xs:w-10 sm:w-12 md:w-14 lg:w-16 h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 bg-blue-600 rounded-full mx-auto mb-1 xs:mb-2 flex items-center justify-center">
                      <Icon
                        icon="material-symbols:groups"
                        className="text-white text-sm xs:text-base sm:text-lg md:text-xl"
                      />
                    </div>
                    <p className="text-gray-600 text-xs xs:text-sm font-medium">Équipe</p>
                  </div>
                </div>
                <img
                  alt="bg"
                  src="/img/bg-slide-1.webp"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Blue Overlay Box */}
            <div className="absolute bottom-2 xs:bottom-4 sm:bottom-8 left-2 xs:left-4 sm:left-8 md:left-12 z-20 bg-blue-600 text-white p-3 xs:p-4 sm:p-5 md:p-6 rounded-sm shadow-lg">
              <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
                <div className="flex flex-col items-center">
                  <Icon
                    icon="material-symbols:engineering"
                    className="text-lg xs:text-xl sm:text-2xl mb-1"
                  />
                  <Icon
                    icon="material-symbols:trending-up"
                    className="text-lg xs:text-xl sm:text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl xs:text-2xl sm:text-3xl font-bold">30+</span>
                  <span className="text-xs xs:text-sm">Années</span>
                  <span className="text-xs xs:text-sm">d'expérience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Subheading */}
            <div className="flex items-center space-x-2 xs:space-x-3">
              <span className="text-blue-600 text-xs xs:text-sm font-semibold uppercase tracking-wider">
                QUI NOUS SOMMES
              </span>
              <div className="w-6 xs:w-8 h-0.5 bg-blue-600"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Construites sur des{" "}
              <span className="text-blue-600">Fondations Solides</span>
            </h2>

            {/* Description */}
            <p className="text-base xs:text-lg text-gray-600 leading-relaxed">
              Nous établissons les plus hauts standards pour tout ce que nous
              livrons. La confiance est le fondement des partenariats durables.
              Votre succès est notre engagement.
            </p>

            {/* Values List */}
            <div className="space-y-3 xs:space-y-4">
              {values.map((value) => (
                <div key={value.id} className="flex items-start space-x-3 xs:space-x-4">
                  <div className="flex-shrink-0 w-5 xs:w-6 h-5 xs:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <Icon
                      icon="material-symbols:check"
                      className="text-white text-xs xs:text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base xs:text-lg font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 xs:py-4 px-6 xs:px-8 rounded-lg transition-colors duration-300 uppercase tracking-wider text-sm xs:text-base touch-manipulation active:scale-95 hover:scale-105 w-full xs:w-auto">
              Découvrir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
