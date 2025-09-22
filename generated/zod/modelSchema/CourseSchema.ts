import { z } from 'zod';
import { LevelSchema } from '../inputTypeSchemas/LevelSchema'
import { CourseCategoriesSchema } from '../inputTypeSchemas/CourseCategoriesSchema'
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'

/////////////////////////////////////////
// COURSE SCHEMA
/////////////////////////////////////////

export const CourseSchema = z.object({
  level: LevelSchema,
  category: CourseCategoriesSchema,
  status: StatusSchema,
  id: z.string(),
  title: z.string(),
  smallDescription: z.string(),
  description: z.string(),
  fileKey: z.string(),
  price: z.number(),
  duration: z.number(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string().nullish(),
})

export type Course = z.infer<typeof CourseSchema>

export default CourseSchema;
