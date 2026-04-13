export interface NavLink {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { id: 'home', label: 'Accueil', href: '#hero' },
  { id: 'products', label: 'Produits', href: '/products' },
  { id: 'about', label: 'À propos', href: '/#about' },
  { id: 'expertise', label: 'Expertise', href: '/#expertise' },
  { id: 'work', label: 'Réalisations', href: '#work' },
  { id: 'team', label: 'Équipe', href: '/#team' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export const TOP_BAR_LINKS: NavLink[] = [
  { id: 'expertise-top', label: 'Notre Expertise', href: '#expertise' },
  { id: 'team-top', label: 'Équipe', href: '#team' },
  { id: 'contact-top', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: 'facebook-f',
    ariaLabel: 'Ouvrir Facebook dans un nouvel onglet',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/univsoft',
    icon: 'linkedin-in',
    ariaLabel: 'Ouvrir LinkedIn dans un nouvel onglet',
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'contact@univ-soft.com',
  phone: '+237696458382',
  location: 'Cameroun, Douala',
};

export const BRAND_COLOR = '#377dff';
export const DARK_BG = '#000B1C';
export const LOGO_ALT = 'Logo Univsoft';
export const LOGO_SRC = '/img/logo.png';