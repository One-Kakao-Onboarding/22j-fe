import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router";
import { useState } from "react";
import { NavigationDirectionContext, type NavigationDirection } from "@/hooks/use-navigation-direction";
import { getPathDepth } from "@/lib/path";

export function MainLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  const [direction, setDirection] = useState<NavigationDirection>('forward')

  // pathname이 변경되었을 때 direction 계산 (렌더링 중 처리)
  // React 18 권장 패턴: 렌더링 중 조건부 setState
  if (location.pathname !== prevPathname) {
    const prevDepth = getPathDepth(prevPathname)
    const currentDepth = getPathDepth(location.pathname)
    const isGoingForward = currentDepth > prevDepth
    setDirection(isGoingForward ? 'forward' : 'backward')
    setPrevPathname(location.pathname)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-[480px] min-h-screen bg-white shadow-lg relative overflow-hidden">
        <NavigationDirectionContext.Provider value={direction}>
          <AnimatePresence mode="popLayout" initial={false}>
            <div 
              key={location.pathname} 
              className="absolute inset-0 w-full h-full"
            >
              {outlet}
            </div>
          </AnimatePresence>
        </NavigationDirectionContext.Provider>
      </div>
    </div>
  )
}
