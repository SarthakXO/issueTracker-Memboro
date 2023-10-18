import { z } from "zod"; //for data validation

export const createIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is too small")
    .max(255, "Title should be shorter"),
  description: z.string().min(1, "Description is required"),
});
