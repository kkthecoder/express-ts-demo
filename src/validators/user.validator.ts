import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Name should be minimum three characters long"),
  email: z.email("Invalid email address"),
  age: z.number().int().min(0).optional(),
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
