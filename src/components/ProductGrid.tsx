import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { loadCSV } from '../utils/csvLoader';
import type { Product } from '../types';

interface ProductGridProps {
  selectedCategory: string;
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ selectedCategory, onAddToCart }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadCSV<Product>('/data/products.csv').then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <p className="text-gray-600 mt-4">Đang tải sản phẩm...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedCategory === 'all' ? 'Tất cả sản phẩm' : 'Sản phẩm đã chọn'}
        </h2>
        <p className="text-gray-600 mt-1">{filteredProducts.length} sản phẩm</p>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">Không có sản phẩm trong danh mục này</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
