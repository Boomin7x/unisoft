const ContactUsSection = () => {
  return (
    <section className="w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[800px] flex relative">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-3">
        <img
          alt=""
          src="/img/bg-slide-1.webp"
          className="size-full object-cover hidden lg:block"
        />
        <img
          alt=""
          src="/img/bg-image-ct.webp"
          className="col-span-1 lg:col-span-2 size-full object-cover"
        />
      </div>

      <div className="relative z-10 flex w-full">
        <div className="flex flex-col lg:flex-row container mx-auto w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="flex w-full lg:w-1/2 items-center justify-center order-2 lg:order-1  sm:p-6 lg:p-8">
            <div className="w-full max-w-lg bg-[#377dff] bg-opacity-95 md:rounded-sm shadow-xl p-6 sm:p-8">
              <form className="w-full flex flex-col gap-4 sm:gap-6">
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-center">
                  Prêt à Transformer Votre Entreprise?
                </h2>
                <p className="text-white text-sm sm:text-base mb-3 sm:mb-4 text-center">
                  Discutons de la façon dont nous pouvons accélérer votre
                  transformation numérique. Découvrez comment nos solutions
                  innovantes peuvent propulser votre entreprise vers l'avant.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium text-sm sm:text-base"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium text-sm sm:text-base"
                />
                <textarea
                  placeholder="Write your Message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium min-h-[80px] sm:min-h-[100px] text-sm sm:text-base resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 bg-black text-white font-bold rounded mt-2 tracking-widest hover:bg-gray-900 transition text-sm sm:text-base"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>

          <div className="flex w-full lg:w-1/2 flex-col justify-center px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 order-1 lg:order-2 bg-white bg-opacity-90 lg:bg-transparent">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <span className="uppercase text-[#377dff] font-semibold tracking-wide text-sm sm:text-base mb-2 inline-block">
                Contact
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Contactez-nous et discutons de votre projet numérique
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Univsoft, votre partenaire stratégique pour une transformation
                numérique réussie. Contactez-nous pour bénéficier d'un
                accompagnement sur mesure et découvrir comment nous pouvons
                accélérer la croissance de votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-white rounded shadow border border-gray-200">
                  <span className="bg-[#377dff] text-white rounded-full p-1.5 sm:p-2 mr-2">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <circle cx="10" cy="10" r="10" fill="white" />
                      <path
                        d="M7 10.5l2 2 4-4"
                        stroke="#377dff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    +237-696-458-382
                  </span>
                </span>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="text-sm sm:text-base text-gray-700">
                    contact@univ-soft.com
                  </span>
                  <span className="text-sm sm:text-base text-gray-700">
                    www.univ-soft.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar1"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white -ml-2 first:ml-0"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar2"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white -ml-2"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="avatar3"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white -ml-2"
                />
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#377dff] text-white flex items-center justify-center font-bold text-sm sm:text-lg -ml-2">
                  +12
                </span>
                <span className="ml-2 sm:ml-4 text-gray-700 text-sm sm:text-base">
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
