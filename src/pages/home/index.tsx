import { useEffect, useState } from 'react'
import { ChatRoomList } from '@/pages/home/components/ChatRoomList'
import { ChatHeader } from '@/pages/home/components/Header'
import { Navbar } from '@/pages/home/components/Navbar'
import { getChatRooms } from '@/services/chat/chat-service'
import type { ChatRoom } from '@/types/chat-room'
import PageWrapper from '@/components/PageWrapper'

export function Home() {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([])

  useEffect(() => {
    getChatRooms().then(setChatRooms)
  }, [])

  return (
    <PageWrapper>
      <div className="relative flex flex-col h-screen min-w-0 bg-white">
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden pb-16">
          <ChatHeader />
          <ChatRoomList rooms={chatRooms} />
        </div>
        <Navbar />
      </div>
    </PageWrapper>
  )
}
