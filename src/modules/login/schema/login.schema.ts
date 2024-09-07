import { createSchemaFieldRule } from "antd-zod";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is Required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
  // .regex(
  //   /[!@#$%^&*(),.?":{}|<>]/,
  //   "Password must contain at least one special character"
  // ),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginRule = createSchemaFieldRule(loginSchema);
