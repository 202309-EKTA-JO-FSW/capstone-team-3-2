import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is required',
    }),
    password: z.string().min(1, {
        message: 'Password is required',
    }
    )
});

export const RegisterSchema = z.object({
    firstName: z.string()
        .min(1, { message: 'First Name is required' })
        .refine((val) => /^[a-zA-Z]+$/.test(val.trim()), {
            message: 'First Name must contain only letters',
        })
        .refine((val) => !/\s/.test(val), {
            message: 'First Name cannot contain spaces',
        }),

    lastName: z.string()
        .min(1, { message: 'Last Name is required' })
        .refine((val) => /^[a-zA-Z]+$/.test(val.trim()), {
            message: 'Last Name must contain only letters',
        })
        .refine((val) => !/\s/.test(val), {
            message: 'Last Name cannot contain spaces',
        }),

    email: z.string().email({
        message: 'Email is required',
    }),

    password: z.string().min(6, {
        message: 'Minimum 6 characters required',
    }),

    phoneNumber: z.string()
        .refine((val) => /^\d{10}$/.test(val), {
            message: 'Phone number must be 10 digits',
        }),
});
