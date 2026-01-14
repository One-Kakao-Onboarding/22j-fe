import type { Category } from '@/constants/categories'
import { HiChevronRight } from 'react-icons/hi2'
import { Button } from '@/components/ui/Button'

type CategoryItemProps = {
  category: Category
  onClick?: () => void
}

export function CategoryItem({ category, onClick }: CategoryItemProps) {
  const Icon = category.icon

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-3 h-auto rounded-none hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <span className="text-base text-gray-900 font-normal">{category.label}</span>
      </div>
      <HiChevronRight className="w-5 h-5 text-gray-400" />
    </Button>
  )
}
