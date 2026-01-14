import type { FileType } from '@/types/file'
import type { Dayjs } from 'dayjs'

export type ChatRoom = {
  id: string
  name: string
  lastMessage: string
  time: Dayjs
  avatar: string | null
  memberCount?: number
  isPinned?: boolean
  isSelfChat?: boolean
}

export type UploadStatus = 'pending' | 'success' | 'error'

export type FileMessageData = {
  fileName: string
  fileSize: number
  fileType: FileType
  expiryDate?: Dayjs
  uploadStatus?: UploadStatus
}

export type Message = {
  id: string
  roomId: string
  sender: string
  content: string
  type: FileType
  time: Dayjs
  isMe: boolean
  avatar: string | null
  fileData?: FileMessageData
}
