import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  AWS_REGION: z.string(),
});

export type Env = z.infer<typeof envSchema>;
