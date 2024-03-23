"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RestaurantRegisterSchema } from "@/schemas";
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



export const RegisterForm = ({ mainHeader }) => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RestaurantRegisterSchema>>({
        resolver: zodResolver(RestaurantRegisterSchema),
        defaultValues: {
            title: '',
            email: '',
            password: '',
            phone: '',
            image: '',
            license: '',
            street: '',
            area: '',
            cuisine: '',
            buildingNo: '',
            rate: '',
            deliveryTime: '',
            deliveryFee: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof RestaurantRegisterSchema>) => {
        setSuccess("");
        setError("");
        console.log(values);


        startTransition(async () => {
            try {
                const response = await axios.post(
                    "https://capstone-team-3-2.onrender.com/api/users/restaurant/register/",
                    {
                        title: values.title,
                        email: values.email,
                        password: values.password,
                        phone: values.phone,
                        image: values.image,
                        license: values.license,
                        street: values.street,
                        buildingNo: values.buildingNo,
                        area: values.area,
                        cuisine: ["Italian", "Mexican"],
                        rate: values.rate,
                        deliveryTime: values.deliveryTime,
                        deliveryFee: values.deliveryFee,
                    }
                );

                setSuccess(response.data.message);
                console.log(response.data.message);
                form.reset({
                    title: '',
                    email: '',
                    password: '',
                    phone: '',
                    image: '',
                    license: '',
                    street: '',
                    buildingNo: '',
                    area: '',
                    cuisine: '',
                    rate: '',
                    deliveryTime: '',
                    deliveryFee: '',
                });
            } catch (error) {
                console.error("Error:", error.response.data.message);
                setError(error.response.data.message);
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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="restaurant name"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />


                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="john.doe@example.com"
                                                    type="email"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="******"
                                                    type="password"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="7x-xxxx-xxx"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="license"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>License</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="XXX#1234"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="street"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Street Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="St. Name - City - Country"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />


                            <FormField
                                control={form.control}
                                name="buildingNo"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Building Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="123"
                                                    type="number"
                                                    min={0}

                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="area"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Area</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Eg., Aqaba"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="cuisine"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Cuisine</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="E.g., American, Mansaf"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="deliveryTime"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Delivery Time</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Delivery time in minutes"
                                                    type="number"
                                                    min={1}

                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="deliveryFee"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Delivery Fee</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="in JOD"
                                                    type="number"
                                                    min={0}

                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="rate"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Rate</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="1-5"
                                                    type="number"
                                                    min={1}
                                                    max={5}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Delivery Fee</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    id="picture" type="file"
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
                        <Button disabled={isPending} type="submit" className="w-full">
                            Create an account
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
};
