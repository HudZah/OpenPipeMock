import { z } from 'zod';

export const taskSchema = z.object({
  name: z.string(),
  createdAt: z.string(),
  models: z.number(),
  size: z.number(),
});

export type Task = z.infer<typeof taskSchema>;
