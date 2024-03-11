"use client"
import React from 'react';
import withAuth from '@/components/withAuth';

function Test({ signOut }) {
    return (
        <div>
            Page
            <br />
            <button onClick={signOut}>Click me to sign out</button>
        </div>
    );
}

export default withAuth(Test);
