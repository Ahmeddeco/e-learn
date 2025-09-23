import CourseSchema from "@/schemas/CourseSchema"
import { parseWithZod } from "@conform-to/zod"

/* --------------------------- createCourseAction --------------------------- */
export const createCourseAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: CourseSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  console.log('submission from createCourseAction', submission)
}