import React from "react";

const OurMissionSection = () => {
  return (
    <section className="w-full min-h-[500px] flex bg-[url(/img/bg-whychoseus.webp)] bg-cover bg-no-repeat">
      {/* Left: Image and blue bar */}
      <div className="relative flex w-full max-w-[50%] min-h-[500px]">
        <img
          src="/img/bg-slide-1.webp"
          alt="Team meeting"
          className="object-cover w-full h-[60vh] min-h-[500px]"
        />
        {/* Blue vertical bar with play button and vertical text */}
        <div className="absolute right-0 top-0 h-full w-32 bg-[#377dff] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8 h-full justify-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg border-4 border-blue-100">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
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
            <div className="flex flex-col items-center mt-8">
              <span
                className="text-white font-semibold text-lg rotate-180 writing-vertical-ltr"
                style={{ writingMode: "vertical-lr", letterSpacing: "0.1em" }}
              >
                Professional IT Services you Can trust
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center px-10 py-12 ">
        <div className="max-w-2xl mx-auto">
          <span className="uppercase text-[#377dff] font-semibold tracking-wide text-base mb-2 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-4xl  font-extrabold text-gray-900 mb-4 leading-tight">
            Notre mission est de fournir un <br className="hidden md:block" />{" "}
            accès numérique généralisé.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Univsoft simplifie la digitalisation pour permettre aux entreprises
            de bénéficier de solutions innovantes qui favorisent une croissance
            durable et un avantage concurrentiel.
          </p>
          <div className="flex items-start gap-3 mb-4">
            <span className="inline-block mt-1">
              <svg width="28" height="28" fill="none">
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
              <span className="font-bold text-gray-900">
                Pour votre secteur spécifique, nous avons des idées
                intelligentes pour vos objectifs business.
              </span>
            </div>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-base text-gray-700">
              <span className="inline-block">
                <svg width="22" height="22" fill="none">
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
              Solutions sur mesure pour la transformation numérique
            </li>
            <li className="flex items-center gap-2 text-base text-gray-700">
              <span className="inline-block">
                <svg width="22" height="22" fill="none">
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
              Accompagnement personnalisé et expertise technique
            </li>
            <li className="flex items-center gap-2 text-base text-gray-700">
              <span className="inline-block">
                <svg width="22" height="22" fill="none">
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
