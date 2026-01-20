import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, CalendarDays, TrendingUp } from 'lucide-react';

interface SummaryCardsProps {
  totalSpending: number;
  thisMonthTotal: number;
  expenseCount: number;
}

export function SummaryCards({ totalSpending, thisMonthTotal, expenseCount }: SummaryCardsProps) {
  const cards = [
    {
      title: 'Total Spending',
      value: `₹${totalSpending.toFixed(2)}`,
      icon: DollarSign,
      description: 'All time',
    },
    {
      title: 'This Month',
      value: `₹${thisMonthTotal.toFixed(2)}`,
      icon: CalendarDays,
      description: new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
    },
    {
      title: 'Total Expenses',
      value: expenseCount.toString(),
      icon: TrendingUp,
      description: 'Transactions logged',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card 
          key={card.title} 
          className="shadow-card hover:shadow-card-hover transition-shadow animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
                <p className="text-2xl font-bold mt-1">{card.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
