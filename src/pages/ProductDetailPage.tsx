import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ShoppingCart, Star, ArrowLeft, Check, Package, Layers, Box } from 'lucide-react';
import type { Product } from '../types';
import { loadCSV, resolvePublicPath } from '../utils/csvLoader';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const products = await loadCSV<Product>('/data/products.csv');
        const foundProduct = products.find((p) => p.id === Number(id));
        setProduct(foundProduct || null);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setAddedToCart(true);
    
    // Dispatch custom event to update cart count
    window.dispatchEvent(new Event('cartUpdated'));

    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Không tìm thấy sản phẩm
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="font-semibold">Quay lại</span>
      </button>
      
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
          {/* Product Image */}
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden h-full">
            <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 h-full">
              <img
                src={resolvePublicPath(product.image)}
                alt={product.name}
                className="w-5/6 h-auto object-cover transition-transform duration-500 hover:scale-105 mx-auto"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/5" />

              {/* Material badge
              <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur">
                {product.material}
              </div> */}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 h-full max-h-[36rem] overflow-y-auto">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600">(4.5/5 - 128 đánh giá)</span>
              </div>

              {/* Price */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 mb-1 font-bold">Giá bán</div>
                <div className="text-4xl font-bold text-green-600">
                   {product.price.toLocaleString('vi-VN')}
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Mô tả sản phẩm</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Product Specifications */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Thông số kỹ thuật</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Mã sản phẩm</span>
                  <span className="text-gray-800 font-semibold">#{product.id}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Chất liệu</span>
                  <span className="text-gray-800 font-semibold">{product.material}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Dung tích</span>
                  <span className="text-gray-800 font-semibold">{product.capacity}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Danh mục</span>
                  <span className="text-gray-800 font-semibold capitalize">
                    {product.category.replace(/-/g, ' ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Packaging Information */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Thông tin đóng gói</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Box className="text-green-600" size={20} />
                    <span className="text-sm text-gray-600 font-medium">Đóng thùng</span>
                  </div>
                  <div className="text-lg font-bold text-gray-800">
                    {product.Case_Pack}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="text-green-600" size={20} />
                    <span className="text-sm text-gray-600 font-medium">Đóng gói</span>
                  </div>
                  <div className="text-lg font-bold text-gray-800">
                    {product.Pack_Size}
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Đặc điểm nổi bật</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">An toàn cho sức khỏe</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Thân thiện với môi trường</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Chất lượng cao, bền đẹp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Phù hợp cho nhiều mục đích sử dụng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}