import { Expense } from '@/types/expense';
import { CategoryBadge } from './CategoryBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Receipt } from 'lucide-react';
import { format } from 'date-fns';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <Card className="shadow-card animate-fade-in">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <Receipt className="w-12 h-12 text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">No expenses yet</p>
          <p className="text-sm text-muted-foreground/70">Add your first expense above</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Receipt className="w-5 h-5 text-primary" />
          Recent Expenses
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {expenses.slice(0, 10).map((expense, index) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors animate-slide-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <p className="font-medium truncate">{expense.description}</p>
                  <CategoryBadge category={expense.category} />
                </div>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(expense.date), 'MMM d, yyyy')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg">
                  ${expense.amount.toFixed(2)}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(expense.id)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
