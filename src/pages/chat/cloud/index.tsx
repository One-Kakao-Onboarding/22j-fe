import { useState } from 'react'
import { Tabs } from '@/components/ui/Tabs'
import type { MainTab } from '@/types/drawer'
import { MainTabs } from '@/pages/chat/cloud/components/MainTabs'
import { TalkDrawerTab } from '@/pages/chat/cloud/components/drawer/TalkDrawerTab'
import { ExploreTab } from '@/pages/chat/cloud/components/explore/ExploreTab'
import PageWrapper from '@/components/PageWrapper'
import { CloudHeader } from '@/pages/chat/cloud/components/CloudHeader'
import { useParams } from 'react-router'

export function TalkDrawer() {
  const { id } = useParams<{ id: string }>()
  const [selectedTab, setSelectedTab] = useState<MainTab>('drawer')
  const [searchQuery, setSearchQuery] = useState('')

  const handleTabChange = (value: string) => {
    setSelectedTab(value as MainTab)
  }

  return (
    <PageWrapper>
      <div className="flex flex-col h-screen bg-white">
        <CloudHeader 
          title="톡클라우드" 
          backTo={`/chat/${id}`}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 메인 탭 및 컨텐츠 */}
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="flex-1 flex flex-col min-h-0 mb-4">
          <MainTabs value={selectedTab} onValueChange={handleTabChange} />
          
          <div className="flex-1 flex flex-col min-h-0">
            <TalkDrawerTab />
            <ExploreTab />
          </div>
        </Tabs>
      </div>
    </PageWrapper>
  )
}
