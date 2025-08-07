const ContactUsSection = () => {
  return (
    <section className="w-full min-h-[600px] flex  relative">
      <div className="grid grid-cols-3 ">
        <img
          alt=""
          src="/img/bg-slide-1.webp"
          className=" size-full object-cover"
        />
        <img
          alt=""
          src="/img/bg-image-ct.webp"
          className="col-span-2 size-full object-cover"
        />
      </div>
      <div className="flex absolute inset-0 size-full">
        <div className="flex container mx-auto ">
          {/* Left: Blue card with form */}
          <div className="relative flex w-full max-w-[50%] min-h-[400px] items-center justify-center">
            <div className="absolute inset-0 lg:inset-14  bg-[#377dff] bg-opacity-95 rounded-sm m-8 z-10 flex flex-col justify-center items-center shadow-xl">
              <form className="w-full max-w-lg p-3 flex flex-col gap-6 z-20">
                <h2 className="text-white text-3xl font-bold mb-2">
                  Prêt à Transformer Votre Entreprise ?
                </h2>
                <p className="text-white text-base mb-4">
                  Discutons de la façon dont nous pouvons accélérer votre
                  transformation numérique. Découvrez comment nos solutions
                  innovantes peuvent propulser votre entreprise vers l'avant.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                />
                <textarea
                  placeholder="Write your Message"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-medium min-h-[100px]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white font-bold rounded mt-2 tracking-widest hover:bg-gray-900 transition"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-center px-10 py-12 ">
            <div className="max-w-2xl mx-auto">
              <span className="uppercase text-[#377dff] font-semibold tracking-wide text-base mb-2 inline-block">
                Contact
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Contactez-nous et discutons de votre projet numérique
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Univsoft, votre partenaire stratégique pour une transformation
                numérique réussie. Contactez-nous pour bénéficier d'un
                accompagnement sur mesure et découvrir comment nous pouvons
                accélérer la croissance de votre entreprise.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white rounded shadow border border-gray-200">
                  <span className="bg-[#377dff] text-white rounded-full p-2 mr-2">
                    <svg width="20" height="20" fill="none">
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
                  <span className="font-bold text-gray-900">
                    +237-696-458-382
                  </span>
                </span>
                <span className="ml-2 text-gray-700">
                  contact@univ-soft.com
                </span>
                <span className="ml-2 text-gray-700">www.univ-soft.com</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar1"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar2"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="avatar3"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                />
                <span className="w-10 h-10 rounded-full bg-[#377dff] text-white flex items-center justify-center font-bold text-lg -ml-2">
                  +12
                </span>
                <span className="ml-4 text-gray-700">
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
