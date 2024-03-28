"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import * as z from "zod";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiderRegisterSchema } from "@/schemas";
import { CardWrapper } from "./card-wrapper";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import axios from "axios";

interface RegisterFormProps {
    mainHeader: string,
}

export const RegisterForm = ({ mainHeader }: RegisterFormProps) => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RiderRegisterSchema>>({
        resolver: zodResolver(RiderRegisterSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: "",
            password: "",
            phone: '',
            status: "",
            license: "",
            nationalityId: "",
            location: '',
            vehicleNo: "",
            image: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof RiderRegisterSchema>) => {
        setSuccess("");
        setError("");
        console.log(values);

        startTransition(async () => {
            try {
                const response = await axios.post(
                    "https://capstone-team-3-2.onrender.com/api/users/rider/register/",
                    {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password,
                        phone: values.phone,
                        status: values.status,
                        license: values.license,
                        nationalityId: values.nationalityId,
                        location: [40.7128, -74.0060],
                        vehicleNo: values.vehicleNo,
                        Image: values.image,
                    }
                );

                setSuccess(response.data.message);
                console.log(response.data.message);
                form.reset({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    phone: '',
                    status: '',
                    license: '',
                    nationalityId: '',
                    location: '',
                    vehicleNo: '',
                    image: '',
                });
            } catch (error: any) {
                setError(error.response?.data?.message || 'An error occurred');
            }
        });
    };

    return (
        <div>
            <CardWrapper
                mainHeader={mainHeader}
                headerLabel="Create an account"
                backButtonLabel="Already have an account?"
                backButtonHref="/auth/login"
                showSocial
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-6'
                    >
                        <div className='space-y-6'>
                            <FormField
                                control={form.control}
                                name='firstName'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                First Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='john'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                control={form.control}
                                name='lastName'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Last Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='doe'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='john.doe@example.com'
                                                    type='email'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='******'
                                                    type='password'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                control={form.control}
                                name='phone'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Phone Number
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='7x-xxxx-xxx'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                control={form.control}
                                name='license'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                License
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='XXX#1234'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name='nationalityId'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Nationality-ID
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='X123456789'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />


                            <FormField
                                control={form.control}
                                name='vehicleNo'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Vehicle-Number
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='XX-12345'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name='location'
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                location
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='Location'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                control={form.control}
                                name='status'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                {...field}
                                                disabled={isPending}

                                            >
                                                <SelectTrigger
                                                >
                                                    <SelectValue placeholder="Select a Status" />
                                                </SelectTrigger>
                                                <SelectContent  >
                                                    <SelectItem value="Available">Available</SelectItem>
                                                    <SelectItem value="Delivering">Delivering</SelectItem>
                                                    <SelectItem value="Offline">Offline</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Profile Image</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    id="picture"
                                                    type="file"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            disabled={isPending}
                            type='submit'
                            className='w-full'>
                            Create an account
                        </Button>
                    </form>
                </Form>

            </CardWrapper>
        </div>
    );
};
