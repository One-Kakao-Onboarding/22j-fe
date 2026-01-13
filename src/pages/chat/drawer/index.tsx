import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { Tabs } from '@/components/ui/Tabs'
import { FaArrowLeft } from 'react-icons/fa'
import type { TalkDrawerTab, FileItem } from '@/types/drawer'
import { filters, fileItems } from '@/constants/drawer-mock-datas'
import { FilterButtons } from '@/pages/chat/drawer/components/FilterButtons'
import { FileTypeTabs } from '@/pages/chat/drawer/components/FileTypeTabs'
import { FileTypeContent } from '@/pages/chat/drawer/components/FileTypeContent'
import { SearchBar } from '@/pages/chat/drawer/components/SearchBar'
import PageWrapper from '@/components/PageWrapper'

export function TalkDrawer() {
  const { id } = useParams<{ id: string }>()
  const [selectedTab, setSelectedTab] = useState<TalkDrawerTab>('photo')
  const [selectedFilterId, setSelectedFilterId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleTabChange = (value: string) => {
    setSelectedTab(value as TalkDrawerTab)
  }

  const filteredFiles: FileItem[] = fileItems.filter((file: FileItem) => {
    if (searchQuery) {
      return file.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return true
  })

  return (
    <PageWrapper>
      <div className="flex flex-col h-screen bg-white">
        {/* 헤더 */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Link to={`/chat/${id}`} className="text-gray-600">
              <FaArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold text-lg">톡서랍</h1>
          </div>
        </div>

        {/* 컨텐츠 */}
        <div className="flex flex-col gap-4 flex-1 min-h-0 px-4 pt-4 overflow-hidden">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          {/* 상단: 필터 버튼 */}
          <FilterButtons
            filters={filters}
            selectedFilterId={selectedFilterId}
            onFilterChange={setSelectedFilterId}
          />

          {/* 하단: 확장자/타입 탭 */}
          <Tabs value={selectedTab} onValueChange={handleTabChange} className="flex-1 flex flex-col min-h-0">
            <FileTypeTabs value={selectedTab} onValueChange={handleTabChange} />

            <div className="flex-1 overflow-y-auto [scrollbar-gutter:stable]">
              <FileTypeContent value="photo" files={filteredFiles} selectedFilterId={selectedFilterId} />
              <FileTypeContent value="document" files={filteredFiles} selectedFilterId={selectedFilterId} />
              <FileTypeContent value="link" files={filteredFiles} selectedFilterId={selectedFilterId} />
              <FileTypeContent value="voice" files={filteredFiles} selectedFilterId={selectedFilterId} />
            </div>
          </Tabs>
        </div>
      </div>
    </PageWrapper>
  )
}
