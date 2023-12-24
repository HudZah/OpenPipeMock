import { z } from 'zod';

export const taskSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  baseModel: z.string(),
  trainingSize: z.number(),
  dataset: z.string(),
  status: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
