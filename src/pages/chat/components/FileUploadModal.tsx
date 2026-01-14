import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { HiOutlinePhoto, HiOutlineDocument, HiOutlineFilm, HiOutlineFolder } from 'react-icons/hi2'
import type { FileType } from '@/types/file'

type FileUploadModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  files: File[]
  onCancel: () => void
  onSend: () => void
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
}

function truncateFileName(fileName: string, maxLength: number = 20): string {
  if (fileName.length <= maxLength) return fileName
  return fileName.substring(0, maxLength) + '...'
}

function getFileType(file: File): FileType {
  if (file.type.startsWith('image/')) return 'image'
  if (file.type.startsWith('video/')) return 'image'
  if (file.type.startsWith('audio/')) return 'image'
  
  if (
    file.type.includes('pdf') ||
    file.type.includes('document') ||
    file.type.includes('word') ||
    file.type.includes('excel') ||
    file.type.includes('powerpoint') ||
    file.type.includes('text')
  ) {
    return 'document'
  }
  
  return 'etc'
}

function isImageFile(file: File): boolean {
  return file.type.startsWith('image/')
}

function getImagePreviewUrl(file: File): string {
  return URL.createObjectURL(file)
}

function FileIcon({ file }: { file: File }) {
  const fileType = getFileType(file)
  const iconClass = "w-8 h-8 text-gray-400"
  
  if (file.type.startsWith('video/')) {
    return <HiOutlineFilm className={iconClass} />
  }
  
  switch (fileType) {
    case 'image':
      return <HiOutlinePhoto className={iconClass} />
    case 'document':
      return <HiOutlineDocument className={iconClass} />  
    default:
      return <HiOutlineFolder className={iconClass} />
  }
}

export function FileUploadModal({
  open,
  onOpenChange,
  files,
  onCancel,
  onSend,
}: FileUploadModalProps) {
  const fileCount = files.length
  const [previewUrls, setPreviewUrls] = useState<(string | null)[]>([])
  
  useEffect(() => {
    const urls = files.map(file => {
      if (isImageFile(file)) {
        return getImagePreviewUrl(file)
      }
      return null
    })
    
    setTimeout(() => {
      setPreviewUrls(urls)
    }, 0)
    
    return () => {
      urls.forEach(url => {
        if (url) {
          URL.revokeObjectURL(url)
        }
      })
    }
  }, [files])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0" showCloseButton={false}>
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-center text-lg font-semibold">
            파일 전송
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-4 max-h-[400px] overflow-y-auto space-y-3">
          {files.map((file, index) => {
            const isImage = isImageFile(file)
            const previewUrl = previewUrls[index]
            
            return (
              <div key={`${file.name}-${file.size}-${index}`} className="flex items-start gap-4">
                <div className="shrink-0">
                  {isImage && previewUrl ? (
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        key={previewUrl}
                        src={previewUrl}
                        alt={file.name}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <FileIcon file={file} />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-black truncate">
                        {truncateFileName(file.name)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                    <button className="shrink-0 text-gray-400 hover:text-gray-600 p-1">
                      <HiOutlineDotsVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="px-6 pb-6 pt-4 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-1 rounded-lg border border-gray-300 bg-white text-black font-medium hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            onClick={onSend}
            className="flex-1 px-4 py-1 rounded-lg bg-kakao-yellow text-black font-medium hover:bg-yellow-400 transition-colors flex items-center justify-center gap-1"
          >
            <span>{fileCount}개 전송</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
