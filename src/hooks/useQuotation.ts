import { useState, useEffect } from 'react';
import { QuotationItem, Equipment } from '../types';
export function useQuotation() {
  const [items, setItems] = useState<QuotationItem[]>(() => {
    const saved = localStorage.getItem('quotation');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('quotation', JSON.stringify(items));
  }, [items]);
  const addItem = (equipment: Equipment, quantity: number, rentalDays: number) => {
    setItems(prev => {
      const existing = prev.find(item => item.equipment.id === equipment.id);
      if (existing) {
        return prev.map(item => item.equipment.id === equipment.id ? {
          ...item,
          quantity: item.quantity + quantity,
          rentalDays
        } : item);
      }
      return [...prev, {
        equipment,
        quantity,
        rentalDays
      }];
    });
  };
  const updateItem = (equipmentId: string, quantity: number, rentalDays: number) => {
    setItems(prev => prev.map(item => item.equipment.id === equipmentId ? {
      ...item,
      quantity,
      rentalDays
    } : item));
  };
  const removeItem = (equipmentId: string) => {
    setItems(prev => prev.filter(item => item.equipment.id !== equipmentId));
  };
  const clearQuotation = () => {
    setItems([]);
  };
  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };
  const getSubtotal = () => {
    return items.reduce((sum, item) => sum + item.equipment.dailyRate * item.quantity * item.rentalDays, 0);
  };
  const getTax = () => {
    return getSubtotal() * 0.18; // 18% GST
  };
  const getTotal = () => {
    return getSubtotal() + getTax();
  };
  return {
    items,
    addItem,
    updateItem,
    removeItem,
    clearQuotation,
    getTotalItems,
    getSubtotal,
    getTax,
    getTotal
  };
}