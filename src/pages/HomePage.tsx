import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'ong-hut-giay',
    name: 'Ống hút giấy',
    image: 'https://images.unsplash.com/photo-1563171522-757f89d8cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMHN0cmF3cyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MDIxOTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bat-giay',
    name: 'Bát giấy, tô giấy',
    image: 'https://images.unsplash.com/photo-1597514402413-17eac2b501c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29udGFpbmVycyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NzAyMTk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bat-nhua',
    name: 'Bát nhựa, tô nhựa',
    image: 'https://images.unsplash.com/photo-1545165929-dced88ec03a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNwb3NhYmxlJTIwcGxhc3RpYyUyMGN1cHxlbnwxfHx8fDE3NzAyMTk0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'chen-giay',
    name: 'Chén giấy',
    image: 'https://images.unsplash.com/photo-1597514402413-17eac2b501c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29udGFpbmVycyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NzAyMTk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'chen-nhua',
    name: 'Chén nhựa',
    image: 'https://images.unsplash.com/photo-1730273999506-6ac5dc4ef1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwY3VwJTIwZHJpbmt8ZW58MXx8fHwxNzcwMjE5NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'khay-giay',
    name: 'Khay giấy',
    image: 'https://images.unsplash.com/photo-1751163781124-85bd6628de1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aW5nJTIwdHJheXMlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NzAyMTk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'khay-nhua',
    name: 'Khay nhựa',
    image: 'https://images.unsplash.com/photo-1586574086326-f440257bc11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwY3VwcyUyMGZhY3RvcnklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MDIxOTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'khay-xop',
    name: 'Khay xốp',
    image: 'https://images.unsplash.com/photo-1751163781124-85bd6628de1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aW5nJTIwdHJheXMlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NzAyMTk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'khay-nhom',
    name: 'Khay nhôm',
    image: 'https://images.unsplash.com/photo-1751163781124-85bd6628de1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aW5nJTIwdHJheXMlMjBjYXRlcmluZ3xlbnwxfHx8fDE3NzAyMTk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'hop-giay',
    name: 'Hộp giấy',
    image: 'https://images.unsplash.com/photo-1767562678474-c92cec881bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWtlYXdheSUyMGZvb2QlMjBib3hlc3xlbnwxfHx8fDE3NzAyMTk3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'hop-nhua',
    name: 'Hộp nhựa',
    image: 'https://images.unsplash.com/photo-1597514402413-17eac2b501c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29udGFpbmVycyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NzAyMTk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'hop-xop',
    name: 'Hộp xốp',
    image: 'https://images.unsplash.com/photo-1767562678474-c92cec881bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWtlYXdheSUyMGZvb2QlMjBib3hlc3xlbnwxfHx8fDE3NzAyMTk3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HomePage() {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-[500px] bg-gradient-to-r from-green-600 to-green-400 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586574086326-f440257bc11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwY3VwcyUyMGZhY3RvcnklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MDIxOTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cốc Nhựa & Đồ Dùng Nhất Lần Chất Lượng Cao
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Giải pháp hoàn hảo cho nhà hàng, quán cafe, tiệc tùng và sự kiện
            </p>
            <div className="flex gap-4">
              <Link
                to="/products/all"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                Xem sản phẩm
                <ChevronRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors border-2 border-white"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Danh Mục Sản Phẩm</h2>
          <p className="text-xl text-gray-600">
            Đa dạng sản phẩm đáp ứng mọi nhu cầu của bạn
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={category.image}
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
      </section>

      {/* Features Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chất lượng cao</h3>
              <p className="text-gray-600">
                Sản phẩm đạt chuẩn an toàn thực phẩm
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🚚
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Giao hàng nhanh</h3>
              <p className="text-gray-600">
                Miễn phí vận chuyển đơn hàng trên 500.000đ
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Giá cạnh tranh</h3>
              <p className="text-gray-600">
                Giá tốt nhất thị trường, chiết khấu cao
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
