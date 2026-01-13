import { TabsContent } from '@/components/ui/Tabs'
import { FileGrid } from './FileGrid'
import type { FileItem } from '@/types/drawer'
import type { TalkDrawerTab } from '@/types/drawer'

type FileTypeContentProps = {
  value: TalkDrawerTab
  files: FileItem[]
  selectedFilterId: string | null
}

export function FileTypeContent({ value, files, selectedFilterId }: FileTypeContentProps) {
  const getFilterType = (tab: TalkDrawerTab) => {
    switch (tab) {
      case 'photo':
        return (file: FileItem) => file.type === 'image'
      case 'document':
        return (file: FileItem) => file.type === 'document'
      case 'link':
        return (file: FileItem) => file.type === 'link'
      case 'voice':
        return (file: FileItem) => file.type === 'voice'
      default:
        return undefined
    }
  }

  const getEmptyMessage = (tab: TalkDrawerTab) => {
    switch (tab) {
      case 'photo':
        return '사진/동영상이 없습니다.'
      case 'document':
        return '문서가 없습니다.'
      case 'link':
        return '링크가 없습니다.'
      default:
        return '파일이 없습니다.'
    }
  }

  return (
    <TabsContent value={value} className="mt-4">
      <FileGrid
        files={files}
        filterType={getFilterType(value)}
        selectedFilterId={selectedFilterId}
        emptyMessage={getEmptyMessage(value)}
      />
    </TabsContent>
  )
}
