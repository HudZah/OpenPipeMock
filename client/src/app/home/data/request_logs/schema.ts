import { z } from 'zod';

export const taskSchema = z.object({
  sentAt: z.string(),
  model: z.string(),
  duration: z.number(),
  inputTokens: z.number(),
  outputTokens: z.number(),
  cost: z.number(),
  status: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
