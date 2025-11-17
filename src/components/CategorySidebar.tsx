import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { categories } from '../data/equipmentData';
interface CategorySidebarProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}
export function CategorySidebar({
  selectedCategories,
  onCategoryChange,
  isOpen,
  onToggle
}: CategorySidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]);
  };
  if (!isOpen) {
    return <button onClick={onToggle} className="hidden lg:block fixed left-4 top-24 bg-white border border-gray-200 rounded-md px-4 shadow-sm hover:shadow-md transition-shadow z-40 text-base py-2">
        Show Categories
      </button>;
  }
  return <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-900">
          Equipment Categories
        </h3>
        <button onClick={onToggle} className="text-sm text-gray-600 hover:text-gray-900">
          Hide
        </button>
      </div>
      <div className="space-y-2">
        {categories.map(category => <div key={category.id} className="border-b border-gray-100 pb-2">
            <button onClick={() => toggleCategory(category.id)} className="flex items-center justify-between w-full text-left py-2 hover:bg-gray-50 rounded px-2">
              <span className="font-medium text-sm text-gray-900">
                {category.name}
              </span>
              {expandedCategories.includes(category.id) ? <ChevronUpIcon className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDownIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />}
            </button>
            {expandedCategories.includes(category.id) && <div className="ml-4 mt-1 space-y-1">
                {category.subcategories.map(subcategory => <label key={subcategory} className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-50 rounded px-2">
                    <input type="checkbox" checked={selectedCategories.includes(category.name)} onChange={() => onCategoryChange(category.name)} className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{subcategory}</span>
                  </label>)}
              </div>}
          </div>)}
      </div>
    </div>;
}