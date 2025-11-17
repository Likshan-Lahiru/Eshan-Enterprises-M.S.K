import React, { useState } from 'react';
import { XIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { categories } from '../data/equipmentData';
interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}
export function CategoryModal({
  isOpen,
  onClose,
  selectedCategories,
  onCategoryChange
}: CategoryModalProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]);
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="font-bold text-lg text-gray-900">
            Equipment Categories
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <XIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {categories.map(category => <div key={category.id} className="border-b border-gray-100 pb-2">
                <button onClick={() => toggleCategory(category.id)} className="flex items-center justify-between w-full text-left py-2 hover:bg-gray-50 rounded px-2">
                  <span className="font-medium text-sm text-gray-900">
                    {category.name}
                  </span>
                  {expandedCategories.includes(category.id) ? <ChevronUpIcon className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {expandedCategories.includes(category.id) && <div className="ml-4 mt-1 space-y-1">
                    {category.subcategories.map(subcategory => <label key={subcategory} className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded px-2">
                        <input type="checkbox" checked={selectedCategories.includes(category.name)} onChange={() => onCategoryChange(category.name)} className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">
                          {subcategory}
                        </span>
                      </label>)}
                  </div>}
              </div>)}
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button onClick={onClose} className="w-full bg-red-600 text-white px-4 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    </div>;
}