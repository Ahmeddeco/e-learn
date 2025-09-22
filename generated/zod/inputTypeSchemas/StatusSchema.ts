import { z } from 'zod';

export const StatusSchema = z.enum(['draft','published','archived']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema;
