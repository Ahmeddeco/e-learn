import { z } from 'zod'

export const UserSchema = z.object({
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullish(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema
