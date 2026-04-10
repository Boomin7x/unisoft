import { useParams, Link, Navigate } from "react-router-dom";
import { products } from "../../data/products";
import { Icon } from "@iconify/react";
import { useState } from "react";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
            Disponible
          </span>
        );
      case 'beta':
        return (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            Bêta
          </span>
        );
      case 'coming-soon':
        return (
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Accueil
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4 text-gray-400" />
            <Link to="/products" className="text-blue-600 hover:text-blue-800">
              Produits
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                <Icon
                  icon={getCategoryIcon(product.category)}
                  className="w-8 h-8 text-blue-600"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600">{product.category}</p>
              </div>
            </div>
            {getStatusBadge(product.status)}
          </div>

          <p className="text-lg text-gray-700 mb-6">
            {product.description}
          </p>

          <div className="prose max-w-none">
            <p className="text-gray-600">
              {product.longDescription}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Fonctionnalités
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      icon="mdi:check-circle"
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Videos section */}
          <div className="lg:col-span-2">
            {product.videos && product.videos.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Démonstrations vidéo
                </h2>

                {/* Video player */}
                {selectedVideo && (
                  <div className="mb-6">
                    <div className="aspect-video bg-black rounded-lg overflow-hidden">
                      <video
                        controls
                        className="w-full h-full"
                        src={`/vidoekampux/${selectedVideo}`}
                      >
                        Votre navigateur ne supporte pas la lecture vidéo.
                      </video>
                    </div>
                  </div>
                )}

                {/* Video list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.videos.map((video, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        selectedVideo === video.filename
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedVideo(video.filename)}
                    >
                      <div className="flex items-center mb-2">
                        <Icon
                          icon="mdi:play-circle"
                          className={`w-5 h-5 mr-2 ${
                            selectedVideo === video.filename
                              ? 'text-blue-600'
                              : 'text-gray-600'
                          }`}
                        />
                        <h3 className="font-medium text-gray-900">
                          {video.title}
                        </h3>
                      </div>
                      {video.description && (
                        <p className="text-sm text-gray-600">
                          {video.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Informations détaillées
                </h2>
                <div className="text-center py-12">
                  <Icon
                    icon="mdi:information-outline"
                    className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  />
                  <p className="text-gray-600">
                    Des informations détaillées et des démonstrations seront bientôt disponibles.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-blue-50 rounded-lg p-8 mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Intéressé par {product.name} ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez notre équipe pour obtenir plus d'informations ou planifier une démonstration personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon icon="mdi:email" className="w-5 h-5 mr-2" />
              Nous contacter
            </Link>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center">
              <Icon icon="mdi:calendar" className="w-5 h-5 mr-2" />
              Planifier une démo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;