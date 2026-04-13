import { useState } from 'react';
import { Icon } from '@iconify/react';

export interface DetailedFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  category?: string;
}

interface FeatureShowcaseProps {
  productName: string;
  features: DetailedFeature[];
  className?: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  productName,
  features,
  className = '',
}) => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(features[0]?.id || null);

  const selectedFeatureData = features.find(f => f.id === selectedFeature);

  return (
    <div className={`bg-white overflow-hidden ${className}`}>
      {/* Minimal Header */}
      <div className="px-8 py-8 border-b border-gray-100">
        <h2 className="text-2xl font-light text-gray-900 mb-2">
          Fonctionnalités
        </h2>
        <p className="text-gray-500">
          Découvrez les capacités de {productName}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Minimal Feature List */}
        <div className="lg:col-span-1 bg-gray-50/30 border-r border-gray-100">
          <div className="p-6">
            <div className="space-y-1">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    selectedFeature === feature.id
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-white border border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                        selectedFeature === feature.id
                          ? 'bg-white/20'
                          : 'bg-gray-100'
                      }`}
                    >
                      <Icon
                        icon={feature.icon}
                        className={`w-4 h-4 ${
                          selectedFeature === feature.id
                            ? 'text-white'
                            : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <h4
                      className={`font-medium text-sm ${
                        selectedFeature === feature.id
                          ? 'text-white'
                          : 'text-gray-900'
                      }`}
                    >
                      {feature.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Feature Details */}
        <div className="lg:col-span-2 p-8">
          {selectedFeatureData && (
            <div className="space-y-8">
              {/* Feature Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon={selectedFeatureData.icon}
                    className="w-7 h-7 text-gray-700"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-light text-gray-900 mb-3">
                    {selectedFeatureData.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedFeatureData.description}
                  </p>
                </div>
              </div>

              {/* Minimal Benefits */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-700">
                  Avantages
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedFeatureData.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Action */}
              <div className="pt-4 border-t border-gray-100">
                <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  <Icon icon="lucide:play-circle" className="w-4 h-4" />
                  Voir la démonstration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Echelon specific features data
export const ECHELON_FEATURES: DetailedFeature[] = [
  {
    id: 'inventory-management',
    title: 'Gestion d\'Inventaire en Temps Réel',
    description: 'Suivi en temps réel des niveaux de stock, mouvements d\'inventaire et emplacements de stockage pour une visibilité complète de votre chaîne d\'approvisionnement.',
    icon: 'lucide:package',
    benefits: [
      'Mise à jour automatique des niveaux de stock',
      'Traçabilité complète des mouvements d\'inventaire',
      'Localisation précise des articles en entrepôt',
      'Alertes de stock minimum et maximum',
      'Optimisation de la rotation des stocks',
      'Réduction des ruptures et surstocks'
    ],
    category: 'Inventory'
  },
  {
    id: 'warehouse-management',
    title: 'Gestion d\'Entrepôts Avancée',
    description: 'Gestion complète des entrepôts, zones de stockage et emplacements avec optimisation de l\'espace et des flux de marchandises.',
    icon: 'lucide:warehouse',
    benefits: [
      'Organisation optimale des zones de stockage',
      'Cartographie détaillée des emplacements',
      'Gestion multi-entrepôts centralisée',
      'Optimisation des parcours de préparation',
      'Configuration flexible des zones',
      'Maximisation de l\'utilisation de l\'espace'
    ],
    category: 'Warehouse'
  },
  {
    id: 'receiving-shipping',
    title: 'Réception et Expédition',
    description: 'Gestion efficace de la réception des marchandises et des expéditions avec contrôles qualité et traçabilité complète.',
    icon: 'lucide:truck',
    benefits: [
      'Processus de réception digitalisés',
      'Contrôle qualité automatisé',
      'Gestion des bons de livraison électroniques',
      'Optimisation des quais de chargement',
      'Traçabilité des transporteurs',
      'Intégration avec les systèmes logistiques'
    ],
    category: 'Operations'
  },
  {
    id: 'inventory-control',
    title: 'Contrôle d\'Inventaire',
    description: 'Gestion des inventaires physiques avec détection et traitement automatisé des écarts pour maintenir la précision des stocks.',
    icon: 'lucide:clipboard-check',
    benefits: [
      'Planification automatique des inventaires',
      'Détection intelligente des écarts',
      'Workflows d\'ajustement automatisés',
      'Analyses des causes d\'écarts',
      'Rapports de fiabilité des stocks',
      'Amélioration continue de la précision'
    ],
    category: 'Control'
  },
  {
    id: 'order-procurement',
    title: 'Gestion des Commandes',
    description: 'Module complet de gestion des commandes clients et d\'approvisionnement fournisseurs avec optimisation des flux.',
    icon: 'lucide:shopping-cart',
    benefits: [
      'Automatisation des commandes fournisseurs',
      'Optimisation des quantités d\'achat',
      'Gestion des délais de livraison',
      'Intégration EDI avec les partenaires',
      'Suivi en temps réel des commandes',
      'Analyses de performance fournisseurs'
    ],
    category: 'Procurement'
  },
  {
    id: 'lot-serial-tracking',
    title: 'Traçabilité Complète',
    description: 'Suivi complet des lots et numéros de série pour une traçabilité optimale et conformité réglementaire.',
    icon: 'lucide:scan-line',
    benefits: [
      'Traçabilité de bout en bout',
      'Conformité réglementaire automatisée',
      'Gestion des dates de péremption',
      'Rappels de produits facilités',
      'Historique complet des mouvements',
      'Intégration avec les systèmes qualité'
    ],
    category: 'Traceability'
  },
  {
    id: 'reporting-analytics',
    title: 'Analyses et Rapports',
    description: 'Tableaux de bord et rapports détaillés sur l\'inventaire, les mouvements de stock et les performances d\'entrepôt.',
    icon: 'lucide:bar-chart-3',
    benefits: [
      'Tableaux de bord en temps réel',
      'KPIs de performance personnalisables',
      'Analyses prédictives des tendances',
      'Rapports automatisés programmables',
      'Visualisations interactives',
      'Aide à la prise de décision stratégique'
    ],
    category: 'Analytics'
  }
];

// Kourtis specific features data
export const KOURTIS_FEATURES: DetailedFeature[] = [
  {
    id: 'reporting',
    title: 'Reporting & Analytics',
    description: 'Rapports détaillés sur tous les aspects de l\'activité d\'assurance, incluant les ventes de polices, interactions clients, sinistres et revenus.',
    icon: 'lucide:bar-chart-3',
    benefits: [
      'Aide à la prise de décisions éclairées',
      'Suivi des performances en temps réel',
      'Analyses predictives pour optimiser les ventes',
      'Tableaux de bord personnalisables',
      'Exports automatisés vers Excel et PDF'
    ],
    category: 'Analytics'
  },
  {
    id: 'administration',
    title: 'Administration',
    description: 'Gestion efficace des contrats, clients et polices, incluant le suivi des renouvellements, mises à jour et annulations.',
    icon: 'lucide:settings',
    benefits: [
      'Centralisation de toutes les données clients',
      'Automatisation des processus administratifs',
      'Gestion des cycles de vie des polices',
      'Notifications automatiques de renouvellement',
      'Historique complet des modifications'
    ],
    category: 'Management'
  },
  {
    id: 'settings',
    title: 'Configuration',
    description: 'Options de configuration sur mesure pour adapter l\'application aux besoins spécifiques de chaque courtier, agent ou banque.',
    icon: 'lucide:cog',
    benefits: [
      'Configuration des workflows métier',
      'Gestion des permissions et accès',
      'Paramétrage des règles de validation',
      'Personnalisation des interfaces',
      'Intégration avec systèmes existants'
    ],
    category: 'Customization'
  },
  {
    id: 'finance',
    title: 'Gestion Financière',
    description: 'Traitement des paiements, facturation et tâches comptables pour faciliter la gestion des aspects financiers.',
    icon: 'lucide:credit-card',
    benefits: [
      'Traitement automatisé des commissions',
      'Facturation électronique intégrée',
      'Réconciliation bancaire automatique',
      'Suivi des encaissements en temps réel',
      'Intégration comptable complète'
    ],
    category: 'Finance'
  },
  {
    id: 'dashboard',
    title: 'Tableau de Bord',
    description: 'Tableau de bord centralisé avec aperçu des indicateurs clés comme les ventes, revenus et engagement client.',
    icon: 'lucide:layout-dashboard',
    benefits: [
      'Vue d\'ensemble instantanée',
      'KPIs personnalisables par utilisateur',
      'Alertes et notifications intelligentes',
      'Graphiques interactifs en temps réel',
      'Accès mobile optimisé'
    ],
    category: 'Analytics'
  },
  {
    id: 'multi-portal',
    title: 'Multi-Portail',
    description: 'Portails multiples pour différentes parties prenantes : clients, agents et partenaires, permettant collaboration fluide.',
    icon: 'lucide:users',
    benefits: [
      'Portails dédiés par type d\'utilisateur',
      'Collaboration en temps réel',
      'Partage sécurisé de documents',
      'Communication centralisée',
      'Gestion des autorisations granulaires'
    ],
    category: 'Collaboration'
  },
  {
    id: 'digital',
    title: 'Plateforme Digitale',
    description: 'Plateforme numérique pour que les clients interagissent avec leurs polices, soumettent des sinistres et accèdent aux documents.',
    icon: 'lucide:smartphone',
    benefits: [
      'Interface client moderne et intuitive',
      'Soumission de sinistres en ligne',
      'Accès 24/7 aux documents et polices',
      'Notifications push automatiques',
      'Signature électronique intégrée'
    ],
    category: 'Digital'
  },
  {
    id: 'crm',
    title: 'CRM Intégré',
    description: 'Système CRM pour gérer les interactions clients, suivre les communications et construire des relations durables.',
    icon: 'lucide:heart-handshake',
    benefits: [
      'Historique complet des interactions',
      'Segmentation client avancée',
      'Campagnes marketing automatisées',
      'Scoring et qualification des prospects',
      'Suivi du pipeline commercial'
    ],
    category: 'CRM'
  },
  {
    id: 'document-management',
    title: 'Gestion Documentaire',
    description: 'Gestion complète de la documentation avec stockage électronique et capacités d\'impression pour tous types de documents.',
    icon: 'lucide:file-text',
    benefits: [
      'Stockage sécurisé dans le cloud',
      'Versioning automatique des documents',
      'Templates personnalisables',
      'Génération automatique de contrats',
      'Archivage intelligent et recherche avancée'
    ],
    category: 'Documentation'
  }
];