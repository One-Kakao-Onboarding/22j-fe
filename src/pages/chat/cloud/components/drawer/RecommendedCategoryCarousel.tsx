import { RECOMMENDED_CATEGORIES } from '@/constants/categories'
import { RecommendedCategoryCard } from './RecommendedCategoryCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/Carousel'

type RecommendedCategoryCarouselProps = {
  onCategoryClick?: (categoryId: string) => void
}

export function RecommendedCategoryCarousel({ onCategoryClick }: RecommendedCategoryCarouselProps) {
  return (
    <div className="px-4">
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {RECOMMENDED_CATEGORIES.map((category) => (
            <CarouselItem key={category.id} className="pl-2 basis-auto">
              <RecommendedCategoryCard
                category={category}
                onClick={() => onCategoryClick?.(category.id)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
