export interface Product {
  id: number;
  name: string;
  price: number | string; // Có thể là số hoặc "Contacts"
  image: string;
  category: string;
  description: string;
  material: string;
  capacity: string;
  Case_Pack: string; // Thông tin đóng thùng
  Pack_Size: string; // Thông tin đóng gói
}

export interface CartItem extends Product {
  quantity: number;
}
