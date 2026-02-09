# Hướng Dẫn Deploy Tự Động Lên GitHub Pages

## Bước 1: Chuẩn bị Repository trên GitHub

1. Tạo repository mới trên GitHub hoặc sử dụng repository hiện có
2. Push code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

## Bước 2: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Nhấp vào **Settings** (Cài đặt)
3. Trong menu bên trái, chọn **Pages**
4. Trong phần **Source**, chọn:
   - Source: **GitHub Actions**

## Bước 3: Cấu hình Base Path cho Vite

### Nếu repo của bạn là `username.github.io`:
Không cần thay đổi gì, website sẽ ở domain gốc.

### Nếu repo của bạn có tên khác (ví dụ: `cocgiay`):
Website sẽ ở `username.github.io/cocgiay`

Mở file `vite.config.ts` và thêm dòng `base`:

```typescript
export default defineConfig({
  base: '/REPO_NAME/',  // Thay REPO_NAME bằng tên repo của bạn
  plugins: [react()],
  // ... phần còn lại giữ nguyên
})
```

**Ví dụ:**
- Nếu repo là `cocgiay`, dùng: `base: '/cocgiay/'`
- Nếu repo là `username.github.io`, dùng: `base: '/'` (hoặc bỏ qua)

## Bước 4: Deploy

Sau khi hoàn thành các bước trên:

1. **Commit và push thay đổi** (nếu có sửa vite.config.ts):
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push
   ```

2. **GitHub Actions sẽ tự động chạy**:
   - Vào tab **Actions** trên repository để xem tiến trình
   - Quá trình build và deploy mất khoảng 2-3 phút

3. **Truy cập website**:
   - Sau khi deploy thành công, website sẽ có tại:
   - `https://USERNAME.github.io/REPO_NAME/`

## Cập Nhật Website

Mỗi khi bạn push code lên branch `main`, GitHub Actions sẽ tự động:
1. Build lại project
2. Deploy phiên bản mới lên GitHub Pages

```bash
git add .
git commit -m "Update website"
git push
```

## Kiểm Tra Lỗi

Nếu deploy thất bại:

1. Vào tab **Actions** trên GitHub
2. Nhấp vào workflow run màu đỏ
3. Xem logs để tìm lỗi
4. Các lỗi thường gặp:
   - **Build failed**: Kiểm tra code có lỗi syntax không
   - **Dependencies error**: Chạy `npm ci` local để test
   - **Pages not deploying**: Kiểm tra Settings > Pages đã bật chưa

## Các Tuỳ Chọn Deploy Khác

### 1. Vercel (Khuyến nghị - Dễ nhất)
1. Truy cập [vercel.com](https://vercel.com)
2. Import repository từ GitHub
3. Vercel tự động detect Vite và deploy
4. Domain: `project-name.vercel.app`

### 2. Netlify
1. Truy cập [netlify.com](https://netlify.com)
2. "Add new site" > "Import an existing project"
3. Chọn repository từ GitHub
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Domain: `project-name.netlify.app`

## Cấu Hình Custom Domain

Nếu bạn có domain riêng:

1. Vào **Settings > Pages** trên GitHub
2. Trong phần **Custom domain**, nhập domain của bạn
3. Thêm DNS records tại nhà cung cấp domain:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
   hoặc
   ```
   Type: CNAME
   Name: www
   Value: USERNAME.github.io
   ```

## Lưu Ý Quan Trọng

1. **Ảnh và tài nguyên tĩnh**: Đảm bảo tất cả đường dẫn sử dụng relative paths hoặc bắt đầu bằng `/`
2. **Routing**: Nếu sử dụng React Router, có thể cần thêm file `public/404.html` để handle client-side routing
3. **Environment variables**: Không commit file `.env` lên GitHub, sử dụng GitHub Secrets nếu cần

## Troubleshooting

### Trang trắng sau deploy
- Kiểm tra `base` trong `vite.config.ts` có đúng không
- Mở Console trong browser để xem lỗi

### CSS không load
- Đảm bảo paths trong CSS sử dụng relative paths
- Kiểm tra `base` config

### Images không hiển thị
- Đảm bảo ảnh trong thư mục `public/`
- Sử dụng paths bắt đầu bằng `/` (ví dụ: `/images/photo.jpg`)
