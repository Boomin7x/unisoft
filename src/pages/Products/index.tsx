import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { Icon } from "@iconify/react";

const ProductsPage = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            Disponible
          </span>
        );
      case 'beta':
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            Bêta
          </span>
        );
      case 'coming-soon':
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
            Bientôt disponible
          </span>
        );
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return 'mdi:school';
      case 'E-commerce':
        return 'mdi:cart';
      case 'Juridique':
        return 'mdi:gavel';
      case 'Ressources Humaines':
        return 'mdi:account-group';
      case 'Collaboration':
        return 'mdi:account-multiple';
      default:
        return 'mdi:application';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de solutions logicielles conçues pour
            répondre aux besoins spécifiques de votre secteur d'activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon
                        icon={getCategoryIcon(product.category)}
                        className="w-6 h-6 text-blue-600"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                  </div>
                  {getStatusBadge(product.status)}
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Fonctionnalités clés :
                  </h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{product.features.length - 3} autres fonctionnalités
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/products/${product.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
                  >
                    En savoir plus
                    <Icon icon="mdi:arrow-right" className="w-4 h-4 ml-2" />
                  </Link>

                  {product.videos && product.videos.length > 0 && (
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon icon="mdi:play-circle" className="w-4 h-4 mr-1" />
                      {product.videos.length} vidéo{product.videos.length > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;