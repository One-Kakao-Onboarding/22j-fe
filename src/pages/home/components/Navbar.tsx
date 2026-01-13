import { HiUser, HiShoppingBag, HiOutlineDotsHorizontal } from 'react-icons/hi'
import { FaComment } from 'react-icons/fa'
import { IoChatbubbles } from 'react-icons/io5'
import { bottomFixedContainer } from '@/lib/bottom-fixed'
import { cn } from '@/lib/utils'

type NavItem = {
  id: string
  icon: React.ComponentType<{ className?: string }>
  activeIcon?: React.ComponentType<{ className?: string }>
  active?: boolean
}

const navItems: NavItem[] = [
  { id: 'friends', icon: HiUser },
  { id: 'chat', icon: FaComment, activeIcon: FaComment, active: true },
  { id: 'openchat', icon: IoChatbubbles },
  { id: 'shopping', icon: HiShoppingBag },
  { id: 'more', icon: HiOutlineDotsHorizontal },
]

export function Navbar() {
  return (
    <div className={cn(bottomFixedContainer, "bg-white border-t border-gray-200 z-50")}>
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.active && item.activeIcon ? item.activeIcon : item.icon
          return (
            <button
              key={item.id}
              className="relative flex flex-col items-center justify-center flex-1 h-full"
            >
              <Icon
                className={`w-6 h-6 ${
                  item.active ? 'text-black' : 'text-gray-400'
                }`}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
