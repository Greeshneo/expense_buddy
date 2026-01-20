export type Category = 'Food' | 'Travel' | 'Rent' | 'Entertainment' | 'Utilities' | 'Other';

export interface Expense {
  id: string;
  amount: number;
  category: Category;
  description: string;
  date: string;
  createdAt: string;
}

export const CATEGORIES: Category[] = ['Food', 'Travel', 'Rent', 'Entertainment', 'Utilities', 'Other'];

export const CATEGORY_COLORS: Record<Category, string> = {
  Food: 'hsl(24, 95%, 53%)',
  Travel: 'hsl(199, 89%, 48%)',
  Rent: 'hsl(262, 83%, 58%)',
  Entertainment: 'hsl(330, 81%, 60%)',
  Utilities: 'hsl(45, 93%, 47%)',
  Other: 'hsl(160, 10%, 50%)',
};
