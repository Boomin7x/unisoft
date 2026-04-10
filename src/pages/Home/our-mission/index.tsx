const OurMissionSection = () => {
  return (
    <section className="w-full min-h-[400px] xs:min-h-[450px] sm:min-h-[500px] flex flex-col lg:flex-row bg-[url(/img/bg-whychoseus.webp)] bg-cover bg-no-repeat">
      {/* Left: Image and blue bar */}
      <div className="relative flex w-full lg:max-w-[50%] min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] order-2 lg:order-1">
        <img
          src="/img/bg-slide-1.webp"
          alt="Team meeting"
          className="object-cover w-full h-full min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]"
        />
        {/* Blue vertical bar with play button and vertical text */}
        <div className="absolute right-0 top-0 h-full w-16 xs:w-20 sm:w-24 lg:w-32 bg-[#377dff] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 xs:gap-6 sm:gap-8 h-full justify-center">
            <div className="flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg border-2 xs:border-3 sm:border-4 border-blue-100 touch-manipulation active:scale-95 hover:scale-105 transition-transform duration-300">
              <svg width="20" height="20" className="xs:w-8 xs:h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none">
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="#377dff"
                  fillOpacity="0.1"
                />
                <polygon points="16,13 28,20 16,27" fill="#377dff" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col items-center mt-4 lg:mt-8">
              <span
                className="text-white font-semibold text-sm lg:text-lg rotate-180 writing-vertical-ltr"
                style={{ writingMode: "vertical-lr", letterSpacing: "0.1em" }}
              >
                Professional IT Services you Can trust
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center px-4 xs:px-6 sm:px-8 lg:px-10 py-8 xs:py-10 sm:py-12 order-1 lg:order-2">
        <div className="max-w-2xl mx-auto">
          <span className="uppercase text-[#377dff] font-semibold tracking-wide text-sm xs:text-base mb-2 xs:mb-3 inline-block">
            Notre Mission
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Simplifier la digitalisation pour une croissance durable
          </h2>
          <p className="text-base xs:text-lg text-gray-600 mb-4 xs:mb-5 sm:mb-6 leading-relaxed">
            Nous simplifions la digitalisation pour permettre aux entreprises de
            bénéficier de solutions innovantes qui favorisent une croissance
            durable et un avantage concurrentiel.
          </p>
          <div className="flex items-start gap-2 xs:gap-3 mb-3 xs:mb-4">
            <span className="inline-block mt-1 flex-shrink-0">
              <svg width="20" height="20" className="xs:w-6 xs:h-6 sm:w-7 sm:h-7" fill="none">
                <circle cx="10" cy="10" r="10" className="xs:cx-3 xs:cy-3 xs:r-3 sm:cx-3.5 sm:cy-3.5 sm:r-3.5" fill="#e0e7ff" />
                <path
                  d="M10 6v6"
                  className="xs:d-M3_4.5v6 sm:d-M3.5_5.5v6"
                  stroke="#377dff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="14.5" r="1" className="xs:cx-3 xs:cy-2.5 xs:r-1 sm:cx-3.5 sm:cy-2.8 sm:r-1" fill="#377dff" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-gray-900 text-sm xs:text-base leading-tight">
                Des solutions numériques accessibles, personnalisées et
                efficaces pour chaque organisation.
              </span>
            </div>
          </div>
          <ul className="space-y-2 xs:space-y-3">
            <li className="flex items-center gap-2 text-sm xs:text-base text-gray-700">
              <span className="inline-block flex-shrink-0">
                <svg width="18" height="18" className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none">
                  <circle
                    cx="9"
                    cy="9"
                    r="9"
                    className="xs:cx-2.5 xs:cy-2.5 xs:r-2.5 sm:cx-3 sm:cy-3 sm:r-3"
                    fill="#377dff"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M6 9.5l2.5 2.5 4-4"
                    className="xs:d-M1.8_2.5l2.5_2.5_4-4 sm:d-M2_3l2.5_2.5_4-4"
                    stroke="#377dff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Croissance durable et avantage concurrentiel
            </li>
            <li className="flex items-center gap-2 text-sm xs:text-base text-gray-700">
              <span className="inline-block flex-shrink-0">
                <svg width="18" height="18" className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none">
                  <circle
                    cx="9"
                    cy="9"
                    r="9"
                    className="xs:cx-2.5 xs:cy-2.5 xs:r-2.5 sm:cx-3 sm:cy-3 sm:r-3"
                    fill="#377dff"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M6 9.5l2.5 2.5 4-4"
                    className="xs:d-M1.8_2.5l2.5_2.5_4-4 sm:d-M2_3l2.5_2.5_4-4"
                    stroke="#377dff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Accompagnement sur mesure et expertise technique
            </li>
            <li className="flex items-center gap-2 text-sm xs:text-base text-gray-700">
              <span className="inline-block flex-shrink-0">
                <svg width="18" height="18" className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none">
                  <circle
                    cx="9"
                    cy="9"
                    r="9"
                    className="xs:cx-2.5 xs:cy-2.5 xs:r-2.5 sm:cx-3 sm:cy-3 sm:r-3"
                    fill="#377dff"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M6 9.5l2.5 2.5 4-4"
                    className="xs:d-M1.8_2.5l2.5_2.5_4-4 sm:d-M2_3l2.5_2.5_4-4"
                    stroke="#377dff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Solutions innovantes et gestion rigoureuse des projets
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
