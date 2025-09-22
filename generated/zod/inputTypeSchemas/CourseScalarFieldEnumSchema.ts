import { z } from 'zod';

export const CourseScalarFieldEnumSchema = z.enum(['id','title','smallDescription','description','fileKey','price','duration','level','category','slug','status','createdAt','updatedAt','userId']);

export default CourseScalarFieldEnumSchema;
