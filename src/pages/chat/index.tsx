import { useParams } from 'react-router'
import { ChatHeader } from '@/pages/chat/components/ChatHeader'
import { MessageList } from '@/pages/chat/components/MessageList'
import { MessageInput } from '@/pages/chat/components/MessageInput'
import { getMessagesByRoomId, getChatRoomInfoById } from '@/pages/chat/data'

export function ChatRoom() {
  const { id } = useParams()

  if (!id) {
    return null
  }

  const messages = getMessagesByRoomId(id)
  const chatRoomInfo = getChatRoomInfoById(id)

  if (!chatRoomInfo) {
    return null
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatHeader chatRoomInfo={chatRoomInfo} />
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  )
}
