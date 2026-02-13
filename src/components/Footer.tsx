import { Link } from 'react-router';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🥤 Cốc Nhựa Việt</h3>
            <p className="text-gray-300 mb-4">
              Đơn vị cung cấp đồ dùng nhất lần chất lượng cao, phục vụ hàng nghìn khách hàng trên toàn quốc.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/products/all" className="text-gray-300 hover:text-green-400 transition-colors">
                  Sản phẩm
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Danh mục sản phẩm</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/ong-hut-giay" className="text-gray-300 hover:text-green-400 transition-colors">
                  Ống hút giấy
                </Link>
              </li>
              <li>
                <Link to="/products/bat-nhua" className="text-gray-300 hover:text-green-400 transition-colors">
                  Bát nhựa
                </Link>
              </li>
              <li>
                <Link to="/products/chen-giay" className="text-gray-300 hover:text-green-400 transition-colors">
                  Chén giấy
                </Link>
              </li>
              <li>
                <Link to="/products/hop-giay" className="text-gray-300 hover:text-green-400 transition-colors">
                  Hộp giấy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  37 DC 13-Tây thạnh tân phú-TPHCM
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-green-400 flex-shrink-0" />
                <a href="tel:0123456789" className="text-gray-300 hover:text-green-400 transition-colors">
                  whatapps: +84091493394
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
          <p>&copy; 2026 Cốc Nhựa Việt. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
