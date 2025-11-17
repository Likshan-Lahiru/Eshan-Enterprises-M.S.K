import React from 'react';
import { TrashIcon } from 'lucide-react';
import { QuotationItem } from '../types';
interface QuotationTableProps {
  items: QuotationItem[];
  onUpdateItem: (equipmentId: string, quantity: number, rentalDays: number) => void;
  onRemoveItem: (equipmentId: string) => void;
  subtotal: number;
  tax: number;
  total: number;
}
export function QuotationTable({
  items,
  onUpdateItem,
  onRemoveItem,
  subtotal,
  tax,
  total
}: QuotationTableProps) {
  if (items.length === 0) {
    return <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-12 text-center">
        <p className="text-gray-600 text-base sm:text-lg">
          Your quotation is empty.
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Add equipment from the home page to get started.
        </p>
      </div>;
  }
  return <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                Rate
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                Qty
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                Days
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map(item => {
            const lineTotal = item.equipment.dailyRate * item.quantity * item.rentalDays;
            return <tr key={item.equipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={item.equipment.image} alt={item.equipment.name} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {item.equipment.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.equipment.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.equipment.category}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900 text-sm">
                    {item.equipment.dailyRate.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input type="number" min="1" value={item.quantity} onChange={e => onUpdateItem(item.equipment.id, Math.max(1, parseInt(e.target.value) || 1), item.rentalDays)} className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input type="number" min="1" value={item.rentalDays} onChange={e => onUpdateItem(item.equipment.id, item.quantity, Math.max(1, parseInt(e.target.value) || 1))} className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900 text-sm">
                    {lineTotal.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button onClick={() => onRemoveItem(item.equipment.id)} className="text-red-600 hover:text-red-800">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>;
          })}
          </tbody>
        </table>
      </div>
      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-200">
        {items.map(item => {
        const lineTotal = item.equipment.dailyRate * item.quantity * item.rentalDays;
        return <div key={item.equipment.id} className="p-4">
              <div className="flex gap-3 mb-3">
                <img src={item.equipment.image} alt={item.equipment.name} className="w-20 h-20 object-cover rounded flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    {item.equipment.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    {item.equipment.category}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    Rs. {item.equipment.dailyRate.toLocaleString()} / day
                  </p>
                </div>
                <button onClick={() => onRemoveItem(item.equipment.id)} className="text-red-600 hover:text-red-800 flex-shrink-0">
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input type="number" min="1" value={item.quantity} onChange={e => onUpdateItem(item.equipment.id, Math.max(1, parseInt(e.target.value) || 1), item.rentalDays)} className="w-full px-3 py-2 border border-gray-300 rounded text-center focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Rental Days
                  </label>
                  <input type="number" min="1" value={item.rentalDays} onChange={e => onUpdateItem(item.equipment.id, item.quantity, Math.max(1, parseInt(e.target.value) || 1))} className="w-full px-3 py-2 border border-gray-300 rounded text-center focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-xs text-gray-600">Line Total:</span>
                <span className="text-base font-bold text-gray-900">
                  Rs. {lineTotal.toLocaleString()}
                </span>
              </div>
            </div>;
      })}
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-4 sm:px-6 py-4">
        <div className="max-w-md ml-auto space-y-2">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium text-gray-900">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600">Tax (18% GST):</span>
            <span className="font-medium text-gray-900">
              Rs. {tax.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-base sm:text-lg font-bold border-t border-gray-300 pt-2">
            <span className="text-gray-900">Grand Total:</span>
            <span className="text-red-600">Rs. {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>;
}