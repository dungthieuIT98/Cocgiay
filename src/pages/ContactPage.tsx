import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Liên Hệ Với Chúng Tôi</h1>
        <p className="text-xl text-gray-600">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gửi Tin Nhắn</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Số điện thoại
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="0123-456-789"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nội dung
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Nhập nội dung tin nhắn..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Gửi tin nhắn
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Điện thoại</h3>
                  <p className="text-gray-600">0123-456-789</p>
                  <p className="text-gray-600">0987-654-321</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@cocnhua.vn</p>
                  <p className="text-gray-600">support@cocnhua.vn</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Địa chỉ</h3>
                  <p className="text-gray-600">
                    123 Đường ABC, Phường XYZ<br />
                    Quận 1, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Giờ làm việc</h3>
                  <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                  <p className="text-gray-600">Thứ 7 - Chủ nhật: 9:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bản Đồ</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Google Maps sẽ hiển thị ở đây</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
