import { HiOutlineChevronDown, HiOutlineSearch, HiOutlinePlus } from 'react-icons/hi'

export function ChatHeader() {
  return (
    <div className="h-14 flex items-center justify-between px-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <h1 className="text-md font-semibold">채팅</h1>
        <button className="text-gray-500">
          <HiOutlineChevronDown className="w-4 h-4 bg-white" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className="text-gray-600">
          <HiOutlineSearch className="w-5 h-5 bg-white" />
        </button>
        <button className="text-gray-600">
          <HiOutlinePlus className="w-5 h-5 bg-white" />
        </button>
      </div>
    </div>
  )
}
