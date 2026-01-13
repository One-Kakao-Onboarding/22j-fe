import { useState } from 'react'
import { TabsContent } from '@/components/ui/Tabs'
import { FilterButtons } from './FilterButtons'
import { FileGrid } from './FileGrid'
import type { FileItem, Filter } from '@/types/drawer'

type PhotoTabContentProps = {
  filters: Filter[]
  files: FileItem[]
}

export function PhotoTabContent({ filters, files }: PhotoTabContentProps) {
  const [selectedFilterId, setSelectedFilterId] = useState<string | null>(null)

  return (
    <TabsContent value="photo" className="mt-4 space-y-4">
      <FilterButtons
        filters={filters}
        selectedFilterId={selectedFilterId}
        onFilterChange={setSelectedFilterId}
      />
      <FileGrid
        files={files}
        filterType={(file) => file.type === 'image' || file.type === 'document'}
        selectedFilterId={selectedFilterId}
      />
    </TabsContent>
  )
}
