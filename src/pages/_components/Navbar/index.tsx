import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-white supports-[backdrop-filter]:bg-white/80 backdrop-blur border-b border-black/5">
      {/* Top bar */}
      <div className="container mx-auto w-full bg-[#000B1C] text-white text-xs sm:text-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="mailto:contact@univ-soft.com"
            className="flex items-center gap-1 hover:text-[#377dff] transition-colors"
            aria-label="Envoyer un email à contact@univ-soft.com"
          >
            <span className="text-[#377dff]" aria-hidden>
              ✉️
            </span>
            contact@univ-soft.com
          </a>
          <span className="hidden xs:flex items-center gap-1">
            <span className="text-[#377dff]" aria-hidden>
              📍
            </span>
            Cameroun, Douala
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 sm:gap-6">
          <a
            href="#expertise"
            className="hover:text-[#377dff] transition-colors"
          >
            Notre Expertise
          </a>
          <span className="opacity-40">/</span>
          <a href="#team" className="hover:text-[#377dff] transition-colors">
            Équipe
          </a>
          <span className="opacity-40">/</span>
          <a href="#contact" className="hover:text-[#377dff] transition-colors">
            Contact
          </a>
          <a
            href="https://www.facebook.com"
            className="hover:text-[#377dff] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir Facebook dans un nouvel onglet"
          >
            <i className="fab fa-facebook-f" aria-hidden>
              f
            </i>
          </a>
          <a
            href="https://www.linkedin.com/company/univsoft"
            className="hover:text-[#377dff] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir LinkedIn dans un nouvel onglet"
          >
            <i className="fab fa-linkedin-in" aria-hidden>
              in
            </i>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/img/logo.png"
              alt="Logo Univsoft"
              className="w-28 sm:w-36 lg:w-40 h-auto rounded-full bg-white object-contain"
              loading="lazy"
              decoding="async"
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm lg:text-base">
            <li>
              <a
                href="#hero"
                className="hover:text-[#377dff] transition-colors"
              >
                Accueil
              </a>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[#377dff] transition-colors"
              >
                Produits
              </Link>
            </li>
            <li>
              <a
                href="/#about"
                className="hover:text-[#377dff] transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/#expertise"
                className="hover:text-[#377dff] transition-colors"
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-[#377dff] transition-colors"
              >
                Réalisations
              </a>
            </li>
            <li>
              <a
                href="/#team"
                className="hover:text-[#377dff] transition-colors"
              >
                Équipe
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="hover:text-[#377dff] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right icons and call info */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search - desktop only for now */}
            <button
              className="hidden md:inline-flex text-[#000B1C] text-xl hover:text-[#377dff] transition-colors"
              aria-label="Rechercher"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
                aria-hidden
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 16l4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Call info */}
            <a
              href="tel:+237696458382"
              className="hidden sm:flex items-center gap-2 bg-[#222b3a] px-3 sm:px-4 py-2 rounded-full text-white hover:bg-[#2c3546] transition-colors"
              aria-label="Appeler le +237-696-458-382"
            >
              <span
                className="bg-white text-[#377dff] rounded-full p-1.5 sm:p-2"
                aria-hidden
              >
                <svg width="20" height="20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#377dff" />
                  <path
                    d="M10 5v6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="15" r="1.5" fill="#fff" />
                </svg>
              </span>
              <div className="hidden md:flex flex-col leading-tight">
                <span className="text-[0.7rem] text-white/80">
                  Appelez-nous
                </span>
                <span className="text-sm lg:text-base font-bold text-white">
                  +237-696-458-382
                </span>
              </div>
            </a>

            {/* Mobile call icon */}
            <a
              href="tel:+237696458382"
              className="inline-flex sm:hidden items-center justify-center size-9 rounded-full bg-[#222b3a] text-white hover:bg-[#2c3546] transition-colors"
              aria-label="Appeler"
            >
              <svg width="20" height="20" fill="none" aria-hidden>
                <circle cx="10" cy="10" r="10" fill="#377dff" />
                <path
                  d="M10 5v6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="15" r="1.5" fill="#fff" />
              </svg>
            </a>

            {/* Mobile menu drawer */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="i  nline-flex md:hidden items-center justify-center size-10 rounded-md border border-black/10 text-[#000B1C] hover:bg-black/5 transition-colors"
                  aria-label="Ouvrir le menu"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="p-0 flex flex-col h-full bg-white"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
                  <Link to="/" className="flex items-center gap-2">
                    <img
                      src="/img/logo.png"
                      alt="Logo Univsoft"
                      className="w-28 h-auto rounded-full bg-white object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  {/* <SheetClose asChild>
                    <button
                      className="inline-flex items-center justify-center size-9 rounded-md border border-black/10 text-[#000B1C] hover:bg-black/5 transition-colors"
                      aria-label="Fermer le menu"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </SheetClose> */}
                </div>

                <nav className="flex-grow p-4">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <SheetClose asChild>
                        <a
                          href="#hero"
                          className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
                        >
                          Accueil
                        </a>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link
                          to="/products"
                          className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
                        >
                          Produits
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <a
                          href="#about"
                          className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
                        >
                          À propos
                        </a>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <a
                          href="#expertise"
                          className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
                        >
                          Expertise
                        </a>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <a
                          href="#work"
                          className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
                        >
                          Réalisations
                        </a>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <a
                          href="#team"
                          className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
                        >
                          Équipe
                        </a>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <a
                          href="#contact"
                          className="block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
                        >
                          Contact
                        </a>
                      </SheetClose>
                    </li>
                  </ul>
                </nav>

                <div className="p-4 border-t border-black/5">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <a
                      href="https://www.facebook.com"
                      className="inline-flex items-center justify-center size-10 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ouvrir Facebook dans un nouvel onglet"
                    >
                      <i className="fab fa-facebook-f" aria-hidden>
                        f
                      </i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/univsoft"
                      className="inline-flex items-center justify-center size-10 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ouvrir LinkedIn dans un nouvel onglet"
                    >
                      <i className="fab fa-linkedin-in" aria-hidden>
                        in
                      </i>
                    </a>
                  </div>
                  <a
                    href="tel:+237696458382"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#222b3a] px-3 py-3 rounded-full text-white hover:bg-[#2c3546] transition-colors"
                    aria-label="Appeler le +237-696-458-382"
                  >
                    <span
                      className="bg-white text-[#377dff] rounded-full p-1.5"
                      aria-hidden
                    >
                      <svg width="18" height="18" fill="none">
                        <circle cx="9" cy="9" r="9" fill="#377dff" />
                        <path
                          d="M9 4v5.5"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle cx="9" cy="13.5" r="1.2" fill="#fff" />
                      </svg>
                    </span>
                    <span className="font-semibold">Appeler</span>
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
