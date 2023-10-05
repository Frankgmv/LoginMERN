import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "User is required field"
    }),
    email: z.string({
        required_error: "Email is required field"
    }).email({
        required_error: "Invalid email address"
    }),
    password: z.string({
        required_error: "Password is required field"
    }).min(6, {
        message: 'password must be at least 8 characters long.',
    })
})


export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required field"
    }).email({
        required_error: "Invalid email address"
    }),
    password: z.string({
        required_error: "Password is required field"
    }).min(6, {
        message: 'password must be at least 8 characters long.',
    })
})