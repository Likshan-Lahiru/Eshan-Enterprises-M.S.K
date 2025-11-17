import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon, EditIcon, AlertCircleIcon } from 'lucide-react';
import { QuotationTable } from '../components/QuotationTable';
import { useQuotation } from '../hooks/useQuotation';
export function QuotationPage() {
  const {
    items,
    updateItem,
    removeItem,
    clearQuotation,
    getSubtotal,
    getTax,
    getTotal
  } = useQuotation();
  const subtotal = getSubtotal();
  const tax = getTax();
  const total = getTotal();
  const handleExportPDF = () => {
    alert('PDF export functionality would be implemented here. This would generate a professional quotation PDF with all items and totals.');
  };
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Quotation Summary
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Review your selected equipment, rental period, and estimated cost in
            Rs. You can export this quotation as PDF.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <QuotationTable items={items} onUpdateItem={updateItem} onRemoveItem={removeItem} subtotal={subtotal} tax={tax} total={total} />
            {items.length > 0 && <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button onClick={handleExportPDF} className="flex-1 bg-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                  <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Export Quotation as PDF
                </button>
                <Link to="/" className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                  <EditIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Edit Items
                </Link>
              </div>}
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-4">
                Customer Details
              </h3>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input type="text" placeholder="Your name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input type="text" placeholder="Company name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input type="email" placeholder="your@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Project Location
                  </label>
                  <textarea placeholder="Project address" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base" />
                </div>
              </form>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
              <div className="flex gap-2 sm:gap-3">
                <AlertCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-medium text-blue-900 mb-1">
                    Sample Quotation
                  </p>
                  <p className="text-xs sm:text-sm text-blue-700">
                    This is a sample quotation for estimation only. Final
                    invoice will be confirmed by the company.
                  </p>
                </div>
              </div>
            </div>
            {items.length > 0 && <button onClick={clearQuotation} className="w-full bg-white border border-red-300 text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-50 transition-colors text-sm sm:text-base">
                Clear All Items
              </button>}
          </div>
        </div>
      </div>
    </div>;
}