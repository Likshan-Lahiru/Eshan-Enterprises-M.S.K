import React, { useState } from 'react';
import { FilterIcon } from 'lucide-react';
import { CategorySidebar } from '../components/CategorySidebar';
import { CategoryModal } from '../components/CategoryModal';
import { EquipmentGrid } from '../components/EquipmentGrid';
import { equipment } from '../data/equipmentData';
import { useQuotation } from '../hooks/useQuotation';
import { Equipment } from '../types';
export function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    addItem
  } = useQuotation();
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };
  const filteredEquipment = selectedCategories.length > 0 ? equipment.filter(item => selectedCategories.includes(item.category)) : equipment;
  const handleAddToQuotation = (equipment: Equipment, quantity: number, rentalDays: number) => {
    addItem(equipment, quantity, rentalDays);
  };
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <CategorySidebar selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
          </aside>
          <main className="flex-1 min-w-0">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Construction Equipment Hire
                </h1>
                <button onClick={() => setModalOpen(true)} className="lg:hidden bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" />
                  <span>Categories</span>
                  {selectedCategories.length > 0 && <span className="bg-red-700 px-2 py-0.5 rounded text-xs">
                      {selectedCategories.length}
                    </span>}
                </button>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Browse our complete range of construction equipment available
                for rent
              </p>
            </div>
            <EquipmentGrid equipment={filteredEquipment} onAddToQuotation={handleAddToQuotation} />
          </main>
        </div>
      </div>
      <CategoryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
    </div>;
}