# ✅ Checklist Deploy GitHub Pages

Làm theo thứ tự sau để deploy thành công:

## 1. Chuẩn bị Git Repository

- [ ] Đã tạo repository trên GitHub
- [ ] Đã push code lên GitHub:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/USERNAME/REPO_NAME.git
  git push -u origin main
  ```

## 2. Cấu hình Vite

- [ ] Mở file `vite.config.ts`
- [ ] Uncomment và sửa dòng `base`:
  ```typescript
  base: '/REPO_NAME/',  // Thay REPO_NAME bằng tên repo thực
  ```
  - ⚠️ Ví dụ: nếu repo tên `cocgiay` thì `base: '/cocgiay/'`
  - ⚠️ Nếu repo tên `username.github.io` thì `base: '/'`

## 3. Bật GitHub Pages

Trên trang repository GitHub:

- [ ] Vào tab **Settings**
- [ ] Chọn **Pages** ở menu bên trái
- [ ] Trong **Source**, chọn: **GitHub Actions**

## 4. Push Thay Đổi

- [ ] Commit và push thay đổi:
  ```bash
  git add .
  git commit -m "Configure for GitHub Pages"
  git push
  ```

## 5. Chờ Deploy

- [ ] Vào tab **Actions** trên GitHub
- [ ] Chờ workflow chạy xong (2-3 phút)
- [ ] Kiểm tra có lỗi gì không

## 6. Kiểm tra Website

- [ ] Truy cập: `https://USERNAME.github.io/REPO_NAME/`
- [ ] Test các tính năng:
  - [ ] Trang chủ hiển thị đúng
  - [ ] Banner carousel hoạt động
  - [ ] Danh mục sản phẩm load được
  - [ ] Chi tiết sản phẩm mở được
  - [ ] Ảnh hiển thị đầy đủ

## 🆘 Nếu Có Lỗi

### Trang trắng hoặc không load
1. Kiểm tra `base` trong `vite.config.ts` có đúng không
2. Mở DevTools (F12) > Console để xem lỗi
3. Kiểm tra tab Actions trên GitHub có lỗi không

### Ảnh không hiển thị
1. Đảm bảo ảnh trong thư mục `public/images/`
2. Đường dẫn bắt đầu bằng `/` (ví dụ: `/images/photo.jpg`)

### CSS bị lỗi
1. Clear cache browser (Ctrl+Shift+R)
2. Kiểm tra lại `base` config

## 🎉 Thành Công!

Website đã live tại: `https://USERNAME.github.io/REPO_NAME/`

### Cập nhật sau này:
Chỉ cần push code lên main branch:
```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions sẽ tự động deploy lại!

---

**📚 Chi tiết hơn:** Xem file [DEPLOYMENT.md](./DEPLOYMENT.md)
