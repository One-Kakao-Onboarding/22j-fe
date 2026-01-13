import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useParams, Link } from 'react-router'
import { Search, Phone, Video, MoreVertical, ArrowLeft, Plus, Smile, Paperclip } from 'lucide-react'

// 임시 메시지 데이터
const messages = [
  {
    id: '1',
    sender: '카카오게임즈 james(한승준)',
    content: '식사 순서에 따라 다르지 않을까요?',
    time: '오후 12:45',
    isMe: false,
    avatar: null,
    unreadCount: 0,
  },
  {
    id: '2',
    sender: '카카오게임즈 james(한승준)',
    content: '여쭤보기가',
    time: '오후 12:55',
    isMe: false,
    avatar: null,
    unreadCount: 0,
  },
  {
    id: '3',
    sender: '카카오게임즈 james(한승준)',
    content: '애매한디요',
    time: '오후 1:08',
    isMe: false,
    avatar: null,
    unreadCount: 1,
  },
  {
    id: '4',
    sender: '카카오게임즈 james(한승준)',
    content: '저희는 해커톤조끼리 먹어요',
    time: '오후 1:09',
    isMe: false,
    avatar: null,
    unreadCount: 1,
  },
  {
    id: '5',
    sender: '카카오게임즈 james(한승준)',
    content: 'Same here',
    time: '오후 1:10',
    isMe: false,
    avatar: null,
    unreadCount: 1,
  },
  {
    id: '6',
    sender: '카카오게임즈 james(한승준)',
    content: 'Same here too',
    time: '오후 1:10',
    isMe: false,
    avatar: null,
    unreadCount: 1,
  },
]

const chatRoomInfo = {
  id: '3',
  name: '동기사랑 6조',
  memberCount: 8,
  avatars: [],
}

export function ChatRoom() {
  const { id } = useParams()

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* 헤더 */}
      <div className="h-14 bg-white flex items-center justify-between px-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} className="w-8 h-8 border-2 border-white">
                  <AvatarFallback className="bg-blue-200 text-xs">
                    {i}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div>
              <h2 className="font-semibold text-sm">{chatRoomInfo.name}</h2>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>{chatRoomInfo.memberCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-600">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-600">
            <Phone className="w-5 h-5" />
          </button>
          <button className="text-gray-600">
            <Video className="w-5 h-5" />
          </button>
          <button className="text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message, index) => {
          const showSenderInfo = index === 0 || messages[index - 1].sender !== message.sender
          return (
            <div key={message.id} className={`flex gap-2 ${message.isMe ? 'justify-end' : ''}`}>
              {!message.isMe && (
                <div className="flex flex-col items-center gap-1">
                  {showSenderInfo ? (
                    <>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={message.avatar || undefined} />
                        <AvatarFallback className="bg-blue-200 text-xs">
                          {message.sender.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-500 max-w-[60px] truncate">
                        {message.sender.split('(')[1]?.replace(')', '') || message.sender}
                      </span>
                    </>
                  ) : (
                    <div className="w-8" />
                  )}
                </div>
              )}
              <div className={`flex flex-col gap-1 ${message.isMe ? 'items-end' : 'items-start'} max-w-[70%]`}>
                {showSenderInfo && !message.isMe && (
                  <span className="text-xs text-gray-500 px-1">{message.sender}</span>
                )}
                <div
                  className={`rounded-lg px-3 py-2 ${
                    message.isMe
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white text-black'
                  }`}
                  style={{
                    borderRadius: message.isMe ? '18px 18px 4px 18px' : '4px 18px 18px 18px',
                  }}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                </div>
                <div className="flex items-center gap-1 px-1">
                  <span className="text-xs text-gray-400">{message.time}</span>
                  {message.unreadCount > 0 && (
                    <Badge className="bg-yellow-400 text-black border-0 text-xs px-1 py-0 h-4">
                      {message.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 입력 영역 */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-end gap-2">
          <button className="text-gray-600 p-2">
            <Plus className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <Input
              placeholder="메시지 입력"
              className="rounded-full border-gray-300 focus:border-gray-400"
            />
          </div>
          <div className="flex items-center gap-1">
            <button className="text-gray-600 p-2">
              <Smile className="w-5 h-5" />
            </button>
            <button className="text-gray-600 p-2">
              <Paperclip className="w-5 h-5" />
            </button>
            <Button className="rounded-full bg-gray-200 text-black hover:bg-gray-300 px-4">
              전송
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
