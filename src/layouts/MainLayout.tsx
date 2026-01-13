import { Outlet } from 'react-router'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-[480px] min-h-screen bg-white shadow-lg">
        <Outlet />
      </div>
    </div>
  )
}
