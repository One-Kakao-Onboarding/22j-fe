/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // 다른 환경변수 추가 시 여기에 타입 정의
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
