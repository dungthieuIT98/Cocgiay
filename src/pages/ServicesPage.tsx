import { Package, Truck, Headphones, Award, Users, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Đa dạng sản phẩm',
    description: 'Cung cấp đầy đủ các loại cốc nhựa, bát, chén, khay, hộp đựng thực phẩm với nhiều kích thước và mẫu mã khác nhau.',
  },
  {
    icon: Truck,
    title: 'Giao hàng toàn quốc',
    description: 'Dịch vụ giao hàng nhanh chóng đến tận nơi trên toàn quốc. Miễn phí vận chuyển cho đơn hàng trên 500.000đ.',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ tư vấn nhiệt tình, sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của khách hàng bất cứ lúc nào.',
  },
  {
    icon: Award,
    title: 'Chất lượng đảm bảo',
    description: 'Tất cả sản phẩm đều đạt chuẩn an toàn thực phẩm, được kiểm định chất lượng nghiêm ngặt.',
  },
  {
    icon: Users,
    title: 'Giá sỉ cạnh tranh',
    description: 'Giá bán sỉ tốt nhất thị trường với chính sách chiết khấu hấp dẫn cho đơn hàng số lượng lớn.',
  },
  {
    icon: ShieldCheck,
    title: 'Đổi trả dễ dàng',
    description: 'Chính sách đổi trả linh hoạt trong vòng 7 ngày nếu sản phẩm có lỗi từ nhà sản xuất.',
  },
];

export function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dịch Vụ Của Chúng Tôi</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cam kết mang đến cho khách hàng những sản phẩm chất lượng cao và dịch vụ tốt nhất
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
          >
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <service.icon className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="bg-green-50 rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Tại Sao Chọn Chúng Tôi?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🏆 Kinh nghiệm lâu năm
            </h3>
            <p className="text-gray-600 mb-6">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực cung cấp đồ dùng nhất lần, chúng tôi hiểu rõ nhu cầu của khách hàng và luôn đáp ứng đúng yêu cầu.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🌱 Thân thiện môi trường
            </h3>
            <p className="text-gray-600">
              Chúng tôi ưu tiên các sản phẩm thân thiện với môi trường, có thể tái chế và phân hủy sinh học.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              💯 Đối tác tin cậy
            </h3>
            <p className="text-gray-600 mb-6">
              Phục vụ hơn 1000+ nhà hàng, quán cafe, khách sạn và các doanh nghiệp trên toàn quốc.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎯 Tùy chỉnh theo yêu cầu
            </h3>
            <p className="text-gray-600">
              Hỗ trợ in logo, thiết kế theo yêu cầu riêng của khách hàng với số lượng lớn.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Sẵn Sàng Hợp Tác Cùng Chúng Tôi?
        </h2>
        <p className="text-xl mb-8 text-green-50">
          Liên hệ ngay để nhận báo giá và tư vấn miễn phí
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
          >
            Liên hệ ngay
          </a>
          <a
            href="tel:0123456789"
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors border-2 border-white"
          >
            Gọi: 0123-456-789
          </a>
        </div>
      </section>
    </div>
  );
}
