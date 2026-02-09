import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "contact", Component: ContactPage },
      { path: "services", Component: ServicesPage },
      { path: "products/:category", Component: ProductsPage },
      { path: "product/:id", Component: ProductDetailPage },
    ],
  },
], {
  basename: import.meta.env.BASE_URL, // Tự động lấy base path từ vite.config.ts
});
