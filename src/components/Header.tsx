import { ShoppingCart, Phone, Mail } from 'lucide-react';
import { resolvePublicPath } from '../utils/csvLoader';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm border-b border-green-500">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>whatsapp: +84 0914.94.33.94</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>thunga.hoang@gmail.com</span>
            </div>
          </div>
          <div>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img 
              src={resolvePublicPath('/images/banners/logo.png')}
              alt="Logo Cốc Nhựa Việt" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold">Cốc Nhựa Việt</h1>
              <p className="text-green-100 text-sm mt-1">Chất lượng cao - Giá cả hợp lý</p>
            </div>
          </div>
          
          <button
            onClick={onCartClick}
            className="relative bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2 font-semibold"
          >
            <ShoppingCart size={20} />
            <span>Giỏ hàng</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
