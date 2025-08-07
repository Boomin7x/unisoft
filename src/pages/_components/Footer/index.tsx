import React from "react";

const Footer = () => {
  return (
    <footer className=" relative w-full bg-[#000B1C] text-white pt-0">
      <div className="relative container mx-auto bg-[#000B1C] text-white pt-0">
        {/* Top CTA Bar */}
        <div className="w-full py-8 flex flex-col md:flex-row items-center justify-between px-8 md:px-24">
          <div className="flex items-center gap-4">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="w-[12rem]   object-contain"
            />
            <span className="text-2xl  font-semibold text-white">
              Free Consultation On Your Very First Insurance
            </span>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-[#377dff] font-bold rounded shadow hover:bg-gray-100 transition text-xs">
            GET SOLUTION
          </button>
        </div>
        {/* Main Footer Content */}
        <div className="w-full bg-[#000B1C] py-16 px-8 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#1a2533] relative">
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">À propos</h3>
            <p className="text-gray-400 mb-6">
              Univsoft, votre partenaire stratégique pour une transformation
              numérique réussie. Spécialisé dans la digitalisation des
              organisations grâce à des solutions innovantes, accessibles et
              efficaces.
            </p>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com"
                className="hover:text-[#377dff] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f">f</i>
              </a>
              <a
                href="https://www.linkedin.com/company/univsoft"
                className="hover:text-[#377dff] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in">in</i>
              </a>
            </div>
          </div>
          {/* Explore */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#377dff] w-fit pb-1">
              Liens Rapides
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#expertise"
                  className="hover:text-[#377dff] transition"
                >
                  Notre Expertise
                </a>
              </li>
              <li>
                <a
                  href="#avantages"
                  className="hover:text-[#377dff] transition"
                >
                  Pourquoi Nous Choisir
                </a>
              </li>
              <li>
                <a href="#valeurs" className="hover:text-[#377dff] transition">
                  Nos Valeurs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#377dff] transition">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#377dff] w-fit pb-1">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Cameroun, Yaoundé</li>
              <li className="flex items-center gap-2">
                <span className="text-[#377dff]">✉️</span> contact@univ-soft.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#377dff]">📞</span> +237-696-458-382
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#377dff] w-fit pb-1">
              Domaines de Service
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Logiciels de Gestion d'Entreprise</li>
              <li>Développement Web et Mobile</li>
              <li>Intégration de Systèmes</li>
              <li>Architecture d'Entreprise</li>
              <li>Solutions Data et IA</li>
            </ul>
          </div>
          {/* Gallery */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#377dff] w-fit pb-1">
              Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/img/bg-slide-1.webp"
                alt="gallery1"
                className="w-20 h-16 object-cover rounded"
              />
              <img
                src="/img/bg-slide-1.webp"
                alt="gallery2"
                className="w-20 h-16 object-cover rounded"
              />
              <img
                src="/img/bg-slide-1.webp"
                alt="gallery3"
                className="w-20 h-16 object-cover rounded"
              />
              <img
                src="/img/bg-slide-1.webp"
                alt="gallery4"
                className="w-20 h-16 object-cover rounded"
              />
              <img
                src="/img/bg-slide-1.webp"
                alt="gallery5"
                className="w-20 h-16 object-cover rounded"
              />
              <img
                src="/img/bg-slide-1.webp"
                alt="gallery6"
                className="w-20 h-16 object-cover rounded"
              />
            </div>
          </div> */}
        </div>
        {/* Copyright Bar */}
        <div className="w-full bg-[#000B1C] py-6 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between  text-gray-400 text-sm">
          <span>
            © 2025 <span className="font-bold text-white">Univsoft</span>. Tous
            droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
