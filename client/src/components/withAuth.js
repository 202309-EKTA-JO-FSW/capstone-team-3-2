"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const withAuth = (WrappedComponent) => {
    return ({ ...props }) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        const [authenticated, setAuthenticated] = useState(false);

        useEffect(() => {
            const isAuthenticated = () => {
                if (typeof window !== 'undefined') {
                    let token = localStorage.getItem('token');
                    let Id = localStorage.getItem('Id')


                    return token !== null;
                }
                return false;
            };

            const checkAuth = async () => {
                if (!isAuthenticated()) {
                    router.push('/auth/login');
                } else {
                    setLoading(false);
                    setAuthenticated(true);
                }
            };

            checkAuth();
        }, [router]);

        const signOut = () => {
            localStorage.removeItem('token');
            router.push('/auth/login');
        };

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!authenticated) {
            return <div>Please sign in</div>;
        }

        return <WrappedComponent {...props} signOut={signOut} />;
    };
};

export default withAuth;
