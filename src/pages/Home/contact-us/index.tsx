const ContactUsSection = () => {
  return (
    <section className="w-full min-h-[600px] xs:min-h-[650px] sm:min-h-[700px] lg:min-h-[600px] relative">
      <div className="hidden lg:grid grid-cols-3 absolute inset-0">
        <img
          alt=""
          src="/img/bg-slide-1.webp"
          className="w-full h-full object-cover"
        />
        <img
          alt=""
          src="/img/bg-image-ct.webp"
          className="col-span-2 w-full h-full object-cover"
        />
      </div>
      <div className="lg:hidden absolute inset-0">
        <img
          alt=""
          src="/img/bg-slide-1.webp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-900/40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row min-h-[600px] xs:min-h-[650px] sm:min-h-[700px] lg:min-h-[600px]">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center py-8 xs:py-10 sm:py-12 lg:py-16 order-2 lg:order-1">
            <div className="w-full max-w-md xs:max-w-lg sm:max-w-xl lg:max-w-lg bg-[#377dff] bg-opacity-95 rounded-lg p-6 xs:p-7 sm:p-8 lg:p-10 shadow-2xl">
              <form className="w-full flex flex-col gap-4 xs:gap-5 sm:gap-6">
                <h2 className="text-white text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-3 leading-tight">
                  Prêt à Transformer Votre Entreprise ?
                </h2>
                <p className="text-white text-sm xs:text-base mb-4 xs:mb-5 leading-relaxed opacity-95">
                  Discutons de la façon dont nous pouvons accélérer votre
                  transformation numérique. Découvrez comment nos solutions
                  innovantes peuvent propulser votre entreprise vers l'avant.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full px-4 py-3 xs:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 font-medium text-sm xs:text-base touch-manipulation"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 xs:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 font-medium text-sm xs:text-base touch-manipulation"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full px-4 py-3 xs:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 font-medium text-sm xs:text-base touch-manipulation"
                />
                <textarea
                  placeholder="Write your Message"
                  className="w-full px-4 py-3 xs:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 font-medium min-h-[80px] xs:min-h-[100px] resize-none text-sm xs:text-base touch-manipulation"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 xs:py-4 bg-black text-white font-bold rounded-lg text-sm xs:text-base tracking-widest hover:bg-gray-900 active:scale-95 transition-all duration-300 touch-manipulation mt-2"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 xs:px-6 sm:px-8 lg:px-10 py-8 xs:py-10 sm:py-12 lg:py-16 order-1 lg:order-2">
            <div className="max-w-xl lg:max-w-2xl mx-auto text-center lg:text-left">
              <span className="uppercase text-[#377dff] font-semibold tracking-wide text-sm xs:text-base mb-2 xs:mb-3 inline-block">
                Contact
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 xs:mb-5 leading-tight text-white lg:text-gray-900">
                Contactez-nous et discutons de votre projet numérique
              </h2>
              <p className="text-base xs:text-lg text-gray-100 lg:text-gray-600 mb-6 xs:mb-7 leading-relaxed">
                Univsoft, votre partenaire stratégique pour une transformation
                numérique réussie. Contactez-nous pour bénéficier d'un
                accompagnement sur mesure et découvrir comment nous pouvons
                accélérer la croissance de votre entreprise.
              </p>
              <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-4 mb-6 xs:mb-7">
                <div className="inline-flex items-center px-3 xs:px-4 py-2 xs:py-3 bg-white/95 rounded-lg shadow-md border border-gray-200 w-full xs:w-auto justify-center xs:justify-start">
                  <span className="bg-[#377dff] text-white rounded-full p-1.5 xs:p-2 mr-2 xs:mr-3">
                    <svg width="16" height="16" className="xs:w-5 xs:h-5" fill="none">
                      <circle cx="8" cy="8" r="8" className="xs:cx-2.5 xs:cy-2.5 xs:r-2.5" fill="white" />
                      <path
                        d="M5 8.5l2 2 3-3"
                        className="xs:d-M1.8_2.5l2_2_3-3"
                        stroke="#377dff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-gray-900 text-sm xs:text-base">
                    +237-696-458-382
                  </span>
                </div>
                <div className="flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-3 text-center xs:text-left">
                  <span className="text-gray-200 lg:text-gray-700 text-sm xs:text-base font-medium">
                    contact@univ-soft.com
                  </span>
                  <span className="text-gray-200 lg:text-gray-700 text-sm xs:text-base font-medium">
                    www.univ-soft.com
                  </span>
                </div>
              </div>
              <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-4 mt-4 xs:mt-5">
                <div className="flex items-center justify-center xs:justify-start gap-1">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Client 1"
                    className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border-2 border-white shadow-md"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Client 2"
                    className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border-2 border-white -ml-2 shadow-md"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Client 3"
                    className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border-2 border-white -ml-2 shadow-md"
                  />
                  <span className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-[#377dff] text-white flex items-center justify-center font-bold text-xs xs:text-sm -ml-2 shadow-md">
                    +12
                  </span>
                </div>
                <span className="text-gray-200 lg:text-gray-700 text-sm xs:text-base font-medium text-center xs:text-left">
                  We collaborated with 150+ new start-up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
