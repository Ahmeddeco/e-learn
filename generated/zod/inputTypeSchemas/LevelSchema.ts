import { z } from 'zod';

export const LevelSchema = z.enum(['beginner','intermediate','advanced']);

export type LevelType = `${z.infer<typeof LevelSchema>}`

export default LevelSchema;
