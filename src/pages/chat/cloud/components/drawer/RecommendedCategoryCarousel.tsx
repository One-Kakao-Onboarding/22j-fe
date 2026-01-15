import { useState, useEffect } from 'react'
import { ALL_CATEGORIES } from '@/constants/categories'
import type { Category } from '@/constants/categories'
import { RecommendedCategoryCard } from './RecommendedCategoryCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/Carousel'
import { getRecommendedCategories } from '@/services/file/file-service'

type RecommendedCategoryCarouselProps = {
  onCategoryClick?: (categoryId: string) => void
}

export function RecommendedCategoryCarousel({ onCategoryClick }: RecommendedCategoryCarouselProps) {
  const [recommendedCategories, setRecommendedCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendedCategories = async () => {
      try {
        setIsLoading(true)
        const categoryIds = await getRecommendedCategories()
        
        // API에서 받은 카테고리 ID로 전체 카테고리에서 찾기
        const categories = categoryIds
          .map(id => ALL_CATEGORIES.find(cat => cat.id === id))
          .filter((cat): cat is Category => cat !== undefined)
          .map(cat => ({ ...cat, isRecommended: true }))
        
        setRecommendedCategories(categories)
      } catch (error) {
        console.error('추천 카테고리 조회 실패:', error)
        // 실패 시 빈 배열 유지
        setRecommendedCategories([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecommendedCategories()
  }, [])

  if (isLoading) {
    return (
      <div className="px-4 py-8 text-center">
        <p className="text-sm text-gray-500">로딩 중...</p>
      </div>
    )
  }

  if (recommendedCategories.length === 0) {
    return null
  }

  return (
    <div className="px-4">
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
        className="w-[calc(100%+32px)] -mx-4"
      >
        <CarouselContent className="pl-4">
          {recommendedCategories.map((category) => (
            <CarouselItem key={category.id} className="pl-4 basis-auto">
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
