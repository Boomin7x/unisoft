import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrollDirection } from "./hooks";
import {
  Logo,
  NavItem,
  SocialIcon,
  SearchButton,
  CallButton,
} from "./components";
import {
  NAVIGATION_LINKS,
  TOP_BAR_LINKS,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from "./constants";

const Navbar = () => {
  const { scrollDirection, isScrolled } = useScrollDirection();

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-md border-b border-black/5 transition-all duration-300",
        scrollDirection === "down" && isScrolled && "-translate-y-full",
        isScrolled && "shadow-lg",
      )}
    >
      {/* Enhanced Top Bar */}
      <div className="w-full bg-gradient-to-r from-[#000B1C] to-[#1a2332] text-white text-xs sm:text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 hover:text-[#377dff] transition-all duration-200 group"
              aria-label={`Envoyer un email à ${CONTACT_INFO.email}`}
            >
              <span
                className="text-[#377dff] transition-transform duration-200 group-hover:scale-110"
                aria-hidden
              >
                ✉️
              </span>
              <span className="hidden xs:inline">{CONTACT_INFO.email}</span>
              <span className="xs:hidden">Email</span>
            </a>
            <span className="hidden xs:flex items-center gap-2 text-white/80">
              <span className="text-[#377dff]" aria-hidden>
                📍
              </span>
              {CONTACT_INFO.location}
            </span>
          </div>
          <nav
            className="hidden md:flex items-center gap-4 sm:gap-6"
            role="navigation"
            aria-label="Navigation rapide"
          >
            {TOP_BAR_LINKS.map((link, index) => (
              <div key={link.id} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="hover:text-[#377dff] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                </a>
                {index < TOP_BAR_LINKS.length - 1 && (
                  <span className="opacity-40 text-xs">/</span>
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 ml-2">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.id} link={social} />
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav
        className="w-full"
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Logo />

            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-semibold text-sm xl:text-base">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <NavItem link={link} />
                </li>
              ))}
            </ul>

            {/* Enhanced Right Section */}
            <div className="flex items-center gap-3 sm:gap-4">
              <SearchButton />
              <CallButton variant="desktop" />
              <CallButton variant="mobile" />

              {/* Enhanced Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className="inline-flex lg:hidden items-center justify-center size-10 rounded-lg border border-black/10 text-[#000B1C] hover:bg-black/5 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#377dff] focus:ring-offset-2"
                    aria-label="Ouvrir le menu de navigation"
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
                      aria-hidden="true"
                    >
                      <path d="M3 6h18" />
                      <path d="M3 12h18" />
                      <path d="M3 18h18" />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="p-0 flex flex-col h-full bg-white w-80 sm:w-96"
                >
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                    <Logo className="scale-75" />
                  </div>

                  {/* Mobile Navigation */}
                  <nav
                    className="flex-grow px-6 py-4"
                    role="navigation"
                    aria-label="Navigation mobile"
                  >
                    <ul className="space-y-1">
                      {NAVIGATION_LINKS.map((link) => (
                        <li key={link.id}>
                          <NavItem
                            link={link}
                            isMobile
                            className="transition-all duration-200 hover:translate-x-1"
                          />
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile Menu Footer */}
                  <div className="px-6 py-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white space-y-4">
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4">
                      {SOCIAL_LINKS.map((social) => (
                        <SocialIcon
                          key={social.id}
                          link={social}
                          variant="mobile"
                        />
                      ))}
                    </div>

                    {/* Call to Action */}
                    <div className="space-y-3">
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/[-\\s]/g, "")}`}
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#222b3a] to-[#2c3546] px-4 py-3 rounded-lg text-white hover:from-[#2c3546] hover:to-[#364052] transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                        aria-label={`Appeler le ${CONTACT_INFO.phone}`}
                      >
                        <span
                          className="bg-white text-[#377dff] rounded-full p-2 transition-transform duration-200"
                          aria-hidden="true"
                        >
                          <svg width="16" height="16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#377dff" />
                            <path
                              d="M8 3.5v4"
                              stroke="#fff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <circle cx="8" cy="11.5" r="1" fill="#fff" />
                          </svg>
                        </span>
                        <div className="text-left">
                          <div className="text-xs text-white/80">
                            Appelez-nous
                          </div>
                          <div className="font-semibold">
                            {CONTACT_INFO.phone}
                          </div>
                        </div>
                      </a>

                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="w-full flex items-center justify-center gap-3 border border-gray-300 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
                        aria-label={`Envoyer un email à ${CONTACT_INFO.email}`}
                      >
                        <span aria-hidden="true">✉️</span>
                        <span className="font-medium">Nous écrire</span>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
