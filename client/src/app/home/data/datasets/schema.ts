import { z } from 'zod';

export const taskSchema = z.object({
  name: z.string(),
  createdAt: z.string(),
  models: z.number(),
  size: z.number(),
  status: z.string(),
  sentAt: z.string(),
  model: z.string(),
  duration: z.number(),
  inputTokens: z.number(),
  outputTokens: z.number(),
  cost: z.number(),
});

export type Task = z.infer<typeof taskSchema>;
