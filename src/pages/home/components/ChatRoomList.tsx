import { ChatRoomItem } from "@/pages/home/components/ChatRoomItem"
import type { ChatRoom } from "@/pages/home/data"


type ChatRoomListProps = {
  rooms: ChatRoom[]
}

export function ChatRoomList({ rooms }: ChatRoomListProps) {
  return (
    <div className="flex-1 min-w-0 overflow-y-auto">
      {rooms.map((room) => (
        <ChatRoomItem key={room.id} room={room} />
      ))}
    </div>
  )
}
