import { z } from 'zod'
import { LevelSchema } from '../generated/zod/inputTypeSchemas/LevelSchema'
import { StatusSchema } from '../generated/zod/inputTypeSchemas/StatusSchema'
import CourseCategoriesSchema from '@/generated/zod/inputTypeSchemas/CourseCategoriesSchema'

export const CourseSchema = z.object({
  level: LevelSchema,
  status: StatusSchema,
  category: CourseCategoriesSchema,
  title: z.string().min(3).max(100),
  description: z.string().min(3),
  fileKey: z.string().min(1),
  price: z.number().min(1),
  duration: z.number().min(1).max(500),
  smallDescription: z.string().min(3),
  slug: z.string().min(3),
  userId: z.string().nullish(),
})

export type Course = z.infer<typeof CourseSchema>

export default CourseSchema
