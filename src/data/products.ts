export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  images?: string[];
  videos?: {
    title: string;
    filename: string;
    description?: string;
  }[];
  category: string;
  status: 'active' | 'coming-soon' | 'beta';
}

export const products: Product[] = [
  {
    id: 'kampux',
    name: 'Kampux',
    description: 'Plateforme de gestion scolaire complète pour les établissements d\'enseignement',
    longDescription: 'Kampux est une solution complète de gestion scolaire qui permet aux établissements d\'enseignement de gérer efficacement leurs opérations quotidiennes. De la gestion des inscriptions aux bulletins de notes, Kampux simplifie tous les aspects de l\'administration scolaire.',
    features: [
      'Gestion des inscriptions et validation automatique',
      'Saisie et gestion des notes par matière',
      'Génération automatique des bulletins',
      'Gestion des frais de scolarité et encaissements',
      'Exclusion/inclusion d\'élèves par matière',
      'Rapports et statistiques détaillés',
      'Interface intuitive pour enseignants et administrateurs'
    ],
    videos: [
      {
        title: 'Validation de l\'inscription',
        filename: 'validation de l\'inscription (1).mp4',
        description: 'Processus de validation des inscriptions d\'étudiants'
      },
      {
        title: 'Ajout des différents niveaux d\'études',
        filename: 'AJOUT DES DIFFÉRENTS NIVEAUX D\'ÉTUDES (1).mp4',
        description: 'Configuration des niveaux et classes dans le système'
      },
      {
        title: 'Saisie des notes',
        filename: 'Saisie des notes (1).mp4',
        description: 'Interface de saisie des notes par matière'
      },
      {
        title: 'Impression du bulletin',
        filename: 'IMPRESSION DU BULLETIN.mp4',
        description: 'Génération et impression des bulletins de notes'
      },
      {
        title: 'Gestion des frais de scolarité',
        filename: 'Payement des frais de scolarité (1).mp4',
        description: 'Système de gestion et de paiement des frais scolaires'
      },
      {
        title: 'Encaissement des montants',
        filename: 'ENCAISSEMENT D\'UN MONTANT DE SCOLARITÉ.mp4',
        description: 'Processus d\'encaissement des paiements'
      },
      {
        title: 'Définition des montants de scolarité',
        filename: 'Definition des montants de scolarité.mp4',
        description: 'Configuration des tarifs et frais scolaires'
      },
      {
        title: 'Gestion des matières par élève',
        filename: 'EXCLURE ET INCLURE LES ÉLÈVES POUR UNE  MATIÈRE.mp4',
        description: 'Exclusion et inclusion d\'élèves pour des matières spécifiques'
      },
      {
        title: 'Impression des listes de notes',
        filename: 'IMPRESSION DES LSITES DES NOTES NON SAISIES (1).mp4',
        description: 'Génération des rapports de notes non saisies'
      }
    ],
    category: 'Education',
    status: 'active'
  },
  {
    id: 'market',
    name: 'Market',
    description: 'Plateforme de commerce électronique moderne et intuitive',
    longDescription: 'Market est une solution e-commerce complète qui permet aux entreprises de créer et gérer leur boutique en ligne. Avec des fonctionnalités avancées de gestion des produits, des commandes et des paiements.',
    features: [
      'Gestion complète du catalogue produits',
      'Système de commandes et facturation',
      'Intégration de moyens de paiement',
      'Gestion des stocks en temps réel',
      'Interface d\'administration intuitive',
      'Rapports de ventes détaillés'
    ],
    category: 'E-commerce',
    status: 'active'
  },
  {
    id: 'kourtis',
    name: 'Kourtis',
    description: 'Comprehensive insurance management platform for brokers and financial institutions',
    longDescription: 'Kourtis is a sophisticated insurance management solution designed to streamline operations for insurance brokers, agents, and banking institutions. This integrated platform enhances productivity by centralizing policy management, client relationships, and business processes while providing powerful analytics and multi-stakeholder collaboration tools.',
    features: [
      'Advanced reporting and analytics for performance tracking',
      'Comprehensive policy and contract administration system',
      'Customizable configuration and workflow management',
      'Integrated financial processing and accounting capabilities',
      'Executive dashboard with real-time key performance indicators',
      'Multi-portal architecture for clients, agents, and partners',
      'Digital client engagement and self-service platform',
      'Built-in CRM system for relationship management',
      'Advanced document management with electronic storage solutions'
    ],
    category: 'Insurance Management',
    status: 'active'
  },
  {
    id: 'echelon',
    name: 'Echelon',
    description: 'Advanced inventory management platform for streamlined warehouse operations',
    longDescription: 'Echelon is a comprehensive stock management solution engineered to transform how businesses handle their inventory and warehouse operations. This sophisticated platform delivers real-time visibility into stock movements, storage optimization, and supply chain processes, enabling organizations to enhance operational efficiency while minimizing costs and inventory discrepancies.',
    features: [
      'Real-time inventory tracking with automated stock level monitoring',
      'Comprehensive warehouse management across multiple storage zones',
      'Streamlined receiving and shipping workflow automation',
      'Advanced inventory control with discrepancy resolution tools',
      'Integrated order management and procurement planning',
      'Complete lot and serial number traceability system',
      'Detailed analytics and performance reporting dashboard'
    ],
    category: 'Gestion d\'Inventaire',
    status: 'beta'
  },
  {
    id: 'teamix',
    name: 'Teamix',
    description: 'Outil de collaboration et de gestion d\'équipe',
    longDescription: 'Teamix est une plateforme collaborative qui facilite le travail d\'équipe avec des outils de communication, de gestion de projets et de partage de documents en temps réel.',
    features: [
      'Gestion de projets',
      'Communication d\'équipe',
      'Partage de documents',
      'Suivi des tâches',
      'Calendrier partagé',
      'Rapports de productivité'
    ],
    category: 'Collaboration',
    status: 'coming-soon'
  }
];