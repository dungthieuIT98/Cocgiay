import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { List } from 'lucide-react';
import { loadCSV } from '../utils/csvLoader';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategorySidebarProps {
  selectedCategory: string;
}

export function CategorySidebar({ selectedCategory }: CategorySidebarProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadCSV<Category>('/data/categories.csv').then(data => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
        <List className="text-green-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Danh mục sản phẩm</h2>
      </div>
      
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category.id}>
            <Link
              to={`/products/${category.id}`}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-50 text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-green-500'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
