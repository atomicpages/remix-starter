import { z } from "zod";

export const createAccountSchema = z
  .object({
    name: z.string().trim().min(5),
    email: z.string().trim().email(),
    password: z.string().trim().min(8),
    confirmPassword: z.string().trim().min(8),
    company: z
      .string()
      .trim()
      .nullish()
      .refine(
        (data) => {
          return !data || data.length > 5;
        },
        { message: "A valid company name must be used" },
      ),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    },
  );
