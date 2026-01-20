import { useExpenses } from '@/hooks/useExpenses';
import { AddExpenseForm } from '@/components/expense/AddExpenseForm';
import { ExpenseList } from '@/components/expense/ExpenseList';
import { SpendingChart } from '@/components/expense/SpendingChart';
import { SummaryCards } from '@/components/expense/SummaryCards';
import { Wallet } from 'lucide-react';

const Index = () => {
  const {
    expenses,
    addExpense,
    deleteExpense,
    totalSpending,
    chartData,
    thisMonthTotal,
    expenseCount,
  } = useExpenses();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl py-8 px-4">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
              <Wallet className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Expense Tracker</h1>
          </div>
          <p className="text-muted-foreground">
            Track your daily spending and visualize where your money goes
          </p>
        </header>

        {/* Summary Cards */}
        <section className="mb-8">
          <SummaryCards
            totalSpending={totalSpending}
            thisMonthTotal={thisMonthTotal}
            expenseCount={expenseCount}
          />
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <AddExpenseForm onAddExpense={addExpense} />
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
          </div>

          {/* Right Column */}
          <div>
            <SpendingChart data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
