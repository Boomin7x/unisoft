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
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Visuals */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="w-80 h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
                {/* Placeholder for main image - you can replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon
                        icon="material-symbols:person"
                        className="text-white text-3xl"
                      />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Image Principale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Image */}
            <div className="absolute top-8 right-0 z-0">
              <div className="w-64 h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg relative overflow-hidden">
                {/* Placeholder for smaller image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Icon
                        icon="material-symbols:groups"
                        className="text-white text-xl"
                      />
                    </div>
                    <p className="text-gray-600 text-sm font-medium">Équipe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue Overlay Box */}
            <div className="absolute bottom-8 left-4 z-20 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <Icon
                    icon="material-symbols:engineering"
                    className="text-2xl mb-1"
                  />
                  <Icon
                    icon="material-symbols:trending-up"
                    className="text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">30+</span>
                  <span className="text-sm">Années</span>
                  <span className="text-sm">d'expérience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-8">
            {/* Subheading */}
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                QUI NOUS SOMMES
              </span>
              <div className="w-8 h-0.5 bg-blue-600"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Construites sur des{" "}
              <span className="text-blue-600">Fondations Solides</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous établissons les plus hauts standards pour tout ce que nous
              livrons. La confiance est le fondement des partenariats durables.
              Votre succès est notre engagement.
            </p>

            {/* Values List */}
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <Icon
                      icon="material-symbols:check"
                      className="text-white text-sm"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 uppercase tracking-wider">
              Découvrir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
