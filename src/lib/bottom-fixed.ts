/**
 * 모바일에서는 뷰포트 기준 최하단에 고정,
 * PC에서는 컨테이너 내부에 위치하도록 하는 클래스
 * 삼성인터넷 바텀바 등을 고려한 safe-area-inset-bottom 포함
 */
export const bottomFixedContainer = `
  fixed bottom-0 left-0 right-0 
  md:absolute md:left-1/2 md:-translate-x-1/2 md:max-w-[480px] md:w-full 
  pb-[env(safe-area-inset-bottom)]
`
