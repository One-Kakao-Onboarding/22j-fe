import type { Message } from '@/types/chat-room'
import { MessageItem } from '@/pages/chat/components/MessageItem'

type MessageListProps = {
  messages: Message[]
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      {messages.map((message, index) => {
        const showSenderInfo = index === 0 || messages[index - 1].sender !== message.sender
        return (
          <MessageItem
            key={message.id}
            message={message}
            showSenderInfo={showSenderInfo}
            previousSender={messages[index - 1]?.sender}
          />
        )
      })}
    </div>
  )
}
