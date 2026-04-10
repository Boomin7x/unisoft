import { Icon } from "@iconify/react";

const WhatWeOfferSection = () => {
  const services = [
    {
      id: 1,
      title: "Logiciels de Gestion",
      description:
        "Transformez vos opérations commerciales avec nos solutions de gestion complètes conçues pour divers secteurs d'activité.",
      icon: "material-symbols:target",
      iconBg: "bg-blue-500",
    },
    {
      id: 2,
      title: "Développement Web & Mobile",
      description:
        "Nous excellons dans le développement d'applications web et mobiles conçues pour transformer et optimiser la gestion de votre entreprise.",
      icon: "material-symbols:language",
      iconBg: "bg-green-500",
    },
    {
      id: 3,
      title: "Intégration de Systèmes",
      description:
        "Optimisez la gestion de vos systèmes grâce à notre expertise de premier plan en intégration et connectivité des systèmes.",
      icon: "material-symbols:lightbulb-outline",
      iconBg: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Solutions Data & IA",
      description:
        "Notre solution intègre l'expertise des données avec les avancées de l'Intelligence Artificielle pour transformer vos données en atouts stratégiques.",
      icon: "material-symbols:payments-outline",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <section className="relative bg-[#000B1C] py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background Decorative Elements */}

      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          {/* Subheading */}
          <div className="flex items-center justify-center space-x-2 xs:space-x-3 sm:space-x-4 mb-4 xs:mb-5 sm:mb-6">
            <div className="w-4 xs:w-6 sm:w-8 h-0.5 bg-primary"></div>
            <span className="text-primary text-xs xs:text-sm font-semibold uppercase tracking-wider">
              CE QUE NOUS OFFRONS
            </span>
            <div className="w-4 xs:w-6 sm:w-8 h-0.5 bg-primary"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Nous offrons des services premium
            <br className="hidden xs:block" />
            <span className="xs:block"> </span>
            <span className="text-primary">exclusivement pour vous.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative border border-white/20 hover:border-primary rounded-xs p-4 xs:p-5 sm:p-6 bg-[#000B1C] transition-colors duration-300 group overflow-hidden touch-manipulation"
            >
              <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <img
                  src="/img/shape-tm-4.png"
                  alt="bg-image-left-fcb"
                  className="absolute bottom-0 right-0 "
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative flex flex-col justify-center text-center">
                <div className="mb-3 xs:mb-4 flex w-full items-center justify-center">
                  <div
                    className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xs flex items-center justify-center transform group-hover:rotate-[360deg] transition-transform duration-500"
                  >
                    <Icon icon={service.icon} className="text-white text-2xl xs:text-3xl sm:text-4xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg xs:text-xl font-bold text-white mb-2 xs:mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm xs:text-sm sm:text-base leading-relaxed font-light mb-3 xs:mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Call to Action */}
                <button className="text-white hover:text-blue-300 font-medium text-sm transition-all duration-300 group-hover:translate-x-1 transform active:scale-95 hover:scale-105 touch-manipulation">
                  Lire Plus
                </button>
              </div>
              {/* Icon */}
            </div>
          ))}
        </div>
      </div>
      <img
        src="/img/bg-image-left-fcb.png"
        alt="bg-image-left-fcb"
        className="absolute bottom-0 left-0 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 opacity-30 xs:opacity-50 sm:opacity-70 md:opacity-100 pointer-events-none"
        loading="lazy"
        decoding="async"
        width={200}
        height={200}
        style={{ maxHeight: "100%" }}
        // srcSet="/img/image-rounder-right.png 1x, /img/image-rounder-right@2x.png 2x"
      />
      <img
        src="/img/image-rounder-right.png"
        alt="rounder"
        className="absolute right-0 top-1/2 transform translate-x-1/4 xs:translate-x-1/6 sm:-translate-x-1/6 -translate-y-1/2 opacity-20 xs:opacity-40 sm:opacity-60 md:opacity-80 animate-spin [animation-duration:10s] w-12 xs:w-16 sm:w-20 md:w-24 lg:w-32 pointer-events-none"
        loading="lazy"
        decoding="async"
        width={200}
        height={200}
        style={{ maxHeight: "50%" }}
        // srcSet="/img/image-rounder-right.png 1x, /img/image-rounder-right@2x.png 2x"
      />
    </section>
  );
};

export default WhatWeOfferSection;
