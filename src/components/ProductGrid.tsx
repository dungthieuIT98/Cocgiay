import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { loadCSV } from '../utils/csvLoader';
import type { Product } from '../types';

interface ProductGridProps {
  selectedCategory: string;
  onAddToCart: (product: Product) => void;
}

interface Category {
  id: string;
  name: string;
  count: number;
  parentId?: string;
}

export function ProductGrid({ selectedCategory, onAddToCart }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [nameFilter, setNameFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      loadCSV<Product>('/data/products.csv'),
      loadCSV<Category>('/data/categories.csv')
    ]).then(([productData, categoryData]) => {
      setProducts(productData);
      setCategories(categoryData);
      setLoading(false);
    });
  }, []);

  const childCategoryIds = categories
    .filter(category => category.parentId === selectedCategory)
    .map(category => category.id);

  // First filter by category from URL params
  let filteredProducts = selectedCategory === 'all'
    ? products
    : childCategoryIds.length > 0
      ? products.filter(product => childCategoryIds.includes(product.category))
      : products.filter(product => product.category === selectedCategory);

  // Then apply LIKE-style filters
  if (nameFilter.trim()) {
    const searchTerm = nameFilter.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm)
    );
  }

  if (sizeFilter.trim()) {
    const searchTerm = sizeFilter.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.capacity?.toLowerCase().includes(searchTerm)
    );
  }

  if (categoryFilter.trim()) {
    const searchTerm = categoryFilter.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.category.toLowerCase().includes(searchTerm)
    );
  }

  // Pagination logic
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [nameFilter, sizeFilter, categoryFilter, selectedCategory]);

  const selectedCategoryName = selectedCategory === 'all' 
    ? 'All products'
    : categories.find(cat => cat.id === selectedCategory)?.name || 'Selected products';

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <p className="text-gray-600 mt-4">Loading products...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '10px' }}>
      {/* Filter Section */}
      {/* <div className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Search filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="nameFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Product name
            </label>
            <input
              id="nameFilter"
              type="text"
              placeholder="Search by name..."
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label htmlFor="sizeFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Capacity / Size
            </label>
            <input
              id="sizeFilter"
              type="text"
              placeholder="Search by capacity..."
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Category code
            </label>
            <input
              id="categoryFilter"
              type="text"
              placeholder="Search by category code..."
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        
        {(nameFilter || sizeFilter || categoryFilter) && (
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Found <span className="font-semibold text-green-600">{filteredProducts.length}</span> products
            </p>
            <button
              onClick={() => {
                setNameFilter('');
                setSizeFilter('');
                setCategoryFilter('');
              }}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div> */}

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">No products in this category</p>
        </div>
      ) : (
        <>
          {/* Products per page selector */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{startIndex + 1}</span> - <span className="font-semibold">{Math.min(endIndex, totalProducts)}</span> of <span className="font-semibold">{totalProducts}</span> products
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
                Products per page:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value={9}>9</option>
                <option value={18}>18</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
<br /><br />
          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                  // Show first, last, current, and adjacent pages
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          currentPage === page
                            ? 'bg-green-600 text-white border-green-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return <span key={page} className="px-2">...</span>;
                  }
                  return null;
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
