export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  dailyRate: number;
  image: string;
  availability: 'Available' | 'Limited Stock' | 'Out of Stock';
}
export interface QuotationItem {
  equipment: Equipment;
  quantity: number;
  rentalDays: number;
}
export interface Category {
  id: string;
  name: string;
  subcategories: string[];
}
export type SortOption = 'popularity' | 'name-asc' | 'price-low' | 'price-high';
export type ViewMode = 'grid' | 'list';