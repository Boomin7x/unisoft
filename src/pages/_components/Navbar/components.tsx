import { Link } from "react-router-dom";
import { SheetClose } from "@/components/ui/sheet";
import {
  type NavLink,
  type SocialLink,
  BRAND_COLOR,
  LOGO_ALT,
  LOGO_SRC,
  CONTACT_INFO,
} from "./constants";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`}>
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      className="w-28 sm:w-36 lg:w-40 h-auto rounded-full bg-white object-contain transition-transform duration-200 group-hover:scale-105"
      loading="lazy"
      decoding="async"
    />
  </Link>
);

interface NavItemProps {
  link: NavLink;
  className?: string;
  isMobile?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  link,
  className = "",
  isMobile = false,
}) => {
  const baseClassName = `relative transition-all duration-200 hover:text-[${BRAND_COLOR}] group`;
  const mobileClassName = isMobile
    ? "block px-4 py-3 rounded-md hover:bg-black/5 font-semibold text-lg"
    : "";

  const content = (
    <>
      {link.label}
      {!isMobile && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
      )}
    </>
  );

  if (link.href.startsWith("/")) {
    return isMobile ? (
      <SheetClose asChild>
        <Link
          to={link.href}
          className={`${baseClassName} ${mobileClassName} ${className}`}
        >
          {content}
        </Link>
      </SheetClose>
    ) : (
      <Link to={link.href} className={`${baseClassName} ${className}`}>
        {content}
      </Link>
    );
  }

  return isMobile ? (
    <SheetClose asChild>
      <a
        href={link.href}
        className={`${baseClassName} ${mobileClassName} ${className}`}
      >
        {content}
      </a>
    </SheetClose>
  ) : (
    <a href={link.href} className={`${baseClassName} ${className}`}>
      {content}
    </a>
  );
};

interface SocialIconProps {
  link: SocialLink;
  variant?: "default" | "mobile";
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  link,
  variant = "default",
}) => {
  const className =
    variant === "mobile"
      ? `inline-flex items-center justify-center size-10 rounded-full border border-black/10 hover:bg-black/5 transition-all duration-200 hover:scale-105`
      : `hover:text-[${BRAND_COLOR}] transition-all duration-200 hover:scale-110`;

  return (
    <a
      href={link.href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.ariaLabel}
    >
      <i className={`fab fa-${link.icon}`} aria-hidden>
        {link.icon === "facebook-f" ? "f" : "in"}
      </i>
    </a>
  );
};

export const SearchButton: React.FC = () => (
  <button
    className="hidden md:inline-flex text-[#000B1C] text-xl hover:text-[#377dff] transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-gray-50"
    aria-label="Rechercher"
  >
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      aria-hidden
      className="transition-transform duration-200"
    >
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 16l4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>
);

interface CallButtonProps {
  variant?: "desktop" | "mobile";
}

export const CallButton: React.FC<CallButtonProps> = ({
  variant = "desktop",
}) => {
  if (variant === "mobile") {
    return (
      <a
        href={`tel:${CONTACT_INFO.phone.replace(/[-\s]/g, "")}`}
        className="inline-flex sm:hidden items-center justify-center size-9 rounded-full bg-[#222b3a] text-white hover:bg-[#2c3546] transition-all duration-200 hover:scale-105"
        aria-label="Appeler"
      >
        <PhoneIcon size={20} />
      </a>
    );
  }

  return (
    <a
      href={`tel:${CONTACT_INFO.phone.replace(/[-\s]/g, "")}`}
      className="hidden sm:flex items-center gap-2 bg-[#222b3a] px-3 sm:px-4 py-2 rounded-full text-white hover:bg-[#2c3546] transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
      aria-label={`Appeler le ${CONTACT_INFO.phone}`}
    >
      <span
        className="bg-white text-[#377dff] rounded-full p-1.5 sm:p-2 transition-transform duration-200"
        aria-hidden
      >
        <PhoneIcon size={20} />
      </span>
      <div className="hidden md:flex flex-col leading-tight">
        <span className="text-[0.7rem] text-white/80">Appelez-nous</span>
        <span className="text-sm lg:text-base font-bold text-white">
          {CONTACT_INFO.phone}
        </span>
      </div>
    </a>
  );
};

interface PhoneIconProps {
  size?: number;
}

const PhoneIcon: React.FC<PhoneIconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} fill="none" aria-hidden>
    <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#377dff" />
    <path
      d={`M${size / 2} ${size / 4}v${size * 0.3}`}
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx={size / 2} cy={size * 0.75} r="1.5" fill="#fff" />
  </svg>
);
