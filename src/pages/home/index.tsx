import { ChatRoomList } from '@/pages/home/components/ChatRoomList'
import { ChatHeader } from '@/pages/home/components/Header'
import { Sidebar } from '@/pages/home/components/Sidebar'
import { chatRooms } from '@/pages/home/data'



export function Home() {
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
