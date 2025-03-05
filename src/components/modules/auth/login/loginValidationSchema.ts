import { z } from "zod";

export const loginValidationSchema = z.object({
  identifier: z
    .union([
      z.string().email("Invalid Email Address"),
      z
        .string()
        .regex(
          /^[0-9]{10,15}$/,
          "Phone number must be between 10 and 15 digits"
        ),
    ])
    .refine((value) => value.trim() !== "", {
      message: "User Email or Phone is Required!",
    }),
  password: z
    .string({ required_error: "User Password is Required!" })
    .min(8, "Password Must be 8 Characters"),
});
