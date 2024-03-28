'use client'

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import MyNavbar from "@/components/MyNavbar";
import withAuth from "@/components/withAuth";
import { Container, Col, Row } from "reactstrap";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Check if running in the browser before accessing localStorage
        if (typeof window !== 'undefined') {
            const storedId = localStorage.getItem('Id');
            // Do something with storedId if needed
        }
    }, []);
    const storedId = typeof window !== 'undefined' ? localStorage.getItem('Id') : null;

    return (
        <main>
            <MyNavbar homePage={'customer'} Id={storedId} />
            <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                <Container>
                    <Row>
                        {children}
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Container>
            </div>
        </main>
    );
};

export default CustomerLayout;
