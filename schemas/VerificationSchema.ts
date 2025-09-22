import { z } from 'zod'

export const VerificationSchema = z.object({
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.date(),
})

export type Verification = z.infer<typeof VerificationSchema>

export default VerificationSchema
