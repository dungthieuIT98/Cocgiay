import { ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Product } from '../types';
import { resolvePublicPath } from '../utils/csvLoader';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <div className="relative overflow-hidden h-56 bg-gray-100">
        <img
          src={resolvePublicPath(product.image)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        {/* <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.capacity}
        </div> */}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="text-gray-600 text-sm ml-1">(4.5)</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {product.material}
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            An toàn
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className=" font-bold text-green-600">
              {product.price.toLocaleString('vi-VN')}
            </span>
          </div>
          
          {/* <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <ShoppingCart size={18} />
            <span className="font-semibold">Thêm</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}