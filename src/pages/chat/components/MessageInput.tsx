import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { HiOutlinePlus, HiOutlineEmojiHappy, HiOutlinePaperClip } from 'react-icons/hi'

export function MessageInput() {
  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-end gap-2">
        <button className="text-gray-600 p-2">
          <HiOutlinePlus className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <Input
            placeholder="메시지 입력"
            className="rounded-full border-gray-300 focus:border-gray-400"
          />
        </div>
        <div className="flex items-center gap-1">
          <button className="text-gray-600 p-2">
            <HiOutlineEmojiHappy className="w-5 h-5 bg-white" />
          </button>
          <button className="text-gray-600 p-2">
            <HiOutlinePaperClip className="w-5 h-5" />
          </button>
          <Button className="rounded-full bg-gray-100 text-black hover:bg-gray-200 px-4">
            전송
          </Button>
        </div>
      </div>
    </div>
  )
}
