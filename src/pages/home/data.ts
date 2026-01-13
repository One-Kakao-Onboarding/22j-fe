export type ChatRoom = {
  id: string
  name: string
  lastMessage: string
  time: string
  avatar: string | null
  memberCount?: number
  isPinned?: boolean
}

export const chatRooms: ChatRoom[] = [
  {
    id: '1',
    name: '별가리',
    lastMessage: '안녕하세요 한별님 좋은 아침입니다 😄 보정 완료되어...',
    time: '오후 1:04',
    avatar: null,
    isPinned: true,
  },
  {
    id: '2',
    name: '2026 그룹공채 원 카카오 온보딩',
    lastMessage: '여러분~~~~ 내일 아침 10시, CEO와의 만남 시간에는...',
    time: '오후 1:18',
    avatar: null,
    memberCount: 144,
  },
  {
    id: '3',
    name: '동기사랑 6조',
    lastMessage: 'Same here too',
    time: '오후 1:10',
    avatar: null,
    memberCount: 8,
  },
  {
    id: '4',
    name: '페둥이들',
    lastMessage: 'ㄷㄷㄷ저희도 얼떨떨해요',
    time: '오후 12:33',
    avatar: null,
    memberCount: 13,
  },
  {
    id: '5',
    name: '해커톤 22조',
    lastMessage: '#춘식도락메뉴 분석 챌린지 1. 2 번...',
    time: '오후 12:23',
    avatar: null,
    memberCount: 4,
  },
]
