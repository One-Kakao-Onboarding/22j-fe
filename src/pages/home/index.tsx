import { useEffect, useState } from 'react'
import { ChatRoomList } from '@/pages/home/components/ChatRoomList'
import { ChatHeader } from '@/pages/home/components/Header'
import { Sidebar } from '@/pages/home/components/Sidebar'
import { getChatRooms } from '@/services/chat/chat-service'
import type { ChatRoom } from '@/types/chat-room'

export function Home() {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([])

  useEffect(() => {
    getChatRooms().then(setChatRooms)
  }, [])

  return (
    <div className="flex h-screen min-w-0 bg-white">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <ChatHeader />
        <ChatRoomList rooms={chatRooms} />
      </div>
    </div>
  )
}
