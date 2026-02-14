import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { loadCSV } from '../utils/csvLoader';

interface Category {
  id: string;
  name: string;
  count: number;
  parentId: string;
  image: string;
}

export function Footer() {
  const [categories, setCategories] = useState<Category[]>([]);

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
      }
    };

    loadCategories();
  }, []);
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">VN PLASTIC SOURCING</h3>
            <p className="text-gray-300 mb-4">
              High-quality disposable supplies provider, serving thousands of customers nationwide.
            </p>
            <div className="flex gap-3">
            
              {/* <a href="#" className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors">
                <Phone size={20} />
              </a>
             */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/products/all" className="text-gray-300 hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Product categories</h4>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <Link to={`/products/${category.id}`} className="text-gray-300 hover:text-green-400 transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                 37 DC 13 Street - Tan Binh Industrial Park - Tay Thanh Ward - Tan Phu District - Ho Chi Minh City
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-green-400 flex-shrink-0" />
                <a href="tel:0123456789" className="text-gray-300 hover:text-green-400 transition-colors">
                  whatsapp: +84 0914.94.33.94
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-green-400 flex-shrink-0" />
                <a href="mailto:thunga.hoang@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  thunga.hoang@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Plastic Cups Vietnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
