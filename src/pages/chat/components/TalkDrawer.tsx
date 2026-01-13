import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import { Separator } from '@/components/ui/Separator'

type TalkDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TalkDrawer({ open, onOpenChange }: TalkDrawerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>채팅방 서랍</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors">
            <div className="font-medium text-sm">사진/동영상</div>
            <div className="text-xs text-gray-500 mt-1">0개</div>
          </button>
          <Separator />
          <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors">
            <div className="font-medium text-sm">파일</div>
            <div className="text-xs text-gray-500 mt-1">0개</div>
          </button>
          <Separator />
          <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors">
            <div className="font-medium text-sm">링크</div>
            <div className="text-xs text-gray-500 mt-1">0개</div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
