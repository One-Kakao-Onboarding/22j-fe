import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { useNavigationDirection } from "@/hooks/use-navigation-direction";


interface PageWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const PageWrapper = ({ children, ...props }: PageWrapperProps) => {
  const direction = useNavigationDirection()

  // depth가 증가하면 오른쪽에서, 감소하면 왼쪽에서 슬라이드
  const initialX = direction === 'forward' ? '100%' : '-100%'
  const exitX = direction === 'forward' ? '-100%' : '100%'

  return (
    <motion.div
      initial={{ x: initialX }}
      animate={{ x: 0 }}
      exit={{ x: exitX }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      // 부모인 MainLayout의 480px 컨테이너를 기준으로 꽉 차게 됨
      className="absolute inset-0 w-full max-w-[480px] h-full bg-white overflow-y-auto"
      {...props}
    >
      {children}
    </motion.div>    
  )
}

export default PageWrapper;