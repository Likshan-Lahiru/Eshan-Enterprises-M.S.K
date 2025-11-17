import React, { useState } from 'react';
import { Equipment } from '../types';
import { CheckCircleIcon } from 'lucide-react';
interface EquipmentCardProps {
  equipment: Equipment;
  onAddToQuotation: (equipment: Equipment, quantity: number, rentalDays: number) => void;
  viewMode: 'grid' | 'list';
}
export function EquipmentCard({
  equipment,
  onAddToQuotation,
  viewMode
}: EquipmentCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [rentalDays, setRentalDays] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleAdd = () => {
    onAddToQuotation(equipment, quantity, rentalDays);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };
  const availabilityColor = {
    Available: 'bg-green-100 text-green-800',
    'Limited Stock': 'bg-yellow-100 text-yellow-800',
    'Out of Stock': 'bg-red-100 text-red-800'
  };
  if (viewMode === 'list') {
    return <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-3 sm:gap-4">
        <img src={equipment.image} alt={equipment.name} className="w-full h-48 sm:w-32 sm:h-32 object-cover rounded-md flex-shrink-0" />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
            <div className="flex-1">
              <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs font-medium rounded mb-2">
                {equipment.category}
              </span>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">
                {equipment.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {equipment.description}
              </p>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded self-start ${availabilityColor[equipment.availability]}`}>
              {equipment.availability}
            </span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
            From Rs. {equipment.dailyRate.toLocaleString()} / day
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-3">
            <div className="flex gap-3 flex-1">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input type="number" min="1" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Rental Days
                </label>
                <input type="number" min="1" value={rentalDays} onChange={e => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
              </div>
            </div>
            <button onClick={handleAdd} disabled={equipment.availability === 'Out of Stock'} className="w-full sm:w-auto bg-white border-2 border-red-600 text-red-600 px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-red-50 transition-colors disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base">
              {showSuccess && <CheckCircleIcon className="w-4 h-4" />}
              {showSuccess ? 'Added!' : 'Add to Quotation'}
            </button>
          </div>
        </div>
      </div>;
  }
  return <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <img src={equipment.image} alt={equipment.name} className="w-full h-48 object-cover" />
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs font-medium rounded">
            {equipment.category}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded ${availabilityColor[equipment.availability]}`}>
            {equipment.availability}
          </span>
        </div>
        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
          {equipment.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3">
          {equipment.description}
        </p>
        <p className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          From Rs. {equipment.dailyRate.toLocaleString()} / day
        </p>
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input type="number" min="1" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Days
              </label>
              <input type="number" min="1" value={rentalDays} onChange={e => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
            </div>
          </div>
          <button onClick={handleAdd} disabled={equipment.availability === 'Out of Stock'} className="w-full bg-white border-2 border-red-600 text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-50 transition-colors disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base">
            {showSuccess && <CheckCircleIcon className="w-4 h-4" />}
            {showSuccess ? 'Added!' : 'Add to Quotation'}
          </button>
        </div>
      </div>
    </div>;
}