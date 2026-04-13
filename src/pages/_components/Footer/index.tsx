import {
  CTABanner,
  CompanyInfo,
  FooterSectionComponent,
  ContactInfoComponent,
  Copyright,
} from "./components";
import { FOOTER_SECTIONS } from "./constants";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#000B1C] text-white" role="contentinfo">
      {/* Call-to-Action Banner */}
      <CTABanner />

      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-[#000B1C] to-[#0a1324]">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#377dff] rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#377dff] rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info - Takes 2 columns on XL screens */}
            <div className="lg:col-span-2 xl:col-span-2">
              <CompanyInfo />
            </div>

            {/* Footer Sections */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.id} className="lg:col-span-1">
                <FooterSectionComponent section={section} />
              </div>
            ))}

            {/* Contact Info - Can span full width on smaller screens */}
            <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
              <ContactInfoComponent />
            </div>
          </div>

          {/* Bottom Section - Newsletter or Additional CTA */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Restez informé de nos dernières innovations
                </h3>
                <p className="text-gray-400 text-sm">
                  Découvrez en avant-première nos nouvelles solutions et
                  actualités technologiques.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 min-w-0 lg:min-w-96">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#377dff] focus:border-transparent transition-all duration-200"
                    aria-label="Adresse email pour la newsletter"
                  />
                </div>
                <button
                  type="button"
                  className="px-6 py-3 bg-[#377dff] text-white font-semibold rounded-lg hover:bg-[#2968cc] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#377dff] focus:ring-offset-2 focus:ring-offset-[#000B1C] whitespace-nowrap"
                  aria-label="S'abonner à la newsletter"
                >
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <Copyright />
    </footer>
  );
};

export default Footer;
