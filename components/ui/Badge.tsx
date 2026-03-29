import { cn } from '@/lib/utils';
import { CATEGORY_COLORS } from '@/lib/constants';
import { ArticleCategory } from '@/types';

interface BadgeProps {
  category: ArticleCategory;
  className?: string;
}

export function CategoryBadge({ category, className }: BadgeProps) {
  const colors = CATEGORY_COLORS[category] ?? CATEGORY_COLORS['Investing'];
  return (
    <span
      className={cn(
        'inline-block text-xs font-medium px-2.5 py-1 rounded-full border',
        colors.bg,
        colors.text,
        colors.border,
        className,
      )}
    >
      {category}
    </span>
  );
}
