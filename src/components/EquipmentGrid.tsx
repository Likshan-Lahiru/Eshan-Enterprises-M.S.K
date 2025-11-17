import React, { useState } from 'react';
import { SearchIcon, GridIcon, ListIcon } from 'lucide-react';
import { Equipment, SortOption, ViewMode } from '../types';
import { EquipmentCard } from './EquipmentCard';
interface EquipmentGridProps {
  equipment: Equipment[];
  onAddToQuotation: (equipment: Equipment, quantity: number, rentalDays: number) => void;
}
export function EquipmentGrid({
  equipment,
  onAddToQuotation
}: EquipmentGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('popularity');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const filteredAndSorted = equipment.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return a.dailyRate - b.dailyRate;
      case 'price-high':
        return b.dailyRate - a.dailyRate;
      default:
        return 0;
    }
  });
  return <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input type="text" placeholder="Search equipment..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <select value={sortOption} onChange={e => setSortOption(e.target.value as SortOption)} className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base">
              <option value="popularity">Sort by: Popularity</option>
              <option value="name-asc">Sort by: A-Z</option>
              <option value="price-low">Sort by: Price (Low to High)</option>
              <option value="price-high">Sort by: Price (High to Low)</option>
            </select>
            <div className="hidden sm:flex gap-2">
              <button onClick={() => setViewMode('grid')} className={`p-2 sm:p-2.5 rounded-md border ${viewMode === 'grid' ? 'bg-red-50 border-red-600 text-red-600' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
                <GridIcon className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 sm:p-2.5 rounded-md border ${viewMode === 'list' ? 'bg-red-50 border-red-600 text-red-600' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {filteredAndSorted.length === 0 ? <div className="text-center py-8 sm:py-12 bg-white border border-gray-200 rounded-lg">
          <p className="text-gray-600 text-sm sm:text-base">
            No equipment found matching your search.
          </p>
        </div> : <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6' : 'space-y-4'}>
          {filteredAndSorted.map(item => <EquipmentCard key={item.id} equipment={item} onAddToQuotation={onAddToQuotation} viewMode={viewMode} />)}
        </div>}
    </div>;
}