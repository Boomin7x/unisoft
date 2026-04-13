export interface FooterLink {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  displayPhone: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  logo: {
    src: string;
    alt: string;
  };
  ctaText: string;
  ctaButtonText: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'Univsoft',
  description: 'Univsoft, votre partenaire stratégique pour une transformation numérique réussie. Spécialisé dans la digitalisation des organisations grâce à des solutions innovantes, accessibles et efficaces.',
  logo: {
    src: '/img/logo.png',
    alt: 'Logo Univsoft',
  },
  ctaText: 'Prêt à transformer votre entreprise ?',
  ctaButtonText: 'Obtenir une consultation',
};

export const CONTACT_INFO: ContactInfo = {
  location: 'Cameroun, Douala',
  email: 'contact@univ-soft.com',
  phone: '+237696458382',
  displayPhone: '+237-696-458-382',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: 'facebook-f',
    ariaLabel: 'Suivez-nous sur Facebook',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/univsoft',
    icon: 'linkedin-in',
    ariaLabel: 'Connectez-vous sur LinkedIn',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: 'quick-links',
    title: 'Liens Rapides',
    links: [
      { id: 'home', label: 'Accueil', href: '#hero' },
      { id: 'products', label: 'Nos Produits', href: '/products' },
      { id: 'expertise', label: 'Notre Expertise', href: '#expertise' },
      { id: 'team', label: 'Notre Équipe', href: '#team' },
      { id: 'about', label: 'À propos', href: '#about' },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ],
  },
  {
    id: 'services',
    title: 'Domaines de Service',
    links: [
      { id: 'business-software', label: 'Logiciels de Gestion', href: '#services' },
      { id: 'web-mobile', label: 'Développement Web & Mobile', href: '#services' },
      { id: 'system-integration', label: 'Intégration de Systèmes', href: '#services' },
      { id: 'enterprise-architecture', label: 'Architecture d\'Entreprise', href: '#services' },
      { id: 'data-ai', label: 'Solutions Data et IA', href: '#services' },
    ],
  },
  {
    id: 'company',
    title: 'Entreprise',
    links: [
      { id: 'values', label: 'Nos Valeurs', href: '#values' },
      { id: 'mission', label: 'Notre Mission', href: '#mission' },
      { id: 'why-choose-us', label: 'Pourquoi Nous Choisir', href: '#advantages' },
      { id: 'careers', label: 'Carrières', href: '#careers' },
      { id: 'privacy', label: 'Politique de Confidentialité', href: '/privacy' },
    ],
  },
];

export const BRAND_COLOR = '#377dff';
export const DARK_BG = '#000B1C';
export const CURRENT_YEAR = new Date().getFullYear();