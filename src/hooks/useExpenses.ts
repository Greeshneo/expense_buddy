import { useState, useEffect } from 'react';
import { Expense, Category, CATEGORY_COLORS } from '@/types/expense';

const STORAGE_KEY = 'expense-tracker-data';

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Omit<Expense, 'id' | 'createdAt'>) => {
    const newExpense: Expense = {
      ...expense,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setExpenses(prev => [newExpense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  const totalSpending = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const spendingByCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {} as Record<Category, number>);

  const chartData = Object.entries(spendingByCategory).map(([category, amount]) => ({
    category,
    amount,
    fill: CATEGORY_COLORS[category as Category],
  }));

  const thisMonthExpenses = expenses.filter(exp => {
    const expDate = new Date(exp.date);
    const now = new Date();
    return expDate.getMonth() === now.getMonth() && expDate.getFullYear() === now.getFullYear();
  });

  const thisMonthTotal = thisMonthExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return {
    expenses,
    addExpense,
    deleteExpense,
    totalSpending,
    spendingByCategory,
    chartData,
    thisMonthTotal,
    expenseCount: expenses.length,
  };
}
