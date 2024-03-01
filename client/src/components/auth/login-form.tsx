'use client'

import * as z from 'zod'
import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schemas'
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

export const LoginForm = ({ mainHeader }) => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }

    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setSuccess('')
        setError('')

        startTransition(async () => {
            try {
                const response = await axios.post('http://localhost:3001/api/users/login/', {
                    email: values.email,
                    password: values.password,
                });
                setSuccess(response.data.message)
                console.log(response.data.message);
            } catch (error) {
                console.error('Error:', error.response.data.message);
                setError(error.response.data.message)

            }
        })
    }


    return (
        <div>
            <CardWrapper
                mainHeader={mainHeader}
                headerLabel="Welcome back"
                backButtonLabel="Don't have account? YET"
                backButtonHref="/auth/register"
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
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            disabled={isPending}
                            type='submit'
                            className='w-full'>
                            Login
                        </Button>
                    </form>
                </Form>

            </CardWrapper>
        </div>

    )

}