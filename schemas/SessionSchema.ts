import { z } from 'zod'

export const SessionSchema = z.object({
  expiresAt: z.date(),
  token: z.string(),
  ipAddress: z.string().nullish(),
  userAgent: z.string().nullish(),
  userId: z.string(),
})

export type Session = z.infer<typeof SessionSchema>

export default SessionSchema
