export function getPathDepth(pathname: string): number {
    // 슬래시로 분리하고 빈 문자열 제거
    const segments = pathname.split('/').filter(Boolean);
    return segments.length;
}
  