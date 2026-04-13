import { Link } from 'react-router-dom';
import {
  type FooterSection,
  type FooterLink,
  type SocialLink,
  COMPANY_INFO,
  CONTACT_INFO,
  BRAND_COLOR,
  CURRENT_YEAR,
} from './constants';

// Call-to-Action Banner Component
export const CTABanner: React.FC = () => (
  <div className="relative bg-gradient-to-r from-[#000B1C] via-[#1a2332] to-[#000B1C] overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat" />
    </div>

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-center sm:text-left">
          <div className="flex-shrink-0">
            <img
              src={COMPANY_INFO.logo.src}
              alt={COMPANY_INFO.logo.alt}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain rounded-full bg-white/10 p-2 transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              {COMPANY_INFO.ctaText}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Contactez-nous dès aujourd'hui pour découvrir comment nos solutions peuvent transformer votre entreprise.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center gap-3 bg-white text-[#000B1C] font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            aria-label="Nous contacter par email"
          >
            <span className="text-sm lg:text-base">{COMPANY_INFO.ctaButtonText}</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Company Info Component
export const CompanyInfo: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span>À propos</span>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#377dff] to-transparent" />
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
        {COMPANY_INFO.description}
      </p>
    </div>

    <SocialLinks />
  </div>
);

// Footer Section Component
interface FooterSectionProps {
  section: FooterSection;
}

export const FooterSectionComponent: React.FC<FooterSectionProps> = ({ section }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-white flex items-center gap-2">
      <span>{section.title}</span>
      <div className="w-8 h-0.5 bg-gradient-to-r from-[#377dff] to-transparent" />
    </h3>
    <nav role="navigation" aria-label={`Navigation ${section.title}`}>
      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.id}>
            <FooterLinkComponent link={link} />
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

// Footer Link Component
interface FooterLinkProps {
  link: FooterLink;
}

const FooterLinkComponent: React.FC<FooterLinkProps> = ({ link }) => {
  const baseClassName = "text-gray-300 hover:text-[#377dff] transition-all duration-200 relative group inline-block text-sm lg:text-base";

  const linkContent = (
    <>
      {link.label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#377dff] transition-all duration-300 group-hover:w-full" />
    </>
  );

  if (link.href.startsWith('/')) {
    return (
      <Link to={link.href} className={baseClassName}>
        {linkContent}
      </Link>
    );
  }

  return (
    <a href={link.href} className={baseClassName}>
      {linkContent}
    </a>
  );
};

// Social Links Component
export const SocialLinks: React.FC = () => (
  <div className="flex items-center gap-4">
    <span className="text-gray-400 text-sm hidden sm:inline">Suivez-nous:</span>
    <div className="flex gap-3">
      {[
        { id: 'facebook', icon: 'f', href: 'https://www.facebook.com', label: 'Facebook' },
        { id: 'linkedin', icon: 'in', href: 'https://www.linkedin.com/company/univsoft', label: 'LinkedIn' },
      ].map((social) => (
        <a
          key={social.id}
          href={social.href}
          className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-gray-300 hover:text-[#377dff] hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#377dff] focus:ring-offset-2 focus:ring-offset-[#000B1C]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Suivez-nous sur ${social.label}`}
        >
          <i className={`fab fa-${social.id === 'facebook' ? 'facebook-f' : 'linkedin-in'}`} aria-hidden="true">
            {social.icon}
          </i>
        </a>
      ))}
    </div>
  </div>
);

// Contact Info Component
export const ContactInfoComponent: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-white flex items-center gap-2">
      <span>Contact</span>
      <div className="w-8 h-0.5 bg-gradient-to-r from-[#377dff] to-transparent" />
    </h3>
    <div className="space-y-3 text-sm lg:text-base">
      <ContactItem
        icon="📍"
        text={CONTACT_INFO.location}
        ariaLabel="Notre adresse"
      />
      <ContactItem
        icon="✉️"
        text={CONTACT_INFO.email}
        href={`mailto:${CONTACT_INFO.email}`}
        ariaLabel={`Envoyez-nous un email à ${CONTACT_INFO.email}`}
      />
      <ContactItem
        icon="📞"
        text={CONTACT_INFO.displayPhone}
        href={`tel:${CONTACT_INFO.phone}`}
        ariaLabel={`Appelez-nous au ${CONTACT_INFO.displayPhone}`}
      />
    </div>
  </div>
);

// Contact Item Component
interface ContactItemProps {
  icon: string;
  text: string;
  href?: string;
  ariaLabel: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href, ariaLabel }) => {
  const content = (
    <div className="flex items-center gap-3 group">
      <span className="text-[#377dff] text-lg transition-transform duration-200 group-hover:scale-110" aria-hidden="true">
        {icon}
      </span>
      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block transition-all duration-200 hover:translate-x-1" aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return <div aria-label={ariaLabel}>{content}</div>;
};

// Copyright Component
export const Copyright: React.FC = () => (
  <div className="bg-[#000B1C] border-t border-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-gray-400 text-sm">
          © {CURRENT_YEAR}{' '}
          <span className="font-bold text-white hover:text-[#377dff] transition-colors duration-200">
            {COMPANY_INFO.name}
          </span>
          . Tous droits réservés.
        </p>

        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span>Développé avec</span>
          <span className="text-red-400 animate-pulse">♥</span>
          <span>au Cameroun</span>
        </div>
      </div>
    </div>
  </div>
);