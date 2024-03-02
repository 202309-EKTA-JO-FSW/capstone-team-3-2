'use client'

import * as z from 'zod'
import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterSchema } from '@/schemas'
import { CardWrapper } from "./card-wrapper"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import axios from 'axios';

export const RegisterForm = ({ mainHeader }) => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: "",
            password: "",
            phoneNumber: '',
        }

    })

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setSuccess('');
        setError('');

        startTransition(async () => {
            try {
                const response = await axios.post('http://localhost:3001/api/users/register/', {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    phoneNumber: values.phoneNumber,
                });

                setSuccess(response.data.message);
                console.log(response.data.message);
                // form.reset({
                //     firstName: '',
                //     lastName: '',
                //     email: '',
                //     password: '',
                //     phoneNumber: '',
                // });
            } catch (error) {
                console.error('Error:', error.response.data.message);
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
                                name='phoneNumber'
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
                                                    placeholder='07x-xxxx-xxx'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
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

    )

}