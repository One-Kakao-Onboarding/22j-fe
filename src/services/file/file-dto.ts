import z from "zod";

export type UploadFileRequest = {
    file: File;
};

export const UploadFileResponseSchema = z.object({
    id: z.string(),
});

export type UploadFileResponse = z.infer<typeof UploadFileResponseSchema>;
