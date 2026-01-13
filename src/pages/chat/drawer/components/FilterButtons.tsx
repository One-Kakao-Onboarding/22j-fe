import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/Carousel'
import type { Filter } from '@/types/drawer'

type FilterButtonsProps = {
  filters: Filter[]
  selectedFilterId?: string | null
  onFilterChange?: (filterId: string | null) => void
}

export function FilterButtons({ filters, selectedFilterId, onFilterChange }: FilterButtonsProps) {
  const handleFilterClick = (filterId: string) => {
    if (onFilterChange) {
      // 같은 필터를 다시 클릭하면 선택 해제
      if (selectedFilterId === filterId) {
        onFilterChange(null)
      } else {
        onFilterChange(filterId)
      }
    }
  }

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {filters.map((filter: Filter) => {
          const Icon = filter.icon
          const isActive = selectedFilterId === filter.id
          return (
            <CarouselItem key={filter.id} className="pl-2 basis-auto">
              <button
                onClick={() => handleFilterClick(filter.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm border transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{filter.label}</span>
                <span className="text-xs">{filter.count}개</span>
              </button>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      {/* <CarouselPrevious className="left-0" /> */}
      {/* <CarouselNext className="right-0" /> */}
    </Carousel>
  )
}
