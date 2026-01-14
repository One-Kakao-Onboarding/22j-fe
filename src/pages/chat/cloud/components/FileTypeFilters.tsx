import type { FileType } from '@/types/file'
import { Button } from '@/components/ui/Button'

type FileTypeFiltersProps = {
  selected: FileType | 'all' | 'media' | 'file'
  onSelect: (filter: FileType | 'all' | 'media' | 'file') => void
}

const filters: { id: FileType | 'all' | 'media' | 'file'; label: string }[] = [
  { id: 'all', label: '모두' },
  { id: 'media', label: '사진/영상' },
  { id: 'document', label: '문서' },
  { id: 'link', label: '링크' },
  { id: 'etc', label: '기타' },
]

export function FileTypeFilters({ selected, onSelect }: FileTypeFiltersProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 ">
      <div className="flex-1 flex items-center gap-2 overflow-x-auto">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={selected === filter.id ? 'default' : 'ghost'}
            onClick={() => onSelect(filter.id)}
            className={`shrink-0 h-8 px-3 text-sm rounded-full ${
              selected === filter.id
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
