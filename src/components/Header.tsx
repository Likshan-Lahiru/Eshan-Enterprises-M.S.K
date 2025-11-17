import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardHatIcon, FileTextIcon, MenuIcon, XIcon } from 'lucide-react';
import { useQuotation } from '../hooks/useQuotation';
export function Header() {
  const location = useLocation();
  const {
    getTotalItems
  } = useQuotation();
  const itemCount = getTotalItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
                <img
                    src="/Eshan-Enterprises-M.S.K.png"
                    alt="Eshan Enterprises M.S.K"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />
                <span className="text-base sm:text-xl font-bold text-gray-900">

                </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm font-medium ${location.pathname === '/' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Home
            </Link>
            <Link to="/quotation" className={`text-sm font-medium ${location.pathname === '/quotation' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Quotation
            </Link>
            <Link to="/contact" className={`text-sm font-medium ${location.pathname === '/contact' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Contact / Help
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/quotation" className="bg-red-600 text-white px-3 py-2 sm:px-4 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center gap-2 text-sm">
              <FileTextIcon className="w-4 h-4" />
              <span className="hidden sm:inline">View Quotation</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${location.pathname === '/' ? 'text-red-600' : 'text-gray-600'}`}>
                Home
              </Link>
              <Link to="/quotation" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${location.pathname === '/quotation' ? 'text-red-600' : 'text-gray-600'}`}>
                Quotation
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${location.pathname === '/contact' ? 'text-red-600' : 'text-gray-600'}`}>
                Contact / Help
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
}