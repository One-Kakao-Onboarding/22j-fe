import { FaBell, FaCog, FaComment, FaEllipsisH, FaUser } from 'react-icons/fa';

const sidebarButtons = [
  { icon: FaUser },
  { icon: FaComment, active: true },
  { icon: FaEllipsisH },
  { icon: FaBell },
  { icon: FaCog },
];

export function Sidebar() {
  return (
    <div className="w-16 bg-gray-50 flex flex-col items-center py-6 gap-4">
      {sidebarButtons.slice(0, 3).map(({ icon: Icon, active }, index) => (
        <button
          key={`sidebar-${index}`}
          className={`w-14 h-14 rounded-full flex items-center justify-center`}
        >
          <Icon className={`w-6 h-6 leading-none ${active ? 'text-black' : 'text-gray-300'}`} />
        </button>
      ))}
      <div className="flex-1" />
      {sidebarButtons.slice(3).map(({ icon: Icon }, index) => (
        <button
          key={`sidebar-${index + 3}`}
          className="w-14 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"
        >
          <Icon className="w-4 h-4 text-gray-600 leading-none" />
        </button>
      ))}
    </div>
  )
}
