import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Phone, Mail, Menu, X } from 'lucide-react';
import { resolvePublicPath } from '../utils/csvLoader';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/products/all', label: 'Sản phẩm' },
    { path: '/services', label: 'Về chúng tôi ' },
    { path: '/contact', label: 'Liên hệ' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-green-500">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>whatsapp: +84 0914.94.33.94</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail size={14} />
              <span>thunga.hoang@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img 
                src={resolvePublicPath('/images/anh_bia/logo.png')}
                alt="Logo VN PLASTIC" 
                className="h-16 w-28 object-cover ellipse-clip border-4 border-white shadow-lg 
                         transition-all duration-300 ease-in-out
                         group-hover:scale-110 group-hover:shadow-2xl group-hover:border-green-200"
              />
              <div className="absolute inset-0 ellipse-clip bg-gradient-to-br from-transparent to-green-900/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-3xl font-bold">VN PLASTIC SOURCING</h1>
              <p className="text-green-100 text-sm mt-1">Chất lượng cao - Giá cả hợp lý</p>
            </div>
          </Link>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold hover:text-green-200 transition-colors pb-1 ${
                  isActive(item.path) 
                    ? 'border-b-2 border-white' 
                    : 'border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-green-700 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-semibold ${
                  isActive(item.path)
                    ? 'bg-green-700'
                    : 'hover:bg-green-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}