import type { Dayjs } from "dayjs"

export type FileType = 'image' | 'document' | 'link' | 'etc'

export type FileTag = {
    id: number,
    description: string,
    createdAt: Dayjs,
    modifiedAt: Dayjs,
}

export type FileItem = {
    id: number,
    fileOverview: string,
    fileType: FileType,
    originalFileName: string,
    savedFileName: string,
    tags: FileTag[],
    categories: string[],
    createdAt: Dayjs,
    modifiedAt: Dayjs,
}