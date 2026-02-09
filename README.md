
  # Website bán cốc nhựa

  Website bán hàng chuyên về cốc nhựa và đồ dùng nhất lần với giao diện hiện đại, dễ sử dụng.

  ## 🚀 Chạy dự án locally

  1. Cài đặt dependencies:
  ```bash
  npm install
  ```

  2. Chạy development server:
  ```bash
  npm run dev
  ```

  3. Mở browser tại `http://localhost:5173`

  ## 📦 Build cho production

  ```bash
  npm run build
  ```

  Xem preview build:
  ```bash
  npm run preview
  ```

  ## 🌐 Deploy tự động lên GitHub Pages

  Xem hướng dẫn chi tiết trong file [DEPLOYMENT.md](./DEPLOYMENT.md)

  ### Nhanh chóng:
  
  1. Push code lên GitHub
  2. Vào **Settings > Pages** trên repository
  3. Chọn Source: **GitHub Actions**
  4. Cập nhật `base` trong `vite.config.ts`:
     ```typescript
     base: '/TEN-REPO/',  // Thay TEN-REPO bằng tên repository của bạn
     ```
  5. Push thay đổi - GitHub Actions sẽ tự động deploy!

  ## 📂 Cấu trúc dự án

  ```
  ├── public/
  │   ├── data/           # CSV files (products, categories, banners)
  │   └── images/         # Tất cả hình ảnh
  ├── src/
  │   ├── components/     # React components
  │   ├── pages/          # Page components
  │   ├── utils/          # Utility functions
  │   └── styles/         # CSS files
  └── ...
  ```

  ## 🛠️ Tech Stack

  - **React 18** - UI library
  - **TypeScript** - Type safety
  - **Vite** - Build tool
  - **React Router** - Client-side routing
  - **TailwindCSS** - Styling
  - **Radix UI** - Accessible components
  - **Lucide React** - Icons

  ## 📝 Quản lý dữ liệu

  Dữ liệu sản phẩm và danh mục được lưu trong file CSV tại `public/data/`:
  - `products.csv` - Danh sách sản phẩm
  - `categories.csv` - Danh mục sản phẩm
  - `banners.csv` - Ảnh banner trang chủ

  Chỉnh sửa các file này để cập nhật sản phẩm mà không cần code!

  ## 🎨 Original Design

  Design gốc: [Figma](https://www.figma.com/design/FXsBkfpe2iNo5iu2FWpExR/Website-b%C3%A1n-c%E1%BB%91c-nh%E1%BB%B1a)
  
