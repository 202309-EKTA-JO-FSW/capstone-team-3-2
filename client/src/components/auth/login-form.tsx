'use client'
import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schemas';
import { CardWrapper } from "./card-wrapper";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const LoginForm = ({ mainHeader }) => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isPending, setIsPending] = useState(false);

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setSuccess('');
        setError('');
        setIsPending(true);

        try {
            const response = await axios.post('https://capstone-team-3-2.onrender.com/api/users/login/', {
                email: values.email,
                password: values.password,
            });

            setSuccess(response.data.message);
            localStorage.setItem('token', response.data.token);
            const Id = response.data.user._id

            localStorage.setItem('Id', response.data.user._id)

            if (response.data.user.role === 'customer') {
                router.push(`/pages/customer`);

            } else if (response.data.user.role === 'restaurant') {
                router.push(`/pages/restaurant`);

            }

        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <CardWrapper
            mainHeader={mainHeader}
            headerLabel="Welcome back"
            backButtonLabel="Don't have account? YET"
            backButtonHref="/auth/register/customer"
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
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
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
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
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
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    >
                        {isPending ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
