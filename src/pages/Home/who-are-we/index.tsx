import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Section - Visuals */}
          <div className="hidden md:inline relative size-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            {/* Main Image */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
              <div className="w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[28rem] aspect-[9/11] bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm relative overflow-hidden">
                {/* Placeholder for main image - you can replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center">
                      <Icon
                        icon="material-symbols:person"
                        className="text-white text-xl sm:text-2xl lg:text-3xl"
                      />
                    </div>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
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
            <div className="absolute top-1/4 right-0 z-0">
              <div className="w-48 h-36 sm:w-56 sm:h-40 lg:w-64 lg:h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-sm relative overflow-hidden">
                {/* Placeholder for smaller image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Icon
                        icon="material-symbols:groups"
                        className="text-white text-lg sm:text-xl"
                      />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm font-medium">
                      Équipe
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

            {/* Blue Overlay Box */}
            <div className="absolute bottom-1/4 left-4 sm:left-8 lg:left-12 z-20 bg-blue-600 text-white p-4 sm:p-5 lg:p-6 rounded-sm shadow-lg">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex flex-col items-center">
                  <Icon
                    icon="material-symbols:engineering"
                    className="text-xl sm:text-2xl mb-1"
                  />
                  <Icon
                    icon="material-symbols:trending-up"
                    className="text-xl sm:text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold">30+</span>
                  <span className="text-xs sm:text-sm">Années</span>
                  <span className="text-xs sm:text-sm">d'expérience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8">
            {/* Subheading */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                QUI NOUS SOMMES
              </span>
              <div className="w-6 sm:w-8 h-0.5 bg-blue-600"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Construites sur des{" "}
              <span className="text-blue-600">Fondations Solides</span>
            </h2>
            {isMobile ? (
              <div className="w-full aspect-square border relative">
                <img
                  alt="bg"
                  src="/img/bg-slide-1.webp"
                  className="absolute inset-0 h-full object-cover"
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20
                  bg-white/30 backdrop-blur-md border border-white/40
                  text-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-xl"
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(96,165,250,0.18) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="flex flex-col items-center">
                      <Icon
                        icon="material-symbols:engineering"
                        className="text-xl sm:text-2xl mb-1 text-text-white"
                      />
                      <Icon
                        icon="material-symbols:trending-up"
                        className="text-xl sm:text-2xl text-text-white"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow">
                        30+
                      </span>
                      <span className="text-xs sm:text-sm text-white/80">
                        Années
                      </span>
                      <span className="text-xs sm:text-sm text-white/80">
                        d'expérience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Nous établissons les plus hauts standards pour tout ce que nous
              livrons. La confiance est le fondement des partenariats durables.
              Votre succès est notre engagement.
            </p>

            {/* Values List */}
            <div className="space-y-3 sm:space-y-4">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <Icon
                      icon="material-symbols:check"
                      className="text-white text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 uppercase tracking-wider text-sm sm:text-base">
              Découvrir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
