import { useState } from 'react'
import { TabsContent } from '@/components/ui/Tabs'
import type { FilterType } from '@/types/drawer'
import { ExploreFilters } from './ExploreFilters'
import { ItemCard } from '@/pages/chat/cloud/components/explore/ItemCard'
import { exploreItem } from '@/constants/drawer-mock-datas'

export function ExploreTab() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all')

  const filteredItems = exploreItem.filter((item) => {
    if (selectedFilter === 'all') return true
    return item.type === selectedFilter
  })

  return (
    <TabsContent value="explore" className="flex-1 flex flex-col m-0 p-0 min-h-0">
      <ExploreFilters selected={selectedFilter} onSelect={setSelectedFilter} />
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </TabsContent>
  )
}
