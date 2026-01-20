import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BarChart3 } from 'lucide-react';

interface ChartData {
  category: string;
  amount: number;
  fill: string;
}

interface SpendingChartProps {
  data: ChartData[];
}

export function SpendingChart({ data }: SpendingChartProps) {
  if (data.length === 0) {
    return (
      <Card className="shadow-card animate-fade-in">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Spending by Category
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <BarChart3 className="w-12 h-12 text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">No data to display</p>
          <p className="text-sm text-muted-foreground/70">Add expenses to see your spending breakdown</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          Spending by Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis 
                type="number" 
                tickFormatter={(value) => `$${value}`}
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <YAxis 
                type="category" 
                dataKey="category" 
                width={100}
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <Tooltip
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Amount']}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-md)',
                }}
                cursor={{ fill: 'hsl(var(--muted))' }}
              />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]} maxBarSize={40}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
