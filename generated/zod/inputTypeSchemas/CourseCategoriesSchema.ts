import { z } from 'zod';

export const CourseCategoriesSchema = z.enum(['development','business','finance','software','productivity','design','marketing','health','music','teaching','academics']);

export type CourseCategoriesType = `${z.infer<typeof CourseCategoriesSchema>}`

export default CourseCategoriesSchema;
