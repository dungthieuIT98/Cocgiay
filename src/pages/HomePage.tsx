import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import Banner from '../components/Banner';
import { loadCSV, resolvePublicPath } from '../utils/csvLoader';

interface Category {
  id: string;
  name: string;
  count: number;
  parentId: string;
  image: string;
}

export function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const allCategories = await loadCSV<Category>('/data/categories.csv');
        // Lọc ra các categories chính (parentId = "null" hoặc rỗng) và loại bỏ "all"
        const mainCategories = allCategories.filter(
          (cat) => (cat.parentId === 'null' || cat.parentId === '') && cat.id !== 'all'
        );
        setCategories(mainCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <div>
      {/* Main Banner */}
      <section className="bg-blue-50 pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <Banner />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-green-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-row justify-center items-center gap-4">
            <Link
              to="/products/all"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2"
            >
              View all products
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors border-2 border-white"
            >
              Contact for quote
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Product Categories</h2>
          <p className="text-xl text-gray-600">
            Diverse products to meet all your needs
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={resolvePublicPath(category.image)}
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-800">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">High quality</h3>
              <p className="text-gray-600">
                Products meet food safety standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🚚
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast delivery</h3>
              <p className="text-gray-600">
                We offer reliable shipping services 24/7 to meet your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive prices</h3>
              <p className="text-gray-600">
                Best market prices, high discounts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
