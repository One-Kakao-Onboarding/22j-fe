import type { FileItem } from '@/types/drawer'
import { FileCard } from './FileCard'

type FileGridProps = {
  files: FileItem[]
  filterType?: (file: FileItem) => boolean
  selectedFilterId?: string | null
  emptyMessage?: string
}

// 필터 ID와 파일 태그 매핑
const FILTER_TAG_MAP: Record<string, string[]> = {
  official: ['#공식', '#문서', '#재즐응', '#2025학년도'],
  work: ['#업무', '#학업', '#최종분', '#엑셀파업'],
  receipt: ['#영수증', '#증빙'],
  share: ['#제출', '#공유'],
  other: ['#기타파일', '#미넌뮤'],
}

export function FileGrid({ files, filterType, selectedFilterId, emptyMessage = '파일이 없습니다.' }: FileGridProps) {
  let filteredFiles = filterType ? files.filter(filterType) : files

  // 필터가 선택된 경우 태그 기반으로 추가 필터링
  if (selectedFilterId && FILTER_TAG_MAP[selectedFilterId]) {
    const filterTags = FILTER_TAG_MAP[selectedFilterId]
    filteredFiles = filteredFiles.filter((file) =>
      file.tags.some((tag) => filterTags.some((filterTag) => tag.includes(filterTag)))
    )
  }

  if (filteredFiles.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredFiles.map((file: FileItem) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  )
}
