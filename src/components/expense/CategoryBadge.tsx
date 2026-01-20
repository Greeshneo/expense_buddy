import { Category } from '@/types/expense';
import { cn } from '@/lib/utils';

const categoryStyles: Record<Category, string> = {
  Food: 'bg-category-food/15 text-category-food border-category-food/30',
  Travel: 'bg-category-travel/15 text-category-travel border-category-travel/30',
  Rent: 'bg-category-rent/15 text-category-rent border-category-rent/30',
  Entertainment: 'bg-category-entertainment/15 text-category-entertainment border-category-entertainment/30',
  Utilities: 'bg-category-utilities/15 text-category-utilities border-category-utilities/30',
  Other: 'bg-category-other/15 text-category-other border-category-other/30',
};

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        categoryStyles[category],
        className
      )}
    >
      {category}
    </span>
  );
}
