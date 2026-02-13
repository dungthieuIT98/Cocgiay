import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ChevronRight, List } from 'lucide-react';
import { loadCSV } from '../utils/csvLoader';

interface Category {
  id: string;
  name: string;
  count: number;
  parentId?: string | null;
}

interface CategorySidebarProps {
  selectedCategory: string;
}

interface CategoryNode extends Category {
  children: CategoryNode[];
}

export function CategorySidebar({ selectedCategory }: CategorySidebarProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [openLevels, setOpenLevels] = useState<string[]>([]);

  useEffect(() => {
    loadCSV<Category>('/data/categories.csv').then(data => {
      setCategories(data);
    });
  }, []);

  const { roots, parentById, childrenById } = useMemo(() => {
    const mapById = new Map<string, CategoryNode>();
    const parentMap: Record<string, string | null> = {};
    const childrenMap: Record<string, CategoryNode[]> = {};

    categories.forEach(category => {
      mapById.set(category.id, { ...category, children: [] });
      parentMap[category.id] = category.parentId ?? null;
      childrenMap[category.id] = [];
    });

    const rootsList: CategoryNode[] = [];
    mapById.forEach(node => {
      const parentId = node.parentId ?? null;
      if (parentId && mapById.has(parentId)) {
        const parent = mapById.get(parentId);
        if (parent) {
          parent.children.push(node);
          childrenMap[parentId].push(node);
        }
      } else {
        rootsList.push(node);
      }
    });

    const sortTree = (nodes: CategoryNode[]) => {
      nodes.sort((a, b) => a.name.localeCompare(b.name));
      nodes.forEach(node => sortTree(node.children));
    };
    sortTree(rootsList);

    return { roots: rootsList, parentById: parentMap, childrenById: childrenMap };
  }, [categories]);

  const selectedPath = useMemo(() => {
    if (!selectedCategory || !parentById[selectedCategory]) {
      return selectedCategory ? [selectedCategory] : [];
    }
    const path: string[] = [];
    let current: string | null = selectedCategory;
    const visited = new Set<string>();

    while (current && !visited.has(current)) {
      visited.add(current);
      path.unshift(current);
      current = parentById[current] ?? null;
    }

    return path;
  }, [parentById, selectedCategory]);

  const activePath = useMemo(() => new Set(selectedPath), [selectedPath]);

  useEffect(() => {
    if (!selectedCategory) {
      setOpenLevels([]);
      return;
    }

    setOpenLevels(() => {
      if (selectedPath.length === 0) return [];
      if (selectedPath.length === 1) {
        const nodeId = selectedPath[0];
        return childrenById[nodeId]?.length ? [nodeId] : [];
      }

      return selectedPath.slice(0, -1);
    });
  }, [childrenById, selectedCategory, selectedPath]);

  const handleToggle = (id: string, depth: number) => {
    setOpenLevels(prev => {
      const next = prev.slice(0, depth);
      if (prev[depth] === id) {
        return next;
      }
      next[depth] = id;
      return next;
    });
  };

  const renderCategory = (node: CategoryNode, depth = 0) => {
    const hasChildren = node.children.length > 0;
    const isOpen = openLevels[depth] === node.id;
    const isActive = activePath.has(node.id);
    const isRoot = depth === 0;

    return (
      <li key={node.id} className={`category-menu-node ${isRoot ? 'category-menu-node-root' : ''}`}>
        {hasChildren ? (
          <button
            type="button"
            className={`category-menu-row category-menu-row-button ${isActive ? 'active' : ''}`}
            onClick={() => handleToggle(node.id, depth)}
            aria-expanded={isOpen}
            aria-controls={`category-children-${node.id}`}
          >
            <span className="category-menu-toggle">
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>

            <span className={`category-menu-link ${isActive ? 'category-menu-link-active' : ''} ${isRoot ? 'category-menu-link-root' : ''}`}>
              <span className="category-menu-label">{node.name}</span>
              {/* <span className={`category-menu-count ${isActive ? 'category-menu-count-active' : ''}`}>
                ({node.count})
              </span> */}
            </span>
          </button>
        ) : (
          <div className="category-menu-row">
            <span className="category-menu-toggle-placeholder" aria-hidden="true" />

            <Link
              to={`/products/${node.id}`}
              className={`category-menu-link ${isActive ? 'category-menu-link-active' : ''} ${isRoot ? 'category-menu-link-root' : ''}`}
            >
              <span className="category-menu-label">{node.name}</span>
              {/* <span className={`category-menu-count ${isActive ? 'category-menu-count-active' : ''}`}>
                ({node.count})
              </span> */}
            </Link>
          </div>
        )}

        {hasChildren ? (
          <ul
            id={`category-children-${node.id}`}
            className={`category-children ${isOpen ? 'open' : ''}`}
          >
            {node.children.map(child => renderCategory(child, depth + 1))}
          </ul>
        ) : null}
      </li>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
        <List className="text-green-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Product categories</h2>
      </div>

      <ul className="category-menu">
        {roots.map(category => renderCategory(category))}
      </ul>
    </div>
  );
}
