import z from "zod";

export type UploadFileRequest = {
    file: File;
};

export const UploadFileResponseSchema = z.object({
    createdAt: z.string(),
    modifiedAt: z.string().nullable(),
    id: z.number(),
    fileOverview: z.string(),
    category: z.array(z.string()),
});

export type UploadFileResponse = z.infer<typeof UploadFileResponseSchema>;
