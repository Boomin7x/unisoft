const OurMissionSection = () => {
  return (
    <section className="w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col lg:flex-row bg-[url(/img/bg-whychoseus.webp)] bg-cover bg-no-repeat">
      {/* Left: Image and blue bar */}
      <div className="relative flex w-full lg:max-w-[50%] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        <img
          src="/img/bg-slide-1.webp"
          alt="Team meeting"
          className="object-cover w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
        />
        {/* Blue vertical bar with play button and vertical text */}
        <div className="absolute right-0 top-0 h-full w-20 sm:w-24 lg:w-32 bg-primary flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 h-full justify-center">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg border-2 sm:border-3 lg:border-4 border-blue-100">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              >
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
            <div className="flex flex-col items-center mt-4 sm:mt-6 lg:mt-8">
              <span
                className="text-white font-semibold text-sm sm:text-base lg:text-lg rotate-180 writing-vertical-ltr hidden sm:block"
                style={{ writingMode: "vertical-lr", letterSpacing: "0.1em" }}
              >
                Professional IT Services you Can trust
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div className="max-w-2xl mx-auto">
          <span className="uppercase text-primary font-semibold tracking-wide text-sm sm:text-base mb-2 inline-block">
            Notre Mission
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Simplifier la digitalisation pour une croissance durable
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Nous simplifions la digitalisation pour permettre aux entreprises de
            bénéficier de solutions innovantes qui favorisent une croissance
            durable et un avantage concurrentiel.
          </p>
          <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="inline-block mt-1">
              <svg
                viewBox="0 0 28 28"
                fill="none"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
              >
                <circle cx="14" cy="14" r="14" fill="#e0e7ff" />
                <path
                  d="M14 8v8"
                  stroke="#377dff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="14" cy="20" r="1.5" fill="#377dff" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
                Des solutions numériques accessibles, personnalisées et
                efficaces pour chaque organisation.
              </span>
            </div>
          </div>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
              <span className="inline-block">
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="11"
                    fill="#377dff"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M7 11.5l3 3 5-5"
                    stroke="#377dff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Croissance durable et avantage concurrentiel
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
              <span className="inline-block">
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="11"
                    fill="#377dff"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M7 11.5l3 3 5-5"
                    stroke="#377dff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Accompagnement sur mesure et expertise technique
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
              <span className="inline-block">
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="11"
                    fill="#377dff"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M7 11.5l3 3 5-5"
                    stroke="#377dff"
                    strokeWidth="2"
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
