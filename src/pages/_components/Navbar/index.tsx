import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Mail,
  MapPin,
  Search,
  Phone,
  Menu,
  Facebook,
  Linkedin,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-white supports-[backdrop-filter]:bg-white/80 backdrop-blur border-b border-black/5">
      {/* Top bar */}
      <div className="container mx-auto w-full bg-[#000B1C] text-white text-xs sm:text-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <a
              href="mailto:contact@univ-soft.com"
              className="flex items-center gap-1 hover:text-[#377dff] transition-colors"
              aria-label="Envoyer un email à contact@univ-soft.com"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#377dff]" />
              <span className="inline">contact@univ-soft.com</span>
              <span className="">Email</span>
            </a>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#377dff]" />
              <span className="hidden md:inline">Cameroun, Douala</span>
              <span className="md:hidden">Yaoundé</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a
              href="#expertise"
              className="hover:text-[#377dff] transition-colors whitespace-nowrap"
            >
              Notre Expertise
            </a>
            <span className="opacity-40">/</span>
            <a href="#team" className="hover:text-[#377dff] transition-colors">
              Équipe
            </a>
            <span className="opacity-40">/</span>
            <a
              href="#contact"
              className="hover:text-[#377dff] transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.facebook.com"
              className="hover:text-[#377dff] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir Facebook dans un nouvel onglet"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/univsoft"
              className="hover:text-[#377dff] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir LinkedIn dans un nouvel onglet"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/img/logo.png"
              alt="Logo Univsoft"
              className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto rounded-full bg-white object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 font-semibold text-sm xl:text-base">
            <li>
              <a
                href="#hero"
                className="hover:text-[#377dff] transition-colors whitespace-nowrap"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#377dff] transition-colors whitespace-nowrap"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#expertise"
                className="hover:text-[#377dff] transition-colors whitespace-nowrap"
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-[#377dff] transition-colors whitespace-nowrap"
              >
                Réalisations
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-[#377dff] transition-colors whitespace-nowrap"
              >
                Équipe
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#377dff] transition-colors whitespace-nowrap"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right icons and call info */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Search - desktop only */}
            <button
              className="hidden xl:inline-flex text-[#000B1C] text-xl hover:text-[#377dff] transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Call info - hidden on small screens */}
            <a
              href="tel:+237696458382"
              className="hidden sm:flex items-center gap-2 bg-[#222b3a] px-2 sm:px-3 lg:px-4 py-2 rounded-full text-white hover:bg-[#2c3546] transition-colors"
              aria-label="Appeler le +237-696-458-382"
            >
              <span
                className="bg-white text-[#377dff] rounded-full p-1 sm:p-1.5 lg:p-2 flex-shrink-0"
                aria-hidden="true"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <div className="hidden md:flex flex-col leading-tight">
                <span className="text-[0.65rem] lg:text-[0.7rem] text-white/80">
                  Appelez-nous
                </span>
                <span className="text-xs sm:text-sm lg:text-base font-bold text-white">
                  +237-696-458-382
                </span>
              </div>
              <span className="md:hidden text-xs font-semibold">Appeler</span>
            </a>

            {/* Mobile call icon - only visible on very small screens */}
            <a
              href="tel:+237696458382"
              className="inline-flex sm:hidden items-center justify-center w-9 h-9 rounded-full bg-[#222b3a] text-white hover:bg-[#2c3546] transition-colors"
              aria-label="Appeler"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile menu drawer */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="inline-flex lg:hidden items-center justify-center w-10 h-10 rounded-md border border-black/10 text-[#000B1C] hover:bg-black/5 transition-colors"
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="p-0 flex flex-col h-full bg-white w-full max-w-sm"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
                  <a href="#hero" className="flex items-center gap-2">
                    <img
                      src="/img/logo.png"
                      alt="Logo Univsoft"
                      className="w-24 sm:w-28 h-auto rounded-full bg-white object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>

                <nav className="flex-grow p-4">
                  <ul className="flex flex-col gap-1">
                    {[
                      { href: "#hero", label: "Accueil" },
                      { href: "#about", label: "À propos" },
                      { href: "#expertise", label: "Expertise" },
                      { href: "#work", label: "Réalisations" },
                      { href: "#team", label: "Équipe" },
                      { href: "#contact", label: "Contact" },
                    ].map((item, index) => (
                      <li key={index}>
                        <SheetClose asChild>
                          <a
                            href={item.href}
                            className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-base sm:text-lg transition-colors"
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="p-4 border-t border-black/5">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <a
                      href="https://www.facebook.com"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ouvrir Facebook dans un nouvel onglet"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/univsoft"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ouvrir LinkedIn dans un nouvel onglet"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    href="tel:+237696458382"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#222b3a] px-3 py-3 rounded-full text-white hover:bg-[#2c3546] transition-colors"
                    aria-label="Appeler le +237-696-458-382"
                  >
                    <span
                      className="bg-white text-[#377dff] rounded-full p-1.5"
                      aria-hidden="true"
                    >
                      <Phone className="w-4 h-4" />
                    </span>
                    <span className="font-semibold">Appeler maintenant</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
