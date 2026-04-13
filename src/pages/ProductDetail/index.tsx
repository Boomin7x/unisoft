import { useParams, Link, Navigate } from "react-router-dom";
import { products } from "../../data/products";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { FeatureShowcase, KOURTIS_FEATURES, ECHELON_FEATURES } from "./components/FeatureShowcase";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-emerald-600 bg-emerald-50';
      case 'beta':
        return 'text-blue-600 bg-blue-50';
      case 'coming-soon':
        return 'text-amber-600 bg-amber-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Disponible';
      case 'beta':
        return 'Bêta';
      case 'coming-soon':
        return 'Bientôt';
      default:
        return status;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return 'lucide:graduation-cap';
      case 'E-commerce':
        return 'lucide:shopping-cart';
      case 'Juridique':
        return 'lucide:scale';
      case 'Insurance Management':
        return 'lucide:shield-check';
      case 'Gestion d\'Inventaire':
        return 'lucide:package';
      case 'Ressources Humaines':
        return 'lucide:users';
      case 'Collaboration':
        return 'lucide:users-2';
      default:
        return 'lucide:app-window';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              Accueil
            </Link>
            <Icon icon="lucide:chevron-right" className="w-4 h-4" />
            <Link to="/products" className="hover:text-gray-900 transition-colors">
              Produits
            </Link>
            <Icon icon="lucide:chevron-right" className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Clean Product Header */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center">
              <Icon
                icon={getCategoryIcon(product.category)}
                className="w-10 h-10 text-gray-700"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <h1 className="text-4xl font-light text-gray-900">
                  {product.name}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(product.status)}`}>
                  {getStatusText(product.status)}
                </span>
              </div>
              <p className="text-gray-500 text-lg">{product.category}</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              {product.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        </div>

        {/* Enhanced Features for Special Products */}
        {product.id === 'kourtis' || product.id === 'echelon' ? (
          <div className="mb-20">
            <FeatureShowcase
              productName={product.name}
              features={product.id === 'kourtis' ? KOURTIS_FEATURES : ECHELON_FEATURES}
              className="border border-gray-100 rounded-3xl shadow-sm"
            />
          </div>
        ) : (
          /* Standard Features */
          <div className="mb-20">
            <h2 className="text-2xl font-light text-gray-900 mb-8">
              Fonctionnalités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clean Video Section */}
        {product.videos && product.videos.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-light text-gray-900 mb-8">
              Démonstrations
            </h2>

            {/* Video Player */}
            {selectedVideo && (
              <div className="mb-8">
                <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-lg">
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

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVideo(video.filename)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-200 hover:shadow-md ${
                    selectedVideo === video.filename
                      ? 'border-blue-200 bg-blue-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      selectedVideo === video.filename
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon icon="lucide:play" className="w-4 h-4" />
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">
                      {video.title}
                    </h3>
                  </div>
                  {video.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Minimal CTA */}
        <div className="border border-gray-100 rounded-3xl p-12 text-center bg-gray-50/50">
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            Découvrir {product.name}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez notre équipe pour obtenir plus d'informations ou planifier une démonstration personnalisée de cette solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@univ-soft.com"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-2xl hover:bg-gray-800 transition-colors font-medium"
            >
              <Icon icon="lucide:mail" className="w-4 h-4" />
              Nous contacter
            </a>
            <button className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-2xl hover:bg-gray-50 transition-colors font-medium">
              <Icon icon="lucide:calendar" className="w-4 h-4" />
              Planifier une démo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;