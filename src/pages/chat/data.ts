import type { Message, ChatRoomInfo } from '@/types/chat-room'

// 채팅방 id별 메시지 데이터
const messagesByRoomId: Record<string, Message[]> = {
  '2': [
    {
      id: '2-1',
      sender: '2026 그룹공채 원 카카오 온보딩',
      content: '여러분~~~~ 내일 아침 10시, CEO와의 만남 시간에는...',
      time: '오후 1:18',
      isMe: false,
      avatar: null,
    },
  ],
  '3': [
    {
      id: '3-1',
      sender: '카카오게임즈 james(한승준)',
      content: '식사 순서에 따라 다르지 않을까요?',
      time: '오후 12:45',
      isMe: false,
      avatar: null,
    },
    {
      id: '3-2',
      sender: '카카오게임즈 james(한승준)',
      content: '여쭤보기가',
      time: '오후 12:55',
      isMe: false,
      avatar: null,
    },
    {
      id: '3-3',
      sender: '카카오게임즈 james(한승준)',
      content: '애매한디요',
      time: '오후 1:08',
      isMe: false,
      avatar: null,
    },
    {
      id: '3-4',
      sender: '카카오게임즈 james(한승준)',
      content: '저희는 해커톤조끼리 먹어요',
      time: '오후 1:09',
      isMe: false,
      avatar: null,
    },
    {
      id: '3-5',
      sender: '카카오게임즈 james(한승준)',
      content: 'Same here',
      time: '오후 1:10',
      isMe: false,
      avatar: null,
    },
    {
      id: '3-6',
      sender: '카카오게임즈 james(한승준)',
      content: 'Same here too',
      time: '오후 1:10',
      isMe: false,
      avatar: null,
    },
  ],
  '4': [
    {
      id: '4-1',
      sender: '페둥이들',
      content: 'ㄷㄷㄷ저희도 얼떨떨해요',
      time: '오후 12:33',
      isMe: false,
      avatar: null,
    },
  ],
  '5': [
    {
      id: '5-1',
      sender: '해커톤 22조',
      content: '#춘식도락메뉴 분석 챌린지 1. 2 번...',
      time: '오후 12:23',
      isMe: false,
      avatar: null,
    },
  ],
}

// 채팅방 id별 채팅방 정보
const chatRoomInfoById: Record<string, ChatRoomInfo> = {
  '1': {
    id: '1',
    name: '별가리',
    memberCount: 2,
    avatars: [],
  },
  '2': {
    id: '2',
    name: '2026 그룹공채 원 카카오 온보딩',
    memberCount: 144,
    avatars: [],
  },
  '3': {
    id: '3',
    name: '동기사랑 6조',
    memberCount: 8,
    avatars: [],
  },
  '4': {
    id: '4',
    name: '페둥이들',
    memberCount: 13,
    avatars: [],
  },
  '5': {
    id: '5',
    name: '해커톤 22조',
    memberCount: 4,
    avatars: [],
  },
}

export function getMessagesByRoomId(roomId: string): Message[] {
  return messagesByRoomId[roomId] || []
}

export function getChatRoomInfoById(roomId: string): ChatRoomInfo | null {
  return chatRoomInfoById[roomId] || null
}
