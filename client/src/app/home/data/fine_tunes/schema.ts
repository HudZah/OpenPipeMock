import { z } from 'zod';

export const taskSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  baseModel: z.string(),
  trainingSize: z.number(),
  dataset: z.string(),
  status: z.number(),
  status_desc: z.string(),
  sentAt: z.string(),
  model: z.string(),
  duration: z.number(),
  inputTokens: z.number(),
  outputTokens: z.number(),
  cost: z.number(),
});

export type Task = z.infer<typeof taskSchema>;
