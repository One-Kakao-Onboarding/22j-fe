import type { DataType } from '@/types/file'
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

export type Message = {
  id: string
  roomId: string
  sender: string
  content: string
  type: DataType
  time: Dayjs
  isMe: boolean
  avatar: string | null
}