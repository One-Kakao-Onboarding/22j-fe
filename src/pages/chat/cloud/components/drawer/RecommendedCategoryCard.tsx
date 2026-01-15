import type { Category } from '@/constants/categories'

type RecommendedCategoryCardProps = {
  category: Category
  onClick?: () => void
}

export function RecommendedCategoryCard({ category, onClick }: RecommendedCategoryCardProps) {
  const Icon = category.icon

  return (
    <button
      onClick={onClick}
      className="shrink-0 flex flex-col items-center gap-3 cursor-pointer group"
    >
      <div className="flex items-center justify-center transition-transform group-hover:scale-105">
        <div style={{ color: category.color }}>
          <Icon className="w-12 h-12" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-gray-900 line-clamp-2">{category.label}</p>
      </div>
    </button>
  )
}
