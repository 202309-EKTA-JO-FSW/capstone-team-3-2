import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required" })
    .refine((val) => /^[a-zA-Z]+$/.test(val.trim()), {
      message: "First Name must contain only letters",
    })
    .refine((val) => !/\s/.test(val), {
      message: "First Name cannot contain spaces",
    }),

  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .refine((val) => /^[a-zA-Z]+$/.test(val.trim()), {
      message: "Last Name must contain only letters",
    })
    .refine((val) => !/\s/.test(val), {
      message: "Last Name cannot contain spaces",
    }),

  email: z.string().email({
    message: "Email is required",
  }),

  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),

  phone: z.string().refine((val) => /^\d{9}$/.test(val), {
    message: "Phone number must be 9 digits",
  }),
});

export const RiderRegisterSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required" })
    .refine((val) => /^[a-zA-Z]+$/.test(val.trim()), {
      message: "First Name must contain only letters",
    })
    .refine((val) => !/\s/.test(val), {
      message: "First Name cannot contain spaces",
    }),

  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .refine((val) => /^[a-zA-Z]+$/.test(val.trim()), {
      message: "Last Name must contain only letters",
    })
    .refine((val) => !/\s/.test(val), {
      message: "Last Name cannot contain spaces",
    }),

  email: z.string().email({
    message: "Email is required",
  }),

  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),

  phone: z.string().refine((val) => /^\d{9}$/.test(val), {
    message: "Phone number must be 9 digits",
  }),
  status: z
    .string()
    .min(1, { message: "Status is required" })
    .refine((value) => ["Available", "Delivering", "Offline"].includes(value), {
      message: "Invalid status",
    }),

  license: z.string().min(1, { message: "License is required" }),

  nationalityId: z.string().min(1, { message: "Nationality ID is required" }),

  location: z
    .string()
    .min(2, { message: "Location should have at least 2 numbers" }),

  vehicleNo: z.string().min(1, { message: "Vehicle Number is required" }),
  
  image: z.string(),
  
});

export const RestaurantRegisterSchema = z.object({
  title: z
  .string()
  .min(1, { message: "Title is required" })
  .refine((val) => /^[a-zA-Z]+$/.test(val.trim()), {
    message: "Title must contain only letters",
  })
  .refine((val) => !/\s/.test(val), {
    message: "Title cannot contain spaces",
  }),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),

  phone: z.string().refine((val) => /^\d{9}$/.test(val), {
    message: "Phone number must be 9 digits",
  }),
  image: z.string().min(1, "Image is required"),

  license: z.string().min(1, "License is required"),
  street: z.string().min(1, "Street is required"),
  buildingNo: z
    .string()
    // .positive("Building number must be positive")
    .min(1, "Building number is required"),
  area: z.string().min(1, "Area is required"),
  cuisine: z.string().min(1, "Cuisine is required"),
  rate: z.string().min(0).max(5).default('0'),
  deliveryTime: z
    .string()
    // .positive("Delivery time must be positive")
    .min(1, "Delivery time is required"),
  deliveryFee: z
    .string()
    // .positive("Delivery fee must be positive")
    .min(1, "Delivery fee is required"),
});
